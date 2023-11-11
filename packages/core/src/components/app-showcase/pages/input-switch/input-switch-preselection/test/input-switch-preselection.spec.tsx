import { newSpecPage } from '@stencil/core/testing';
import { InputSwitchPreselection } from '../input-switch-preselection';

describe('input-switch-preselection', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSwitchPreselection],
      html: `<input-switch-preselection></input-switch-preselection>`,
    });
    expect(page.root).toEqualHtml(`
      <input-switch-preselection>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-switch-preselection>
    `);
  });
});
