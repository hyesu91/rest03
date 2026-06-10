/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 브랜드 컬러 (진흥기업 다크 네이비/퍼플 톤 기반)
        brand: {
          DEFAULT: '#2e1065',
          deep: '#1f0a4d',
        },
        accent: '#fb923c', // 맨위로 버튼 (orange-400)
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1600px',
      },
    },
  },
  plugins: [],
}
