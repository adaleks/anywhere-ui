import AbstractView from "../AbstractView.js";
import {
  Cities
} from "../../data/Cities.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dropdown");
    this.cities = Cities;
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/dropdown', '_blank');
    });
    let citiesFormated = this.cities.map((obj) => {
      if (obj.value.countryCode) {
        obj.value.countryCode = obj.value.countryCode.toLowerCase();
      }
      return obj;
    });

    let virtualItems = Array.from({
      length: 10000
    }).map((v, i) => {
      return {
        label: "Item " + i,
        value: "Item " + i,
      };
    });

    // BAsic Dropdown
    this.singleDropdown = document.querySelector(".dd1");
    // this.singleDropdown.disabled = true;
    // this.singleDropdown.readonly = true;
    this.singleDropdown.anyStyle = {
      width: "14rem",
    };
    this.singleDropdown.options = citiesFormated;
    this.singleDropdown.optionLabel = "value.country";
    // setTimeout(() => {
    //   this.singleDropdown.value = {
    //     code: "NY",
    //     country: "USA",
    //     countryCode: "us",
    //     id: 1,
    //     name: "New York",
    //   };
    //   // this.virtualDropdown.value = "Item 9950";
    // }, 2000);

    // Advanced Dropdown
    this.advancedDropdown = document.querySelector(".dd2");
    // this.advancedDropdown.readonly = true;
    // this.advancedDropdown.disabled = true;
    // this.advancedDropdown.value = {
    //   code: "NY",
    //   country: "USA",
    //   countryCode: "us",
    //   id: 1,
    //   name: "New York",
    // };
    this.advancedDropdown.anyStyle = {
      width: "14rem",
    };
    this.advancedDropdown.options = citiesFormated;
    let style = document.querySelector(".flags-style");
    this.advancedDropdown.shadowRoot.appendChild(style.cloneNode(true));

    this.advancedDropdown.addEventListener("aOnShowStart", (event) => {
      console.log("Dropdown onShowStart:", event);
      let style = document.querySelector(".flags-style");
      this.advancedDropdown.shadowRoot
        .querySelector("any-listbox")
        .shadowRoot.appendChild(style.cloneNode(true));
    });
    // Dropdown with virtual scroll
    this.virtualDropdown = document.querySelector(".dd3");
    this.virtualDropdown.anyStyle = {
      width: "14rem",
    };
    this.virtualDropdown.options = virtualItems;
    // this.virtualDropdown.options = citiesFormated;
    this.virtualDropdown.virtualScroll = true;
    // this.advancedDropdown.virtualScroll = true;
    // this.singleDropdown.virtualScroll = true;
    // this.virtualDropdown.value = "Item 9950";
    // this.virtualDropdown.disabled = true;
  }

  async getHtml() {
    return fetch('app/views/Dropdown/Dropdown.html')
      .then(data => {
        return data.text();
      });
    // return `
    //         <div class="content-section introduction">
    //           <div class="feature-intro">
    //             <h1>Dropdown</h1>
    //             <p>Dropdown is used to select an item from a list of options.</p>
    //           </div>
    //         </div>
    //         <div class="content-section">
    //           <div class="full-card">
    //             <h5>Basic</h5>
    //             <any-dropdown class="dd1" placeholder="Select a Country" show-clear="true">
    //             </any-dropdown>
    //             <h5>Advanced with Templating, Filtering and Clear Icon</h5>
    //             <any-dropdown class="dd2" placeholder="Select a City" show-clear="true">
    //               <div slot="selectedItem">
    //                 <div style="display: flex; align-items: center;">
    //                   <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
    //                     style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
    //                     alt="#=item.value.country# Flag">
    //                   <b>#=item.label#</b>
    //                 </div>
    //               </div>
    //               <div slot="item">
    //                 <div style="display: flex; align-items: center;">
    //                   <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
    //                     style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
    //                     alt="#=item.value.country# Flag">
    //                   <b>#=item.label# (#=item.value.code#)</b>
    //                 </div>
    //               </div>
    //             </any-dropdown>
    //             <h5>Virtual Scroll (10000 Items)</h5>
    //             <any-dropdown class="dd3" placeholder="Select Item" show-clear="true">
    //               <div slot="item">#=item.label#</div>
    //               <div slot="selectedItem">#=item.value#</div>
    //             </any-dropdown>
    //           </div>
    //         </div>
    //     `;
  }
}
