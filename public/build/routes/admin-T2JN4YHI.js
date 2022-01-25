import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-IJWY473I.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};
function Admin() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin bg-gray-100"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/posts/${post.slug}`
  }, post.title))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-T2JN4YHI.js.map
