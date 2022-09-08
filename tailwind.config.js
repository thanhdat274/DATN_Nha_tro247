const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    screens: {
      '3xs': {'min': '100px','max':'375px'},
        '2xs': {'min': '375px','max':'440px'},
        'xs': {'min': '440px','max':'540px'},
        's': {'min': '540px','max':'640px'},
        ...defaultTheme.screens,
      },
    extends: {},
  },
  plugins: [],
};
