/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"SourceSansPro"', '"sans"'],
            },
            colors: {
                'copyright-grey': '#858484',
                'input-grey': '#cccccc',
                'judo-purple': '#9a48d6',
            },
        },
    },
    plugins: [],
}
