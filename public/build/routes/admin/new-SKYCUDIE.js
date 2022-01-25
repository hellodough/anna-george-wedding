import {
  Form
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/admin/new.tsx?browser
init_react();

// app/routes/admin/new.tsx
init_react();
function NewPost() {
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title:", (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("em", null, "Title is required"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Slug:", (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("em", null, "Slug is required"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown: "), "  ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 20,
    name: "markdown"
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Create Post")));
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/admin/new-SKYCUDIE.js.map
