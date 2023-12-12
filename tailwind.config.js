/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-primary-500": "#1570ef",
        white: "#fff",
        "grey-grey-400": "#858d9d",
        "grey-grey-50": "#f7f9fc",
        "primary-primary-600": "#1366d9",
        "warning-warning-50": "#fef4e6",
        "warning-warning-400": "#f9a63a",
        "success-success-50": "#e7f8f0",
        "success-success-400": "#41c588",
        "error-error-50": "#ccc",
        "error-error-400": "#f36960",
        "primary-primary-50": "#e8f1fd",
        "primary-primary-400": "#448df2",
        "grey-grey-600": "#5d6679",
        "grey-grey-100": "#d0d3d9",
        "grey-grey-900": "#2b2f38",
        "grey-grey-500": "#667085",
        dashboard: "#eef0f2",
        dodgerblue: "#2f7beb",
        "grey-grey-300": "#989fad",
        "primary-primary-700": "#0f50aa",
        "grey-grey-800": "#383e49",
        "success-success-100": "#b6e9d1",
        "success-success-700": "#0d824b",
      },
      spacing: {},
      fontFamily: {
        "body-2-medium": "Inter",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "7xl": "26px",
      xl: "20px",
      "4xl": "23px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
