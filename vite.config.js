import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    autoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],
      imports: [
        'react',
        'react-router-dom',
        'mobx-react-lite',
        'mobx',
        {
          antd: [
            'Button',
            'Form',
            'FormInstance',
            'Input',
            'Upload',
            'Table',
            'Radio',
            'InputNumber',
            'Select',
            'Switch',
            'Tag',
          ],
        },
      ],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
});
