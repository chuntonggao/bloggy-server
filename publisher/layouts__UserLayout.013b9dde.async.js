(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{BOD2:function(e,t,a){e.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}},obeJ:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var u=l(a("CtXQ")),o=l(a("p0pE")),n=a("Hx5s"),r=a("Hg0r"),d=l(a("q1tI")),s=a("TJpk"),c=a("ArA+"),f=a("Y2fQ"),i=l(a("trCS")),g=l(a("lhOE")),m=l(a("zwU1")),p=l(a("BOD2")),y=function(e){var t=e.route,a=void 0===t?{routes:[]}:t,l=a.routes,r=void 0===l?[]:l,y=e.children,h=e.location,b=void 0===h?{pathname:""}:h,E=(0,n.getMenuData)(r),v=E.breadcrumb,k=(0,n.getPageTitle)((0,o.default)({pathname:b.pathname,breadcrumb:v,formatMessage:f.formatMessage},e));return d.default.createElement(d.default.Fragment,null,d.default.createElement(s.Helmet,null,d.default.createElement("title",null,k),d.default.createElement("meta",{name:"description",content:k})),d.default.createElement("div",{className:p.default.container},d.default.createElement("div",{className:p.default.lang},d.default.createElement(i.default,null)),d.default.createElement("div",{className:p.default.content},d.default.createElement("div",{className:p.default.top},d.default.createElement("div",{className:p.default.header},d.default.createElement(c.Link,{to:"/"},d.default.createElement("img",{alt:"logo",className:p.default.logo,src:m.default}),d.default.createElement("span",{className:p.default.title},"Bloggy"))),d.default.createElement("div",{className:p.default.desc},"Bloggy \u662f\u897f\u6e56\u533a\u6700\u5177\u5f71\u54cd\u529b\u7684\u535a\u5ba2\u5e73\u53f0")),y),d.default.createElement(n.DefaultFooter,{copyright:(0,f.formatMessage)({id:"app.footer.copyright"}),links:[{key:"GitHub",title:d.default.createElement(u.default,{type:"github"}),href:"https://github.com/chuntonggao/bloggy",blankTarget:!0},{key:"Bloggy Publisher",title:"Bloggy Publisher",href:g.default.BLOGGY_PUBLISHER_BASE_URL,blankTarget:!0},{key:"Bugs & Feedback",title:d.default.createElement(u.default,{type:"bug"}),href:"https://github.com/chuntonggao/bloggy/issues/new",blankTarget:!0}]})))},h=(0,r.connect)(function(e){var t=e.settings;return(0,o.default)({},t)})(y);t.default=h}}]);