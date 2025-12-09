/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0f172a", // Deep Charcoal/Black
                surface: "#1e293b",    // Dark Grey for cards
                primary: "#06b6d4",    // Cyan-500
                secondary: "#22d3ee",  // Cyan-400
                input: "#334155",      // Dark Input
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
