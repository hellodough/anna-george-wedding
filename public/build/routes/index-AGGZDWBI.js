import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-IJWY473I.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/ado/Documents/GitHub/anna-george-wedding/ado-wedding/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "Anna & George",
    description: "Come celebrate our marriage with us!"
  };
};
function Index() {
  let data = useLoaderData();
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
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    title: "Anna & George wedding"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-display lg:text-4xl md:text-2xl sm:text-xl xs:text-l"
  }, "anna & george")))))), /* @__PURE__ */ React.createElement("main", {
    className: " flex items-center flex-col text-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-body uppercase text-2xl"
  }, "You're invited to"), /* @__PURE__ */ React.createElement("div", {
    className: "font-bold text-body uppercase"
  }, "the wedding of"), /* @__PURE__ */ React.createElement("div", {
    className: "text-display text-6xl"
  }, "Anna & George")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Saturday"), /* @__PURE__ */ React.createElement("p", null, "07 - 16 - 22"), /* @__PURE__ */ React.createElement("p", null, "Chicago")))));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-AGGZDWBI.js.map
