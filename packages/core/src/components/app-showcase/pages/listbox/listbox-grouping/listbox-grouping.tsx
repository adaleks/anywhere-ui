import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "listbox-grouping",
  styleUrl: "listbox-grouping.scss",
  shadow: false,
  scoped: true,
})
export class ListboxGrouping {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public listboxWidth = {
    basic: { width: "18rem" },
  };

  public groupedCities = [
    {
      label: "Germany",
      items: [
        { label: "Berlin", value: "Berlin" },
        { label: "Munich", value: "Munich" },
        { label: "Hamburg", value: "Hamburg" },
      ],
    },
    {
      label: "Serbia",
      items: [
        { label: "Belgrade", value: "Belgrade" },
        { label: "Novi Sad", value: "Novi Sad" },
        { label: "Nis", value: "Nis" },
      ],
    },
    {
      label: "United States",
      items: [
        { label: "New York", value: "New York" },
        { label: "San Francisco", value: "San Francisco" },
        { label: "Chicago", value: "Chicago" },
      ],
    },
  ];

  public code: any = {
    basic: `
<any-listbox id="listboxGrouping"></any-listbox>
`,

    html: `
<div class="full-card flex justify-content-center">
  <any-listbox id="listboxGrouping"></any-listbox>
</div>
`,

    javascript: `
let groupedCities = [
  {
    label: "Germany",
    items: [
      { label: "Berlin", value: "Berlin" },
      { label: "Munich", value: "Munich" },
      { label: "Hamburg", value: "Hamburg" },
    ],
  },
  {
    label: "Serbia",
    items: [
      { label: "Belgrade", value: "Belgrade" },
      { label: "Novi Sad", value: "Novi Sad" },
      { label: "Nis", value: "Nis" },
    ],
  },
  {
    label: "United States",
    items: [
      { label: "New York", value: "New York" },
      { label: "San Francisco", value: "San Francisco" },
      { label: "Chicago", value: "Chicago" },
    ],
  },
];

let listboxGrouping = document.getElementById("listboxGrouping");

listboxGrouping.options = groupedCities;
listboxGrouping.group = true;
listboxGrouping.optionGroupChildren = "items";
listboxGrouping.scrollerHeight = "220px";
listboxGrouping.anyStyle = {
  width: "18rem"
};

listboxGrouping.addEventListener("valueChange", (event) => {
  console.log(event.detail.value);
});
`,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              When options are nested, enable grouping with the group property.
              The children of every group come from the optionGroupChildren
              property, which defaults to "items", and the group label is read
              from the optionLabel property, just like regular options. Group headers stay
              visible while the list is scrolled.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-listbox
              options={this.groupedCities}
              group={true}
              optionGroupChildren="items"
              scrollerHeight="220px"
              anyStyle={this.listboxWidth.basic}
              id="listboxGrouping"
            ></any-listbox>
          </div>
          <app-code code={this.code} selector="listbox-grouping"></app-code>
        </section>
      </Host>
    );
  }
}
