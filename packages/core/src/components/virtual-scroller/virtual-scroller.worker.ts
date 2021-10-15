import { findAndReplaceInnerHtml } from "../../utils/utils";

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
