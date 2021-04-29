module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "hsl(277, 64%, 61%)",
          200: "hsl(244, 38%, 16%)",
          300: "hsl(233, 47%, 7%)",
        },
      },
      fontFamily: {
        deca: ["Lexend Deca", "system-ui"],
      },
    },
  },
  plugins: [],
};
