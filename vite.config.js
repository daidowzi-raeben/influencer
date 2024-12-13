import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [vue()],
        server: {
            proxy: {
                "/api": {
                    // target: 'https://api.school-os.net/kworld',
                    target: 'http://localhost:3095/randBox',
                    // target: 'https://k-world365.com/kworld',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                }
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    };
});
