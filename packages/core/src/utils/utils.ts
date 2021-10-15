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

// Virtual Scroller utils

const getItem = (
  itemTag: string,
  itemData: any,
  slotNode: string,
  index: number,
  itemSize: number,
  itemClass?: string
) => {
  let itemHTML = "";
  let itmClass = itemClass ? " " + itemClass : "";

  const newNode = findAndReplaceInnerHtml(slotNode, itemData);
  itemHTML += `<${itemTag} aria-selected="false" class="any-virtual-scroll-item${itmClass}" data-index="${index}"`;
  if (itemSize) {
    itemHTML += `style="height: ${itemSize + "px"} "`;
  }
  itemHTML += `>`;
  itemHTML += `${newNode}</${itemTag}>`;
  // itemHTML = itemHTML.

  return itemHTML;
};

export const getRows = async (
  itemTag: string,
  items: any[],
  itemSize: number,
  slotNode: string,
  start?: number,
  end?: number,
  itemClass?: string,
  loadingSlotNode?: string
) => {
  const rows = [];
  if (!start) start = 0;
  //   else items.slice(start, 0);
  for (let index = start; index < items.length; index++) {
    const item = items[index];
    if (!item && loadingSlotNode) {
      rows.push(
        getItem(itemTag, item, loadingSlotNode, index, itemSize, itemClass)
      );
    } else {
      rows.push(getItem(itemTag, item, slotNode, index, itemSize, itemClass));
    }
    if (end > 0 && index == end - 1) {
      return rows;
      //   setTimeout(() => {
      //     getRows(items, itemSize, slotNode, 1000);
      //   }, 1);
    }
  }
  return rows;
};
