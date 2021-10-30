/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var favorites = /*#__PURE__*/function () {
  function favorites() {
    var ButtonClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "favorites";
    var like = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i like";
    var notlike = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "i don't like";
    var IdCounter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "counter";

    _classCallCheck(this, favorites);

    this.ButtonClass = ButtonClass;
    this.like = like;
    this.notlike = notlike;
    this.IdCounter = IdCounter;
  }

  _createClass(favorites, [{
    key: "get",
    value: function get() {
      return checkACookieExists();
    }
  }, {
    key: "getParameters",
    value: function getParameters() {
      return this.ButtonClass + this.like + this.notlike + this.IdCounter;
    }
  }, {
    key: "change",
    value: function change(id) {
      var cookie = checkACookieExists("favorites");

      if (cookie != false) {
        var index = cookie.indexOf(id);
        if (index !== -1) cookie.splice(index, 1);else cookie.push(1);
      } else {
        cookie = [id];
      }

      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 360);
      document.cookie = "favorites=" + JSON.stringify(cookie) + ";path=/;expires=" + d.toGMTString();
      this.update();
      return cookie;
    }
  }, {
    key: "update",
    value: function update() {
      //find counter id and change text
      var nbr = checkACookieExists();
      if (nbr != false) document.getElementById(this.IdCounter).textContent = nbr.length;
    }
  }]);

  return favorites;
}();

function checkACookieExists() {
  if (document.cookie) return JSON.parse(document.cookie.split("; ").find(function (row) {
    return row.startsWith("favorites=");
  }).split("=")[1]);else return false;
}

module.exports = favorites;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;