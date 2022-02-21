class RadioButtonRegistry {
  public radioButtons: any[] = [];
  constructor() {}
  add(radioButton: any) {
    this.radioButtons.push(radioButton);
  }

  remove(radioButton: any) {
    this.radioButtons = this.radioButtons.filter((c) => {
      return c !== radioButton;
    });
  }

  select(radioButton: any) {
    this.radioButtons.forEach((c) => {
      if (this.isSameGroup(c, radioButton) && c !== radioButton) {
        c.checked = false;
        c.nativeInput.checked = false;
      }
    });
  }

  private isSameGroup(controlPair: any, radioButton: any): boolean {
    return controlPair.name === radioButton.name;
  }
}

export const Registry = new RadioButtonRegistry();
