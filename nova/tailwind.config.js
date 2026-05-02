/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tu rojo característico del estudio
        'pr-red': '#ef4444'
      },
      fontFamily: {
        // Sustituimos 'Inter' por la variable de Syne configurada en layout.tsx
        // Dejamos las demás como fallback por seguridad
        sans: [
          'var(--font-syne)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        // Añadimos JetBrains Mono para todo el look técnico y de programación
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      }
    }
  },
  plugins: []
};