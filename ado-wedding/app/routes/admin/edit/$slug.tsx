import { ActionFunction, Form, LoaderFunction, redirect, useActionData, useLoaderData, useTransition } from "remix";
import invariant from "tiny-invariant";
import { getPost, updatePost } from "~/post";
import { PostError } from "./new";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors: PostError = {};
  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");

  await updatePost({ title, slug, markdown });

  return redirect("/admin");
};


export default function EditPost() {
    const post = useLoaderData();
    const errors = useActionData();
    const transition = useTransition();
  
    return (
      <Form method="post">
        <p>
          <label>
            Post Title:
            {errors?.title && <em>Title is required</em>}
            <input type="text" name="title" defaultValue={post.title}/>
          </label>
        </p>
        {/* <p>
          <label>
            Post Slug:
            {errors?.slug && <em>Slug is required</em>}
            <input type="text" name="slug" defaultValue={post.slug} />
          </label>
        </p> */}
        <p>
          <label htmlFor="markdown">Markdown: </label>
          {"  "}
          {errors?.markdown && <em>Markdown is required</em>}
          <br />
          <textarea id="markdown" rows={20} name="markdown" defaultValue={post.markdown} />
        </p>
        <p>
          <button type="submit">
            {transition.submission ? "Updating..." : "Update Post"}
          </button>
        </p>
      </Form>
    );
  }
  