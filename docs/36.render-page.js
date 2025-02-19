exports.ids = [36];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/layers/support/layersCreator.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/layersCreator.js ***!
  \***********************************************************************************************************/
/*! exports provided: populateOperationalLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateOperationalLayers", function() { return n; });
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Collection.js */ "../../node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazyLayerLoader.js */ "../../node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "../../node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/support/featureCollectionUtils.js */ "../../node_modules/@arcgis/core/portal/support/featureCollectionUtils.js");
/* harmony import */ var _portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/support/portalLayers.js */ "../../node_modules/@arcgis/core/portal/support/portalLayers.js");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "../../node_modules/@arcgis/core/renderers/support/styleUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n(e,a,t){if(!a)return;const y=[];for(const r of a){const e=I(r,t);"GroupLayer"===r.layerType?y.push(M(e,r,t)):y.push(e)}const i=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(y);for(const r of i)!r.value||t.filter&&!t.filter(r.value)||e.add(r.value)}const l={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},c={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,r){return d(await T(e,r),e,r)}async function d(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&m(r)&&await G(t,r,a.context),await Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__["loadStyleRenderer"])(t,a.context),t}async function T(e,r){const o=r.context,n=g(o);let l=e.layerType||e.type;!l&&r&&r.defaultLayerType&&(l=r.defaultLayerType);const c=n[l];let s=c?_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"][c]:_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].UnknownLayer;const p=o&&o.portal;if(f(e)){if(e.itemId){const r=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"]({id:e.itemId,portal:p});await r.load();const y=(await Object(_portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_6__["selectLayerClassPath"])(r)).className||"UnknownLayer";s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"][y]}}else"ArcGISFeatureLayer"===l?await Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__["isMapNotesLayer"])(e,p)?s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].MapNotesLayer:await Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__["isRouteLayer"])(e,p)?s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].RouteLayer:m(e)&&(s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo.version&&(s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].UnsupportedLayer);return s()}function m(e){if("ArcGISFeatureLayer"!==e.layerType||f(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function f(e){return"Feature Collection"===e.type}function g(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=c;break;default:r=l}break;default:switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=S;break;default:r=p}}return r}async function M(r,a,t){const y=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__["default"],i=n(y,Array.isArray(a.layers)?a.layers:[],t),L=await r;if(await i,"group"===L.type)return L.layers.addMany(y),L}async function G(e,r,t){const y=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].FeatureLayer,i=await y(),L=r.featureCollection,o=L.showLegend,n=L.layers.map((e=>{const r=new i;return r.read(e,t),null!=o&&r.read({showLegend:o},t),r}));e.layers.addMany(n)}


/***/ }),

/***/ "../../node_modules/@arcgis/core/portal/support/featureCollectionUtils.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/portal/support/featureCollectionUtils.js ***!
  \********************************************************************************************************************/
/*! exports provided: isMapNotesLayer, isRouteLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapNotesLayer", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteLayer", function() { return o; });
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PortalItem.js */ "../../node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portalItemUtils.js */ "../../node_modules/@arcgis/core/portal/support/portalItemUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(e,t){return n(e,t,"notes","Map Notes")}function o(e,t){return n(e,t,"route","Route Layer")}async function n(r,o,n,i){if(!r.layerType||"ArcGISFeatureLayer"!==r.layerType)return!1;if(r.url)return!1;if(r.featureCollectionType&&r.featureCollectionType===n)return!0;if(r.itemId){const n=new _PortalItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]({id:r.itemId,portal:o});return await n.load(),"Feature Collection"===n.type&&Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasTypeKeyword"])(n,i)}return!1}


/***/ })

};;
//# sourceMappingURL=36.render-page.js.map