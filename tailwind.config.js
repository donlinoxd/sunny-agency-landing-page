module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./public/index.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      header: ["Fraunces", "Tahoma"],
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        yellow: "hsl(51, 100%, 49%)",
        "soft-red": "hsl(7, 99%, 70%)",
        "dark-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 67%)",
        "very-dark-blue": "hsl(212, 27%, 19%)",
        "very-dark-gray-blue": "hsl(213, 9%, 39%)",
        "dark-gray-blue": "hsl(232, 10%, 55%)",
        "gray-blue": "hsl(210, 4%, 67%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
