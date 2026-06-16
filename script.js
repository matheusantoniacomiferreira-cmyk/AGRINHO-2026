/* =========================
   AGRINHO 2026 - STYLE.CSS
   Estilo geral do site
========================= */

/* Reset básico para padronizar o site */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Corpo da página */
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f2f2f2;
    color: #333;
}

/* Cabeçalho */
header {
    background-color: #2e7d32;
    color: white;
    text-align: center;
    padding: 20px;
}

/* Área principal */
main {
    padding: 20px;
}

/* Caixa de conteúdo */
.container {
    max-width: 900px;
    margin: auto;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}

/* Títulos */
h1, h2, h3 {
    margin-bottom: 10px;
}

/* Parágrafos */
p {
    margin-bottom: 10px;
    line-height: 1.6;
}

/* Listas */
ul {
    margin-left: 20px;
    margin-top: 10px;
}

li {
    margin-bottom: 5px;
}

/* Rodapé */
footer {
    background-color: #1b5e20;
    color: white;
    text-align: center;
    padding: 10px;

    position: fixed;
    bottom: 0;
    width: 100%;
}

/* Responsividade (celular) */
@media (max-width: 600px) {
    header {
        font-size: 14px;
        padding: 15px;
    }

    .container {
        margin: 10px;
        padding: 15px;
    }

    footer {
        font-size: 12px;
    }
}
