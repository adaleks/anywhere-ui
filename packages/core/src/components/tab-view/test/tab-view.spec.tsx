import { newSpecPage } from '@stencil/core/testing';
import { TabView } from '../tab-view';

describe('any-tab-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabView],
      html: `<any-tab-view></any-tab-view>`,
    });
    expect(page.root).toEqualHtml(`
      <any-tab-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-tab-view>
    `);
  });
});
