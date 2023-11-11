import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";

@Component({
  tag: "checkbox-basic",
  styleUrl: "checkbox-basic.scss",
  shadow: false,
  scoped: true,
})
export class CheckboxBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  // Define properties
  @State() label: string = "false";

  // Define a custom event
  @Event() valueChange!: EventEmitter<boolean>;

  binary = true;

  code: any = {
    basic: `

<any-checkbox id="checkboxBasic"></any-checkbox>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-checkbox id="checkboxBasic"></any-checkbox>
</div>

`,

    javascript: `

let checkboxBasic = document.getElementById("checkboxBasic");

checkboxBasic.binary = true;
checkboxBasic.label = false;
checkboxBasic.addEventListener("valueChange", (event) => {
  checkboxBasic.label = event.detail.value;
});

`,
  };

  // Event listener for the checkbox value change
  handleValueChange(event: any) {
    this.label = event.detail.value.toString();
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Binary checkbox is used as a controlled input with <i>checked</i>{" "}
              and <i>binary</i> properties..
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-checkbox
              id="checkboxBasic"
              label={this.label}
              binary={this.binary}
              onValueChange={(event) => this.handleValueChange(event)}
            ></any-checkbox>
          </div>
          <app-code code={this.code} selector="checkbox-basic"></app-code>
        </section>
      </Host>
    );
  }
}
