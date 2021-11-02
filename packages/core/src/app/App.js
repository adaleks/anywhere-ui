import GetStarted from "./views/GetStarted/GetStarted.js";
import Listbox from "./views/Listbox/Listbox.js";
import Dropdown from "./views/Dropdown/Dropdown.js";
import VirtualScroller from "./views/VirtualScroller/VirtualScroller.js";
import InputText from "./views/InputText/InputText.js";
import Checkbox from "./views/Checkbox/Checkbox.js";
import TabView from "./views/TabView/TabView.js";
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

const addClass = (element, className) => {
  if (element.classList)
    element.classList.add(className);
  else
    element.className += ' ' + className;
};

const removeClass = (element, className) => {
  if (element.classList)
    element.classList.remove(className);
  else
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

const hideMenu = () => {
  removeClass(document.body, 'blocked-scroll');
  removeClass(document.querySelector('.layout-sidebar'), 'active');
  removeClass(document.querySelector('.layout-mask'), 'layout-mask-active');
};

const onMenuButtonClick = () => {
  addClass(document.body, 'blocked-scroll');
  addClass(document.querySelector('.layout-sidebar'), 'active');
  addClass(document.querySelector('.layout-mask'), 'layout-mask-active');
};

const router = () => {
  const routes = [{
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
    {
      path: "/tab-view",
      view: TabView,
    },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.hash.replace("#", "").match(pathToRegex(route.path)),
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
    item.classList.remove("active");
    if (location.hash === '') {
      menuItems[0].classList.add("active");
    } else if (item.href.indexOf(location.hash.replace('#', "")) > -1) {
      item.classList.add("active");
    }
  });

  setTimeout(async () => {
    document.querySelector("#app").innerHTML = await view.getHtml();
    if (Prism) {
      Prism.highlightAll();
    }

    view.executeScript();
    hideMenu();
  }, 100);
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

  let menuButton = document.querySelector('.menu-button');
  menuButton.onclick = function () {
    onMenuButtonClick();
  };

  let mask = document.querySelector('.layout-mask');
  mask.onclick = function () {
    hideMenu();
  };

  router();
});
