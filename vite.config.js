import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import autoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

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
        'ahooks',
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
            'message',
            'Modal',
            'Tree',
            'TimePicker',
            'Tooltip',
            'Popover',
            'Layout',
            'Divider',
            'Space',
            'Pagination',
            'Col',
            'Row',
            'TreeSelect',
            'Tabs',
            'Popconfirm',
          ],
        },
        {
          react: ['Suspense', 'lazy'],
        },
        { '@/core/store': ['useStores', 'stores'] },
        { '@/core/routes': ['getRouters'] },
        { '@/shared/FHeader': [['default', 'FHeader']] },
        { '@/shared/LayoutIndex': [['default', 'LayoutIndex']] },
      ],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
  resolve: {
    // 用于对特定目录做特殊标记
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '@/core',
        replacement: resolve(__dirname, './src/core'),
      },
      {
        find: '@/domains',
        replacement: resolve(__dirname, './src/domains'),
      },
      {
        find: '@/features',
        replacement: resolve(__dirname, './src/features'),
      },
      {
        find: '@/pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@/public',
        replacement: resolve(__dirname, './src/public'),
      },
      {
        find: '@/shared',
        replacement: resolve(__dirname, './src/shared'),
      },
      {
        find: '@/styles',
        replacement: resolve(__dirname, './src/styles'),
      },
      {
        find: '@/utils',
        replacement: resolve(__dirname, './src/utils'),
      },
      {
        find: /^~/,
        replacement: '',
      },
    ],
  },
});
