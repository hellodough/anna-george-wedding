var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/ado/Documents/GitHub/anna-george-wedding/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  NavMenu: () => NavMenu,
  default: () => App,
  links: () => links
});
var import_remix2 = __toModule(require("remix"));

// app/styles/app.css
var app_default = "/build/_assets/app-H4RM5FEP.css";

// route-module:/Users/ado/Documents/GitHub/anna-george-wedding/app/root.tsx
var import_react = __toModule(require("@headlessui/react"));
var import_outline = __toModule(require("@heroicons/react/outline"));
var navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Bridesmaids", href: "/bridesmaids", current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavMenu() {
  return /* @__PURE__ */ React.createElement(import_react.Disclosure, {
    as: "nav"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /* @__PURE__ */ React.createElement(import_react.Disclosure.Button, {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ React.createElement(import_outline.XIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(import_outline.MenuIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex items-center justify-between sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 flex items-center hidden sm:block"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    title: "Anna & George wedding"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-display text-6xl"
  }, "anna & george")))))), /* @__PURE__ */ React.createElement(import_react.Disclosure.Panel, {
    className: "sm:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(import_react.Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))));
}
var links = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
    },
    { rel: "stylesheet", href: app_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app bg-amber-400 h-full"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__header-content"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main-content"
  }, children)));
}

// route-module:/Users/ado/Documents/GitHub/anna-george-wedding/app/routes/bridesmaids/index.tsx
var bridesmaids_exports = {};
__export(bridesmaids_exports, {
  default: () => Bridesmaids
});
var import_remix3 = __toModule(require("remix"));
function Bridesmaids() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-amber-400 h-screen bg-cover"
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 flex items-center "
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    title: "Anna & George wedding"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-display lg:text-4xl md:text-2xl sm:text-xl xs:text-l"
  }, "anna & george")))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:px-20 sm:px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid xs:gap-1 gap-4 grid-cols-2 s:grid-cols-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-baseline items-stretch"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://github.com/hellodough/anna-george-wedding/blob/e4e91e46c49ae9ddb7f87874d4d99c59e657b686/ado-wedding/assets/images/smile-cutout.png?raw=true"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center s:col-span-3"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl xs:my-4 my-8 font-display"
  }, "Hey,"), /* @__PURE__ */ React.createElement("p", {
    className: "lg:text-base xs:text-sm mb-6 font-body max-w-sm"
  }, `Thanks for being part of my bridal party, I can't wait to celebrate with you. I created this page so we can plan things out, and we can use "discord" for chatting.`), /* @__PURE__ */ React.createElement("a", {
    href: "https://discord.gg/UGqPPgnPNH",
    className: "btn-primary"
  }, "Start talking"))), /* @__PURE__ */ React.createElement("div", {
    hidden: true
  }, /* @__PURE__ */ React.createElement("p", null, "I\u2019m still working on this page, so it is empty for now, but I\u2019m planning on including:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "bridesmaid dress colors"), /* @__PURE__ */ React.createElement("li", null, "wedding schedule"), /* @__PURE__ */ React.createElement("li", null, "other bridesmaids contact information"), /* @__PURE__ */ React.createElement("li", null, "dress inspo"))))));
}

// route-module:/Users/ado/Documents/GitHub/anna-george-wedding/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta
});
var import_remix4 = __toModule(require("remix"));
var meta = () => {
  return {
    title: "Anna & George",
    description: "Come celebrate our marriage with us!"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-hero-image w-screen h-screen bg-no-repeat text-white bg-cover bg-center"
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 flex items-center "
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Anna & George wedding"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-display lg:text-4xl md:text-2xl sm:text-xl xs:text-l"
  }, "anna & george")))))), /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-col text-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-body uppercase text-xl"
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 500 100"
  }, /* @__PURE__ */ React.createElement("path", {
    id: "curve",
    fill: "transparent",
    d: "M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
  }), /* @__PURE__ */ React.createElement("text", {
    width: "500",
    className: "fill-white font-bold tracking-widest"
  }, /* @__PURE__ */ React.createElement("textPath", {
    xlinkHref: "#curve",
    startOffset: "50%",
    textAnchor: "middle"
  }, "You're invited to")))), /* @__PURE__ */ React.createElement("div", {
    className: "font-bold text-4xl s:text-xl uppercase"
  }, "the", /* @__PURE__ */ React.createElement("br", null), " wedding", /* @__PURE__ */ React.createElement("br", null), " of"), /* @__PURE__ */ React.createElement("div", {
    className: "font-display text-8xl s:text-2xl py-6"
  }, "Anna & George")), /* @__PURE__ */ React.createElement("div", {
    className: "uppercase text-bold"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl tracking-wider"
  }, "Saturday"), /* @__PURE__ */ React.createElement("p", {
    className: "text-4xl"
  }, "07 \xB7 16 \xB7 22"), /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl tracking-wider"
  }, "Chicago")))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/bridesmaids/index": {
    id: "routes/bridesmaids/index",
    parentId: "root",
    path: "bridesmaids",
    index: true,
    caseSensitive: void 0,
    module: bridesmaids_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
