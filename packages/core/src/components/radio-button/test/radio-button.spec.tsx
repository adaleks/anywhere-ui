import { newSpecPage } from '@stencil/core/testing';
import { RadioButton } from '../radio-button';

describe('any-radio-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<any-radio-button></any-radio-button>`,
    });
    expect(page.root).toEqualHtml(`
      <any-radio-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-radio-button>
    `);
  });
});
