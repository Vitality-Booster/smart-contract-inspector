const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#252f3f',
                secondary: '#56657f',
                gray: colors.gray,
            },
            animation: {
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            fontSize: {
                sm: '0.875rem',
            },
            fontWeight: {
                bold: '700',
            },
            borderRadius: {
                lg: '0.5rem',
            },
            boxShadow: {
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    variants: {},
    plugins: [],
};
