import{j as e,M as o,a as h,b as d,r as n,d as m}from"./index-B-otkOn2.js";function g({className:c="",size:s="medium"}){const a={small:{imageSize:"36px"},medium:{imageSize:"52px"},large:{imageSize:"76px"}},{imageSize:l}=a[s];return e.jsxs("div",{className:`kaval-logo ${c}`,style:{width:l,height:l},children:[e.jsx("img",{className:"kaval-logo-mark",src:o,alt:"Kaval"}),e.jsx("style",{children:`
        .kaval-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          flex: 0 0 auto;
        }

        .kaval-logo-mark {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `})]})}const u=["2,500 checks per month","300 deep investigations","Family protection for up to 5","All 16 verification tools"];function x(){const{usage:c,isLoading:s,markPlanSelectionSeen:a}=h(),l=d(),t=n.useRef(!1);n.useEffect(()=>{s||t.current||c?.plan_selection_seen===!0||(t.current=!0,a().catch(()=>{}))},[s,a,c?.plan_selection_seen]);const r=async()=>{m(),await a(),l("/dashboard",{replace:!0})};return e.jsx("div",{className:"early-access-page",children:e.jsxs("div",{className:"early-access-shell",children:[e.jsx(g,{size:"small"}),e.jsx("div",{className:"early-access-badge",children:"Early Access"}),e.jsx("h1",{className:"early-access-title",children:"You have full access, free"}),e.jsx("p",{className:"early-access-subtitle",children:"Everyone gets the complete Kaval experience while we're in early access. No credit card, no catch."}),e.jsx("div",{className:"early-access-highlights",children:u.map(i=>e.jsxs("span",{className:"early-access-highlight",children:["✓"," ",i]},i))}),e.jsx("button",{type:"button",className:"early-access-cta",onClick:r,disabled:s,children:s?"Loading access...":"Get started"})]})})}export{x as ChoosePlan};
