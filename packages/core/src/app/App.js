import GetStarted from "./views/GetStarted.js";
import Listbox from "./views/Listbox.js";
import Dropdown from "./views/Dropdown.js";
import VirtualScroller from "./views/VirtualScroller.js";
import InputText from "./views/InputText.js";
import Checkbox from "./views/Checkbox.js";
// import { Prism } from "prismjs/prism.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: GetStarted,
    },
    {
      path: "/listbox",
      view: Listbox,
    },
    {
      path: "/dropdown",
      view: Dropdown,
    },
    {
      path: "/virtual-scroller",
      view: VirtualScroller,
    },
    {
      path: "/input-text",
      view: InputText,
    },
    {
      path: "/checkbox",
      view: Checkbox,
    },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  const menuItems = document.querySelectorAll("[data-link]");
  menuItems.forEach(function (item) {
    if (location.pathname !== "/") {
      item.classList.remove("active");
      if (item.href.indexOf(location.pathname) > -1)
        item.classList.add("active");
    }
  });

  document.querySelector("#app").innerHTML = await view.getHtml();
  if (Prism) {
    Prism.highlightAll();
  }

  view.executeScript();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
      const menuItems = document.querySelectorAll("[data-link]");
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });
  // setTimeout(() => {
  //   Prism.highlightAll();
  // });

  router();
});
