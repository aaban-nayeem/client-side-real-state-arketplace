/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Define custom utility classes
    function ({ addUtilities }) {
      const newUtilities = {
        // navigation links
        ".nav-link": {
          "@apply text-[color:var(--Text-Colour-2,#2B2B2B)] [leading-trim:both] [text-edge:cap] [font-family:Poppins] text-base font-medium leading-[normal] [background:rgba(67,97,238,0.30)] px-4 py-[.8125rem] rounded-[30px]":
            "",
        },
        // Header Logo text
        ".header-logo-text": {
          "@apply text-xl font-semibold leading-[normal] text-[#1E1E1E] [font-family:Poppins] [leading-trim:both]":
            "",
        },
        // Call to action Button
        ".cta-btn": {
          "@apply text-[color:var(--White,#FFF)] text-center [leading-trim:both] [text-edge:cap] [font-family:Poppins] text-base font-medium leading-[normal] [background:var(--Primary-Colour,#3A0CA3)] px-[1.625rem] py-[.9375rem] rounded-[3.125rem]":
            "",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
