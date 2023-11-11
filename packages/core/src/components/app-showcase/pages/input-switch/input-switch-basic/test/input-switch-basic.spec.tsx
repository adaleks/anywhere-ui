import { newSpecPage } from '@stencil/core/testing';
import { InputSwitchBasic } from '../input-switch-basic';

describe('input-switch-basic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSwitchBasic],
      html: `<input-switch-basic></input-switch-basic>`,
    });
    expect(page.root).toEqualHtml(`
      <input-switch-basic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-switch-basic>
    `);
  });
});
