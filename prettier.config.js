//  @ts-check

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    tabWidth: 4,
    printWidth: 120,
    semi: false,
    trailingComma: 'all',
    tailwindStylesheet: './src/styles.css',
    plugins: ['prettier-plugin-tailwindcss'],
}

export default config
