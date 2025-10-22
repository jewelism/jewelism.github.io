import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    starlight({
      credits: false,
      plugins: [starlightThemeRapide()],
      sidebar: [
        {
          label: 'Home',
          items: ['index', 'about'],
        },
        {
          label: 'Javascript',
          autogenerate: { directory: 'js' },
          collapsed: true,
        },
        {
          label: 'Frontend',
          autogenerate: { directory: 'fe' },
          collapsed: true,
        },
        {
          label: 'Browser',
          autogenerate: { directory: 'browser' },
          collapsed: true,
        },
        {
          label: 'Computer Science',
          autogenerate: { directory: 'cs' },
          collapsed: true,
        },
        {
          label: 'Git',
          autogenerate: { directory: 'git' },
          collapsed: true,
        },
      ],
      social: [
        { href: 'https://github.com/jewelism', icon: 'github', label: 'GitHub' },
      ],
      title: 'Jewelry Dev',
    }),
    mdx(),
  ],
  site: 'https://jewelism.github.io/',
  outDir: 'docs',
})
