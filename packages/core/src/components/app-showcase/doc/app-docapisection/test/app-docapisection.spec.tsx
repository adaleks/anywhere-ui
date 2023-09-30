import { newSpecPage } from '@stencil/core/testing';
import { AppDocapisection } from '../app-docapisection';

describe('any-app-docapisection', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDocapisection],
      html: `<any-app-docapisection></any-app-docapisection>`,
    });
    expect(page.root).toEqualHtml(`
      <any-app-docapisection>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-app-docapisection>
    `);
  });
});
