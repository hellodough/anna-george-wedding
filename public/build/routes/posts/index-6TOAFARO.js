import "/build/_shared/chunk-RTKDAKHZ.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-YVI3H73H.js";
import "/build/_shared/chunk-X5QBJ4I3.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

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
//# sourceMappingURL=/build/routes/posts/index-6TOAFARO.js.map
