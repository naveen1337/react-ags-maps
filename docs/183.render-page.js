exports.ids = [183];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Colorize.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Colorize.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Colorize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colorize", function() { return r; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../VertexStream.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/VertexStream.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:o,painter:a}=e,{materialManager:n}=a,l=this._programDesc,c=this._quad,u=r.colorMatrix;c.bind();const p=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,p),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const h=n.getProgram(e,l);o.useProgram(h),o.bindTexture(p,2),h.setUniformMatrix4fv("u_coefficients",u),h.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(r,s,i){const{context:o}=r;this._layerFBOTexture&&this._size[0]===s&&this._size[1]===i||(this._size[0]=s,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(s,i):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](o,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:s,height:i}),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__["default"](o,[-1,-1,1,-1,-1,1,1,1])))}}


/***/ })

};;
//# sourceMappingURL=183.render-page.js.map