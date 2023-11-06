/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Source Sans', 'sans'],
            },
            colors: {
                'copyright-grey': '#858484',
                'input-grey': '#cccccc',
                'judo-purple': '#9a48d6',
            },
            boxShadow: {
                boxShadow: {
                    'main-shadow': '0 0 6px 0 rgba(0, 0, 0, 0.2);',
                },
            },
        },
    },
    plugins: [],
}
