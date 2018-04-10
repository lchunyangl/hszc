webpackJsonp([4],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(65)
/* template */
var __vue_template__ = __webpack_require__(66)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\iview\\user\\Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33a56746", Component.options)
  } else {
    hotAPI.reload("data-v-33a56746", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns4: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '用户名',
                key: 'name'
            }, {
                title: '邮箱',
                key: 'email'
            }, {
                title: '注册时间',
                key: 'created_at'
            }],
            data1: []
        };
    },

    methods: {
        handleSelectAll: function handleSelectAll() {
            var _this = this;

            this.$ajax.get('/api/user').then(function (response) {
                console.log(response.data.data);
                _this.data1 = response.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted: function mounted() {
        this.handleSelectAll();
    }
});

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Table", {
        ref: "selection",
        attrs: { border: "", columns: _vm.columns4, data: _vm.data1 }
      }),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33a56746", module.exports)
  }
}

/***/ })

});