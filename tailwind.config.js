module.exports = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}", //
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        corePlugins: {
            container: false,
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000",
            red: "#87200A",
            white: "#fff",
            green: "#2C5D06",
            yellow: "#D4B733",
            blue: "#051430eb",
            black1: "#1a1919eb",
            black2: "#000000eb",
            black3: "#201e1eeb",
        },
        fontFamily: {},
        extend: {},
    },
    variants: {
        extend: {
            screens: {
                "3xl": "1920px",
            },
        },
    },
    plugins: [],
};
