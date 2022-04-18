import { json, redirect, useActionData, Form } from "remix";
import { userValidated } from "~/cookies";

const isCorrectName = (password: string) => {
  return (
    password.match(/tzintzev/i) ||
    password.match(/tsintsev/i) ||
    password.match(/do/i)
  );
};

export async function action({ request }) {
  const cookieHeader = request?.header?.get("Cookie");
  const cookie = (await userValidated.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();
  const password = bodyParams.get("password");
  if (isCorrectName(password)) {
    cookie.annageorge = true;
    return redirect("/", {
      headers: {
        "Set-Cookie": await userValidated.serialize(cookie),
      },
    });
  } else {
    return json({ formError: true });
  }
}

export default function Login() {
  const data = useActionData();

  if (data?.formError) {
    console.log(data.formError);
  }

  return (
    <div className="bg-black h-screen bg-cover text-white lg:px-20 sm:px-4 grid place-content-center">
      <div className="m-auto">
        <h1 className="text-4xl font-display pb-4">Welcome</h1>
        <p className="font-body">to view the website,</p>
        <p className="font-body">type the bride or the groom's last name</p>
        <Form className="py-8" replace method="post">
          <input type="text" name="password" className="text-sky-700" />
          <div className="py-4">
            {data?.formError && (
              <p className="font-body text-white pb-4">
                Incorrect, are you sure you know us?
              </p>
            )}
            <button type="submit" className="btn-primary-dark">
              ENTER
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
