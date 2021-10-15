import _ from "lodash";

export const findAndReplaceInnerHtml = (
  node: HTMLElement | string,
  map: Object
): HTMLElement => {
  let clonedNode;
  let replacedHTML;
  let itemKeys;
  if (typeof node === "string") {
    // clonedNode = node;
    replacedHTML = node;
    itemKeys = node.match(/(?<=#=item.\s*).*?(?=\s*#)/gs);
  } else {
    clonedNode = node.cloneNode(true) as HTMLElement;
    itemKeys = clonedNode.innerHTML.match(/(?<=#=item.\s*).*?(?=\s*#)/gs);
    replacedHTML = clonedNode.innerHTML;
  }
  if (!_.isEmpty(itemKeys)) {
    itemKeys.forEach((a) => {
      replacedHTML = replacedHTML.replace(
        /#=item.[\s\S]*?#/,
        get(a.split("."), map)
      );
    });
  }

  if (typeof node === "string") {
    return replacedHTML;
  }

  clonedNode.innerHTML = replacedHTML;
  return clonedNode;
};

export const get = (p, o) =>
  p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);

export const getNodeIndex = (el) => {
  return Array.from(document.getElementsByTagName(el.tagName)).indexOf(el);
};

export const asyncForEach = (
  arr: any[],
  chunks: number,
  cb: Function,
  done: Function
) => {
  (function next(i) {
    if (i >= arr.length) {
      if (done) done();
      return;
    }
    let stop = i + chunks;
    setTimeout(next, 1, stop); // a small trick to defer actions
    while (i < arr.length && i < stop) cb(arr[i], i++, arr);
  })(0);
};

export const uuid = () => {
  let dt = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};

export const scrollStop = (
  node: any,
  callback: Function,
  refresh: number = 66
) => {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== "function") return;

  if (!node) node = window;

  // Setup scrolling variable
  let isScrolling: any;

  // Listen for scroll events
  node.addEventListener(
    "scroll",
    function () {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, refresh);
    },
    false
  );
};
