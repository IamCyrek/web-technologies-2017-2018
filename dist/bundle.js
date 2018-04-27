/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    let input = document.getElementById('input');
    input.addEventListener('keyup', function (event) {
        event.preventDefault();
        let enterKey = 13;
        if (event.keyCode === enterKey) {
            query();
        }
    });

    let clearPage = function () {
        let page = document.getElementById('content');
        let parent = page.parentNode;
        let child = document.createElement('div');

        parent.removeChild(page);
        child.id = 'content';
        child.className = 'content';
        parent.appendChild(child);
    };

    document.getElementById('clearButton').addEventListener('click', clearPage);

    function setField(user, field) {
        let res = `${field[0].toUpperCase()}${field.slice(1)}`;
        if (user[field] === null || user[field] === '') {
            return res + ' isn\'t set';
        } else if (field !== 'login' || field !== 'name') {
            return makeBold(user[field]);
        } else {
            return res + ' ' + user[field];
        }
    }

    let query = function () {
        clearPage();
        let login = document.getElementById('input').value;
        fetch('https://api.github.com/users/' + login).then(function (response, user) {
            if (response.status >= 200 && response.status < 400)
                return response.json();
            if (response.status === 404)
                return Promise.reject(new Error('User not found!'));
        }).then(user => {
            funcForAddidTags(user);
        }).catch((err) => {
            showErrors(err);
        });
    };

    document.getElementById('queryButton').addEventListener('click', query);

    function makeBold(string) {
        let pattern = /@[a-z0-9_-]+/gmi;
        let subStr = string.match(pattern);
        let newStr = string;
        for (let i = 0; subStr && i < subStr.length; i++) {
            newStr = string.replace(subStr[i], '<span class=\'bold\'>' + subStr[i] + '</span>');
        }
        return newStr;
    }

    function funcForAddidTags(user) {
        let tags = ['img', 'p', 'a'], elements = [];
        let fields = ['name', 'login', 'bio', 'company', 'location', 'blog', 'email'];
        let root = document.createElement('div');
        root.id = 'container';
        root.className = 'additional';

        elements.push(document.createElement(tags[0]));
        for (let i = 1; i < fields.length; i++) {
            elements.push(document.createElement(tags[1]));
        }
        elements.push(document.createElement(tags[2]));

        elements[0].src = user.avatar_url;
        elements[0].className = 'avatar';
        for (let i = 0; i < fields.length; i++) {
            elements[i + 1].innerHTML = setField(user, fields[i]);
            elements[i + 1].className = fields[i];
        }
        if (user.blog !== '') {
            elements[elements.length - 2].setAttribute('href', user.blog);
        }
        elements.map(item => {
            root.appendChild(item);
        });
        document.getElementById('content').appendChild(root);
    }

    function showErrors(err) {
        let root = document.createElement('h3');
        root.innerHTML = 'Wrong login. <br>' + err;
        clearPage();
        document.getElementById('content').appendChild(root);
    }
})();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map