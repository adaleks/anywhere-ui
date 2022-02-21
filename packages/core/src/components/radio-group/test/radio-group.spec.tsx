import { newSpecPage } from '@stencil/core/testing';
import { RadioGroup } from '../radio-group';

describe('any-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioGroup],
      html: `<any-radio-group></any-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <any-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-radio-group>
    `);
  });
});
