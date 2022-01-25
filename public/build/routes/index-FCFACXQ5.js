import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-IJWY473I.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "Anna & George",
    description: "Come celebrate our marriage with us!"
  };
};
function Index() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "You're invited to the wedding of Anna & George"), /* @__PURE__ */ React.createElement("p", null, "Saturday"), /* @__PURE__ */ React.createElement("p", null, "07 - 16 - 22"), /* @__PURE__ */ React.createElement("p", null, "Chicago")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name))))));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-FCFACXQ5.js.map
