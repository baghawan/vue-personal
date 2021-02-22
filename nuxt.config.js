export default {
    mode: "universal",
    target: 'static',
    router: {
        base: '/baghawan.github.io/'
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'BAGHAWAN | %s',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' },
            { hid: 'description', name: 'description', content: '%s' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow:400,600&display=swap' }
        ]
    },
    
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],
    
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
    
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxt/content'
    ],
    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
