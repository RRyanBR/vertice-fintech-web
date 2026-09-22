/** Configuração do Tailwind CSS – Vértice */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primaria: { DEFAULT: "#2F5BEA", clara: "#E8EEFD", escura: "#2448C4" },
        escuro: { DEFAULT: "#121A2E", linha: "#26304A", texto: "#C9D1E3" },
        fundo: "#F4F6FA",
        borda: "#E3E7EF",
        receita: { DEFAULT: "#16A34A", clara: "#E6F6EC" },
        despesa: { DEFAULT: "#DC2626", clara: "#FDECEC", grafico: "#F87171" },
        texto: { DEFAULT: "#1B2230", suave: "#6B7385" },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
