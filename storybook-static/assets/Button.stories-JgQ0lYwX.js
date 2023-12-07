import{d as v,q as _,m as c,o as f,e as x,f as C,t as y,p as D}from"./vue.esm-bundler-lgoReJ42.js";const k=v({__name:"Button",props:["text","color"],setup(e){const n=e,t=_(!1),s=()=>{t.value=!t.value},a=c(()=>t.value?"Button Clicked!":n.text||"Click Me"),B=c(()=>n.color||"black"),b=c(()=>t.value?"lightgreen":"lightblue");return(h,M)=>(f(),x("div",null,[C("button",{style:D({color:B.value,backgroundColor:b.value}),onClick:s},y(a.value),5)]))}}),S=(e,n)=>{const t=e.__vccOpts||e;for(const[s,a]of n)t[s]=a;return t},u=S(k,[["__scopeId","data-v-cbb232e4"]]);k.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"text",type:{name:"undefined"}},{name:"color",type:{name:"undefined"}}],sourceFiles:["/Users/pablo/Documents/storybook-vue/storybook-vue/src/components/Button.vue"]};const E={component:u},o={render:e=>({components:{Button:u},setup(){return{args:e}},template:'<Button v-bind="args" />'}),args:{text:"Click Me",color:"black"}},r={render:e=>({components:{Button:u},setup(){return{args:e}},template:'<Button v-bind="args" />'}),args:{text:"Button Clicked!",color:"red"}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  }),
  args: {
    text: "Click Me",
    color: "black"
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,i,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  }),
  args: {
    text: "Button Clicked!",
    color: "red"
  }
}`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const I=["Default","ButtonClicked"];export{r as ButtonClicked,o as Default,I as __namedExportsOrder,E as default};
