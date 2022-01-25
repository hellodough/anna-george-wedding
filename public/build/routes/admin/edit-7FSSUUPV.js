import {
  invariant
} from "/build/_shared/chunk-OVH3QSOJ.js";
import {
  import_server_runtime
} from "/build/_shared/chunk-XJZSZRHC.js";
import "/build/_shared/chunk-H7OMKS7N.js";
import {
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/admin/edit.tsx?browser
init_react();

// app/routes/admin/edit.tsx
init_react();
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
  await createPost({ title, slug, markdown });
  return (0, import_server_runtime.redirect)("/admin");
};
export {
  action
};
//# sourceMappingURL=/build/routes/admin/edit-7FSSUUPV.js.map
