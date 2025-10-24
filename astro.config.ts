import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

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
          label: 'Godot Engine',
          autogenerate: { directory: 'godot4' },
          collapsed: true,
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
          label: 'Server',
          autogenerate: { directory: 'server-side' },
          collapsed: true,
        },
        {
          label: 'Tip',
          autogenerate: { directory: 'tip' },
          collapsed: true,
        },
      ],
      social: [
        { href: 'https://github.com/jewelism', icon: 'github', label: 'GitHub' },
      ],
      title: 'Jewelry Dev',
      head: [{
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/favicon.png',
          type: 'image/png'
        },
      }],
    }),
    mdx(),
    sitemap()
  ],
  site: 'https://jewelism.github.io/',
  trailingSlash: 'always',
  outDir: 'docs',
})
