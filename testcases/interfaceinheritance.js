// Test inference using interfaces and inheritance together.
// plugin=closure
// plugin=doc_comment null

goog.provide('ParentInterface');
goog.provide('ChildInterface');
goog.provide('Implementor');
goog.provide('ImplementorChild');

/**
 * The parent interface.
 * @interface
 */
ParentInterface = function() {};

/**
 * A parent interface method.
 * @param {ParamType} param The param.
 * @return {ReturnType} The retval.
 */
ParentInterface.prototype.parentMethod;

ParentInterface.prototype.parentMethod; //: fn(param: ParamType) -> ReturnType

/**
 * The child interface.
 * @interface
 * @extends {ParentInterface}
 */
ChildInterface = function() {};

/**
 * A child interface method.
 * @param {ChildParamType} childParam The param.
 * @return {ChildReturnType} The retval.
 */
ChildInterface.prototype.childMethod;

ChildInterface.prototype.childMethod; //: fn(childParam: ChildParamType) -> ChildReturnType

/** @type {ChildInterface} */
var instance;
instance; //: ChildInterface
instance.parentMethod; //: fn(param: ParamType) -> ReturnType
instance.childMethod; //: fn(childParam: ChildParamType) -> ChildReturnType

/**
 * A class implementing ChildInterface.
 * @constructor
 * @struct
 * @implements {ChildInterface}
 */
Implementor = function() {};

/** @override */
Implementor.prototype.parentMethod = function(param) {
  param; //: ParamType
  return notaval;
};
Implementor.prototype.parentMethod; //: fn(param: ParamType) -> ReturnType

/** @override */
Implementor.prototype.childMethod = function(childParam) {
  childParam; //: ChildParamType
  return notaval;
};
Implementor.prototype.childMethod; //: fn(childParam: ChildParamType) -> ChildReturnType

/**
 * A class extending Implementor.
 * @constructor
 * @struct
 * @extends {Implementor}
 */
ImplementorChild = function() {};

/** @override */
ImplementorChild.prototype.parentMethod = function(param) {
  param; //: ParamType
  return notaval;
};
ImplementorChild.prototype.parentMethod; //: fn(param: ParamType) -> ReturnType

/** @override */
ImplementorChild.prototype.childMethod = function(childParam) {
  childParam; //: ChildParamType
  return notaval;
};
ImplementorChild.prototype.childMethod; //: fn(childParam: ChildParamType) -> ChildReturnType
