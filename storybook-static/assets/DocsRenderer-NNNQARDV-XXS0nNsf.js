import{_ as d}from"./iframe-GTL40xZ2.js";import{r as h,R as o,d as a,C as E,A as R,H as x,D as y}from"./index-SQJc-lGF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-ogXoivrg.js";import"./index-OpicemMp.js";import"./index-PPLHz8o0.js";var c={},m=h;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},e))})},v=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},f={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t==null?void 0:t.components},u=y;return new Promise((i,p)=>{d(()=>import("./index-uOzC7LWO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(({MDXProvider:l})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(u,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{v(e)}}};export{S as DocsRenderer,f as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-uOzC7LWO.js","./index-CFh1n1nf.js","./index-SQJc-lGF.js","./iframe-GTL40xZ2.js","./_commonjsHelpers-5-cIlDoe.js","./index-ogXoivrg.js","./index-OpicemMp.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}