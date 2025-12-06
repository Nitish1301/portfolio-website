/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'charcoal': '#1a1a1a',
                'electric-blue': '#007bff',
                'neon-green': '#00ff80',
            },
            fontFamily: {
                sans: ['Inter', 'Montserrat', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
