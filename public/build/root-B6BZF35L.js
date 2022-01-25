import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  useCatch
} from "/build/_shared/chunk-IJWY473I.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-65U2KGYA.css";

// node_modules/@headlessui/react/dist/index.esm.js
init_react();

// node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js
init_react();
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

// node_modules/@headlessui/react/dist/utils/render.esm.js
init_react();
var import_react = __toModule(require_react());

// node_modules/@headlessui/react/dist/utils/match.esm.js
init_react();
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return typeof returnValue === "function" ? returnValue.apply(void 0, args) : returnValue;
  }
  var error = new Error('Tried to handle "' + value + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(lookup).map(function(key) {
    return '"' + key + '"';
  }).join(", ") + ".");
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}

// node_modules/@headlessui/react/dist/utils/render.esm.js
var Features;
(function(Features2) {
  Features2[Features2["None"] = 0] = "None";
  Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
  Features2[Features2["Static"] = 2] = "Static";
})(Features || (Features = {}));
var RenderStrategy;
(function(RenderStrategy2) {
  RenderStrategy2[RenderStrategy2["Unmount"] = 0] = "Unmount";
  RenderStrategy2[RenderStrategy2["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));
function render(_ref) {
  var props = _ref.props, slot = _ref.slot, defaultTag = _ref.defaultTag, features = _ref.features, _ref$visible = _ref.visible, visible = _ref$visible === void 0 ? true : _ref$visible, name = _ref.name;
  if (visible)
    return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;
  if (featureFlags & Features.Static) {
    var _props$static = props["static"], isStatic = _props$static === void 0 ? false : _props$static, rest = _objectWithoutPropertiesLoose(props, ["static"]);
    if (isStatic)
      return _render(rest, slot, defaultTag, name);
  }
  if (featureFlags & Features.RenderStrategy) {
    var _match;
    var _props$unmount = props.unmount, unmount = _props$unmount === void 0 ? true : _props$unmount, _rest = _objectWithoutPropertiesLoose(props, ["unmount"]);
    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return match(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
      return null;
    }, _match[RenderStrategy.Hidden] = function() {
      return _render(_extends({}, _rest, {
        hidden: true,
        style: {
          display: "none"
        }
      }), slot, defaultTag, name);
    }, _match));
  }
  return _render(props, slot, defaultTag, name);
}
function _render(props, slot, tag, name) {
  var _ref2;
  if (slot === void 0) {
    slot = {};
  }
  var _omit = omit(props, ["unmount", "static"]), _omit$as = _omit.as, Component = _omit$as === void 0 ? tag : _omit$as, children = _omit.children, _omit$refName = _omit.refName, refName = _omit$refName === void 0 ? "ref" : _omit$refName, passThroughProps = _objectWithoutPropertiesLoose(_omit, ["as", "children", "refName"]);
  var refRelatedProps = props.ref !== void 0 ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === "function" ? children(slot) : children;
  if (passThroughProps.className && typeof passThroughProps.className === "function") {
    passThroughProps.className = passThroughProps.className(slot);
  }
  if (Component === import_react.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0, import_react.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', "", "The current component <" + name + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function(line) {
          return "  - " + line;
        }).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(function(line) {
          return "  - " + line;
        }).join("\n")].join("\n"));
      }
      return (0, import_react.cloneElement)(resolvedChildren, Object.assign({}, mergeEventFunctions(compact(omit(passThroughProps, ["ref"])), resolvedChildren.props, ["onClick"]), refRelatedProps));
    }
  }
  return (0, import_react.createElement)(Component, Object.assign({}, omit(passThroughProps, ["ref"]), Component !== import_react.Fragment && refRelatedProps), resolvedChildren);
}
function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);
  var _loop = function _loop2() {
    var func = _step.value;
    if (passThroughProps[func] !== void 0 && existingProps[func] !== void 0) {
      var _Object$assign;
      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function(event) {
        if (!event.defaultPrevented)
          passThroughProps[func](event);
        if (!event.defaultPrevented)
          existingProps[func](event);
      }, _Object$assign));
    }
  };
  for (var _iterator = _createForOfIteratorHelperLoose(functionsToMerge), _step; !(_step = _iterator()).done; ) {
    _loop();
  }
  return clone;
}
function forwardRefWithAs(component) {
  var _component$displayNam;
  return Object.assign((0, import_react.forwardRef)(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}
function compact(object) {
  var clone = Object.assign({}, object);
  for (var key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }
  var clone = Object.assign({}, object);
  for (var _iterator2 = _createForOfIteratorHelperLoose(keysToOmit), _step2; !(_step2 = _iterator2()).done; ) {
    var key = _step2.value;
    if (key in clone)
      delete clone[key];
  }
  return clone;
}

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js
init_react();
var import_react2 = __toModule(require_react());
var useIsoMorphicEffect = typeof window !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js
init_react();
var import_react3 = __toModule(require_react());
var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = (0, import_react3.useState)(state.serverHandoffComplete), serverHandoffComplete = _useState[0], setServerHandoffComplete = _useState[1];
  (0, import_react3.useEffect)(function() {
    if (serverHandoffComplete === true)
      return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0, import_react3.useEffect)(function() {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js
init_react();
var import_react4 = __toModule(require_react());
function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var cache = (0, import_react4.useRef)(refs);
  (0, import_react4.useEffect)(function() {
    cache.current = refs;
  }, [refs]);
  return (0, import_react4.useCallback)(function(value) {
    for (var _iterator = _createForOfIteratorHelperLoose(cache.current), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  }, [cache]);
}

// node_modules/@headlessui/react/dist/components/keyboard.esm.js
init_react();
var Keys;
(function(Keys2) {
  Keys2["Space"] = " ";
  Keys2["Enter"] = "Enter";
  Keys2["Escape"] = "Escape";
  Keys2["Backspace"] = "Backspace";
  Keys2["ArrowLeft"] = "ArrowLeft";
  Keys2["ArrowUp"] = "ArrowUp";
  Keys2["ArrowRight"] = "ArrowRight";
  Keys2["ArrowDown"] = "ArrowDown";
  Keys2["Home"] = "Home";
  Keys2["End"] = "End";
  Keys2["PageUp"] = "PageUp";
  Keys2["PageDown"] = "PageDown";
  Keys2["Tab"] = "Tab";
})(Keys || (Keys = {}));

// node_modules/@headlessui/react/dist/utils/bugs.esm.js
init_react();
function isDisabledReactIssue7711(element) {
  var _ref, _parent;
  var parent = element.parentElement;
  var legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute("disabled")) === "") != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  var previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/hooks/use-id.esm.js
init_react();
var import_react5 = __toModule(require_react());
var id = 0;
function generateId() {
  return ++id;
}
function useId() {
  var ready = useServerHandoffComplete();
  var _useState = (0, import_react5.useState)(ready ? generateId : null), id2 = _useState[0], setId = _useState[1];
  useIsoMorphicEffect(function() {
    if (id2 === null)
      setId(generateId());
  }, [id2]);
  return id2 != null ? "" + id2 : void 0;
}

// node_modules/@headlessui/react/dist/internal/open-closed.esm.js
init_react();
var import_react6 = __toModule(require_react());
var Context = /* @__PURE__ */ (0, import_react6.createContext)(null);
Context.displayName = "OpenClosedContext";
var State;
(function(State2) {
  State2[State2["Open"] = 0] = "Open";
  State2[State2["Closed"] = 1] = "Closed";
})(State || (State = {}));
function useOpenClosed() {
  return (0, import_react6.useContext)(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value, children = _ref.children;
  return import_react6.default.createElement(Context.Provider, {
    value
  }, children);
}

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js
init_react();
var import_react8 = __toModule(require_react());

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.esm.js
init_react();
var import_react7 = __toModule(require_react());
function resolveType(props) {
  var _props$as;
  if (props.type)
    return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  var _useState = (0, import_react7.useState)(function() {
    return resolveType(props);
  }), type = _useState[0], setType = _useState[1];
  useIsoMorphicEffect(function() {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(function() {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.esm.js
var _reducers;
var DisclosureStates;
(function(DisclosureStates2) {
  DisclosureStates2[DisclosureStates2["Open"] = 0] = "Open";
  DisclosureStates2[DisclosureStates2["Closed"] = 1] = "Closed";
})(DisclosureStates || (DisclosureStates = {}));
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2[ActionTypes2["ToggleDisclosure"] = 0] = "ToggleDisclosure";
  ActionTypes2[ActionTypes2["CloseDisclosure"] = 1] = "CloseDisclosure";
  ActionTypes2[ActionTypes2["SetButtonId"] = 2] = "SetButtonId";
  ActionTypes2[ActionTypes2["SetPanelId"] = 3] = "SetPanelId";
  ActionTypes2[ActionTypes2["LinkPanel"] = 4] = "LinkPanel";
  ActionTypes2[ActionTypes2["UnlinkPanel"] = 5] = "UnlinkPanel";
})(ActionTypes || (ActionTypes = {}));
var reducers = (_reducers = {}, _reducers[ActionTypes.ToggleDisclosure] = function(state2) {
  var _match;
  return _extends({}, state2, {
    disclosureState: match(state2.disclosureState, (_match = {}, _match[DisclosureStates.Open] = DisclosureStates.Closed, _match[DisclosureStates.Closed] = DisclosureStates.Open, _match))
  });
}, _reducers[ActionTypes.CloseDisclosure] = function(state2) {
  if (state2.disclosureState === DisclosureStates.Closed)
    return state2;
  return _extends({}, state2, {
    disclosureState: DisclosureStates.Closed
  });
}, _reducers[ActionTypes.LinkPanel] = function(state2) {
  if (state2.linkedPanel === true)
    return state2;
  return _extends({}, state2, {
    linkedPanel: true
  });
}, _reducers[ActionTypes.UnlinkPanel] = function(state2) {
  if (state2.linkedPanel === false)
    return state2;
  return _extends({}, state2, {
    linkedPanel: false
  });
}, _reducers[ActionTypes.SetButtonId] = function(state2, action) {
  if (state2.buttonId === action.buttonId)
    return state2;
  return _extends({}, state2, {
    buttonId: action.buttonId
  });
}, _reducers[ActionTypes.SetPanelId] = function(state2, action) {
  if (state2.panelId === action.panelId)
    return state2;
  return _extends({}, state2, {
    panelId: action.panelId
  });
}, _reducers);
var DisclosureContext = /* @__PURE__ */ (0, import_react8.createContext)(null);
DisclosureContext.displayName = "DisclosureContext";
function useDisclosureContext(component) {
  var context = (0, import_react8.useContext)(DisclosureContext);
  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureContext);
    throw err;
  }
  return context;
}
var DisclosureAPIContext = /* @__PURE__ */ (0, import_react8.createContext)(null);
DisclosureAPIContext.displayName = "DisclosureAPIContext";
function useDisclosureAPIContext(component) {
  var context = (0, import_react8.useContext)(DisclosureAPIContext);
  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Disclosure.name + " /> component.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDisclosureAPIContext);
    throw err;
  }
  return context;
}
var DisclosurePanelContext = /* @__PURE__ */ (0, import_react8.createContext)(null);
DisclosurePanelContext.displayName = "DisclosurePanelContext";
function useDisclosurePanelContext() {
  return (0, import_react8.useContext)(DisclosurePanelContext);
}
function stateReducer(state2, action) {
  return match(action.type, reducers, state2, action);
}
var DEFAULT_DISCLOSURE_TAG = import_react8.Fragment;
function Disclosure(props) {
  var _match2;
  var _props$defaultOpen = props.defaultOpen, defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen, passthroughProps = _objectWithoutPropertiesLoose(props, ["defaultOpen"]);
  var buttonId = "headlessui-disclosure-button-" + useId();
  var panelId = "headlessui-disclosure-panel-" + useId();
  var reducerBag = (0, import_react8.useReducer)(stateReducer, {
    disclosureState: defaultOpen ? DisclosureStates.Open : DisclosureStates.Closed,
    linkedPanel: false,
    buttonId,
    panelId
  });
  var disclosureState = reducerBag[0].disclosureState, dispatch = reducerBag[1];
  (0, import_react8.useEffect)(function() {
    return dispatch({
      type: ActionTypes.SetButtonId,
      buttonId
    });
  }, [buttonId, dispatch]);
  (0, import_react8.useEffect)(function() {
    return dispatch({
      type: ActionTypes.SetPanelId,
      panelId
    });
  }, [panelId, dispatch]);
  var close = (0, import_react8.useCallback)(function(focusableElement) {
    dispatch({
      type: ActionTypes.CloseDisclosure
    });
    var restoreElement = function() {
      if (!focusableElement)
        return document.getElementById(buttonId);
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return document.getElementById(buttonId);
    }();
    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, buttonId]);
  var api = (0, import_react8.useMemo)(function() {
    return {
      close
    };
  }, [close]);
  var slot = (0, import_react8.useMemo)(function() {
    return {
      open: disclosureState === DisclosureStates.Open,
      close
    };
  }, [disclosureState, close]);
  return import_react8.default.createElement(DisclosureContext.Provider, {
    value: reducerBag
  }, import_react8.default.createElement(DisclosureAPIContext.Provider, {
    value: api
  }, import_react8.default.createElement(OpenClosedProvider, {
    value: match(disclosureState, (_match2 = {}, _match2[DisclosureStates.Open] = State.Open, _match2[DisclosureStates.Closed] = State.Closed, _match2))
  }, render({
    props: passthroughProps,
    slot,
    defaultTag: DEFAULT_DISCLOSURE_TAG,
    name: "Disclosure"
  }))));
}
var DEFAULT_BUTTON_TAG = "button";
var Button = /* @__PURE__ */ forwardRefWithAs(function Button2(props, ref) {
  var _useDisclosureContext = useDisclosureContext([Disclosure.name, Button2.name].join(".")), state2 = _useDisclosureContext[0], dispatch = _useDisclosureContext[1];
  var internalButtonRef = (0, import_react8.useRef)(null);
  var buttonRef = useSyncRefs(internalButtonRef, ref);
  var panelContext = useDisclosurePanelContext();
  var isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  var handleKeyDown = (0, import_react8.useCallback)(function(event) {
    var _document$getElementB;
    if (isWithinPanel) {
      if (state2.disclosureState === DisclosureStates.Closed)
        return;
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ToggleDisclosure
          });
          (_document$getElementB = document.getElementById(state2.buttonId)) == null ? void 0 : _document$getElementB.focus();
          break;
      }
    } else {
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ToggleDisclosure
          });
          break;
      }
    }
  }, [dispatch, isWithinPanel, state2.disclosureState]);
  var handleKeyUp = (0, import_react8.useCallback)(function(event) {
    switch (event.key) {
      case Keys.Space:
        event.preventDefault();
        break;
    }
  }, []);
  var handleClick = (0, import_react8.useCallback)(function(event) {
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      var _document$getElementB2;
      dispatch({
        type: ActionTypes.ToggleDisclosure
      });
      (_document$getElementB2 = document.getElementById(state2.buttonId)) == null ? void 0 : _document$getElementB2.focus();
    } else {
      dispatch({
        type: ActionTypes.ToggleDisclosure
      });
    }
  }, [dispatch, props.disabled, state2.buttonId, isWithinPanel]);
  var slot = (0, import_react8.useMemo)(function() {
    return {
      open: state2.disclosureState === DisclosureStates.Open
    };
  }, [state2]);
  var type = useResolveButtonType(props, internalButtonRef);
  var passthroughProps = props;
  var propsWeControl = isWithinPanel ? {
    ref: buttonRef,
    type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state2.buttonId,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.disclosureState === DisclosureStates.Open,
    "aria-controls": state2.linkedPanel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Disclosure.Button"
  });
});
var DEFAULT_PANEL_TAG = "div";
var PanelRenderFeatures = Features.RenderStrategy | Features.Static;
var Panel = /* @__PURE__ */ forwardRefWithAs(function Panel2(props, ref) {
  var _useDisclosureContext2 = useDisclosureContext([Disclosure.name, Panel2.name].join(".")), state2 = _useDisclosureContext2[0], dispatch = _useDisclosureContext2[1];
  var _useDisclosureAPICont = useDisclosureAPIContext([Disclosure.name, Panel2.name].join(".")), close = _useDisclosureAPICont.close;
  var panelRef = useSyncRefs(ref, function() {
    if (state2.linkedPanel)
      return;
    dispatch({
      type: ActionTypes.LinkPanel
    });
  });
  var usesOpenClosedState = useOpenClosed();
  var visible = function() {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === State.Open;
    }
    return state2.disclosureState === DisclosureStates.Open;
  }();
  (0, import_react8.useEffect)(function() {
    return function() {
      return dispatch({
        type: ActionTypes.UnlinkPanel
      });
    };
  }, [dispatch]);
  (0, import_react8.useEffect)(function() {
    var _props$unmount;
    if (state2.disclosureState === DisclosureStates.Closed && ((_props$unmount = props.unmount) != null ? _props$unmount : true)) {
      dispatch({
        type: ActionTypes.UnlinkPanel
      });
    }
  }, [state2.disclosureState, props.unmount, dispatch]);
  var slot = (0, import_react8.useMemo)(function() {
    return {
      open: state2.disclosureState === DisclosureStates.Open,
      close
    };
  }, [state2, close]);
  var propsWeControl = {
    ref: panelRef,
    id: state2.panelId
  };
  var passthroughProps = props;
  return import_react8.default.createElement(DisclosurePanelContext.Provider, {
    value: state2.panelId
  }, render({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible,
    name: "Disclosure.Panel"
  }));
});
Disclosure.Button = Button;
Disclosure.Panel = Panel;

// node_modules/@heroicons/react/outline/esm/index.js
init_react();

// node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js
init_react();
var React4 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js
init_react();
var React5 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/AnnotationIcon.js
init_react();
var React6 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArchiveIcon.js
init_react();
var React7 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowCircleDownIcon.js
init_react();
var React8 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js
init_react();
var React9 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js
init_react();
var React10 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowCircleUpIcon.js
init_react();
var React11 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowDownIcon.js
init_react();
var React12 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowLeftIcon.js
init_react();
var React13 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowNarrowDownIcon.js
init_react();
var React14 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowNarrowLeftIcon.js
init_react();
var React15 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowNarrowRightIcon.js
init_react();
var React16 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowNarrowUpIcon.js
init_react();
var React17 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowRightIcon.js
init_react();
var React18 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowSmDownIcon.js
init_react();
var React19 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowSmLeftIcon.js
init_react();
var React20 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowSmRightIcon.js
init_react();
var React21 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowSmUpIcon.js
init_react();
var React22 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowUpIcon.js
init_react();
var React23 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ArrowsExpandIcon.js
init_react();
var React24 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/AtSymbolIcon.js
init_react();
var React25 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BackspaceIcon.js
init_react();
var React26 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BadgeCheckIcon.js
init_react();
var React27 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BanIcon.js
init_react();
var React28 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BeakerIcon.js
init_react();
var React29 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BellIcon.js
init_react();
var React30 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BookOpenIcon.js
init_react();
var React31 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BookmarkAltIcon.js
init_react();
var React32 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BookmarkIcon.js
init_react();
var React33 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/BriefcaseIcon.js
init_react();
var React34 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CakeIcon.js
init_react();
var React35 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CalculatorIcon.js
init_react();
var React36 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CalendarIcon.js
init_react();
var React37 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CameraIcon.js
init_react();
var React38 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CashIcon.js
init_react();
var React39 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChartBarIcon.js
init_react();
var React40 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChartPieIcon.js
init_react();
var React41 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChartSquareBarIcon.js
init_react();
var React42 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChatAlt2Icon.js
init_react();
var React43 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChatAltIcon.js
init_react();
var React44 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChatIcon.js
init_react();
var React45 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CheckCircleIcon.js
init_react();
var React46 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CheckIcon.js
init_react();
var React47 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronDoubleDownIcon.js
init_react();
var React48 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronDoubleLeftIcon.js
init_react();
var React49 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronDoubleRightIcon.js
init_react();
var React50 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronDoubleUpIcon.js
init_react();
var React51 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js
init_react();
var React52 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js
init_react();
var React53 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js
init_react();
var React54 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js
init_react();
var React55 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ChipIcon.js
init_react();
var React56 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ClipboardCheckIcon.js
init_react();
var React57 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ClipboardCopyIcon.js
init_react();
var React58 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ClipboardListIcon.js
init_react();
var React59 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ClipboardIcon.js
init_react();
var React60 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ClockIcon.js
init_react();
var React61 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CloudDownloadIcon.js
init_react();
var React62 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js
init_react();
var React63 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CloudIcon.js
init_react();
var React64 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CodeIcon.js
init_react();
var React65 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CogIcon.js
init_react();
var React66 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CollectionIcon.js
init_react();
var React67 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ColorSwatchIcon.js
init_react();
var React68 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CreditCardIcon.js
init_react();
var React69 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CubeTransparentIcon.js
init_react();
var React70 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CubeIcon.js
init_react();
var React71 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CurrencyBangladeshiIcon.js
init_react();
var React72 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CurrencyDollarIcon.js
init_react();
var React73 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CurrencyEuroIcon.js
init_react();
var React74 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CurrencyPoundIcon.js
init_react();
var React75 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CurrencyRupeeIcon.js
init_react();
var React76 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CurrencyYenIcon.js
init_react();
var React77 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/CursorClickIcon.js
init_react();
var React78 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DatabaseIcon.js
init_react();
var React79 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DesktopComputerIcon.js
init_react();
var React80 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DeviceMobileIcon.js
init_react();
var React81 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DeviceTabletIcon.js
init_react();
var React82 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentAddIcon.js
init_react();
var React83 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentDownloadIcon.js
init_react();
var React84 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js
init_react();
var React85 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentRemoveIcon.js
init_react();
var React86 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentReportIcon.js
init_react();
var React87 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentSearchIcon.js
init_react();
var React88 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js
init_react();
var React89 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DocumentIcon.js
init_react();
var React90 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DotsCircleHorizontalIcon.js
init_react();
var React91 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DotsHorizontalIcon.js
init_react();
var React92 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DotsVerticalIcon.js
init_react();
var React93 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DownloadIcon.js
init_react();
var React94 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/DuplicateIcon.js
init_react();
var React95 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/EmojiHappyIcon.js
init_react();
var React96 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/EmojiSadIcon.js
init_react();
var React97 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ExclamationCircleIcon.js
init_react();
var React98 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ExclamationIcon.js
init_react();
var React99 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ExternalLinkIcon.js
init_react();
var React100 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/EyeOffIcon.js
init_react();
var React101 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/EyeIcon.js
init_react();
var React102 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FastForwardIcon.js
init_react();
var React103 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FilmIcon.js
init_react();
var React104 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FilterIcon.js
init_react();
var React105 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FingerPrintIcon.js
init_react();
var React106 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FireIcon.js
init_react();
var React107 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FlagIcon.js
init_react();
var React108 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FolderAddIcon.js
init_react();
var React109 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FolderDownloadIcon.js
init_react();
var React110 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FolderOpenIcon.js
init_react();
var React111 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FolderRemoveIcon.js
init_react();
var React112 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/FolderIcon.js
init_react();
var React113 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/GiftIcon.js
init_react();
var React114 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/GlobeAltIcon.js
init_react();
var React115 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/GlobeIcon.js
init_react();
var React116 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/HandIcon.js
init_react();
var React117 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/HashtagIcon.js
init_react();
var React118 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/HeartIcon.js
init_react();
var React119 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/HomeIcon.js
init_react();
var React120 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/IdentificationIcon.js
init_react();
var React121 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/InboxInIcon.js
init_react();
var React122 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/InboxIcon.js
init_react();
var React123 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/InformationCircleIcon.js
init_react();
var React124 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/KeyIcon.js
init_react();
var React125 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LibraryIcon.js
init_react();
var React126 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LightBulbIcon.js
init_react();
var React127 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LightningBoltIcon.js
init_react();
var React128 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LinkIcon.js
init_react();
var React129 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LocationMarkerIcon.js
init_react();
var React130 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LockClosedIcon.js
init_react();
var React131 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LockOpenIcon.js
init_react();
var React132 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LoginIcon.js
init_react();
var React133 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/LogoutIcon.js
init_react();
var React134 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MailOpenIcon.js
init_react();
var React135 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MailIcon.js
init_react();
var React136 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MapIcon.js
init_react();
var React137 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js
init_react();
var React138 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js
init_react();
var React139 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MenuAlt3Icon.js
init_react();
var React140 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MenuAlt4Icon.js
init_react();
var React141 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MenuIcon.js
init_react();
var React142 = __toModule(require_react());
function MenuIcon(props) {
  return /* @__PURE__ */ React142.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ React142.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}
var MenuIcon_default = MenuIcon;

// node_modules/@heroicons/react/outline/esm/MicrophoneIcon.js
init_react();
var React143 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MinusCircleIcon.js
init_react();
var React144 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MinusSmIcon.js
init_react();
var React145 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MinusIcon.js
init_react();
var React146 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MoonIcon.js
init_react();
var React147 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/MusicNoteIcon.js
init_react();
var React148 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/NewspaperIcon.js
init_react();
var React149 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/OfficeBuildingIcon.js
init_react();
var React150 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js
init_react();
var React151 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PaperClipIcon.js
init_react();
var React152 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PauseIcon.js
init_react();
var React153 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PencilAltIcon.js
init_react();
var React154 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PencilIcon.js
init_react();
var React155 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PhoneIncomingIcon.js
init_react();
var React156 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PhoneMissedCallIcon.js
init_react();
var React157 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PhoneOutgoingIcon.js
init_react();
var React158 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PhoneIcon.js
init_react();
var React159 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PhotographIcon.js
init_react();
var React160 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PlayIcon.js
init_react();
var React161 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PlusCircleIcon.js
init_react();
var React162 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PlusSmIcon.js
init_react();
var React163 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PlusIcon.js
init_react();
var React164 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PresentationChartBarIcon.js
init_react();
var React165 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PresentationChartLineIcon.js
init_react();
var React166 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PrinterIcon.js
init_react();
var React167 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/PuzzleIcon.js
init_react();
var React168 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/QrcodeIcon.js
init_react();
var React169 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/QuestionMarkCircleIcon.js
init_react();
var React170 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ReceiptRefundIcon.js
init_react();
var React171 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ReceiptTaxIcon.js
init_react();
var React172 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/RefreshIcon.js
init_react();
var React173 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ReplyIcon.js
init_react();
var React174 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/RewindIcon.js
init_react();
var React175 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/RssIcon.js
init_react();
var React176 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SaveAsIcon.js
init_react();
var React177 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SaveIcon.js
init_react();
var React178 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ScaleIcon.js
init_react();
var React179 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ScissorsIcon.js
init_react();
var React180 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js
init_react();
var React181 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SearchIcon.js
init_react();
var React182 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SelectorIcon.js
init_react();
var React183 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ServerIcon.js
init_react();
var React184 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ShareIcon.js
init_react();
var React185 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js
init_react();
var React186 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ShieldExclamationIcon.js
init_react();
var React187 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ShoppingBagIcon.js
init_react();
var React188 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ShoppingCartIcon.js
init_react();
var React189 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SortAscendingIcon.js
init_react();
var React190 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SortDescendingIcon.js
init_react();
var React191 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SparklesIcon.js
init_react();
var React192 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js
init_react();
var React193 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/StarIcon.js
init_react();
var React194 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/StatusOfflineIcon.js
init_react();
var React195 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/StatusOnlineIcon.js
init_react();
var React196 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/StopIcon.js
init_react();
var React197 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SunIcon.js
init_react();
var React198 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SupportIcon.js
init_react();
var React199 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SwitchHorizontalIcon.js
init_react();
var React200 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/SwitchVerticalIcon.js
init_react();
var React201 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TableIcon.js
init_react();
var React202 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TagIcon.js
init_react();
var React203 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TemplateIcon.js
init_react();
var React204 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TerminalIcon.js
init_react();
var React205 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ThumbDownIcon.js
init_react();
var React206 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ThumbUpIcon.js
init_react();
var React207 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TicketIcon.js
init_react();
var React208 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TranslateIcon.js
init_react();
var React209 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TrashIcon.js
init_react();
var React210 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TrendingDownIcon.js
init_react();
var React211 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js
init_react();
var React212 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/TruckIcon.js
init_react();
var React213 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/UploadIcon.js
init_react();
var React214 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/UserAddIcon.js
init_react();
var React215 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/UserCircleIcon.js
init_react();
var React216 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/UserGroupIcon.js
init_react();
var React217 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/UserRemoveIcon.js
init_react();
var React218 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/UserIcon.js
init_react();
var React219 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/UsersIcon.js
init_react();
var React220 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/VariableIcon.js
init_react();
var React221 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/VideoCameraIcon.js
init_react();
var React222 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ViewBoardsIcon.js
init_react();
var React223 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ViewGridAddIcon.js
init_react();
var React224 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ViewGridIcon.js
init_react();
var React225 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ViewListIcon.js
init_react();
var React226 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/VolumeOffIcon.js
init_react();
var React227 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/VolumeUpIcon.js
init_react();
var React228 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/WifiIcon.js
init_react();
var React229 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/XCircleIcon.js
init_react();
var React230 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/XIcon.js
init_react();
var React231 = __toModule(require_react());
function XIcon(props) {
  return /* @__PURE__ */ React231.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ React231.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var XIcon_default = XIcon;

// node_modules/@heroicons/react/outline/esm/ZoomInIcon.js
init_react();
var React232 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/ZoomOutIcon.js
init_react();
var React233 = __toModule(require_react());

// app/root.tsx
var navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Bridesmaids", href: "/bridesmaids", current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavMenu() {
  return /* @__PURE__ */ React.createElement(Disclosure, {
    as: "nav"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /* @__PURE__ */ React.createElement(Disclosure.Button, {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ React.createElement(XIcon_default, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(MenuIcon_default, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex items-center justify-between sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 flex items-center hidden sm:block"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    title: "Anna & George wedding"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-display"
  }, "A & G "))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block sm:ml-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-4"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))))), /* @__PURE__ */ React.createElement(Disclosure.Panel, {
    className: "sm:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))));
}
var links = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
    },
    { rel: "stylesheet", href: app_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app bg-amber-400 h-full"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__header-content"
  }, /* @__PURE__ */ React.createElement(NavMenu, null))), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main-content"
  }, children)));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-B6BZF35L.js.map
