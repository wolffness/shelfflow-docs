// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.shelfflow.com.br',
	redirects: {
		'/getting-started': '/primeiros-passos',
		'/getting-started/quick-start': '/primeiros-passos/guia-rapido',
		'/getting-started/onboarding-checklist': '/primeiros-passos/lista-de-verificacao',
		'/features/looks': '/features/shop-the-look',
		'/features/billing': '/features/cobranca',
	},
	integrations: [
		starlight({
			title: 'ShelfFlow',
			logo: {
				src: './src/assets/logo-icon.svg',
				alt: 'ShelfFlow',
			},
			defaultLocale: 'root',
			disable404Route: true,
			locales: {
				root: { label: 'Português', lang: 'pt-BR' },
			},
			sidebar: [
				{
					label: 'Primeiros passos',
					autogenerate: { directory: 'primeiros-passos' },
				},
				{
					label: 'Funcionalidades',
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Integrações',
					autogenerate: { directory: 'platforms' },
				},
				{
					label: 'Guias Práticos',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Referência',
					items: [{ slug: 'faq' }, { slug: 'troubleshooting' }, { slug: 'changelog' }],
				},
			],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: '',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
					},
				},
			],
		}),
	],
});
