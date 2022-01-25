import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();
function Admin() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/posts/${post.slug}`
  }, post.title))))), /* @__PURE__ */ React.createElement("main", null, "..."));
}
export {
  Admin as default
};
//# sourceMappingURL=/build/routes/admin-S2OYM6HQ.js.map
