webpackJsonp([1],{

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
        var _this = this;

        return {
            loading: true,
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
            }, {
                title: 'Action',
                key: 'action',
                width: 150,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: function click() {
                                _this.show(params.index);
                            }
                        }
                    }, 'View'), h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: function click() {
                                _this.remove(params.index);
                            }
                        }
                    }, 'Delete')]);
                }
            }],
            data1: [],
            total: 0,
            per_page: 15
        };
    },

    methods: {
        handleSelectAll: function handleSelectAll() {
            var _this2 = this;

            this.$ajax.get('/api/user').then(function (response) {
                _this2.data1 = response.data.data;
                _this2.total = response.data.meta.total;
                _this2.per_page = response.data.meta.per_page;
                _this2.loading = false;
            }).catch(function (error) {
                console.log(error);
            });
        },
        change: function change(page) {
            var _this3 = this;

            this.$ajax.get('/api/user', {
                params: {
                    page: page
                }
            }).then(function (response) {
                _this3.data1 = response.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        show: function show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: 'Name\uFF1A' + this.data1[index].name + '<br>\u90AE\u7BB1\uFF1A' + this.data1[index].email + '<br>\u6CE8\u518C\u65F6\u95F4\uFF1A' + this.data1[index].created_at
            });
        },
        remove: function remove(index) {
            this.data1.splice(index, 1);
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
        attrs: {
          loading: _vm.loading,
          border: "",
          columns: _vm.columns4,
          data: _vm.data1
        }
      }),
      _vm._v(" "),
      _c("Page", {
        attrs: {
          total: _vm.total,
          "show-elevator": "",
          "show-total": "",
          "page-size": _vm.per_page
        },
        on: { "on-change": _vm.change }
      })
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