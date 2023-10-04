import { Component, h, Prop /*, Element */ } from "@stencil/core";
import Iconify from "@iconify/iconify";
import { loadIcons } from "../../../../utils/load-icons";

@Component({
  tag: "app-docapitable",
  styleUrl: "app-docapitable.scss",
  shadow: false,
  scoped: true,
})
export class AppDocApiTable {
  @Prop() anyId: string;
  @Prop() label: string;
  @Prop() data: any[];
  @Prop() description: string;
  @Prop() relatedProp: string;
  @Prop() parentTitle: string;
  @Prop() parentDescription: string;
  @Prop() parentId: string;
  @Prop() level: number;
  @Prop() isInterface: boolean = false;

  // @Element() private element: HTMLElement;

  componentWillLoad() {
    this.loadIcons();
  }

  async loadIcons() {
    await loadIcons(["fa6-solid:link"]).catch((err) => {
      console.error("Failed to load icons:", err.missing);
    });
    const checkboxElements = document.querySelectorAll(".link-icon");

    checkboxElements.forEach((checkboxElement) => {
      const iconName = "fa6-solid:link";
      checkboxElement.innerHTML = Iconify.renderHTML(iconName, {});
    });
  }

  navigate(event: MouseEvent, param: string) {
    if (typeof window !== "undefined") {
      const parentElement = (event.currentTarget as HTMLElement)
        .parentElement as HTMLElement;

      const hashParts = window.location.hash.split("/");

      if (hashParts[2]) {
        hashParts.splice(2); // Remove all segments after "/#/checkbox/"
        hashParts.push(this.anyId); // Add the new "this.anyId" segment
        window.location.hash = hashParts.join("/") + "." + param;
      } else {
        window.location.hash =
          window.location.hash + "/" + hashParts.push(this.anyId) + "." + param; // Add the new "this.anyId" segment
      }

      // window.location.hash = this.anyId + "." + param;

      setTimeout(() => {
        parentElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }, 1);
      event.preventDefault();
    }
  }

  getKeys(object: any) {
    return Object.keys(object);
  }

  getEntries(object: any) {
    return Object.entries(object);
  }

  getType(value: string) {
    if (this.label === "Templates") {
      return value?.split("|");
    }
    if (this.label === "Methods" && !value) {
      return ["-"];
    }

    return value
      ?.split("|")
      .map((item: string) => item.replace(/(\[|\]|<|>).*$/gm, "").trim());
  }

  isLinkType(value: string) {
    if (this.label === "Templates") return false;
    const validValues = ["confirmationoptions", "toastmessageoptions"];
    return (
      value.toLowerCase().includes(this.anyId.split(".")[1].toLowerCase()) ||
      validValues.includes(value.toLowerCase())
    );
  }

  setLinkPath(value: string, type: string) {
    const currentRoute = window.location.pathname;
    let componentName = this.anyId.split(".")[1];

    const validValues = ["menuitem", "confirmationoptions"];
    let definationType = type
      ? type
      : value.includes("Type")
      ? "types"
      : value.includes("Event")
      ? "events"
      : validValues.includes(value.toLowerCase())
      ? "options"
      : "interfaces";

    if (componentName.includes("toast")) {
      componentName = "toast";
    }

    return definationType === "options"
      ? `/${currentRoute}/#api.${definationType}.${value}`
      : `/${currentRoute}/#api.${componentName}.${definationType}.${value}`;
  }

  scrollToLinkedElement(event: MouseEvent, value: string) {
    if (document && document.createElement) {
      const section = this.label === "Emitters" ? "Events" : this.label;
      const elementId = `api.${this.anyId
        .split(".")[1]
        .toLowerCase()}.${section.toLowerCase()}.${value}`;

      setTimeout(() => {
        this.scrollToLabelById(elementId);
      }, 1);

      event.preventDefault();
    }
  }

  scrollToLabelById(id: string) {
    if (typeof document !== "undefined") {
      const label = document.getElementById(id);
      window.location.hash = id;
      label &&
        label.parentElement.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
    }
  }

  render() {
    return (
      <div>
        {this.data ? (
          <div>
            {this.parentId ? (
              <div class="my-3 pt-3">
                <app-docsectiontext
                  parent-id={this.parentId}
                  parent-title={this.parentTitle}
                  parent-description={this.parentDescription}
                  level={2}
                ></app-docsectiontext>
              </div>
            ) : null}
            <app-docsectiontext
              textId={this.anyId}
              textTitle={this.label}
              level={3}
            >
              <p>{this.description || null}</p>
            </app-docsectiontext>

            <div
              class="doc-tablewrapper full-card mt-3"
              style={{ display: !this.data[0].data ? "block" : "none" }}
            >
              <table class="doc-table">
                <thead>
                  <tr>
                    {this.getKeys(this.data[0]).map((key) => (
                      <th>
                        {key !== "readonly" &&
                        key !== "optional" &&
                        key !== "deprecated"
                          ? key
                          : null}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.data.map((prop) => (
                    <tr>
                      {this.getEntries(prop).map((entry: any) => (
                        <td
                          class={{
                            "doc-option-type": entry[0] === "type",
                            "doc-option-attr": entry[0] === "attribute",
                            "doc-option-default": entry[0] === "default",
                          }}
                        >
                          {entry[0] !== "readonly" &&
                          entry[0] !== "optional" &&
                          entry[0] !== "deprecated" ? (
                            <span>
                              {entry[0] === "name" ? (
                                <span
                                  id={this.anyId + "." + entry[1]}
                                  class={{
                                    "doc-option-name": true,
                                    "line-through cursor-pointer":
                                      !!prop.deprecated,
                                  }}
                                  title={prop.deprecated}
                                >
                                  {entry[1] || "-"}
                                  <a
                                    onClick={(event) =>
                                      this.navigate(event, entry[1])
                                    }
                                    class="doc-option-link"
                                  >
                                    <i class="link-icon iconify"></i>
                                  </a>
                                </span>
                              ) : null}
                              {entry[0] === "type" ? entry[1] || "-" : null}
                              {entry[0] === "parameters" ? (
                                <span>
                                  {entry[1].name ? (
                                    <span
                                      class={{
                                        "parameter-bold":
                                          this.label === "Templates",
                                      }}
                                    >
                                      {entry[1].name} :
                                    </span>
                                  ) : (
                                    <span>-</span>
                                  )}
                                  {entry[1].type
                                    .split("|")
                                    .map((value: string, i: number) => (
                                      <span>
                                        {i !== 0 ? " |" : " "}
                                        {this.isLinkType(value) ? (
                                          <a
                                            onClick={(event) =>
                                              this.scrollToLinkedElement(
                                                event,
                                                value
                                              )
                                            }
                                          >
                                            {value || "-"}
                                          </a>
                                        ) : (
                                          <span>{value}</span>
                                        )}
                                      </span>
                                    ))}
                                </span>
                              ) : null}
                              {entry[0] !== "name" &&
                              entry[0] !== "type" &&
                              entry[0] !== "parameters" ? (
                                <span id={this.anyId + "." + entry[0]}>
                                  {entry[1]}
                                </span>
                              ) : null}
                            </span>
                          ) : null}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {this.data[0].data && this.data[0].data.length > 0 ? (
              <div>
                {this.data.map((childData: any) => (
                  <app-docapitable
                    anyId={childData.id}
                    data={childData.data}
                    label={childData.label}
                    description={childData.description}
                    relatedProp={childData.relatedProp}
                  ></app-docapitable>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}
