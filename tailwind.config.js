/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = ({ dev, rootDir, srcDir }) => ({
    theme: {
        // compatible with @nuxtjs/color-mode
        darkSelector: ".dark-mode"
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
            `${srcDir}/components/**/*.{vue,js}`,
            `${srcDir}/layouts/**/*.vue`,
            `${srcDir}/pages/**/*.vue`,
            `${srcDir}/plugins/**/*.{js,ts}`,
            `${rootDir}/nuxt.config.{js,ts}`
        ]
    }
})
