(this.webpackJsonpprops=this.webpackJsonpprops||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),s=n.n(o),i=n(7),c=n.n(i),a=(n(14),n(8)),u=n(2),l=n(3),h=n(5),f=n(4),p=(n(15),function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log(this.props),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:["This weeks featured park is ",this.props.parkName]}),Object(r.jsx)("button",{onClick:this.props.functionToDestroyParks,children:"nonononon i hate this park"})]})}}]),n}(o.Component)),j=function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).removeParks=function(e){console.log(e);var n=Object(a.a)(t.state.listOfParks).filter((function(t){return t!==e}));t.setState({listOfParks:n})},t.state={listOfParks:["Sunnybrook","Trinity Bellwoods","Riverdale","earlscourt","duffrin","downsview"]},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Toronto Parks! They are cold right now!"}),this.state.listOfParks.map((function(e,n){return Object(r.jsx)(p,{parkName:e,functionToDestroyParks:function(){t.removeParks(e)}},n)}))]})}}]),n}(o.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),s(t),i(t)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.8d3bddf4.chunk.js.map