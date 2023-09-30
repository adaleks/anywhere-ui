import { Component, h, Prop, Watch, Element } from "@stencil/core";
// import { Doc } from "src/app/showcase/domain/doc";
// import { AppDocApiTable } from "../docapitable/app.docapitable.component";

// interface Props {
//   id: string;
//   title: string;
//   component: any;
//   level?: number;
// }

@Component({
  tag: "app-docsection",
  styleUrl: "app-docsection.scss",
  shadow: false,
  scoped: true,
})
export class AppDocSection {
  // @Prop() docs!: Doc[];
  @Prop() docs?: any[];
  @Prop() apiDocs?: any[];

  currentDocIndex = -1;

  @Element() element: HTMLElement;

  componentDidLoad() {
    // this.loadComponents();
  }

  @Watch("docs")
  @Watch("apiDocs")
  loadComponents() {
    if (this.docs && this.docs.length) {
      for (let index = 0; index < this.docs.length; index++) {
        this.loadComponent(index);
      }
    }
    if (this.apiDocs && this.apiDocs.length) {
      for (let i = 0; i < this.apiDocs.length; i++) {
        this.loadApiDocComponent(i);
      }
    }
  }

  loadComponent(index: number) {
    this.currentDocIndex = index;
    const newComponent: any = this.docs[this.currentDocIndex];

    const component = document.createElement(newComponent.component);
    component.textId = newComponent.id;
    component.textTitle = newComponent.label;

    if (!newComponent.component && newComponent.children) {
      for (let i = 0; i < newComponent.children.length; i++) {
        const children = newComponent.children[i];
        const childComponent = document.createElement(children.component);
        childComponent.textId = children.id;
        childComponent.textTitle = children.label;

        if (childComponent.docsectiontext && i === 0) {
          childComponent.docsectiontext.parentTitle = newComponent.label;
          childComponent.docsectiontext.parentId = newComponent.id;
        }

        this.element.appendChild(childComponent);
      }
    }

    this.element.appendChild(component);
  }

  loadApiDocComponent(index: number) {
    this.currentDocIndex = index;
    const newComponent: any = this.apiDocs[this.currentDocIndex];

    if (newComponent && newComponent.children) {
      for (let i = 0; i < newComponent.children.length; i++) {
        const child = newComponent.children[i];
        if (child.data && child.data.length) {
          const childComponent = document.createElement(child.component);
          childComponent.textId = child.id;
          childComponent.anyId = child.id;
          childComponent.description = child.description;
          childComponent.data = child.data;
          childComponent.label = child.label;
          childComponent.relatedProp = child.relatedProp;

          if (i === 0 && newComponent.description) {
            childComponent.parentTitle = newComponent.label;
            childComponent.parentDescription = newComponent.description;
            childComponent.parentId = newComponent.id;
          }

          this.element.appendChild(childComponent);
        }
      }
    }
  }

  render() {
    return (
      <div>
        {this.docs &&
          this.docs.length > 0 &&
          this.docs.map((_doc, index) => this.loadComponent(index))}
        {this.apiDocs &&
          this.apiDocs.length > 0 &&
          this.apiDocs.map((_apiDoc, index) => this.loadApiDocComponent(index))}
      </div>
    );
  }
}
