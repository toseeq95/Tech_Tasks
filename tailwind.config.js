/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Change this to your desired primary color
        darkPrimary: "1D4ED9",
        secondary: "#DC2626", // Change this to your desired secondary color
        danger: "#EF4444", // Change this to your desired danger color
        success: "#10B981", // Change this to your desired success color
        warning: "#FBBF24", // Change this to your desired warning color
        info: "#3B82F6", // Change this to your desired info color
      },
    },
  },
  plugins: [],
  // plugins: [
  //   // ...
  //   require('@tailwindcss/forms'),
  // ],
};
