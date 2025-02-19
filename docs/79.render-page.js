exports.ids = [79];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/layers/PointCloudLayer.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/PointCloudLayer.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PopupTemplate.js */ "../../node_modules/@arcgis/core/PopupTemplate.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "../../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/object.js */ "../../node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ "../../node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ "../../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "../../node_modules/@arcgis/core/layers/mixins/ArcGISService.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "../../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "../../node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "../../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/SceneService.js */ "../../node_modules/@arcgis/core/layers/mixins/SceneService.js");
/* harmony import */ var _pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pointCloudFilters/typeUtils.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/commonProperties.js */ "../../node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/Field.js */ "../../node_modules/@arcgis/core/layers/support/Field.js");
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/fieldProperties.js */ "../../node_modules/@arcgis/core/layers/support/fieldProperties.js");
/* harmony import */ var _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../popup/ExpressionInfo.js */ "../../node_modules/@arcgis/core/popup/ExpressionInfo.js");
/* harmony import */ var _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../renderers/support/pointCloud/typeUtils.js */ "../../node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../support/popupUtils.js */ "../../node_modules/@arcgis/core/support/popupUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const N=_core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.layers.PointCloudLayer"),R=Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_27__["defineFieldProperties"])();let O=class extends(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_7__["MultiOriginJSONMixin"])(Object(_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__["APIKeyMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_17__["default"])))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"];return"FieldTypeInteger"===e.type&&((e=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,r,t,o){Object(_core_object_js__WEBPACK_IMPORTED_MODULE_8__["setDeepValue"])("layerDefinition.drawingInfo.renderer",e.write(null,o),r)}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["throwIfAbortError"]).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_30__["createPopupTemplate"])(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r}formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"]({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"]({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["join"])(this.parsedUrl.path,`./statistics/${o.key}`);return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&N.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&N.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({type:["PointCloudLayer"]})],O.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__["popupEnabled"])],O.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{name:"popupInfo",write:!0}})],O.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({readOnly:!0,json:{read:!1}})],O.prototype,"defaultPopupTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],O.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({type:["show","hide"]})],O.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({types:[_pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_24__["types"]],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],O.prototype,"filters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({type:[_support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]]})],O.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])(R.fieldsIndex)],O.prototype,"fieldsIndex",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__["reader"])("service","fields",["fields","attributeStorageInfo"])],O.prototype,"readServiceFields",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])(R.outFields)],O.prototype,"outFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({readOnly:!0})],O.prototype,"attributeStorageInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__["elevationInfo"])],O.prototype,"elevationInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__["legendEnabled"])],O.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({types:_renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_29__["types"],json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:_renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_29__["types"]},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],O.prototype,"renderer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__["writer"])("renderer")],O.prototype,"writeRenderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),O=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__["subclass"])("esri.layers.PointCloudLayer")],O);var _=O;/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PointCloudFilter.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var d;let p=d=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new d({field:this.field,requiredClearBits:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.requiredClearBits),requiredSetBits:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.requiredSetBits)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["Integer"]],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["Integer"]],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudBitfieldFilter:"bitfield"})],p.prototype,"type",void 0),p=d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);var u=p;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "../../node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(r){super(r),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.pointCloudFilters.PointCloudFilter")],t);var l=t;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PointCloudFilter.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n;let p=n=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(r){super(r),this.includedReturns=[],this.type="return"}clone(){return new n({field:this.field,includedReturns:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.includedReturns)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"includedReturns",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudReturnFilter:"return"})],p.prototype,"type",void 0),p=n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p);var u=p;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PointCloudFilter.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let l=p=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new p({field:this.field,mode:this.mode,values:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.values)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"mode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudValueFilter:"value"})],l.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"values",void 0),l=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudValueFilter")],l);var u=l;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js ***!
  \*****************************************************************************************************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return e; });
/* harmony import */ var _PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointCloudBitfieldFilter.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js");
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointCloudFilter.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js");
/* harmony import */ var _PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointCloudReturnFilter.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js");
/* harmony import */ var _PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PointCloudValueFilter.js */ "../../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e={key:"type",base:_PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"],typeMap:{value:_PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__["default"],bitfield:_PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_0__["default"],return:_PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__["default"]}};


/***/ }),

/***/ "../../node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PointCloudRenderer.js */ "../../node_modules/@arcgis/core/renderers/PointCloudRenderer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var i;let c=i=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new i({...this.cloneProperties(),field:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.field)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.PointCloudRGBRenderer")],c);var n=c;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "../../node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js ***!
  \*********************************************************************************************************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return i; });
/* harmony import */ var _PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../PointCloudClassBreaksRenderer.js */ "../../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js");
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PointCloudRenderer.js */ "../../node_modules/@arcgis/core/renderers/PointCloudRenderer.js");
/* harmony import */ var _PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PointCloudRGBRenderer.js */ "../../node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js");
/* harmony import */ var _PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PointCloudStretchRenderer.js */ "../../node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js");
/* harmony import */ var _PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PointCloudUniqueValueRenderer.js */ "../../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i={key:"type",base:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],typeMap:{"point-cloud-class-breaks":_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_0__["default"],"point-cloud-rgb":_PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],"point-cloud-stretch":_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"],"point-cloud-unique-value":_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"]},errorContext:"renderer"};


/***/ })

};;
//# sourceMappingURL=79.render-page.js.map