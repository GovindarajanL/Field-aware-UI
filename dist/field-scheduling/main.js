(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise =  false || resolve(value));
            }
            function onReject(error) {
                promise && (promise =  false || reject(error));
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    if (NativePromise) {
        patchThen(NativePromise);
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('fetch', function (global, Zone, api) {
    var fetch = global['fetch'];
    var ZoneAwarePromise = global.Promise;
    var symbolThenPatched = api.symbol('thenPatched');
    var fetchTaskScheduling = api.symbol('fetchTaskScheduling');
    var fetchTaskAborting = api.symbol('fetchTaskAborting');
    if (typeof fetch !== 'function') {
        return;
    }
    var OriginalAbortController = global['AbortController'];
    var supportAbort = typeof OriginalAbortController === 'function';
    var abortNative = null;
    if (supportAbort) {
        global['AbortController'] = function () {
            var abortController = new OriginalAbortController();
            var signal = abortController.signal;
            signal.abortController = abortController;
            return abortController;
        };
        abortNative = api.patchMethod(OriginalAbortController.prototype, 'abort', function (delegate) { return function (self, args) {
            if (self.task) {
                return self.task.zone.cancelTask(self.task);
            }
            return delegate.apply(self, args);
        }; });
    }
    var placeholder = function () { };
    global['fetch'] = function () {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        var options = args.length > 1 ? args[1] : null;
        var signal = options && options.signal;
        return new Promise(function (res, rej) {
            var task = Zone.current.scheduleMacroTask('fetch', placeholder, args, function () {
                var fetchPromise;
                var zone = Zone.current;
                try {
                    zone[fetchTaskScheduling] = true;
                    fetchPromise = fetch.apply(_this, args);
                }
                catch (error) {
                    rej(error);
                    return;
                }
                finally {
                    zone[fetchTaskScheduling] = false;
                }
                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                    var ctor = fetchPromise.constructor;
                    if (!ctor[symbolThenPatched]) {
                        api.patchThen(ctor);
                    }
                }
                fetchPromise.then(function (resource) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    res(resource);
                }, function (error) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    rej(error);
                });
            }, function () {
                if (!supportAbort) {
                    rej('No AbortController supported, can not cancel fetch');
                    return;
                }
                if (signal && signal.abortController && !signal.aborted &&
                    typeof signal.abortController.abort === 'function' && abortNative) {
                    try {
                        Zone.current[fetchTaskAborting] = true;
                        abortNative.call(signal.abortController);
                    }
                    finally {
                        Zone.current[fetchTaskAborting] = false;
                    }
                }
                else {
                    rej('cancel fetch need a AbortController.signal');
                }
            });
            if (signal && signal.abortController) {
                signal.abortController.task = task;
            }
        });
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget_1 = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget_1) {
            patchFilteredProperties(XMLHttpRequestEventTarget_1 && XMLHttpRequestEventTarget_1.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    attachOriginToPatched(target[method], nativeDelegate);
}
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    patchCallbacks(document, 'Document', 'registerElement', callbacks);
}
function patchCustomElements(_global) {
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    patchCallbacks(_global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    registerElementPatch(global);
    patchCustomElements(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/map-view/map-view.component */ "./src/app/map-view/map-view.component.ts");
/* harmony import */ var _app_dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/dashboard-component/dashboard-component.component */ "./src/app/dashboard-component/dashboard-component.component.ts");





var routes = [{
        path: 'map',
        component: _app_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"]
    }, {
        path: '',
        component: _app_dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponentComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/app-service.service.ts ***!
  \****************************************/
/*! exports provided: AppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServiceService", function() { return AppServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppServiceService = /** @class */ (function () {
    function AppServiceService(http) {
        this.http = http;
        this.outResp = [];
        this.outWorkForseResp = [];
    }
    // Need to make the rest call and get the response from the AWS service
    AppServiceService.prototype.getfreeWorkForce = function () {
        var out = [];
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get('http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/users/', { headers: headers });
        /* return this.http.get(
             'http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/users/',{headers: headers})
             .subscribe(responseval =>{
               this.initializeWork(responseval)
               console.log(" the out response is",this.outWorkForseResp);
               this.outWorkForseResp.forEach(item => {
                 item.icon ='https://img.icons8.com/color/32/000000/street-view.png';
                 
               })
               
             });*/
        //return this.outWorkForseResp;
    };
    AppServiceService.prototype.createEvents = function (name, latitude, longitude, numberofworkers, severity, date) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
        });
        //fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post('http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/events/', JSON.stringify({ active: 'Y', name: name, numberOfWorkersRequired: numberofworkers, severity: severity,
            status: 'UNASSIGNED', zoneId: 0, endDate: date, startDate: date, lattitude: latitude, longitude: longitude }), { headers: headers });
    };
    //fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com
    AppServiceService.prototype.createUser = function (name, date, latitude, longitude, email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.post('http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/users/', JSON.stringify({ active: 'Y', email: email, lattitude: latitude, longitude: longitude,
            password: "12345", role: "ADMIN", name: name,
            zoneId: 0, endDate: date, startDate: date }), { headers: headers });
    };
    AppServiceService.prototype.updateEvents = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.put('http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/events/' + id + '/COMPLETED', { headers: headers });
    };
    AppServiceService.prototype.getAssignedJobs = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
        });
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        /*return new Promise(resolve => {
          this.http.get(
            'http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/events/',{headers: headers})
            .subscribe(responseval =>{
              this.initialize(responseval)
              console.log(" the response is",this.outResp);
              
            });
            this.outResp.forEach(item => {
              if(item.severity == 'CRITICAL'){
                item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
            }else if(item.severity == 'LOW'){
              item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
            }else {
              item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
            }
              
            })*/
        return this.http.get('http://fieldserviceapi-env.zhmbvkhakb.ap-southeast-1.elasticbeanstalk.com/workforce-service/api/v1/events/', { headers: headers });
    };
    AppServiceService.prototype.initialize = function (lst) {
        this.outResp = lst;
        // from now on your object will be set
    };
    AppServiceService.prototype.initializeWork = function (lst) {
        this.outWorkForseResp = lst;
        // from now on your object will be set
    };
    AppServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppServiceService);
    return AppServiceService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n \r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-service.service */ "./src/app/app-service.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(appservice) {
        this.appservice = appservice;
        this.title = 'field-scheduling';
        this.assignedJobs = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.assignedJobs = this.appservice.getAssignedJobs();
        this.getEvents();
    };
    AppComponent.prototype.getEvents = function () {
        /*try {
          this.appservice.getAssignedJobs()
            .subscribe(resp => {
              console.log(resp, "res");
              this.assignedJobs = resp
            },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }*/
        console.log(" thee assigned jobs is", this.assignedJobs);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-view/map-view.component */ "./src/app/map-view/map-view.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-component/dashboard-component.component */ "./src/app/dashboard-component/dashboard-component.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__["MapViewComponent"],
                _dashboard_component_dashboard_component_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponentComponent"]
            ],
            exports: [_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__["MapViewComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD4VHQyN_Q4myPPQIyr3m7konM7FSQo4eY'
                    /* apiKey is required, unless you are a
                    premium customer, in which case you can
                    use clientId
                    */
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard-component/dashboard-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLWNvbXBvbmVudC9kYXNoYm9hcmQtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQtY29tcG9uZW50L2Rhc2hib2FyZC1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard-component/dashboard-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-top\">\r\n    <header class=\"topbar\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <!-- social icon-->\r\n            <div class=\"col-sm-12\">\r\n              <ul class=\"social-network\">\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n    </header>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark mx-background-top-linear\">\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"index.html\" style=\"text-transform: uppercase;\"> FIELD AWARE SCHEDULING</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n  \r\n          <ul class=\"navbar-nav ml-auto\">\r\n  \r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" href=\"\">Home\r\n                  <span class=\"sr-only\">(current)</span>\r\n              </a>\r\n              \r\n            </li>\r\n  \r\n            <li class=\"nav-item \">\r\n              <a class=\"nav-link\" href=\"map\">Map</a>\r\n            </li>\r\n  \r\n           <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">About</a>\r\n            </li>\r\n  \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Contact Us</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<div class=\"container\" style=\"text-align: center\">\r\n    <h5>EVENTS</h5>\r\n  </div>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"date\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.startDate}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"role\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\r\n      <td mat-cell *matCellDef=\"let element\"> \r\n        <i class=\"fa fa-check blue\" (click)=\"complete(element.id)\"></i>\r\n        <i class=\"fa fa-users\" (click)=\"reassign('name')\" aria-hidden=\"true\"></i>\r\n      </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  <br/>\r\n  <div id=\"chartContainer\" style=\"width: 100%; height: 400px;\"></div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard-component/dashboard-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard-component/dashboard-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentComponent", function() { return DashboardComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/canvasjs.min */ "./src/assets/canvasjs.min.js");
/* harmony import */ var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__);





var DashboardComponentComponent = /** @class */ (function () {
    function DashboardComponentComponent(appservice) {
        this.appservice = appservice;
        this.workforce = [];
        this.jobs = [];
        this.displayedColumns = ['id', 'name', 'status', 'date', 'role'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.unassigned = 0;
        this.assigned = 0;
        this.inprogress = 0;
        this.completed = 0;
    }
    ;
    DashboardComponentComponent.prototype.ngOnInit = function () {
        //this.workforce = this.appservice.getfreeWorkForce();
        this.getData();
        /*this.appservice.getAssignedJobs().then(re =>{
          this.jobs = re;
        });*/
    };
    DashboardComponentComponent.prototype.getData = function () {
        var _this = this;
        this.jobs = [];
        this.assigned = 0;
        this.unassigned = 0;
        this.completed = 0;
        this.inprogress = 0;
        var jobObservable = this.appservice.getAssignedJobs();
        jobObservable.subscribe(function (re) {
            re.forEach(function (item) {
                console.log(" the item is", item);
                _this.jobs.push(item);
                if (item.status == 'UNASSIGNED') {
                    _this.unassigned = _this.unassigned + 1;
                }
                else if (item.status == 'ASSIGNED') {
                    _this.assigned = _this.assigned + 1;
                }
                else if (item.status == 'COMPLETED') {
                    _this.completed = _this.completed + 1;
                }
                else {
                    _this.inprogress = _this.inprogress + 1;
                }
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.jobs);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            console.log(" the inprogress", _this.inprogress);
            var chart = new _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__["Chart"]("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Event Status"
                },
                data: [{
                        type: "pie",
                        dataPoints: [
                            { y: _this.assigned, label: "ASSIGNED" },
                            { y: _this.unassigned, label: "UN-ASSIGNED" },
                            { y: _this.inprogress, label: "IN-PROGRESS" },
                            { y: _this.completed, label: "COMPLETED" }
                        ]
                    }]
            });
            chart.render();
            console.log(" the marker is", _this.dataSource);
        });
    };
    DashboardComponentComponent.prototype.reassign = function () {
        if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
        }
    };
    DashboardComponentComponent.prototype.complete = function (id) {
        var _this = this;
        if (confirm("Are you sure to mark" + id + "it complete ")) {
            var jobObservable = this.appservice.updateEvents(id);
            jobObservable.subscribe(function (re) {
                _this.getData();
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], DashboardComponentComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DashboardComponentComponent.prototype, "sort", void 0);
    DashboardComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-component',
            template: __webpack_require__(/*! ./dashboard-component.component.html */ "./src/app/dashboard-component/dashboard-component.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-component.component.css */ "./src/app/dashboard-component/dashboard-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]])
    ], DashboardComponentComponent);
    return DashboardComponentComponent;
}());



/***/ }),

/***/ "./src/app/map-view/map-view.component.css":
/*!*************************************************!*\
  !*** ./src/app/map-view/map-view.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n       /* Set the size of the div element that contains the map */\r\n       agm-map { height: 600px; /* height is required */ }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLXZpZXcvbWFwLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO09BQ08sMERBQTBEO09BQzFELFVBQVUsYUFBYSxFQUFFLHVCQUF1QixFQUFFIiwiZmlsZSI6InNyYy9hcHAvbWFwLXZpZXcvbWFwLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgICAgLyogU2V0IHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBtYXAgKi9cclxuICAgICAgIGFnbS1tYXAgeyBoZWlnaHQ6IDYwMHB4OyAvKiBoZWlnaHQgaXMgcmVxdWlyZWQgKi8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/map-view/map-view.component.html":
/*!**************************************************!*\
  !*** ./src/app/map-view/map-view.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-top\">\r\n    <header class=\"topbar\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <!-- social icon-->\r\n            <div class=\"col-sm-12\">\r\n              <ul class=\"social-network\">\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\r\n                <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n  \r\n          </div>\r\n        </div>\r\n    </header>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark mx-background-top-linear\">\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"index.html\" style=\"text-transform: uppercase;\"> FIELD AWARE SCHEDULING</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n  \r\n          <ul class=\"navbar-nav ml-auto\">\r\n  \r\n            <li class=\"nav-item \">\r\n              <a class=\"nav-link\" href=\"\">Home\r\n                \r\n              </a>\r\n            </li>\r\n  \r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" href=\"map\">Map\r\n                  <span class=\"sr-only\">(current)</span>\r\n              </a>\r\n            </li>\r\n  \r\n           <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">About</a>\r\n            </li>\r\n  \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Contact Us</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n\r\n  <div style=\"text-align: center\">\r\n      <h5>EVENT/USER CREATION</h5>\r\n      <div class=\"form-group\">\r\n         \r\n          <div class=\"input-group\" style=\"width: 45%\">\r\n            <label for=\"mapdate\">Event Date:</label>&nbsp;\r\n            <input id=\"mapdate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" (change)=\"filterMap();\" name=\"dp\" [(ngModel)]=\"mapDate\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n              &nbsp;\r\n              <button type=\"button\" style=\"width: 50%\" class=\"btn btn-outline-dark\" (click)=\"filterMap();\">Filter</button>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>  \r\n     </div>\r\n\r\n  <agm-map [latitude]='latitude'\r\n[longitude]='longitude'\r\n[zoom]='5'\r\n(mapClick)='addMarker($event.coords.lat, $event.coords.lng)'>\r\n<agm-marker\r\n  *ngFor='let marker of markers'\r\n  [latitude]='marker.lattitude'\r\n  [longitude]='marker.longitude'\r\n  [iconUrl]=\"marker.icon\"\r\n  [markerDraggable]='true'\r\n  (markerClick)='selectMarker($event,content);'\r\n  >\r\n</agm-marker>\r\n</agm-map>\r\n\r\n\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Event/User</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label> Add User/Event</label>\r\n        <div class=\"input-group\">\r\n            <input name=\"options\" class=\"form-control col-sm-2\"  [(ngModel)]=\"options\" type=\"radio\" [value]=\"true\" [checked]=\"options\"/> User\r\n            <input name=\"options\" class=\"form-control col-sm-2\"  [(ngModel)]=\"options\" type=\"radio\" [value]=\"false\" [checked]=\"!options\"/> Event          \r\n        </div>\r\n      </div>\r\n    </form>\r\n    <form id=\"eventfrm\" *ngIf=\"!options\">\r\n    <div class=\"form-group\">\r\n        <label for=\"jobDate\">Event Desc</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"jobdesc\" class=\"form-control\" name=\"jbdesc\" [(ngModel)]=\"jobdesc\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"jobDate\">Workers Needed</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"jobdesc\" type=\"number\" class=\"form-control\" name=\"jbdesc\" [(ngModel)]=\"numberOfWorkers\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>PRIORITY</label>\r\n        <div>\r\n          <select [(ngModel)]=\"priority\" name=\"priority\" class=\"form-control\" id=\"sel1\">\r\n              <option value= \"CRITICAL\">\r\n                  CRITICAL\r\n                </option>\r\n            <option value= \"HIGH\">\r\n              HIGH\r\n            </option>\r\n            <option value= \"LOW\">\r\n              LOW\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"jobDate\">Event Date</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"jobDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"jobdate\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <form id=\"userfrm\" *ngIf=\"options\">\r\n      <div class=\"form-group\">\r\n          <label for=\"startdate\">User Name</label>\r\n          <div class=\"input-group\">\r\n            <input id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"startdate\">Email</label>\r\n          <div class=\"input-group\">\r\n            <input id=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"startdate\">Start Date</label>\r\n          <div class=\"input-group\">\r\n            <input id=\"startdate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"startdate\" [(ngModel)]=\"startdate\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  </div>\r\n  <div class=\"modal-footer\" *ngIf=\"!options\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"submitbutton();modal.close('Save click')\">Save</button>\r\n  </div>\r\n  <div class=\"modal-footer\" *ngIf=\"options\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"submituser();modal.close('Save click')\">Save</button>\r\n    </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/map-view/map-view.component.ts":
/*!************************************************!*\
  !*** ./src/app/map-view/map-view.component.ts ***!
  \************************************************/
/*! exports provided: MapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-service.service */ "./src/app/app-service.service.ts");




var MapViewComponent = /** @class */ (function () {
    function MapViewComponent(modalService, appservice) {
        this.modalService = modalService;
        this.appservice = appservice;
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'roadmap';
        this.workforce = [];
        this.options = false;
        // These are all just random coordinates need to get these from the services
        this.markers = [];
        this.jobs = [];
        this.iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
        this.getResponse();
    }
    MapViewComponent.prototype.ngOnInit = function () {
        console.log(" the map is called");
    };
    MapViewComponent.prototype.filterMap = function () {
        var _this = this;
        this.workforce = [];
        this.jobs = [];
        var filteredJobs = [];
        var filteredWorkForce = [];
        this.markers = [];
        var productsObservable = this.appservice.getfreeWorkForce();
        productsObservable.subscribe(function (res) {
            console.log(" the response from obser", res);
            res.forEach(function (item) {
                item.icon = 'https://img.icons8.com/color/32/000000/street-view.png';
                _this.workforce.push(item);
                console.log(" the start date is", item.startDate, ", filter date", _this.datesmall(_this.mapDate));
                if (_this.datesmall(_this.mapDate) == item.startDate) {
                    console.log(" filtered &&&&&", item.startDate);
                    filteredWorkForce.push(item);
                }
            });
            filteredWorkForce.forEach(function (e) {
                console.log(" the filtered work", e);
                _this.markers.push(e);
            });
        });
        var jobObservable = this.appservice.getAssignedJobs();
        jobObservable.subscribe(function (re) {
            re.forEach(function (item) {
                if (item.severity == 'CRITICAL') {
                    item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
                }
                else if (item.severity == 'LOW') {
                    item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
                }
                else {
                    item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
                }
                _this.jobs.push(item);
                console.log(" the start date is", item.startDate, ", filter date", _this.datesmall(_this.mapDate));
                if (_this.datesmall(_this.mapDate) == item.startDate) {
                    filteredJobs.push(item);
                }
            });
            filteredJobs.forEach(function (e) {
                console.log(" the filtered job", e);
                _this.markers.push(e);
            });
        });
    };
    MapViewComponent.prototype.setPriority = function (val) {
        this.priority = val;
    };
    MapViewComponent.prototype.addMarker = function (lat, lng) {
        this.latitude = lat;
        this.longitude = lng;
        this.markers.push({ lattitude: lat, longitude: lng, alpha: 0.4, icon: 'https://img.icons8.com/material/24/000000/calendar.png' });
    };
    MapViewComponent.prototype.max = function (coordType) {
        return Math.max.apply(Math, this.markers.map(function (marker) { return marker[coordType]; }));
    };
    MapViewComponent.prototype.min = function (coordType) {
        return Math.min.apply(Math, this.markers.map(function (marker) { return marker[coordType]; }));
    };
    MapViewComponent.prototype.getResponse = function () {
        var _this = this;
        var productsObservable = this.appservice.getfreeWorkForce();
        productsObservable.subscribe(function (res) {
            res.forEach(function (item) {
                item.icon = 'https://img.icons8.com/color/32/000000/street-view.png';
                _this.latitude = item.lattitude;
                _this.longitude = item.longitude;
                _this.workforce.push(item);
                _this.markers.push(item);
            });
        });
        var jobObservable = this.appservice.getAssignedJobs();
        jobObservable.subscribe(function (re) {
            re.forEach(function (item) {
                if (item.severity == 'CRITICAL') {
                    item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
                }
                else if (item.severity == 'LOW') {
                    item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
                }
                else {
                    item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
                }
                _this.latitude = item.lattitude;
                _this.longitude = item.longitude;
                _this.jobs.push(item);
                _this.markers.push(item);
            });
        });
    };
    MapViewComponent.prototype.selectMarker = function (event, content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        this.selectedMarker = {
            lat: event.latitude,
            lng: event.longitude
        };
    };
    MapViewComponent.prototype.addUser = function (event, content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title2' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    MapViewComponent.prototype.submituser = function () {
        var _this = this;
        this.markers = [];
        var jobObservable = this.appservice.createUser(this.username, this.dateas(this.startdate), this.latitude, this.longitude, this.email);
        jobObservable.subscribe(function (resp) {
            var productsObservable = _this.appservice.getfreeWorkForce();
            productsObservable.subscribe(function (res) {
                res.forEach(function (item) {
                    item.icon = 'https://img.icons8.com/color/32/000000/street-view.png';
                    _this.latitude = item.lattitude;
                    _this.longitude = item.longitude;
                    _this.workforce.push(item);
                    _this.markers.push(item);
                });
            });
            _this.jobs.forEach(function (item) {
                _this.markers.push(item);
            });
        });
    };
    MapViewComponent.prototype.submitbutton = function () {
        var _this = this;
        this.markers = [];
        setTimeout(function () {
        }, 200);
        var jobObservable = this.appservice.createEvents(this.jobdesc, this.latitude, this.longitude, this.numberOfWorkers, this.priority, this.dateas(this.jobdate));
        jobObservable.subscribe(function (it) {
            var allResp = _this.appservice.getAssignedJobs();
            allResp.subscribe(function (re) {
                re.forEach(function (item) {
                    if (item.severity == 'CRITICAL') {
                        item.icon = 'https://img.icons8.com/bubbles/25/000000/calendar.png';
                    }
                    else if (item.severity == 'LOW') {
                        item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
                    }
                    else {
                        item.icon = 'https://img.icons8.com/material/24/000000/calendar.png';
                    }
                    _this.markers.push(item);
                });
                _this.workforce.forEach(function (item) {
                    _this.markers.push(item);
                });
            });
        });
    };
    MapViewComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    MapViewComponent.prototype.dateas = function (date) {
        return date.year + '-' + this.leftpad(date.month, 2)
            + '-' + this.leftpad(date.day, 2)
            + 'T01:20:08.257Z';
    };
    MapViewComponent.prototype.datesmall = function (date) {
        return date.year + '-' + this.leftpad(date.month, 2)
            + '-' + this.leftpad(date.day, 2);
    };
    MapViewComponent.prototype.leftpad = function (val, resultLength, leftpadChar) {
        if (resultLength === void 0) { resultLength = 2; }
        if (leftpadChar === void 0) { leftpadChar = '0'; }
        return (String(leftpadChar).repeat(resultLength)
            + String(val)).slice(String(val).length);
    };
    MapViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-view',
            template: __webpack_require__(/*! ./map-view.component.html */ "./src/app/map-view/map-view.component.html"),
            styles: [__webpack_require__(/*! ./map-view.component.css */ "./src/app/map-view/map-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]])
    ], MapViewComponent);
    return MapViewComponent;
}());



/***/ }),

/***/ "./src/assets/canvasjs.min.js":
/*!************************************!*\
  !*** ./src/assets/canvasjs.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 CanvasJS HTML5 & JavaScript Charts - v2.3.1 GA - https://canvasjs.com/ 
 Copyright 2018 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license/

*/
/*eslint-disable*/
/*jshint ignore:start*/
(function(){function qa(k,p){k.prototype=eb(p.prototype);k.prototype.constructor=k;k.base=p.prototype}function eb(k){function p(){}p.prototype=k;return new p}function Ya(k,p,D){"millisecond"===D?k.setMilliseconds(k.getMilliseconds()+1*p):"second"===D?k.setSeconds(k.getSeconds()+1*p):"minute"===D?k.setMinutes(k.getMinutes()+1*p):"hour"===D?k.setHours(k.getHours()+1*p):"day"===D?k.setDate(k.getDate()+1*p):"week"===D?k.setDate(k.getDate()+7*p):"month"===D?k.setMonth(k.getMonth()+1*p):"year"===D&&k.setFullYear(k.getFullYear()+
1*p);return k}function $(k,p){var D=!1;0>k&&(D=!0,k*=-1);k=""+k;for(p=p?p:1;k.length<p;)k="0"+k;return D?"-"+k:k}function Ia(k){if(!k)return k;k=k.replace(/^\s\s*/,"");for(var p=/\s/,D=k.length;p.test(k.charAt(--D)););return k.slice(0,D+1)}function Ea(k){k.roundRect=function(k,D,r,u,H,F,z,v){z&&(this.fillStyle=z);v&&(this.strokeStyle=v);"undefined"===typeof H&&(H=5);this.lineWidth=F;this.beginPath();this.moveTo(k+H,D);this.lineTo(k+r-H,D);this.quadraticCurveTo(k+r,D,k+r,D+H);this.lineTo(k+r,D+u-H);
this.quadraticCurveTo(k+r,D+u,k+r-H,D+u);this.lineTo(k+H,D+u);this.quadraticCurveTo(k,D+u,k,D+u-H);this.lineTo(k,D+H);this.quadraticCurveTo(k,D,k+H,D);this.closePath();z&&this.fill();v&&0<F&&this.stroke()}}function Sa(k,p){return k-p}function Ta(k,p,D){if(k&&p&&D){D=D+"."+p;var r="image/"+p;k=k.toDataURL(r);var u=!1,H=document.createElement("a");H.download=D;H.href=k;if("undefined"!==typeof Blob&&new Blob){for(var F=k.replace(/^data:[a-z\/]*;base64,/,""),F=atob(F),z=new ArrayBuffer(F.length),z=new Uint8Array(z),
v=0;v<F.length;v++)z[v]=F.charCodeAt(v);p=new Blob([z.buffer],{type:"image/"+p});try{window.navigator.msSaveBlob(p,D),u=!0}catch(L){H.dataset.downloadurl=[r,H.download,H.href].join(":"),H.href=window.URL.createObjectURL(p)}}if(!u)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),H.dispatchEvent?H.dispatchEvent(event):H.fireEvent&&H.fireEvent("onclick")}catch(E){p=window.open(),p.document.write("<img src='"+k+"'></img><div>Please right click on the image and save it to your device</div>"),
p.document.close()}}}function N(k){var p=((k&16711680)>>16).toString(16),D=((k&65280)>>8).toString(16);k=((k&255)>>0).toString(16);p=2>p.length?"0"+p:p;D=2>D.length?"0"+D:D;k=2>k.length?"0"+k:k;return"#"+p+D+k}function fb(k,p){var D=this.length>>>0,r=Number(p)||0,r=0>r?Math.ceil(r):Math.floor(r);for(0>r&&(r+=D);r<D;r++)if(r in this&&this[r]===k)return r;return-1}function u(k){return null===k||"undefined"===typeof k}function Fa(k){k.indexOf||(k.indexOf=fb);return k}function gb(k){if(U.fSDec)k[ja("`eeDwdouMhrudods")](ja("e`u`@ohl`uhnoHuds`uhnoDoe"),
function(){U._fTWm&&U._fTWm(k)})}function Za(k,p,D){D=D||"normal";var r=k+"_"+p+"_"+D,u=$a[r];if(isNaN(u)){try{k="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+k+"; font-size:"+p+"px; font-weight:"+D+";";if(!xa){var H=document.body;xa=document.createElement("span");xa.innerHTML="";var F=document.createTextNode("Mpgyi");xa.appendChild(F);H.appendChild(xa)}xa.style.display="";xa.setAttribute("style",k);u=Math.round(xa.offsetHeight);
xa.style.display="none"}catch(z){u=Math.ceil(1.1*p)}u=Math.max(u,p);$a[r]=u}return u}function R(k,p){var D=[];if(D={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[k||"solid"])for(var r=0;r<D.length;r++)D[r]*=p;else D=[];return D}function O(k,p,D,r,u){r=r||[];u=u||!1;r.push([k,p,D,u]);return k.addEventListener?(k.addEventListener(p,D,u),D):k.attachEvent?
(r=function(p){p=p||window.event;p.preventDefault=p.preventDefault||function(){p.returnValue=!1};p.stopPropagation=p.stopPropagation||function(){p.cancelBubble=!0};D.call(k,p)},k.attachEvent("on"+p,r),r):!1}function ab(k,p,D){k*=W;p*=W;k=D.getImageData(k,p,2,2).data;p=!0;for(D=0;4>D;D++)if(k[D]!==k[D+4]|k[D]!==k[D+8]|k[D]!==k[D+12]){p=!1;break}return p?k[0]<<16|k[1]<<8|k[2]:0}function na(k,p,D){return k in p?p[k]:D[k]}function Oa(k,p,D){if(r&&bb){var u=k.getContext("2d");Pa=u.webkitBackingStorePixelRatio||
u.mozBackingStorePixelRatio||u.msBackingStorePixelRatio||u.oBackingStorePixelRatio||u.backingStorePixelRatio||1;W=Ua/Pa;k.width=p*W;k.height=D*W;Ua!==Pa&&(k.style.width=p+"px",k.style.height=D+"px",u.scale(W,W))}else k.width=p,k.height=D}function hb(k){if(!ib){var p=!1,D=!1;"undefined"===typeof ra.Chart.creditHref?(k.creditHref=ja("iuuqr;..b`ow`rkr/bnl."),k.creditText=ja("B`ow`rKR/bnl")):(p=k.updateOption("creditText"),D=k.updateOption("creditHref"));if(k.creditHref&&k.creditText){k._creditLink||
(k._creditLink=document.createElement("a"),k._creditLink.setAttribute("class","canvasjs-chart-credit"),k._creditLink.setAttribute("title","JavaScript Charts"),k._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:2px;top:"+(k.height-14)+"px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),k._creditLink.setAttribute("tabIndex",-1),k._creditLink.setAttribute("target","_blank"));if(0===k.renderCount||
p||D)k._creditLink.setAttribute("href",k.creditHref),k._creditLink.innerHTML=k.creditText;k._creditLink&&k.creditHref&&k.creditText?(k._creditLink.parentElement||k._canvasJSContainer.appendChild(k._creditLink),k._creditLink.style.top=k.height-14+"px"):k._creditLink.parentElement&&k._canvasJSContainer.removeChild(k._creditLink)}}}function ta(k,p){Ja&&(this.canvasCount|=0,window.console.log(++this.canvasCount));var D=document.createElement("canvas");D.setAttribute("class","canvasjs-chart-canvas");Oa(D,
k,p);r||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(D);return D}function sa(k,p,D){for(var r in D)p.style[r]=D[r]}function ua(k,p,D){p.getAttribute("state")||(p.style.backgroundColor=k.toolbar.backgroundColor,p.style.color=k.toolbar.fontColor,p.style.border="none",sa(k,p,{WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}));p.getAttribute("state")!==D&&(p.setAttribute("state",D),p.setAttribute("type","button"),sa(k,p,{padding:"5px 12px",
cursor:"pointer","float":"left",width:"40px",height:"25px",outline:"0px",verticalAlign:"baseline",lineHeight:"0"}),p.setAttribute("title",k._cultureInfo[D+"Text"]),p.innerHTML="<img style='height:95%; pointer-events: none;' src='"+jb[D].image+"' alt='"+k._cultureInfo[D+"Text"]+"' />")}function Qa(){for(var k=null,p=0;p<arguments.length;p++)k=arguments[p],k.style&&(k.style.display="inline")}function va(){for(var k=null,p=0;p<arguments.length;p++)(k=arguments[p])&&k.style&&(k.style.display="none")}
function V(k,p,D,r,v){this._defaultsKey=k;this._themeOptionsKey=p;this._index=r;this.parent=v;this._eventListeners=[];k={};this.theme&&u(p)&&u(r)?k=u(ya[this.theme])?ya.light1:ya[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[p])&&(null===r?k=this.parent.themeOptions[p]:0<this.parent.themeOptions[p].length&&(r=Math.min(this.parent.themeOptions[p].length-1,r),k=this.parent.themeOptions[p][r]));this.themeOptions=k;this.options=D?D:{_isPlaceholder:!0};this.setOptions(this.options,
k)}function Ga(k,p,r,u,v){"undefined"===typeof v&&(v=0);this._padding=v;this._x1=k;this._y1=p;this._x2=r;this._y2=u;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function ka(k,p){ka.base.constructor.call(this,"TextBlock",null,p,null,null);this.ctx=k;this._isDirty=!0;this._wrappedText=null;this._initialize()}function Va(k,p){Va.base.constructor.call(this,"Toolbar","toolbar",p,null,k);this.chart=k;this.canvas=k.canvas;this.ctx=this.chart.ctx;this.optionsName=
"toolbar"}function Aa(k,p){Aa.base.constructor.call(this,"Title","title",p,null,k);this.chart=k;this.canvas=k.canvas;this.ctx=this.chart.ctx;this.optionsName="title";if(u(this.options.margin)&&k.options.subtitles)for(var r=k.options.subtitles,za=0;za<r.length;za++)if((u(r[za].horizontalAlign)&&"center"===this.horizontalAlign||r[za].horizontalAlign===this.horizontalAlign)&&(u(r[za].verticalAlign)&&"top"===this.verticalAlign||r[za].verticalAlign===this.verticalAlign)&&!r[za].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=
0;break}"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function Ka(k,p,r){Ka.base.constructor.call(this,"Subtitle","subtitles",p,r,k);this.chart=k;this.canvas=k.canvas;this.ctx=this.chart.ctx;this.optionsName="subtitles";this.isOptionsInArray=!0;"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;
this.bounds={x1:null,y1:null,x2:null,y2:null}}function Wa(){this.pool=[]}function La(k){var p;k&&Ma[k]&&(p=Ma[k]);La.base.constructor.call(this,"CultureInfo",null,p,null,null)}var Ja=!1,U={},r=!!document.createElement("canvas").getContext,ra={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",theme:"light1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditHref:"",creditText:"CanvasJS",
interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null,publicProperties:{title:"readWrite",subtitles:"readWrite",toolbar:"readWrite",toolTip:"readWrite",legend:"readWrite",axisX:"readWrite",axisY:"readWrite",axisX2:"readWrite",axisY2:"readWrite",data:"readWrite",options:"readWrite",bounds:"readOnly",container:"readOnly"}},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",
fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:r?"transparent":null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,
dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Toolbar:{backgroundColor:"white",backgroundColorOnHover:"#2196f3",borderColor:"#2196f3",borderThickness:1,fontColor:"black",fontColorOnHover:"white",publicProperties:{options:"readWrite",chart:"readOnly"}},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,
itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,backgroundColor:r?"transparent":null,borderColor:r?"transparent":null,borderThickness:0,cornerRadius:0,maxWidth:null,maxHeight:null,markerMargin:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:r?"rgba(255,255,255,.9)":"rgb(255,255,255)",
borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:"black",fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic",publicProperties:{options:"readWrite",chart:"readOnly"}},Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,reversed:!1,logarithmic:!1,logarithmBase:10,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,
titleMaxWidth:null,titleBackgroundColor:r?"transparent":null,titleBorderColor:r?"transparent":null,titleBorderThickness:0,titleCornerRadius:0,labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,labelBackgroundColor:r?"transparent":null,labelBorderColor:r?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelPlacement:"outside",prefix:"",suffix:"",
includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:r?"transparent":null,valueFormatString:null,margin:2,publicProperties:{options:"readWrite",stripLines:"readWrite",scaleBreaks:"readWrite",crosshair:"readWrite",bounds:"readOnly",chart:"readOnly"}},StripLine:{value:null,startValue:null,endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",
labelPlacement:"inside",labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:null,labelBorderColor:r?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},ScaleBreaks:{autoCalculate:!1,collapsibleThreshold:"25%",maxNumberOfAutoBreaks:2,spacing:8,
type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",customBreaks:"readWrite",axis:"readOnly",autoBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Break:{startValue:null,endValue:null,spacing:8,type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",scaleBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Crosshair:{enabled:!1,
snapToDataPoint:!1,color:"grey",opacity:null,thickness:2,lineDashType:"solid",label:"",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:r?"grey":null,labelBorderColor:r?"grey":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:r?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:12,labelFontColor:"#fff",labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,valueFormatString:null,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",
chart:"readOnly"}},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:"default",indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:"gray",indexLabelLineThickness:1,indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,
lineThickness:2,lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fallingColor:"red",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,neckHeight:null,neckWidth:null,reversed:!1,valueRepresents:null,linkedDataSeriesIndex:null,whiskerThickness:2,whiskerDashType:"solid",whiskerColor:null,whiskerLength:null,stemThickness:2,stemColor:null,stemDashType:"solid",upperBoxColor:"white",lowerBoxColor:"white",type:"column",xValueType:"number",
axisXType:"primary",axisYType:"primary",axisXIndex:0,axisYIndex:0,xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:r?"transparent":null,legendMarkerBorderThickness:0,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:r?"transparent":null,markerBorderThickness:0,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,
visible:!0,publicProperties:{options:"readWrite",axisX:"readWrite",axisY:"readWrite",chart:"readOnly"}},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",
menuText:"More Options",saveJPGText:"Save as JPEG",savePNGText:"Save as PNG",printText:"Print",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},Ma={en:{}},v=r?"Trebuchet MS, Helvetica, sans-serif":"Arial",Ha=r?"Impact, Charcoal, sans-serif":"Arial",
Ba={colorSet1:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),colorSet2:"#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},I,fa,Q,ha,ga;fa="#333333";Q="#000000";I="#666666";ga=ha="#000000";var X=20,E=14,Xa={colorSet:"colorSet1",
backgroundColor:"#FFFFFF",title:{fontFamily:Ha,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:Ha,fontSize:E,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:v,indexLabelFontSize:E,indexLabelFontColor:fa,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",
lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:v,
titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,
lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",
thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,
gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:v,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",
horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};Q=fa="#F5F5F5";I="#FFFFFF";ha="#40BAF1";ga="#F5F5F5";var X=20,E=14,cb={colorSet:"colorSet2",title:{fontFamily:v,fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},subtitles:[{fontFamily:v,fontSize:E,fontColor:"#3A3A3A",fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:v,indexLabelFontSize:E,indexLabelFontColor:"#666666",indexLabelFontWeight:"normal",
indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickThickness:1,tickColor:"#BBBBBB",gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,
labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",
stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",
labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},
scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,
color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:v,fontSize:14,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};
Q=fa="#F5F5F5";I="#FFFFFF";ha="#40BAF1";ga="#F5F5F5";X=20;E=14;Ha={colorSet:"colorSet12",backgroundColor:"#2A2A2A",title:{fontFamily:Ha,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:Ha,fontSize:E,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:v,indexLabelFontSize:E,
indexLabelFontColor:Q,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,
labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",
lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",
labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:v,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:Q,backgroundColor:"rgba(0, 0, 0, .7)"}};I="#FFFFFF";Q=fa="#FAFAFA";ha="#40BAF1";ga="#F5F5F5";
var X=20,E=14,ya={light1:Xa,light2:cb,dark1:Ha,dark2:{colorSet:"colorSet2",backgroundColor:"#32373A",title:{fontFamily:v,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:v,fontSize:E,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:v,indexLabelFontSize:E,
indexLabelFontColor:Q,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:v,
labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,
labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:0,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",
lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:v,titleFontSize:X,titleFontColor:Q,titleFontWeight:"normal",labelFontFamily:v,labelFontSize:E,labelFontColor:Q,labelFontWeight:"normal",lineThickness:0,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:v,labelFontSize:E,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:v,labelFontSize:E,labelFontColor:"#000000",
labelFontWeight:"normal",labelBackgroundColor:ga,color:ha,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:v,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:v,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:Q,backgroundColor:"rgba(0, 0, 0, .7)"}},theme1:Xa,theme2:cb,theme3:Xa},S={numberDuration:1,
yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")};(function(){U.fSDec=function(k){for(var p="",r=0;r<k.length;r++)p+=String.fromCharCode(Math.ceil(k.length/57/5)^k.charCodeAt(r));return p};U.obj={trVs:"Ush`m!Wdsrhno",fntStr:"qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",txtBl:"udyuC`rdmhod",
fnt:"gnou",fSy:"ghmmRuxmd",fTx:"ghmmUdyu",grClr:"fsdx",cntx:"buy",tp:"unq"};delete ra[U.fSDec("Bi`su")][U.fSDec("bsdehuIsdg")];U.pro={sCH:ra[U.fSDec("Bi`su")][U.fSDec("bsdehuIsdg")]};U._fTWm=function(k){if("undefined"===typeof U.pro.sCH&&!db)try{var p=k[U.fSDec(U.obj.cntx)];p[U.fSDec(U.obj.txtBl)]=U.fSDec(U.obj.tp);p[U.fSDec(U.obj.fnt)]=11+U.fSDec(U.obj.fntStr);p[U.fSDec(U.obj.fSy)]=U.fSDec(U.obj.grClr);p[U.fSDec(U.obj.fTx)](U.fSDec(U.obj.trVs),2,k.height-11-2)}catch(r){}}})();var $a={},xa=null,kb=
function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))},lb=function(k,p,r){p=Math.min(this.width,this.height);return Math.max("theme4"===this.theme?0:300<=p?12:10,Math.round(p*(k/400)))},Ca=function(){var k=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,p="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),r="Sun Mon Tue Wed Thu Fri Sat".split(" "),
u="January February March April May June July August September October November December".split(" "),v="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),H=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,F=/[^-+\dA-Z]/g;return function(z,E,L){var R=L?L.days:p,I=L?L.months:u,N=L?L.shortDays:r,O=L?L.shortMonths:v;L="";var S=!1;z=z&&z.getTime?z:z?new Date(z):new Date;if(isNaN(z))throw SyntaxError("invalid date");
"UTC:"===E.slice(0,4)&&(E=E.slice(4),S=!0);L=S?"getUTC":"get";var U=z[L+"Date"](),V=z[L+"Day"](),M=z[L+"Month"](),Q=z[L+"FullYear"](),a=z[L+"Hours"](),d=z[L+"Minutes"](),b=z[L+"Seconds"](),c=z[L+"Milliseconds"](),e=S?0:z.getTimezoneOffset();return L=E.replace(k,function(g){switch(g){case "D":return U;case "DD":return $(U,2);case "DDD":return N[V];case "DDDD":return R[V];case "M":return M+1;case "MM":return $(M+1,2);case "MMM":return O[M];case "MMMM":return I[M];case "Y":return parseInt(String(Q).slice(-2));
case "YY":return $(String(Q).slice(-2),2);case "YYY":return $(String(Q).slice(-3),3);case "YYYY":return $(Q,4);case "h":return a%12||12;case "hh":return $(a%12||12,2);case "H":return a;case "HH":return $(a,2);case "m":return d;case "mm":return $(d,2);case "s":return b;case "ss":return $(b,2);case "f":return String(c).slice(0,1);case "ff":return $(String(c).slice(0,2),2);case "fff":return $(String(c).slice(0,3),3);case "t":return 12>a?"a":"p";case "tt":return 12>a?"am":"pm";case "T":return 12>a?"A":
"P";case "TT":return 12>a?"AM":"PM";case "K":return S?"UTC":(String(z).match(H)||[""]).pop().replace(F,"");case "z":return(0<e?"-":"+")+Math.floor(Math.abs(e)/60);case "zz":return(0<e?"-":"+")+$(Math.floor(Math.abs(e)/60),2);case "zzz":return(0<e?"-":"+")+$(Math.floor(Math.abs(e)/60),2)+$(Math.abs(e)%60,2);default:return g.slice(1,g.length-1)}})}}(),ba=function(k,p,r){if(null===k)return"";if(!isFinite(k))return k;k=Number(k);var u=0>k?!0:!1;u&&(k*=-1);var v=r?r.decimalSeparator:".",H=r?r.digitGroupSeparator:
",",F="";p=String(p);var F=1,z=r="",E=-1,L=[],R=[],I=0,N=0,S=0,O=!1,U=0,z=p.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);p=null;for(var Q=0;z&&Q<z.length;Q++)if(p=z[Q],"."===p&&0>E)E=Q;else{if("%"===p)F*=100;else if("\u2030"===p){F*=1E3;continue}else if(","===p[0]&&"."===p[p.length-1]){F/=Math.pow(1E3,p.length-1);E=Q+p.length-1;continue}else"E"!==p[0]&&"e"!==p[0]||"0"!==p[p.length-1]||(O=!0);0>E?(L.push(p),"#"===p||"0"===p?I++:","===p&&S++):(R.push(p),"#"!==p&&"0"!==p||N++)}O&&(p=Math.floor(k),
z=-Math.floor(Math.log(k)/Math.LN10+1),U=0===k?0:0===p?-(I+z):String(p).length-I,F/=Math.pow(10,U));0>E&&(E=Q);F=(k*F).toFixed(N);p=F.split(".");F=(p[0]+"").split("");k=(p[1]+"").split("");F&&"0"===F[0]&&F.shift();for(O=z=Q=N=E=0;0<L.length;)if(p=L.pop(),"#"===p||"0"===p)if(E++,E===I){var M=F,F=[];if("0"===p)for(p=I-N-(M?M.length:0);0<p;)M.unshift("0"),p--;for(;0<M.length;)r=M.pop()+r,O++,0===O%z&&(Q===S&&0<M.length)&&(r=H+r)}else 0<F.length?(r=F.pop()+r,N++,O++):"0"===p&&(r="0"+r,N++,O++),0===O%
z&&(Q===S&&0<F.length)&&(r=H+r);else"E"!==p[0]&&"e"!==p[0]||"0"!==p[p.length-1]||!/[eE][+-]*[0]+/.test(p)?","===p?(Q++,z=O,O=0,0<F.length&&(r=H+r)):r=1<p.length&&('"'===p[0]&&'"'===p[p.length-1]||"'"===p[0]&&"'"===p[p.length-1])?p.slice(1,p.length-1)+r:p+r:(p=0>U?p.replace("+","").replace("-",""):p.replace("-",""),r+=p.replace(/[0]+/,function(k){return $(U,k.length)}));H="";for(L=!1;0<R.length;)p=R.shift(),"#"===p||"0"===p?0<k.length&&0!==Number(k.join(""))?(H+=k.shift(),L=!0):"0"===p&&(H+="0",L=
!0):1<p.length&&('"'===p[0]&&'"'===p[p.length-1]||"'"===p[0]&&"'"===p[p.length-1])?H+=p.slice(1,p.length-1):"E"!==p[0]&&"e"!==p[0]||"0"!==p[p.length-1]||!/[eE][+-]*[0]+/.test(p)?H+=p:(p=0>U?p.replace("+","").replace("-",""):p.replace("-",""),H+=p.replace(/[0]+/,function(k){return $(U,k.length)}));r+=(L?v:"")+H;return u?"-"+r:r},Ra=function(k){var p=0,r=0;k=k||window.event;k.offsetX||0===k.offsetX?(p=k.offsetX,r=k.offsetY):k.layerX||0==k.layerX?(p=k.layerX,r=k.layerY):(p=k.pageX-k.target.offsetLeft,
r=k.pageY-k.target.offsetTop);return{x:p,y:r}},bb=!0,Ua=window.devicePixelRatio||1,Pa=1,W=bb?Ua/Pa:1,ea=function(k,p,r,u,v,H,F,z,E,L,R,N,O){"undefined"===typeof O&&(O=1);F=F||0;z=z||"black";var I=15<u-p&&15<v-r?8:0.35*Math.min(u-p,v-r);k.beginPath();k.moveTo(p,r);k.save();k.fillStyle=H;k.globalAlpha=O;k.fillRect(p,r,u-p,v-r);k.globalAlpha=1;0<F&&(O=0===F%2?0:0.5,k.beginPath(),k.lineWidth=F,k.strokeStyle=z,k.moveTo(p,r),k.rect(p-O,r-O,u-p+2*O,v-r+2*O),k.stroke());k.restore();!0===E&&(k.save(),k.beginPath(),
k.moveTo(p,r),k.lineTo(p+I,r+I),k.lineTo(u-I,r+I),k.lineTo(u,r),k.closePath(),F=k.createLinearGradient((u+p)/2,r+I,(u+p)/2,r),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, .4)"),k.fillStyle=F,k.fill(),k.restore());!0===L&&(k.save(),k.beginPath(),k.moveTo(p,v),k.lineTo(p+I,v-I),k.lineTo(u-I,v-I),k.lineTo(u,v),k.closePath(),F=k.createLinearGradient((u+p)/2,v-I,(u+p)/2,v),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, .4)"),k.fillStyle=F,k.fill(),k.restore());!0===R&&(k.save(),
k.beginPath(),k.moveTo(p,r),k.lineTo(p+I,r+I),k.lineTo(p+I,v-I),k.lineTo(p,v),k.closePath(),F=k.createLinearGradient(p+I,(v+r)/2,p,(v+r)/2),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, 0.1)"),k.fillStyle=F,k.fill(),k.restore());!0===N&&(k.save(),k.beginPath(),k.moveTo(u,r),k.lineTo(u-I,r+I),k.lineTo(u-I,v-I),k.lineTo(u,v),F=k.createLinearGradient(u-I,(v+r)/2,u,(v+r)/2),F.addColorStop(0,H),F.addColorStop(1,"rgba(255, 255, 255, 0.1)"),k.fillStyle=F,F.addColorStop(0,H),F.addColorStop(1,
"rgba(255, 255, 255, 0.1)"),k.fillStyle=F,k.fill(),k.closePath(),k.restore())},ja=function(k){for(var p="",r=0;r<k.length;r++)p+=String.fromCharCode(Math.ceil(k.length/57/5)^k.charCodeAt(r));return p},db=window&&window[ja("mnb`uhno")]&&window[ja("mnb`uhno")].href&&window[ja("mnb`uhno")].href.indexOf&&(-1!==window[ja("mnb`uhno")].href.indexOf(ja("b`ow`rkr/bnl"))||-1!==window[ja("mnb`uhno")].href.indexOf(ja("gdonqhy/bnl"))||-1!==window[ja("mnb`uhno")].href.indexOf(ja("gheemd"))),ib=db&&-1===window[ja("mnb`uhno")].href.indexOf(ja("gheemd")),
jb={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"},
handle:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAAZiS0dEANAAzwDP4Z7KegAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9sHGw0cMqdt1UwAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAaElEQVQoz+3SsRFAQBCF4Z9WJM8KCDVwownl6YXsTmCUsyKGkZzcl7zkz3YLkypgAnreFmDEpHkIwVOMfpdi9CEEN2nGpFdwD03yEqDtOgCaun7sqSTDH32I1pQA2Pb9sZecAxc5r3IAb21d6878xsAAAAAASUVORK5CYII="}};V.prototype.setOptions=function(k,p){if(ra[this._defaultsKey]){var r=ra[this._defaultsKey],u;for(u in r)"publicProperties"!==
u&&r.hasOwnProperty(u)&&(this[u]=k&&u in k?k[u]:p&&u in p?p[u]:r[u])}else Ja&&window.console&&console.log("defaults not set")};V.prototype.get=function(k){var p=ra[this._defaultsKey];if("options"===k)return this.options&&this.options._isPlaceholder?null:this.options;if(p.hasOwnProperty(k)||p.publicProperties&&p.publicProperties.hasOwnProperty(k))return this[k];window.console&&window.console.log('Property "'+k+"\" doesn't exist. Please check for typo.")};V.prototype.set=function(k,p,r){r="undefined"===
typeof r?!0:r;var u=ra[this._defaultsKey];if("options"===k)this.createUserOptions(p);else if(u.hasOwnProperty(k)||u.publicProperties&&u.publicProperties.hasOwnProperty(k)&&"readWrite"===u.publicProperties[k])this.options._isPlaceholder&&this.createUserOptions(),this.options[k]=p;else{window.console&&(u.publicProperties&&u.publicProperties.hasOwnProperty(k)&&"readOnly"===u.publicProperties[k]?window.console.log('Property "'+k+'" is read-only.'):window.console.log('Property "'+k+"\" doesn't exist. Please check for typo."));
return}r&&(this.stockChart||this.chart||this).render()};V.prototype.addTo=function(k,p,r,u){u="undefined"===typeof u?!0:u;var v=ra[this._defaultsKey];v.hasOwnProperty(k)||v.publicProperties&&v.publicProperties.hasOwnProperty(k)&&"readWrite"===v.publicProperties[k]?(this.options._isPlaceholder&&this.createUserOptions(),"undefined"===typeof this.options[k]&&(this.options[k]=[]),k=this.options[k],r="undefined"===typeof r||null===r?k.length:r,k.splice(r,0,p),u&&(this.chart||this).render()):window.console&&
(v.publicProperties&&v.publicProperties.hasOwnProperty(k)&&"readOnly"===v.publicProperties[k]?window.console.log('Property "'+k+'" is read-only.'):window.console.log('Property "'+k+"\" doesn't exist. Please check for typo."))};V.prototype.createUserOptions=function(k){if("undefined"!==typeof k||this.options._isPlaceholder)if(this.parent.options._isPlaceholder&&this.parent.createUserOptions(),this.isOptionsInArray){this.parent.options[this.optionsName]||(this.parent.options[this.optionsName]=[]);var p=
this.parent.options[this.optionsName],r=p.length;this.options._isPlaceholder||(Fa(p),r=p.indexOf(this.options));this.options="undefined"===typeof k?{}:k;p[r]=this.options}else this.options="undefined"===typeof k?{}:k,k=this.parent.options,this.optionsName?p=this.optionsName:(p=this._defaultsKey)&&0!==p.length?(r=p.charAt(0).toLowerCase(),1<p.length&&(r=r.concat(p.slice(1))),p=r):p=void 0,k[p]=this.options};V.prototype.remove=function(k){k="undefined"===typeof k?!0:k;if(this.isOptionsInArray){var p=
this.parent.options[this.optionsName];Fa(p);var r=p.indexOf(this.options);0<=r&&p.splice(r,1)}else delete this.parent.options[this.optionsName];k&&(this.chart||this).render()};V.prototype.updateOption=function(k){!ra[this._defaultsKey]&&(Ja&&window.console)&&console.log("defaults not set");var p=ra[this._defaultsKey],r={},v=this[k],E=this._themeOptionsKey,H=this._index;this.theme&&u(E)&&u(H)?r=u(ya[this.theme])?ya.light1:ya[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[E])&&
(null===H?r=this.parent.themeOptions[E]:0<this.parent.themeOptions[E].length&&(r=Math.min(this.parent.themeOptions[E].length-1,H),r=this.parent.themeOptions[E][r]));this.themeOptions=r;k in p&&(v=k in this.options?this.options[k]:r&&k in r?r[k]:p[k]);if(v===this[k])return!1;this[k]=v;return!0};V.prototype.trackChanges=function(k){if(!this.sessionVariables)throw"Session Variable Store not set";this.sessionVariables[k]=this.options[k]};V.prototype.isBeingTracked=function(k){this.options._oldOptions||
(this.options._oldOptions={});return this.options._oldOptions[k]?!0:!1};V.prototype.hasOptionChanged=function(k){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[k]!==this.options[k]};V.prototype.addEventListener=function(k,p,r){k&&p&&(this._eventListeners[k]=this._eventListeners[k]||[],this._eventListeners[k].push({context:r||this,eventHandler:p}))};V.prototype.removeEventListener=function(k,p){if(k&&p&&this._eventListeners[k])for(var r=this._eventListeners[k],
u=0;u<r.length;u++)if(r[u].eventHandler===p){r[u].splice(u,1);break}};V.prototype.removeAllEventListeners=function(){this._eventListeners=[]};V.prototype.dispatchEvent=function(k,p,r){if(k&&this._eventListeners[k]){p=p||{};for(var u=this._eventListeners[k],v=0;v<u.length;v++)u[v].eventHandler.call(u[v].context,p)}"function"===typeof this[k]&&this[k].call(r||this.chart,p)};Ga.prototype.registerSpace=function(k,p){"top"===k?this._topOccupied+=p.height:"bottom"===k?this._bottomOccupied+=p.height:"left"===
k?this._leftOccupied+=p.width:"right"===k&&(this._rightOccupied+=p.width)};Ga.prototype.unRegisterSpace=function(k,p){"top"===k?this._topOccupied-=p.height:"bottom"===k?this._bottomOccupied-=p.height:"left"===k?this._leftOccupied-=p.width:"right"===k&&(this._rightOccupied-=p.width)};Ga.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,
height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};Ga.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};qa(ka,V);ka.prototype._initialize=function(){u(this.padding)||"object"!==typeof this.padding?this.topPadding=this.rightPadding=this.bottomPadding=this.leftPadding=Number(this.padding)|0:(this.topPadding=u(this.padding.top)?0:Number(this.padding.top)|0,this.rightPadding=u(this.padding.right)?0:Number(this.padding.right)|
0,this.bottomPadding=u(this.padding.bottom)?0:Number(this.padding.bottom)|0,this.leftPadding=u(this.padding.left)?0:Number(this.padding.left)|0)};ka.prototype.render=function(k){if(0!==this.fontSize){k&&this.ctx.save();var p=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var r=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+r);"middle"===this.textBaseline&&(r=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var u=
0,v=this.topPadding,H=null;this.ctx.roundRect||Ea(this.ctx);(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,r,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(r=0;r<this._wrappedText.lines.length;r++)H=this._wrappedText.lines[r],"right"===this.horizontalAlign?u=(this.width-(this.leftPadding+this.rightPadding))/2-H.width/2+this.leftPadding:"left"===this.horizontalAlign?u=
this.leftPadding:"center"===this.horizontalAlign&&(u=(this.width-(this.leftPadding+this.rightPadding))/2-H.width/2+this.leftPadding),this.ctx.fillText(H.text,u,v),v+=H.height;this.ctx.font=p;k&&this.ctx.restore()}};ka.prototype.setText=function(k){this.text=k;this._isDirty=!0;this._wrappedText=null};ka.prototype.measureText=function(){this._lineHeight=Za(this.fontFamily,this.fontSize,this.fontWeight);if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);
this._isDirty=!1;return{width:this.width,height:this.height}};ka.prototype._getLineWithWidth=function(k,p,r){k=String(k);if(!k)return{text:"",width:0};var u=r=0,v=k.length-1,H=Infinity;for(this.ctx.font=this._getFontString();u<=v;){var H=Math.floor((u+v)/2),F=k.substr(0,H+1);r=this.ctx.measureText(F).width;if(r<p)u=H+1;else if(r>p)v=H-1;else break}r>p&&1<F.length&&(F=F.substr(0,F.length-1),r=this.ctx.measureText(F).width);p=!0;if(F.length===k.length||" "===k[F.length])p=!1;p&&(k=F.split(" "),1<k.length&&
k.pop(),F=k.join(" "),r=this.ctx.measureText(F).width);return{text:F,width:r}};ka.prototype._wrapText=function(){var k=new String(Ia(String(this.text))),p=[],r=this.ctx.font,u=0,v=0;this.ctx.font=this._getFontString();if(0===this.frontSize)v=u=0;else for(;0<k.length;){var H=this.maxHeight-(this.topPadding+this.bottomPadding),F=this._getLineWithWidth(k,this.maxWidth-(this.leftPadding+this.rightPadding),!1);F.height=this._lineHeight;p.push(F);var z=v,v=Math.max(v,F.width),u=u+F.height,k=Ia(k.slice(F.text.length,
k.length));H&&u>H&&(F=p.pop(),u-=F.height,v=z)}this._wrappedText={lines:p,width:v,height:u};this.width=v+(this.leftPadding+this.rightPadding);this.height=u+(this.topPadding+this.bottomPadding);this.ctx.font=r};ka.prototype._getFontString=function(){var k;k=""+(this.fontStyle?this.fontStyle+" ":"");k+=this.fontWeight?this.fontWeight+" ":"";k+=this.fontSize?this.fontSize+"px ":"";var p=this.fontFamily?this.fontFamily+"":"";!r&&p&&(p=p.split(",")[0],"'"!==p[0]&&'"'!==p[0]&&(p="'"+p+"'"));return k+=p};
qa(Va,V);qa(Aa,V);Aa.prototype.setLayout=function(){if(this.text){var k=this.dockInsidePlotArea?this.chart.plotArea:this.chart,p=k.layoutManager.getFreeSpace(),r=p.x1,v=p.y1,E=0,H=0,F=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,z,I;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=p.width-4-F*("center"===this.horizontalAlign?2:1)),H=0.5*p.height-this.margin-2,E=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||
"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=p.height-4),H=0.5*p.width-this.margin-2):"center"===this.horizontalAlign&&(null===this.maxWidth&&(this.maxWidth=p.width-4),H=0.5*p.height-4));var L;u(this.padding)||"number"!==typeof this.padding?u(this.padding)||"object"!==typeof this.padding||(L=this.padding.top?this.padding.top:this.padding.bottom?this.padding.bottom:0,L+=this.padding.bottom?this.padding.bottom:this.padding.top?this.padding.top:0,L*=1.25):L=2.5*this.padding;this.wrap||
(H=Math.min(H,Math.max(1.5*this.fontSize,this.fontSize+L)));H=new ka(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,maxHeight:H,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"});
L=H.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(v=p.y1+2,I="top"):"bottom"===this.verticalAlign&&(v=p.y2-2-L.height,I="bottom"),"left"===this.horizontalAlign?r=p.x1+2:"center"===this.horizontalAlign?r=p.x1+p.width/2-L.width/2:"right"===this.horizontalAlign&&(r=p.x2-2-L.width-F),z=this.horizontalAlign,this.width=L.width,this.height=L.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(r=p.x1+2,v=p.y2-2-(this.maxWidth/2-L.width/
2),E=-90,I="left",this.width=L.height,this.height=L.width):"right"===this.horizontalAlign?(r=p.x2-2,v=p.y1+2+(this.maxWidth/2-L.width/2),E=90,I="right",this.width=L.height,this.height=L.width):"center"===this.horizontalAlign&&(v=k.y1+(k.height/2-L.height/2),r=k.x1+(k.width/2-L.width/2),I="center",this.width=L.width,this.height=L.height),z="center");H.x=r;H.y=v;H.angle=E;H.horizontalAlign=z;this._textBlock=H;k.layoutManager.registerSpace(I,{width:this.width+("left"===I||"right"===I?this.margin+2:0),
height:this.height+("top"===I||"bottom"===I?this.margin+2:0)});this.bounds={x1:r,y1:v,x2:r+this.width,y2:v+this.height};this.ctx.textBaseline="top"}};Aa.prototype.render=function(){this._textBlock&&this._textBlock.render(!0)};qa(Ka,V);Ka.prototype.setLayout=Aa.prototype.setLayout;Ka.prototype.render=Aa.prototype.render;Wa.prototype.get=function(k,p){var r=null;0<this.pool.length?(r=this.pool.pop(),Oa(r,k,p)):r=ta(k,p);return r};Wa.prototype.release=function(k){this.pool.push(k)};qa(La,V);var Na={addTheme:function(k,
p){ya[k]=p},addColorSet:function(k,p){Ba[k]=p},addCultureInfo:function(k,p){Ma[k]=p},formatNumber:function(k,p,r){r=r||"en";if(Ma[r])return ba(k,p||"#,##0.##",new La(r));throw"Unknown Culture Name";},formatDate:function(k,p,r){r=r||"en";if(Ma[r])return Ca(k,p||"DD MMM YYYY",new La(r));throw"Unknown Culture Name";}}; true&&"undefined"!==typeof module.exports?module.exports=Na: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Na}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;Na.Chart=function(){function k(a,
d){return a.x-d.x}function p(a,d){d=d||{};this.theme=u(d.theme)||u(ya[d.theme])?"light1":d.theme;p.base.constructor.call(this,"Chart",null,d,null,null);var b=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=!1;this.renderCount=0;this.disableToolTip=this.animatedRender=!1;this.canvasPool=new Wa;this.allDOMEventHandlers=[];this.panEnabled=!1;this._defaultCursor=
"default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];if(this.container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId){this.container.innerHTML="";var c=0,e=0,c=this.options.width?this.width:0<this.container.clientWidth?this.container.clientWidth:this.width,e=this.options.height?this.height:0<this.container.clientHeight?this.container.clientHeight:this.height;this.width=c;this.height=e;this.x1=
this.y1=0;this.x2=this.width;this.y2=this.height;this._selectedColorSet="undefined"!==typeof Ba[this.colorSet]?Ba[this.colorSet]:Ba.colorSet1;this._canvasJSContainer=document.createElement("div");this._canvasJSContainer.setAttribute("class","canvasjs-chart-container");this._canvasJSContainer.style.position="relative";this._canvasJSContainer.style.textAlign="left";this._canvasJSContainer.style.cursor="auto";r||(this._canvasJSContainer.style.height="0px");this.container.appendChild(this._canvasJSContainer);
this.canvas=ta(c,e);this._preRenderCanvas=ta(c,e);this.canvas.style.position="absolute";this.canvas.style.WebkitUserSelect="none";this.canvas.style.MozUserSelect="none";this.canvas.style.msUserSelect="none";this.canvas.style.userSelect="none";this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Ea(this.ctx),this._preRenderCtx=this._preRenderCanvas.getContext("2d"),this._preRenderCtx.textBaseline="top",Ea(this._preRenderCtx),
r?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=ta(c,e),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=ta(c,e),this.overlaidCanvas.style.position="absolute",this.overlaidCanvas.style.webkitTapHighlightColor="transparent",this.overlaidCanvas.style.WebkitUserSelect="none",this.overlaidCanvas.style.MozUserSelect=
"none",this.overlaidCanvas.style.msUserSelect="none",this.overlaidCanvas.style.userSelect="none",this.overlaidCanvas.getContext&&(this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",Ea(this.overlaidCanvasCtx)),this._eventManager=new ha(this),this.windowResizeHandler=O(window,"resize",function(){b._updateSize()&&b.render()},this.allDOMEventHandlers),this._toolBar=document.createElement("div"),
this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 1px; top: 1px;",this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},O(this.overlaidCanvas,"click",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,"mousemove",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,"mouseup",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),
O(this.overlaidCanvas,"mousedown",function(a){b._mouseEventHandler(a);va(b._dropdownMenu)},this.allDOMEventHandlers),O(this.overlaidCanvas,"mouseout",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),
O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),this.toolTip=new $(this,this.options.toolTip),this.data=null,this.axisX=[],this.axisX2=[],this.axisY=[],this.axisY2=[],this.sessionVariables={axisX:[],axisX2:[],axisY:[],axisY2:[]})}else window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+
this._containerId+'" was not found')}function v(a,d){for(var b=[],c,e=0;e<a.length;e++)if(0==e)b.push(a[0]);else{var g,m,l;l=e-1;g=0===l?0:l-1;m=l===a.length-1?l:l+1;c=Math.abs((a[m].x-a[g].x)/(0===a[m].x-a[l].x?0.01:a[m].x-a[l].x))*(d-1)/2+1;var w=(a[m].x-a[g].x)/c;c=(a[m].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<w||a[l].x<a[g].x&&0>w?{x:a[l].x+w/3,y:a[l].y+c/3}:{x:a[l].x,y:a[l].y+c/9};l=e;g=0===l?0:l-1;m=l===a.length-1?l:l+1;c=Math.abs((a[m].x-a[g].x)/(0===a[l].x-a[g].x?0.01:a[l].x-a[g].x))*(d-
1)/2+1;w=(a[m].x-a[g].x)/c;c=(a[m].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<w||a[l].x<a[g].x&&0>w?{x:a[l].x-w/3,y:a[l].y-c/3}:{x:a[l].x,y:a[l].y-c/9};b[b.length]=a[e]}return b}function E(a,d,b,c,e,g,m,l,w,h){var s=0;h?(m.color=g,l.color=g):h=1;s=w?Math.abs(e-b):Math.abs(c-d);s=0<m.trimLength?Math.abs(s*m.trimLength/100):Math.abs(s-m.length);w?(b+=s/2,e-=s/2):(d+=s/2,c-=s/2);var s=1===Math.round(m.thickness)%2?0.5:0,q=1===Math.round(l.thickness)%2?0.5:0;a.save();a.globalAlpha=h;a.strokeStyle=l.color||
g;a.lineWidth=l.thickness||2;a.setLineDash&&a.setLineDash(R(l.dashType,l.thickness));a.beginPath();w&&0<l.thickness?(a.moveTo(c-m.thickness/2,Math.round((b+e)/2)-q),a.lineTo(d+m.thickness/2,Math.round((b+e)/2)-q)):0<l.thickness&&(a.moveTo(Math.round((d+c)/2)-q,b+m.thickness/2),a.lineTo(Math.round((d+c)/2)-q,e-m.thickness/2));a.stroke();a.strokeStyle=m.color||g;a.lineWidth=m.thickness||2;a.setLineDash&&a.setLineDash(R(m.dashType,m.thickness));a.beginPath();w&&0<m.thickness?(a.moveTo(c-s,b),a.lineTo(c-
s,e),a.moveTo(d+s,b),a.lineTo(d+s,e)):0<m.thickness&&(a.moveTo(d,b+s),a.lineTo(c,b+s),a.moveTo(d,e-s),a.lineTo(c,e-s));a.stroke();a.restore()}function I(a,d,b,c,e){if(null===a||"undefined"===typeof a)return"undefined"===typeof b?d:b;a=parseFloat(a.toString())*(0<=a.toString().indexOf("%")?d/100:1);"undefined"!==typeof c&&(a=Math.min(c,a),"undefined"!==typeof e&&(a=Math.max(e,a)));return!isNaN(a)&&a<=d&&0<=a?a:"undefined"===typeof b?d:b}function H(a,d){H.base.constructor.call(this,"Legend","legend",
d,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.optionsName="legend";this.height=this.width=0;this.orientation=null;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=Za(this.fontFamily,this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function F(a,d,b,c){F.base.constructor.call(this,
"DataSeries","data",d,b,a);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=b;this.noDataPointsInPlotArea=0;this.id=c;this.chart._eventManager.objectMap[c]={id:c,objectType:"dataSeries",dataSeriesIndex:b};a=d.dataPoints?d.dataPoints.length:0;this.dataPointEOs=[];for(d=0;d<a;d++)this.dataPointEOs[d]={};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=null;this.optionsName="data";this.isOptionsInArray=!0;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=
0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this.options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function z(a,d,b,c,e,g){z.base.constructor.call(this,"Axis",d,b,c,a);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this.dataSeries=[];this._stripLineLabels=this._ticks=this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,
viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};this.isOptionsInArray=!0;"axisX"===e?("left"===g||"bottom"===g?(this.optionsName="axisX",u(this.chart.sessionVariables.axisX[c])&&(this.chart.sessionVariables.axisX[c]={}),this.sessionVariables=this.chart.sessionVariables.axisX[c]):(this.optionsName="axisX2",u(this.chart.sessionVariables.axisX2[c])&&(this.chart.sessionVariables.axisX2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisX2[c]),this.options.interval||(this.intervalType=
null)):"left"===g||"bottom"===g?(this.optionsName="axisY",u(this.chart.sessionVariables.axisY[c])&&(this.chart.sessionVariables.axisY[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY[c]):(this.optionsName="axisY2",u(this.chart.sessionVariables.axisY2[c])&&(this.chart.sessionVariables.axisY2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY2[c]);"undefined"===typeof this.options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===
typeof this.options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=e;"axisX"!==e||b&&"undefined"!==typeof b.gridThickness||(this.gridThickness=0);this._position=g;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);this.options.scaleBreaks&&(this.scaleBreaks=new Q(this.chart,
this.options.scaleBreaks,++this.chart._eventManager.lastObjectId,this));this.stripLines=[];if(this.options.stripLines&&0<this.options.stripLines.length)for(a=0;a<this.options.stripLines.length;a++)this.stripLines.push(new X(this.chart,this.options.stripLines[a],a,++this.chart._eventManager.lastObjectId,this));this.options.crosshair&&(this.crosshair=new fa(this.chart,this.options.crosshair,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&(this.options.viewportMinimum=
void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===this.viewportMaximum&&(this.options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||isNaN(this.sessionVariables.newViewportMaximum)||
null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}function Q(a,d,b,c){Q.base.constructor.call(this,
"ScaleBreaks","scaleBreaks",d,null,c);this.id=b;this.chart=a;this.ctx=this.chart.ctx;this.axis=c;this.optionsName="scaleBreaks";this.isOptionsInArray=!1;this._appliedBreaks=[];this.customBreaks=[];this.autoBreaks=[];"string"===typeof this.spacing?(this.spacing=parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?8:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.spacing&&(this.spacing=8);this.autoCalculate&&(this.maxNumberOfAutoBreaks=Math.min(this.maxNumberOfAutoBreaks,5));if(this.options.customBreaks&&
0<this.options.customBreaks.length){for(a=0;a<this.options.customBreaks.length;a++)this.customBreaks.push(new L(this.chart,"customBreaks",this.options.customBreaks[a],a,++this.chart._eventManager.lastObjectId,this)),"number"===typeof this.customBreaks[a].startValue&&("number"===typeof this.customBreaks[a].endValue&&this.customBreaks[a].endValue!==this.customBreaks[a].startValue)&&this._appliedBreaks.push(this.customBreaks[a]);this._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue});
for(a=0;a<this._appliedBreaks.length-1;a++)this._appliedBreaks[a].endValue>=this._appliedBreaks[a+1].startValue&&(this._appliedBreaks[a].endValue=Math.max(this._appliedBreaks[a].endValue,this._appliedBreaks[a+1].endValue),window.console&&window.console.log("CanvasJS Error: Breaks "+a+" and "+(a+1)+" are overlapping."),this._appliedBreaks.splice(a,2),a--)}}function L(a,d,b,c,e,g){L.base.constructor.call(this,"Break",d,b,c,g);this.id=e;this.chart=a;this.ctx=this.chart.ctx;this.scaleBreaks=g;this.optionsName=
d;this.isOptionsInArray=!0;this.type=b.type?this.type:g.type;this.fillOpacity=u(b.fillOpacity)?g.fillOpacity:this.fillOpacity;this.lineThickness=u(b.lineThickness)?g.lineThickness:this.lineThickness;this.color=b.color?this.color:g.color;this.lineColor=b.lineColor?this.lineColor:g.lineColor;this.lineDashType=b.lineDashType?this.lineDashType:g.lineDashType;!u(this.startValue)&&this.startValue.getTime&&(this.startValue=this.startValue.getTime());!u(this.endValue)&&this.endValue.getTime&&(this.endValue=
this.endValue.getTime());"number"===typeof this.startValue&&("number"===typeof this.endValue&&this.endValue<this.startValue)&&(a=this.startValue,this.startValue=this.endValue,this.endValue=a);this.spacing="undefined"===typeof b.spacing?g.spacing:b.spacing;"string"===typeof this.options.spacing?(this.spacing=parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?0:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.options.spacing&&(this.spacing=g.spacing);this.size=g.parent.logarithmic?
1:0}function X(a,d,b,c,e){X.base.constructor.call(this,"StripLine","stripLines",d,b,e);this.id=c;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this.axis=e;this.optionsName="stripLines";this.isOptionsInArray=!0;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=e.logarithmic?Math.sqrt((this.startValue.getTime?this.startValue.getTime():this.startValue)*(this.endValue.getTime?this.endValue.getTime():this.endValue)):((this.startValue.getTime?this.startValue.getTime():
this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this._thicknessType=null)}function fa(a,d,b){fa.base.constructor.call(this,"Crosshair","crosshair",d,null,b);this.chart=a;this.ctx=this.chart.ctx;this.axis=b;this.optionsName="crosshair";this._thicknessType="pixel"}function $(a,d){$.base.constructor.call(this,"ToolTip","toolTip",d,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._prevY=this._prevX=
NaN;this.containerTransitionDuration=0.1;this.mozContainerTransition=this.getContainerTransition(this.containerTransitionDuration);this.optionsName="toolTip";this._initialize()}function ha(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=ta(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function ga(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;
this.animations=[];this.animationRequestId=null}qa(p,V);p.prototype.destroy=function(){var a=this.allDOMEventHandlers;this._animator&&this._animator.cancelAllAnimations();this._panTimerId&&clearTimeout(this._panTimerId);for(var d=0;d<a.length;d++){var b=a[d][0],c=a[d][1],e=a[d][2],g=a[d][3],g=g||!1;b.removeEventListener?b.removeEventListener(c,e,g):b.detachEvent&&b.detachEvent("on"+c,e)}this.allDOMEventHandlers=[];for(this.removeAllEventListeners();this._canvasJSContainer&&this._canvasJSContainer.hasChildNodes();)this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
for(;this.container&&this.container.hasChildNodes();)this.container.removeChild(this.container.lastChild);for(;this._dropdownMenu&&this._dropdownMenu.hasChildNodes();)this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);this.overlaidCanvas=this.canvas=this.container=this._canvasJSContainer=null;this._toolBar=this._dropdownMenu=this._menuButton=this._resetButton=this._zoomButton=this._breaksCanvas=this._preRenderCanvas=this.toolTip.container=null};p.prototype._updateOptions=function(){var a=
this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof Ba[this.colorSet]?Ba[this.colorSet]:Ba.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");this._cultureInfo=
new La(this.options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&r;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");this.updateOption("zoomType");if(this.options.zoomEnabled){if(!this._zoomButton){var d=!1;va(this._zoomButton=document.createElement("button"));ua(this,this._zoomButton,"pan");this._toolBar.appendChild(this._zoomButton);
this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor;O(this._zoomButton,"touchstart",function(a){d=!0},this.allDOMEventHandlers);O(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,ua(a,a._zoomButton,"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,ua(a,a._zoomButton,"pan"));a.render()},this.allDOMEventHandlers);O(this._zoomButton,"mouseover",function(){d?d=!1:(sa(a,a._zoomButton,{backgroundColor:a.toolbar.backgroundColorOnHover,
color:a.toolbar.fontColorOnHover,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._zoomButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers);O(this._zoomButton,"mouseout",function(){d||(sa(a,a._zoomButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._zoomButton.childNodes[0],{WebkitFilter:"invert(0%)",
filter:"invert(0%)"}))},this.allDOMEventHandlers)}this._resetButton||(d=!1,va(this._resetButton=document.createElement("button")),ua(this,this._resetButton,"reset"),this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor,this._toolBar.appendChild(this._resetButton),O(this._resetButton,"touchstart",function(a){d=!0},this.allDOMEventHandlers),O(this._resetButton,"click",function(){a.toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=
!0,a.panEnabled=!1,ua(a,a._zoomButton,"pan"),a._defaultCursor="default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);if(a.sessionVariables.axisX)for(var c=0;c<a.sessionVariables.axisX.length;c++)a.sessionVariables.axisX[c].newViewportMinimum=null,a.sessionVariables.axisX[c].newViewportMaximum=null;if(a.sessionVariables.axisX2)for(c=0;c<a.sessionVariables.axisX2.length;c++)a.sessionVariables.axisX2[c].newViewportMinimum=null,a.sessionVariables.axisX2[c].newViewportMaximum=
null;if(a.sessionVariables.axisY)for(c=0;c<a.sessionVariables.axisY.length;c++)a.sessionVariables.axisY[c].newViewportMinimum=null,a.sessionVariables.axisY[c].newViewportMaximum=null;if(a.sessionVariables.axisY2)for(c=0;c<a.sessionVariables.axisY2.length;c++)a.sessionVariables.axisY2[c].newViewportMinimum=null,a.sessionVariables.axisY2[c].newViewportMaximum=null;a.resetOverlayedCanvas();va(a._zoomButton,a._resetButton);a._dispatchRangeEvent("rangeChanging","reset");a.render();a._dispatchRangeEvent("rangeChanged",
"reset");a.syncCharts&&a.syncCharts(null,null)},this.allDOMEventHandlers),O(this._resetButton,"mouseover",function(){d||(sa(a,a._resetButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.hoverFfontColorOnHoverontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._resetButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers),O(this._resetButton,"mouseout",function(){d||(sa(a,a._resetButton,
{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._resetButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},this.allDOMEventHandlers),this.overlaidCanvas.style.cursor=a._defaultCursor);this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=
!1),Qa(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))}else this.panEnabled=this.zoomEnabled=!1;this._menuButton?this.exportEnabled?Qa(this._menuButton):va(this._menuButton):this.exportEnabled&&r&&(d=!1,this._menuButton=document.createElement("button"),ua(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),O(this._menuButton,"touchstart",function(a){d=!0},this.allDOMEventHandlers),O(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||
a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),a._dropdownMenu.focus())},this.allDOMEventHandlers,!0),O(this._menuButton,"mouseover",function(){d||(sa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.fontColorOnHover}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._menuButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers,!0),
O(this._menuButton,"mouseout",function(){d||(sa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor}),0>=navigator.userAgent.search("MSIE")&&sa(a,a._menuButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},this.allDOMEventHandlers,!0));if(!this._dropdownMenu&&this.exportEnabled&&r){d=!1;this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",-1);var b=-1!==this.theme.indexOf("dark")?"black":"#888888";this._dropdownMenu.style.cssText=
"position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:"+this.toolbar.backgroundColor+";box-shadow: 2px 2px 10px "+b;a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);O(this._dropdownMenu,"blur",function(){va(a._dropdownMenu);
a._dropDownCloseTime=new Date},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.printText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){d=!0},this.allDOMEventHandlers);O(b,"mouseover",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,
!0);O(b,"mouseout",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);O(b,"click",function(){a.print();va(a._dropdownMenu)},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.saveJPGText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){d=
!0},this.allDOMEventHandlers);O(b,"mouseover",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,!0);O(b,"mouseout",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);O(b,"click",function(){Ta(a.canvas,"jpeg",a.exportFileName);va(a._dropdownMenu)},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText=
"padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.savePNGText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){d=!0},this.allDOMEventHandlers);O(b,"mouseover",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,!0);O(b,"mouseout",function(){d||(this.style.backgroundColor=a.toolbar.backgroundColor,
this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);O(b,"click",function(){Ta(a.canvas,"png",a.exportFileName);va(a._dropdownMenu)},this.allDOMEventHandlers,!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?ua(a,a._zoomButton,"zoom"):ua(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&ua(a,a._resetButton,"reset"));this.options.toolTip&&this.toolTip.options!==this.options.toolTip&&(this.toolTip.options=this.options.toolTip);
for(var c in this.toolTip.options)this.toolTip.options.hasOwnProperty(c)&&this.toolTip.updateOption(c)};p.prototype._updateSize=function(){var a;a=[this.canvas,this._preRenderCanvas,this.overlaidCanvas,this._eventManager.ghostCanvas];var d=0,b=0;this.options.width?d=this.width:this.width=d=0<this.container.clientWidth?this.container.clientWidth:this.width;this.options.height?b=this.height:this.height=b=0<this.container.clientHeight?this.container.clientHeight:this.height;if(this.canvas.width!==d*
W||this.canvas.height!==b*W){for(var c=0;c<a.length;c++)Oa(a[c],d,b);a=!0}else a=!1;return a};p.prototype._initialize=function(){this.isNavigator=u(this.parent)||u(this.parent._defaultsKey)||"Navigator"!==this.parent._defaultsKey?!1:!0;this.toolbar=new Va(this,this.options.toolbar);this._animator?this._animator.cancelAllAnimations():this._animator=new ga(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.funnelPyramidClickHandler=this.pieDoughnutClickHandler=null;this._updateOptions();
this.animatedRender=r&&this.animationEnabled&&0===this.renderCount;this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisX=[];this.axisX2=[];this.axisY=[];this.axisY2=[];this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,plotTypes:[]};this.layoutManager=new Ga(0,0,this.width,this.height,this.isNavigator?0:2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();this.data=[];var a=
0,d=null;if(this.options.data){for(var b=0;b<this.options.data.length;b++)if(a++,!this.options.data[b].type||0<=p._supportedChartTypes.indexOf(this.options.data[b].type)){var c=new F(this,this.options.data[b],a-1,++this._eventManager.lastObjectId);"error"===c.type&&(c.linkedDataSeriesIndex=u(this.options.data[b].linkedDataSeriesIndex)?b-1:this.options.data[b].linkedDataSeriesIndex,0>c.linkedDataSeriesIndex||c.linkedDataSeriesIndex>=this.options.data.length||"number"!==typeof c.linkedDataSeriesIndex||
"error"===this.options.data[c.linkedDataSeriesIndex].type)&&(c.linkedDataSeriesIndex=null);null===c.name&&(c.name="DataSeries "+a);null===c.color?1<this.options.data.length?(c._colorSet=[this._selectedColorSet[c.index%this._selectedColorSet.length]],c.color=this._selectedColorSet[c.index%this._selectedColorSet.length]):c._colorSet="line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||
"rangeArea"===c.type||"rangeSplineArea"===c.type||"candlestick"===c.type||"ohlc"===c.type||"waterfall"===c.type||"boxAndWhisker"===c.type?[this._selectedColorSet[0]]:this._selectedColorSet:c._colorSet=[c.color];null===c.markerSize&&(("line"===c.type||"stepLine"===c.type||"spline"===c.type||0<=c.type.toLowerCase().indexOf("area"))&&c.dataPoints&&c.dataPoints.length<this.width/16||"scatter"===c.type)&&(c.markerSize=8);"bubble"!==c.type&&"scatter"!==c.type||!c.dataPoints||(c.dataPoints.some?c.dataPoints.some(function(a){return a.x})&&
c.dataPoints.sort(k):c.dataPoints.sort(k));this.data.push(c);var e=c.axisPlacement,d=d||e,g;"normal"===e?"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?
g='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"):null===e&&"none"===this.plotInfo.axisPlacement&&(g='You cannot combine "'+c.type+'" with pie chart');
if(g&&window.console){window.console.log(g);return}}for(b=0;b<this.data.length;b++){if("none"==d&&"error"===this.data[b].type&&window.console){window.console.log('You cannot combine "'+c.type+'" with error chart');return}"error"===this.data[b].type&&(this.data[b].axisPlacement=this.plotInfo.axisPlacement=d||"normal",this.data[b]._linkedSeries=null===this.data[b].linkedDataSeriesIndex?null:this.data[this.data[b].linkedDataSeriesIndex])}}this._objectsInitialized=!0;this._plotAreaElements=[]};p._supportedChartTypes=
Fa("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));p.prototype.setLayout=function(){for(var a=this._plotAreaElements,d=0;d<this.data.length;d++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement){if(!this.data[d].axisYType||
"primary"===this.data[d].axisYType)if(this.options.axisY&&0<this.options.axisY.length){if(!this.axisY.length)for(var b=0;b<this.options.axisY.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[b]=new z(this,"axisY",this.options.axisY[b],b,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[b]=new z(this,"axisY",this.options.axisY[b],b,"axisY","bottom"));this.data[d].axisY=this.axisY[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<this.axisY.length?
this.data[d].axisYIndex:0];this.axisY[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<this.axisY.length?this.data[d].axisYIndex:0].dataSeries.push(this.data[d])}else this.axisY.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[0]=new z(this,"axisY",this.options.axisY,0,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[0]=new z(this,"axisY",this.options.axisY,0,"axisY","bottom"))),this.data[d].axisY=this.axisY[0],this.axisY[0].dataSeries.push(this.data[d]);
if("secondary"===this.data[d].axisYType)if(this.options.axisY2&&0<this.options.axisY2.length){if(!this.axisY2.length)for(b=0;b<this.options.axisY2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[b]=new z(this,"axisY2",this.options.axisY2[b],b,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[b]=new z(this,"axisY2",this.options.axisY2[b],b,"axisY","top"));this.data[d].axisY=this.axisY2[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<
this.axisY2.length?this.data[d].axisYIndex:0];this.axisY2[0<=this.data[d].axisYIndex&&this.data[d].axisYIndex<this.axisY2.length?this.data[d].axisYIndex:0].dataSeries.push(this.data[d])}else this.axisY2.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[0]=new z(this,"axisY2",this.options.axisY2,0,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[0]=new z(this,"axisY2",this.options.axisY2,0,"axisY","top"))),this.data[d].axisY=this.axisY2[0],
this.axisY2[0].dataSeries.push(this.data[d]);if(!this.data[d].axisXType||"primary"===this.data[d].axisXType)if(this.options.axisX&&0<this.options.axisX.length){if(!this.axisX.length)for(b=0;b<this.options.axisX.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[b]=new z(this,"axisX",this.options.axisX[b],b,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[b]=new z(this,"axisX",this.options.axisX[b],b,"axisX","left"));this.data[d].axisX=
this.axisX[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX.length?this.data[d].axisXIndex:0];this.axisX[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX.length?this.data[d].axisXIndex:0].dataSeries.push(this.data[d])}else this.axisX.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[0]=new z(this,"axisX",this.options.axisX,0,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[0]=new z(this,"axisX",this.options.axisX,
0,"axisX","left"))),this.data[d].axisX=this.axisX[0],this.axisX[0].dataSeries.push(this.data[d]);if("secondary"===this.data[d].axisXType)if(this.options.axisX2&&0<this.options.axisX2.length){if(!this.axisX2.length)for(b=0;b<this.options.axisX2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[b]=new z(this,"axisX2",this.options.axisX2[b],b,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[b]=new z(this,"axisX2",this.options.axisX2[b],
b,"axisX","right"));this.data[d].axisX=this.axisX2[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX2.length?this.data[d].axisXIndex:0];this.axisX2[0<=this.data[d].axisXIndex&&this.data[d].axisXIndex<this.axisX2.length?this.data[d].axisXIndex:0].dataSeries.push(this.data[d])}else this.axisX2.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[0]=new z(this,"axisX2",this.options.axisX2,0,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[0]=
new z(this,"axisX2",this.options.axisX2,0,"axisX","right"))),this.data[d].axisX=this.axisX2[0],this.axisX2[0].dataSeries.push(this.data[d])}if(this.axisY){for(b=1;b<this.axisY.length;b++)"undefined"===typeof this.axisY[b].options.gridThickness&&(this.axisY[b].gridThickness=0);for(b=0;b<this.axisY.length-1;b++)"undefined"===typeof this.axisY[b].options.margin&&(this.axisY[b].margin=10)}if(this.axisY2){for(b=1;b<this.axisY2.length;b++)"undefined"===typeof this.axisY2[b].options.gridThickness&&(this.axisY2[b].gridThickness=
0);for(b=0;b<this.axisY2.length-1;b++)"undefined"===typeof this.axisY2[b].options.margin&&(this.axisY2[b].margin=10)}this.axisY&&0<this.axisY.length&&(this.axisY2&&0<this.axisY2.length)&&(0<this.axisY[0].gridThickness&&"undefined"===typeof this.axisY2[0].options.gridThickness?this.axisY2[0].gridThickness=0:0<this.axisY2[0].gridThickness&&"undefined"===typeof this.axisY[0].options.gridThickness&&(this.axisY[0].gridThickness=0));if(this.axisX)for(b=0;b<this.axisX.length;b++)"undefined"===typeof this.axisX[b].options.gridThickness&&
(this.axisX[b].gridThickness=0);if(this.axisX2)for(b=0;b<this.axisX2.length;b++)"undefined"===typeof this.axisX2[b].options.gridThickness&&(this.axisX2[b].gridThickness=0);this.axisX&&0<this.axisX.length&&(this.axisX2&&0<this.axisX2.length)&&(0<this.axisX[0].gridThickness&&"undefined"===typeof this.axisX2[0].options.gridThickness?this.axisX2[0].gridThickness=0:0<this.axisX2[0].gridThickness&&"undefined"===typeof this.axisX[0].options.gridThickness&&(this.axisX[0].gridThickness=0));b=!1;if(0<this._axes.length&&
(this.zoomEnabled||this.panEnabled))for(d=0;d<this._axes.length;d++)if(null!==this._axes[d].viewportMinimum||null!==this._axes[d].viewportMaximum){b=!0;break}b?(Qa(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor,this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor,this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor):
(va(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid transparent",this.options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));gb(this);this._processData();this.options.title&&(this.title=new Aa(this,this.options.title),this.title.dockInsidePlotArea?a.push(this.title):this.title.setLayout());this.subtitles=[];if(this.options.subtitles)for(d=0;d<this.options.subtitles.length;d++)b=new Ka(this,this.options.subtitles[d],d),this.subtitles.push(b),
b.dockInsidePlotArea?a.push(b):b.setLayout();this.legend=new H(this,this.options.legend);for(d=0;d<this.data.length;d++)(this.data[d].showInLegend||"pie"===this.data[d].type||"doughnut"===this.data[d].type||"funnel"===this.data[d].type||"pyramid"===this.data[d].type)&&this.legend.dataSeries.push(this.data[d]);this.legend.dockInsidePlotArea?a.push(this.legend):this.legend.setLayout();for(d=0;d<this._axes.length;d++)if(this._axes[d].scaleBreaks&&this._axes[d].scaleBreaks._appliedBreaks.length){r?(this._breaksCanvas=
ta(this.width,this.height,!0),this._breaksCanvasCtx=this._breaksCanvas.getContext("2d")):(this._breaksCanvas=this.canvas,this._breaksCanvasCtx=this.ctx);break}this._preRenderCanvas=u(this._preRenderCanvas)?ta(this.width,this.height):this._preRenderCanvas;this._preRenderCtx=this._preRenderCanvas.getContext("2d");"normal"!==this.plotInfo.axisPlacement&&"xySwapped"!==this.plotInfo.axisPlacement||z.setLayout(this.axisX,this.axisX2,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace())};
p.prototype.renderElements=function(){var a=this._plotAreaElements;this.title&&!this.title.dockInsidePlotArea&&this.title.render();for(var d=0;d<this.subtitles.length;d++)this.subtitles[d].dockInsidePlotArea||this.subtitles[d].render();this.legend.dockInsidePlotArea||this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)z.render(this.axisX,this.axisX2,this.axisY,this.axisY2,this.plotInfo.axisPlacement);else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();
else return;for(d=0;d<a.length;d++)a[d].setLayout(),a[d].render();var b=[];if(this.animatedRender){var c=ta(this.width,this.height);c.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height)}hb(this);var a=this.ctx.miterLimit,e;this.ctx.miterLimit=3;r&&this._breaksCanvas&&(this._preRenderCtx.drawImage(this.canvas,0,0,this.width,this.height),this._preRenderCtx.drawImage(this._breaksCanvas,0,0,this.width,this.height),this._breaksCanvasCtx.globalCompositeOperation="source-atop",this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),this._preRenderCtx.clearRect(0,0,this.width,this.height));for(d=0;d<this.plotInfo.plotTypes.length;d++)for(var g=this.plotInfo.plotTypes[d],m=0;m<g.plotUnits.length;m++){var l=g.plotUnits[m],w=null;l.targetCanvas=null;this.animatedRender&&(l.targetCanvas=ta(this.width,this.height),l.targetCanvasCtx=l.targetCanvas.getContext("2d"),e=l.targetCanvasCtx.miterLimit,l.targetCanvasCtx.miterLimit=3);"line"===l.type?w=this.renderLine(l):"stepLine"===l.type?w=this.renderStepLine(l):
"spline"===l.type?w=this.renderSpline(l):"column"===l.type?w=this.renderColumn(l):"bar"===l.type?w=this.renderBar(l):"area"===l.type?w=this.renderArea(l):"stepArea"===l.type?w=this.renderStepArea(l):"splineArea"===l.type?w=this.renderSplineArea(l):"stackedColumn"===l.type?w=this.renderStackedColumn(l):"stackedColumn100"===l.type?w=this.renderStackedColumn100(l):"stackedBar"===l.type?w=this.renderStackedBar(l):"stackedBar100"===l.type?w=this.renderStackedBar100(l):"stackedArea"===l.type?w=this.renderStackedArea(l):
"stackedArea100"===l.type?w=this.renderStackedArea100(l):"bubble"===l.type?w=w=this.renderBubble(l):"scatter"===l.type?w=this.renderScatter(l):"pie"===l.type?this.renderPie(l):"doughnut"===l.type?this.renderPie(l):"funnel"===l.type?w=this.renderFunnel(l):"pyramid"===l.type?w=this.renderFunnel(l):"candlestick"===l.type?w=this.renderCandlestick(l):"ohlc"===l.type?w=this.renderCandlestick(l):"rangeColumn"===l.type?w=this.renderRangeColumn(l):"error"===l.type?w=this.renderError(l):"rangeBar"===l.type?
w=this.renderRangeBar(l):"rangeArea"===l.type?w=this.renderRangeArea(l):"rangeSplineArea"===l.type?w=this.renderRangeSplineArea(l):"waterfall"===l.type?w=this.renderWaterfall(l):"boxAndWhisker"===l.type&&(w=this.renderBoxAndWhisker(l));for(var h=0;h<l.dataSeriesIndexes.length;h++)this._dataInRenderedOrder.push(this.data[l.dataSeriesIndexes[h]]);this.animatedRender&&(l.targetCanvasCtx.miterLimit=e,w&&b.push(w))}this.ctx.miterLimit=a;this.animatedRender&&this._breaksCanvasCtx&&b.push({source:this._breaksCanvasCtx,
dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0,startTimePercent:0.7});this.animatedRender&&0<this._indexLabels.length&&(e=ta(this.width,this.height).getContext("2d"),b.push(this.renderIndexLabels(e)));var s=this;if(0<b.length)s.disableToolTip=!0,s._animator.animate(200,s.animationDuration,function(a){s.ctx.clearRect(0,0,s.width,s.height);s.ctx.drawImage(c,0,0,Math.floor(s.width*W),Math.floor(s.height*W),0,0,s.width,s.height);for(var e=
0;e<b.length;e++)w=b[e],1>a&&"undefined"!==typeof w.startTimePercent?a>=w.startTimePercent&&w.animationCallback(w.easingFunction(a-w.startTimePercent,0,1,1-w.startTimePercent),w):w.animationCallback(w.easingFunction(a,0,1,1),w);s.dispatchEvent("dataAnimationIterationEnd",{chart:s})},function(){b=[];for(var a=0;a<s.plotInfo.plotTypes.length;a++)for(var e=s.plotInfo.plotTypes[a],d=0;d<e.plotUnits.length;d++)e.plotUnits[d].targetCanvas=null;c=null;s.disableToolTip=!1});else{if(s._breaksCanvas)if(r)s.plotArea.ctx.drawImage(s._breaksCanvas,
0,0,this.width,this.height);else for(h=0;h<s._axes.length;h++)s._axes[h].createMask();0<s._indexLabels.length&&s.renderIndexLabels();s.dispatchEvent("dataAnimationIterationEnd",{chart:s})}this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||va(this._zoomButton,this._resetButton);this.toolTip._updateToolTip();this.renderCount++;Ja&&(s=this,setTimeout(function(){var a=document.getElementById("ghostCanvasCopy");a&&(Oa(a,s.width,
s.height),a.getContext("2d").drawImage(s._eventManager.ghostCanvas,0,0))},2E3));this._breaksCanvas&&(delete this._breaksCanvas,delete this._breaksCanvasCtx);for(h=0;h<this._axes.length;h++)this._axes[h].maskCanvas&&(delete this._axes[h].maskCanvas,delete this._axes[h].maskCtx)};p.prototype.render=function(a){a&&(this.options=a);this._initialize();this.setLayout();this.renderElements()};p.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,
mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};p.prototype.categoriseDataSeries=function(){for(var a="",d=0;d<this.data.length;d++)if(a=this.data[d],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=p._supportedChartTypes.indexOf(a.type)){for(var b=null,c=!1,e=null,g=!1,m=0;m<this.plotInfo.plotTypes.length;m++)if(this.plotInfo.plotTypes[m].type===a.type){c=!0;b=this.plotInfo.plotTypes[m];break}c||(b={type:a.type,
totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(m=0;m<b.plotUnits.length;m++)if(b.plotUnits[m].axisYType===a.axisYType&&b.plotUnits[m].axisXType===a.axisXType&&b.plotUnits[m].axisYIndex===a.axisYIndex&&b.plotUnits[m].axisXIndex===a.axisXIndex){g=!0;e=b.plotUnits[m];break}g||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisXType:a.axisXType,axisYType:a.axisYType,axisYIndex:a.axisYIndex,axisXIndex:a.axisXIndex,axisY:"primary"===a.axisYType?this.axisY[0<=
a.axisYIndex&&a.axisYIndex<this.axisY.length?a.axisYIndex:0]:this.axisY2[0<=a.axisYIndex&&a.axisYIndex<this.axisY2.length?a.axisYIndex:0],axisX:"primary"===a.axisXType?this.axisX[0<=a.axisXIndex&&a.axisXIndex<this.axisX.length?a.axisXIndex:0]:this.axisX2[0<=a.axisXIndex&&a.axisXIndex<this.axisX2.length?a.axisXIndex:0],dataSeriesIndexes:[],yTotals:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(d);a.plotUnit=e}for(d=0;d<this.plotInfo.plotTypes.length;d++)for(b=this.plotInfo.plotTypes[d],
m=a=0;m<b.plotUnits.length;m++)b.plotUnits[m].previousDataSeriesCount=a,a+=b.plotUnits[m].dataSeriesIndexes.length};p.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var d=this.data[a];if(d.dataPoints)for(var b=d.dataPoints.length,c=0;c<b;c++)d.dataPointIds[c]=++this._eventManager.lastObjectId}};p.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var d=this.plotInfo.plotTypes[a],
b=0;b<d.plotUnits.length;b++){var c=d.plotUnits[b];"line"===c.type||"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type?this._processMultiseriesPlotUnit(c):"stackedColumn"===c.type||"stackedBar"===c.type||"stackedArea"===c.type?this._processStackedPlotUnit(c):"stackedColumn100"===c.type||"stackedBar100"===c.type||"stackedArea100"===c.type?this._processStacked100PlotUnit(c):"candlestick"===
c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"error"===c.type||"boxAndWhisker"===c.type?this._processMultiYPlotUnit(c):"waterfall"===c.type&&this._processSpecificPlotUnit(c)}this.calculateAutoBreaks()};p.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=0;m<a.dataSeriesIndexes.length;m++){var l=this.data[a.dataSeriesIndexes[m]],
w=0,h=!1,s=!1,q;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,f=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?
this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(l.dataPoints[w].x&&l.dataPoints[w].x.getTime||"dateTime"===l.xValueType)g=!0;for(w=0;w<l.dataPoints.length;w++){"undefined"===typeof l.dataPoints[w].x&&(l.dataPoints[w].x=w+(a.axisX.logarithmic?1:0));l.dataPoints[w].x.getTime?(g=!0,c=l.dataPoints[w].x.getTime()):c=l.dataPoints[w].x;e=l.dataPoints[w].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);e<d.min&&"number"===typeof e&&(d.min=e);
e>d.max&&"number"===typeof e&&(d.max=e);if(0<w){if(a.axisX.logarithmic){var B=c/l.dataPoints[w-1].x;1>B&&(B=1/B);b.minDiff>B&&1!==B&&(b.minDiff=B)}else B=c-l.dataPoints[w-1].x,0>B&&(B*=-1),b.minDiff>B&&0!==B&&(b.minDiff=B);null!==e&&null!==l.dataPoints[w-1].y&&(a.axisY.logarithmic?(B=e/l.dataPoints[w-1].y,1>B&&(B=1/B),d.minDiff>B&&1!==B&&(d.minDiff=B)):(B=e-l.dataPoints[w-1].y,0>B&&(B*=-1),d.minDiff>B&&0!==B&&(d.minDiff=B)))}if(c<n&&!h)null!==e&&(q=c);else{if(!h&&(h=!0,0<w)){w-=2;continue}if(c>f&&
!s)s=!0;else if(c>f&&s)continue;l.dataPoints[w].label&&(a.axisX.labels[c]=l.dataPoints[w].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&q<c&&(b.viewPortMin=q):(e<d.viewPortMin&&"number"===typeof e&&(d.viewPortMin=e),e>d.viewPortMax&&"number"===typeof e&&(d.viewPortMax=e))}}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};p.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=
a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=[],l=[],w=Infinity,h=-Infinity,s=0;s<a.dataSeriesIndexes.length;s++){var q=this.data[a.dataSeriesIndexes[s]],n=0,f=!1,B=!1,k;if("normal"===q.axisPlacement||"xySwapped"===q.axisPlacement)var p=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,
t=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(q.dataPoints[n].x&&q.dataPoints[n].x.getTime||"dateTime"===q.xValueType)g=!0;for(n=0;n<q.dataPoints.length;n++){"undefined"===typeof q.dataPoints[n].x&&(q.dataPoints[n].x=n+(a.axisX.logarithmic?1:0));q.dataPoints[n].x.getTime?(g=!0,c=q.dataPoints[n].x.getTime()):
c=q.dataPoints[n].x;e=u(q.dataPoints[n].y)?0:q.dataPoints[n].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<n){if(a.axisX.logarithmic){var r=c/q.dataPoints[n-1].x;1>r&&(r=1/r);b.minDiff>r&&1!==r&&(b.minDiff=r)}else r=c-q.dataPoints[n-1].x,0>r&&(r*=-1),b.minDiff>r&&0!==r&&(b.minDiff=r);null!==e&&null!==q.dataPoints[n-1].y&&(a.axisY.logarithmic?0<e&&(r=e/q.dataPoints[n-1].y,1>r&&(r=1/r),d.minDiff>r&&1!==r&&(d.minDiff=r)):(r=e-q.dataPoints[n-1].y,0>r&&(r*=-1),d.minDiff>r&&0!==r&&(d.minDiff=r)))}if(c<p&&
!f)null!==q.dataPoints[n].y&&(k=c);else{if(!f&&(f=!0,0<n)){n-=2;continue}if(c>t&&!B)B=!0;else if(c>t&&B)continue;q.dataPoints[n].label&&(a.axisX.labels[c]=q.dataPoints[n].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===q.dataPoints[n].y?b.viewPortMin===c&&k<c&&(b.viewPortMin=k):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?m[c]?m[c]+=e:(m[c]=e,w=Math.min(e,w)):l[c]?l[c]+=e:(l[c]=e,h=Math.max(e,h)))}}a.axisY.scaleBreaks&&(a.axisY.scaleBreaks.autoCalculate&&
1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks)&&(d.dataPointYPositiveSums?(d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums,m),d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums,l)):(d.dataPointYPositiveSums=m,d.dataPointYNegativeSums=l));q.axisX.valueType=q.xValueType=g?"dateTime":"number"}for(n in m)m.hasOwnProperty(n)&&!isNaN(n)&&(a=m[n],a<d.min&&(d.min=Math.min(a,w)),a>d.max&&(d.max=a),n<b.viewPortMin||n>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=Math.min(a,w)),a>d.viewPortMax&&
(d.viewPortMax=a)));for(n in l)l.hasOwnProperty(n)&&!isNaN(n)&&(a=l[n],a<d.min&&(d.min=a),a>d.max&&(d.max=Math.max(a,h)),n<b.viewPortMin||n>b.viewPortMax||(a<d.viewPortMin&&(d.viewPortMin=a),a>d.viewPortMax&&(d.viewPortMax=Math.max(a,h))))}};p.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=!1,l=!1,w=[],h=0;h<a.dataSeriesIndexes.length;h++){var s=this.data[a.dataSeriesIndexes[h]],q=0,
n=!1,f=!1,B;if("normal"===s.axisPlacement||"xySwapped"===s.axisPlacement)var k=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,r=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:
this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(s.dataPoints[q].x&&s.dataPoints[q].x.getTime||"dateTime"===s.xValueType)g=!0;for(q=0;q<s.dataPoints.length;q++){"undefined"===typeof s.dataPoints[q].x&&(s.dataPoints[q].x=q+(a.axisX.logarithmic?1:0));s.dataPoints[q].x.getTime?(g=!0,c=s.dataPoints[q].x.getTime()):c=s.dataPoints[q].x;e=u(s.dataPoints[q].y)?null:s.dataPoints[q].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<q){if(a.axisX.logarithmic){var t=c/s.dataPoints[q-
1].x;1>t&&(t=1/t);b.minDiff>t&&1!==t&&(b.minDiff=t)}else t=c-s.dataPoints[q-1].x,0>t&&(t*=-1),b.minDiff>t&&0!==t&&(b.minDiff=t);u(e)||null===s.dataPoints[q-1].y||(a.axisY.logarithmic?0<e&&(t=e/s.dataPoints[q-1].y,1>t&&(t=1/t),d.minDiff>t&&1!==t&&(d.minDiff=t)):(t=e-s.dataPoints[q-1].y,0>t&&(t*=-1),d.minDiff>t&&0!==t&&(d.minDiff=t)))}if(c<k&&!n)null!==e&&(B=c);else{if(!n&&(n=!0,0<q)){q-=2;continue}if(c>r&&!f)f=!0;else if(c>r&&f)continue;s.dataPoints[q].label&&(a.axisX.labels[c]=s.dataPoints[q].label);
c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&B<c&&(b.viewPortMin=B):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?m=!0:0>e&&(l=!0),w[c]=w[c]?w[c]+Math.abs(e):Math.abs(e))}}s.axisX.valueType=s.xValueType=g?"dateTime":"number"}a.axisY.logarithmic?(d.max=u(d.viewPortMax)?99*Math.pow(a.axisY.logarithmBase,-0.05):Math.max(d.viewPortMax,99*Math.pow(a.axisY.logarithmBase,-0.05)),d.min=u(d.viewPortMin)?1:Math.min(d.viewPortMin,1)):m&&!l?(d.max=u(d.viewPortMax)?
99:Math.max(d.viewPortMax,99),d.min=u(d.viewPortMin)?1:Math.min(d.viewPortMin,1)):m&&l?(d.max=u(d.viewPortMax)?99:Math.max(d.viewPortMax,99),d.min=u(d.viewPortMin)?-99:Math.min(d.viewPortMin,-99)):!m&&l&&(d.max=u(d.viewPortMax)?-1:Math.max(d.viewPortMax,-1),d.min=u(d.viewPortMin)?-99:Math.min(d.viewPortMin,-99));d.viewPortMin=d.min;d.viewPortMax=d.max;a.dataPointYSums=w}};p.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,
b=a.axisX.dataInfo,c,e,g,m,l=!1,w=0;w<a.dataSeriesIndexes.length;w++){var h=this.data[a.dataSeriesIndexes[w]],s=0,q=!1,n=!1,f,B,k;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var r=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,t=a.axisX.sessionVariables.newViewportMaximum?
a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(h.dataPoints[s].x&&h.dataPoints[s].x.getTime||"dateTime"===h.xValueType)l=!0;for(s=0;s<h.dataPoints.length;s++){"undefined"===typeof h.dataPoints[s].x&&(h.dataPoints[s].x=s+(a.axisX.logarithmic?1:0));h.dataPoints[s].x.getTime?(l=!0,c=h.dataPoints[s].x.getTime()):c=h.dataPoints[s].x;
if((e=h.dataPoints[s].y)&&e.length){g=Math.min.apply(null,e);m=Math.max.apply(null,e);B=!0;for(var p=0;p<e.length;p++)null===e.k&&(B=!1);B&&(q||(k=f),f=c)}c<b.min&&(b.min=c);c>b.max&&(b.max=c);g<d.min&&(d.min=g);m>d.max&&(d.max=m);0<s&&(a.axisX.logarithmic?(B=c/h.dataPoints[s-1].x,1>B&&(B=1/B),b.minDiff>B&&1!==B&&(b.minDiff=B)):(B=c-h.dataPoints[s-1].x,0>B&&(B*=-1),b.minDiff>B&&0!==B&&(b.minDiff=B)),e&&(null!==e[0]&&h.dataPoints[s-1].y&&null!==h.dataPoints[s-1].y[0])&&(a.axisY.logarithmic?(B=e[0]/
h.dataPoints[s-1].y[0],1>B&&(B=1/B),d.minDiff>B&&1!==B&&(d.minDiff=B)):(B=e[0]-h.dataPoints[s-1].y[0],0>B&&(B*=-1),d.minDiff>B&&0!==B&&(d.minDiff=B))));if(!(c<r)||q){if(!q&&(q=!0,0<s)){s-=2;f=k;continue}if(c>t&&!n)n=!0;else if(c>t&&n)continue;h.dataPoints[s].label&&(a.axisX.labels[c]=h.dataPoints[s].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);if(b.viewPortMin===c&&e)for(p=0;p<e.length;p++)if(null===e[p]&&f<c){b.viewPortMin=f;break}null===e?b.viewPortMin===c&&f<c&&
(b.viewPortMin=f):(g<d.viewPortMin&&(d.viewPortMin=g),m>d.viewPortMax&&(d.viewPortMax=m))}}h.axisX.valueType=h.xValueType=l?"dateTime":"number"}};p.prototype._processSpecificPlotUnit=function(a){if("waterfall"===a.type&&a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var d=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,m=0;m<a.dataSeriesIndexes.length;m++){var l=this.data[a.dataSeriesIndexes[m]],w=0,h=!1,s=!1,q=c=0;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?
a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,f=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;
if(l.dataPoints[w].x&&l.dataPoints[w].x.getTime||"dateTime"===l.xValueType)g=!0;for(w=0;w<l.dataPoints.length;w++)"undefined"!==typeof l.dataPoints[w].isCumulativeSum&&!0===l.dataPoints[w].isCumulativeSum?(l.dataPointEOs[w].cumulativeSumYStartValue=0,l.dataPointEOs[w].cumulativeSum=0===w?0:l.dataPointEOs[w-1].cumulativeSum,l.dataPoints[w].y=0===w?0:l.dataPointEOs[w-1].cumulativeSum):"undefined"!==typeof l.dataPoints[w].isIntermediateSum&&!0===l.dataPoints[w].isIntermediateSum?(l.dataPointEOs[w].cumulativeSumYStartValue=
q,l.dataPointEOs[w].cumulativeSum=0===w?0:l.dataPointEOs[w-1].cumulativeSum,l.dataPoints[w].y=0===w?0:c,q=0===w?0:l.dataPointEOs[w-1].cumulativeSum,c=0):(e="number"!==typeof l.dataPoints[w].y?0:l.dataPoints[w].y,l.dataPointEOs[w].cumulativeSumYStartValue=0===w?0:l.dataPointEOs[w-1].cumulativeSum,l.dataPointEOs[w].cumulativeSum=0===w?e:l.dataPointEOs[w-1].cumulativeSum+e,c+=e);for(w=0;w<l.dataPoints.length;w++)if("undefined"===typeof l.dataPoints[w].x&&(l.dataPoints[w].x=w+(a.axisX.logarithmic?1:0)),
l.dataPoints[w].x.getTime?(g=!0,c=l.dataPoints[w].x.getTime()):c=l.dataPoints[w].x,e=l.dataPoints[w].y,c<b.min&&(b.min=c),c>b.max&&(b.max=c),l.dataPointEOs[w].cumulativeSum<d.min&&(d.min=l.dataPointEOs[w].cumulativeSum),l.dataPointEOs[w].cumulativeSum>d.max&&(d.max=l.dataPointEOs[w].cumulativeSum),0<w&&(a.axisX.logarithmic?(q=c/l.dataPoints[w-1].x,1>q&&(q=1/q),b.minDiff>q&&1!==q&&(b.minDiff=q)):(q=c-l.dataPoints[w-1].x,0>q&&(q*=-1),b.minDiff>q&&0!==q&&(b.minDiff=q)),null!==e&&null!==l.dataPoints[w-
1].y&&(a.axisY.logarithmic?(e=l.dataPointEOs[w].cumulativeSum/l.dataPointEOs[w-1].cumulativeSum,1>e&&(e=1/e),d.minDiff>e&&1!==e&&(d.minDiff=e)):(e=l.dataPointEOs[w].cumulativeSum-l.dataPointEOs[w-1].cumulativeSum,0>e&&(e*=-1),d.minDiff>e&&0!==e&&(d.minDiff=e)))),!(c<n)||h){if(!h&&(h=!0,0<w)){w-=2;continue}if(c>f&&!s)s=!0;else if(c>f&&s)continue;l.dataPoints[w].label&&(a.axisX.labels[c]=l.dataPoints[w].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);0<w&&(l.dataPointEOs[w-
1].cumulativeSum<d.viewPortMin&&(d.viewPortMin=l.dataPointEOs[w-1].cumulativeSum),l.dataPointEOs[w-1].cumulativeSum>d.viewPortMax&&(d.viewPortMax=l.dataPointEOs[w-1].cumulativeSum));l.dataPointEOs[w].cumulativeSum<d.viewPortMin&&(d.viewPortMin=l.dataPointEOs[w].cumulativeSum);l.dataPointEOs[w].cumulativeSum>d.viewPortMax&&(d.viewPortMax=l.dataPointEOs[w].cumulativeSum)}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};p.prototype.calculateAutoBreaks=function(){function a(a,c,b,e){if(e)return b=
Math.pow(Math.min(b*a/c,c/a),0.2),1>=b&&(b=Math.pow(1>a?1/a:Math.min(c/a,a),0.25)),{startValue:a*b,endValue:c/b};b=0.2*Math.min(b-c+a,c-a);0>=b&&(b=0.25*Math.min(c-a,Math.abs(a)));return{startValue:a+b,endValue:c-b}}function d(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){var c=a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=a.axisX.scaleBreaks.maxNumberOfAutoBreaks,b=a.axisY.scaleBreaks&&a.axisY.scaleBreaks.autoCalculate&&1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks;if(c||
b)for(var d=a.axisY.dataInfo,f=a.axisX.dataInfo,g,h=f.min,l=f.max,m=d.min,n=d.max,f=f._dataRanges,d=d._dataRanges,q,w=0,s=0;s<a.dataSeriesIndexes.length;s++){var k=e.data[a.dataSeriesIndexes[s]];if(!(4>k.dataPoints.length))for(w=0;w<k.dataPoints.length;w++)if(c&&(q=(l+1-h)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,g=k.dataPoints[w].x.getTime?k.dataPoints[w].x.getTime():k.dataPoints[w].x,q=Math.floor((g-h)/q),g<f[q].min&&(f[q].min=g),g>f[q].max&&(f[q].max=g)),b){var r=
(n+1-m)*Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold)||10,10)/100;if((g="waterfall"===a.type?k.dataPointEOs[w].cumulativeSum:k.dataPoints[w].y)&&g.length)for(var p=0;p<g.length;p++)q=Math.floor((g[p]-m)/r),g[p]<d[q].min&&(d[q].min=g[p]),g[p]>d[q].max&&(d[q].max=g[p]);else u(g)||(q=Math.floor((g-m)/r),g<d[q].min&&(d[q].min=g),g>d[q].max&&(d[q].max=g))}}}}function b(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)&&a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=
a.axisX.scaleBreaks.maxNumberOfAutoBreaks)for(var c=a.axisX.dataInfo,b=c.min,d=c.max,f=c._dataRanges,g,h=0,l=0;l<a.dataSeriesIndexes.length;l++){var m=e.data[a.dataSeriesIndexes[l]];if(!(4>m.dataPoints.length))for(h=0;h<m.dataPoints.length;h++)g=(d+1-b)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,c=m.dataPoints[h].x.getTime?m.dataPoints[h].x.getTime():m.dataPoints[h].x,g=Math.floor((c-b)/g),c<f[g].min&&(f[g].min=c),c>f[g].max&&(f[g].max=c)}}for(var c,e=this,g=!1,m=0;m<
this._axes.length;m++)if(this._axes[m].scaleBreaks&&this._axes[m].scaleBreaks.autoCalculate&&1<=this._axes[m].scaleBreaks.maxNumberOfAutoBreaks){g=!0;this._axes[m].dataInfo._dataRanges=[];for(var l=0;l<100/Math.max(parseFloat(this._axes[m].scaleBreaks.collapsibleThreshold)||10,10);l++)this._axes[m].dataInfo._dataRanges.push({min:Infinity,max:-Infinity})}if(g){for(m=0;m<this.plotInfo.plotTypes.length;m++)for(g=this.plotInfo.plotTypes[m],l=0;l<g.plotUnits.length;l++)c=g.plotUnits[l],"line"===c.type||
"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type||"candlestick"===c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"waterfall"===c.type||"error"===c.type||"boxAndWhisker"===c.type?d(c):0<=c.type.indexOf("stacked")&&b(c);for(m=0;m<this._axes.length;m++)if(this._axes[m].dataInfo._dataRanges){var w=this._axes[m].dataInfo.min;
c=(this._axes[m].dataInfo.max+1-w)*Math.max(parseFloat(this._axes[m].scaleBreaks.collapsibleThreshold)||10,10)/100;var h=this._axes[m].dataInfo._dataRanges,s,q,g=[];if(this._axes[m].dataInfo.dataPointYPositiveSums){var n=this._axes[m].dataInfo.dataPointYPositiveSums;s=h;for(l in n)if(n.hasOwnProperty(l)&&!isNaN(l)&&(q=n[l],!u(q))){var f=Math.floor((q-w)/c);q<s[f].min&&(s[f].min=q);q>s[f].max&&(s[f].max=q)}delete this._axes[m].dataInfo.dataPointYPositiveSums}if(this._axes[m].dataInfo.dataPointYNegativeSums){n=
this._axes[m].dataInfo.dataPointYNegativeSums;s=h;for(l in n)n.hasOwnProperty(l)&&!isNaN(l)&&(q=-1*n[l],u(q)||(f=Math.floor((q-w)/c),q<s[f].min&&(s[f].min=q),q>s[f].max&&(s[f].max=q)));delete this._axes[m].dataInfo.dataPointYNegativeSums}for(l=0;l<h.length-1;l++)if(s=h[l].max,isFinite(s))for(;l<h.length-1;)if(w=h[l+1].min,isFinite(w)){q=w-s;q>c&&g.push({diff:q,start:s,end:w});break}else l++;if(this._axes[m].scaleBreaks.customBreaks)for(l=0;l<this._axes[m].scaleBreaks.customBreaks.length;l++)for(c=
0;c<g.length;c++)if(this._axes[m].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].endValue||this._axes[m].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].endValue||g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].startValue&&this._axes[m].scaleBreaks.customBreaks[l].startValue<=g[c].end||g[c].start<=this._axes[m].scaleBreaks.customBreaks[l].endValue&&this._axes[m].scaleBreaks.customBreaks[l].endValue<=
g[c].end)g.splice(c,1),c--;g.sort(function(a,c){return c.diff-a.diff});for(l=0;l<Math.min(g.length,this._axes[m].scaleBreaks.maxNumberOfAutoBreaks);l++)c=a(g[l].start,g[l].end,this._axes[m].logarithmic?this._axes[m].dataInfo.max/this._axes[m].dataInfo.min:this._axes[m].dataInfo.max-this._axes[m].dataInfo.min,this._axes[m].logarithmic),this._axes[m].scaleBreaks.autoBreaks.push(new L(this,"autoBreaks",c,l,++this._eventManager.lastObjectId,this._axes[m].scaleBreaks)),this._axes[m].scaleBreaks._appliedBreaks.push(this._axes[m].scaleBreaks.autoBreaks[this._axes[m].scaleBreaks.autoBreaks.length-
1]);this._axes[m].scaleBreaks._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue})}}};p.prototype.getDataPointAtXY=function(a,d,b){b=b||!1;for(var c=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var g=null;(g=this._dataInRenderedOrder[e].getDataPointAtXY(a,d,b))&&c.push(g)}a=null;d=!1;for(b=0;b<c.length;b++)if("line"===c[b].dataSeries.type||"stepLine"===c[b].dataSeries.type||"area"===c[b].dataSeries.type||"stepArea"===c[b].dataSeries.type)if(e=na("markerSize",c[b].dataPoint,c[b].dataSeries)||
8,c[b].distance<=e/2){d=!0;break}for(b=0;b<c.length;b++)d&&"line"!==c[b].dataSeries.type&&"stepLine"!==c[b].dataSeries.type&&"area"!==c[b].dataSeries.type&&"stepArea"!==c[b].dataSeries.type||(a?c[b].distance<=a.distance&&(a=c[b]):a=c[b]);return a};p.prototype.getObjectAtXY=function(a,d,b){var c=null;if(b=this.getDataPointAtXY(a,d,b||!1))c=b.dataSeries.dataPointIds[b.dataPointIndex];else if(r)c=ab(a,d,this._eventManager.ghostCtx);else for(b=0;b<this.legend.items.length;b++){var e=this.legend.items[b];
a>=e.x1&&(a<=e.x2&&d>=e.y1&&d<=e.y2)&&(c=e.id)}return c};p.prototype.getAutoFontSize=lb;p.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};p.prototype.clearCanvas=kb;p.prototype.attachEvent=function(a){this._events.push(a)};p.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var d=[],b=a.changedTouches,c=b?b[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":d=["mousemove","mousedown"];this._lastTouchData=
Ra(c);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":d=["mousemove"];break;case "touchend":case "MSPointerUp":var g=this._lastTouchData&&this._lastTouchData.time?new Date-this._lastTouchData.time:0,d="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType||300>g?["mouseup","click"]:["mouseup"];break;default:return}if(!(b&&1<b.length)){e=Ra(c);e.time=new Date;try{var m=e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(1<Math.abs(m)&&
this._lastTouchData.scroll||5<Math.abs(m)&&250>g)this._lastTouchData.scroll=!0}catch(l){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&this.resetOverlayedCanvas(),this.isDrag=!1;else for(b=0;b<d.length;b++)if(e=d[b],m=document.createEvent("MouseEvent"),m.initMouseEvent(e,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(m),!u(this._lastTouchData.scroll)&&!this._lastTouchData.scroll||!this._lastTouchData.scroll&&
250<g||"click"===e)a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};p.prototype._dispatchRangeEvent=function(a,d){var b={chart:this};b.type=a;b.trigger=d;var c=[];this.axisX&&0<this.axisX.length&&c.push("axisX");this.axisX2&&0<this.axisX2.length&&c.push("axisX2");this.axisY&&0<this.axisY.length&&c.push("axisY");this.axisY2&&0<this.axisY2.length&&c.push("axisY2");for(var e=0;e<c.length;e++)if(u(b[c[e]])&&(b[c[e]]=[]),"axisY"===c[e])for(var g=0;g<this.axisY.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,
viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisY2"===c[e])for(g=0;g<this.axisY2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX"===c[e])for(g=0;g<this.axisX.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX2"===c[e])for(g=
0;g<this.axisX2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});this.dispatchEvent(a,b,this)};p.prototype._mouseEventHandler=function(a){"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var d=Ra(a),b=a.type,c,e;a.which?e=3==a.which:a.button&&(e=2==a.button);p.capturedEventParam&&(c=p.capturedEventParam,"mouseup"===b&&(p.capturedEventParam=null,c.chart.overlaidCanvas.releaseCapture?
c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",c.chart._mouseEventHandler,!1)),c.hasOwnProperty(b)&&("mouseup"!==b||c.chart.overlaidCanvas.releaseCapture?a.target!==c.chart.overlaidCanvas&&r||c[b].call(c.context,d.x,d.y):a.target!==c.chart.overlaidCanvas&&(c.chart.isDrag=!1)));if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else if(a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault(),Ja&&
window.console&&(window.console.log(b+" --\x3e x: "+d.x+"; y:"+d.y),e&&window.console.log(a.which),"mouseup"===b&&window.console.log("mouseup")),!e){if(!p.capturedEventParam&&this._events){for(var g=0;g<this._events.length;g++)if(this._events[g].hasOwnProperty(b))if(c=this._events[g],e=c.bounds,d.x>=e.x1&&d.x<=e.x2&&d.y>=e.y1&&d.y<=e.y2){c[b].call(c.context,d.x,d.y);"mousedown"===b&&!0===c.capture?(p.capturedEventParam=c,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.documentElement.addEventListener("mouseup",
this._mouseEventHandler,!1)):"mouseup"===b&&(c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else c=null;a.target.style.cursor=c&&c.cursor?c.cursor:this._defaultCursor}b=this.plotArea;if(d.x<b.x1||d.x>b.x2||d.y<b.y1||d.y>b.y2)this.toolTip&&this.toolTip.enabled?this.toolTip.hide():this.resetOverlayedCanvas();this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};
p.prototype._plotAreaMouseDown=function(a,d){this.isDrag=!0;this.dragStartPoint={x:a,y:d}};p.prototype._plotAreaMouseUp=function(a,d){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var b=d-this.dragStartPoint.y,c=a-this.dragStartPoint.x,e=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),m=!1;this.resetOverlayedCanvas();if("xySwapped"===this.plotInfo.axisPlacement)var l=g,g=e,e=l;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(e=
g=0;e<this._axes.length;e++)b=this._axes[e],b.logarithmic?b.viewportMinimum<b.minimum?(g=b.minimum/b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum*g,b.sessionVariables.newViewportMaximum=b.viewportMaximum*g,m=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum/b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum/g,b.sessionVariables.newViewportMaximum=b.viewportMaximum/g,m=!0):b.viewportMinimum<b.minimum?(g=b.minimum-b.viewportMinimum,b.sessionVariables.newViewportMinimum=
b.viewportMinimum+g,b.sessionVariables.newViewportMaximum=b.viewportMaximum+g,m=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum-b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum-g,b.sessionVariables.newViewportMaximum=b.viewportMaximum-g,m=!0);else if((!e||2<Math.abs(c))&&(!g||2<Math.abs(b))&&this.zoomEnabled){if(!this.dragStartPoint)return;b=e?this.dragStartPoint.x:this.plotArea.x1;c=g?this.dragStartPoint.y:this.plotArea.y1;e=e?a:this.plotArea.x2;g=g?d:this.plotArea.y2;2<Math.abs(b-
e)&&2<Math.abs(c-g)&&this._zoomPanToSelectedRegion(b,c,e,g)&&(m=!0)}m&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged","zoom"),m&&(this.zoomEnabled&&"none"===this._zoomButton.style.display)&&(Qa(this._zoomButton,this._resetButton),ua(this,this._zoomButton,"pan"),ua(this,this._resetButton,"reset")))}}this.isDrag=!1;if("none"!==this.plotInfo.axisPlacement){this.resetOverlayedCanvas();if(this.axisX&&0<this.axisX.length)for(m=
0;m<this.axisX.length;m++)this.axisX[m].crosshair&&this.axisX[m].crosshair.enabled&&this.axisX[m].renderCrosshair(a,d);if(this.axisX2&&0<this.axisX2.length)for(m=0;m<this.axisX2.length;m++)this.axisX2[m].crosshair&&this.axisX2[m].crosshair.enabled&&this.axisX2[m].renderCrosshair(a,d);if(this.axisY&&0<this.axisY.length)for(m=0;m<this.axisY.length;m++)this.axisY[m].crosshair&&this.axisY[m].crosshair.enabled&&this.axisY[m].renderCrosshair(a,d);if(this.axisY2&&0<this.axisY2.length)for(m=0;m<this.axisY2.length;m++)this.axisY2[m].crosshair&&
this.axisY2[m].crosshair.enabled&&this.axisY2[m].renderCrosshair(a,d)}};p.prototype._plotAreaMouseMove=function(a,d){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,c=0,e=b=null,e=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),m=this;"xySwapped"===this.plotInfo.axisPlacement&&(b=g,g=e,e=b);b=this.dragStartPoint.x-a;c=this.dragStartPoint.y-d;2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this.toolTip.hide():this.panEnabled||this.zoomEnabled||this.toolTip.mouseMoveHandler(a,
d);if((!e||2<Math.abs(b)||!g||2<Math.abs(c))&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled)e={x1:e?this.plotArea.x1+b:this.plotArea.x1,y1:g?this.plotArea.y1+c:this.plotArea.y1,x2:e?this.plotArea.x2+b:this.plotArea.x2,y2:g?this.plotArea.y2+c:this.plotArea.y2},clearTimeout(m._panTimerId),m._panTimerId=setTimeout(function(c,b,e,f){return function(){m._zoomPanToSelectedRegion(c,b,e,f,!0)&&(m._dispatchRangeEvent("rangeChanging","pan"),m.render(),m._dispatchRangeEvent("rangeChanged","pan"),m.dragStartPoint.x=
a,m.dragStartPoint.y=d)}}(e.x1,e.y1,e.x2,e.y2),0);else if(this.zoomEnabled){this.resetOverlayedCanvas();b=this.overlaidCanvasCtx.globalAlpha;this.overlaidCanvasCtx.fillStyle="#A89896";var c=e?this.dragStartPoint.x:this.plotArea.x1,l=g?this.dragStartPoint.y:this.plotArea.y1,w=e?a-this.dragStartPoint.x:this.plotArea.x2-this.plotArea.x1,h=g?d-this.dragStartPoint.y:this.plotArea.y2-this.plotArea.y1;this.validateRegion(c,l,e?a:this.plotArea.x2-this.plotArea.x1,g?d:this.plotArea.y2-this.plotArea.y1,"xy"!==
this.zoomType).isValid&&(this.resetOverlayedCanvas(),this.overlaidCanvasCtx.fillStyle="#99B2B5");this.overlaidCanvasCtx.globalAlpha=0.7;this.overlaidCanvasCtx.fillRect(c,l,w,h);this.overlaidCanvasCtx.globalAlpha=b}}else if(this.toolTip.mouseMoveHandler(a,d),"none"!==this.plotInfo.axisPlacement){if(this.axisX&&0<this.axisX.length)for(e=0;e<this.axisX.length;e++)this.axisX[e].crosshair&&this.axisX[e].crosshair.enabled&&this.axisX[e].renderCrosshair(a,d);if(this.axisX2&&0<this.axisX2.length)for(e=0;e<
this.axisX2.length;e++)this.axisX2[e].crosshair&&this.axisX2[e].crosshair.enabled&&this.axisX2[e].renderCrosshair(a,d);if(this.axisY&&0<this.axisY.length)for(e=0;e<this.axisY.length;e++)this.axisY[e].crosshair&&this.axisY[e].crosshair.enabled&&this.axisY[e].renderCrosshair(a,d);if(this.axisY2&&0<this.axisY2.length)for(e=0;e<this.axisY2.length;e++)this.axisY2[e].crosshair&&this.axisY2[e].crosshair.enabled&&this.axisY2[e].renderCrosshair(a,d)}};p.prototype._zoomPanToSelectedRegion=function(a,d,b,c,
e){a=this.validateRegion(a,d,b,c,e);d=a.axesWithValidRange;b=a.axesRanges;if(a.isValid)for(c=0;c<d.length;c++)e=b[c],d[c].setViewPortRange(e.val1,e.val2),this.syncCharts&&this.syncCharts(e.val1,e.val2);return a.isValid};p.prototype.validateRegion=function(a,d,b,c,e){e=e||!1;for(var g=0<=this.zoomType.indexOf("x"),m=0<=this.zoomType.indexOf("y"),l=!1,w=[],h=[],s=[],q=0;q<this._axes.length;q++)("axisX"===this._axes[q].type&&g||"axisY"===this._axes[q].type&&m)&&h.push(this._axes[q]);for(m=0;m<h.length;m++){var q=
h[m],g=!1,n=q.convertPixelToValue({x:a,y:d}),f=q.convertPixelToValue({x:b,y:c});if(n>f)var B=f,f=n,n=B;if(q.scaleBreaks)for(B=0;!g&&B<q.scaleBreaks._appliedBreaks.length;B++)g=q.scaleBreaks._appliedBreaks[B].startValue<=n&&q.scaleBreaks._appliedBreaks[B].endValue>=f;if(isFinite(q.dataInfo.minDiff))if(B=q.getApparentDifference(n,f,null,!0),!(g||!(this.panEnabled&&q.scaleBreaks&&q.scaleBreaks._appliedBreaks.length)&&(q.logarithmic&&B<Math.pow(q.dataInfo.minDiff,3)||!q.logarithmic&&B<3*Math.abs(q.dataInfo.minDiff))||
n<q.minimum||f>q.maximum))w.push(q),s.push({val1:n,val2:f}),l=!0;else if(!e){l=!1;break}}return{isValid:l,axesWithValidRange:w,axesRanges:s}};p.prototype.preparePlotArea=function(){var a=this.plotArea;!r&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);if((this.axisX[0]||this.axisX2[0])&&(this.axisY[0]||this.axisY2[0])){var d=this.axisX[0]?this.axisX[0].lineCoordinates:this.axisX2[0].lineCoordinates;if(this.axisY&&0<this.axisY.length&&this.axisY[0]){var b=this.axisY[0];a.x1=d.x1<d.x2?d.x1:b.lineCoordinates.x1;
a.y1=d.y1<b.lineCoordinates.y1?d.y1:b.lineCoordinates.y1;a.x2=d.x2>b.lineCoordinates.x2?d.x2:b.lineCoordinates.x2;a.y2=d.y2>d.y1?d.y2:b.lineCoordinates.y2;a.width=a.x2-a.x1;a.height=a.y2-a.y1}this.axisY2&&0<this.axisY2.length&&this.axisY2[0]&&(b=this.axisY2[0],a.x1=d.x1<d.x2?d.x1:b.lineCoordinates.x1,a.y1=d.y1<b.lineCoordinates.y1?d.y1:b.lineCoordinates.y1,a.x2=d.x2>b.lineCoordinates.x2?d.x2:b.lineCoordinates.x2,a.y2=d.y2>d.y1?d.y2:b.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1)}else d=
this.layoutManager.getFreeSpace(),a.x1=d.x1,a.x2=d.x2,a.y1=d.y1,a.y2=d.y2,a.width=d.width,a.height=d.height;r||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new Ga(a.x1,a.y1,a.x2,a.y2,2)};p.prototype.renderIndexLabels=function(a){var d=a||this.plotArea.ctx,b=this.plotArea,c=0,e=0,g=0,m=0,l=c=m=e=g=0,w=0;for(a=0;a<this._indexLabels.length;a++){var h=this._indexLabels[a],s=h.chartType.toLowerCase(),
q,n,l=na("indexLabelFontColor",h.dataPoint,h.dataSeries),w=na("indexLabelFontSize",h.dataPoint,h.dataSeries);q=na("indexLabelFontFamily",h.dataPoint,h.dataSeries);n=na("indexLabelFontStyle",h.dataPoint,h.dataSeries);var m=na("indexLabelFontWeight",h.dataPoint,h.dataSeries),f=na("indexLabelBackgroundColor",h.dataPoint,h.dataSeries),e=na("indexLabelMaxWidth",h.dataPoint,h.dataSeries),g=na("indexLabelWrap",h.dataPoint,h.dataSeries),B=na("indexLabelLineDashType",h.dataPoint,h.dataSeries),k=na("indexLabelLineColor",
h.dataPoint,h.dataSeries),p=u(h.dataPoint.indexLabelLineThickness)?u(h.dataSeries.options.indexLabelLineThickness)?0:h.dataSeries.options.indexLabelLineThickness:h.dataPoint.indexLabelLineThickness,c=0<p?Math.min(10,("normal"===this.plotInfo.axisPlacement?this.plotArea.height:this.plotArea.width)<<0):0,t={percent:null,total:null},C=null;if(0<=h.dataSeries.type.indexOf("stacked")||"pie"===h.dataSeries.type||"doughnut"===h.dataSeries.type)t=this.getPercentAndTotal(h.dataSeries,h.dataPoint);if(h.dataSeries.indexLabelFormatter||
h.dataPoint.indexLabelFormatter)C={chart:this,dataSeries:h.dataSeries,dataPoint:h.dataPoint,index:h.indexKeyword,total:t.total,percent:t.percent};var x=h.dataPoint.indexLabelFormatter?h.dataPoint.indexLabelFormatter(C):h.dataPoint.indexLabel?this.replaceKeywordsWithValue(h.dataPoint.indexLabel,h.dataPoint,h.dataSeries,null,h.indexKeyword):h.dataSeries.indexLabelFormatter?h.dataSeries.indexLabelFormatter(C):h.dataSeries.indexLabel?this.replaceKeywordsWithValue(h.dataSeries.indexLabel,h.dataPoint,h.dataSeries,
null,h.indexKeyword):null;if(null!==x&&""!==x){var t=na("indexLabelPlacement",h.dataPoint,h.dataSeries),C=na("indexLabelOrientation",h.dataPoint,h.dataSeries),ma=h.direction,y=h.dataSeries.axisX,A=h.dataSeries.axisY,v=!1,f=new ka(d,{x:0,y:0,maxWidth:e?e:0.5*this.width,maxHeight:g?5*w:1.5*w,angle:"horizontal"===C?0:-90,text:x,padding:0,backgroundColor:f,horizontalAlign:"left",fontSize:w,fontFamily:q,fontWeight:m,fontColor:l,fontStyle:n,textBaseline:"top"});f.measureText();h.dataSeries.indexLabelMaxWidth=
f.maxWidth;if("stackedarea100"===s){if(h.point.x<b.x1||h.point.x>b.x2||h.point.y<b.y1-1||h.point.y>b.y2+1)continue}else if("rangearea"===s||"rangesplinearea"===s){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||Math.max.apply(null,h.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,h.dataPoint.y)>A.viewportMaximum)continue}else if(0<=s.indexOf("line")||0<=s.indexOf("area")||0<=s.indexOf("bubble")||0<=s.indexOf("scatter")){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||
h.dataPoint.y<A.viewportMinimum||h.dataPoint.y>A.viewportMaximum)continue}else if(0<=s.indexOf("column")||"waterfall"===s||"error"===s&&!h.axisSwapped){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||h.bounds.y1>b.y2||h.bounds.y2<b.y1)continue}else if(0<=s.indexOf("bar")||"error"===s){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum||h.bounds.x1>b.x2||h.bounds.x2<b.x1)continue}else if("candlestick"===s||"ohlc"===s){if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>
y.viewportMaximum||Math.max.apply(null,h.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,h.dataPoint.y)>A.viewportMaximum)continue}else if(h.dataPoint.x<y.viewportMinimum||h.dataPoint.x>y.viewportMaximum)continue;e=m=2;"horizontal"===C?(l=f.width,w=f.height):(w=f.width,l=f.height);if("normal"===this.plotInfo.axisPlacement){if(0<=s.indexOf("line")||0<=s.indexOf("area"))t="auto",m=4;else if(0<=s.indexOf("stacked"))"auto"===t&&(t="inside");else if("bubble"===s||"scatter"===s)t="inside";q=h.point.x-
l/2;"inside"!==t?(e=b.y1,g=b.y2,0<ma?(n=h.point.y-w-m-c,n<e&&(n="auto"===t?Math.max(h.point.y,e)+m+c:e+m+c,v=n+w>h.point.y)):(n=h.point.y+m+c,n>g-w-m-c&&(n="auto"===t?Math.min(h.point.y,g)-w-m-c:g-w-m-c,v=n<h.point.y))):(e=Math.max(h.bounds.y1,b.y1),g=Math.min(h.bounds.y2,b.y2),c=0<=s.indexOf("range")||"error"===s?0<ma?Math.max(h.bounds.y1,b.y1)+w/2+m:Math.min(h.bounds.y2,b.y2)-w/2-m:(Math.max(h.bounds.y1,b.y1)+Math.min(h.bounds.y2,b.y2))/2,0<ma?(n=Math.max(h.point.y,c)-w/2,n<e&&("bubble"===s||"scatter"===
s)&&(n=Math.max(h.point.y-w-m,b.y1+m))):(n=Math.min(h.point.y,c)-w/2,n>g-w-m&&("bubble"===s||"scatter"===s)&&(n=Math.min(h.point.y+m,b.y2-w-m))),n=Math.min(n,g-w))}else 0<=s.indexOf("line")||0<=s.indexOf("area")||0<=s.indexOf("scatter")?(t="auto",e=4):0<=s.indexOf("stacked")?"auto"===t&&(t="inside"):"bubble"===s&&(t="inside"),n=h.point.y-w/2,"inside"!==t?(m=b.x1,g=b.x2,0>ma?(q=h.point.x-l-e-c,q<m&&(q="auto"===t?Math.max(h.point.x,m)+e+c:m+e+c,v=q+l>h.point.x)):(q=h.point.x+e+c,q>g-l-e-c&&(q="auto"===
t?Math.min(h.point.x,g)-l-e-c:g-l-e-c,v=q<h.point.x))):(m=Math.max(h.bounds.x1,b.x1),Math.min(h.bounds.x2,b.x2),c=0<=s.indexOf("range")||"error"===s?0>ma?Math.max(h.bounds.x1,b.x1)+l/2+e:Math.min(h.bounds.x2,b.x2)-l/2-e:(Math.max(h.bounds.x1,b.x1)+Math.min(h.bounds.x2,b.x2))/2,q=0>ma?Math.max(h.point.x,c)-l/2:Math.min(h.point.x,c)-l/2,q=Math.max(q,m));"vertical"===C&&(n+=w);f.x=q;f.y=n;f.render(!0);p&&("inside"!==t&&(0>s.indexOf("bar")&&("error"!==s||!h.axisSwapped)&&h.point.x>b.x1&&h.point.x<b.x2||
!v)&&(0>s.indexOf("column")&&("error"!==s||h.axisSwapped)&&h.point.y>b.y1&&h.point.y<b.y2||!v))&&(d.lineWidth=p,d.strokeStyle=k?k:"gray",d.setLineDash&&d.setLineDash(R(B,p)),d.beginPath(),d.moveTo(h.point.x,h.point.y),0<=s.indexOf("bar")||"error"===s&&h.axisSwapped?d.lineTo(q+(0<h.direction?0:l),n+("horizontal"===C?w:-w)/2):0<=s.indexOf("column")||"error"===s&&!h.axisSwapped?d.lineTo(q+l/2,n+((0<h.direction?w:-w)+("horizontal"===C?w:-w))/2):d.lineTo(q+l/2,n+((n<h.point.y?w:-w)+("horizontal"===C?w:
-w))/2),d.stroke())}}d={source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0,startTimePercent:0.7};for(a=0;a<this._indexLabels.length;a++)h=this._indexLabels[a],f=na("indexLabelBackgroundColor",h.dataPoint,h.dataSeries),h.dataSeries.indexLabelBackgroundColor=u(f)?r?"transparent":null:f;return d};p.prototype.renderLine=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=
this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],m,l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w];b.lineWidth=h.lineThickness;var s=h.dataPoints,q="solid";if(b.setLineDash){var n=R(h.nullDataLineDashType,h.lineThickness),q=h.lineDashType,f=R(q,h.lineThickness);b.setLineDash(f)}var B=h.id;this._eventManager.objectMap[B]={objectType:"dataSeries",dataSeriesIndex:w};B=N(B);c.strokeStyle=B;
c.lineWidth=0<h.lineThickness?Math.max(h.lineThickness,4):0;var B=h._colorSet,k=B=h.lineColor=h.options.lineColor?h.options.lineColor:B[0];b.strokeStyle=B;var p=!0,t=0,C,x;b.beginPath();if(0<s.length){for(var u=!1,t=0;t<s.length;t++)if(C=s[t].x.getTime?s[t].x.getTime():s[t].x,!(C<a.axisX.dataInfo.viewPortMin||C>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!u)))if("number"!==typeof s[t].y)0<t&&!(h.connectNullData||u||p)&&(b.stroke(),r&&c.stroke()),u=!0;else{C=a.axisX.convertValueToPixel(C);x=
a.axisY.convertValueToPixel(s[t].y);var y=h.dataPointIds[t];this._eventManager.objectMap[y]={id:y,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:t,x1:C,y1:x};p||u?(!p&&h.connectNullData?(b.setLineDash&&(h.options.nullDataLineDashType||q===h.lineDashType&&h.lineDashType!==h.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(m.x,m.y),q=h.nullDataLineDashType,b.setLineDash(n)),b.lineTo(C,x),r&&c.lineTo(C,x)):(b.beginPath(),b.moveTo(C,x),r&&(c.beginPath(),c.moveTo(C,x))),u=p=!1):(b.lineTo(C,
x),r&&c.lineTo(C,x),0==t%500&&(b.stroke(),b.beginPath(),b.moveTo(C,x),r&&(c.stroke(),c.beginPath(),c.moveTo(C,x))));m={x:C,y:x};t<s.length-1&&(k!==(s[t].lineColor||B)||q!==(s[t].lineDashType||h.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(C,x),k=s[t].lineColor||B,b.strokeStyle=k,b.setLineDash&&(s[t].lineDashType?(q=s[t].lineDashType,b.setLineDash(R(q,h.lineThickness))):(q=h.lineDashType,b.setLineDash(f))));if(0<s[t].markerSize||0<h.markerSize){var A=h.getMarkerProperties(t,C,x,b);g.push(A);
y=N(y);r&&g.push({x:C,y:x,ctx:c,type:A.type,size:A.size,color:y,borderColor:y,borderThickness:A.borderThickness})}(s[t].indexLabel||h.indexLabel||s[t].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"line",dataPoint:s[t],dataSeries:h,point:{x:C,y:x},direction:0>s[t].y===a.axisY.reversed?1:-1,color:B})}b.stroke();r&&c.stroke()}}ia.drawMarkers(g);r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&
b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());b.restore();b.beginPath();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStepLine=function(a){var d=a.targetCanvasCtx||
this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],m,l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w];b.lineWidth=h.lineThickness;var s=h.dataPoints,q="solid";if(b.setLineDash){var n=R(h.nullDataLineDashType,h.lineThickness),q=h.lineDashType,f=R(q,h.lineThickness);b.setLineDash(f)}var B=h.id;this._eventManager.objectMap[B]=
{objectType:"dataSeries",dataSeriesIndex:w};B=N(B);c.strokeStyle=B;c.lineWidth=0<h.lineThickness?Math.max(h.lineThickness,4):0;var B=h._colorSet,k=B=h.lineColor=h.options.lineColor?h.options.lineColor:B[0];b.strokeStyle=B;var p=!0,t=0,C,x;b.beginPath();if(0<s.length){for(var u=!1,t=0;t<s.length;t++)if(C=s[t].getTime?s[t].x.getTime():s[t].x,!(C<a.axisX.dataInfo.viewPortMin||C>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!u)))if("number"!==typeof s[t].y)0<t&&!(h.connectNullData||u||p)&&(b.stroke(),
r&&c.stroke()),u=!0;else{var y=x;C=a.axisX.convertValueToPixel(C);x=a.axisY.convertValueToPixel(s[t].y);var A=h.dataPointIds[t];this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:t,x1:C,y1:x};p||u?(!p&&h.connectNullData?(b.setLineDash&&(h.options.nullDataLineDashType||q===h.lineDashType&&h.lineDashType!==h.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(m.x,m.y),q=h.nullDataLineDashType,b.setLineDash(n)),b.lineTo(C,y),b.lineTo(C,x),r&&(c.lineTo(C,
y),c.lineTo(C,x))):(b.beginPath(),b.moveTo(C,x),r&&(c.beginPath(),c.moveTo(C,x))),u=p=!1):(b.lineTo(C,y),r&&c.lineTo(C,y),b.lineTo(C,x),r&&c.lineTo(C,x),0==t%500&&(b.stroke(),b.beginPath(),b.moveTo(C,x),r&&(c.stroke(),c.beginPath(),c.moveTo(C,x))));m={x:C,y:x};t<s.length-1&&(k!==(s[t].lineColor||B)||q!==(s[t].lineDashType||h.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(C,x),k=s[t].lineColor||B,b.strokeStyle=k,b.setLineDash&&(s[t].lineDashType?(q=s[t].lineDashType,b.setLineDash(R(q,h.lineThickness))):
(q=h.lineDashType,b.setLineDash(f))));if(0<s[t].markerSize||0<h.markerSize)y=h.getMarkerProperties(t,C,x,b),g.push(y),A=N(A),r&&g.push({x:C,y:x,ctx:c,type:y.type,size:y.size,color:A,borderColor:A,borderThickness:y.borderThickness});(s[t].indexLabel||h.indexLabel||s[t].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:s[t],dataSeries:h,point:{x:C,y:x},direction:0>s[t].y===a.axisY.reversed?1:-1,color:B})}b.stroke();r&&c.stroke()}}ia.drawMarkers(g);r&&
(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());b.restore();b.beginPath();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,
easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderSpline=function(a){function d(a){a=v(a,2);if(0<a.length){c.beginPath();r&&e.beginPath();c.moveTo(a[0].x,a[0].y);a[0].newStrokeStyle&&(c.strokeStyle=a[0].newStrokeStyle);a[0].newLineDashArray&&c.setLineDash(a[0].newLineDashArray);r&&e.moveTo(a[0].x,a[0].y);for(var b=0;b<a.length-3;b+=3)if(c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),r&&e.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),
0<b&&0===b%3E3||a[b+3].newStrokeStyle||a[b+3].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(a[b+3].x,a[b+3].y),a[b+3].newStrokeStyle&&(c.strokeStyle=a[b+3].newStrokeStyle),a[b+3].newLineDashArray&&c.setLineDash(a[b+3].newLineDashArray),r&&(e.stroke(),e.beginPath(),e.moveTo(a[b+3].x,a[b+3].y));c.stroke();r&&e.stroke()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx;c.save();var g=this.plotArea;c.beginPath();
c.rect(g.x1,g.y1,g.width,g.height);c.clip();for(var m=[],l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w];c.lineWidth=h.lineThickness;var s=h.dataPoints,q="solid";if(c.setLineDash){var n=R(h.nullDataLineDashType,h.lineThickness),q=h.lineDashType,f=R(q,h.lineThickness);c.setLineDash(f)}var B=h.id;this._eventManager.objectMap[B]={objectType:"dataSeries",dataSeriesIndex:w};B=N(B);e.strokeStyle=B;e.lineWidth=0<h.lineThickness?Math.max(h.lineThickness,4):0;var B=h._colorSet,
k=B=h.lineColor=h.options.lineColor?h.options.lineColor:B[0];c.strokeStyle=B;var p=0,t,u,x=[];c.beginPath();if(0<s.length)for(u=!1,p=0;p<s.length;p++)if(t=s[p].getTime?s[p].x.getTime():s[p].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!u)))if("number"!==typeof s[p].y)0<p&&!u&&(h.connectNullData?c.setLineDash&&(0<x.length&&(h.options.nullDataLineDashType||!s[p-1].lineDashType))&&(x[x.length-1].newLineDashArray=n,q=h.nullDataLineDashType):(d(x),x=[])),u=!0;
else{t=a.axisX.convertValueToPixel(t);u=a.axisY.convertValueToPixel(s[p].y);var ma=h.dataPointIds[p];this._eventManager.objectMap[ma]={id:ma,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:p,x1:t,y1:u};x[x.length]={x:t,y:u};p<s.length-1&&(k!==(s[p].lineColor||B)||q!==(s[p].lineDashType||h.lineDashType))&&(k=s[p].lineColor||B,x[x.length-1].newStrokeStyle=k,c.setLineDash&&(s[p].lineDashType?(q=s[p].lineDashType,x[x.length-1].newLineDashArray=R(q,h.lineThickness)):(q=h.lineDashType,x[x.length-
1].newLineDashArray=f)));if(0<s[p].markerSize||0<h.markerSize){var y=h.getMarkerProperties(p,t,u,c);m.push(y);ma=N(ma);r&&m.push({x:t,y:u,ctx:e,type:y.type,size:y.size,color:ma,borderColor:ma,borderThickness:y.borderThickness})}(s[p].indexLabel||h.indexLabel||s[p].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:s[p],dataSeries:h,point:{x:t,y:u},direction:0>s[p].y===a.axisY.reversed?1:-1,color:B});u=!1}d(x)}ia.drawMarkers(m);r&&(b.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(g.x1,g.y1,g.width,g.height),e.beginPath());c.restore();c.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,
animationBase:0}}};p.prototype.renderColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,m,l,w,h=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,
0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0,q=a.axisX.dataInfo.minDiff;isFinite(q)||(q=0.3*Math.abs(a.axisX.range));q=this.dataPointWidth=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(q)/Math.log(a.axisX.range):Math.abs(q)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>s&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<g)&&(s=Math.max(this.options.dataPointWidth?
this.dataPointWidth:-Infinity,g));q<g&&(q=g);q>s&&(q=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(s=0;s<a.dataSeriesIndexes.length;s++){var n=a.dataSeriesIndexes[s],f=this.data[n],B=f.dataPoints;if(0<B.length)for(var p=5<q&&f.bevelEnabled?!0:!1,g=0;g<B.length;g++)if(B[g].getTime?w=B[g].x.getTime():
w=B[g].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&"number"===typeof B[g].y){m=a.axisX.convertValueToPixel(w);l=a.axisY.convertValueToPixel(B[g].y);m=a.axisX.reversed?m+a.plotType.totalDataSeries*q/2-(a.previousDataSeriesCount+s)*q<<0:m-a.plotType.totalDataSeries*q/2+(a.previousDataSeriesCount+s)*q<<0;var k=a.axisX.reversed?m-q<<0:m+q<<0,t;0<=B[g].y?t=h:(t=l,l=h);l>t&&(c=l,l=t,t=c);c=B[g].color?B[g].color:f._colorSet[g%f._colorSet.length];ea(b,m,l,k,t,c,0,null,p&&0<=B[g].y,
0>B[g].y&&p,!1,!1,f.fillOpacity);c=f.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:m,y1:l,x2:k,y2:t};c=N(c);r&&ea(this._eventManager.ghostCtx,m,l,k,t,c,0,null,!1,!1,!1,!1);(B[g].indexLabel||f.indexLabel||B[g].indexLabelFormatter||f.indexLabelFormatter)&&this._indexLabels.push({chartType:"column",dataPoint:B[g],dataSeries:f,point:{x:m+(k-m)/2,y:0>B[g].y===a.axisY.reversed?l:t},direction:0>B[g].y===a.axisY.reversed?1:-1,bounds:{x1:m,
y1:Math.min(l,t),x2:k,y2:Math.max(l,t)},color:c})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();
return{source:d,dest:this.plotArea.ctx,animationCallback:M.yScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:h<a.axisY.bounds.y1?a.axisY.bounds.y1:h>a.axisY.bounds.y2?a.axisY.bounds.y2:h}}};p.prototype.renderStackedColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?
this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>s&&(h=Math.min(this.options.dataPointWidth?
this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<h)&&(s=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<h&&(f=h);f>s&&(f=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var k=a.dataSeriesIndexes[B],
p=this.data[k],t=p.dataPoints;if(0<t.length){var u=5<f&&p.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof t[h].y){s=a.axisX.convertValueToPixel(c);var x=s-a.plotType.plotUnits.length*f/2+a.index*f<<0,v=x+f<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y)l[c]=t[h].y+(l[c]?l[c]:0),0<l[c]&&(q=a.axisY.convertValueToPixel(l[c]),
y="undefined"!==typeof g[c]?g[c]:n,g[c]=q);else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=t[h].y+(w[c]?w[c]:0),y=a.axisY.convertValueToPixel(w[c]),q="undefined"!==typeof m[c]?m[c]:n,m[c]=y;else if(q=a.axisY.convertValueToPixel(t[h].y),0<=t[h].y){var A="undefined"!==typeof g[c]?g[c]:0;q-=A;y=n-A;g[c]=A+(y-q)}else A=m[c]?m[c]:0,y=q+A,q=n+A,m[c]=A+(y-q);c=t[h].color?t[h].color:p._colorSet[h%p._colorSet.length];ea(b,x,q,v,y,c,0,null,u&&0<=t[h].y,0>t[h].y&&u,!1,
!1,p.fillOpacity);c=p.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:h,x1:x,y1:q,x2:v,y2:y};c=N(c);r&&ea(this._eventManager.ghostCtx,x,q,v,y,c,0,null,!1,!1,!1,!1);(t[h].indexLabel||p.indexLabel||t[h].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:t[h],dataSeries:p,point:{x:s,y:0<=t[h].y?q:y},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:x,y1:Math.min(q,y),x2:v,y2:Math.max(q,
y)},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,
animationCallback:M.yScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};p.prototype.renderStackedColumn100=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?this.dataPointMinWidth:
this.options.dataPointWidth?this.dataPointWidth:1;s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>s&&(h=Math.min(this.options.dataPointWidth?
this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<h)&&(s=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<h&&(f=h);f>s&&(f=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var p=a.dataSeriesIndexes[B],
k=this.data[p],t=k.dataPoints;if(0<t.length)for(var u=5<f&&k.bevelEnabled?!0:!1,h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof t[h].y){s=a.axisX.convertValueToPixel(c);q=0!==a.dataPointYSums[c]?100*(t[h].y/a.dataPointYSums[c]):0;var x=s-a.plotType.plotUnits.length*f/2+a.index*f<<0,v=x+f<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y){l[c]=q+
("undefined"!==typeof l[c]?l[c]:0);if(0>=l[c])continue;q=a.axisY.convertValueToPixel(l[c]);y=g[c]?g[c]:n;g[c]=q}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=q+("undefined"!==typeof w[c]?w[c]:0),y=a.axisY.convertValueToPixel(w[c]),q=m[c]?m[c]:n,m[c]=y;else if(q=a.axisY.convertValueToPixel(q),0<=t[h].y){var A="undefined"!==typeof g[c]?g[c]:0;q-=A;y=n-A;a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.y1-q)&&(q=e.y1);g[c]=A+(y-q)}else A="undefined"!==typeof m[c]?
m[c]:0,y=q+A,q=n+A,a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.y2-y)&&(y=e.y2),m[c]=A+(y-q);c=t[h].color?t[h].color:k._colorSet[h%k._colorSet.length];ea(b,x,q,v,y,c,0,null,u&&0<=t[h].y,0>t[h].y&&u,!1,!1,k.fillOpacity);c=k.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:h,x1:x,y1:q,x2:v,y2:y};c=N(c);r&&ea(this._eventManager.ghostCtx,x,q,v,y,c,0,null,!1,!1,!1,!1);(t[h].indexLabel||k.indexLabel||t[h].indexLabelFormatter||k.indexLabelFormatter)&&
this._indexLabels.push({chartType:"stackedColumn100",dataPoint:t[h],dataSeries:k,point:{x:s,y:0<=t[h].y?q:y},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:x,y1:Math.min(q,y),x2:v,y2:Math.max(q,y)},color:c})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&
this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.yScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};p.prototype.renderBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=
null,e=this.plotArea,g=0,m,l,w,h=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,s=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,q=a.axisX.dataInfo.minDiff;isFinite(q)||(q=0.3*Math.abs(a.axisX.range));q=this.options.dataPointWidth?
this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(q)/Math.log(a.axisX.range):Math.abs(q)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>s&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,s));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&s<g)&&(s=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));q<g&&(q=g);q>s&&(q=s);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);
b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(s=0;s<a.dataSeriesIndexes.length;s++){var n=a.dataSeriesIndexes[s],f=this.data[n],B=f.dataPoints;if(0<B.length){var k=5<q&&f.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<B.length;g++)if(B[g].getTime?w=B[g].x.getTime():w=B[g].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&"number"===typeof B[g].y){l=a.axisX.convertValueToPixel(w);
m=a.axisY.convertValueToPixel(B[g].y);l=a.axisX.reversed?l+a.plotType.totalDataSeries*q/2-(a.previousDataSeriesCount+s)*q<<0:l-a.plotType.totalDataSeries*q/2+(a.previousDataSeriesCount+s)*q<<0;var p=a.axisX.reversed?l-q<<0:l+q<<0,t;0<=B[g].y?t=h:(t=m,m=h);c=B[g].color?B[g].color:f._colorSet[g%f._colorSet.length];ea(b,t,l,m,p,c,0,null,k,!1,!1,!1,f.fillOpacity);c=f.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:t,y1:l,x2:m,y2:p};c=
N(c);r&&ea(this._eventManager.ghostCtx,t,l,m,p,c,0,null,!1,!1,!1,!1);(B[g].indexLabel||f.indexLabel||B[g].indexLabelFormatter||f.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",dataPoint:B[g],dataSeries:f,point:{x:0<=B[g].y?m:t,y:l+(p-l)/2},direction:0>B[g].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(t,m),y1:l,x2:Math.max(t,m),y2:p},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,
0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:h<a.axisY.bounds.x1?a.axisY.bounds.x1:h>a.axisY.bounds.x2?a.axisY.bounds.x2:
h}}};p.prototype.renderStackedBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;q=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.height<<
0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>q&&(h=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,q));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&q<h)&&(q=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<
h&&(f=h);f>q&&(f=q);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var p=a.dataSeriesIndexes[B],k=this.data[p],t=k.dataPoints;if(0<t.length){var u=5<f&&k.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():
t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof t[h].y){q=a.axisX.convertValueToPixel(c);var x=q-a.plotType.plotUnits.length*f/2+a.index*f<<0,v=x+f<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y)l[c]=t[h].y+(l[c]?l[c]:0),0<l[c]&&(y=g[c]?g[c]:n,g[c]=s=a.axisY.convertValueToPixel(l[c]));else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=t[h].y+(w[c]?w[c]:0),s=m[c]?
m[c]:n,m[c]=y=a.axisY.convertValueToPixel(w[c]);else if(s=a.axisY.convertValueToPixel(t[h].y),0<=t[h].y){var A=g[c]?g[c]:0;y=n+A;s+=A;g[c]=A+(s-y)}else A=m[c]?m[c]:0,y=s-A,s=n-A,m[c]=A+(s-y);c=t[h].color?t[h].color:k._colorSet[h%k._colorSet.length];ea(b,y,x,s,v,c,0,null,u,!1,!1,!1,k.fillOpacity);c=k.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:h,x1:y,y1:x,x2:s,y2:v};c=N(c);r&&ea(this._eventManager.ghostCtx,y,x,s,v,c,0,null,!1,!1,!1,
!1);(t[h].indexLabel||k.indexLabel||t[h].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:t[h],dataSeries:k,point:{x:0<=t[h].y?s:y,y:q},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(y,s),y1:x,x2:Math.max(y,s),y2:v},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&
b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:n>a.axisY.bounds.x2?a.axisY.bounds.x2:n}}};p.prototype.renderStackedBar100=function(a){var d=
a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],m=[],l=[],w=[],h=0,s,q,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;q=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.height<<0;var f=a.axisX.dataInfo.minDiff;isFinite(f)||
(f=0.3*Math.abs(a.axisX.range));f=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(f)/Math.log(a.axisX.range):Math.abs(f)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>q&&(h=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,q));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&q<h)&&(q=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));f<h&&(f=h);f>q&&(f=q);b.save();r&&this._eventManager.ghostCtx.save();
b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var B=0;B<a.dataSeriesIndexes.length;B++){var k=a.dataSeriesIndexes[B],p=this.data[k],t=p.dataPoints;if(0<t.length){var u=5<f&&p.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(h=0;h<t.length;h++)if(c=t[h].x.getTime?t[h].x.getTime():t[h].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof t[h].y){q=a.axisX.convertValueToPixel(c);var x;x=0!==a.dataPointYSums[c]?100*(t[h].y/a.dataPointYSums[c]):0;var v=q-a.plotType.plotUnits.length*f/2+a.index*f<<0,y=v+f<<0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<t[h].y){l[c]=x+(l[c]?l[c]:0);if(0>=l[c])continue;x=g[c]?g[c]:n;g[c]=s=a.axisY.convertValueToPixel(l[c])}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=t[h].y)w[c]=x+(w[c]?w[c]:0),s=m[c]?m[c]:
n,m[c]=x=a.axisY.convertValueToPixel(w[c]);else if(s=a.axisY.convertValueToPixel(x),0<=t[h].y){var A=g[c]?g[c]:0;x=n+A;s+=A;a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.x2-s)&&(s=e.x2);g[c]=A+(s-x)}else A=m[c]?m[c]:0,x=s-A,s=n-A,a.dataSeriesIndexes.length-1===B&&1>=Math.abs(e.x1-x)&&(x=e.x1),m[c]=A+(s-x);c=t[h].color?t[h].color:p._colorSet[h%p._colorSet.length];ea(b,x,v,s,y,c,0,null,u,!1,!1,!1,p.fillOpacity);c=p.dataPointIds[h];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:k,
dataPointIndex:h,x1:x,y1:v,x2:s,y2:y};c=N(c);r&&ea(this._eventManager.ghostCtx,x,v,s,y,c,0,null,!1,!1,!1,!1);(t[h].indexLabel||p.indexLabel||t[h].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:t[h],dataSeries:p,point:{x:0<=t[h].y?s:x,y:q},direction:0>t[h].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(x,s),y1:v,x2:Math.max(x,s),y2:y},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",
a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.xScaleAnimation,easingFunction:M.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:
n>a.axisY.bounds.x2?a.axisY.bounds.x2:n}}};p.prototype.renderArea=function(a){var d,b;function c(){A&&(0<B.lineThickness&&g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?y=v:0>a.axisY.viewportMaximum?y=w.y1:0<a.axisY.viewportMinimum&&(y=l.y2),g.lineTo(t,y),g.lineTo(A.x,y),g.closePath(),g.globalAlpha=B.fillOpacity,g.fill(),g.globalAlpha=1,r&&(m.lineTo(t,y),m.lineTo(A.x,y),m.closePath(),m.fill()),g.beginPath(),g.moveTo(t,u),m.beginPath(),m.moveTo(t,u),A={x:t,y:u})}
var e=a.targetCanvasCtx||this.plotArea.ctx,g=r?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var m=this._eventManager.ghostCtx,l=a.axisX.lineCoordinates,w=a.axisY.lineCoordinates,h=[],s=this.plotArea,q;g.save();r&&m.save();g.beginPath();g.rect(s.x1,s.y1,s.width,s.height);g.clip();r&&(m.beginPath(),m.rect(s.x1,s.y1,s.width,s.height),m.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var f=a.dataSeriesIndexes[n],B=this.data[f],p=B.dataPoints,h=B.id;this._eventManager.objectMap[h]={objectType:"dataSeries",
dataSeriesIndex:f};h=N(h);m.fillStyle=h;h=[];d=!0;var k=0,t,u,x,v=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y,A=null;if(0<p.length){var z=B._colorSet[k%B._colorSet.length],aa=B.lineColor=B.options.lineColor||z,T=aa;g.fillStyle=z;g.strokeStyle=aa;g.lineWidth=B.lineThickness;b="solid";if(g.setLineDash){var Y=R(B.nullDataLineDashType,B.lineThickness);b=B.lineDashType;var ca=R(b,B.lineThickness);g.setLineDash(ca)}for(var da=!0;k<p.length;k++)if(x=p[k].x.getTime?p[k].x.getTime():
p[k].x,!(x<a.axisX.dataInfo.viewPortMin||x>a.axisX.dataInfo.viewPortMax&&(!B.connectNullData||!da)))if("number"!==typeof p[k].y)B.connectNullData||(da||d)||c(),da=!0;else{t=a.axisX.convertValueToPixel(x);u=a.axisY.convertValueToPixel(p[k].y);d||da?(!d&&B.connectNullData?(g.setLineDash&&(B.options.nullDataLineDashType||b===B.lineDashType&&B.lineDashType!==B.nullDataLineDashType)&&(d=t,b=u,t=q.x,u=q.y,c(),g.moveTo(q.x,q.y),t=d,u=b,A=q,b=B.nullDataLineDashType,g.setLineDash(Y)),g.lineTo(t,u),r&&m.lineTo(t,
u)):(g.beginPath(),g.moveTo(t,u),r&&(m.beginPath(),m.moveTo(t,u)),A={x:t,y:u}),da=d=!1):(g.lineTo(t,u),r&&m.lineTo(t,u),0==k%250&&c());q={x:t,y:u};k<p.length-1&&(T!==(p[k].lineColor||aa)||b!==(p[k].lineDashType||B.lineDashType))&&(c(),T=p[k].lineColor||aa,g.strokeStyle=T,g.setLineDash&&(p[k].lineDashType?(b=p[k].lineDashType,g.setLineDash(R(b,B.lineThickness))):(b=B.lineDashType,g.setLineDash(ca))));var Z=B.dataPointIds[k];this._eventManager.objectMap[Z]={id:Z,objectType:"dataPoint",dataSeriesIndex:f,
dataPointIndex:k,x1:t,y1:u};0!==p[k].markerSize&&(0<p[k].markerSize||0<B.markerSize)&&(x=B.getMarkerProperties(k,t,u,g),h.push(x),Z=N(Z),r&&h.push({x:t,y:u,ctx:m,type:x.type,size:x.size,color:Z,borderColor:Z,borderThickness:x.borderThickness}));(p[k].indexLabel||B.indexLabel||p[k].indexLabelFormatter||B.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",dataPoint:p[k],dataSeries:B,point:{x:t,y:u},direction:0>p[k].y===a.axisY.reversed?1:-1,color:z})}c();ia.drawMarkers(h)}}r&&(e.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),g.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.clearRect(s.x1,s.y1,s.width,s.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,
animationBase:0}}};p.prototype.renderSplineArea=function(a){function d(){var b=v(x,2);if(0<b.length){if(0<q.lineThickness){c.beginPath();c.moveTo(b[0].x,b[0].y);b[0].newStrokeStyle&&(c.strokeStyle=b[0].newStrokeStyle);b[0].newLineDashArray&&c.setLineDash(b[0].newLineDashArray);for(var d=0;d<b.length-3;d+=3)if(c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),r&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle||b[d+3].newLineDashArray)c.stroke(),
c.beginPath(),c.moveTo(b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle&&(c.strokeStyle=b[d+3].newStrokeStyle),b[d+3].newLineDashArray&&c.setLineDash(b[d+3].newLineDashArray);c.stroke()}c.beginPath();c.moveTo(b[0].x,b[0].y);r&&(e.beginPath(),e.moveTo(b[0].x,b[0].y));for(d=0;d<b.length-3;d+=3)c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),r&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y);a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?
t=p:0>a.axisY.viewportMaximum?t=m.y1:0<a.axisY.viewportMinimum&&(t=g.y2);u={x:b[0].x,y:b[0].y};c.lineTo(b[b.length-1].x,t);c.lineTo(u.x,t);c.closePath();c.globalAlpha=q.fillOpacity;c.fill();c.globalAlpha=1;r&&(e.lineTo(b[b.length-1].x,t),e.lineTo(u.x,t),e.closePath(),e.fill())}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=a.axisX.lineCoordinates,m=a.axisY.lineCoordinates,l=[],w=this.plotArea;c.save();r&&
e.save();c.beginPath();c.rect(w.x1,w.y1,w.width,w.height);c.clip();r&&(e.beginPath(),e.rect(w.x1,w.y1,w.width,w.height),e.clip());for(var h=0;h<a.dataSeriesIndexes.length;h++){var s=a.dataSeriesIndexes[h],q=this.data[s],n=q.dataPoints,l=q.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:s};l=N(l);e.fillStyle=l;var l=[],f=0,B,k,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),t,u=null,x=[];if(0<n.length){var ma=q._colorSet[f%q._colorSet.length],
y=q.lineColor=q.options.lineColor||ma,A=y;c.fillStyle=ma;c.strokeStyle=y;c.lineWidth=q.lineThickness;var z="solid";if(c.setLineDash){var aa=R(q.nullDataLineDashType,q.lineThickness),z=q.lineDashType,T=R(z,q.lineThickness);c.setLineDash(T)}for(k=!1;f<n.length;f++)if(B=n[f].x.getTime?n[f].x.getTime():n[f].x,!(B<a.axisX.dataInfo.viewPortMin||B>a.axisX.dataInfo.viewPortMax&&(!q.connectNullData||!k)))if("number"!==typeof n[f].y)0<f&&!k&&(q.connectNullData?c.setLineDash&&(0<x.length&&(q.options.nullDataLineDashType||
!n[f-1].lineDashType))&&(x[x.length-1].newLineDashArray=aa,z=q.nullDataLineDashType):(d(),x=[])),k=!0;else{B=a.axisX.convertValueToPixel(B);k=a.axisY.convertValueToPixel(n[f].y);var Y=q.dataPointIds[f];this._eventManager.objectMap[Y]={id:Y,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:f,x1:B,y1:k};x[x.length]={x:B,y:k};f<n.length-1&&(A!==(n[f].lineColor||y)||z!==(n[f].lineDashType||q.lineDashType))&&(A=n[f].lineColor||y,x[x.length-1].newStrokeStyle=A,c.setLineDash&&(n[f].lineDashType?(z=
n[f].lineDashType,x[x.length-1].newLineDashArray=R(z,q.lineThickness)):(z=q.lineDashType,x[x.length-1].newLineDashArray=T)));if(0!==n[f].markerSize&&(0<n[f].markerSize||0<q.markerSize)){var ca=q.getMarkerProperties(f,B,k,c);l.push(ca);Y=N(Y);r&&l.push({x:B,y:k,ctx:e,type:ca.type,size:ca.size,color:Y,borderColor:Y,borderThickness:ca.borderThickness})}(n[f].indexLabel||q.indexLabel||n[f].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:n[f],dataSeries:q,
point:{x:B,y:k},direction:0>n[f].y===a.axisY.reversed?1:-1,color:ma});k=!1}d();ia.drawMarkers(l)}}r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(w.x1,w.y1,w.width,w.height),
this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStepArea=function(a){var d,b;function c(){A&&(0<B.lineThickness&&g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?y=v:0>a.axisY.viewportMaximum?y=w.y1:0<a.axisY.viewportMinimum&&(y=l.y2),g.lineTo(t,y),g.lineTo(A.x,y),g.closePath(),g.globalAlpha=B.fillOpacity,g.fill(),g.globalAlpha=
1,r&&(m.lineTo(t,y),m.lineTo(A.x,y),m.closePath(),m.fill()),g.beginPath(),g.moveTo(t,u),m.beginPath(),m.moveTo(t,u),A={x:t,y:u})}var e=a.targetCanvasCtx||this.plotArea.ctx,g=r?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var m=this._eventManager.ghostCtx,l=a.axisX.lineCoordinates,w=a.axisY.lineCoordinates,h=[],s=this.plotArea,q;g.save();r&&m.save();g.beginPath();g.rect(s.x1,s.y1,s.width,s.height);g.clip();r&&(m.beginPath(),m.rect(s.x1,s.y1,s.width,s.height),m.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var f=
a.dataSeriesIndexes[n],B=this.data[f],k=B.dataPoints,h=B.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:f};h=N(h);m.fillStyle=h;h=[];d=!0;var p=0,t,u,x,v=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y,A=null;b=!1;if(0<k.length){var z=B._colorSet[p%B._colorSet.length],aa=B.lineColor=B.options.lineColor||z,T=aa;g.fillStyle=z;g.strokeStyle=aa;g.lineWidth=B.lineThickness;var Y="solid";if(g.setLineDash){var ca=R(B.nullDataLineDashType,B.lineThickness),
Y=B.lineDashType,da=R(Y,B.lineThickness);g.setLineDash(da)}for(;p<k.length;p++)if(x=k[p].x.getTime?k[p].x.getTime():k[p].x,!(x<a.axisX.dataInfo.viewPortMin||x>a.axisX.dataInfo.viewPortMax&&(!B.connectNullData||!b))){var Z=u;"number"!==typeof k[p].y?(B.connectNullData||(b||d)||c(),b=!0):(t=a.axisX.convertValueToPixel(x),u=a.axisY.convertValueToPixel(k[p].y),d||b?(!d&&B.connectNullData?(g.setLineDash&&(B.options.nullDataLineDashType||Y===B.lineDashType&&B.lineDashType!==B.nullDataLineDashType)&&(d=
t,b=u,t=q.x,u=q.y,c(),g.moveTo(q.x,q.y),t=d,u=b,A=q,Y=B.nullDataLineDashType,g.setLineDash(ca)),g.lineTo(t,Z),g.lineTo(t,u),r&&(m.lineTo(t,Z),m.lineTo(t,u))):(g.beginPath(),g.moveTo(t,u),r&&(m.beginPath(),m.moveTo(t,u)),A={x:t,y:u}),b=d=!1):(g.lineTo(t,Z),r&&m.lineTo(t,Z),g.lineTo(t,u),r&&m.lineTo(t,u),0==p%250&&c()),q={x:t,y:u},p<k.length-1&&(T!==(k[p].lineColor||aa)||Y!==(k[p].lineDashType||B.lineDashType))&&(c(),T=k[p].lineColor||aa,g.strokeStyle=T,g.setLineDash&&(k[p].lineDashType?(Y=k[p].lineDashType,
g.setLineDash(R(Y,B.lineThickness))):(Y=B.lineDashType,g.setLineDash(da)))),x=B.dataPointIds[p],this._eventManager.objectMap[x]={id:x,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:p,x1:t,y1:u},0!==k[p].markerSize&&(0<k[p].markerSize||0<B.markerSize)&&(Z=B.getMarkerProperties(p,t,u,g),h.push(Z),x=N(x),r&&h.push({x:t,y:u,ctx:m,type:Z.type,size:Z.size,color:x,borderColor:x,borderThickness:Z.borderThickness})),(k[p].indexLabel||B.indexLabel||k[p].indexLabelFormatter||B.indexLabelFormatter)&&
this._indexLabels.push({chartType:"stepArea",dataPoint:k[p],dataSeries:B,point:{x:t,y:u},direction:0>k[p].y===a.axisY.reversed?1:-1,color:z}))}c();ia.drawMarkers(h)}}r&&(e.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),g.clearRect(s.x1,s.y1,s.width,s.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStackedArea=function(a){function d(){if(!(1>h.length)){for(0<A.lineThickness&&c.stroke();0<h.length;){var a=h.pop();c.lineTo(a.x,a.y);r&&u.lineTo(a.x,a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();r&&(u.closePath(),
u.fill(),u.beginPath());h=[]}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=null,m=[],l=this.plotArea,w=[],h=[],s=[],q=[],n=0,f,k,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u=this._eventManager.ghostCtx,t,C,x;r&&u.beginPath();c.save();r&&u.save();c.beginPath();c.rect(l.x1,l.y1,l.width,l.height);c.clip();r&&(u.beginPath(),u.rect(l.x1,l.y1,l.width,l.height),u.clip());for(var e=[],v=0;v<a.dataSeriesIndexes.length;v++){var y=
a.dataSeriesIndexes[v],A=this.data[y],z=A.dataPoints;A.dataPointIndexes=[];for(n=0;n<z.length;n++)y=z[n].x.getTime?z[n].x.getTime():z[n].x,A.dataPointIndexes[y]=n,e[y]||(s.push(y),e[y]=!0);s.sort(Sa)}for(v=0;v<a.dataSeriesIndexes.length;v++){y=a.dataSeriesIndexes[v];A=this.data[y];z=A.dataPoints;C=!0;h=[];n=A.id;this._eventManager.objectMap[n]={objectType:"dataSeries",dataSeriesIndex:y};n=N(n);u.fillStyle=n;if(0<s.length){var e=A._colorSet[0],aa=A.lineColor=A.options.lineColor||e,T=aa;c.fillStyle=
e;c.strokeStyle=aa;c.lineWidth=A.lineThickness;x="solid";if(c.setLineDash){var Y=R(A.nullDataLineDashType,A.lineThickness);x=A.lineDashType;var ca=R(x,A.lineThickness);c.setLineDash(ca)}for(var da=!0,n=0;n<s.length;n++){var g=s[n],Z=null,Z=0<=A.dataPointIndexes[g]?z[A.dataPointIndexes[g]]:{x:g,y:null};if(!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||!da)))if("number"!==typeof Z.y)A.connectNullData||(da||C)||d(),da=!0;else{f=a.axisX.convertValueToPixel(g);var oa=
w[g]?w[g]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){q[g]=Z.y+(q[g]?q[g]:0);if(0>=q[g]&&a.axisY.logarithmic)continue;k=a.axisY.convertValueToPixel(q[g])}else k=a.axisY.convertValueToPixel(Z.y),k-=oa;h.push({x:f,y:p-oa});w[g]=p-k;C||da?(!C&&A.connectNullData?(c.setLineDash&&(A.options.nullDataLineDashType||x===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(C=h.pop(),x=h[h.length-1],d(),c.moveTo(t.x,t.y),h.push(x),h.push(C),x=A.nullDataLineDashType,
c.setLineDash(Y)),c.lineTo(f,k),r&&u.lineTo(f,k)):(c.beginPath(),c.moveTo(f,k),r&&(u.beginPath(),u.moveTo(f,k))),da=C=!1):(c.lineTo(f,k),r&&u.lineTo(f,k),0==n%250&&(d(),c.moveTo(f,k),r&&u.moveTo(f,k),h.push({x:f,y:p-oa})));t={x:f,y:k};n<z.length-1&&(T!==(z[n].lineColor||aa)||x!==(z[n].lineDashType||A.lineDashType))&&(d(),c.beginPath(),c.moveTo(f,k),h.push({x:f,y:p-oa}),T=z[n].lineColor||aa,c.strokeStyle=T,c.setLineDash&&(z[n].lineDashType?(x=z[n].lineDashType,c.setLineDash(R(x,A.lineThickness))):
(x=A.lineDashType,c.setLineDash(ca))));if(0<=A.dataPointIndexes[g]){var la=A.dataPointIds[A.dataPointIndexes[g]];this._eventManager.objectMap[la]={id:la,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:A.dataPointIndexes[g],x1:f,y1:k}}0<=A.dataPointIndexes[g]&&0!==Z.markerSize&&(0<Z.markerSize||0<A.markerSize)&&(oa=A.getMarkerProperties(A.dataPointIndexes[g],f,k,c),m.push(oa),g=N(la),r&&m.push({x:f,y:k,ctx:u,type:oa.type,size:oa.size,color:g,borderColor:g,borderThickness:oa.borderThickness}));
(Z.indexLabel||A.indexLabel||Z.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:Z,dataSeries:A,point:{x:f,y:k},direction:0>z[n].y===a.axisY.reversed?1:-1,color:e})}}d();c.moveTo(f,k);r&&u.moveTo(f,k)}delete A.dataPointIndexes}ia.drawMarkers(m);r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&
c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(l.x1,l.y1,l.width,l.height),u.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderStackedArea100=function(a){function d(){for(0<A.lineThickness&&c.stroke();0<h.length;){var a=h.pop();c.lineTo(a.x,a.y);r&&x.lineTo(a.x,
a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();r&&(x.closePath(),x.fill(),x.beginPath());h=[]}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=null,m=this.plotArea,l=[],w=[],h=[],s=[],q=[],n=0,f,k,p,u,t,C=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),x=this._eventManager.ghostCtx;c.save();r&&x.save();c.beginPath();c.rect(m.x1,m.y1,m.width,m.height);c.clip();r&&(x.beginPath(),
x.rect(m.x1,m.y1,m.width,m.height),x.clip());for(var e=[],v=0;v<a.dataSeriesIndexes.length;v++){var y=a.dataSeriesIndexes[v],A=this.data[y],z=A.dataPoints;A.dataPointIndexes=[];for(n=0;n<z.length;n++)y=z[n].x.getTime?z[n].x.getTime():z[n].x,A.dataPointIndexes[y]=n,e[y]||(s.push(y),e[y]=!0);s.sort(Sa)}for(v=0;v<a.dataSeriesIndexes.length;v++){y=a.dataSeriesIndexes[v];A=this.data[y];z=A.dataPoints;u=!0;e=A.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:y};e=N(e);x.fillStyle=
e;h=[];if(0<s.length){var e=A._colorSet[n%A._colorSet.length],aa=A.lineColor=A.options.lineColor||e,T=aa;c.fillStyle=e;c.strokeStyle=aa;c.lineWidth=A.lineThickness;t="solid";if(c.setLineDash){var Y=R(A.nullDataLineDashType,A.lineThickness);t=A.lineDashType;var ca=R(t,A.lineThickness);c.setLineDash(ca)}for(var da=!0,n=0;n<s.length;n++){var g=s[n],Z=null,Z=0<=A.dataPointIndexes[g]?z[A.dataPointIndexes[g]]:{x:g,y:null};if(!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||
!da)))if("number"!==typeof Z.y)A.connectNullData||(da||u)||d(),da=!0;else{var oa;oa=0!==a.dataPointYSums[g]?100*(Z.y/a.dataPointYSums[g]):0;f=a.axisX.convertValueToPixel(g);var la=w[g]?w[g]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){q[g]=oa+(q[g]?q[g]:0);if(0>=q[g]&&a.axisY.logarithmic)continue;k=a.axisY.convertValueToPixel(q[g])}else k=a.axisY.convertValueToPixel(oa),k-=la;h.push({x:f,y:C-la});w[g]=C-k;u||da?(!u&&A.connectNullData?(c.setLineDash&&
(A.options.nullDataLineDashType||t===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(u=h.pop(),t=h[h.length-1],d(),c.moveTo(p.x,p.y),h.push(t),h.push(u),t=A.nullDataLineDashType,c.setLineDash(Y)),c.lineTo(f,k),r&&x.lineTo(f,k)):(c.beginPath(),c.moveTo(f,k),r&&(x.beginPath(),x.moveTo(f,k))),da=u=!1):(c.lineTo(f,k),r&&x.lineTo(f,k),0==n%250&&(d(),c.moveTo(f,k),r&&x.moveTo(f,k),h.push({x:f,y:C-la})));p={x:f,y:k};n<z.length-1&&(T!==(z[n].lineColor||aa)||t!==(z[n].lineDashType||A.lineDashType))&&
(d(),c.beginPath(),c.moveTo(f,k),h.push({x:f,y:C-la}),T=z[n].lineColor||aa,c.strokeStyle=T,c.setLineDash&&(z[n].lineDashType?(t=z[n].lineDashType,c.setLineDash(R(t,A.lineThickness))):(t=A.lineDashType,c.setLineDash(ca))));if(0<=A.dataPointIndexes[g]){var G=A.dataPointIds[A.dataPointIndexes[g]];this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:A.dataPointIndexes[g],x1:f,y1:k}}0<=A.dataPointIndexes[g]&&0!==Z.markerSize&&(0<Z.markerSize||0<A.markerSize)&&(la=
A.getMarkerProperties(n,f,k,c),l.push(la),g=N(G),r&&l.push({x:f,y:k,ctx:x,type:la.type,size:la.size,color:g,borderColor:g,borderThickness:la.borderThickness}));(Z.indexLabel||A.indexLabel||Z.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:Z,dataSeries:A,point:{x:f,y:k},direction:0>z[n].y===a.axisY.reversed?1:-1,color:e})}}d();c.moveTo(f,k);r&&x.moveTo(f,k)}delete A.dataPointIndexes}ia.drawMarkers(l);r&&(b.drawImage(this._preRenderCanvas,0,
0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(m.x1,m.y1,m.width,m.height),x.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};
p.prototype.renderBubble=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,m;b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=-Infinity,w=Infinity,h=0;h<a.dataSeriesIndexes.length;h++)for(var s=a.dataSeriesIndexes[h],
q=this.data[s],n=q.dataPoints,f=0,e=0;e<n.length;e++)g=n[e].getTime?g=n[e].x.getTime():g=n[e].x,g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax||"undefined"===typeof n[e].z||(f=n[e].z,f>l&&(l=f),f<w&&(w=f));for(var k=25*Math.PI,p=Math.max(Math.pow(0.25*Math.min(c.height,c.width)/2,2)*Math.PI,k),h=0;h<a.dataSeriesIndexes.length;h++)if(s=a.dataSeriesIndexes[h],q=this.data[s],n=q.dataPoints,0<n.length)for(b.strokeStyle="#4572A7 ",e=0;e<n.length;e++)if(g=n[e].getTime?g=n[e].x.getTime():
g=n[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){g=a.axisX.convertValueToPixel(g);m=a.axisY.convertValueToPixel(n[e].y);var f=n[e].z,u=2*Math.max(Math.sqrt((l===w?p/2:k+(p-k)/(l-w)*(f-w))/Math.PI)<<0,1),f=q.getMarkerProperties(e,b);f.size=u;b.globalAlpha=q.fillOpacity;ia.drawMarker(g,m,b,f.type,f.size,f.color,f.borderColor,f.borderThickness);b.globalAlpha=1;var t=q.dataPointIds[e];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:s,
dataPointIndex:e,x1:g,y1:m,size:u};u=N(t);r&&ia.drawMarker(g,m,this._eventManager.ghostCtx,f.type,f.size,u,u,f.borderThickness);(n[e].indexLabel||q.indexLabel||n[e].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"bubble",dataPoint:n[e],dataSeries:q,point:{x:g,y:m},direction:1,bounds:{x1:g-f.size/2,y1:m-f.size/2,x2:g+f.size/2,y2:m+f.size/2},color:null})}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&
b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderScatter=function(a){var d=
a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,m;b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w],s=h.dataPoints;if(0<s.length){b.strokeStyle=
"#4572A7 ";Math.pow(0.3*Math.min(c.height,c.width)/2,2);for(var q=0,n=0,e=0;e<s.length;e++)if(g=s[e].getTime?g=s[e].x.getTime():g=s[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof s[e].y){g=a.axisX.convertValueToPixel(g);m=a.axisY.convertValueToPixel(s[e].y);var f=h.getMarkerProperties(e,g,m,b);b.globalAlpha=h.fillOpacity;ia.drawMarker(f.x,f.y,f.ctx,f.type,f.size,f.color,f.borderColor,f.borderThickness);b.globalAlpha=1;Math.sqrt((q-g)*(q-g)+(n-m)*(n-m))<Math.min(f.size,
5)&&s.length>Math.min(this.plotArea.width,this.plotArea.height)||(q=h.dataPointIds[e],this._eventManager.objectMap[q]={id:q,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:e,x1:g,y1:m},q=N(q),r&&ia.drawMarker(f.x,f.y,this._eventManager.ghostCtx,f.type,f.size,q,q,f.borderThickness),(s[e].indexLabel||h.indexLabel||s[e].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:s[e],dataSeries:h,point:{x:g,y:m},direction:1,bounds:{x1:g-f.size/2,y1:m-f.size/
2,x2:g+f.size/2,y2:m+f.size/2},color:null}),q=g,n=m)}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderCandlestick=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=null,m=this.plotArea,l=0,w,h,s,q,n,f,e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,g=this.options.dataPointMaxWidth?
this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.015*this.width,k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.range));k=this.options.dataPointWidth?this.dataPointWidth:0.7*m.width*(a.axisX.logarithmic?Math.log(k)/Math.log(a.axisX.range):Math.abs(k)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&e>g&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,g));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&g<e)&&(g=Math.max(this.options.dataPointWidth?
this.dataPointWidth:-Infinity,e));k<e&&(k=e);k>g&&(k=g);b.save();r&&c.save();b.beginPath();b.rect(m.x1,m.y1,m.width,m.height);b.clip();r&&(c.beginPath(),c.rect(m.x1,m.y1,m.width,m.height),c.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var v=a.dataSeriesIndexes[p],t=this.data[v],C=t.dataPoints;if(0<C.length)for(var x=5<k&&t.bevelEnabled?!0:!1,l=0;l<C.length;l++)if(C[l].getTime?f=C[l].x.getTime():f=C[l].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&!u(C[l].y)&&C[l].y.length&&
"number"===typeof C[l].y[0]&&"number"===typeof C[l].y[1]&&"number"===typeof C[l].y[2]&&"number"===typeof C[l].y[3]){w=a.axisX.convertValueToPixel(f);h=a.axisY.convertValueToPixel(C[l].y[0]);s=a.axisY.convertValueToPixel(C[l].y[1]);q=a.axisY.convertValueToPixel(C[l].y[2]);n=a.axisY.convertValueToPixel(C[l].y[3]);var z=w-k/2<<0,y=z+k<<0,g=t.options.fallingColor?t.fallingColor:t._colorSet[0],e=C[l].color?C[l].color:t._colorSet[0],A=Math.round(Math.max(1,0.15*k)),D=0===A%2?0:0.5,aa=t.dataPointIds[l];
this._eventManager.objectMap[aa]={id:aa,objectType:"dataPoint",dataSeriesIndex:v,dataPointIndex:l,x1:z,y1:h,x2:y,y2:s,x3:w,y3:q,x4:w,y4:n,borderThickness:A,color:e};b.strokeStyle=e;b.beginPath();b.lineWidth=A;c.lineWidth=Math.max(A,4);"candlestick"===t.type?(b.moveTo(w-D,s),b.lineTo(w-D,Math.min(h,n)),b.stroke(),b.moveTo(w-D,Math.max(h,n)),b.lineTo(w-D,q),b.stroke(),ea(b,z,Math.min(h,n),y,Math.max(h,n),C[l].y[0]<=C[l].y[3]?t.risingColor:g,A,e,x,x,!1,!1,t.fillOpacity),r&&(e=N(aa),c.strokeStyle=e,c.moveTo(w-
D,s),c.lineTo(w-D,Math.min(h,n)),c.stroke(),c.moveTo(w-D,Math.max(h,n)),c.lineTo(w-D,q),c.stroke(),ea(c,z,Math.min(h,n),y,Math.max(h,n),e,0,null,!1,!1,!1,!1))):"ohlc"===t.type&&(b.moveTo(w-D,s),b.lineTo(w-D,q),b.stroke(),b.beginPath(),b.moveTo(w,h),b.lineTo(z,h),b.stroke(),b.beginPath(),b.moveTo(w,n),b.lineTo(y,n),b.stroke(),r&&(e=N(aa),c.strokeStyle=e,c.moveTo(w-D,s),c.lineTo(w-D,q),c.stroke(),c.beginPath(),c.moveTo(w,h),c.lineTo(z,h),c.stroke(),c.beginPath(),c.moveTo(w,n),c.lineTo(y,n),c.stroke()));
(C[l].indexLabel||t.indexLabel||C[l].indexLabelFormatter||t.indexLabelFormatter)&&this._indexLabels.push({chartType:t.type,dataPoint:C[l],dataSeries:t,point:{x:z+(y-z)/2,y:a.axisY.reversed?q:s},direction:1,bounds:{x1:z,y1:Math.min(s,q),x2:y,y2:Math.max(s,q)},color:e})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,
0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(m.x1,m.y1,m.width,m.height),c.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderBoxAndWhisker=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=
null,g=this.plotArea,m=0,l,w,h,s,q,n,f,e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,m=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.015*this.width,k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.range));k=this.options.dataPointWidth?this.dataPointWidth:0.7*g.width*(a.axisX.logarithmic?Math.log(k)/Math.log(a.axisX.range):Math.abs(k)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&
e>m&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<e)&&(m=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,e));k<e&&(k=e);k>m&&(k=m);b.save();r&&c.save();b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();r&&(c.beginPath(),c.rect(g.x1,g.y1,g.width,g.height),c.clip());for(var p=!1,p=!!a.axisY.reversed,v=0;v<a.dataSeriesIndexes.length;v++){var t=a.dataSeriesIndexes[v],C=this.data[t],x=C.dataPoints;
if(0<x.length)for(var z=5<k&&C.bevelEnabled?!0:!1,m=0;m<x.length;m++)if(x[m].getTime?f=x[m].x.getTime():f=x[m].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&!u(x[m].y)&&x[m].y.length&&"number"===typeof x[m].y[0]&&"number"===typeof x[m].y[1]&&"number"===typeof x[m].y[2]&&"number"===typeof x[m].y[3]&&"number"===typeof x[m].y[4]&&5===x[m].y.length){l=a.axisX.convertValueToPixel(f);w=a.axisY.convertValueToPixel(x[m].y[0]);h=a.axisY.convertValueToPixel(x[m].y[1]);s=a.axisY.convertValueToPixel(x[m].y[2]);
q=a.axisY.convertValueToPixel(x[m].y[3]);n=a.axisY.convertValueToPixel(x[m].y[4]);var y=l-k/2<<0,A=l+k/2<<0,e=x[m].color?x[m].color:C._colorSet[0],D=Math.round(Math.max(1,0.15*k)),aa=0===D%2?0:0.5,T=x[m].whiskerColor?x[m].whiskerColor:x[m].color?C.whiskerColor?C.whiskerColor:x[m].color:C.whiskerColor?C.whiskerColor:e,Y="number"===typeof x[m].whiskerThickness?x[m].whiskerThickness:"number"===typeof C.options.whiskerThickness?C.whiskerThickness:D,ca=x[m].whiskerDashType?x[m].whiskerDashType:C.whiskerDashType,
da=u(x[m].whiskerLength)?u(C.options.whiskerLength)?k:C.whiskerLength:x[m].whiskerLength,da="number"===typeof da?0>=da?0:da>=k?k:da:"string"===typeof da?parseInt(da)*k/100>k?k:parseInt(da)*k/100:k,Z=1===Math.round(Y)%2?0.5:0,oa=x[m].stemColor?x[m].stemColor:x[m].color?C.stemColor?C.stemColor:x[m].color:C.stemColor?C.stemColor:e,la="number"===typeof x[m].stemThickness?x[m].stemThickness:"number"===typeof C.options.stemThickness?C.stemThickness:D,G=1===Math.round(la)%2?0.5:0,F=x[m].stemDashType?x[m].stemDashType:
C.stemDashType,E=x[m].lineColor?x[m].lineColor:x[m].color?C.lineColor?C.lineColor:x[m].color:C.lineColor?C.lineColor:e,H="number"===typeof x[m].lineThickness?x[m].lineThickness:"number"===typeof C.options.lineThickness?C.lineThickness:D,I=x[m].lineDashType?x[m].lineDashType:C.lineDashType,K=1===Math.round(H)%2?0.5:0,L=C.upperBoxColor,O=C.lowerBoxColor,Q=u(C.options.fillOpacity)?1:C.fillOpacity,P=C.dataPointIds[m];this._eventManager.objectMap[P]={id:P,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:m,
x1:y,y1:w,x2:A,y2:h,x3:l,y3:s,x4:l,y4:q,y5:n,borderThickness:D,color:e,stemThickness:la,stemColor:oa,whiskerThickness:Y,whiskerLength:da,whiskerColor:T,lineThickness:H,lineColor:E};b.save();0<la&&(b.beginPath(),b.strokeStyle=oa,b.lineWidth=la,b.setLineDash&&b.setLineDash(R(F,la)),b.moveTo(l-G,h),b.lineTo(l-G,w),b.stroke(),b.moveTo(l-G,q),b.lineTo(l-G,s),b.stroke());b.restore();c.lineWidth=Math.max(D,4);b.beginPath();ea(b,y,Math.min(n,h),A,Math.max(h,n),O,0,e,p?z:!1,p?!1:z,!1,!1,Q);b.beginPath();ea(b,
y,Math.min(s,n),A,Math.max(n,s),L,0,e,p?!1:z,p?z:!1,!1,!1,Q);b.beginPath();b.lineWidth=D;b.strokeStyle=e;b.rect(y-aa,Math.min(h,s)-aa,A-y+2*aa,Math.max(h,s)-Math.min(h,s)+2*aa);b.stroke();b.save();0<H&&(b.beginPath(),b.globalAlpha=1,b.setLineDash&&b.setLineDash(R(I,H)),b.strokeStyle=E,b.lineWidth=H,b.moveTo(y,n-K),b.lineTo(A,n-K),b.stroke());b.restore();b.save();0<Y&&(b.beginPath(),b.setLineDash&&b.setLineDash(R(ca,Y)),b.strokeStyle=T,b.lineWidth=Y,b.moveTo(l-da/2<<0,q-Z),b.lineTo(l+da/2<<0,q-Z),
b.stroke(),b.moveTo(l-da/2<<0,w+Z),b.lineTo(l+da/2<<0,w+Z),b.stroke());b.restore();r&&(e=N(P),c.strokeStyle=e,c.lineWidth=la,0<la&&(c.moveTo(l-aa-G,h),c.lineTo(l-aa-G,Math.max(w,q)),c.stroke(),c.moveTo(l-aa-G,Math.min(w,q)),c.lineTo(l-aa-G,s),c.stroke()),ea(c,y,Math.max(h,s),A,Math.min(h,s),e,0,null,!1,!1,!1,!1),0<Y&&(c.beginPath(),c.lineWidth=Y,c.moveTo(l+da/2,q-Z),c.lineTo(l-da/2,q-Z),c.stroke(),c.moveTo(l+da/2,w+Z),c.lineTo(l-da/2,w+Z),c.stroke()));(x[m].indexLabel||C.indexLabel||x[m].indexLabelFormatter||
C.indexLabelFormatter)&&this._indexLabels.push({chartType:C.type,dataPoint:x[m],dataSeries:C,point:{x:y+(A-y)/2,y:a.axisY.reversed?w:q},direction:1,bounds:{x1:y,y1:Math.min(w,q),x2:A,y2:Math.max(w,q)},color:e})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),b.clearRect(g.x1,g.y1,g.width,g.height),c.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderRangeColumn=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,m,l,w,g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:
1;m=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.03*this.width;var h=a.axisX.dataInfo.minDiff;isFinite(h)||(h=0.3*Math.abs(a.axisX.range));h=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(h)/Math.log(a.axisX.range):Math.abs(h)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>m&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&
(this.dataPointMinWidth&&m<g)&&(m=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));h<g&&(h=g);h>m&&(h=m);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var s=0;s<a.dataSeriesIndexes.length;s++){var q=a.dataSeriesIndexes[s],n=this.data[q],f=n.dataPoints;if(0<f.length)for(var k=
5<h&&n.bevelEnabled?!0:!1,g=0;g<f.length;g++)if(f[g].getTime?w=f[g].x.getTime():w=f[g].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&!u(f[g].y)&&f[g].y.length&&"number"===typeof f[g].y[0]&&"number"===typeof f[g].y[1]){c=a.axisX.convertValueToPixel(w);m=a.axisY.convertValueToPixel(f[g].y[0]);l=a.axisY.convertValueToPixel(f[g].y[1]);var p=a.axisX.reversed?c+a.plotType.totalDataSeries*h/2-(a.previousDataSeriesCount+s)*h<<0:c-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+
s)*h<<0,v=a.axisX.reversed?p-h<<0:p+h<<0,c=f[g].color?f[g].color:n._colorSet[g%n._colorSet.length];if(m>l){var t=m;m=l;l=t}t=n.dataPointIds[g];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:g,x1:p,y1:m,x2:v,y2:l};ea(b,p,m,v,l,c,0,c,k,k,!1,!1,n.fillOpacity);c=N(t);r&&ea(this._eventManager.ghostCtx,p,m,v,l,c,0,null,!1,!1,!1,!1);if(f[g].indexLabel||n.indexLabel||f[g].indexLabelFormatter||n.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",
dataPoint:f[g],dataSeries:n,indexKeyword:0,point:{x:p+(v-p)/2,y:f[g].y[1]>=f[g].y[0]?l:m},direction:f[g].y[1]>=f[g].y[0]?-1:1,bounds:{x1:p,y1:Math.min(m,l),x2:v,y2:Math.max(m,l)},color:c}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:f[g],dataSeries:n,indexKeyword:1,point:{x:p+(v-p)/2,y:f[g].y[1]>=f[g].y[0]?m:l},direction:f[g].y[1]>=f[g].y[0]?1:-1,bounds:{x1:p,y1:Math.min(m,l),x2:v,y2:Math.max(m,l)},color:c})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation=
"source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderError=
function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:d,c=a.axisY._position?"left"===a.axisY._position||"right"===a.axisY._position?!1:!0:!1;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=!1,m=this.plotArea,l=0,w,h,s,q,n,f,k,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(m.x1,m.y1,m.width,m.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(m.x1,
m.y1,m.width,m.height),this._eventManager.ghostCtx.clip());for(var v=0,t=0;t<this.data.length;t++)!this.data[t].type.match(/(bar|column)/ig)||!this.data[t].visible||this.data[t].type.match(/(stacked)/ig)&&v||v++;for(var C=0;C<a.dataSeriesIndexes.length;C++){var x=a.dataSeriesIndexes[C],z=this.data[x],y=z.dataPoints,A=u(z._linkedSeries)?!1:z._linkedSeries.type.match(/(bar|column)/ig)&&z._linkedSeries.visible?!0:!1,D=0;if(A)for(e=z._linkedSeries.id,t=0;t<e;t++)!this.data[t].type.match(/(bar|column)/ig)||
!this.data[t].visible||this.data[t].type.match(/(stacked)/ig)&&D||(this.data[t].type.match(/(range)/ig)&&(g=!0),D++);e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;l=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:c?Math.min(0.15*this.height,0.9*(this.plotArea.height/(A?v:1)))<<0:0.3*this.width;g&&(l=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:
c?Math.min(0.15*this.height,0.9*(this.plotArea.height/(A?v:1)))<<0:0.03*this.width);t=this.options.dataPointWidth?this.dataPointWidth:0.9*((c?m.height:m.width)*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/(A?v:1))<<0;this.dataPointMaxWidth&&e>l&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,l));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&l<e)&&(l=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,e));t<e&&
(t=e);t>l&&(t=l);if(0<y.length)for(var aa=z._colorSet,l=0;l<y.length;l++){var e=z.lineColor=z.options.color?z.options.color:aa[0],T={color:y[l].whiskerColor?y[l].whiskerColor:y[l].color?z.whiskerColor?z.whiskerColor:y[l].color:z.whiskerColor?z.whiskerColor:e,thickness:u(y[l].whiskerThickness)?z.whiskerThickness:y[l].whiskerThickness,dashType:y[l].whiskerDashType?y[l].whiskerDashType:z.whiskerDashType,length:u(y[l].whiskerLength)?u(z.options.whiskerLength)?t:z.options.whiskerLength:y[l].whiskerLength,
trimLength:u(y[l].whiskerLength)?u(z.options.whiskerLength)?50:0:0};T.length="number"===typeof T.length?0>=T.length?0:T.length>=t?t:T.length:"string"===typeof T.length?parseInt(T.length)*t/100>t?t:parseInt(T.length)*t/100>t:t;T.thickness="number"===typeof T.thickness?0>T.thickness?0:Math.round(T.thickness):2;var Y={color:y[l].stemColor?y[l].stemColor:y[l].color?z.stemColor?z.stemColor:y[l].color:z.stemColor?z.stemColor:e,thickness:y[l].stemThickness?y[l].stemThickness:z.stemThickness,dashType:y[l].stemDashType?
y[l].stemDashType:z.stemDashType};Y.thickness="number"===typeof Y.thickness?0>Y.thickness?0:Math.round(Y.thickness):2;y[l].getTime?k=y[l].x.getTime():k=y[l].x;if(!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&!u(y[l].y)&&y[l].y.length&&"number"===typeof y[l].y[0]&&"number"===typeof y[l].y[1]){var ca=a.axisX.convertValueToPixel(k);c?h=ca:w=ca;ca=a.axisY.convertValueToPixel(y[l].y[0]);c?s=ca:n=ca;ca=a.axisY.convertValueToPixel(y[l].y[1]);c?q=ca:f=ca;c?(n=a.axisX.reversed?h+(A?v:
1)*t/2-(A?D-1:0)*t<<0:h-(A?v:1)*t/2+(A?D-1:0)*t<<0,f=a.axisX.reversed?n-t<<0:n+t<<0):(s=a.axisX.reversed?w+(A?v:1)*t/2-(A?D-1:0)*t<<0:w-(A?v:1)*t/2+(A?D-1:0)*t<<0,q=a.axisX.reversed?s-t<<0:s+t<<0);!c&&n>f&&(ca=n,n=f,f=ca);c&&s>q&&(ca=s,s=q,q=ca);ca=z.dataPointIds[l];this._eventManager.objectMap[ca]={id:ca,objectType:"dataPoint",dataSeriesIndex:x,dataPointIndex:l,x1:Math.min(s,q),y1:Math.min(n,f),x2:Math.max(q,s),y2:Math.max(f,n),isXYSwapped:c,stemProperties:Y,whiskerProperties:T};E(b,Math.min(s,q),
Math.min(n,f),Math.max(q,s),Math.max(f,n),e,T,Y,c);r&&E(this._eventManager.ghostCtx,s,n,q,f,e,T,Y,c);if(y[l].indexLabel||z.indexLabel||y[l].indexLabelFormatter||z.indexLabelFormatter)this._indexLabels.push({chartType:"error",dataPoint:y[l],dataSeries:z,indexKeyword:0,point:{x:c?y[l].y[1]>=y[l].y[0]?s:q:s+(q-s)/2,y:c?n+(f-n)/2:y[l].y[1]>=y[l].y[0]?f:n},direction:y[l].y[1]>=y[l].y[0]?-1:1,bounds:{x1:c?Math.min(s,q):s,y1:c?n:Math.min(n,f),x2:c?Math.max(s,q):q,y2:c?f:Math.max(n,f)},color:e,axisSwapped:c}),
this._indexLabels.push({chartType:"error",dataPoint:y[l],dataSeries:z,indexKeyword:1,point:{x:c?y[l].y[1]>=y[l].y[0]?q:s:s+(q-s)/2,y:c?n+(f-n)/2:y[l].y[1]>=y[l].y[0]?n:f},direction:y[l].y[1]>=y[l].y[0]?1:-1,bounds:{x1:c?Math.min(s,q):s,y1:c?n:Math.min(n,f),x2:c?Math.max(s,q):q,y2:c?f:Math.max(n,f)},color:e,axisSwapped:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),
a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(m.x1,m.y1,m.width,m.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderRangeBar=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,b=r?this._preRenderCtx:
d;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,m,l,w,h,g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;m=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var s=a.axisX.dataInfo.minDiff;isFinite(s)||(s=0.3*Math.abs(a.axisX.range));s=this.options.dataPointWidth?this.dataPointWidth:0.9*
(e.height*(a.axisX.logarithmic?Math.log(s)/Math.log(a.axisX.range):Math.abs(s)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>m&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,m));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&m<g)&&(m=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));s<g&&(s=g);s>m&&(s=m);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),
this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var q=0;q<a.dataSeriesIndexes.length;q++){var n=a.dataSeriesIndexes[q],f=this.data[n],k=f.dataPoints;if(0<k.length){var p=5<s&&f.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<k.length;g++)if(k[g].getTime?h=k[g].x.getTime():h=k[g].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&!u(k[g].y)&&k[g].y.length&&"number"===typeof k[g].y[0]&&"number"===typeof k[g].y[1]){m=a.axisY.convertValueToPixel(k[g].y[0]);
l=a.axisY.convertValueToPixel(k[g].y[1]);w=a.axisX.convertValueToPixel(h);w=a.axisX.reversed?w+a.plotType.totalDataSeries*s/2-(a.previousDataSeriesCount+q)*s<<0:w-a.plotType.totalDataSeries*s/2+(a.previousDataSeriesCount+q)*s<<0;var v=a.axisX.reversed?w-s<<0:w+s<<0;m>l&&(c=m,m=l,l=c);c=k[g].color?k[g].color:f._colorSet[g%f._colorSet.length];ea(b,m,w,l,v,c,0,null,p,!1,!1,!1,f.fillOpacity);c=f.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,
x1:m,y1:w,x2:l,y2:v};c=N(c);r&&ea(this._eventManager.ghostCtx,m,w,l,v,c,0,null,!1,!1,!1,!1);if(k[g].indexLabel||f.indexLabel||k[g].indexLabelFormatter||f.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:k[g],dataSeries:f,indexKeyword:0,point:{x:k[g].y[1]>=k[g].y[0]?m:l,y:w+(v-w)/2},direction:k[g].y[1]>=k[g].y[0]?-1:1,bounds:{x1:Math.min(m,l),y1:w,x2:Math.max(m,l),y2:v},color:c}),this._indexLabels.push({chartType:"rangeBar",dataPoint:k[g],dataSeries:f,indexKeyword:1,point:{x:k[g].y[1]>=
k[g].y[0]?l:m,y:w+(v-w)/2},direction:k[g].y[1]>=k[g].y[0]?1:-1,bounds:{x1:Math.min(m,l),y1:w,x2:Math.max(m,l),y2:v},color:c})}}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,
e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};p.prototype.renderRangeArea=function(a){function d(){if(C){var a=null;0<s.lineThickness&&c.stroke();for(var b=w.length-1;0<=b;b--)a=w[b],c.lineTo(a.x,a.y),e.lineTo(a.x,a.y);c.closePath();c.globalAlpha=s.fillOpacity;c.fill();c.globalAlpha=1;e.fill();if(0<s.lineThickness){c.beginPath();c.moveTo(a.x,
a.y);for(b=0;b<w.length;b++)a=w[b],c.lineTo(a.x,a.y);c.stroke()}c.beginPath();c.moveTo(k,p);e.beginPath();e.moveTo(k,p);C={x:k,y:p};w=[];w.push({x:k,y:u})}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],m=this.plotArea;c.save();r&&e.save();c.beginPath();c.rect(m.x1,m.y1,m.width,m.height);c.clip();r&&(e.beginPath(),e.rect(m.x1,m.y1,m.width,m.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var w=
[],h=a.dataSeriesIndexes[l],s=this.data[h],q=s.dataPoints,g=s.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:h};g=N(g);e.fillStyle=g;var g=[],n=!0,f=0,k,p,u,t,C=null;if(0<q.length){var x=s._colorSet[f%s._colorSet.length],v=s.lineColor=s.options.lineColor||x,y=v;c.fillStyle=x;c.strokeStyle=v;c.lineWidth=s.lineThickness;var A="solid";if(c.setLineDash){var z=R(s.nullDataLineDashType,s.lineThickness),A=s.lineDashType,D=R(A,s.lineThickness);c.setLineDash(D)}for(var T=!0;f<
q.length;f++)if(t=q[f].x.getTime?q[f].x.getTime():q[f].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!s.connectNullData||!T)))if(null!==q[f].y&&q[f].y.length&&"number"===typeof q[f].y[0]&&"number"===typeof q[f].y[1]){k=a.axisX.convertValueToPixel(t);p=a.axisY.convertValueToPixel(q[f].y[0]);u=a.axisY.convertValueToPixel(q[f].y[1]);n||T?(s.connectNullData&&!n?(c.setLineDash&&(s.options.nullDataLineDashType||A===s.lineDashType&&s.lineDashType!==s.nullDataLineDashType)&&(w[w.length-
1].newLineDashArray=D,A=s.nullDataLineDashType,c.setLineDash(z)),c.lineTo(k,p),r&&e.lineTo(k,p),w.push({x:k,y:u})):(c.beginPath(),c.moveTo(k,p),C={x:k,y:p},w=[],w.push({x:k,y:u}),r&&(e.beginPath(),e.moveTo(k,p))),T=n=!1):(c.lineTo(k,p),w.push({x:k,y:u}),r&&e.lineTo(k,p),0==f%250&&d());t=s.dataPointIds[f];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:f,x1:k,y1:p,y2:u};f<q.length-1&&(y!==(q[f].lineColor||v)||A!==(q[f].lineDashType||s.lineDashType))&&(d(),
y=q[f].lineColor||v,w[w.length-1].newStrokeStyle=y,c.strokeStyle=y,c.setLineDash&&(q[f].lineDashType?(A=q[f].lineDashType,w[w.length-1].newLineDashArray=R(A,s.lineThickness),c.setLineDash(w[w.length-1].newLineDashArray)):(A=s.lineDashType,w[w.length-1].newLineDashArray=D,c.setLineDash(D))));if(0!==q[f].markerSize&&(0<q[f].markerSize||0<s.markerSize)){var Y=s.getMarkerProperties(f,k,u,c);g.push(Y);var ca=N(t);r&&g.push({x:k,y:u,ctx:e,type:Y.type,size:Y.size,color:ca,borderColor:ca,borderThickness:Y.borderThickness});
Y=s.getMarkerProperties(f,k,p,c);g.push(Y);ca=N(t);r&&g.push({x:k,y:p,ctx:e,type:Y.type,size:Y.size,color:ca,borderColor:ca,borderThickness:Y.borderThickness})}if(q[f].indexLabel||s.indexLabel||q[f].indexLabelFormatter||s.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:q[f],dataSeries:s,indexKeyword:0,point:{x:k,y:p},direction:q[f].y[0]>q[f].y[1]===a.axisY.reversed?-1:1,color:x}),this._indexLabels.push({chartType:"rangeArea",dataPoint:q[f],dataSeries:s,indexKeyword:1,point:{x:k,
y:u},direction:q[f].y[0]>q[f].y[1]===a.axisY.reversed?1:-1,color:x})}else T||n||d(),T=!0;d();ia.drawMarkers(g)}}r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(m.x1,m.y1,
m.width,m.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderRangeSplineArea=function(a){function d(a,b){var d=v(u,2);if(0<d.length){if(0<h.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var f=0;f<d.length-3;f+=3){if(d[f].newStrokeStyle||d[f].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,
d[f].y),d[f].newStrokeStyle&&(c.strokeStyle=d[f].newStrokeStyle),d[f].newLineDashArray&&c.setLineDash(d[f].newLineDashArray);c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath();c.moveTo(d[0].x,d[0].y);r&&(e.beginPath(),e.moveTo(d[0].x,d[0].y));for(f=0;f<d.length-3;f+=3)c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y),r&&e.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y);d=v(z,2);c.lineTo(z[z.length-1].x,z[z.length-
1].y);for(f=d.length-1;2<f;f-=3)c.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-2].x,d[f-2].y,d[f-3].x,d[f-3].y),r&&e.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-2].x,d[f-2].y,d[f-3].x,d[f-3].y);c.closePath();c.globalAlpha=h.fillOpacity;c.fill();r&&(e.closePath(),e.fill());c.globalAlpha=1;if(0<h.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var g=f=0;f<d.length-3;f+=3,g++){if(u[g].newStrokeStyle||u[g].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,
d[f].y),u[g].newStrokeStyle&&(c.strokeStyle=u[g].newStrokeStyle),u[g].newLineDashArray&&c.setLineDash(u[g].newLineDashArray);c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=r?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],m=this.plotArea;c.save();r&&e.save();c.beginPath();c.rect(m.x1,m.y1,m.width,m.height);c.clip();r&&(e.beginPath(),e.rect(m.x1,m.y1,m.width,
m.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var w=a.dataSeriesIndexes[l],h=this.data[w],k=h.dataPoints,g=h.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:w};g=N(g);e.fillStyle=g;var g=[],q=0,n,f,p,u=[],z=[];if(0<k.length){var t=h._colorSet[q%h._colorSet.length],C=h.lineColor=h.options.lineColor||t,x=C;c.fillStyle=t;c.lineWidth=h.lineThickness;var F="solid",y;if(c.setLineDash){var A=R(h.nullDataLineDashType,h.lineThickness),F=h.lineDashType;y=R(F,
h.lineThickness)}for(f=!1;q<k.length;q++)if(n=k[q].x.getTime?k[q].x.getTime():k[q].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!f)))if(null!==k[q].y&&k[q].y.length&&"number"===typeof k[q].y[0]&&"number"===typeof k[q].y[1]){n=a.axisX.convertValueToPixel(n);f=a.axisY.convertValueToPixel(k[q].y[0]);p=a.axisY.convertValueToPixel(k[q].y[1]);var E=h.dataPointIds[q];this._eventManager.objectMap[E]={id:E,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:q,
x1:n,y1:f,y2:p};u[u.length]={x:n,y:f};z[z.length]={x:n,y:p};q<k.length-1&&(x!==(k[q].lineColor||C)||F!==(k[q].lineDashType||h.lineDashType))&&(x=k[q].lineColor||C,u[u.length-1].newStrokeStyle=x,c.setLineDash&&(k[q].lineDashType?(F=k[q].lineDashType,u[u.length-1].newLineDashArray=R(F,h.lineThickness)):(F=h.lineDashType,u[u.length-1].newLineDashArray=y)));if(0!==k[q].markerSize&&(0<k[q].markerSize||0<h.markerSize)){var aa=h.getMarkerProperties(q,n,f,c);g.push(aa);var T=N(E);r&&g.push({x:n,y:f,ctx:e,
type:aa.type,size:aa.size,color:T,borderColor:T,borderThickness:aa.borderThickness});aa=h.getMarkerProperties(q,n,p,c);g.push(aa);T=N(E);r&&g.push({x:n,y:p,ctx:e,type:aa.type,size:aa.size,color:T,borderColor:T,borderThickness:aa.borderThickness})}if(k[q].indexLabel||h.indexLabel||k[q].indexLabelFormatter||h.indexLabelFormatter)this._indexLabels.push({chartType:"rangeSplineArea",dataPoint:k[q],dataSeries:h,indexKeyword:0,point:{x:n,y:f},direction:k[q].y[0]<=k[q].y[1]?-1:1,color:t}),this._indexLabels.push({chartType:"rangeSplineArea",
dataPoint:k[q],dataSeries:h,indexKeyword:1,point:{x:n,y:p},direction:k[q].y[0]<=k[q].y[1]?1:-1,color:t});f=!1}else 0<q&&!f&&(h.connectNullData?c.setLineDash&&(0<u.length&&(h.options.nullDataLineDashType||!k[q-1].lineDashType))&&(u[u.length-1].newLineDashArray=A,F=h.nullDataLineDashType):(d(y,C),u=[],z=[])),f=!0;d(y,C);ia.drawMarkers(g)}}r&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,
this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(m.x1,m.y1,m.width,m.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:M.xClipAnimation,easingFunction:M.easing.linear,animationBase:0}}};p.prototype.renderWaterfall=function(a){var d=a.targetCanvasCtx||this.plotArea.ctx,
b=r?this._preRenderCtx:d;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,e=null,g=this.plotArea,m=0,l,k,h,s,q=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),m=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;k=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0;var n=
a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.range));n=this.options.dataPointWidth?this.dataPointWidth:0.6*(g.width*(a.axisX.logarithmic?Math.log(n)/Math.log(a.axisX.range):Math.abs(n)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&m>k&&(m=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<m)&&(k=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,m));n<m&&(n=m);
n>k&&(n=k);b.save();r&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();r&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.clip());for(var f=0;f<a.dataSeriesIndexes.length;f++){var p=a.dataSeriesIndexes[f],u=this.data[p],v=u.dataPoints,e=u._colorSet[0];u.risingColor=u.options.risingColor?u.options.risingColor:e;u.fallingColor=u.options.fallingColor?u.options.fallingColor:"#e40a0a";
var t="number"===typeof u.options.lineThickness?Math.round(u.lineThickness):1,C=1===Math.round(t)%2?-0.5:0;if(0<v.length)for(var x=5<n&&u.bevelEnabled?!0:!1,z=!1,y=null,A=null,m=0;m<v.length;m++)if(v[m].getTime?s=v[m].x.getTime():s=v[m].x,"number"!==typeof v[m].y){if(0<m&&!z&&u.connectNullData)var D=u.options.nullDataLineDashType||!v[m-1].lineDashType?u.nullDataLineDashType:v[m-1].lineDashType;z=!0}else{l=a.axisX.convertValueToPixel(s);k=0===u.dataPointEOs[m].cumulativeSum?q:a.axisY.convertValueToPixel(u.dataPointEOs[m].cumulativeSum);
h=0===u.dataPointEOs[m].cumulativeSumYStartValue?q:a.axisY.convertValueToPixel(u.dataPointEOs[m].cumulativeSumYStartValue);l=a.axisX.reversed?l+a.plotType.totalDataSeries*n/2-(a.previousDataSeriesCount+f)*n<<0:l-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+f)*n<<0;var F=a.axisX.reversed?l-n<<0:l+n<<0;k>h&&(e=k,k=h,h=e);a.axisY.reversed&&(e=k,k=h,h=e);e=u.dataPointIds[m];this._eventManager.objectMap[e]={id:e,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:m,x1:l,y1:k,x2:F,y2:h};
var T=v[m].color?v[m].color:0<v[m].y?u.risingColor:u.fallingColor;ea(b,l,k,F,h,T,0,T,x,x,!1,!1,u.fillOpacity);e=N(e);r&&ea(this._eventManager.ghostCtx,l,k,F,h,e,0,null,!1,!1,!1,!1);var Y,T=l;Y="undefined"!==typeof v[m].isIntermediateSum&&!0===v[m].isIntermediateSum||"undefined"!==typeof v[m].isCumulativeSum&&!0===v[m].isCumulativeSum?0<v[m].y?k:h:0<v[m].y?h:k;0<m&&y&&(!z||u.connectNullData)&&(z&&b.setLineDash&&b.setLineDash(R(D,t)),b.beginPath(),b.moveTo(y,A-C),b.lineTo(T,Y-C),0<t&&b.stroke(),r&&
(c.beginPath(),c.moveTo(y,A-C),c.lineTo(T,Y-C),0<t&&c.stroke()));z=!1;y=F;A=0<v[m].y?k:h;T=v[m].lineDashType?v[m].lineDashType:u.options.lineDashType?u.options.lineDashType:"shortDash";b.strokeStyle=v[m].lineColor?v[m].lineColor:u.options.lineColor?u.options.lineColor:"#9e9e9e";b.lineWidth=t;b.setLineDash&&(T=R(T,t),b.setLineDash(T));(v[m].indexLabel||u.indexLabel||v[m].indexLabelFormatter||u.indexLabelFormatter)&&this._indexLabels.push({chartType:"waterfall",dataPoint:v[m],dataSeries:u,point:{x:l+
(F-l)/2,y:0<=v[m].y?k:h},direction:0>v[m].y===a.axisY.reversed?1:-1,bounds:{x1:l,y1:Math.min(k,h),x2:F,y2:Math.max(k,h)},color:e})}}r&&(d.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),
b.clearRect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.restore());b.restore();return{source:d,dest:this.plotArea.ctx,animationCallback:M.fadeInAnimation,easingFunction:M.easing.easeInQuad,animationBase:0}}};var ja=function(a,d,b,c,e,g,m,l,k){if(!(0>b)){"undefined"===typeof l&&(l=1);if(!r){var h=Number((m%(2*Math.PI)).toFixed(8));Number((g%(2*Math.PI)).toFixed(8))===h&&(m-=1E-4)}a.save();a.globalAlpha=l;"pie"===e?(a.beginPath(),a.moveTo(d.x,d.y),a.arc(d.x,d.y,b,g,m,!1),a.fillStyle=c,a.strokeStyle=
"white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(d.x,d.y,b,g,m,!1),0<=k&&a.arc(d.x,d.y,k*b,m,g,!0),a.closePath(),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()}};p.prototype.renderPie=function(a){function d(){if(h&&s){for(var a=0,b=0,c=0,e=0,d=0;d<s.length;d++){var g=s[d],l=h.dataPointIds[d];f[d].id=l;f[d].objectType="dataPoint";f[d].dataPointIndex=d;f[d].dataSeriesIndex=0;var m=f[d],q={percent:null,total:null},p=null,q=k.getPercentAndTotal(h,
g);if(h.indexLabelFormatter||g.indexLabelFormatter)p={chart:k.options,dataSeries:h,dataPoint:g,total:q.total,percent:q.percent};q=g.indexLabelFormatter?g.indexLabelFormatter(p):g.indexLabel?k.replaceKeywordsWithValue(g.indexLabel,g,h,d):h.indexLabelFormatter?h.indexLabelFormatter(p):h.indexLabel?k.replaceKeywordsWithValue(h.indexLabel,g,h,d):g.label?g.label:"";k._eventManager.objectMap[l]=m;m.center={x:x.x,y:x.y};m.y=g.y;m.radius=A;m.percentInnerRadius=F;m.indexLabelText=q;m.indexLabelPlacement=h.indexLabelPlacement;
m.indexLabelLineColor=g.indexLabelLineColor?g.indexLabelLineColor:h.options.indexLabelLineColor?h.options.indexLabelLineColor:g.color?g.color:h._colorSet[d%h._colorSet.length];m.indexLabelLineThickness=u(g.indexLabelLineThickness)?h.indexLabelLineThickness:g.indexLabelLineThickness;m.indexLabelLineDashType=g.indexLabelLineDashType?g.indexLabelLineDashType:h.indexLabelLineDashType;m.indexLabelFontColor=g.indexLabelFontColor?g.indexLabelFontColor:h.indexLabelFontColor;m.indexLabelFontStyle=g.indexLabelFontStyle?
g.indexLabelFontStyle:h.indexLabelFontStyle;m.indexLabelFontWeight=g.indexLabelFontWeight?g.indexLabelFontWeight:h.indexLabelFontWeight;m.indexLabelFontSize=u(g.indexLabelFontSize)?h.indexLabelFontSize:g.indexLabelFontSize;m.indexLabelFontFamily=g.indexLabelFontFamily?g.indexLabelFontFamily:h.indexLabelFontFamily;m.indexLabelBackgroundColor=g.indexLabelBackgroundColor?g.indexLabelBackgroundColor:h.options.indexLabelBackgroundColor?h.options.indexLabelBackgroundColor:h.indexLabelBackgroundColor;m.indexLabelMaxWidth=
g.indexLabelMaxWidth?g.indexLabelMaxWidth:h.indexLabelMaxWidth?h.indexLabelMaxWidth:0.33*n.width;m.indexLabelWrap="undefined"!==typeof g.indexLabelWrap?g.indexLabelWrap:h.indexLabelWrap;m.startAngle=0===d?h.startAngle?h.startAngle/180*Math.PI:0:f[d-1].endAngle;m.startAngle=(m.startAngle+2*Math.PI)%(2*Math.PI);m.endAngle=m.startAngle+2*Math.PI/z*Math.abs(g.y);g=(m.endAngle+m.startAngle)/2;g=(g+2*Math.PI)%(2*Math.PI);m.midAngle=g;if(m.midAngle>Math.PI/2-t&&m.midAngle<Math.PI/2+t){if(0===a||f[c].midAngle>
m.midAngle)c=d;a++}else if(m.midAngle>3*Math.PI/2-t&&m.midAngle<3*Math.PI/2+t){if(0===b||f[e].midAngle>m.midAngle)e=d;b++}m.hemisphere=g>Math.PI/2&&g<=3*Math.PI/2?"left":"right";m.indexLabelTextBlock=new ka(k.plotArea.ctx,{fontSize:m.indexLabelFontSize,fontFamily:m.indexLabelFontFamily,fontColor:m.indexLabelFontColor,fontStyle:m.indexLabelFontStyle,fontWeight:m.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:m.indexLabelBackgroundColor,maxWidth:m.indexLabelMaxWidth,maxHeight:m.indexLabelWrap?
5*m.indexLabelFontSize:1.5*m.indexLabelFontSize,text:m.indexLabelText,padding:0,textBaseline:"top"});m.indexLabelTextBlock.measureText()}l=g=0;q=!1;for(d=0;d<s.length;d++)m=f[(c+d)%s.length],1<a&&(m.midAngle>Math.PI/2-t&&m.midAngle<Math.PI/2+t)&&(g<=a/2&&!q?(m.hemisphere="right",g++):(m.hemisphere="left",q=!0));q=!1;for(d=0;d<s.length;d++)m=f[(e+d)%s.length],1<b&&(m.midAngle>3*Math.PI/2-t&&m.midAngle<3*Math.PI/2+t)&&(l<=b/2&&!q?(m.hemisphere="left",l++):(m.hemisphere="right",q=!0))}}function b(a){var b=
k.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=k.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);for(b=0;b<s.length;b++){var c=f[b].startAngle,e=f[b].endAngle;if(e>c){var d=0.07*A*Math.cos(f[b].midAngle),g=0.07*A*Math.sin(f[b].midAngle),m=!1;if(s[b].exploded){if(1E-9<Math.abs(f[b].center.x-(x.x+d))||1E-9<Math.abs(f[b].center.y-(x.y+g)))f[b].center.x=x.x+d*a,f[b].center.y=x.y+g*a,m=!0}else if(0<Math.abs(f[b].center.x-x.x)||0<Math.abs(f[b].center.y-x.y))f[b].center.x=x.x+
d*(1-a),f[b].center.y=x.y+g*(1-a),m=!0;m&&(d={},d.dataSeries=h,d.dataPoint=h.dataPoints[b],d.index=b,k.toolTip.highlightObjects([d]));ja(k.plotArea.ctx,f[b].center,f[b].radius,s[b].color?s[b].color:h._colorSet[b%h._colorSet.length],h.type,c,e,h.fillOpacity,f[b].percentInnerRadius)}}a=k.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<s.length;b++)c=f[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,e=
0,e="left"===c.hemisphere?"inside"!==h.indexLabelPlacement?-(c.indexLabelTextBlock.width+q):-c.indexLabelTextBlock.width/2:"inside"!==h.indexLabelPlacement?q:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=e,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=e,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(e=c.center.x+A*Math.cos(c.midAngle),d=c.center.y+A*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,
a.lineWidth=c.indexLabelLineThickness,a.setLineDash&&a.setLineDash(R(c.indexLabelLineDashType,c.indexLabelLineThickness)),a.beginPath(),a.moveTo(e,d),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-q:q),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function c(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,e=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,d=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/
2,f=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?d-e:c-f}function e(a){for(var b=null,e=1;e<s.length;e++)if(b=(a+e+f.length)%f.length,f[b].hemisphere!==f[a].hemisphere){b=null;break}else if(f[b].indexLabelText&&b!==a&&(0>c(f[b],f[a])||("right"===f[a].hemisphere?f[b].indexLabelTextBlock.y>=f[a].indexLabelTextBlock.y:f[b].indexLabelTextBlock.y<=f[a].indexLabelTextBlock.y)))break;else b=null;return b}function g(a,b,d){d=(d||0)+1;if(1E3<
d)return 0;b=b||0;var m=0,h=x.y-1*r,l=x.y+1*r;if(0<=a&&a<s.length){var n=f[a];if(0>b&&n.indexLabelTextBlock.y<h||0<b&&n.indexLabelTextBlock.y>l)return 0;var k=0,q=0,q=k=k=0;0>b?n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2>h&&n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2+b<h&&(b=-(h-(n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2+b))):n.indexLabelTextBlock.y+n.indexLabelTextBlock.height/2<h&&n.indexLabelTextBlock.y+n.indexLabelTextBlock.height/2+b>l&&(b=n.indexLabelTextBlock.y+
n.indexLabelTextBlock.height/2+b-l);b=n.indexLabelTextBlock.y+b;h=0;h="right"===n.hemisphere?x.x+Math.sqrt(Math.pow(r,2)-Math.pow(b-x.y,2)):x.x-Math.sqrt(Math.pow(r,2)-Math.pow(b-x.y,2));q=x.x+A*Math.cos(n.midAngle);k=x.y+A*Math.sin(n.midAngle);k=Math.sqrt(Math.pow(h-q,2)+Math.pow(b-k,2));q=Math.acos(A/r);k=Math.acos((r*r+A*A-k*k)/(2*A*r));b=k<q?b-n.indexLabelTextBlock.y:0;h=null;for(l=1;l<s.length;l++)if(h=(a-l+f.length)%f.length,f[h].hemisphere!==f[a].hemisphere){h=null;break}else if(f[h].indexLabelText&&
f[h].hemisphere===f[a].hemisphere&&h!==a&&(0>c(f[h],f[a])||("right"===f[a].hemisphere?f[h].indexLabelTextBlock.y<=f[a].indexLabelTextBlock.y:f[h].indexLabelTextBlock.y>=f[a].indexLabelTextBlock.y)))break;else h=null;q=h;k=e(a);l=h=0;0>b?(l="right"===n.hemisphere?q:k,m=b,null!==l&&(q=-b,b=n.indexLabelTextBlock.y-n.indexLabelTextBlock.height/2-(f[l].indexLabelTextBlock.y+f[l].indexLabelTextBlock.height/2),b-q<p&&(h=-q,l=g(l,h,d+1),+l.toFixed(C)>+h.toFixed(C)&&(m=b>p?-(b-p):-(q-(l-h)))))):0<b&&(l="right"===
n.hemisphere?k:q,m=b,null!==l&&(q=b,b=f[l].indexLabelTextBlock.y-f[l].indexLabelTextBlock.height/2-(n.indexLabelTextBlock.y+n.indexLabelTextBlock.height/2),b-q<p&&(h=q,l=g(l,h,d+1),+l.toFixed(C)<+h.toFixed(C)&&(m=b>p?b-p:q-(h-l)))));m&&(d=n.indexLabelTextBlock.y+m,b=0,b="right"===n.hemisphere?x.x+Math.sqrt(Math.pow(r,2)-Math.pow(d-x.y,2)):x.x-Math.sqrt(Math.pow(r,2)-Math.pow(d-x.y,2)),n.midAngle>Math.PI/2-t&&n.midAngle<Math.PI/2+t?(h=(a-1+f.length)%f.length,h=f[h],a=f[(a+1+f.length)%f.length],"left"===
n.hemisphere&&"right"===h.hemisphere&&b>h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x-15:"right"===n.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):n.midAngle>3*Math.PI/2-t&&n.midAngle<3*Math.PI/2+t&&(h=(a-1+f.length)%f.length,h=f[h],a=f[(a+1+f.length)%f.length],"right"===n.hemisphere&&"left"===h.hemisphere&&b<h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x+15:"left"===n.hemisphere&&("right"===a.hemisphere&&b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-
15)),n.indexLabelTextBlock.y=d,n.indexLabelTextBlock.x=b,n.indexLabelAngle=Math.atan2(n.indexLabelTextBlock.y-x.y,n.indexLabelTextBlock.x-x.x))}return m}function m(){var a=k.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,d=0,m=!0,b=0;10>b&&(1>b||0<d);b++){if(h.radius||!h.radius&&"undefined"!==typeof h.innerRadius&&null!==h.innerRadius&&A-d<=D)m=!1;m&&(A-=d);d=0;if("inside"!==h.indexLabelPlacement){r=A*v;for(a=0;a<s.length;a++){var l=
f[a];l.indexLabelTextBlock.x=x.x+r*Math.cos(l.midAngle);l.indexLabelTextBlock.y=x.y+r*Math.sin(l.midAngle);l.indexLabelAngle=l.midAngle;l.radius=A;l.percentInnerRadius=F}for(var t,u,a=0;a<s.length;a++){var l=f[a],y=e(a);if(null!==y){t=f[a];u=f[y];var z=0,z=c(t,u)-p;if(0>z){for(var E=u=0,H=0;H<s.length;H++)H!==a&&f[H].hemisphere===l.hemisphere&&(f[H].indexLabelTextBlock.y<l.indexLabelTextBlock.y?u++:E++);u=z/(u+E||1)*E;var E=-1*(z-u),I=H=0;"right"===l.hemisphere?(H=g(a,u),E=-1*(z-H),I=g(y,E),+I.toFixed(C)<
+E.toFixed(C)&&+H.toFixed(C)<=+u.toFixed(C)&&g(a,-(E-I))):(H=g(y,u),E=-1*(z-H),I=g(a,E),+I.toFixed(C)<+E.toFixed(C)&&+H.toFixed(C)<=+u.toFixed(C)&&g(y,-(E-I)))}}}}else for(a=0;a<s.length;a++)l=f[a],r="pie"===h.type?0.7*A:0.8*A,y=x.x+r*Math.cos(l.midAngle),u=x.y+r*Math.sin(l.midAngle),l.indexLabelTextBlock.x=y,l.indexLabelTextBlock.y=u;for(a=0;a<s.length;a++)if(l=f[a],y=l.indexLabelTextBlock.measureText(),0!==y.height&&0!==y.width)y=y=0,"right"===l.hemisphere?(y=n.x2-(l.indexLabelTextBlock.x+l.indexLabelTextBlock.width+
q),y*=-1):y=n.x1-(l.indexLabelTextBlock.x-l.indexLabelTextBlock.width-q),0<y&&(!m&&l.indexLabelText&&(u="right"===l.hemisphere?n.x2-l.indexLabelTextBlock.x:l.indexLabelTextBlock.x-n.x1,0.3*l.indexLabelTextBlock.maxWidth>u?l.indexLabelText="":l.indexLabelTextBlock.maxWidth=0.85*u,0.3*l.indexLabelTextBlock.maxWidth<u&&(l.indexLabelTextBlock.x-="right"===l.hemisphere?2:-2)),Math.abs(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-x.y)<A||Math.abs(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/
2-x.y)<A)&&(y/=Math.abs(Math.cos(l.indexLabelAngle)),9<y&&(y*=0.3),y>d&&(d=y)),y=y=0,0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?(y=n.y2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+5),y*=-1):y=n.y1-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-5),0<y&&(!m&&l.indexLabelText&&(u=0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?-1:1,0===g(a,y*u)&&g(a,2*u)),Math.abs(l.indexLabelTextBlock.x-x.x)<A&&(y/=Math.abs(Math.sin(l.indexLabelAngle)),9<y&&(y*=0.3),y>d&&(d=y)));var K=function(a,
b,c){for(var e=[],d=0;e.push(f[b]),b!==c;b=(b+1+s.length)%s.length);e.sort(function(a,b){return a.y-b.y});for(b=0;b<e.length;b++)if(c=e[b],d<0.7*a)d+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,d=0,g=!1,l=0;l<s.length;l++)if(g=!1,t=f[l],t.indexLabelText){var m=e(l);if(null!==m){var h=f[m];z=0;z=c(t,h);var n;if(n=0>z){n=t.indexLabelTextBlock.x;var k=t.indexLabelTextBlock.y-t.indexLabelTextBlock.height/
2,w=t.indexLabelTextBlock.y+t.indexLabelTextBlock.height/2,p=h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2,u=h.indexLabelTextBlock.x+h.indexLabelTextBlock.width,r=h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2;n=t.indexLabelTextBlock.x+t.indexLabelTextBlock.width<h.indexLabelTextBlock.x-q||n>u+q||k>r+q||w<p-q?!1:!0}n?(0>a&&(a=l),m!==a&&(b=m,d+=-z),0===l%Math.max(s.length/10,3)&&(g=!0)):g=!0;g&&(0<d&&0<=a&&0<=b)&&(K(d,a,b),b=a=-1,d=0)}}0<d&&K(d,a,b)})()}}function l(){k.plotArea.layoutManager.reset();
k.title&&(k.title.dockInsidePlotArea||"center"===k.title.horizontalAlign&&"center"===k.title.verticalAlign)&&k.title.render();if(k.subtitles)for(var a=0;a<k.subtitles.length;a++){var b=k.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}k.legend&&(k.legend.dockInsidePlotArea||"center"===k.legend.horizontalAlign&&"center"===k.legend.verticalAlign)&&(k.legend.setLayout(),k.legend.render())}var k=this;if(!(0>=a.dataSeriesIndexes.length)){var h=
this.data[a.dataSeriesIndexes[0]],s=h.dataPoints,q=10,n=this.plotArea,f=h.dataPointEOs,p=2,r,v=1.3,t=20/180*Math.PI,C=6,x={x:(n.x2+n.x1)/2,y:(n.y2+n.y1)/2},z=0;a=!1;for(var y=0;y<s.length;y++)z+=Math.abs(s[y].y),!a&&("undefined"!==typeof s[y].indexLabel&&null!==s[y].indexLabel&&0<s[y].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof s[y].label&&null!==s[y].label&&0<s[y].label.toString().length)&&(a=!0);if(0!==z){a=a||"undefined"!==typeof h.indexLabel&&null!==h.indexLabel&&0<h.indexLabel.toString().length;
var A="inside"!==h.indexLabelPlacement&&a?0.75*Math.min(n.width,n.height)/2:0.92*Math.min(n.width,n.height)/2;h.radius&&(A=I(h.radius,A));var D="undefined"!==typeof h.innerRadius&&null!==h.innerRadius?I(h.innerRadius,A):0.7*A;h.radius=A;"doughnut"===h.type&&(h.innerRadius=D);var F=Math.min(D/A,(A-1)/A);this.pieDoughnutClickHandler=function(a){k.isAnimating||!u(a.dataSeries.explodeOnClick)&&!a.dataSeries.explodeOnClick||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&k._animator.animate(0,
500,function(a){b(a);l()}))};d();m();m();m();m();this.disableToolTip=!0;this._animator.animate(0,this.animatedRender?this.animationDuration:0,function(a){var b=k.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=k.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);a=f[0].startAngle+2*Math.PI*a;for(b=0;b<s.length;b++){var c=0===b?f[b].startAngle:e,e=c+(f[b].endAngle-f[b].startAngle),d=!1;e>a&&(e=a,d=!0);var g=s[b].color?s[b].color:h._colorSet[b%h._colorSet.length];e>c&&ja(k.plotArea.ctx,
f[b].center,f[b].radius,g,h.type,c,e,h.fillOpacity,f[b].percentInnerRadius);if(d)break}l()},function(){k.disableToolTip=!1;k._animator.animate(0,k.animatedRender?500:0,function(a){b(a);l()})})}}};var ra=function(a,d,b,c){"undefined"===typeof b&&(b=1);0>=Math.round(d.y4-d.y1)||(a.save(),a.globalAlpha=b,a.beginPath(),a.moveTo(Math.round(d.x1),Math.round(d.y1)),a.lineTo(Math.round(d.x2),Math.round(d.y2)),a.lineTo(Math.round(d.x3),Math.round(d.y3)),a.lineTo(Math.round(d.x4),Math.round(d.y4)),"undefined"!==
d.x5&&(a.lineTo(Math.round(d.x5),Math.round(d.y5)),a.lineTo(Math.round(d.x6),Math.round(d.y6))),a.closePath(),a.fillStyle=c?c:d.color,a.fill(),a.globalAplha=1,a.restore())};p.prototype.renderFunnel=function(a){function d(){for(var a=0,b=[],c=0;c<C.length;c++){if("undefined"===typeof C[c].y)return-1;C[c].y="number"===typeof C[c].y?C[c].y:0;a+=Math.abs(C[c].y)}if(0===a)return-1;for(c=b[0]=0;c<C.length;c++)b.push(Math.abs(C[c].y)*F/a);return b}function b(){var a=$,b=V,c=K,e=ea,d,f;d=O;f=Z-N;e=Math.abs((f-
d)*(b-a+(e-c))/2);c=ea-K;d=f-d;f=c*(f-Z);f=Math.abs(f);f=e+f;for(var e=[],g=0,l=0;l<C.length;l++){if("undefined"===typeof C[l].y)return-1;C[l].y="number"===typeof C[l].y?C[l].y:0;g+=Math.abs(C[l].y)}if(0===g)return-1;for(var m=e[0]=0,h=0,n,k,b=b-a,m=!1,l=0;l<C.length;l++)a=Math.abs(C[l].y)*f/g,m?n=0==Number(c.toFixed(3))?0:a/c:(k=ba*ba*b*b-4*Math.abs(ba)*a,0>k?(k=c,m=(b+k)*(d-h)/2,a-=m,n=d-h,h+=d-h,n+=0==k?0:a/k,h+=a/k,m=!0):(n=(Math.abs(ba)*b-Math.sqrt(k))/2,k=b-2*n/Math.abs(ba),h+=n,h>d&&(h-=n,
k=c,m=(b+k)*(d-h)/2,a-=m,n=d-h,h+=d-h,n+=a/k,h+=a/k,m=!0),b=k)),e.push(n);return e}function c(){if(t&&C){for(var a,b,c,e,d,g,l,h,m,n,k,q,s,w,p=[],B=[],x={percent:null,total:null},v=null,y=0;y<C.length;y++)w=P[y],w="undefined"!==typeof w.x5?(w.y2+w.y4)/2:(w.y2+w.y3)/2,w=f(w).x2+1,p[y]=L-w-S;w=0.5*S;for(var y=0,A=C.length-1;y<C.length||0<=A;y++,A--){b=t.reversed?C[A]:C[y];a=b.color?b.color:t.reversed?t._colorSet[(C.length-1-y)%t._colorSet.length]:t._colorSet[y%t._colorSet.length];c=b.indexLabelPlacement||
t.indexLabelPlacement||"outside";e=b.indexLabelBackgroundColor||t.indexLabelBackgroundColor||(r?"transparent":null);d=b.indexLabelFontColor||t.indexLabelFontColor||"#979797";g=u(b.indexLabelFontSize)?t.indexLabelFontSize:b.indexLabelFontSize;l=b.indexLabelFontStyle||t.indexLabelFontStyle||"normal";h=b.indexLabelFontFamily||t.indexLabelFontFamily||"arial";m=b.indexLabelFontWeight||t.indexLabelFontWeight||"normal";a=b.indexLabelLineColor||t.options.indexLabelLineColor||a;n="number"===typeof b.indexLabelLineThickness?
b.indexLabelLineThickness:"number"===typeof t.indexLabelLineThickness?t.indexLabelLineThickness:2;k=b.indexLabelLineDashType||t.indexLabelLineDashType||"solid";q="undefined"!==typeof b.indexLabelWrap?b.indexLabelWrap:"undefined"!==typeof t.indexLabelWrap?t.indexLabelWrap:!0;s=t.dataPointIds[y];z._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataPointIndex:y,dataSeriesIndex:0,funnelSection:P[t.reversed?C.length-1-y:y]};"inside"===t.indexLabelPlacement&&(p[y]=y!==fa?t.reversed?P[y].x2-P[y].x1:
P[y].x3-P[y].x4:P[y].x3-P[y].x6,20>p[y]&&(p[y]=y!==fa?t.reversed?P[y].x3-P[y].x4:P[y].x2-P[y].x1:P[y].x2-P[y].x1,p[y]/=2));s=b.indexLabelMaxWidth?b.indexLabelMaxWidth:t.options.indexLabelMaxWidth?t.indexLabelMaxWidth:p[y];if(s>p[y]||0>s)s=p[y];B[y]="inside"===t.indexLabelPlacement?P[y].height:!1;x=z.getPercentAndTotal(t,b);if(t.indexLabelFormatter||b.indexLabelFormatter)v={chart:z.options,dataSeries:t,dataPoint:b,total:x.total,percent:x.percent};b=b.indexLabelFormatter?b.indexLabelFormatter(v):b.indexLabel?
z.replaceKeywordsWithValue(b.indexLabel,b,t,y):t.indexLabelFormatter?t.indexLabelFormatter(v):t.indexLabel?z.replaceKeywordsWithValue(t.indexLabel,b,t,y):b.label?b.label:"";0>=n&&(n=0);1E3>s&&1E3-s<w&&(s+=1E3-s);Q.roundRect||Ea(Q);c=new ka(Q,{fontSize:g,fontFamily:h,fontColor:d,fontStyle:l,fontWeight:m,horizontalAlign:c,backgroundColor:e,maxWidth:s,maxHeight:!1===B[y]?q?4.28571429*g:1.5*g:B[y],text:b,padding:ga});c.measureText();J.push({textBlock:c,id:t.reversed?A:y,isDirty:!1,lineColor:a,lineThickness:n,
lineDashType:k,height:c.height<c.maxHeight?c.height:c.maxHeight,width:c.width<c.maxWidth?c.width:c.maxWidth})}}}function e(){var a,b,c,e,d,f=[];d=!1;c=0;for(var g,l=L-V-S/2,l=t.options.indexLabelMaxWidth?t.indexLabelMaxWidth>l?l:t.indexLabelMaxWidth:l,h=J.length-1;0<=h;h--){g=C[J[h].id];c=J[h];e=c.textBlock;b=(a=n(h)<P.length?J[n(h)]:null)?a.textBlock:null;c=c.height;a&&e.y+c+ga>b.y&&(d=!0);c=g.indexLabelMaxWidth||l;if(c>l||0>c)c=l;f.push(c)}if(d)for(h=J.length-1;0<=h;h--)a=P[h],J[h].textBlock.maxWidth=
f[f.length-(h+1)],J[h].textBlock.measureText(),J[h].textBlock.x=L-l,c=J[h].textBlock.height<J[h].textBlock.maxHeight?J[h].textBlock.height:J[h].textBlock.maxHeight,d=J[h].textBlock.width<J[h].textBlock.maxWidth?J[h].textBlock.width:J[h].textBlock.maxWidth,J[h].height=c,J[h].width=d,c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,J[h].textBlock.y=c-J[h].height/2,t.reversed?(J[h].textBlock.y+J[h].height>pa+D&&(J[h].textBlock.y=pa+D-J[h].height),J[h].textBlock.y<wa-D&&(J[h].textBlock.y=wa-D)):
(J[h].textBlock.y<pa-D&&(J[h].textBlock.y=pa-D),J[h].textBlock.y+J[h].height>wa+D&&(J[h].textBlock.y=wa+D-J[h].height))}function g(){var a,b,c,e;if("inside"!==t.indexLabelPlacement)for(var d=0;d<P.length;d++)0==J[d].textBlock.text.length?J[d].isDirty=!0:(a=P[d],c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,b=t.reversed?"undefined"!==typeof a.x5?c>Da?f(c).x2+1:(a.x2+a.x3)/2+1:(a.x2+a.x3)/2+1:"undefined"!==typeof a.x5?c<Da?f(c).x2+1:(a.x4+a.x3)/2+1:(a.x2+a.x3)/2+1,J[d].textBlock.x=b+S,J[d].textBlock.y=
c-J[d].height/2,t.reversed?(J[d].textBlock.y+J[d].height>pa+D&&(J[d].textBlock.y=pa+D-J[d].height),J[d].textBlock.y<wa-D&&(J[d].textBlock.y=wa-D)):(J[d].textBlock.y<pa-D&&(J[d].textBlock.y=pa-D),J[d].textBlock.y+J[d].height>wa+D&&(J[d].textBlock.y=wa+D-J[d].height)));else for(d=0;d<P.length;d++)0==J[d].textBlock.text.length?J[d].isDirty=!0:(a=P[d],b=a.height,c=J[d].height,e=J[d].width,b>=c?(b=d!=fa?(a.x4+a.x3)/2-e/2:(a.x5+a.x4)/2-e/2,c=d!=fa?(a.y1+a.y3)/2-c/2:(a.y1+a.y4)/2-c/2,J[d].textBlock.x=b,
J[d].textBlock.y=c):J[d].isDirty=!0)}function m(){function a(b,c){var d;if(0>b||b>=J.length)return 0;var e,f=J[b].textBlock;if(0>c){c*=-1;e=q(b);d=l(e,b);if(d>=c)return f.y-=c,c;if(0==b)return 0<d&&(f.y-=d),d;d+=a(e,-(c-d));0<d&&(f.y-=d);return d}e=n(b);d=l(b,e);if(d>=c)return f.y+=c,c;if(b==P.length-1)return 0<d&&(f.y+=d),d;d+=a(e,c-d);0<d&&(f.y+=d);return d}function b(){var a,d,e,f,g=0,h;f=(Z-O+2*D)/k;h=k;for(var l,m=1;m<h;m++){e=m*f;for(var s=J.length-1;0<=s;s--)!J[s].isDirty&&(J[s].textBlock.y<
e&&J[s].textBlock.y+J[s].height>e)&&(l=n(s),!(l>=J.length-1)&&J[s].textBlock.y+J[s].height+ga>J[l].textBlock.y&&(J[s].textBlock.y=J[s].textBlock.y+J[s].height-e>e-J[s].textBlock.y?e+1:e-J[s].height-1))}for(l=P.length-1;0<l;l--)if(!J[l].isDirty){e=q(l);if(0>e&&(e=0,J[e].isDirty))break;if(J[l].textBlock.y<J[e].textBlock.y+J[e].height){d=d||l;f=l;for(h=0;J[f].textBlock.y<J[e].textBlock.y+J[e].height+ga;){a=a||J[f].textBlock.y+J[f].height;h+=J[f].height;h+=ga;f=e;if(0>=f){f=0;h+=J[f].height;break}e=q(f);
if(0>e){f=0;h+=J[f].height;break}}if(f!=l){g=J[f].textBlock.y;a-=g;a=h-a;g=c(a,d,f);break}}}return g}function c(a,b,d){var e=[],f=0,g=0;for(a=Math.abs(a);d<=b;d++)e.push(P[d]);e.sort(function(a,b){return a.height-b.height});for(d=0;d<e.length;d++)if(b=e[d],f<a)g++,f+=J[b.id].height+ga,J[b.id].textBlock.text="",J[b.id].indexLabelText="",J[b.id].isDirty=!0,J[b.id].textBlock.measureText();else break;return g}for(var d,e,f,g,h,m,k=1,s=0;s<2*k;s++){for(var w=J.length-1;0<=w&&!(0<=q(w)&&q(w),f=J[w],g=f.textBlock,
m=(h=n(w)<P.length?J[n(w)]:null)?h.textBlock:null,d=+f.height.toFixed(6),e=+g.y.toFixed(6),!f.isDirty&&(h&&e+d+ga>+m.y.toFixed(6))&&(d=g.y+d+ga-m.y,e=a(w,-d),e<d&&(0<e&&(d-=e),e=a(n(w),d),e!=d)));w--);b()}}function l(a,b){return(b<P.length?J[b].textBlock.y:t.reversed?pa+D:wa+D)-(0>a?t.reversed?wa-D:pa-D:J[a].textBlock.y+J[a].height+ga)}function k(a,b,c){var d,e,f,l=[],m=D,n=[];-1!==b&&(0<=W.indexOf(b)?(e=W.indexOf(b),W.splice(e,1)):(W.push(b),W=W.sort(function(a,b){return a-b})));if(0===W.length)l=
ia;else{e=D*(1!=W.length||0!=W[0]&&W[0]!=P.length-1?2:1)/h();for(var q=0;q<P.length;q++){if(1==W.length&&0==W[0]){if(0===q){l.push(ia[q]);d=m;continue}}else 0===q&&(d=-1*m);l.push(ia[q]+d);if(0<=W.indexOf(q)||q<P.length&&0<=W.indexOf(q+1))d+=e}}f=function(){for(var a=[],b=0;b<P.length;b++)a.push(l[b]-P[b].y1);return a}();var w={startTime:(new Date).getTime(),duration:c||500,easingFunction:function(a,b,c,d){return M.easing.easeOutQuart(a,b,c,d)},changeSection:function(a){for(var b,c,d=0;d<P.length;d++)b=
f[d],c=P[d],b*=a,"undefined"===typeof n[d]&&(n[d]=0),0>n&&(n*=-1),c.y1+=b-n[d],c.y2+=b-n[d],c.y3+=b-n[d],c.y4+=b-n[d],c.y5&&(c.y5+=b-n[d],c.y6+=b-n[d]),n[d]=b}};a._animator.animate(0,c,function(c){var d=a.plotArea.ctx||a.ctx;ja=!0;d.clearRect(x.x1,x.y1,x.x2-x.x1,x.y2-x.y1);d.fillStyle=a.backgroundColor;d.fillRect(x.x1,x.y1,x.width,x.height);w.changeSection(c,b);var e={};e.dataSeries=t;e.dataPoint=t.reversed?t.dataPoints[C.length-1-b]:t.dataPoints[b];e.index=t.reversed?C.length-1-b:b;a.toolTip.highlightObjects([e]);
for(e=0;e<P.length;e++)ra(d,P[e],t.fillOpacity);v(d);H&&("inside"!==t.indexLabelPlacement?s(d):g(),p(d));1<=c&&(ja=!1)},null,M.easing.easeOutQuart)}function h(){for(var a=0,b=0;b<P.length-1;b++)(0<=W.indexOf(b)||0<=W.indexOf(b+1))&&a++;return a}function s(a){for(var b,c,d,e,g=0;g<P.length;g++)e=1===J[g].lineThickness%2?0.5:0,c=((P[g].y2+P[g].y4)/2<<0)+e,b=f(c).x2-1,d=J[g].textBlock.x,e=(J[g].textBlock.y+J[g].height/2<<0)+e,J[g].isDirty||0==J[g].lineThickness||(a.strokeStyle=J[g].lineColor,a.lineWidth=
J[g].lineThickness,a.setLineDash&&a.setLineDash(R(J[g].lineDashType,J[g].lineThickness)),a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke())}function q(a){for(a-=1;-1<=a&&-1!=a&&J[a].isDirty;a--);return a}function n(a){for(a+=1;a<=P.length&&a!=P.length&&J[a].isDirty;a++);return a}function f(a){for(var b,c=0;c<C.length;c++)if(P[c].y1<a&&P[c].y4>a){b=P[c];break}return b?(a=b.y6?a>b.y6?b.x3+(b.x4-b.x3)/(b.y4-b.y3)*(a-b.y3):b.x2+(b.x3-b.x2)/(b.y3-b.y2)*(a-b.y2):b.x2+(b.x3-b.x2)/(b.y3-b.y2)*(a-b.y2),
{x1:a,x2:a}):-1}function p(a){for(var b=0;b<P.length;b++)J[b].isDirty||(a&&(J[b].textBlock.ctx=a),J[b].textBlock.render(!0))}function v(a){z.plotArea.layoutManager.reset();a.roundRect||Ea(a);z.title&&(z.title.dockInsidePlotArea||"center"===z.title.horizontalAlign&&"center"===z.title.verticalAlign)&&(z.title.ctx=a,z.title.render());if(z.subtitles)for(var b=0;b<z.subtitles.length;b++){var c=z.subtitles[b];if(c.dockInsidePlotArea||"center"===c.horizontalAlign&&"center"===c.verticalAlign)z.subtitles.ctx=
a,c.render()}z.legend&&(z.legend.dockInsidePlotArea||"center"===z.legend.horizontalAlign&&"center"===z.legend.verticalAlign)&&(z.legend.ctx=a,z.legend.setLayout(),z.legend.render());U.fNg&&U.fNg(z)}var z=this;if(!(0>=a.dataSeriesIndexes.length)){for(var t=this.data[a.dataSeriesIndexes[0]],C=t.dataPoints,x=this.plotArea,D=0.025*x.width,y=0.01*x.width,A=0,F=x.height-2*D,E=Math.min(x.width-2*y,2.8*x.height),H=!1,I=0;I<C.length;I++)if(!H&&("undefined"!==typeof C[I].indexLabel&&null!==C[I].indexLabel&&
0<C[I].indexLabel.toString().length)&&(H=!0),!H&&("undefined"!==typeof C[I].label&&null!==C[I].label&&0<C[I].label.toString().length)&&(H=!0),!H&&"function"===typeof t.indexLabelFormatter||"function"===typeof C[I].indexLabelFormatter)H=!0;H=H||"undefined"!==typeof t.indexLabel&&null!==t.indexLabel&&0<t.indexLabel.toString().length;"inside"!==t.indexLabelPlacement&&H||(y=(x.width-0.75*E)/2);var I=x.x1+y,L=x.x2-y,O=x.y1+D,Z=x.y2-D,Q=a.targetCanvasCtx||this.plotArea.ctx||this.ctx;if(0!=t.length&&(t.dataPoints&&
t.visible)&&0!==C.length){var N,G;a=75*E/100;var S=30*(L-a)/100;"funnel"===t.type?(N=u(t.options.neckHeight)?0.35*F:t.neckHeight,G=u(t.options.neckWidth)?0.25*a:t.neckWidth,"string"===typeof N&&N.match(/%$/)?(N=parseInt(N),N=N*F/100):N=parseInt(N),"string"===typeof G&&G.match(/%$/)?(G=parseInt(G),G=G*a/100):G=parseInt(G),N>F?N=F:0>=N&&(N=0),G>a?G=a-0.5:0>=G&&(G=0)):"pyramid"===t.type&&(G=N=0,t.reversed=t.reversed?!1:!0);var y=I+a/2,$=I,V=I+a,pa=t.reversed?Z:O,K=y-G/2,ea=y+G/2,Da=t.reversed?O+N:Z-
N,wa=t.reversed?O:Z;a=[];var y=[],P=[],E=[],X=O,fa,ba=(Da-pa)/(K-$),ha=-ba,I="area"===(t.valueRepresents?t.valueRepresents:"height")?b():d();if(-1!==I){if(t.reversed)for(E.push(X),G=I.length-1;0<G;G--)X+=I[G],E.push(X);else for(G=0;G<I.length;G++)X+=I[G],E.push(X);if(t.reversed)for(G=0;G<I.length;G++)E[G]<Da?(a.push(K),y.push(ea),fa=G):(a.push((E[G]-pa+ba*$)/ba),y.push((E[G]-pa+ha*V)/ha));else for(G=0;G<I.length;G++)E[G]<Da?(a.push((E[G]-pa+ba*$)/ba),y.push((E[G]-pa+ha*V)/ha),fa=G):(a.push(K),y.push(ea));
for(G=0;G<I.length-1;G++)X=t.reversed?C[C.length-1-G].color?C[C.length-1-G].color:t._colorSet[(C.length-1-G)%t._colorSet.length]:C[G].color?C[G].color:t._colorSet[G%t._colorSet.length],G===fa?P.push({x1:a[G],y1:E[G],x2:y[G],y2:E[G],x3:ea,y3:Da,x4:y[G+1],y4:E[G+1],x5:a[G+1],y5:E[G+1],x6:K,y6:Da,id:G,height:E[G+1]-E[G],color:X}):P.push({x1:a[G],y1:E[G],x2:y[G],y2:E[G],x3:y[G+1],y3:E[G+1],x4:a[G+1],y4:E[G+1],id:G,height:E[G+1]-E[G],color:X});var ga=2,J=[],ja=!1,W=[],ia=[],I=!1;a=a=0;Fa(W);for(G=0;G<
C.length;G++)C[G].exploded&&(I=!0,t.reversed?W.push(C.length-1-G):W.push(G));Q.clearRect(x.x1,x.y1,x.width,x.height);Q.fillStyle=z.backgroundColor;Q.fillRect(x.x1,x.y1,x.width,x.height);if(H&&t.visible&&(c(),g(),e(),"inside"!==t.indexLabelPlacement)){m();for(G=0;G<C.length;G++)J[G].isDirty||(a=J[G].textBlock.x+J[G].width,a=(L-a)/2,0==G&&(A=a),A>a&&(A=a));for(G=0;G<P.length;G++)P[G].x1+=A,P[G].x2+=A,P[G].x3+=A,P[G].x4+=A,P[G].x5&&(P[G].x5+=A,P[G].x6+=A),J[G].textBlock.x+=A}for(G=0;G<P.length;G++)A=
P[G],ra(Q,A,t.fillOpacity),ia.push(A.y1);v(Q);H&&t.visible&&("inside"===t.indexLabelPlacement||z.animationEnabled||s(Q),z.animationEnabled||p());if(!H)for(G=0;G<C.length;G++)A=t.dataPointIds[G],a={id:A,objectType:"dataPoint",dataPointIndex:G,dataSeriesIndex:0,funnelSection:P[t.reversed?C.length-1-G:G]},z._eventManager.objectMap[A]=a;!z.animationEnabled&&I?k(z,-1,0):z.animationEnabled&&!z.animatedRender&&k(z,-1,0);this.funnelPyramidClickHandler=function(a){var b=-1;if(!ja&&!z.isAnimating&&(u(a.dataSeries.explodeOnClick)||
a.dataSeries.explodeOnClick)&&(b=t.reversed?C.length-1-a.dataPointIndex:a.dataPointIndex,0<=b)){a=b;if("funnel"===t.type||"pyramid"===t.type)t.reversed?C[C.length-1-a].exploded=C[C.length-1-a].exploded?!1:!0:C[a].exploded=C[a].exploded?!1:!0;k(z,b,500)}};return{source:Q,dest:this.plotArea.ctx,animationCallback:function(a,b){M.fadeInAnimation(a,b);1<=a&&(k(z,-1,500),v(z.plotArea.ctx||z.ctx))},easingFunction:M.easing.easeInQuad,animationBase:0}}}}};p.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();p.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;p.prototype.set=function(a,d,b){b="undefined"===typeof b?!0:b;"options"===a?(this.options=d,
b&&this.render()):p.base.set.call(this,a,d,b)};p.prototype.exportChart=function(a){a="undefined"===typeof a?{}:a;var d=a.format?a.format:"png",b=a.fileName?a.fileName:this.exportFileName;if(a.toDataURL)return this.canvas.toDataURL("image/"+d);Ta(this.canvas,d,b)};p.prototype.print=function(){var a=this.exportChart({toDataURL:!0}),d=document.createElement("iframe");d.setAttribute("class","canvasjs-chart-print-frame");d.setAttribute("style","position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
d.style.height=this.height+"px";this._canvasJSContainer.appendChild(d);var b=this,c=d.contentWindow||d.contentDocument.document||d.contentDocument;c.document.open();c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="'+a+'"/><body/></html>');c.document.close();setTimeout(function(){c.focus();c.print();setTimeout(function(){b._canvasJSContainer.removeChild(d)},1E3)},500)};p.prototype.getPercentAndTotal=function(a,d){var b=null,c=null,
e=null;if(0<=a.type.indexOf("stacked"))c=0,b=d.x.getTime?d.x.getTime():d.x,b in a.plotUnit.yTotals&&(c=a.plotUnit.yTotals[b],e=isNaN(d.y)?0:100*(d.y/c));else if("pie"===a.type||"doughnut"===a.type||"funnel"===a.type||"pyramid"===a.type){for(b=c=0;b<a.dataPoints.length;b++)isNaN(a.dataPoints[b].y)||(c+=a.dataPoints[b].y);e=isNaN(d.y)?0:100*(d.y/c)}return{percent:e,total:c}};p.prototype.replaceKeywordsWithValue=function(a,d,b,c,e){var g=this;e="undefined"===typeof e?0:e;if((0<=b.type.indexOf("stacked")||
"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===b.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var m="#percent",l="#total",k=this.getPercentAndTotal(b,d),l=isNaN(k.total)?l:k.total,m=isNaN(k.percent)?m:k.percent;do{k="";if(b.percentFormatString)k=b.percentFormatString;else{var k="#,##0.",h=Math.max(Math.ceil(Math.log(1/Math.abs(m))/Math.LN10),2);if(isNaN(h)||!isFinite(h))h=2;for(var s=0;s<h;s++)k+="#";b.percentFormatString=k}a=a.replace("#percent",ba(m,k,g._cultureInfo));
a=a.replace("#total",ba(l,b.yValueFormatString?b.yValueFormatString:"#,##0.########",g._cultureInfo))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=Ia(a.slice(1,a.length-1));a=a.replace("#index",e);var h=null;try{var f=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);f&&0<f.length&&(h=Ia(f[2]),a=Ia(f[1]))}catch(l){}f=null;if("color"===a)return"waterfall"===
b.type?d.color?d.color:0<d.y?b.risingColor:b.fallingColor:"error"===b.type?b.color?b.color:b._colorSet[h%b._colorSet.length]:d.color?d.color:b.color?b.color:b._colorSet[c%b._colorSet.length];if(d.hasOwnProperty(a))f=d;else if(b.hasOwnProperty(a))f=b;else return"";f=f[a];null!==h&&(f=f[h]);if("x"===a)if("dateTime"===b.axisX.valueType||"dateTime"===b.xValueType||d.x&&d.x.getTime){if(g.plotInfo.plotTypes[0].plotUnits[0].axisX&&!g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic)return Ca(f,d.xValueFormatString?
d.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString=g.axisX&&g.axisX.autoValueFormatString?g.axisX.autoValueFormatString:"DD MMM YY",g._cultureInfo)}else return ba(f,d.xValueFormatString?d.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString="#,##0.########",g._cultureInfo);else return"y"===a?ba(f,d.yValueFormatString?d.yValueFormatString:b.yValueFormatString?b.yValueFormatString:b.yValueFormatString="#,##0.########",g._cultureInfo):"z"===
a?ba(f,d.zValueFormatString?d.zValueFormatString:b.zValueFormatString?b.zValueFormatString:b.zValueFormatString="#,##0.########",g._cultureInfo):f})};qa(H,V);H.prototype.setLayout=function(){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,d=a.layoutManager.getFreeSpace(),b=null,c=0,e=0,g=0,m=0,l=this.markerMargin=this.chart.options.legend&&!u(this.chart.options.legend.markerMargin)?this.chart.options.legend.markerMargin:0.3*this.fontSize;this.height=0;var k=[],h=[];"top"===this.verticalAlign||
"bottom"===this.verticalAlign?(this.orientation="horizontal",b=this.verticalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:d.width,m=this.maxHeight=null!==this.maxHeight?this.maxHeight:0.5*d.height):"center"===this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:0.5*d.width,m=this.maxHeight=null!==this.maxHeight?this.maxHeight:d.height);this.errorMarkerColor=[];for(var s=0;s<this.dataSeries.length;s++){var q=this.dataSeries[s];
if(q.dataPoints&&q.dataPoints.length)if("pie"!==q.type&&"doughnut"!==q.type&&"funnel"!==q.type&&"pyramid"!==q.type){var n=q.legendMarkerType=q.legendMarkerType?q.legendMarkerType:"line"!==q.type&&"stepLine"!==q.type&&"spline"!==q.type&&"scatter"!==q.type&&"bubble"!==q.type||!q.markerType?"error"===q.type&&q._linkedSeries?q._linkedSeries.legendMarkerType?q._linkedSeries.legendMarkerType:F.getDefaultLegendMarker(q._linkedSeries.type):F.getDefaultLegendMarker(q.type):q.markerType,f=q.legendText?q.legendText:
this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:q,dataPoint:null}):q.name,p=q.legendMarkerColor=q.legendMarkerColor?q.legendMarkerColor:q.markerColor?q.markerColor:"error"===q.type?u(q.whiskerColor)?q._colorSet[0]:q.whiskerColor:q._colorSet[0],r=q.markerSize||"line"!==q.type&&"stepLine"!==q.type&&"spline"!==q.type?0.75*this.lineHeight:0,v=q.legendMarkerBorderColor?q.legendMarkerBorderColor:q.markerBorderColor,t=q.legendMarkerBorderThickness?q.legendMarkerBorderThickness:
q.markerBorderThickness?Math.max(1,Math.round(0.2*r)):0;"error"===q.type&&this.errorMarkerColor.push(p);f=this.chart.replaceKeywordsWithValue(f,q.dataPoints[0],q,s);n={markerType:n,markerColor:p,text:f,textBlock:null,chartType:q.type,markerSize:r,lineColor:q._colorSet[0],dataSeriesIndex:q.index,dataPointIndex:null,markerBorderColor:v,markerBorderThickness:t};k.push(n)}else for(var z=0;z<q.dataPoints.length;z++){var x=q.dataPoints[z],n=x.legendMarkerType?x.legendMarkerType:q.legendMarkerType?q.legendMarkerType:
F.getDefaultLegendMarker(q.type),f=x.legendText?x.legendText:q.legendText?q.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:q,dataPoint:x}):x.name?x.name:"DataPoint: "+(z+1),p=x.legendMarkerColor?x.legendMarkerColor:q.legendMarkerColor?q.legendMarkerColor:x.color?x.color:q.color?q.color:q._colorSet[z%q._colorSet.length],r=0.75*this.lineHeight,v=x.legendMarkerBorderColor?x.legendMarkerBorderColor:q.legendMarkerBorderColor?q.legendMarkerBorderColor:
x.markerBorderColor?x.markerBorderColor:q.markerBorderColor,t=x.legendMarkerBorderThickness?x.legendMarkerBorderThickness:q.legendMarkerBorderThickness?q.legendMarkerBorderThickness:x.markerBorderThickness||q.markerBorderThickness?Math.max(1,Math.round(0.2*r)):0,f=this.chart.replaceKeywordsWithValue(f,x,q,z),n={markerType:n,markerColor:p,text:f,textBlock:null,chartType:q.type,markerSize:r,dataSeriesIndex:s,dataPointIndex:z,markerBorderColor:v,markerBorderThickness:t};(x.showInLegend||q.showInLegend&&
!1!==x.showInLegend)&&k.push(n)}}!0===this.reversed&&k.reverse();if(0<k.length){q=null;p=f=x=z=0;x=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,g):this.itemMaxWidth=Math.min(this.itemWidth,g):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,g):this.itemMaxWidth=g;r=0===r?0.75*this.lineHeight:r;x-=r+l;for(s=0;s<k.length;s++){n=k[s];v=x;if("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType)v-=2*0.1*this.lineHeight;if(!(0>=m||"undefined"===
typeof m||0>=v||"undefined"===typeof v)){if("horizontal"===this.orientation){n.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:v,maxHeight:this.itemWrap?m:this.lineHeight,angle:0,text:n.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"});n.textBlock.measureText();null!==this.itemWidth&&(n.textBlock.width=this.itemWidth-(r+l+("line"===n.chartType||"spline"===n.chartType||"stepLine"===
n.chartType?2*0.1*this.lineHeight:0)));if(!q||q.width+Math.round(n.textBlock.width+r+l+(0===q.width?0:this.horizontalSpacing)+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0))>g)q={items:[],width:0},h.push(q),this.height+=f,f=0;f=Math.max(f,n.textBlock.height)}else n.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:x,maxHeight:!0===this.itemWrap?m:1.5*this.fontSize,angle:0,text:n.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,
fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"}),n.textBlock.measureText(),null!==this.itemWidth&&(n.textBlock.width=this.itemWidth-(r+l+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0))),this.height<m-this.lineHeight?(q={items:[],width:0},h.push(q)):(q=h[z],z=(z+1)%h.length),this.height+=n.textBlock.height;n.textBlock.x=q.width;n.textBlock.y=0;q.width+=Math.round(n.textBlock.width+r+l+(0===q.width?
0:this.horizontalSpacing)+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0));q.items.push(n);this.width=Math.max(q.width,this.width);p=n.textBlock.width+(r+l+("line"===n.chartType||"spline"===n.chartType||"stepLine"===n.chartType?2*0.1*this.lineHeight:0))}}this.itemWidth=p;this.height=!1===this.itemWrap?h.length*this.lineHeight:this.height+f;this.height=Math.min(m,this.height);this.width=Math.min(g,this.width)}"top"===this.verticalAlign?(e="left"===this.horizontalAlign?
d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y1):"center"===this.verticalAlign?(e="left"===this.horizontalAlign?d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y1+d.height/2-this.height/2):"bottom"===this.verticalAlign&&(e="left"===this.horizontalAlign?d.x1:"right"===this.horizontalAlign?d.x2-this.width:d.x1+d.width/2-this.width/2,c=d.y2-this.height);this.items=k;for(s=0;s<this.items.length;s++)n=k[s],n.id=++this.chart._eventManager.lastObjectId,
this.chart._eventManager.objectMap[n.id]={id:n.id,objectType:"legendItem",legendItemIndex:s,dataSeriesIndex:n.dataSeriesIndex,dataPointIndex:n.dataPointIndex};this.markerSize=r;this.rows=h;0<k.length&&a.layoutManager.registerSpace(b,{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:e,y1:c,x2:e+this.width,y2:c+this.height}};H.prototype.render=function(){var a=this.bounds.x1,d=this.bounds.y1,b=this.markerMargin,c=this.maxWidth,e=this.maxHeight,g=this.markerSize,m=this.rows;(0<this.borderThickness&&
this.borderColor||this.backgroundColor)&&this.ctx.roundRect(a,d,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);for(var l=0,k=0;k<m.length;k++){for(var h=m[k],s=0,q=0;q<h.items.length;q++){var n=h.items[q],f=n.textBlock.x+a+(0===q?0.2*g:this.horizontalSpacing),p=d+l,u=f;this.chart.data[n.dataSeriesIndex].visible||(this.ctx.globalAlpha=0.5);this.ctx.save();this.ctx.beginPath();this.ctx.rect(a,d,c,Math.max(e-e%this.lineHeight,0));this.ctx.clip();
if("line"===n.chartType||"stepLine"===n.chartType||"spline"===n.chartType)this.ctx.strokeStyle=n.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(f-0.1*this.lineHeight,p+this.lineHeight/2),this.ctx.lineTo(f+0.85*this.lineHeight,p+this.lineHeight/2),this.ctx.stroke(),u-=0.1*this.lineHeight;if("error"===n.chartType){this.ctx.strokeStyle=this.errorMarkerColor[0];this.ctx.lineWidth=g/8;this.ctx.beginPath();var r=f-0.08*this.lineHeight+0.1*this.lineHeight,
t=p+0.15*this.lineHeight,v=0.7*this.lineHeight,x=v+0.02*this.lineHeight;this.ctx.moveTo(r,t);this.ctx.lineTo(r+v,t);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(r+v/2,t);this.ctx.lineTo(r+v/2,t+x);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(r,t+x);this.ctx.lineTo(r+v,t+x);this.ctx.stroke();this.errorMarkerColor.shift()}ia.drawMarker(f+g/2,p+this.lineHeight/2,this.ctx,n.markerType,"error"===n.chartType||"line"===n.chartType||"spline"===n.chartType?n.markerSize/2:n.markerSize,n.markerColor,
n.markerBorderColor,n.markerBorderThickness);n.textBlock.x=f+b+g;if("line"===n.chartType||"stepLine"===n.chartType||"spline"===n.chartType)n.textBlock.x+=0.1*this.lineHeight;n.textBlock.y=Math.round(p+this.lineHeight/2);n.textBlock.render(!0);this.ctx.restore();s=0<q?Math.max(s,n.textBlock.height):n.textBlock.height;this.chart.data[n.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);f=N(n.id);this.ghostCtx.fillStyle=f;this.ghostCtx.beginPath();this.ghostCtx.fillRect(u,n.textBlock.y-this.lineHeight/
2,n.textBlock.x+n.textBlock.width-u,n.textBlock.height);n.x1=this.chart._eventManager.objectMap[n.id].x1=u;n.y1=this.chart._eventManager.objectMap[n.id].y1=n.textBlock.y-this.lineHeight/2;n.x2=this.chart._eventManager.objectMap[n.id].x2=n.textBlock.x+n.textBlock.width;n.y2=this.chart._eventManager.objectMap[n.id].y2=n.textBlock.y+n.textBlock.height-this.lineHeight/2}l+=s}};qa(F,V);F.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===
a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"normal";if("bar"===a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a||"pyramid"===a)return"none";
"error"!==a&&window.console.log("Unknown Chart Type: "+a);return null};F.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"square";if("line"===a||"stepLine"===a||"spline"===
a||"pie"===a||"doughnut"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a||"funnel"===a||"pyramid"===a)return"triangle";if("error"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};F.prototype.getDataPointAtX=function(a,d){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},c=null,e=0,g=0,m=1,l=Infinity,k=0,h=0,s=0;"none"!==this.chart.plotInfo.axisPlacement&&(this.axisX.logarithmic?
(s=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),s=1<s?Math.min(Math.max((this.dataPoints.length-1)/s*Math.log(a/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(s=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,s=0<s?Math.min(Math.max((this.dataPoints.length-1)/s*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0));for(;;){g=0<m?s+e:s-e;if(0<=g&&g<this.dataPoints.length){var c=this.dataPoints[g],q=this.axisX.logarithmic?c.x>a?c.x/a:a/c.x:
Math.abs(c.x-a);q<b.distance&&(b.dataPoint=c,b.distance=q,b.index=g);c=q;c<=l?l=c:0<m?k++:h++;if(1E3<k&&1E3<h)break}else if(0>s-e&&s+e>=this.dataPoints.length)break;-1===m?(e++,m=1):m=-1}return d||b.dataPoint.x!==a?d&&null!==b.dataPoint?b:null:b};F.prototype.getDataPointAtXY=function(a,d,b){if(!this.dataPoints||0===this.dataPoints.length||a<this.chart.plotArea.x1||a>this.chart.plotArea.x2||d<this.chart.plotArea.y1||d>this.chart.plotArea.y2)return null;b=b||!1;var c=[],e=0,g=0,m=1,l=!1,k=Infinity,
h=0,s=0,q=0;if("none"!==this.chart.plotInfo.axisPlacement)if(q=(this.chart.axisX[0]?this.chart.axisX[0]:this.chart.axisX2[0]).getXValueAt({x:a,y:d}),this.axisX.logarithmic)var n=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),q=1<n?Math.min(Math.max((this.dataPoints.length-1)/n*Math.log(q/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0;else n=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,q=0<n?Math.min(Math.max((this.dataPoints.length-1)/n*(q-this.dataPoints[0].x)>>
0,0),this.dataPoints.length):0;for(;;){g=0<m?q+e:q-e;if(0<=g&&g<this.dataPoints.length){var n=this.chart._eventManager.objectMap[this.dataPointIds[g]],f=this.dataPoints[g],p=null;if(n){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":case "waterfall":case "error":a>=n.x1&&(a<=n.x2&&d>=n.y1&&d<=n.y2)&&(c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-
a),Math.abs(n.x2-a),Math.abs(n.y1-d),Math.abs(n.y2-d))}),l=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var u=na("markerSize",f,this)||4,r=b?20:u,p=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-d,2));p<=r&&c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:p});n=Math.abs(n.x1-a);n<=k?k=n:0<m?h++:s++;p<=u/2&&(l=!0);break;case "rangeArea":case "rangeSplineArea":u=na("markerSize",f,this)||
4;r=b?20:u;p=Math.min(Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-d,2)),Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y2-d,2)));p<=r&&c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:p});n=Math.abs(n.x1-a);n<=k?k=n:0<m?h++:s++;p<=u/2&&(l=!0);break;case "bubble":u=n.size;p=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-d,2));p<=u/2&&(c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:p}),l=!0);break;case "pie":case "doughnut":u=n.center;r="doughnut"===this.type?n.percentInnerRadius*n.radius:
0;p=Math.sqrt(Math.pow(u.x-a,2)+Math.pow(u.y-d,2));p<n.radius&&p>r&&(p=Math.atan2(d-u.y,a-u.x),0>p&&(p+=2*Math.PI),p=Number(((180*(p/Math.PI)%360+360)%360).toFixed(12)),u=Number(((180*(n.startAngle/Math.PI)%360+360)%360).toFixed(12)),r=Number(((180*(n.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===r&&1<n.endAngle&&(r=360),u>=r&&0!==f.y&&(r+=360,p<u&&(p+=360)),p>u&&p<r&&(c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:0}),l=!0));break;case "funnel":case "pyramid":p=n.funnelSection;
d>p.y1&&d<p.y4&&(p.y6?d>p.y6?(g=p.x6+(p.x5-p.x6)/(p.y5-p.y6)*(d-p.y6),p=p.x3+(p.x4-p.x3)/(p.y4-p.y3)*(d-p.y3)):(g=p.x1+(p.x6-p.x1)/(p.y6-p.y1)*(d-p.y1),p=p.x2+(p.x3-p.x2)/(p.y3-p.y2)*(d-p.y2)):(g=p.x1+(p.x4-p.x1)/(p.y4-p.y1)*(d-p.y1),p=p.x2+(p.x3-p.x2)/(p.y3-p.y2)*(d-p.y2)),a>g&&a<p&&(c.push({dataPoint:f,dataPointIndex:n.dataPointIndex,dataSeries:this,distance:0}),l=!0));break;case "boxAndWhisker":if(a>=n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&d>=n.y4-n.borderThickness/2&&d<=n.y1+n.borderThickness/
2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&d>=n.y1&&d<=n.y4)c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-d),Math.abs(n.y3-d))}),l=!0;break;case "candlestick":if(a>=n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&d>=n.y2-n.borderThickness/2&&d<=n.y3+n.borderThickness/2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&d>=n.y1&&d<=n.y4)c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),
Math.abs(n.x2-a),Math.abs(n.y2-d),Math.abs(n.y3-d))}),l=!0;break;case "ohlc":if(Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&d>=n.y2&&d<=n.y3||a>=n.x1&&a<=(n.x2+n.x1)/2&&d>=n.y1-n.borderThickness/2&&d<=n.y1+n.borderThickness/2||a>=(n.x1+n.x2)/2&&a<=n.x2&&d>=n.y4-n.borderThickness/2&&d<=n.y4+n.borderThickness/2)c.push({dataPoint:f,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-d),Math.abs(n.y3-d))}),l=!0}if(l||1E3<h&&1E3<s)break}}else if(0>q-e&&q+e>=
this.dataPoints.length)break;-1===m?(e++,m=1):m=-1}a=null;for(d=0;d<c.length;d++)a?c[d].distance<=a.distance&&(a=c[d]):a=c[d];return a};F.prototype.getMarkerProperties=function(a,d,b,c){var e=this.dataPoints;return{x:d,y:b,ctx:c,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?
e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};qa(z,V);z.prototype.createExtraLabelsForLog=function(a){a=(a||0)+1;if(!(5<a)){var d=this.logLabelValues[0]||this.intervalStartPosition;if(Math.log(this.range)/Math.log(d/this.viewportMinimum)<this.noTicks-1){for(var b=z.getNiceNumber((d-this.viewportMinimum)/Math.min(Math.max(2,this.noTicks-this.logLabelValues.length),
3),!0),c=Math.ceil(this.viewportMinimum/b)*b;c<d;c+=b)c<this.viewportMinimum||this.logLabelValues.push(c);this.logLabelValues.sort(Sa);this.createExtraLabelsForLog(a)}}};z.prototype.createLabels=function(){var a,d,b=0,c=0,e,g=0,m=0,c=0,c=this.interval,l=0,k,h=0.6*this.chart.height,p;a=!1;var q=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],n=q.length?u(this.scaleBreaks.firstBreakIndex)?0:this.scaleBreaks.firstBreakIndex:0;if("axisX"!==this.type||"dateTime"!==this.valueType||this.logarithmic){e=
this.viewportMaximum;if(this.labels){a=Math.ceil(c);for(var c=Math.ceil(this.intervalStartPosition),f=!1,b=c;b<this.viewportMaximum;b+=a)if(this.labels[b])f=!0;else{f=!1;break}f&&(this.interval=a,this.intervalStartPosition=c)}if(this.logarithmic&&!this.equidistantInterval)for(this.logLabelValues||(this.logLabelValues=[],this.createExtraLabelsForLog()),c=0,f=n;c<this.logLabelValues.length;c++)if(b=this.logLabelValues[c],b<this.viewportMinimum)c++;else{for(;f<q.length&&b>q[f].endValue;f++);a=f<q.length&&
b>=q[f].startValue&&b<=q[f].endValue;p=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:p,label:this.labels[p]?this.labels[p]:null}):"axisX"===this.type&&this.labels[p]?this.labels[p]:ba(p,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:m,angle:this.labelAngle,text:this.prefix+a+this.suffix,backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,
horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:p,textBlock:a,effectiveHeight:null}))}f=n;for(b=this.intervalStartPosition;b<=e;b=parseFloat(1E-12>this.interval?this.logarithmic&&this.equidistantInterval?b*Math.pow(this.logarithmBase,this.interval):b+this.interval:(this.logarithmic&&this.equidistantInterval?
b*Math.pow(this.logarithmBase,this.interval):b+this.interval).toFixed(12))){for(;f<q.length&&b>q[f].endValue;f++);a=f<q.length&&b>=q[f].startValue&&b<=q[f].endValue;p=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:p,label:this.labels[p]?this.labels[p]:null}):"axisX"===this.type&&this.labels[p]?this.labels[p]:ba(p,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:m,angle:this.labelAngle,text:this.prefix+a+this.suffix,
horizontalAlign:"left",backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:p,textBlock:a,effectiveHeight:null}))}}else for(this.intervalStartPosition=this.getLabelStartPoint(new Date(this.viewportMinimum),
this.intervalType,this.interval),e=Ya(new Date(this.viewportMaximum),this.interval,this.intervalType),f=n,b=this.intervalStartPosition;b<e;Ya(b,c,this.intervalType)){for(a=b.getTime();f<q.length&&a>q[f].endValue;f++);p=a;a=f<q.length&&a>=q[f].startValue&&a<=q[f].endValue;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:new Date(p),label:this.labels[p]?this.labels[p]:null}):"axisX"===this.type&&this.labels[p]?this.labels[p]:Ca(p,this.valueFormatString,this.chart._cultureInfo),
a=new ka(this.ctx,{x:0,y:0,maxWidth:g,backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxHeight:m,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:p,textBlock:a,effectiveHeight:null,
breaksLabelType:void 0}))}if("bottom"===this._position||"top"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.width*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.width/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*S[this.intervalType+
"Duration"]*this.interval,g="undefined"===typeof this.options.labelMaxWidth?0.5*this.chart.width>>0:this.options.labelMaxWidth,this.chart.panEnabled||(m="undefined"===typeof this.options.labelWrap||this.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize);else if("left"===this._position||"right"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.height*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-
2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.height/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*S[this.intervalType+"Duration"]*this.interval,this.chart.panEnabled||(g="undefined"===typeof this.options.labelMaxWidth?0.3*this.chart.width>>0:this.options.labelMaxWidth),m="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize;
for(c=0;c<this._labels.length;c++){a=this._labels[c].textBlock;a.maxWidth=g;a.maxHeight=m;var B=a.measureText();k=B.height}e=[];n=q=0;if(this.labelAutoFit||this.options.labelAutoFit)if(u(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),"bottom"===this._position||"top"===this._position)if(g=0.9*l>>0,n=0,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=
this.labelFontSize;this.sessionVariables.labelMaxWidth=g;this.sessionVariables.labelMaxHeight=m;this.sessionVariables.labelAngle=this.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;for(var v,f=a.text.split(" "),c=0;c<f.length;c++)p=f[c],this.ctx.font=a.fontStyle+" "+a.fontWeight+" "+a.fontSize+"px "+a.fontFamily,p=this.ctx.measureText(p),p.width>n&&(v=b,n=p.width)}b=0;for(b=this.intervalStartPosition<
this.viewportMinimum?1:0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;B=a.measureText();for(f=b+1;f<this._labels.length;f++)if(!this._labels[f].breaksLabelType){d=this._labels[f].textBlock;d=d.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,e);Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(m-a.fontSize/2)*
Math.cos(Math.PI/180*Math.abs(this.labelAngle));if(u(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle)if(this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),p=(h-(k+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(-25)))/Math.sin(Math.PI/180*Math.abs(-25)),!u(this.options.labelWrap))this.labelWrap?u(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=
Math.min(Math.max(g,n),p),this.sessionVariables.labelWrap=this.labelWrap,B.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25)):(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle):u(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelMaxWidth=
g,B.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p)):(this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelWrap=this.labelWrap);else{if(u(this.options.labelWrap))if(!u(this.options.labelMaxWidth))this.options.labelMaxWidth<g?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,
this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=m);else if(!u(d))if(c=B.width+d.width>>0,f=this.labelFontSize,n<g)c-2*g>q&&(q=c-2*g,c>=2*g&&c<2.2*g?(this.sessionVariables.labelMaxWidth=g,u(this.options.labelFontSize)&&12<f&&(f=Math.floor(12/13*f),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelAngle=
this.labelAngle):c>=2.2*g&&c<2.8*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p,this.sessionVariables.labelFontSize=f):c>=2.8*g&&c<3.2*g?(this.sessionVariables.labelMaxWidth=Math.max(g,n),this.sessionVariables.labelWrap=!0,u(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelAngle=
this.labelAngle):c>=3.2*g&&c<3.6*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=p,this.sessionVariables.labelFontSize=this.labelFontSize):c>3.6*g&&c<5*g?(u(this.options.labelFontSize)&&12<f&&(f=Math.floor(12/13*f),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p):
c>5*g&&(this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelFontSize=f,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelAngle=this.labelAngle));else if(v===b&&(0===v&&n+this._labels[v+1].textBlock.measureText().width-2*g>q||v===this._labels.length-1&&n+this._labels[v-1].textBlock.measureText().width-2*g>q||0<v&&v<this._labels.length-1&&n+this._labels[v+1].textBlock.measureText().width-2*g>q&&n+this._labels[v-1].textBlock.measureText().width-
2*g>q))q=0===v?n+this._labels[v+1].textBlock.measureText().width-2*g:n+this._labels[v-1].textBlock.measureText().width-2*g,this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=p;else if(0===q)for(this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?f:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),p),B=a.measureText(),c<this._labels.length-1&&(f=c+1,d=this._labels[f].textBlock,d.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),p),d=d.measureText(),B.width+d.width>>0>2*g&&(this.sessionVariables.labelAngle=-25))}else(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/
Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),p=0!=this.labelAngle?(h-(k+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)):g,this.sessionVariables.labelMaxHeight=m=this.labelWrap?(h-p*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)):1.5*this.labelFontSize,u(this.options.labelWrap))?u(this.options.labelWrap)&&(this.labelWrap&&!u(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=
this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:p,this.sessionVariables.labelMaxHeight=m):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=p,this.sessionVariables.labelMaxHeight=c<0.9*l?0.9*l:c,this.sessionVariables.labelWrap=this.labelWrap)):(this.options.labelWrap?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:p):
(u(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:p,this.sessionVariables.labelWrap=this.labelWrap),this.sessionVariables.labelMaxHeight=m)}for(c=0;c<this._labels.length;c++)a=this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=
this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=u(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,a.fontSize=this.labelFontSize=u(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=u(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=u(this.options.labelWrap)?
this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();else if("left"===this._position||"right"===this._position)if(g=u(this.options.labelMaxWidth)?0.3*this.chart.width>>0:this.options.labelMaxWidth,m="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=
g;this.sessionVariables.labelMaxHeight=m;this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;B=a.measureText();for(f=b+1;f<this._labels.length;f++)if(!this._labels[f].breaksLabelType){d=this._labels[f].textBlock;d=d.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,
e);c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(m-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));u(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle?u(this.options.labelWrap)?u(this.options.labelWrap)&&(u(this.options.labelMaxWidth)?u(d)||(l=B.height+d.height>>0,l-2*m>n&&(n=l-2*m,l>=2*m&&l<2.4*m?(u(this.options.labelFontSize)&&12<this.labelFontSize&&
(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize):l>=2.4*m&&l<2.8*m?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelWrap=!0):l>=2.8*m&&l<3.2*m?(this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelWrap=!0,u(this.options.labelFontSize)&&12<
this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>=3.2*m&&l<3.6*m?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelFontSize=this.labelFontSize):l>3.6*m&&l<10*m?(u(this.options.labelFontSize)&&
12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>10*m&&l<50*m&&(u(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),
a.measureText()),this.sessionVariables.labelFontSize=u(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelAngle=u(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle))):(this.sessionVariables.labelMaxHeight=m,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth)):(this.sessionVariables.labelMaxWidth=
this.labelWrap?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:this.labelMaxWidth?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=m):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=0===this.labelAngle?g:Math.min((c-m*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)),m),u(this.options.labelWrap))?
u(this.options.labelWrap)&&(this.labelWrap&&!u(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth>this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:c,u(this.options.labelMaxWidth)&&
(this.sessionVariables.labelAngle=this.labelAngle))):this.options.labelWrap?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?m:c,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=g):(this.sessionVariables.labelMaxHeight=m,u(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap)}for(c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=u(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,
a.fontSize=this.labelFontSize=u(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=u(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=u(this.options.labelWrap)?this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();for(b=0;b<this.stripLines.length;b++){var g=this.stripLines[b],z;if("outside"===g.labelPlacement){m=this.sessionVariables.labelMaxWidth;
if("bottom"===this._position||"top"===this._position)z=u(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize;if("left"===this._position||"right"===this._position)z=u(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.width>>0:1.5*this.labelFontSize;u(g.labelBackgroundColor)&&(g.labelBackgroundColor="#EEEEEE")}else m="bottom"===this._position||"top"===this._position?0.9*this.chart.width>>0:0.9*this.chart.height>>
0,z=u(g.options.labelWrap)||g.labelWrap?"bottom"===this._position||"top"===this._position?0.8*this.chart.width>>0:0.8*this.chart.height>>0:1.5*this.labelFontSize,u(g.labelBackgroundColor)&&(u(g.startValue)&&0!==g.startValue?g.labelBackgroundColor=r?"transparent":null:g.labelBackgroundColor="#EEEEEE");a=new ka(this.ctx,{x:0,y:0,backgroundColor:g.labelBackgroundColor,borderColor:g.labelBorderColor,borderThickness:g.labelBorderThickness,cornerRadius:g.labelCornerRadius,maxWidth:g.options.labelMaxWidth?
g.options.labelMaxWidth:m,maxHeight:z,angle:this.labelAngle,text:g.labelFormatter?g.labelFormatter({chart:this.chart,axis:this,stripLine:g}):g.label,horizontalAlign:"left",fontSize:"outside"===g.labelPlacement?g.options.labelFontSize?g.labelFontSize:this.labelFontSize:g.labelFontSize,fontFamily:"outside"===g.labelPlacement?g.options.labelFontFamily?g.labelFontFamily:this.labelFontFamily:g.labelFontFamily,fontWeight:"outside"===g.labelPlacement?g.options.labelFontWeight?g.labelFontWeight:this.labelFontWeight:
g.labelFontWeight,fontColor:g.labelFontColor||g.color,fontStyle:"outside"===g.labelPlacement?g.options.labelFontStyle?g.labelFontStyle:this.fontWeight:g.labelFontStyle,textBaseline:"middle"});this._stripLineLabels.push({position:g.value,textBlock:a,effectiveHeight:null,stripLine:g})}};z.prototype.createLabelsAndCalculateWidth=function(){var a=0,d=0;this._labels=[];this._stripLineLabels=[];var b=this.chart.isNavigator?0:5;if("left"===this._position||"right"===this._position){this.createLabels();for(d=
0;d<this._labels.length;d++){var c=this._labels[d].textBlock,e=c.measureText(),g=0,g=0===this.labelAngle?e.width:e.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(e.height-c.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<g&&(a=g);this._labels[d].effectiveWidth=g}for(d=0;d<this._stripLineLabels.length;d++)"outside"===this._stripLineLabels[d].stripLine.labelPlacement&&(this._stripLineLabels[d].stripLine.value>=this.viewportMinimum&&this._stripLineLabels[d].stripLine.value<=this.viewportMaximum)&&
(c=this._stripLineLabels[d].textBlock,e=c.measureText(),g=0===this.labelAngle?e.width:e.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(e.height-c.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),a<g&&(a=g),this._stripLineLabels[d].effectiveWidth=g)}d=this.title?this._titleTextBlock.measureText().height+2:0;return c="inside"===this.labelPlacement?c=d+b:d+a+this.tickLength+b};z.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];this._stripLineLabels=[];var d,
b=0,c=this.chart.isNavigator?0:5;this.createLabels();if("bottom"===this._position||"top"===this._position){for(b=0;b<this._labels.length;b++){d=this._labels[b].textBlock;var e=d.measureText(),g=0,g=0===this.labelAngle?e.height:e.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(e.height-d.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<g&&(a=g);this._labels[b].effectiveHeight=g}for(b=0;b<this._stripLineLabels.length;b++)"outside"===this._stripLineLabels[b].stripLine.labelPlacement&&
(this._stripLineLabels[b].stripLine.value>=this.viewportMinimum&&this._stripLineLabels[b].stripLine.value<=this.viewportMaximum)&&(d=this._stripLineLabels[b].textBlock,e=d.measureText(),g=0===this.labelAngle?e.height:e.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(e.height-d.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),a<g&&(a=g),this._stripLineLabels[b].effectiveHeight=g)}d=this.title?this._titleTextBlock.measureText().height+2:0;return b="inside"===this.labelPlacement?b=
d+c:d+a+this.tickLength+c};z.setLayout=function(a,d,b,c,e,g){var m,l,k,h,p=a[0]?a[0].chart:d[0].chart,q=p.isNavigator?0:10,n=p._axes;if(a&&0<a.length)for(var f=0;f<a.length;f++)a[f]&&a[f].calculateAxisParameters();if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateAxisParameters();if(b&&0<b.length)for(f=0;f<b.length;f++)b[f].calculateAxisParameters();if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].calculateAxisParameters();for(f=0;f<n.length;f++)if(n[f]&&n[f].scaleBreaks&&n[f].scaleBreaks._appliedBreaks.length)for(var r=
n[f].scaleBreaks._appliedBreaks,v=0;v<r.length&&!(r[v].startValue>n[f].viewportMaximum);v++)r[v].endValue<n[f].viewportMinimum||(u(n[f].scaleBreaks.firstBreakIndex)&&(n[f].scaleBreaks.firstBreakIndex=v),r[v].startValue>=n[f].viewPortMinimum&&(n[f].scaleBreaks.lastBreakIndex=v));for(var z=v=0,t=0,C=0,x=0,D=0,y=0,A,E,F=l=0,H,I,L,r=H=I=L=!1,f=0;f<n.length;f++)n[f]&&n[f].title&&(n[f]._titleTextBlock=new ka(n[f].ctx,{text:n[f].title,horizontalAlign:"center",fontSize:n[f].titleFontSize,fontFamily:n[f].titleFontFamily,
fontWeight:n[f].titleFontWeight,fontColor:n[f].titleFontColor,fontStyle:n[f].titleFontStyle,borderColor:n[f].titleBorderColor,borderThickness:n[f].titleBorderThickness,backgroundColor:n[f].titleBackgroundColor,cornerRadius:n[f].titleCornerRadius,textBaseline:"top"}));for(f=0;f<n.length;f++)if(n[f].title)switch(n[f]._position){case "left":n[f]._titleTextBlock.maxWidth=n[f].titleMaxWidth||g.height;n[f]._titleTextBlock.maxHeight=n[f].titleWrap?0.8*g.width:1.5*n[f].titleFontSize;n[f]._titleTextBlock.angle=
-90;break;case "right":n[f]._titleTextBlock.maxWidth=n[f].titleMaxWidth||g.height;n[f]._titleTextBlock.maxHeight=n[f].titleWrap?0.8*g.width:1.5*n[f].titleFontSize;n[f]._titleTextBlock.angle=90;break;default:n[f]._titleTextBlock.maxWidth=n[f].titleMaxWidth||g.width,n[f]._titleTextBlock.maxHeight=n[f].titleWrap?0.8*g.height:1.5*n[f].titleFontSize,n[f]._titleTextBlock.angle=0}if("normal"===e){for(var C=[],x=[],D=[],y=[],M=[],N=[],O=[],Q=[];4>v;){var G=0,R=0,S=0,U=0,W=e=0,K=0,$=0,V=0,X=0,P=0,ba=0;if(b&&
0<b.length)for(D=[],f=P=0;f<b.length;f++)D.push(Math.ceil(b[f]?b[f].createLabelsAndCalculateWidth():0)),P+=D[f],K+=b[f]&&!p.isNavigator?b[f].margin:0;else D.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateWidth():0));O.push(D);if(c&&0<c.length)for(y=[],f=ba=0;f<c.length;f++)y.push(Math.ceil(c[f]?c[f].createLabelsAndCalculateWidth():0)),ba+=y[f],$+=c[f]?c[f].margin:0;else y.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateWidth():0));Q.push(y);m=Math.round(g.x1+P+K);k=Math.round(g.x2-ba-$>p.width-
q?p.width-q:g.x2-ba-$);if(a&&0<a.length)for(C=[],f=V=0;f<a.length;f++)a[f]&&(a[f].lineCoordinates={}),a[f].lineCoordinates.width=Math.abs(k-m),a[f].title&&(a[f]._titleTextBlock.maxWidth=0<a[f].titleMaxWidth&&a[f].titleMaxWidth<a[f].lineCoordinates.width?a[f].titleMaxWidth:a[f].lineCoordinates.width),C.push(Math.ceil(a[f]?a[f].createLabelsAndCalculateHeight():0)),V+=C[f],e+=a[f]&&!p.isNavigator?a[f].margin:0;else C.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateHeight():0));M.push(C);if(d&&0<d.length)for(x=
[],f=X=0;f<d.length;f++)d[f]&&(d[f].lineCoordinates={}),d[f].lineCoordinates.width=Math.abs(k-m),d[f].title&&(d[f]._titleTextBlock.maxWidth=0<d[f].titleMaxWidth&&d[f].titleMaxWidth<d[f].lineCoordinates.width?d[f].titleMaxWidth:d[f].lineCoordinates.width),x.push(Math.ceil(d[f]?d[f].createLabelsAndCalculateHeight():0)),X+=x[f],W+=d[f]&&!p.isNavigator?d[f].margin:0;else x.push(Math.ceil(d[0]?d[0].createLabelsAndCalculateHeight():0));N.push(x);if(a&&0<a.length)for(f=0;f<a.length;f++)a[f]&&(a[f].lineCoordinates.x1=
m,k=Math.round(g.x2-ba-$>p.width-q?p.width-q:g.x2-ba-$),a[f]._labels&&1<a[f]._labels.length&&(l=h=0,h=a[f]._labels[1],l="dateTime"===a[f].valueType?a[f]._labels[a[f]._labels.length-2]:a[f]._labels[a[f]._labels.length-1],z=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),t=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/
180*Math.abs(l.textBlock.angle))),!a[f]||(!a[f].labelAutoFit||u(A)||u(E)||p.isNavigator)||(l=0,0<a[f].labelAngle?E+t>k&&(l+=0<a[f].labelAngle?E+t-k-ba:0):0>a[f].labelAngle?A-z<m&&A-z<a[f].viewportMinimum&&(F=m-(K+a[f].tickLength+D+A-z+a[f].labelFontSize/2)):0===a[f].labelAngle&&(E+t>k&&(l=E+t/2-k-ba),A-z<m&&A-z<a[f].viewportMinimum&&(F=m-K-a[f].tickLength-D-A+z/2)),a[f].viewportMaximum===a[f].maximum&&a[f].viewportMinimum===a[f].minimum&&0<a[f].labelAngle&&0<l?k-=l:a[f].viewportMaximum===a[f].maximum&&
a[f].viewportMinimum===a[f].minimum&&0>a[f].labelAngle&&0<F?m+=F:a[f].viewportMaximum===a[f].maximum&&a[f].viewportMinimum===a[f].minimum&&0===a[f].labelAngle&&(0<F&&(m+=F),0<l&&(k-=l))),p.panEnabled?V=p.sessionVariables.axisX.height:p.sessionVariables.axisX.height=V,l=Math.round(g.y2-V-e+G),h=Math.round(g.y2),a[f].lineCoordinates.x2=k,a[f].lineCoordinates.width=k-m,a[f].lineCoordinates.y1=l,a[f].lineCoordinates.y2=l,a[f].bounds={x1:m,y1:l,x2:k,y2:h-(V+e-C[f]-G),width:k-m,height:h-l}),G+=C[f]+a[f].margin;
if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].lineCoordinates.x1=Math.round(g.x1+P+K),d[f].lineCoordinates.x2=Math.round(g.x2-ba-$>p.width-q?p.width-q:g.x2-ba-$),d[f].lineCoordinates.width=Math.abs(k-m),d[f]._labels&&1<d[f]._labels.length&&(h=d[f]._labels[1],l="dateTime"===d[f].valueType?d[f]._labels[d[f]._labels.length-2]:d[f]._labels[d[f]._labels.length-1],z=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),
t=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),p.panEnabled?X=p.sessionVariables.axisX2.height:p.sessionVariables.axisX2.height=X,l=Math.round(g.y1),h=Math.round(g.y2+d[f].margin),d[f].lineCoordinates.y1=l+X+W-R,d[f].lineCoordinates.y2=l,d[f].bounds={x1:m,y1:l+(X+W-x[f]-R),x2:k,y2:h,width:k-m,height:h-l},R+=x[f]+d[f].margin;if(b&&0<b.length)for(f=0;f<b.length;f++)K=p.isNavigator?0:
10,b[f]&&(m=Math.round(a[0]?a[0].lineCoordinates.x1:d[0].lineCoordinates.x1),K=b[f]._labels&&0<b[f]._labels.length?b[f]._labels[b[f]._labels.length-1].textBlock.height/2:q,l=Math.round(g.y1+X+W<Math.max(K,q)?Math.max(K,q):g.y1+X+W),k=Math.round(a[0]?a[0].lineCoordinates.x1:d[0].lineCoordinates.x1),K=0<a.length?0:b[f]._labels&&0<b[f]._labels.length?b[f]._labels[0].textBlock.height/2:q,h=Math.round(g.y2-V-e-K),b[f].lineCoordinates={x1:k-S,y1:l,x2:k-S,y2:h,height:Math.abs(h-l)},b[f].bounds={x1:m-(D[f]+
S),y1:l,x2:k,y2:h,width:k-m,height:h-l},b[f].title&&(b[f]._titleTextBlock.maxWidth=0<b[f].titleMaxWidth&&b[f].titleMaxWidth<b[f].lineCoordinates.height?b[f].titleMaxWidth:b[f].lineCoordinates.height),S+=D[f]+b[f].margin);if(c&&0<c.length)for(f=0;f<c.length;f++)c[f]&&(m=Math.round(a[0]?a[0].lineCoordinates.x2:d[0].lineCoordinates.x2),k=Math.round(m),K=c[f]._labels&&0<c[f]._labels.length?c[f]._labels[c[f]._labels.length-1].textBlock.height/2:0,l=Math.round(g.y1+X+W<Math.max(K,q)?Math.max(K,q):g.y1+
X+W),K=0<a.length?0:c[f]._labels&&0<c[f]._labels.length?c[f]._labels[0].textBlock.height/2:0,h=Math.round(g.y2-(V+e+K)),c[f].lineCoordinates={x1:m+U,y1:l,x2:m+U,y2:h,height:Math.abs(h-l)},c[f].bounds={x1:m,y1:l,x2:k+(y[f]+U),y2:h,width:k-m,height:h-l},c[f].title&&(c[f]._titleTextBlock.maxWidth=0<c[f].titleMaxWidth&&c[f].titleMaxWidth<c[f].lineCoordinates.height?c[f].titleMaxWidth:c[f].lineCoordinates.height),U+=y[f]+c[f].margin);if(a&&0<a.length)for(f=0;f<a.length;f++)a[f]&&(a[f].calculateValueToPixelConversionParameters(),
a[f].calculateBreaksSizeInValues(),a[f]._labels&&1<a[f]._labels.length&&(A=(a[f].logarithmic?Math.log(a[f]._labels[1].position/a[f].viewportMinimum)/a[f].conversionParameters.lnLogarithmBase:a[f]._labels[1].position-a[f].viewportMinimum)*Math.abs(a[f].conversionParameters.pixelPerUnit)+a[f].lineCoordinates.x1,m=a[f]._labels[a[f]._labels.length-("dateTime"===a[f].valueType?2:1)].position,m=a[f].getApparentDifference(a[f].viewportMinimum,m),E=a[f].logarithmic?(1<m?Math.log(m)/a[f].conversionParameters.lnLogarithmBase*
Math.abs(a[f].conversionParameters.pixelPerUnit):0)+a[f].lineCoordinates.x1:(0<m?m*Math.abs(a[f].conversionParameters.pixelPerUnit):0)+a[f].lineCoordinates.x1));if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateValueToPixelConversionParameters(),d[f].calculateBreaksSizeInValues(),d[f]._labels&&1<d[f]._labels.length&&(A=(d[f].logarithmic?Math.log(d[f]._labels[1].position/d[f].viewportMinimum)/d[f].conversionParameters.lnLogarithmBase:d[f]._labels[1].position-d[f].viewportMinimum)*Math.abs(d[f].conversionParameters.pixelPerUnit)+
d[f].lineCoordinates.x1,m=d[f]._labels[d[f]._labels.length-("dateTime"===d[f].valueType?2:1)].position,m=d[f].getApparentDifference(d[f].viewportMinimum,m),E=d[f].logarithmic?(1<m?Math.log(m)/d[f].conversionParameters.lnLogarithmBase*Math.abs(d[f].conversionParameters.pixelPerUnit):0)+d[f].lineCoordinates.x1:(0<m?m*Math.abs(d[f].conversionParameters.pixelPerUnit):0)+d[f].lineCoordinates.x1);for(f=0;f<n.length;f++)"axisY"===n[f].type&&(n[f].calculateValueToPixelConversionParameters(),n[f].calculateBreaksSizeInValues());
if(0<v){if(a&&0<a.length)for(f=0;f<a.length;f++)r=M[v-1][f]===M[v][f]?!0:!1;else r=!0;if(d&&0<d.length)for(f=0;f<d.length;f++)H=N[v-1][f]===N[v][f]?!0:!1;else H=!0;if(b&&0<b.length)for(f=0;f<b.length;f++)I=O[v-1][f]===O[v][f]?!0:!1;else I=!0;if(c&&0<c.length)for(f=0;f<c.length;f++)L=Q[v-1][f]===Q[v][f]?!0:!1;else L=!0}if(r&&H&&I&&L)break;v++}if(a&&0<a.length)for(f=0;f<a.length;f++)a[f].calculateStripLinesThicknessInValues(),a[f].calculateBreaksInPixels();if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateStripLinesThicknessInValues(),
d[f].calculateBreaksInPixels();if(b&&0<b.length)for(f=0;f<b.length;f++)b[f].calculateStripLinesThicknessInValues(),b[f].calculateBreaksInPixels();if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].calculateStripLinesThicknessInValues(),c[f].calculateBreaksInPixels()}else{q=[];A=[];F=[];z=[];E=[];t=[];M=[];for(N=[];4>v;){V=U=R=S=$=K=W=e=Q=O=G=X=0;if(a&&0<a.length)for(F=[],f=U=0;f<a.length;f++)F.push(Math.ceil(a[f]?a[f].createLabelsAndCalculateWidth():0)),U+=F[f],e+=a[f]&&!p.isNavigator?a[f].margin:0;else F.push(Math.ceil(a[0]?
a[0].createLabelsAndCalculateWidth():0));M.push(F);if(d&&0<d.length)for(z=[],f=V=0;f<d.length;f++)z.push(Math.ceil(d[f]?d[f].createLabelsAndCalculateWidth():0)),V+=z[f],W+=d[f]?d[f].margin:0;else z.push(Math.ceil(d[0]?d[0].createLabelsAndCalculateWidth():0));N.push(z);if(b&&0<b.length)for(f=0;f<b.length;f++)b[f].lineCoordinates={},m=Math.round(g.x1+U+e),k=Math.round(g.x2-V-W>p.width-10?p.width-10:g.x2-V-W),b[f].labelAutoFit&&!u(C)&&(0<!a.length&&(m=0>b[f].labelAngle?Math.max(m,C):0===b[f].labelAngle?
Math.max(m,C/2):m),0<!d.length&&(k=0<b[f].labelAngle?k-x/2:0===b[f].labelAngle?k-x/2:k)),b[f].lineCoordinates.x1=m,b[f].lineCoordinates.x2=k,b[f].lineCoordinates.width=Math.abs(k-m),b[f].title&&(b[f]._titleTextBlock.maxWidth=0<b[f].titleMaxWidth&&b[f].titleMaxWidth<b[f].lineCoordinates.width?b[f].titleMaxWidth:b[f].lineCoordinates.width);if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].lineCoordinates={},m=Math.round(g.x1+U+e),k=Math.round(g.x2-V-W>c[f].chart.width-10?c[f].chart.width-10:g.x2-V-W),c[f]&&
c[f].labelAutoFit&&!u(D)&&(0<!a.length&&(m=0<c[f].labelAngle?Math.max(m,D):0===c[f].labelAngle?Math.max(m,D/2):m),0<!d.length&&(k-=y/2)),c[f].lineCoordinates.x1=m,c[f].lineCoordinates.x2=k,c[f].lineCoordinates.width=Math.abs(k-m),c[f].title&&(c[f]._titleTextBlock.maxWidth=0<c[f].titleMaxWidth&&c[f].titleMaxWidth<c[f].lineCoordinates.width?c[f].titleMaxWidth:c[f].lineCoordinates.width);if(b&&0<b.length)for(q=[],f=S=0;f<b.length;f++)q.push(Math.ceil(b[f]?b[f].createLabelsAndCalculateHeight():0)),S+=
q[f]+b[f].margin,K+=b[f].margin;else q.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateHeight():0));E.push(q);if(c&&0<c.length)for(A=[],f=R=0;f<c.length;f++)A.push(Math.ceil(c[f]?c[f].createLabelsAndCalculateHeight():0)),R+=A[f],$+=c[f].margin;else A.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateHeight():0));t.push(A);if(b&&0<b.length)for(f=0;f<b.length;f++)0<b[f]._labels.length&&(h=b[f]._labels[0],l=b[f]._labels[b[f]._labels.length-1],C=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+
(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),x=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(c&&0<c.length)for(f=0;f<c.length;f++)c[f]&&0<c[f]._labels.length&&(h=c[f]._labels[0],l=c[f]._labels[c[f]._labels.length-1],D=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/
180*Math.abs(h.textBlock.angle)),y=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(p.panEnabled)for(f=0;f<b.length;f++)q[f]=p.sessionVariables.axisY.height;else for(f=0;f<b.length;f++)p.sessionVariables.axisY.height=q[f];if(b&&0<b.length)for(f=b.length-1;0<=f;f--)l=Math.round(g.y2),h=Math.round(g.y2>b[f].chart.height-10?b[f].chart.height-10:g.y2),b[f].lineCoordinates.y1=l-(q[f]+b[f].margin+
X),b[f].lineCoordinates.y2=l-(q[f]+b[f].margin+X),b[f].bounds={x1:m,y1:l-(q[f]+X+b[f].margin),x2:k,y2:h-(X+b[f].margin),width:k-m,height:q[f]},b[f].title&&(b[f]._titleTextBlock.maxWidth=0<b[f].titleMaxWidth&&b[f].titleMaxWidth<b[f].lineCoordinates.width?b[f].titleMaxWidth:b[f].lineCoordinates.width),X+=q[f]+b[f].margin;if(c&&0<c.length)for(f=c.length-1;0<=f;f--)c[f]&&(l=Math.round(g.y1),h=Math.round(g.y1+(A[f]+c[f].margin+G)),c[f].lineCoordinates.y1=h,c[f].lineCoordinates.y2=h,c[f].bounds={x1:m,y1:l+
(c[f].margin+G),x2:k,y2:h,width:k-m,height:R},c[f].title&&(c[f]._titleTextBlock.maxWidth=0<c[f].titleMaxWidth&&c[f].titleMaxWidth<c[f].lineCoordinates.width?c[f].titleMaxWidth:c[f].lineCoordinates.width),G+=A[f]+c[f].margin);if(a&&0<a.length)for(f=0;f<a.length;f++){K=a[f]._labels&&0<a[f]._labels.length?a[f]._labels[0].textBlock.fontSize/2:0;m=Math.round(g.x1+e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(K,10)?Math.max(K,10):g.y1):g.y1<Math.max(K,10)?Math.max(K,10):g.y1;
k=Math.round(g.x1+U+e);h=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-S>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2-S):g.y2>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2;if(b&&0<b.length)for(K=0;K<b.length;K++)b[K]&&b[K].labelAutoFit&&(k=0>b[K].labelAngle?Math.max(k,C):0===b[K].labelAngle?Math.max(k,C/2):k,m=0>b[K].labelAngle||0===b[K].labelAngle?k-U:m);if(c&&0<c.length)for(K=0;K<c.length;K++)c[K]&&c[K].labelAutoFit&&(k=c[K].lineCoordinates.x1,m=k-U);a[f].lineCoordinates=
{x1:k-O,y1:l,x2:k-O,y2:h,height:Math.abs(h-l)};a[f].bounds={x1:k-(F[f]+O),y1:l,x2:k,y2:h,width:k-m,height:h-l};a[f].title&&(a[f]._titleTextBlock.maxWidth=0<a[f].titleMaxWidth&&a[f].titleMaxWidth<a[f].lineCoordinates.height?a[f].titleMaxWidth:a[f].lineCoordinates.height);a[f].calculateValueToPixelConversionParameters();a[f].calculateBreaksSizeInValues();O+=F[f]+a[f].margin}if(d&&0<d.length)for(f=0;f<d.length;f++){K=d[f]._labels&&0<d[f]._labels.length?d[f]._labels[0].textBlock.fontSize/2:0;m=Math.round(g.x1-
e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(K,10)?Math.max(K,10):g.y1):g.y1<Math.max(K,10)?Math.max(K,10):g.y1;k=Math.round(g.x2-V-W);h=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-S>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2-S):g.y2>p.height-Math.max(K,10)?p.height-Math.max(K,10):g.y2;if(b&&0<b.length)for(K=0;K<b.length;K++)b[K]&&b[K].labelAutoFit&&(k=0>b[K].labelAngle?Math.max(k,C):0===b[K].labelAngle?Math.max(k,C/2):k,m=0>b[K].labelAngle||0===
b[K].labelAngle?k-V:m);if(c&&0<c.length)for(K=0;K<c.length;K++)c[K]&&c[K].labelAutoFit&&(k=c[K].lineCoordinates.x2,m=k-V);d[f].lineCoordinates={x1:k+Q,y1:l,x2:k+Q,y2:h,height:Math.abs(h-l)};d[f].bounds={x1:m,y1:l,x2:k+z[f]+Q,y2:h,width:k-m,height:h-l};d[f].title&&(d[f]._titleTextBlock.maxWidth=0<d[f].titleMaxWidth&&d[f].titleMaxWidth<d[f].lineCoordinates.height?d[f].titleMaxWidth:d[f].lineCoordinates.height);d[f].calculateValueToPixelConversionParameters();d[f].calculateBreaksSizeInValues();Q+=z[f]+
d[f].margin}for(f=0;f<n.length;f++)"axisY"===n[f].type&&(n[f].calculateValueToPixelConversionParameters(),n[f].calculateBreaksSizeInValues());if(0<v){if(a&&0<a.length)for(f=0;f<a.length;f++)r=M[v-1][f]===M[v][f]?!0:!1;else r=!0;if(d&&0<d.length)for(f=0;f<d.length;f++)H=N[v-1][f]===N[v][f]?!0:!1;else H=!0;if(b&&0<b.length)for(f=0;f<b.length;f++)I=E[v-1][f]===E[v][f]?!0:!1;else I=!0;if(c&&0<c.length)for(f=0;f<c.length;f++)L=t[v-1][f]===t[v][f]?!0:!1;else L=!0}if(r&&H&&I&&L)break;v++}if(b&&0<b.length)for(f=
0;f<b.length;f++)b[f].calculateStripLinesThicknessInValues(),b[f].calculateBreaksInPixels();if(c&&0<c.length)for(f=0;f<c.length;f++)c[f].calculateStripLinesThicknessInValues(),c[f].calculateBreaksInPixels();if(a&&0<a.length)for(f=0;f<a.length;f++)a[f].calculateStripLinesThicknessInValues(),a[f].calculateBreaksInPixels();if(d&&0<d.length)for(f=0;f<d.length;f++)d[f].calculateStripLinesThicknessInValues(),d[f].calculateBreaksInPixels()}};z.render=function(a,d,b,c,e){var g=a[0]?a[0].chart:d[0].chart;
e=g.ctx;var m=g._axes;g.alignVerticalAxes&&g.alignVerticalAxes();e.save();e.beginPath();a[0]&&e.rect(5,a[0].bounds.y1,a[0].chart.width-10,a[0].bounds.height);d[0]&&e.rect(5,d[d.length-1].bounds.y1,d[0].chart.width-10,d[0].bounds.height);e.clip();if(a&&0<a.length)for(var l=0;l<a.length;l++)a[l].renderLabelsTicksAndTitle();if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderLabelsTicksAndTitle();e.restore();if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderLabelsTicksAndTitle();if(c&&0<c.length)for(l=
0;l<c.length;l++)c[l].renderLabelsTicksAndTitle();g.preparePlotArea();g=g.plotArea;e.save();e.beginPath();e.rect(g.x1,g.y1,Math.abs(g.x2-g.x1),Math.abs(g.y2-g.y1));e.clip();if(a&&0<a.length)for(l=0;l<m.length;l++)m[l].renderStripLinesOfThicknessType("value");if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderStripLinesOfThicknessType("value");if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderStripLinesOfThicknessType("value");if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderStripLinesOfThicknessType("value");
if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderInterlacedColors();if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderInterlacedColors();if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderInterlacedColors();if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderInterlacedColors();e.restore();if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderGrid(),r&&(a[l].createMask(),a[l].renderBreaksBackground());if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderGrid(),r&&(d[l].createMask(),d[l].renderBreaksBackground());
if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderGrid(),r&&(b[l].createMask(),b[l].renderBreaksBackground());if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderGrid(),r&&(c[l].createMask(),c[l].renderBreaksBackground());if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderAxisLine();if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderAxisLine();if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderAxisLine();if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderAxisLine();if(a&&0<a.length)for(l=0;l<a.length;l++)a[l].renderStripLinesOfThicknessType("pixel");
if(d&&0<d.length)for(l=0;l<d.length;l++)d[l].renderStripLinesOfThicknessType("pixel");if(b&&0<b.length)for(l=0;l<b.length;l++)b[l].renderStripLinesOfThicknessType("pixel");if(c&&0<c.length)for(l=0;l<c.length;l++)c[l].renderStripLinesOfThicknessType("pixel")};z.prototype.calculateStripLinesThicknessInValues=function(){for(var a=0;a<this.stripLines.length;a++)if(null!==this.stripLines[a].startValue&&null!==this.stripLines[a].endValue){var d=Math.min(this.stripLines[a].startValue,this.stripLines[a].endValue),
b=Math.max(this.stripLines[a].startValue,this.stripLines[a].endValue),d=this.getApparentDifference(d,b);this.stripLines[a].value=this.logarithmic?this.stripLines[a].value*Math.sqrt(Math.log(this.stripLines[a].endValue/this.stripLines[a].startValue)/Math.log(d)):this.stripLines[a].value+(Math.abs(this.stripLines[a].endValue-this.stripLines[a].startValue)-d)/2;this.stripLines[a].thickness=d;this.stripLines[a]._thicknessType="value"}};z.prototype.calculateBreaksSizeInValues=function(){for(var a="left"===
this._position||"right"===this._position?this.lineCoordinates.height||this.chart.height:this.lineCoordinates.width||this.chart.width,d=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b=this.conversionParameters.pixelPerUnit||a/(this.logarithmic?this.conversionParameters.maximum/this.conversionParameters.minimum:this.conversionParameters.maximum-this.conversionParameters.minimum),c=this.scaleBreaks&&!u(this.scaleBreaks.options.spacing),e,g=0;g<d.length;g++)e=c||!u(d[g].options.spacing),d[g].spacing=
I(d[g].spacing,a,8,e?0.1*a:8,e?0:3)<<0,d[g].size=0>d[g].spacing?0:Math.abs(d[g].spacing/b),this.logarithmic&&(d[g].size=Math.pow(this.logarithmBase,d[g].size))};z.prototype.calculateBreaksInPixels=function(){if(!(this.scaleBreaks&&0>=this.scaleBreaks._appliedBreaks.length)){var a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];a.length&&(this.scaleBreaks.firstBreakIndex=this.scaleBreaks.lastBreakIndex=null);for(var d=0;d<a.length&&!(a[d].startValue>this.conversionParameters.maximum);d++)a[d].endValue<
this.conversionParameters.minimum||(u(this.scaleBreaks.firstBreakIndex)&&(this.scaleBreaks.firstBreakIndex=d),a[d].startValue>=this.conversionParameters.minimum&&(a[d].startPixel=this.convertValueToPixel(a[d].startValue),this.scaleBreaks.lastBreakIndex=d),a[d].endValue<=this.conversionParameters.maximum&&(a[d].endPixel=this.convertValueToPixel(a[d].endValue)))}};z.prototype.renderLabelsTicksAndTitle=function(){var a=this,d=!1,b=0,c=0,e=1,g=0;0!==this.labelAngle&&360!==this.labelAngle&&(e=1.2);if("undefined"===
typeof this.options.interval){if("bottom"===this._position||"top"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var b=[],e=0!==this.labelAngle&&360!==this.labelAngle?1:1.2,m,l=this.viewportMaximum,k=this.lineCoordinates.width/Math.log(this.range),h=this._labels.length-1;0<=h;h--){q=this._labels[h];if(q.position<this.viewportMinimum)break;q.position>this.viewportMaximum||!(h===this._labels.length-1||m<Math.log(l/q.position)*k/e)||(b.push(q),l=q.position,m=
q.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(m=q.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),b+=m);b>this.lineCoordinates.width*e&&this.labelAutoFit&&(d=!0)}if("left"===this._position||"right"===this._position)if(this.logarithmic&&
!this.equidistantInterval&&this.labelAutoFit){for(var b=[],p,l=this.viewportMaximum,k=this.lineCoordinates.height/Math.log(this.range),h=this._labels.length-1;0<=h;h--){q=this._labels[h];if(q.position<this.viewportMinimum)break;q.position>this.viewportMaximum||!(h===this._labels.length-1||p<Math.log(l/q.position)*k)||(b.push(q),l=q.position,p=q.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(h=
0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(p=q.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+q.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),c+=p);c>this.lineCoordinates.height*e&&this.labelAutoFit&&(d=!0)}}this.logarithmic&&(!this.equidistantInterval&&this.labelAutoFit)&&this._labels.sort(function(a,b){return a.position-b.position});var h=0,q,n;if("bottom"===this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],
q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y+this.tickLength<<0),this.ctx.stroke()),0===q.textBlock.angle?(n.x-=q.textBlock.width/2,n.y="inside"===this.labelPlacement?
n.y-(this.tickLength+q.textBlock.fontSize/2):n.y+this.tickLength+q.textBlock.fontSize/2):(n.x="inside"===this.labelPlacement?0>this.labelAngle?n.x:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x-(0>this.labelAngle?q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0>this.labelAngle?n.y-this.tickLength-5:n.y-this.tickLength-Math.abs(q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5):n.y+this.tickLength+Math.abs(0>this.labelAngle?q.textBlock.width*
Math.sin(Math.PI/180*this.labelAngle)-5:5)),q.textBlock.x=n.x,q.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();
a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y-a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y2-this._titleTextBlock.height-3,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("top"===this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],
q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y-this.tickLength<<0),this.ctx.stroke()),0===q.textBlock.angle?(n.x-=q.textBlock.width/2,n.y="inside"===this.labelPlacement?
n.y+this.labelFontSize/2+this.tickLength+5:n.y-(this.tickLength+q.textBlock.height-q.textBlock.fontSize/2)):(n.x="inside"===this.labelPlacement?0<this.labelAngle?n.x:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x+(q.textBlock.height-this.tickLength-this.labelFontSize)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0<this.labelAngle?n.y+this.tickLength+5:n.y-q.textBlock.width*Math.sin(Math.PI/
180*this.labelAngle)+this.tickLength+5:n.y-(this.tickLength+((q.textBlock.height-q.textBlock.fontSize/2)*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))),q.textBlock.x=n.x,q.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&
(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y+a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y1+1,this.titleMaxWidth=
this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("left"===this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<
0,c),this.ctx.lineTo(n.x-this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?(q.textBlock.y=n.y,q.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5):(q.textBlock.y="inside"===this.labelPlacement?n.y:n.y-q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),q.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:0<this.labelAngle?n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-
this.tickLength-5:n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(q.textBlock.height-q.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;
a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x+a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x1+1,this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("right"===
this._position){for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(q.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<0,c),this.ctx.lineTo(n.x+this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?
(q.textBlock.y=n.y,q.textBlock.x="inside"===this.labelPlacement?n.x-q.textBlock.width-this.tickLength-5:n.x+this.tickLength+5):(q.textBlock.y="inside"===this.labelPlacement?n.y-q.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0>this.labelAngle?n.y:n.y-(q.textBlock.height-q.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),q.textBlock.x="inside"===this.labelPlacement?n.x-q.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:0<this.labelAngle?n.x+(q.textBlock.height-
q.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:n.x+this.tickLength+5));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(h=0;h<a._labels.length;h++)if(q=a._labels[h],!(q.position<a.viewportMinimum||q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(q.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<
0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x-a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x2-1,this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}g=0;if("inside"===this.labelPlacement)this.chart.addEventListener("dataAnimationIterationEnd",
function(){for(h=0;h<a._labels.length;h++)q=a._labels[h],q.position<a.viewportMinimum||(q.position>a.viewportMaximum||d&&0!==g++%2&&a.labelAutoFit)||(a.ctx.save(),a.ctx.beginPath(),q.textBlock.render(!0),a.ctx.restore())},this);else for(h=0;h<this._labels.length;h++)q=this._labels[h],q.position<this.viewportMinimum||(q.position>this.viewportMaximum||d&&0!==g++%2&&this.labelAutoFit)||q.textBlock.render(!0)};z.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,d,b,c=this.chart.plotArea,
e=0;d=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)d?(d=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(Math.min(b.x,d.x),c.y1,Math.abs(b.x-d.x),Math.abs(c.y1-c.y2)),d=!1):d=!0;else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=
this.interlacedColor,e=0;e<this._labels.length;e++)d?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),d=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(c.x1,Math.min(b.y,d.y),Math.abs(c.x1-c.x2),Math.abs(d.y-b.y)),d=!1):d=!0;a.beginPath()};z.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a){for(var d=this,b,c=0,e=0,g=!1,m=!1,l=[],k=[],
m=!1,c=0;c<this.stripLines.length;c++){var h=this.stripLines[c];h._thicknessType===a&&("pixel"===a&&(h.value<this.viewportMinimum||h.value>this.viewportMaximum||u(h.value)||isNaN(this.range))||l.push(h))}for(c=0;c<this._stripLineLabels.length;c++)if(h=this.stripLines[c],b=this._stripLineLabels[c],!(b.position<this.viewportMinimum||b.position>this.viewportMaximum||isNaN(this.range))){a=this.getPixelCoordinatesOnAxis(b.position);if("outside"===b.stripLine.labelPlacement)if(h&&(this.ctx.strokeStyle=
h.color,"pixel"===h._thicknessType&&(this.ctx.lineWidth=h.thickness)),"bottom"===this._position){var p=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0;this.ctx.beginPath();this.ctx.moveTo(p,a.y<<0);this.ctx.lineTo(p,a.y+this.tickLength<<0);this.ctx.stroke();0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y+=this.tickLength+b.textBlock.fontSize/2):(a.x-=0>this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,a.y+=this.tickLength+Math.abs(0>this.labelAngle?b.textBlock.width*Math.sin(Math.PI/
180*this.labelAngle)-5:5))}else"top"===this._position?(p=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,this.ctx.beginPath(),this.ctx.moveTo(p,a.y<<0),this.ctx.lineTo(p,a.y-this.tickLength<<0),this.ctx.stroke(),0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y-=this.tickLength+b.textBlock.height):(a.x+=(b.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),a.y-=this.tickLength+(b.textBlock.height*
Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))):"left"===this._position?(p=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,p),this.ctx.lineTo(a.x-this.tickLength<<0,p),this.ctx.stroke(),0===this.labelAngle?a.x=a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:(a.y-=b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x-b.textBlock.width*
Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength)):"right"===this._position&&(p=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,p),this.ctx.lineTo(a.x+this.tickLength<<0,p),this.ctx.stroke(),0===this.labelAngle?a.x=a.x+this.tickLength+5:(a.y=0>this.labelAngle?a.y:a.y-(b.textBlock.height-b.textBlock.fontSize/
2-5)*Math.cos(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:a.x+this.tickLength+5));else b.textBlock.angle=-90,"bottom"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?u(h.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/
2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,u(h.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y1+b.textBlock.width+3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-b.textBlock.width-3:"center"===
b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y1+3):"top"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?u(h.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,u(h.startValue)?a.x+=
b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+b.textBlock.width+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y2-3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y2-
b.textBlock.width-3):"left"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-b.textBlock.height>this.chart.plotArea.y1?u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/
2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x2-b.textBlock.width-3):"right"===this._position&&(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-+b.textBlock.height>this.chart.plotArea.y1?
u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2-3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:u(h.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x1+
3);b.textBlock.x=a.x;b.textBlock.y=a.y;k.push(b)}if(!m){m=!1;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();for(c=0;c<l.length;c++)h=l[c],h.showOnTop?g||(g=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();
for(e=0;e<l.length;e++)h=l[e],h.showOnTop&&h.render();this.ctx.restore()},h)):h.render();for(c=0;c<k.length;c++)b=k[c],b.stripLine.showOnTop?m||(m=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<k.length;e++)b=k[e],"inside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&(d.ctx.save(),d.ctx.beginPath(),d.ctx.rect(d.chart.plotArea.x1,d.chart.plotArea.y1,d.chart.plotArea.width,d.chart.plotArea.height),d.ctx.clip(),b.textBlock.render(!0),d.ctx.restore())},b.textBlock)):
"inside"===b.stripLine.labelPlacement&&b.textBlock.render(!0);this.ctx.restore();m=!0}if(m)for(m=!1,c=0;c<k.length;c++)b=k[c],b.stripLine.showOnTop?m||(m=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<k.length;e++)b=k[e],"outside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&b.textBlock.render(!0)},b.textBlock)):"outside"===b.stripLine.labelPlacement&&b.textBlock.render(!0)}};z.prototype.renderBreaksBackground=function(){this.chart._breaksCanvas&&(this.scaleBreaks&&
0<this.scaleBreaks._appliedBreaks.length&&this.maskCanvas)&&(this.chart._breaksCanvasCtx.save(),this.chart._breaksCanvasCtx.beginPath(),this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height),this.chart._breaksCanvasCtx.clip(),this.chart._breaksCanvasCtx.drawImage(this.maskCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx.restore())};z.prototype.createMask=function(){if(this.scaleBreaks&&0<this.scaleBreaks._appliedBreaks.length){var a=
this.scaleBreaks._appliedBreaks;r?(this.maskCanvas=ta(this.chart.width,this.chart.height),this.maskCtx=this.maskCanvas.getContext("2d")):(this.maskCanvas=this.chart.plotArea.canvas,this.maskCtx=this.chart.plotArea.ctx);this.maskCtx.save();this.maskCtx.beginPath();this.maskCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.maskCtx.clip();for(var d=0;d<a.length;d++)a[d].endValue<this.viewportMinimum||(a[d].startValue>this.viewportMaximum||
isNaN(this.range))||a[d].render(this.maskCtx);this.maskCtx.restore()}};z.prototype.renderCrosshair=function(a,d){this.crosshair.render(a,d)};z.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=this.chart.ctx;a.save();var d,b=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.setLineDash&&a.setLineDash(R(this.gridDashType,this.gridThickness));if("bottom"===this._position||"top"===this._position)for(c=0;c<this._labels.length;c++)this._labels[c].position<
this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),d=this.getPixelCoordinatesOnAxis(this._labels[c].position),d=1===a.lineWidth%2?(d.x<<0)+0.5:d.x<<0,a.moveTo(d,b.y1<<0),a.lineTo(d,b.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var c=0;c<this._labels.length;c++)this._labels[c].position<this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),
d=this.getPixelCoordinatesOnAxis(this._labels[c].position),d=1===a.lineWidth%2?(d.y<<0)+0.5:d.y<<0,a.moveTo(b.x1<<0,d),a.lineTo(b.x2<<0,d),a.stroke());a.restore()}};z.prototype.renderAxisLine=function(){var a=this.chart.ctx,d=r?this.chart._preRenderCtx:a,b=Math.ceil(this.tickThickness/(this.reversed?-2:2)),c=Math.ceil(this.tickThickness/(this.reversed?2:-2)),e,g;d.save();if("bottom"===this._position||"top"===this._position){if(this.lineThickness){this.reversed?(e=this.lineCoordinates.x2,g=this.lineCoordinates.x1):
(e=this.lineCoordinates.x1,g=this.lineCoordinates.x2);d.lineWidth=this.lineThickness;d.strokeStyle=this.lineColor?this.lineColor:"black";d.setLineDash&&d.setLineDash(R(this.lineDashType,this.lineThickness));var m=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;d.beginPath();if(this.scaleBreaks&&!u(this.scaleBreaks.firstBreakIndex))if(u(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+c;else for(var l=
this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)d.moveTo(e,m),d.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel+b,m),e=this.scaleBreaks._appliedBreaks[l].endPixel+c;e&&(d.moveTo(e,m),d.lineTo(g,m));d.stroke()}}else if(("left"===this._position||"right"===this._position)&&this.lineThickness){this.reversed?(e=this.lineCoordinates.y1,g=this.lineCoordinates.y2):(e=this.lineCoordinates.y2,g=this.lineCoordinates.y1);d.lineWidth=this.lineThickness;d.strokeStyle=this.lineColor;
d.setLineDash&&d.setLineDash(R(this.lineDashType,this.lineThickness));m=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0;d.beginPath();if(this.scaleBreaks&&!u(this.scaleBreaks.firstBreakIndex))if(u(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+b;else for(l=this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)d.moveTo(m,e),d.lineTo(m,this.scaleBreaks._appliedBreaks[l].startPixel+c),
e=this.scaleBreaks._appliedBreaks[l].endPixel+b;e&&(d.moveTo(m,e),d.lineTo(m,g));d.stroke()}r&&(a.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx&&this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),d.clearRect(0,0,this.chart.width,this.chart.height));d.restore()};z.prototype.getPixelCoordinatesOnAxis=function(a){var d={};if("bottom"===this._position||"top"===this._position)d.x=this.convertValueToPixel(a),
d.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)d.y=this.convertValueToPixel(a),d.x=this.lineCoordinates.x2;return d};z.prototype.convertPixelToValue=function(a){if("undefined"===typeof a)return null;var d=0,b=0,c,d=!0,e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b="number"===typeof a?a:"left"===this._position||"right"===this._position?a.y:a.x;if(this.logarithmic){a=c=Math.pow(this.logarithmBase,(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit);
if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(d)if(e[b].startValue<this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size))<e[b].endValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].endValue/this.conversionParameters.minimum/
Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue)),c/=Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue));d=!1}else if(c>e[b].startValue/this.conversionParameters.minimum){c/=e[b].startValue/this.conversionParameters.minimum;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/
e[b].size;c/=e[b].size;d=!1}else break;else if(c>e[b].startValue/e[b-1].endValue){c/=e[b].startValue/e[b-1].endValue;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/e[b].size;c/=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(d)if(e[b].endValue>this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/
e[b].startValue,Math.log(c)/Math.log(e[b].size))>e[b].startValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].startValue/this.conversionParameters.minimum*Math.pow(e[b].size,Math.log(e[b].startValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue))*c,c*=Math.pow(e[b].size,Math.log(this.conversionParameters.minimum/e[b].startValue)/Math.log(e[b].endValue/e[b].startValue));d=!1}else if(c<e[b].endValue/this.conversionParameters.minimum){c/=
e[b].endValue/this.conversionParameters.minimum;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size;d=!1}else break;else if(c<e[b].endValue/e[b+1].startValue){c/=e[b].endValue/e[b+1].startValue;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size}else break;
d=a*this.viewportMinimum}else{a=c=(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit;if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(d)if(e[b].startValue<this.conversionParameters.minimum){if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-e[b].startValue)/e[b].size<e[b].endValue){a=0>=e[b].size?0:c*(e[b].endValue-
e[b].startValue)/e[b].size;break}else a+=e[b].endValue-this.conversionParameters.minimum-e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue),c-=e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue);d=!1}else if(c>e[b].startValue-this.conversionParameters.minimum){c-=e[b].startValue-this.conversionParameters.minimum;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-
e[b].startValue-e[b].size;c-=e[b].size;d=!1}else break;else if(c>e[b].startValue-e[b-1].endValue){c-=e[b].startValue-e[b-1].endValue;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-e[b].startValue-e[b].size;c-=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(d)if(e[b].endValue>this.conversionParameters.minimum)if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-
e[b].startValue)/e[b].size>e[b].startValue){a=0>=e[b].size?0:c*(e[b].endValue-e[b].startValue)/e[b].size;break}else a+=e[b].startValue-this.conversionParameters.minimum+e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),c+=e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),d=!1;else if(c<e[b].endValue-this.conversionParameters.minimum){c-=e[b].endValue-this.conversionParameters.minimum;if(c>-1*e[b].size){a+=(e[b].endValue-
e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size;d=!1}else break;else if(c<e[b].endValue-e[b+1].startValue){c-=e[b].endValue-e[b+1].startValue;if(c>-1*e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size}else break;d=this.conversionParameters.minimum+a}return d};z.prototype.convertValueToPixel=function(a){a=this.getApparentDifference(this.conversionParameters.minimum,
a,a);return this.logarithmic?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*Math.log(a/this.conversionParameters.minimum)/this.conversionParameters.lnLogarithmBase+0.5<<0:"axisX"===this.type?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5<<0:this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5};z.prototype.getApparentDifference=function(a,
d,b,c){var e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];if(this.logarithmic){b=u(b)?d/a:b;for(var g=0;g<e.length&&!(d<e[g].startValue);g++)a>e[g].endValue||(a<=e[g].startValue&&d>=e[g].endValue?b=b/e[g].endValue*e[g].startValue*e[g].size:a>=e[g].startValue&&d>=e[g].endValue?b=b/e[g].endValue*a*Math.pow(e[g].size,Math.log(e[g].endValue/a)/Math.log(e[g].endValue/e[g].startValue)):a<=e[g].startValue&&d<=e[g].endValue?b=b/d*e[g].startValue*Math.pow(e[g].size,Math.log(d/e[g].startValue)/Math.log(e[g].endValue/
e[g].startValue)):!c&&(a>e[g].startValue&&d<e[g].endValue)&&(b=a*Math.pow(e[g].size,Math.log(d/a)/Math.log(e[g].endValue/e[g].startValue))))}else for(b=u(b)?Math.abs(d-a):b,g=0;g<e.length&&!(d<e[g].startValue);g++)a>e[g].endValue||(a<=e[g].startValue&&d>=e[g].endValue?b=b-e[g].endValue+e[g].startValue+e[g].size:a>e[g].startValue&&d>=e[g].endValue?b=b-e[g].endValue+a+e[g].size*(e[g].endValue-a)/(e[g].endValue-e[g].startValue):a<=e[g].startValue&&d<e[g].endValue?b=b-d+e[g].startValue+e[g].size*(d-e[g].startValue)/
(e[g].endValue-e[g].startValue):!c&&(a>e[g].startValue&&d<e[g].endValue)&&(b=a+e[g].size*(d-a)/(e[g].endValue-e[g].startValue)));return b};z.prototype.setViewPortRange=function(a,d){this.sessionVariables.newViewportMinimum=this.viewportMinimum=Math.min(a,d);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,d)};z.prototype.getXValueAt=function(a){if(!a)return null;var d=null;"left"===this._position?d=this.convertPixelToValue(a.y):"bottom"===this._position&&(d=this.convertPixelToValue(a.x));
return d};z.prototype.calculateValueToPixelConversionParameters=function(a){a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];var d={pixelPerUnit:null,minimum:null,reference:null},b=this.lineCoordinates.width,c=this.lineCoordinates.height,b="bottom"===this._position||"top"===this._position?b:c,c=Math.abs(this.range);if(this.logarithmic)for(var e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=a[e].startValue&&this.viewportMaximum<=
a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*this.viewportMinimum,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):
b-Math.min(a[e].spacing,0.1*b)*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):this.viewportMinimum<=a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c/this.viewportMaximum*a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)));
else for(e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=a[e].startValue&&this.viewportMaximum<=a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+this.viewportMinimum,
b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(a[e].endValue-this.viewportMinimum)/(a[e].endValue-a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*(a[e].endValue-this.viewportMinimum)/(a[e].endValue-a[e].startValue)):this.viewportMinimum<=a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c-this.viewportMaximum+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)):
b-Math.min(a[e].spacing,0.1*b)*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)));d.minimum=this.viewportMinimum;d.maximum=this.viewportMaximum;d.range=c;if("bottom"===this._position||"top"===this._position)this.logarithmic?(d.lnLogarithmBase=Math.log(this.logarithmBase),d.pixelPerUnit=(this.reversed?-1:1)*b*d.lnLogarithmBase/Math.log(Math.abs(c))):d.pixelPerUnit=(this.reversed?-1:1)*b/Math.abs(c),d.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===
this._position||"right"===this._position)this.logarithmic?(d.lnLogarithmBase=Math.log(this.logarithmBase),d.pixelPerUnit=(this.reversed?1:-1)*b*d.lnLogarithmBase/Math.log(Math.abs(c))):d.pixelPerUnit=(this.reversed?1:-1)*b/Math.abs(c),d.reference=this.reversed?this.lineCoordinates.y1:this.lineCoordinates.y2;this.conversionParameters=d};z.prototype.calculateAxisParameters=function(){if(this.logarithmic)this.calculateLogarithmicAxisParameters();else{var a=this.chart.layoutManager.getFreeSpace(),d=!1,
b=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?"xySwapped"===this.chart.plotInfo.axisPlacement?62:70:"xySwapped"===this.chart.plotInfo.axisPlacement?50:40,c=4;"axisX"===this.type&&(c=600>this.maxWidth?8:6);var a=Math.max(c,Math.floor(this.maxWidth/a)),e,g,m,c=0;!u(this.options.viewportMinimum)&&(!u(this.options.viewportMaximum)&&this.options.viewportMinimum>=this.options.viewportMaximum)&&
(this.viewportMinimum=this.viewportMaximum=null);if(u(this.options.viewportMinimum)&&!u(this.sessionVariables.newViewportMinimum)&&!isNaN(this.sessionVariables.newViewportMinimum))this.viewportMinimum=this.sessionVariables.newViewportMinimum;else if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(u(this.options.viewportMaximum)&&!u(this.sessionVariables.newViewportMaximum)&&!isNaN(this.sessionVariables.newViewportMaximum))this.viewportMaximum=this.sessionVariables.newViewportMaximum;
else if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;if(this.scaleBreaks)for(c=0;c<this.scaleBreaks._appliedBreaks.length;c++)if((!u(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue||!u(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[c].startValue||!u(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue)&&
(!u(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue||!u(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[c].endValue||!u(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue)){this.scaleBreaks._appliedBreaks.splice(c,1);break}if("axisX"===this.type){if(this.dataSeries&&0<this.dataSeries.length)for(e=0;e<this.dataSeries.length;e++)"dateTime"===this.dataSeries[e].xValueType&&
(b=!0);e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin;g=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax;0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c);Infinity!==this.dataInfo.minDiff?m=this.dataInfo.minDiff:1<g-e?m=0.5*Math.abs(g-e):(m=1,b&&(d=!0))}else"axisY"===this.type&&(e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,g=null!==this.viewportMaximum?this.viewportMaximum:
this.dataInfo.viewPortMax,isFinite(e)||isFinite(g)?isFinite(e)?isFinite(g)||(g=e):e=g:(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,
null,!0)),0.05),0!==g&&(g+=c),0!==e&&(e-=c)),m=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&0<e&&(e=0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>g&&(g=0));c=this.getApparentDifference(isNaN(this.viewportMinimum)||null===this.viewportMinimum?e:this.viewportMinimum,isNaN(this.viewportMaximum)||null===this.viewportMaximum?g:this.viewportMaximum,null,
!0);if("axisX"===this.type&&b){this.intervalType||(c/1<=a?(this.interval=1,this.intervalType="millisecond"):c/2<=a?(this.interval=2,this.intervalType="millisecond"):c/5<=a?(this.interval=5,this.intervalType="millisecond"):c/10<=a?(this.interval=10,this.intervalType="millisecond"):c/20<=a?(this.interval=20,this.intervalType="millisecond"):c/50<=a?(this.interval=50,this.intervalType="millisecond"):c/100<=a?(this.interval=100,this.intervalType="millisecond"):c/200<=a?(this.interval=200,this.intervalType=
"millisecond"):c/250<=a?(this.interval=250,this.intervalType="millisecond"):c/300<=a?(this.interval=300,this.intervalType="millisecond"):c/400<=a?(this.interval=400,this.intervalType="millisecond"):c/500<=a?(this.interval=500,this.intervalType="millisecond"):c/(1*S.secondDuration)<=a?(this.interval=1,this.intervalType="second"):c/(2*S.secondDuration)<=a?(this.interval=2,this.intervalType="second"):c/(5*S.secondDuration)<=a?(this.interval=5,this.intervalType="second"):c/(10*S.secondDuration)<=a?(this.interval=
10,this.intervalType="second"):c/(15*S.secondDuration)<=a?(this.interval=15,this.intervalType="second"):c/(20*S.secondDuration)<=a?(this.interval=20,this.intervalType="second"):c/(30*S.secondDuration)<=a?(this.interval=30,this.intervalType="second"):c/(1*S.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):c/(2*S.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):c/(5*S.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):c/(10*S.minuteDuration)<=a?(this.interval=
10,this.intervalType="minute"):c/(15*S.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):c/(20*S.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):c/(30*S.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):c/(1*S.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):c/(2*S.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):c/(3*S.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):c/(6*S.hourDuration)<=a?(this.interval=6,this.intervalType=
"hour"):c/(1*S.dayDuration)<=a?(this.interval=1,this.intervalType="day"):c/(2*S.dayDuration)<=a?(this.interval=2,this.intervalType="day"):c/(4*S.dayDuration)<=a?(this.interval=4,this.intervalType="day"):c/(1*S.weekDuration)<=a?(this.interval=1,this.intervalType="week"):c/(2*S.weekDuration)<=a?(this.interval=2,this.intervalType="week"):c/(3*S.weekDuration)<=a?(this.interval=3,this.intervalType="week"):c/(1*S.monthDuration)<=a?(this.interval=1,this.intervalType="month"):c/(2*S.monthDuration)<=a?(this.interval=
2,this.intervalType="month"):c/(3*S.monthDuration)<=a?(this.interval=3,this.intervalType="month"):c/(6*S.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=c/(1*S.yearDuration)<=a?1:c/(2*S.yearDuration)<=a?2:c/(4*S.yearDuration)<=a?4:Math.floor(z.getNiceNumber(c/(a-1),!0)/S.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=e-m/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=
g+m/2;d?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?this.autoValueFormatString="MMM YYYY":"week"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString=
"hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType="number";c=z.getNiceNumber(c,!1);this.interval=this.options&&0<this.options.interval?this.options.interval:z.getNiceNumber(c/(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?e-m/2:Math.floor(e/this.interval)*this.interval;if(null===this.viewportMaximum||
isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?g+m/2:Math.ceil(g/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this.options.viewportMinimum?this.viewportMaximum+=10:0===this.options.viewportMaximum&&(this.viewportMinimum-=10),this.options&&"undefined"===typeof this.options.interval&&(this.interval=z.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(e=
null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c),m=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1):"axisY"===this.type&&(e=null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(e)||isFinite(g)?0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),
5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,null,!0)),0.05),0!==g&&(g+=c),0!==e&&(e-=c)):(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),m=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&(null===this.minimum||
isNaN(this.minimum))&&0<e&&(e=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>g&&(g=0)),Math.abs(this.getApparentDifference(e,g,null,!0)),"axisX"===this.type&&b){this.valueType="dateTime";if(null===this.minimum||isNaN(this.minimum))this.minimum=e-m/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=g+m/2}else this.intervalType=this.valueType="number",null===this.minimum&&(this.minimum="axisX"===this.type?e-m/2:Math.floor(e/this.interval)*this.interval,this.minimum=Math.min(this.minimum,
null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?g+m/2:Math.ceil(g/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this.options.minimum?this.maximum+=10:0===
this.options.maximum&&(this.minimum-=10));u(this.sessionVariables.newViewportMinimum)&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));u(this.sessionVariables.newViewportMaximum)&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.range=this.viewportMaximum-this.viewportMinimum;this.intervalStartPosition="axisX"===this.type&&b?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+0.2*this.interval)/
this.interval)*this.interval;this.valueFormatString||(this.valueFormatString=z.generateValueFormatString(this.range,2))}};z.prototype.calculateLogarithmicAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),d=Math.log(this.logarithmBase),b;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?7:Math.max(7,Math.floor(this.maxWidth/100)):Math.max(Math.floor(this.maxWidth/
50),3),c,e,g,m;m=1;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;if(this.scaleBreaks)for(m=0;m<this.scaleBreaks._appliedBreaks.length;m++)if((!u(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[m].startValue||!u(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[m].startValue||
!u(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[m].startValue)&&(!u(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[m].endValue||!u(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[m].endValue||!u(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[m].endValue)){this.scaleBreaks._appliedBreaks.splice(m,1);break}"axisX"===this.type?
(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,1===e/c&&(m=Math.pow(this.logarithmBase,"undefined"===typeof this.options.interval?0.4:this.options.interval),e*=m,c/=m),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,
e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0>=c&&!isFinite(e)?(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1):0>=c?c=e:isFinite(e)||(e=c),1===c&&1===e?(e*=this.logarithmBase-1/this.logarithmBase,c=1):1===e/c?(m=Math.min(e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),e*=m,c/=m):c>e?(m=Math.min(c/e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),1<=e?c=e/m:e=c*m):(m=Math.min(e/c*Math.pow(this.logarithmBase,
0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=m),1!==c&&(c/=m)),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&1<c&&(c=1),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&1>e&&(e=1));m=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)/(isNaN(this.viewportMinimum)||null===
this.viewportMinimum?c:this.viewportMinimum);var l=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);this.intervalType="number";m=Math.pow(this.logarithmBase,z.getNiceNumber(Math.abs(Math.log(m)/d),!1));this.options&&0<this.options.interval?this.interval=this.options.interval:(this.interval=z.getNiceExponent(Math.log(m)/d/(a-1),!0),b=z.getNiceNumber(l/(a-1),!0));if(null===this.viewportMinimum||
isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/d/this.interval));if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/d/this.interval));1===this.viewportMaximum&&1===this.viewportMinimum&&(1===this.options.viewportMinimum?this.viewportMaximum*=this.logarithmBase-1/this.logarithmBase:
1===this.options.viewportMaximum&&(this.viewportMinimum/=this.logarithmBase-1/this.logarithmBase),this.options&&"undefined"===typeof this.options.interval&&(this.interval=z.getNiceExponent(Math.ceil(Math.log(m)/d)/(a-1)),b=z.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)));if(null===this.minimum||null===this.maximum)"axisX"===this.type?(c=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,1===e/c&&(m=Math.pow(this.logarithmBase,
"undefined"===typeof this.options.interval?0.4:this.options.interval),e*=m,c/=m),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(c)||isFinite(e)?1===c&&1===e?(e*=this.logarithmBase,c/=this.logarithmBase):1===e/c?(m=Math.pow(this.logarithmBase,this.interval),e*=m,c/=m):c>e?(m=
Math.min(0.01*(c/e),5),1<=e?c=e/m:e=c*m):(m=Math.min(e/c*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=m),1!==c&&(c/=m)):(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&1<c&&(c=1),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&
1>e&&(e=1)),this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/d/this.interval)),this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?"undefined"===typeof this.sessionVariables.newViewportMinimum?Infinity:this.sessionVariables.newViewportMinimum:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum=
"axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/d/this.interval)),this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?"undefined"===typeof this.sessionVariables.newViewportMaximum?0:this.sessionVariables.newViewportMaximum:this.sessionVariables.viewportMaximum)),1===this.maximum&&1===this.minimum&&(1===this.options.minimum?this.maximum*=this.logarithmBase-1/this.logarithmBase:
1===this.options.maximum&&(this.minimum/=this.logarithmBase-1/this.logarithmBase));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.viewportMinimum>this.viewportMaximum&&(!this.options.viewportMinimum&&!this.options.minimum||this.options.viewportMaximum||this.options.maximum?this.options.viewportMinimum||this.options.minimum||!this.options.viewportMaximum&&!this.options.maximum||(this.viewportMinimum=this.minimum=
(this.options.viewportMaximum||this.options.maximum)/Math.pow(this.logarithmBase,2*Math.ceil(this.interval))):this.viewportMaximum=this.maximum=this.options.viewportMinimum||this.options.minimum);c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(d*this.interval)+0.2)*this.interval);this.range=this.viewportMaximum/this.viewportMinimum;this.noTicks=a;if(!this.options.interval&&this.range<Math.pow(this.logarithmBase,8>this.viewportMaximum||3>a?2:3)){for(d=Math.floor(this.viewportMinimum/
b+0.5)*b;d<this.viewportMinimum;)d+=b;this.equidistantInterval=!1;this.intervalStartPosition=d;this.interval=b}else this.options.interval||(b=Math.ceil(this.interval),this.range>this.interval&&(this.interval=b,c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(d*this.interval)+0.2)*this.interval))),this.equidistantInterval=!0,this.intervalStartPosition=c;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",1>this.viewportMinimum)){d=Math.floor(Math.abs(Math.log(this.viewportMinimum)/
Math.LN10))+2;if(isNaN(d)||!isFinite(d))d=2;if(2<d)for(m=0;m<d-2;m++)this.valueFormatString+="#"}};z.generateValueFormatString=function(a,d){var b="#,##0.",c=d;1>a&&(c+=Math.floor(Math.abs(Math.log(a)/Math.LN10)),isNaN(c)||!isFinite(c))&&(c=d);for(var e=0;e<c;e++)b+="#";return b};z.getNiceExponent=function(a,d){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=0>b?1>=c?1:5>=c?5:10:Math.max(Math.floor(c),1);return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};z.getNiceNumber=
function(a,d){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=d?1.5>c?1:3>c?2:7>c?5:10:1>=c?1:2>=c?2:5>=c?5:10;return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};z.prototype.getLabelStartPoint=function(){var a=S[this.intervalType+"Duration"]*this.interval,a=new Date(Math.floor(this.viewportMinimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===
this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===
this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<
a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};qa(Q,V);qa(L,V);L.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var d=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Fa(this.parent[this.optionsName]),d=this.parent.options[this.optionsName].indexOf(this.options));
this.options="undefined"===typeof a?{}:a;this.parent.options[this.optionsName][d]=this.options}};L.prototype.render=function(a){if(0!==this.spacing||0!==this.options.lineThickness&&("undefined"!==typeof this.options.lineThickness||0!==this.parent.lineThickness)){var d=this.ctx,b=this.ctx.globalAlpha;this.ctx=a||this.ctx;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();var c=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
e=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);this.ctx.strokeStyle=this.lineColor;this.ctx.fillStyle=this.color;this.ctx.beginPath();this.ctx.globalAlpha=1;N(this.id);var g,m,l,k,h,p;a=Math.max(this.spacing,3);var q=Math.max(0,this.lineThickness);this.ctx.lineWidth=q;this.ctx.setLineDash&&this.ctx.setLineDash(R(this.lineDashType,q));if("bottom"===this.scaleBreaks.parent._position||"top"===this.scaleBreaks.parent._position)if(c=1===q%2?(c.x<<0)+0.5:c.x<<0,m=1===q%2?(e.x<<0)+0.5:
e.x<<0,"top"===this.scaleBreaks.parent._position?(e=this.chart.plotArea.y1,l=this.chart.plotArea.y2+q/2+0.5<<0):(e=this.chart.plotArea.y2,l=this.chart.plotArea.y1-q/2+0.5<<0,a*=-1),this.bounds={x1:c-q/2,y1:e,x2:m+q/2,y2:l},this.ctx.moveTo(c,e),"straight"===this.type||"top"===this.scaleBreaks.parent._position&&0>=a||"bottom"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(c,l),this.ctx.lineTo(m,l),this.ctx.lineTo(m,e);else if("wavy"===this.type){k=c;h=e;g=0.5;p=(l-h)/a/3;for(var n=0;n<p;n++)this.ctx.bezierCurveTo(k+
g*a,h+a,k+g*a,h+2*a,k,h+3*a),h+=3*a,g*=-1;this.ctx.bezierCurveTo(k+g*a,h+a,k+g*a,h+2*a,k,h+3*a);k=m;g*=-1;this.ctx.lineTo(k,h);for(n=0;n<p;n++)this.ctx.bezierCurveTo(k+g*a,h-a,k+g*a,h-2*a,k,h-3*a),h-=3*a,g*=-1}else{if("zigzag"===this.type){g=-1;h=e+a;k=c+a;p=(l-h)/a/2;for(n=0;n<p;n++)this.ctx.lineTo(k,h),k+=2*g*a,h+=2*a,g*=-1;this.ctx.lineTo(k,h);k+=m-c;for(n=0;n<p+1;n++)this.ctx.lineTo(k,h),k+=2*g*a,h-=2*a,g*=-1;this.ctx.lineTo(k+g*a,h+a)}}else if("left"===this.scaleBreaks.parent._position||"right"===
this.scaleBreaks.parent._position)if(e=1===q%2?(e.y<<0)+0.5:e.y<<0,l=1===q%2?(c.y<<0)+0.5:c.y<<0,"left"===this.scaleBreaks.parent._position?(c=this.chart.plotArea.x1,m=this.chart.plotArea.x2+q/2+0.5<<0):(c=this.chart.plotArea.x2,m=this.chart.plotArea.x1-q/2+0.5<<0,a*=-1),this.bounds={x1:c,y1:e-q/2,x2:m,y2:l+q/2},this.ctx.moveTo(c,e),"straight"===this.type||"left"===this.scaleBreaks.parent._position&&0>=a||"right"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(m,e),this.ctx.lineTo(m,l),
this.ctx.lineTo(c,l);else if("wavy"===this.type){k=c;h=e;g=0.5;p=(m-k)/a/3;for(n=0;n<p;n++)this.ctx.bezierCurveTo(k+a,h+g*a,k+2*a,h+g*a,k+3*a,h),k+=3*a,g*=-1;this.ctx.bezierCurveTo(k+a,h+g*a,k+2*a,h+g*a,k+3*a,h);h=l;g*=-1;this.ctx.lineTo(k,h);for(n=0;n<p;n++)this.ctx.bezierCurveTo(k-a,h+g*a,k-2*a,h+g*a,k-3*a,h),k-=3*a,g*=-1}else if("zigzag"===this.type){g=1;h=e-a;k=c+a;p=(m-k)/a/2;for(n=0;n<p;n++)this.ctx.lineTo(k,h),h+=2*g*a,k+=2*a,g*=-1;this.ctx.lineTo(k,h);h+=l-e;for(n=0;n<p+1;n++)this.ctx.lineTo(k,
h),h+=2*g*a,k-=2*a,g*=-1;this.ctx.lineTo(k+a,h+g*a)}0<q&&this.ctx.stroke();this.ctx.closePath();this.ctx.globalAlpha=this.fillOpacity;this.ctx.globalCompositeOperation="destination-over";this.ctx.fill();this.ctx.restore();this.ctx.globalAlpha=b;this.ctx=d}};qa(X,V);X.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var d=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Fa(this.parent.stripLines),d=this.parent.options.stripLines.indexOf(this.options));
this.options="undefined"===typeof a?{}:a;this.parent.options.stripLines[d]=this.options}};X.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),d=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness);if(0<d){var b=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var c=this.ctx.globalAlpha;this.ctx.globalAlpha=b;N(this.id);var e,g,m,l;this.ctx.lineWidth=
d;this.ctx.setLineDash&&this.ctx.setLineDash(R(this.lineDashType,d));if("bottom"===this.parent._position||"top"===this.parent._position)e=g=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,m=this.chart.plotArea.y1,l=this.chart.plotArea.y2,this.bounds={x1:e-d/2,y1:m,x2:g+d/2,y2:l};else if("left"===this.parent._position||"right"===this.parent._position)m=l=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,e=this.chart.plotArea.x1,g=this.chart.plotArea.x2,this.bounds={x1:e,y1:m-d/2,x2:g,y2:l+d/2};this.ctx.moveTo(e,
m);this.ctx.lineTo(g,l);this.ctx.stroke();this.ctx.globalAlpha=c}this.ctx.restore()};qa(fa,V);fa.prototype.render=function(a,d){var b,c,e,g,m=null,l=m=null,k="";if(!this.valueFormatString)if("dateTime"===this.parent.valueType)this.valueFormatString=this.parent.valueFormatString;else{var h=0,h="xySwapped"===this.chart.plotInfo.axisPlacement?50<this.parent.range?0:500<this.chart.width&&25>this.parent.range?2:Math.floor(Math.abs(Math.log(this.parent.range)/Math.LN10))+(5>this.parent.range?2:10>this.parent.range?
1:0):50<this.parent.range?0:Math.floor(Math.abs(Math.log(this.parent.range)/Math.LN10))+(5>this.parent.range?2:10>this.parent.range?1:0);this.valueFormatString=z.generateValueFormatString(this.parent.range,h)}var l=null===this.opacity?1:this.opacity,h=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness),p=this.chart.overlaidCanvasCtx,q=p.globalAlpha;p.globalAlpha=l;p.beginPath();p.strokeStyle=this.color;p.lineWidth=h;p.save();this.labelFontSize=
u(this.options.labelFontSize)?this.parent.labelFontSize:this.labelFontSize;if("left"===this.parent._position||"right"===this.parent._position)this.labelMaxWidth=u(this.options.labelMaxWidth)?this.parent.bounds.x2-this.parent.bounds.x1:this.labelMaxWidth,this.labelMaxHeight=u(this.options.labelWrap)||this.labelWrap?3*this.chart.height:2*this.labelFontSize;else if("top"===this.parent._position||"bottom"===this.parent._position)this.labelMaxWidth=u(this.options.labelMaxWidth)?3*this.chart.width:this.labelMaxWidth,
this.labelMaxHeight=u(this.options.labelWrap)||this.labelWrap?this.parent.bounds.height:2*this.labelFontSize;0<h&&p.setLineDash&&p.setLineDash(R(this.lineDashType,h));l=new ka(p,{x:0,y:0,padding:{top:2,right:3,bottom:2,left:4},backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxWidth:this.labelMaxWidth,maxHeight:this.labelMaxHeight,angle:this.labelAngle,text:k,horizontalAlign:"left",fontSize:this.labelFontSize,
fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"});if(this.snapToDataPoint){var n=0,m=[];if("xySwapped"===this.chart.plotInfo.axisPlacement){var f=null;if("bottom"===this.parent._position||"top"===this.parent._position)n=this.parent.dataSeries[0].axisX.convertPixelToValue({y:d});else if("left"===this.parent._position||"right"===this.parent._position)n=this.parent.convertPixelToValue({y:d});for(var r=0;r<
this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(f.dataSeries=this.parent.dataSeries[r],null!==f.dataPoint.y&&m.push(f));f=null;if(0===m.length)return;m.sort(function(a,b){return a.distance-b.distance});f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y));r=0;if("rangeBar"===m[0].dataSeries.type||"error"===m[0].dataSeries.type)for(var f=Math.abs(a-this.parent.convertValueToPixel(m[r].dataPoint.y[0])),v=0,n=0;n<m.length;n++)if(m[n].dataPoint.y&&
m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=n);else if("stackedBar"===m[0].dataSeries.type)for(var f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y)),D=v=0,n=r=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),
v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,v=Math.abs(a-this.parent.convertValueToPixel(D)),v<f&&(f=v,r=n);else if("stackedBar100"===m[0].dataSeries.type)for(var f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y)),t=D=v=0,n=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?m[n].dataPoint.x.getTime():m[n].dataPoint.x,
t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),v=Math.abs(a-this.parent.convertValueToPixel(t)),v<f&&(f=v,r=n);else for(f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=r=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(a-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=n);k=m[r];if("bottom"===this.parent._position||
"top"===this.parent._position){b=0;if("rangeBar"===this.parent.dataSeries[r].type||"error"===this.parent.dataSeries[r].type){f=Math.abs(a-this.parent.convertValueToPixel(k.dataPoint.y[0]));for(n=v=0;n<k.dataPoint.y.length;n++)v=Math.abs(a-this.parent.convertValueToPixel(k.dataPoint.y[n])),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y[b])<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,
axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y[b]}):u(this.options.label)?ba(k.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar"===this.parent.dataSeries[r].type){f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y));D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,v=Math.abs(a-this.parent.convertValueToPixel(D)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(D)<<0)+0.5:this.parent.convertValueToPixel(D)<<0;
l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar100"===this.parent.dataSeries[r].type){f=Math.abs(a-this.parent.convertValueToPixel(m[0].dataPoint.y));t=D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?m[n].dataPoint.x.getTime():m[n].dataPoint.x,t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),
v=Math.abs(a-this.parent.convertValueToPixel(t)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(t)<<0)+0.5:this.parent.convertValueToPixel(t)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:t}):u(this.options.label)?ba(t,this.valueFormatString,this.chart._cultureInfo):this.label}else m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y)<<
0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label;b=c=m;e=this.chart.plotArea.y1;g=this.chart.plotArea.y2;this.bounds={x1:b-h/2,y1:e,x2:c+h/2,y2:g};l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2?l.x=this.chart.bounds.x2-l.width:l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);l.y=this.parent.lineCoordinates.y2+
l.fontSize/2+2}else if("left"===this.parent._position||"right"===this.parent._position){e=g=m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.x)<<0;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;this.bounds={x1:b,y1:e-h/2,x2:c,y2:g+h/2};t=!1;if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===this.parent.type)for(n=
this.parent.convertPixelToValue({y:d}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):
u(this.options.label)?Ca(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?ba(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-
l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}}else if("bottom"===this.parent._position||"top"===this.parent._position){n=this.parent.convertPixelToValue({x:a});for(r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(f.dataSeries=this.parent.dataSeries[r],
null!==f.dataPoint.y&&m.push(f));if(0===m.length)return;m.sort(function(a,b){return a.distance-b.distance});k=m[0];b=c=m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.x)<<0;e=this.chart.plotArea.y1;g=this.chart.plotArea.y2;this.bounds={x1:b-h/2,y1:e,x2:c+h/2,y2:g};t=!1;if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===
this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,
value:k.dataPoint.x}):u(this.options.label)?Ca(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.x}):u(this.options.label)?ba(k.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&
(l.x=this.chart.bounds.x1);"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position){!u(this.parent.dataSeries)&&0<this.parent.dataSeries.length&&(n=this.parent.dataSeries[0].axisX.convertPixelToValue({x:a}));for(r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&
(f.dataSeries=this.parent.dataSeries[r],null!==f.dataPoint.y&&m.push(f));if(0===m.length)return;m.sort(function(a,b){return a.distance-b.distance});r=0;if("rangeColumn"===m[0].dataSeries.type||"rangeArea"===m[0].dataSeries.type||"error"===m[0].dataSeries.type||"rangeSplineArea"===m[0].dataSeries.type||"candlestick"===m[0].dataSeries.type||"ohlc"===m[0].dataSeries.type||"boxAndWhisker"===m[0].dataSeries.type)for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y[0])),n=v=0;n<m.length;n++)if(m[n].dataPoint.y&&
m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=n);else if("stackedColumn"===m[0].dataSeries.type||"stackedArea"===m[0].dataSeries.type)for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=D=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),
v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,v=Math.abs(d-this.parent.convertValueToPixel(D)),v<f&&(f=v,r=n);else if("stackedColumn100"===m[0].dataSeries.type||"stackedArea100"===m[0].dataSeries.type)for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=t=D=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?
m[n].dataPoint.x.getTime():m[n].dataPoint.x,t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),v=Math.abs(d-this.parent.convertValueToPixel(t)),v<f&&(f=v,r=n);else for(f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y)),n=v=0;n<m.length;n++)if(m[n].dataPoint.y&&m[n].dataPoint.y.length)for(k=0;k<m[n].dataPoint.y.length;k++)v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y[k])),v<f&&(f=v,r=n);else v=Math.abs(d-this.parent.convertValueToPixel(m[n].dataPoint.y)),v<f&&(f=v,r=
n);k=m[r];b=0;if("rangeColumn"===this.parent.dataSeries[r].type||"rangeArea"===this.parent.dataSeries[r].type||"error"===this.parent.dataSeries[r].type||"rangeSplineArea"===this.parent.dataSeries[r].type||"candlestick"===this.parent.dataSeries[r].type||"ohlc"===this.parent.dataSeries[r].type||"boxAndWhisker"===this.parent.dataSeries[r].type){f=Math.abs(d-this.parent.convertValueToPixel(k.dataPoint.y[0]));for(n=v=0;n<k.dataPoint.y.length;n++)v=Math.abs(d-this.parent.convertValueToPixel(k.dataPoint.y[n])),
v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y[b])<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y[b]}):u(this.options.label)?ba(k.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedColumn"===this.parent.dataSeries[r].type||"stackedArea"===this.parent.dataSeries[r].type){f=Math.abs(d-
this.parent.convertValueToPixel(m[0].dataPoint.y));D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,v=Math.abs(d-this.parent.convertValueToPixel(D)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(D)<<0)+0.5:this.parent.convertValueToPixel(D)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedColumn100"===
this.parent.dataSeries[r].type||"stackedArea100"===this.parent.dataSeries[r].type){f=Math.abs(d-this.parent.convertValueToPixel(m[0].dataPoint.y));D=v=0;for(n=r;0<=n;n--)D+=m[n].dataPoint.y,t=m[n].dataPoint.x.getTime?m[n].dataPoint.x.getTime():m[n].dataPoint.x,t=100*(D/m[n].dataSeries.plotUnit.dataPointYSums[t]),v=Math.abs(d-this.parent.convertValueToPixel(t)),v<f&&(f=v,b=n);m=1===p.lineWidth%2?(this.parent.convertValueToPixel(t)<<0)+0.5:this.parent.convertValueToPixel(t)<<0;l.text=this.labelFormatter?
this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:t}):u(this.options.label)?ba(t,this.valueFormatString,this.chart._cultureInfo):this.label}else"waterfall"===this.parent.dataSeries[r].type?(m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataSeries.dataPointEOs[k.index].cumulativeSum)<<0)+0.5:this.parent.convertValueToPixel(k.dataSeries.dataPointEOs[k.index].cumulativeSum)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,
crosshair:this.options,value:k.dataSeries.dataPointEOs[k.index].cumulativeSum}):u(this.options.label)?ba(k.dataSeries.dataPointEOs[k.index].cumulativeSum,this.valueFormatString,this.chart._cultureInfo):this.label):(m=1===p.lineWidth%2?(this.parent.convertValueToPixel(k.dataPoint.y)<<0)+0.5:this.parent.convertValueToPixel(k.dataPoint.y)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:k.dataPoint.y}):u(this.options.label)?ba(k.dataPoint.y,
this.valueFormatString,this.chart._cultureInfo):this.label);e=g=m;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;this.bounds={x1:b,y1:e-h/2,x2:c,y2:g+h/2};l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===
this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}m=null;("bottom"===this.parent._position||"top"===this.parent._position)&&(b>=this.parent.convertValueToPixel(this.parent.viewportMinimum)&&c<=this.parent.convertValueToPixel(this.parent.viewportMaximum))&&(0<h&&(p.moveTo(b,e),p.lineTo(c,g),p.stroke()),p.restore(),!u(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0));("left"===this.parent._position||"right"===this.parent._position)&&(g>=this.parent.convertValueToPixel(this.parent.viewportMaximum)&&
e<=this.parent.convertValueToPixel(this.parent.viewportMinimum))&&(0<h&&(p.moveTo(b,e),p.lineTo(c,g),p.stroke()),p.restore(),!u(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0))}else{if("bottom"===this.parent._position||"top"===this.parent._position)b=c=m=1===p.lineWidth%2?(a<<0)+0.5:a<<0,e=this.chart.plotArea.y1,g=this.chart.plotArea.y2,this.bounds={x1:b-h/2,y1:e,x2:c+h/2,y2:g};else if("left"===this.parent._position||"right"===this.parent._position)e=g=m=1===p.lineWidth%
2?(d<<0)+0.5:d<<0,b=this.chart.plotArea.x1,c=this.chart.plotArea.x2,this.bounds={x1:b,y1:e-h/2,x2:c,y2:g+h/2};if("xySwapped"===this.chart.plotInfo.axisPlacement)if("left"===this.parent._position||"right"===this.parent._position){t=!1;if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({y:d}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=
this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(d)}):u(this.options.label)?Ca(this.parent.convertPixelToValue(d),
this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(d)}):u(this.options.label)?ba(this.parent.convertPixelToValue(d),this.valueFormatString,this.chart._cultureInfo):this.label);l.y=d+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-
l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x1-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}else{if("bottom"===this.parent._position||"top"===this.parent._position)l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):u(this.options.label)?
ba(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label,l.x=b-l.measureText().width/2,l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width),l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1),"bottom"===this.parent._position&&(l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2),"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("bottom"===this.parent._position||"top"===this.parent._position){t=
!1;k="";if(this.parent.labels)for(m=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=m)if(this.parent.labels[n])t=!0;else{t=!1;break}if(t){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),f=null,r=0;r<this.parent.dataSeries.length;r++)(f=this.parent.dataSeries[r].getDataPointAtX(n,!0))&&0<=f.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):
u(this.options.label)?f.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):u(this.options.label)?Ca(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,
value:0<this.parent.dataSeries.length?this.parent.convertPixelToValue(a):""}):u(this.options.label)?ba(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+
l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position)l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(d)}):u(this.options.label)?ba(this.parent.convertPixelToValue(d),this.valueFormatString,this.chart._cultureInfo):this.label,l.y=d+l.fontSize/2-l.measureText().height/2+2,l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-
l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2),"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2);0<h&&(p.moveTo(b,e),p.lineTo(c,g),p.stroke());p.restore();!u(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0)}p.globalAlpha=q};qa($,V);$.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");
this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.pointerEvents="none";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: auto;";a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";
a+="font-weight: normal;";a+="font-style: "+(r?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=r?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";
r||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};$.prototype.mouseMoveHandler=function(a,d){this._lastUpdated&&4>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),
this.chart.resetOverlayedCanvas(),this._updateToolTip(a,d))};$.prototype._updateToolTip=function(a,d,b){b="undefined"===typeof b?!0:b;this.container||this._initialize();this.enabled||this.hide();if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===typeof d){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;d=this._prevY}else this._prevX=a,this._prevY=d;var c=null,e=null,g=[],k=0;if(this.shared&&this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){if("xySwapped"===
this.chart.plotInfo.axisPlacement){var l=[];if(this.chart.axisX)for(var p=0;p<this.chart.axisX.length;p++){for(var k=this.chart.axisX[p].convertPixelToValue({y:d}),h=null,c=0;c<this.chart.axisX[p].dataSeries.length;c++)(h=this.chart.axisX[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX[p].dataSeries[c],null!==h.dataPoint.y&&l.push(h));h=null}if(this.chart.axisX2)for(p=0;p<this.chart.axisX2.length;p++){k=this.chart.axisX2[p].convertPixelToValue({y:d});h=null;for(c=
0;c<this.chart.axisX2[p].dataSeries.length;c++)(h=this.chart.axisX2[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX2[p].dataSeries[c],null!==h.dataPoint.y&&l.push(h));h=null}}else{l=[];if(this.chart.axisX)for(p=0;p<this.chart.axisX.length;p++)for(k=this.chart.axisX[p].convertPixelToValue({x:a}),h=null,c=0;c<this.chart.axisX[p].dataSeries.length;c++)(h=this.chart.axisX[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX[p].dataSeries[c],
null!==h.dataPoint.y&&l.push(h));if(this.chart.axisX2)for(p=0;p<this.chart.axisX2.length;p++)for(k=this.chart.axisX2[p].convertPixelToValue({x:a}),h=null,c=0;c<this.chart.axisX2[p].dataSeries.length;c++)(h=this.chart.axisX2[p].dataSeries[c].getDataPointAtX(k,b))&&0<=h.index&&(h.dataSeries=this.chart.axisX2[p].dataSeries[c],null!==h.dataPoint.y&&l.push(h))}if(0===l.length)return;l.sort(function(a,b){return a.distance-b.distance});b=l[0];for(c=0;c<l.length;c++)l[c].dataPoint.x.valueOf()===b.dataPoint.x.valueOf()&&
g.push(l[c]);l=null}else{if(h=this.chart.getDataPointAtXY(a,d,b))this.currentDataPointIndex=h.dataPointIndex,this.currentSeriesIndex=h.dataSeries.index;else if(r)if(h=ab(a,d,this.chart._eventManager.ghostCtx),0<h&&"undefined"!==typeof this.chart._eventManager.objectMap[h]){h=this.chart._eventManager.objectMap[h];if("legendItem"===h.objectType)return;this.currentSeriesIndex=h.dataSeriesIndex;this.currentDataPointIndex=0<=h.dataPointIndex?h.dataPointIndex:-1}else this.currentDataPointIndex=-1;else this.currentDataPointIndex=
-1;if(0<=this.currentSeriesIndex){e=this.chart.data[this.currentSeriesIndex];h={};if(0<=this.currentDataPointIndex)c=e.dataPoints[this.currentDataPointIndex],h.dataSeries=e,h.dataPoint=c,h.index=this.currentDataPointIndex,h.distance=Math.abs(c.x-k),"waterfall"===e.type&&(h.cumulativeSumYStartValue=e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue,h.cumulativeSum=e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);else{if(!this.enabled||"line"!==e.type&&"stepLine"!==e.type&&
"spline"!==e.type&&"area"!==e.type&&"stepArea"!==e.type&&"splineArea"!==e.type&&"stackedArea"!==e.type&&"stackedArea100"!==e.type&&"rangeArea"!==e.type&&"rangeSplineArea"!==e.type&&"candlestick"!==e.type&&"ohlc"!==e.type&&"boxAndWhisker"!==e.type)return;k=e.axisX.convertPixelToValue({x:a});h=e.getDataPointAtX(k,b);h.dataSeries=e;this.currentDataPointIndex=h.index;c=h.dataPoint}if(!u(h.dataPoint.y))if(h.dataSeries.axisY)if(0<h.dataPoint.y.length){for(c=b=0;c<h.dataPoint.y.length;c++)h.dataPoint.y[c]<
h.dataSeries.axisY.viewportMinimum?b--:h.dataPoint.y[c]>h.dataSeries.axisY.viewportMaximum&&b++;b<h.dataPoint.y.length&&b>-h.dataPoint.y.length&&g.push(h)}else"column"===e.type||"bar"===e.type?0>h.dataPoint.y?0>h.dataSeries.axisY.viewportMinimum&&h.dataSeries.axisY.viewportMaximum>=h.dataPoint.y&&g.push(h):h.dataSeries.axisY.viewportMinimum<=h.dataPoint.y&&0<=h.dataSeries.axisY.viewportMaximum&&g.push(h):"bubble"===e.type?(b=this.chart._eventManager.objectMap[e.dataPointIds[h.index]].size/2,h.dataPoint.y>=
h.dataSeries.axisY.viewportMinimum-b&&h.dataPoint.y<=h.dataSeries.axisY.viewportMaximum+b&&g.push(h)):"waterfall"===e.type?(b=0,h.cumulativeSumYStartValue<h.dataSeries.axisY.viewportMinimum?b--:h.cumulativeSumYStartValue>h.dataSeries.axisY.viewportMaximum&&b++,h.cumulativeSum<h.dataSeries.axisY.viewportMinimum?b--:h.cumulativeSum>h.dataSeries.axisY.viewportMaximum&&b++,2>b&&-2<b&&g.push(h)):(0<=h.dataSeries.type.indexOf("100")||"stackedColumn"===e.type||"stackedBar"===e.type||h.dataPoint.y>=h.dataSeries.axisY.viewportMinimum&&
h.dataPoint.y<=h.dataSeries.axisY.viewportMaximum)&&g.push(h);else g.push(h)}}if(0<g.length&&(this.highlightObjects(g),this.enabled))if(b="",b=this.getToolTipInnerHTML({entries:g}),null!==b){this.contentDiv.innerHTML=b;b=!1;"none"===this.container.style.display&&(b=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:r?"rgba(255,255,255,.9)":"rgb(255,255,255)",this.borderColor="waterfall"===g[0].dataSeries.type?this.contentDiv.style.borderRightColor=
this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:0<g[0].dataPoint.y?g[0].dataSeries.risingColor:g[0].dataSeries.fallingColor:"error"===g[0].dataSeries.type?this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataSeries.color?g[0].dataSeries.color:g[0].dataSeries._colorSet[e.index%
g[0].dataSeries._colorSet.length]:this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:g[0].dataSeries.color?g[0].dataSeries.color:g[0].dataSeries._colorSet[g[0].index%g[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=this.cornerRadius||
0===this.cornerRadius?this.cornerRadius+"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=this.fontStyle?this.fontStyle:
r?"italic":"normal"}catch(s){}"pie"===g[0].dataSeries.type||"doughnut"===g[0].dataSeries.type||"funnel"===g[0].dataSeries.type||"pyramid"===g[0].dataSeries.type||"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||"stackedBar100"===g[0].dataSeries.type?a=a-10-this.container.clientWidth:(a=g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x)-this.container.clientWidth<<0,a-=10);0>a&&(a+=this.container.clientWidth+20);a+this.container.clientWidth>
Math.max(this.chart.container.clientWidth,this.chart.width)&&(a=Math.max(0,Math.max(this.chart.container.clientWidth,this.chart.width)-this.container.clientWidth));d=1!==g.length||this.shared||"line"!==g[0].dataSeries.type&&"stepLine"!==g[0].dataSeries.type&&"spline"!==g[0].dataSeries.type&&"area"!==g[0].dataSeries.type&&"stepArea"!==g[0].dataSeries.type&&"splineArea"!==g[0].dataSeries.type?"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||"stackedBar100"===
g[0].dataSeries.type?g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x):d:g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);d=-d+10;0<d+this.container.clientHeight+5&&(d-=d+this.container.clientHeight+5-0);this.fixMozTransitionDelay(a,d);!this.animationEnabled||b?this.disableAnimation():(this.enableAnimation(),this.container.style.MozTransition=this.mozContainerTransition);this.container.style.left=a+"px";this.container.style.bottom=d+"px"}else this.hide(!1)}};$.prototype.highlightObjects=
function(a){var d=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();d.clearRect(0,0,this.chart.width,this.chart.height);d.save();var b=this.chart.plotArea,c=0;d.beginPath();d.rect(b.x1,b.y1,b.x2-b.x1,b.y2-b.y1);d.clip();for(b=0;b<a.length;b++){var e=a[b];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&"dataPoint"===e.objectType){var c=this.chart.data[e.dataSeriesIndex],g=c.dataPoints[e.dataPointIndex],k=e.dataPointIndex;!1===g.highlightEnabled||
!0!==c.highlightEnabled&&!0!==g.highlightEnabled||("line"===c.type||"stepLine"===c.type||"spline"===c.type||"scatter"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type?(g=c.getMarkerProperties(k,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),ia.drawMarkers([g]),
"undefined"!==typeof e.y2&&(g=c.getMarkerProperties(k,e.x1,e.y2,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),ia.drawMarkers([g]))):"bubble"===c.type?(g=c.getMarkerProperties(k,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=e.size,g.color="white",g.borderColor="white",d.globalAlpha=0.3,ia.drawMarkers([g]),d.globalAlpha=1):"column"===c.type||"stackedColumn"===c.type||"stackedColumn100"===
c.type||"bar"===c.type||"rangeBar"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"rangeColumn"===c.type||"waterfall"===c.type?ea(d,e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===c.type||"doughnut"===c.type?ja(d,e.center,e.radius,"white",c.type,e.startAngle,e.endAngle,0.3,e.percentInnerRadius):"funnel"===c.type||"pyramid"===c.type?ra(d,e.funnelSection,0.3,"white"):"candlestick"===c.type?(d.globalAlpha=1,d.strokeStyle=e.color,d.lineWidth=2*e.borderThickness,c=0===d.lineWidth%
2?0:0.5,d.beginPath(),d.moveTo(e.x3-c,Math.min(e.y2,e.y3)),d.lineTo(e.x3-c,Math.min(e.y1,e.y4)),d.stroke(),d.beginPath(),d.moveTo(e.x3-c,Math.max(e.y1,e.y4)),d.lineTo(e.x3-c,Math.max(e.y2,e.y3)),d.stroke(),ea(d,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,e.y4),"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),d.globalAlpha=1):"ohlc"===c.type?(d.globalAlpha=1,d.strokeStyle=e.color,d.lineWidth=2*e.borderThickness,c=0===d.lineWidth%2?0:0.5,d.beginPath(),d.moveTo(e.x3-c,e.y2),d.lineTo(e.x3-c,e.y3),
d.stroke(),d.beginPath(),d.moveTo(e.x3,e.y1),d.lineTo(e.x1,e.y1),d.stroke(),d.beginPath(),d.moveTo(e.x3,e.y4),d.lineTo(e.x2,e.y4),d.stroke(),d.globalAlpha=1):"boxAndWhisker"===c.type?(d.save(),d.globalAlpha=1,d.strokeStyle=e.stemColor,d.lineWidth=2*e.stemThickness,0<e.stemThickness&&(d.beginPath(),d.moveTo(e.x3,e.y2+e.borderThickness/2),d.lineTo(e.x3,e.y1+e.whiskerThickness/2),d.stroke(),d.beginPath(),d.moveTo(e.x3,e.y4-e.whiskerThickness/2),d.lineTo(e.x3,e.y3-e.borderThickness/2),d.stroke()),d.beginPath(),
ea(d,e.x1-e.borderThickness/2,Math.max(e.y2+e.borderThickness/2,e.y3+e.borderThickness/2),e.x2+e.borderThickness/2,Math.min(e.y2-e.borderThickness/2,e.y3-e.borderThickness/2),"transparent",e.borderThickness,e.color,!1,!1,!1,!1),d.globalAlpha=1,d.strokeStyle=e.whiskerColor,d.lineWidth=2*e.whiskerThickness,0<e.whiskerThickness&&(d.beginPath(),d.moveTo(Math.floor(e.x3-e.whiskerLength/2),e.y4),d.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y4),d.stroke(),d.beginPath(),d.moveTo(Math.floor(e.x3-e.whiskerLength/
2),e.y1),d.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y1),d.stroke()),d.globalAlpha=1,d.strokeStyle=e.lineColor,d.lineWidth=2*e.lineThickness,0<e.lineThickness&&(d.beginPath(),d.moveTo(e.x1,e.y5),d.lineTo(e.x2,e.y5),d.stroke()),d.restore(),d.globalAlpha=1):"error"===c.type&&E(d,e.x1,e.y1,e.x2,e.y2,"white",e.whiskerProperties,e.stemProperties,e.isXYSwapped,0.3))}}d.restore();d.globalAlpha=1;d.beginPath()};$.prototype.getToolTipInnerHTML=function(a){a=a.entries;for(var d=null,b=null,c=null,e=0,g="",
k=!0,l=0;l<a.length;l++)if(a[l].dataSeries.toolTipContent||a[l].dataPoint.toolTipContent){k=!1;break}if(k&&(this.content&&"function"===typeof this.content||this.contentFormatter))a={chart:this.chart,toolTip:this.options,entries:a},d=this.contentFormatter?this.contentFormatter(a):this.content(a);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var p=null,h="",l=0;l<a.length;l++)b=a[l].dataSeries,c=a[l].dataPoint,e=a[l].index,g="",0===l&&(k&&!this.content)&&(this.chart.axisX&&0<
this.chart.axisX.length?h+="undefined"!==typeof this.chart.axisX[0].labels[c.x]?this.chart.axisX[0].labels[c.x]:"{x}":this.chart.axisX2&&0<this.chart.axisX2.length&&(h+="undefined"!==typeof this.chart.axisX2[0].labels[c.x]?this.chart.axisX2[0].labels[c.x]:"{x}"),h+="</br>",h=this.chart.replaceKeywordsWithValue(h,c,b,e)),null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent||("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===
b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?
this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}",p=b.axisXIndex):"bubble"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"):
"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"):"candlestick"===
b.type||"ohlc"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"):"boxAndWhisker"===
b.type&&(this.chart.axisX&&1<this.chart.axisX.length&&(g+=p!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
null===d&&(d=""),!0===this.reversed?(d=this.chart.replaceKeywordsWithValue(g,c,b,e)+d,l<a.length-1&&(d="</br>"+d)):(d+=this.chart.replaceKeywordsWithValue(g,c,b,e),l<a.length-1&&(d+="</br>")));null!==d&&(d=h+d)}else{b=a[0].dataSeries;c=a[0].dataPoint;e=a[0].index;if(null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent)return null;"line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===
b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}":"bubble"===b.type?g=c.toolTipContent?
c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":
"'color:{color};'")+"\"'>"+(c.name?"{name}:</span>&nbsp;&nbsp;":c.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}":"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}":
"candlestick"===b.type||"ohlc"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}":"boxAndWhisker"===b.type&&(g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:
this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
null===d&&(d="");d+=this.chart.replaceKeywordsWithValue(g,c,b,e)}return d};$.prototype.enableAnimation=function(){if(!this.container.style.WebkitTransition){var a=this.getContainerTransition(this.containerTransitionDuration);this.container.style.WebkitTransition=a;this.container.style.MsTransition=a;this.container.style.transition=a;this.container.style.MozTransition=this.mozContainerTransition}};$.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition=
"",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};$.prototype.hide=function(a){this.container&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};$.prototype.show=function(a,d,b){this._updateToolTip(a,d,"undefined"===typeof b?!1:b)};$.prototype.fixMozTransitionDelay=function(a,d){if(20<this.chart._eventManager.lastObjectId)this.mozContainerTransition=
this.getContainerTransition(0);else{var b=parseFloat(this.container.style.left),b=isNaN(b)?0:b,c=parseFloat(this.container.style.bottom),c=isNaN(c)?0:c;10<Math.sqrt(Math.pow(b-a,2)+Math.pow(c-d,2))?this.mozContainerTransition=this.getContainerTransition(0.1):this.mozContainerTransition=this.getContainerTransition(0)}};$.prototype.getContainerTransition=function(a){return"left "+a+"s ease-out 0s, bottom "+a+"s ease-out 0s"};ha.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.eventObjects=[];r&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};ha.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};ha.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var d=[],b=Ra(a),c=null;if((c=this.chart.getObjectAtXY(b.x,b.y,!1))&&"undefined"!==typeof this.objectMap[c])if(c=this.objectMap[c],"dataPoint"===c.objectType){var e=this.chart.data[c.dataSeriesIndex],
g=e.dataPoints[c.dataPointIndex],k=c.dataPointIndex;c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:k,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:g,userContext:g,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};d.push(c);c=this.objectMap[e.id];c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:k,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:e,userContext:e.options,mouseover:"mouseover",
mousemove:"mousemove",mouseout:"mouseout",click:"click"};d.push(this.objectMap[e.id])}else"legendItem"===c.objectType&&(e=this.chart.data[c.dataSeriesIndex],g=null!==c.dataPointIndex?e.dataPoints[c.dataPointIndex]:null,c.eventParameter={x:b.x,y:b.y,dataSeries:e.options,dataPoint:g,dataPointIndex:c.dataPointIndex,dataSeriesIndex:c.dataSeriesIndex,chart:this.chart},c.eventContext={context:this.chart.legend,userContext:this.chart.legend.options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",
click:"itemclick"},d.push(c));e=[];for(b=0;b<this.mouseoveredObjectMaps.length;b++){g=!0;for(c=0;c<d.length;c++)if(d[c].id===this.mouseoveredObjectMaps[b].id){g=!1;break}g?this.fireEvent(this.mouseoveredObjectMaps[b],"mouseout",a):e.push(this.mouseoveredObjectMaps[b])}this.mouseoveredObjectMaps=e;for(b=0;b<d.length;b++){e=!1;for(c=0;c<this.mouseoveredObjectMaps.length;c++)if(d[b].id===this.mouseoveredObjectMaps[c].id){e=!0;break}e||(this.fireEvent(d[b],"mouseover",a),this.mouseoveredObjectMaps.push(d[b]));
"click"===a.type?this.fireEvent(d[b],"click",a):"mousemove"===a.type&&this.fireEvent(d[b],"mousemove",a)}}};ha.prototype.fireEvent=function(a,d,b){if(a&&d){var c=a.eventParameter,e=a.eventContext,g=a.eventContext.userContext;g&&(e&&g[e[d]])&&g[e[d]].call(g,c);"mouseout"!==d?g.cursor&&g.cursor!==b.target.style.cursor&&(b.target.style.cursor=g.cursor):(b.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===d&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&
this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],c);"click"===d&&("dataPoint"===a.objectType&&this.chart.funnelPyramidClickHandler)&&this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex],c)}};ga.prototype.animate=function(a,d,b,c,e){var g=this;this.chart.isAnimating=!0;e=e||M.easing.linear;b&&this.animations.push({startTime:(new Date).getTime()+(a?a:0),duration:d,animationCallback:b,onComplete:c});for(a=[];0<this.animations.length;)if(d=this.animations.shift(),
b=(new Date).getTime(),c=0,d.startTime<=b&&(c=e(Math.min(b-d.startTime,d.duration),0,1,d.duration),c=Math.min(c,1),isNaN(c)||!isFinite(c))&&(c=1),1>c&&a.push(d),d.animationCallback(c),1<=c&&d.onComplete)d.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){g.animate.call(g)}):this.chart.isAnimating=!1};ga.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,
this.animationRequestId);this.animationRequestId=null;this.chart.isAnimating=!1};var M={yScaleAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas,e=d.animationBase;b.drawImage(c,0,0,c.width,c.height,0,e-e*a,b.canvas.width/W,a*b.canvas.height/W)}},xScaleAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas,e=d.animationBase;b.drawImage(c,0,0,c.width,c.height,e-e*a,0,a*b.canvas.width/W,b.canvas.height/W)}},xClipAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas;
b.save();0<a&&b.drawImage(c,0,0,c.width*a,c.height,0,0,c.width*a/W,c.height/W);b.restore()}},fadeInAnimation:function(a,d){if(0!==a){var b=d.dest,c=d.source.canvas;b.save();b.globalAlpha=a;b.drawImage(c,0,0,c.width,c.height,0,0,b.canvas.width/W,b.canvas.height/W);b.restore()}},easing:{linear:function(a,d,b,c){return b*a/c+d},easeOutQuad:function(a,d,b,c){return-b*(a/=c)*(a-2)+d},easeOutQuart:function(a,d,b,c){return-b*((a=a/c-1)*a*a*a-1)+d},easeInQuad:function(a,d,b,c){return b*(a/=c)*a+d},easeInQuart:function(a,
d,b,c){return b*(a/=c)*a*a*a+d}}},ia={drawMarker:function(a,d,b,c,e,g,k,l){if(b){var p=1;b.fillStyle=g?g:"#000000";b.strokeStyle=k?k:"#000000";b.lineWidth=l?l:0;b.setLineDash&&b.setLineDash(R("solid",l));"circle"===c?(b.moveTo(a,d),b.beginPath(),b.arc(a,d,e/2,0,2*Math.PI,!1),g&&b.fill(),l&&(k?b.stroke():(p=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p))):"square"===c?(b.beginPath(),b.rect(a-e/2,d-e/2,e,e),g&&b.fill(),l&&(k?b.stroke():(p=b.globalAlpha,b.globalAlpha=
0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p))):"triangle"===c?(b.beginPath(),b.moveTo(a-e/2,d+e/2),b.lineTo(a+e/2,d+e/2),b.lineTo(a,d-e/2),b.closePath(),g&&b.fill(),l&&(k?b.stroke():(p=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p)),b.beginPath()):"cross"===c&&(b.strokeStyle=g,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,d-e/2),b.lineTo(a+e/2,d+e/2),b.stroke(),b.moveTo(a+e/2,d-e/2),b.lineTo(a-e/2,d+e/2),b.stroke())}},drawMarkers:function(a){for(var d=
0;d<a.length;d++){var b=a[d];ia.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}};return p}();Na.Chart.version="v2.3.1 GA"})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
/*eslint-enable*/
/*jshint ignore:end*/

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\govra\OneDrive\Documents\POC\Field-aware-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map