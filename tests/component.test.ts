import { test } from '@playwright/experimental-ct-svelte';
import Component from "./Component.svelte";

test('load component', async ({ mount }) => {
    await mount(Component)
});
