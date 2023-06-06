const IMAGEKIT_URL = 'https://ik.imagekit.io/g0dlexrqu' as const

export default defineNuxtConfig({
    experimental: {
        viewTransition: true,
    },
    css: [
        '@/assets/css/main.css',
    ],
    colorMode: {
        preference: 'system',
        fallback: 'dark',
        classSuffix: ''
    },
    modules: [
        '@vite-pwa/nuxt',
        'nuxt-icon',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        '@nuxtjs/device',
        '@nuxtjs/supabase',
        '@/modules/theme/index.ts',
    ],
    appConfig: {
        theme: {
            options: {
                dark: true
            },
            colors: {
                primary: '#347bff'
            },
        }
    },
    image: {
        provider: 'imagekit',
        imagekit: {
            baseURL: `${IMAGEKIT_URL}`,
            urlEndpoint: `${IMAGEKIT_URL}`
        }
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'Portfolio Maikel',
            short_name: 'Portfolio Maikel',
            theme_color: '#1B1B1F',
            icons: [
                {
                    src: '/icons/icon-72-72.png',
                    sizes: '72x72',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-96-96.png',
                    sizes: '96x96',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-144-144.png',
                    sizes: '144x144',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-192-192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-512-512.png',
                    sizes: '512x512',
                    type: 'image/png'
                },
                {
                    src: '/icons/icon-512-512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable'
                }
            ]
        },
        workbox: {
            navigateFallback: '/'
        },
        client: {
            installPrompt: true
        }
    },
})
