import {
  Link,
  import_react_router_dom
} from "/build/_shared/chunk-YVI3H73H.js";
import "/build/_shared/chunk-X5QBJ4I3.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/demos/params.tsx?browser
init_react();

// app/routes/demos/params.tsx
init_react();
function meta() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}
export {
  Boundaries as default,
  meta
};
//# sourceMappingURL=/build/routes/demos/params-QHD3IE42.js.map
