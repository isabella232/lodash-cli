var baseFunctions = require('lodash._basefunctions'),
    isObject = require('lodash.isobject'),
    keys = require('lodash.keys'),
    mixin = require('lodash.mixin'),
    support = require('lodash.support'),
    templateSettings = require('lodash.templatesettings');

// wrap `_.mixin` so it works when provided only one argument
mixin = (function(func) {
  return function(object, source, options) {
    var isObj = isObject(source),
        noOpts = options == null,
        props = noOpts && isObj && keys(source),
        methodNames = props && baseFunctions(source, props);

    if ((props && props.length && !methodNames.length) || (noOpts && !isObj)) {
      if (noOpts) {
        options = source;
      }
      source = object;
      object = this;
    }
    return func(object, source, options);
  };
}(mixin));

// namespace
var lodash = function() {};

// add functions
lodash.after = require('lodash.after');
lodash.ary = require('lodash.ary');
lodash.assign = require('lodash.assign');
lodash.at = require('lodash.at');
lodash.attempt = require('lodash.attempt');
lodash.before = require('lodash.before');
lodash.bind = require('lodash.bind');
lodash.bindAll = require('lodash.bindall');
lodash.bindKey = require('lodash.bindkey');
lodash.callback = require('lodash.callback');
lodash.camelCase = require('lodash.camelcase');
lodash.capitalize = require('lodash.capitalize');
lodash.chunk = require('lodash.chunk');
lodash.clone = require('lodash.clone');
lodash.cloneDeep = require('lodash.clonedeep');
lodash.compact = require('lodash.compact');
lodash.constant = require('lodash.constant');
lodash.countBy = require('lodash.countby');
lodash.create = require('lodash.create');
lodash.curry = require('lodash.curry');
lodash.curryRight = require('lodash.curryright');
lodash.debounce = require('lodash.debounce');
lodash.deburr = require('lodash.deburr');
lodash.defaults = require('lodash.defaults');
lodash.defer = require('lodash.defer');
lodash.delay = require('lodash.delay');
lodash.difference = require('lodash.difference');
lodash.drop = require('lodash.drop');
lodash.dropRight = require('lodash.dropright');
lodash.dropRightWhile = require('lodash.droprightwhile');
lodash.dropWhile = require('lodash.dropwhile');
lodash.endsWith = require('lodash.endswith');
lodash.escape = require('lodash.escape');
lodash.escapeRegExp = require('lodash.escaperegexp');
lodash.every = require('lodash.every');
lodash.filter = require('lodash.filter');
lodash.find = require('lodash.find');
lodash.findIndex = require('lodash.findindex');
lodash.findKey = require('lodash.findkey');
lodash.findLast = require('lodash.findlast');
lodash.findLastIndex = require('lodash.findlastindex');
lodash.findLastKey = require('lodash.findlastkey');
lodash.findWhere = require('lodash.findwhere');
lodash.first = require('lodash.first');
lodash.flatten = require('lodash.flatten');
lodash.flattenDeep = require('lodash.flattendeep');
lodash.flow = require('lodash.flow');
lodash.flowRight = require('lodash.flowright');
lodash.forEach = require('lodash.foreach');
lodash.forEachRight = require('lodash.foreachright');
lodash.forIn = require('lodash.forin');
lodash.forInRight = require('lodash.forinright');
lodash.forOwn = require('lodash.forown');
lodash.forOwnRight = require('lodash.forownright');
lodash.functions = require('lodash.functions');
lodash.groupBy = require('lodash.groupby');
lodash.has = require('lodash.has');
lodash.identity = require('lodash.identity');
lodash.includes = require('lodash.includes');
lodash.indexBy = require('lodash.indexby');
lodash.indexOf = require('lodash.indexof');
lodash.initial = require('lodash.initial');
lodash.intersection = require('lodash.intersection');
lodash.invert = require('lodash.invert');
lodash.invoke = require('lodash.invoke');
lodash.isArguments = require('lodash.isarguments');
lodash.isArray = require('lodash.isarray');
lodash.isBoolean = require('lodash.isboolean');
lodash.isDate = require('lodash.isdate');
lodash.isElement = require('lodash.iselement');
lodash.isEmpty = require('lodash.isempty');
lodash.isEqual = require('lodash.isequal');
lodash.isError = require('lodash.iserror');
lodash.isFinite = require('lodash.isfinite');
lodash.isFunction = require('lodash.isfunction');
lodash.isMatch = require('lodash.ismatch');
lodash.isNaN = require('lodash.isnan');
lodash.isNative = require('lodash.isnative');
lodash.isNull = require('lodash.isnull');
lodash.isNumber = require('lodash.isnumber');
lodash.isObject = require('lodash.isobject');
lodash.isPlainObject = require('lodash.isplainobject');
lodash.isRegExp = require('lodash.isregexp');
lodash.isString = require('lodash.isstring');
lodash.isUndefined = require('lodash.isundefined');
lodash.kebabCase = require('lodash.kebabcase');
lodash.keys = require('lodash.keys');
lodash.keysIn = require('lodash.keysin');
lodash.last = require('lodash.last');
lodash.lastIndexOf = require('lodash.lastindexof');
lodash.map = require('lodash.map');
lodash.mapValues = require('lodash.mapvalues');
lodash.matches = require('lodash.matches');
lodash.max = require('lodash.max');
lodash.memoize = require('lodash.memoize');
lodash.merge = require('lodash.merge');
lodash.min = require('lodash.min');
lodash.mixin = mixin;
lodash.negate = require('lodash.negate');
lodash.noop = require('lodash.noop');
lodash.now = require('lodash.now');
lodash.omit = require('lodash.omit');
lodash.once = require('lodash.once');
lodash.pad = require('lodash.pad');
lodash.padLeft = require('lodash.padleft');
lodash.padRight = require('lodash.padright');
lodash.pairs = require('lodash.pairs');
lodash.parseInt = require('lodash.parseint');
lodash.partial = require('lodash.partial');
lodash.partialRight = require('lodash.partialright');
lodash.partition = require('lodash.partition');
lodash.pick = require('lodash.pick');
lodash.pluck = require('lodash.pluck');
lodash.property = require('lodash.property');
lodash.propertyOf = require('lodash.propertyof');
lodash.pull = require('lodash.pull');
lodash.pullAt = require('lodash.pullat');
lodash.random = require('lodash.random');
lodash.range = require('lodash.range');
lodash.rearg = require('lodash.rearg');
lodash.reduce = require('lodash.reduce');
lodash.reduceRight = require('lodash.reduceright');
lodash.reject = require('lodash.reject');
lodash.remove = require('lodash.remove');
lodash.repeat = require('lodash.repeat');
lodash.rest = require('lodash.rest');
lodash.result = require('lodash.result');
lodash.sample = require('lodash.sample');
lodash.shuffle = require('lodash.shuffle');
lodash.size = require('lodash.size');
lodash.slice = require('lodash.slice');
lodash.snakeCase = require('lodash.snakecase');
lodash.some = require('lodash.some');
lodash.sortBy = require('lodash.sortby');
lodash.sortByAll = require('lodash.sortbyall');
lodash.sortedIndex = require('lodash.sortedindex');
lodash.sortedLastIndex = require('lodash.sortedlastindex');
lodash.startsWith = require('lodash.startswith');
lodash.take = require('lodash.take');
lodash.takeRight = require('lodash.takeright');
lodash.takeRightWhile = require('lodash.takerightwhile');
lodash.takeWhile = require('lodash.takewhile');
lodash.template = require('lodash.template');
lodash.throttle = require('lodash.throttle');
lodash.times = require('lodash.times');
lodash.toArray = require('lodash.toarray');
lodash.transform = require('lodash.transform');
lodash.trim = require('lodash.trim');
lodash.trimLeft = require('lodash.trimleft');
lodash.trimRight = require('lodash.trimright');
lodash.trunc = require('lodash.trunc');
lodash.unescape = require('lodash.unescape');
lodash.union = require('lodash.union');
lodash.uniq = require('lodash.uniq');
lodash.uniqueId = require('lodash.uniqueid');
lodash.unzip = require('lodash.unzip');
lodash.values = require('lodash.values');
lodash.valuesIn = require('lodash.valuesin');
lodash.where = require('lodash.where');
lodash.without = require('lodash.without');
lodash.words = require('lodash.words');
lodash.wrap = require('lodash.wrap');
lodash.xor = require('lodash.xor');
lodash.zip = require('lodash.zip');
lodash.zipObject = require('lodash.zipobject');

// add aliases
lodash.all = lodash.every;
lodash.any = lodash.some;
lodash.backflow = lodash.flowRight;
lodash.collect = lodash.map;
lodash.compose = lodash.flowRight;
lodash.contains = lodash.includes;
lodash.detect = lodash.find;
lodash.each = lodash.forEach;
lodash.eachRight = lodash.forEachRight;
lodash.extend = lodash.assign;
lodash.foldl = lodash.reduce;
lodash.foldr = lodash.reduceRight;
lodash.head = lodash.first;
lodash.include = lodash.includes;
lodash.inject = lodash.reduce;
lodash.iteratee = lodash.callback;
lodash.methods = lodash.functions;
lodash.object = lodash.zipObject;
lodash.select = lodash.filter;
lodash.tail = lodash.rest;
lodash.unique = lodash.uniq;

// add other properties
lodash.support = support;
(lodash.templateSettings = templateSettings).imports._ = lodash;
lodash.VERSION = require('lodash').VERSION;

module.exports = lodash;
