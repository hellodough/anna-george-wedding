import {
  invariant,
  updatePost
} from "/build/_shared/chunk-RTKDAKHZ.js";
import {
  import_server_runtime
} from "/build/_shared/chunk-MPTF7MYS.js";
import "/build/_shared/chunk-X5QBJ4I3.js";
import {
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/admin/edit.tsx?browser
init_react();

// app/routes/admin/edit.tsx
init_react();
var loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};
var action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");
  await updatePost({ title, slug, markdown });
  return (0, import_server_runtime.redirect)("/admin");
};
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/admin/edit-GBNUCTX6.js.map
