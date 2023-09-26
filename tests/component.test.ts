import { expect, test } from '@playwright/experimental-ct-svelte';
import Component from "../src/routes/Component.svelte";

test.use({ viewport: { width: 500, height: 500 } })
test('load component', async ({ mount }) => {
    const component = await mount(Component);
    await expect(component).toContainText("Hello, world!");
});
