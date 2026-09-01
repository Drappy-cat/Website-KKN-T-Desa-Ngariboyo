import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        // The React and Tailwind plugins are both required for Make
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            // Alias @ to the src directory
            '@': path.resolve(__dirname, './src'),
        },
    },

    // Optimasi startup dev server & file watcher
    server: {
        watch: {
            // Mengabaikan folder yang tidak perlu dipantau oleh file watcher
            ignored: ['**/dist/**', '**/.git/**', '**/scripts/**', '**/*.png', '**/*.jpg'],
        },
        warmup: {
            // Memanaskan modul utama agar loading instan
            clientFiles: [
                './src/main.tsx',
                './src/app/App.tsx',
                './src/app/routes.tsx',
            ],
        },
    },

    // Pra-bundling dependencies esbuild
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react-router',
            'lucide-react',
            '@radix-ui/react-dialog',
            'echarts-for-react',
            'fast-deep-equal',
            'clsx',
            'tailwind-merge',
        ],
    },

    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('echarts') || id.includes('zrender')) {
                            return 'vendor-echarts';
                        }
                        if (id.includes('@radix-ui')) {
                            return 'vendor-radix';
                        }
                        if (id.includes('lucide-react')) {
                            return 'vendor-icons';
                        }
                        if (id.includes('react-router') || id.includes('@remix-run/router')) {
                            return 'vendor-router';
                        }
                        if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
                            return 'vendor-react';
                        }
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1500,
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
})