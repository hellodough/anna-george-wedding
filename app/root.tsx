import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction } from "remix";
import styles from "./styles/app.css";
import { userValidated } from "~/cookies";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";

export async function loader({ request }) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userValidated.parse(cookieHeader)) || {};
  let url = new URL(request.url);
  let hostname = url.hostname;
  let proto = request.headers.get("X-Forwarded-Proto") ?? url.protocol;
  let shouldRedirect = true;
  let targetPath = '/login';
  if (cookie?.annageorge) {
    if (url.pathname === "/login") {
      shouldRedirect = true;
      targetPath = '/'
    } else {
      shouldRedirect = false;
    }
  } else if (url.pathname === "/login") {
    shouldRedirect = false;
    
  }

  url.host =
    request.headers.get("X-Forwarded-Host") ??
    request.headers.get("host") ??
    url.host;
  url.protocol = "https:";

  if (proto === "http" && hostname !== "localhost") {
    const redirectUrl = shouldRedirect ? targetPath : url.toString();
    return redirect(redirectUrl, {
      headers: {
        "X-Forwarded-Proto": "https",
      },
    });
  }
  return shouldRedirect ? redirect(targetPath) : {}
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Satisfy&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,800;1,300;1,400;1,500&display=swap",
    },
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css",
    },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document title="anna & george">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div className="h-screen">
          <HeaderNav />
          <div className="lg:px-20 sm:px-4 pt-52 font-body">
            <h1>There was an error</h1>
            <p>{error.message}</p>
            <hr />
            {/* <img src="" /> */}
          </div>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  // add password page here
  return (
    <div className="remix-app bg-white h-full">
      <div className="remix-app__main">
        <div className="remix-app__main-content">{children}</div>
      </div>
      {/* <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>&copy; You!</p>
        </div>
      </footer> */}
    </div>
  );
}
