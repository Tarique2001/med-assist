/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "backgroundImage":{
        "LandingPageBK":"url('./components/resources/BackgroungLanding.jpg')"
      }
    },
  },
  plugins: [],
}

