import { newSpecPage } from '@stencil/core/testing';
import { InputSwitchDisabled } from '../input-switch-disabled';

describe('input-switch-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSwitchDisabled],
      html: `<input-switch-disabled></input-switch-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <input-switch-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-switch-disabled>
    `);
  });
});
