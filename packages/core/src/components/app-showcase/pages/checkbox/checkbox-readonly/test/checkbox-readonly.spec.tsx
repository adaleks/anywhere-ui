import { newSpecPage } from '@stencil/core/testing';
import { CheckboxReadonly } from '../checkbox-readonly';

describe('any-checkbox-readonly', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxReadonly],
      html: `<any-checkbox-readonly></any-checkbox-readonly>`,
    });
    expect(page.root).toEqualHtml(`
      <any-checkbox-readonly>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-checkbox-readonly>
    `);
  });
});
