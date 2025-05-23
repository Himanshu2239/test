import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './client/src'),
            '@shared': path.resolve(__dirname, './shared')
        }
    },
    build: {
        outDir: 'dist/public',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'client/index.html')
            }
        }
    },
    root: 'client',
    server: {
        port: 5000,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true
            }
        }
    }
};

export default defineConfig(config); 