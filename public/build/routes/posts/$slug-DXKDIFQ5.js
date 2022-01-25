import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Z35JMVEY.js";

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
//# sourceMappingURL=/build/routes/posts/$slug-DXKDIFQ5.js.map
