import { Component, Host, Prop, h } from "@stencil/core";
import APIDoc from "../../../../doc/docs.json";

@Component({
  tag: "app-docapisection",
  styleUrl: "app-docapisection.scss",
  shadow: false,
  scoped: true,
})
export class AppDocapisection {
  @Prop() header: string;
  @Prop() docs: any; // Assuming _docs is of type any, you can change this to a more specific type

  _docs!: any[];

  componentWillLoad() {
    // console.log(APIDoc);

    if (this.docs) {
      this._docs = this.createDocs();
    }
  }

  isInterface(module) {
    return (
      module.components &&
      !Object.keys(module.components).length &&
      Object.keys(module.interfaces).indexOf("interfaces") === -1
    );
  }

  getDescription(module, _docName) {
    if (module.docs) {
      return module.docs;
    } else {
      return "No description available";
    }
  }

  merge(arr) {
    const mergedArray = [];
    const idMap = {};

    arr.forEach((element) => {
      if (!idMap[element.id]) {
        idMap[element.id] = element;
        mergedArray.push(element);
      } else {
        const existingElement = idMap[element.id];
        if (existingElement.data && element.data) {
          existingElement.data = existingElement.data.concat(element.data);
        }
      }
    });

    return mergedArray;
  }

  createDocs() {
    const newDocs = [];

    for (const docName of this.docs) {
      const moduleName = docName.toLowerCase();
      // console.log(moduleName);

      let module = APIDoc.components.find((component) => {
        // Returns the object where
        // the given property has some value
        return component.tag === moduleName;
      });

      let newDoc = {
        id: `api.${
          this.isInterface(module)
            ? this.docs[0].toLowerCase() + ".interfaces"
            : moduleName
        }`,
        isInterface: this.isInterface(module),
        label: this.toCamelCaseWithUpperFirst(docName.replace("any-", "")),
        description: this.getDescription(module, docName),
        children: [],
        docName: docName,
      };

      if (module) {
        let props: any = module ? module.props : undefined;
        let events: any = module ? module.events : undefined;
        let methods: any = module ? module.methods : undefined;
        let styles: any = module ? module.styles : undefined;
        let parts: any = module ? module.parts : undefined;
        let slots: any = module ? module.slots : undefined;

        if (props?.length) {
          newDoc.children.push({
            id: `api.${docName.toLowerCase()}.props`,
            label: "Properties",
            component: "app-docapitable",
            description: `Defines the input properties of the component.`,
            data: this.setPropsData(props),
          });
        }

        if (events?.length) {
          newDoc.children.push({
            id: `api.${docName.toLowerCase()}.events`,
            label: "Events",
            component: "app-docapitable",
            description: `Defines the custom events used by the component's emitters.`,
            data: this.setEventsData(events),
          });
        }

        if (methods?.length) {
          newDoc.children.push({
            id: `api.${docName.toLowerCase()}.methods`,
            label: "Methods",
            component: "app-docapitable",
            description: `Defines the methods of the component.`,
            data: this.setMethodsData(methods),
          });
        }

        if (styles?.length) {
          newDoc.children.push({
            id: `api.${docName.toLowerCase()}.styles`,
            label: "CSS Custom Properties",
            component: "app-docapitable",
            description: `Defines the CSS custom properties of the component.`,
            data: this.setStylesData(styles),
          });
        }

        if (parts?.length) {
          newDoc.children.push({
            id: `api.${docName.toLowerCase()}.parts`,
            label: "CSS Shadow Parts",
            component: "app-docapitable",
            description: `Defines the CSS shadow parts of the component.`,
            data: this.setShadowPartsData(parts),
          });
        }

        if (slots?.length) {
          newDoc.children.push({
            id: `api.${docName.toLowerCase()}.slots`,
            label: "Slots",
            component: "app-docapitable",
            description: `Defines the slots of the component.`,
            data: this.setSlotsData(slots),
          });
        }
      }

      newDocs.push(newDoc);
    }

    newDocs[0].children = [...this.merge(newDocs[0].children)];

    // console.log(newDocs);
    return newDocs.filter((doc) => !doc.isInterface);
  }

  toCamelCaseWithUpperFirst(inputString: string): string {
    const words = inputString
      .split(/\W+/) // Split by non-alphabet characters
      .filter((word) => word.length > 0); // Remove empty strings

    const camelCaseString = words
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join("");

    return camelCaseString;
  }

  setPropsData(props) {
    return props.map((prop) => ({
      name: prop.name,
      attribute: prop.attr,
      type: prop.type,
      default: prop.default ? prop.default : "null",
      description: prop.docs,
      deprecated: prop.deprecated ?? "",
      optional: prop.optional,
    }));
  }

  setEventsData(events: any) {
    return events.map((event: any) => ({
      name: event.event,
      description: event.docs,
    }));
  }

  setMethodsData(methods: any) {
    return methods.map((method: any) => ({
      name: method.name,
      description: method.docs,
      signature: method.signature,
    }));
  }

  setStylesData(styles: any) {
    return styles.map((style: any) => ({
      name: style.name,
      description: style.docs,
    }));
  }

  setShadowPartsData(parts: any) {
    return parts.map((part: any) => ({
      name: part.name,
      description: part.docs,
    }));
  }

  setSlotsData(slots: any) {
    return slots.map((slot: any) => ({
      name: slot.name,
      description: slot.docs,
    }));
  }

  render() {
    return (
      <Host>
        <div class="doc-main">
          <div class="doc-intro">
            <h1>
              {this.header}{" "}
              {!this.header.toLowerCase().includes("api") ? "API" : null}
            </h1>
            <p>
              API defines helper props, events and others for the AnywhereUI{" "}
              {this.header} component.
            </p>
          </div>
          <app-docsection apiDocs={this._docs}></app-docsection>
        </div>
        <app-docsection-nav docs={this._docs}></app-docsection-nav>
      </Host>
    );
  }
}
