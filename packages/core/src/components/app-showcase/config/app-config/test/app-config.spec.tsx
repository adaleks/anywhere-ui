import { newSpecPage } from '@stencil/core/testing';
import { AppConfig } from '../app-config';

describe('any-app-config', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppConfig],
      html: `<any-app-config></any-app-config>`,
    });
    expect(page.root).toEqualHtml(`
      <any-app-config>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-app-config>
    `);
  });
});
