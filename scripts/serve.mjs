import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, resolve, sep } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const folder = process.argv[2] === 'dist' ? 'dist' : 'site';
const webRoot = resolve(root, folder);
const port = Number(process.env.PORT || 4173);
const mime = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

async function findFile(pathname) {
  const relative = decodeURIComponent(pathname).replace(/^\/+/, '');
  const candidate = resolve(webRoot, relative);
  if (candidate !== webRoot && !candidate.startsWith(webRoot + sep)) return null;
  const choices = pathname.endsWith('/')
    ? [join(candidate, 'index.html')]
    : [candidate, candidate + '.html', join(candidate, 'index.html')];
  for (const choice of choices) {
    try {
      if ((await stat(choice)).isFile()) return choice;
    } catch { /* try next route */ }
  }
  return null;
}

createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    if (pathname.startsWith('/api/')) {
      response.writeHead(501, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ error: 'API backend is not configured in this frontend repository.' }));
      return;
    }
    const file = await findFile(pathname);
    if (!file) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }
    const content = await readFile(file);
    response.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Bad request');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Serving ${folder}/ at http://127.0.0.1:${port}`);
});
