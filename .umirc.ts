import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'NovUI',
  mode: 'site',
  logo: 'https://open.zantop.cn/logo200.png',
  favicon: 'https://open.zantop.cn/logo200.png',
  styles: [` .__dumi-default-menu-inner ul li {font-size:14px;}`],
  exportStatic: {},
  navs: [
    {
      title: '介绍',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/component',
    },
    {
      title: '更新日志',
      path: '/update',
    },
    {
      title: 'github',
      path: '/github',
    },
  ],
});
