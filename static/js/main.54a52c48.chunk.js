(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){e.exports=t.p+"static/media/logo.06e73328.svg"},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(6),c=t.n(o),r=(t(16),t(3)),s=(t(18),t(19),t(4));function i(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function d(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return n.a.createElement("div",{className:"container",style:t},n.a.createElement("h1",{className:"my-3"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:t},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("div",{className:"container"},n.a.createElement("button",{type:"button",onClick:function(){"black"===t.color?(o({color:"white",backgroundColor:"black",border:"0.5px solid white"}),d("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},className:"btn btn-primary"},i)))}function m(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",placeholder:"Enter Text here",id:"myBox",value:o,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},rows:"8"})),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to Uppercase","success")}},"Convert to UpperCase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to Lowercase","success")}},"Convert to LowerCase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c(" "),e.showAlert("Text has been cleared","success")}},"Clear Text")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",null,"Your Text Summary"),n.a.createElement("p",null,o.length>0?o.split(" ").length:0," Words, ",o.length," Characters"),n.a.createElement("p",null,.008*o.split(" ").length," Minutes Read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Enter Something in the text to Preview")))}function u(e){return n.a.createElement("div",null,e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg))}i.defaultProps={title:"Title",aboutText:"About Us"};var h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(i,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#042743",E("Dark Mode has been enabled","success")):(o("light"),document.body.style.backgroundColor="white",E("Light Mode has been enabled","success"))}}),n.a.createElement(u,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/",element:n.a.createElement(m,{heading:"Enter the text to Analyze below",showAlert:E,mode:t})}),n.a.createElement(h.a,{exact:!0,path:"/about",element:n.a.createElement(d,null)})))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,22)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()},7:function(e,a,t){e.exports=t(21)}},[[7,3,2]]]);
//# sourceMappingURL=main.54a52c48.chunk.js.map