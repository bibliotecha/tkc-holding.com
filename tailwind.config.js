module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        tkc: {
          'red': "#F50057",
          'base': "#333333",
          'footer': "#1f1f1f",
          'white': "#F6F6F6",
        },
      },
      height: {
        "45vh": "45vh",
      },
      maxHeight: {
        "75vh": "75vh",
      },
      spacing: {
        '18': '4.5rem',
        '68': "17rem",
        '84': "21rem",
        '104': '26rem',
        '112': "28rem",
        '120': "30rem",
        '128': "32rem",
        '150vw': "150vw",
        '150vh': "150vh",
        '200vw': "200vw",
        '200vh': "200vh",
      },
      padding: {
        '18': "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
