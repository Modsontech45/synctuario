import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detect if running in GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: isGitHubPages ? '/synctuario/' : '/', // dynamic base
});
