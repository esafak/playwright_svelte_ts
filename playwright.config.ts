import { defineConfig } from '@playwright/test';

const port = 5173
 export default defineConfig({
	 testDir: 'tests',
	 reporter: 'html',
	 fullyParallel: true,
	 webServer: {
		 command: 'pnpm run build && pnpm run dev',
		 url: `http://localhost:${port}`,
	 },
	 testMatch: /(.+\.)?(test|spec)\.[jt]s/,
     use: {
		 baseURL: `http://localhost:${port}`
	 },

 });

