import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/RA_props-catalog/',
  server: {
    open: true,
  },
});
