let dev = process.env.NODE_ENV !== 'production'

module.exports = {
    theme: {
        // compatible with @nuxtjs/color-mode
        darkSelector: ".dark-mode",
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1600px'
        },

        fontFamily: {
            'sans': ['Barlow', 'ui-sans-serif', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif']
        },

        fontWeight: {
            normal: 400,
            bold: 600,
        },

        container: {
            center: true,
            padding: '1.5rem'
        }
    },
    variants: {
        backgroundColor: [
            "dark",
            "dark-hover",
            "dark-group-hover",
            "dark-even",
            "dark-odd"
        ],
        borderColor: ["dark", "dark-focus", "dark-focus-within"],
        textColor: ["dark", "dark-hover", "dark-active"]
    },
    plugins: [
        require("tailwindcss-dark-mode")()
    ],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: !dev,
        content: [
            `./components/**/*.{vue,js}`,
            `./layouts/**/*.vue`,
            `./pages/**/*.vue`,
            `./plugins/**/*.{js,ts}`,
            `./nuxt.config.{js,ts}`
        ]
    }
}
