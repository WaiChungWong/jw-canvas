(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(2),s=n(4),r=n(3),o=n(5),c=n(0),u=n.n(c),h=n(7),l=n(10),v=n(8),d=n.n(v),f=n(9),m=!!n.n(f).a&&{passive:!0},w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(r.a)(t).call(this,e)))._resizeHandler=d()(function(){return n._updateDimensions()},!0),n}return Object(o.a)(t,e),Object(a.a)(t,[{key:"_updateDimensions",value:function(){var e=this.canvas,t=this.props,n=e.offsetWidth,i=e.offsetHeight;t.maintainPixelSize&&(e.width=n,e.height=i,t.onResize&&t.onResize(n,i))}},{key:"_mount",value:function(){var e=this.canvas,t=this.props;window.addEventListener("resize",this._resizeHandler,m),e.addEventListener("resize",this._resizeHandler,m),window.MutationObserver&&(this.mutationObserver=new window.MutationObserver(this._resizeHandler),this.mutationObserver.observe(e,{attributes:!0})),e.width=e.offsetWidth,e.height=e.offsetHeight,setTimeout(function(){e.width===e.offsetWidth&&e.height===e.offsetHeight||(e.width=e.offsetWidth,e.height=e.offsetHeight,t.onResize&&t.onResize(e.offsetWidth,e.offsetHeight))})}},{key:"_unmount",value:function(){var e=this.canvas;window.removeEventListener("resize",this._resizeHandler),e.removeEventListener("resize",this._resizeHandler),window.MutationObserver&&this.mutationObserver.disconnect()}},{key:"getCanvasElement",value:function(){return this.canvas}},{key:"getContext",value:function(){return this.canvas.getContext(this.props.contextType)}},{key:"getImageData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.canvas.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.canvas.height;return this.getContext().getImageData(e,t,n,i)}},{key:"componentDidMount",value:function(){this._mount()}},{key:"componentWillUnmount",value:function(){this._unmount()}},{key:"render",value:function(){var e=this,t=this.props,n=(t.maintainPixelSize,t.onResize,t.contextType,Object(l.a)(t,["maintainPixelSize","onResize","contextType"]));return u.a.createElement("canvas",Object.assign({ref:function(t){return e.canvas=t}},n))}}]),t}(c.Component);w.defaultProps={maintainPixelSize:!0,contextType:"2d"};var p=w,g=(n(17),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.draw1(),this.draw2()}},{key:"draw1",value:function(){this.draw(this.canvas1)}},{key:"draw2",value:function(){this.draw(this.canvas2)}},{key:"draw",value:function(e){var t=e.getContext(),n=e.getCanvasElement(),i=n.width/2,a=n.height/2;t.beginPath(),t.arc(i,a,70,0,2*Math.PI,!1),t.fillStyle="#00FF00",t.fill(),t.lineWidth=5,t.strokeStyle="#003300",t.stroke()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("div",{className:"canvas-wrapper"},u.a.createElement("span",{className:"title"},"Draw once only"),u.a.createElement(p,{ref:function(t){return e.canvas1=t},id:"canvas1",maintainPixelSize:!1,onResize:function(){return e.draw1()}})),u.a.createElement("div",{className:"canvas-wrapper"},u.a.createElement("span",{className:"title"},"Redraw on resize"),u.a.createElement(p,{ref:function(t){return e.canvas2=t},id:"canvas2",onResize:function(){return e.draw2()}})))}}]),t}(c.Component));Object(h.render)(u.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.1435c657.chunk.js.map