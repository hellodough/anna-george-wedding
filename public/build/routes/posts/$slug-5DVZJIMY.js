import {
  useLoaderData
} from "/build/_shared/chunk-IJWY473I.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-5DVZJIMY.js.map
