/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {},
            colors: {
                orange: "#e74c1b",
                slate: "#f0f4fc",
                gray: "#A1A1A1",
                mint: "#EAF9E6",
                pink: "#FFE8EE",
                peach: "#FFEEE8",
            },
            fontFamily: {
                poppins: ["Poppins"],
            },
        },
    },
    plugins: [],
};
