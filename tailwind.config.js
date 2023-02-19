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
            gray: "#BCBCBC",
            yellow: "#D4B733",
            blue: "#15ADE2",
            black1: "#1a1919eb",
            black2: "#000000eb",
            black3: "#201e1eeb",
        },
        fontFamily: {},
        extend: {
            animation: {
                bounce1: "bounce 6s infinite",
            },
        },
    },
    variants: {
        extend: {
            screens: {
                "3xl": "1920px",
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/aspect-ratio"),
    ],
};
