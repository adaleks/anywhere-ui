// Import statements for various views
import GetStarted from "./views/GetStarted/GetStarted.js";
import Listbox from "./views/Listbox/Listbox.js";
import Dropdown from "./views/Dropdown/Dropdown.js";
import VirtualScroller from "./views/VirtualScroller/VirtualScroller.js";
import InputText from "./views/InputText/InputText.js";
import InputTextarea from "./views/InputTextarea/InputTextarea.js";
import InputNumber from "./views/InputNumber/InputNumber.js";
import InputSwitch from "./views/InputSwitch/InputSwitch.js";
import Checkbox from "./views/Checkbox/Checkbox.js";
import TabView from "./views/TabView/TabView.js";
import Button from "./views/Button/Button.js";
import Badge from "./views/Badge/Badge.js";
import RippleEffect from "./views/RippleEffect/RippleEffect.js";
import RadioButton from "./views/RadioButton/RadioButton.js";
import Multiselect from "./views/Multiselect/Multiselect.js";

// A cache to store HTML templates with expiration time
const templateCache = {};
const tplCacheTimeout = 500000; // Timeout for template cache in milliseconds

// Function to convert a path string to a regular expression
const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// Function to extract route parameters from a matched URL
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

// Function to navigate to a given URL using pushState
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

// Functions to add or remove CSS classes from an element
const addClass = (element, className) => {
  if (element.classList) element.classList.add(className);
  else element.className += " " + className;
};

const removeClass = (element, className) => {
  if (element.classList) element.classList.remove(className);
  else
    element.className = element.className.replace(
      new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
};

// Function to hide the sidebar menu
const hideMenu = () => {
  removeClass(document.body, "blocked-scroll");
  removeClass(document.querySelector(".layout-sidebar"), "active");
  removeClass(document.querySelector(".layout-mask"), "layout-mask-active");
};

// Function to show the sidebar menu
const onMenuButtonClick = () => {
  addClass(document.body, "blocked-scroll");
  addClass(document.querySelector(".layout-sidebar"), "active");
  addClass(document.querySelector(".layout-mask"), "layout-mask-active");
};

// Function to update the active state of menu items based on the current path
const updateMenuActiveState = (currentPath) => {
  const menuItems = document.querySelectorAll("[data-link]");
  menuItems.forEach(function (item) {
    item.classList.remove("active");
    if (location.hash === "") {
      menuItems[0].classList.add("active");
    } else if (
      item.href.indexOf(removeSecondPartOfUrl(location.hash.replace("#", ""))) >
      -1
    ) {
      item.classList.add("active");
    }
  });
};

const removeSecondPartOfUrl = (inputUrl) => {
  // Split the URL by "/"
  var parts = inputUrl.split("/");

  // Check if there are at least two parts (i.e., /checkbox/label format)
  if (parts.length >= 2) {
    // Remove the second part (label) by taking the first part (checkbox)
    var newUrl = "/" + parts[1];
    return newUrl;
  } else {
    // If there's only one part or no parts, return the original URL
    return inputUrl;
  }
};

// The main router function to handle URL routing and view updates
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
      path: "/textarea",
      view: InputTextarea,
    },
    {
      path: "/input-number",
      view: InputNumber,
    },
    {
      path: "/input-switch",
      view: InputSwitch,
    },
    {
      path: "/checkbox",
      view: Checkbox,
    },
    {
      path: "/tab-view",
      view: TabView,
    },
    {
      path: "/button",
      view: Button,
    },
    {
      path: "/badge",
      view: Badge,
    },
    {
      path: "/ripple-effect",
      view: RippleEffect,
    },
    {
      path: "/radio-button",
      view: RadioButton,
    },
    {
      path: "/multiselect",
      view: Multiselect,
    },
  ];

  const currentPath = location.pathname;
  updateMenuActiveState(currentPath);

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: removeSecondPartOfUrl(location.hash.replace("#", "")).match(
        pathToRegex(route.path)
      ),
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
  const viewPath = match.route.path;

  let html = templateCache[viewPath]?.html;
  const expires = templateCache[viewPath]?.expires;

  if (!html || expires < Date.now()) {
    html = await view.getHtml();
    const expirationTime = Date.now() + tplCacheTimeout; // expire after 1 minute
    templateCache[viewPath] = {
      html,
      expires: expirationTime,
    };
  }

  document.querySelector("#app").innerHTML = html;
  if (Prism) {
    Prism.highlightAll();
  }

  view.executeScript();
  hideMenu();
};

// Event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      // const currentPath = e.target.getAttribute("href");
      const currentPath = e.target.href.substring(e.target.href.indexOf("#"));
      previousPathname = removeSecondPartOfUrl(currentPath);
      const path = location.hash;
      if (currentPath === path) return;
      navigateTo(currentPath);
      updateMenuActiveState(currentPath);
    }
  });

  // Event listener for the menu button
  let menuButton = document.querySelector(".menu-button");
  menuButton.onclick = function () {
    onMenuButtonClick();
  };

  // Event listener for the mask (overlay) when the menu is open
  let mask = document.querySelector(".layout-mask");
  mask.onclick = function () {
    hideMenu();
  };

  let previousPathname = removeSecondPartOfUrl(location.hash.replace("#", ""));

  window.addEventListener("hashchange", () => {
    setTimeout(() => {
      const newPathname = removeSecondPartOfUrl(location.hash.replace("#", ""));

      // console.log("Previous Pathname:", previousPathname);
      // console.log("New Pathname:", newPathname);

      if (newPathname !== previousPathname) {
        // console.log("Pathname Changed. Calling router()");
        router();
        previousPathname = newPathname;
      }
      // else {
      //   // console.log("Pathname not changed. Skipping router()");
      // }
    }, 100);
  });

  // Enable router on browser back or forward button
  window.addEventListener("load", () => {
    setTimeout(() => {
      // Hide the loader once content is loaded
      document.querySelector(".loader").style.display = "none";
    }, 1000);
  });

  // Initial router call
  router();
});
