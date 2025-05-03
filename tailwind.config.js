export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066DB", // blue
        secondary: "#0F172A", // black
        teritiary: "#7B7B7B", // gray
        background: {
          light: "#eff6ff",
          dark: "#dbeafe",
        },
      },
      fontFamily: {
        georgia: ["Georgia", "serif"], // Added Georgia font
      },
      animation: {
        "gradient-splash": "gradientSplash 1.5s ease-out forwards",
      },
      keyframes: {
        gradientSplash: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
            borderRadius: "50%",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.5)",
            borderRadius: "40%",
          },
          "100%": {
            opacity: "0.15",
            transform: "scale(1)",
            borderRadius: "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
