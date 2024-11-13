/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue-red': 'linear-gradient(to right, #3B82F6, #EF4444)',
        'gradient-green-purple': 'linear-gradient(to right, #10B981, #8B5CF6)',
        'gradient-red-orange': 'linear-gradient(to right, #DC2626, #F59E0B)',
        'gradient-blue-turquoise': 'linear-gradient(to right, #2563EB, #06B6D4)',
        'gradient-pink-yellow': 'linear-gradient(to right, #EC4899, #FCD34D)',
      },
    },
  },
  plugins: [],
}