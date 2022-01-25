import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Z35JMVEY.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", null, "Posts", /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-WCDNVRZK.js.map
