import {
  Form,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-IJWY473I.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/admin/edit/$slug.tsx?browser
init_react();

// app/routes/admin/edit/$slug.tsx
init_react();
function EditPost() {
  const post = useLoaderData();
  const errors = useActionData();
  const transition = useTransition();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title:", (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("em", null, "Title is required"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: post.title
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown: "), "  ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 20,
    name: "markdown",
    defaultValue: post.markdown
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Updating..." : "Update Post")));
}
export {
  EditPost as default
};
//# sourceMappingURL=/build/routes/admin/edit/$slug-5V7W74FU.js.map
