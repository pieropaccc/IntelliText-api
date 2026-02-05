const buildAnalyzePrompt = (text) => `
Devolvé SOLO un JSON válido.
NO agregues texto antes ni después.
NO uses markdown.
NO expliques nada.

Formato EXACTO:
{
  "summary": "resumen breve en español",
  "classification": "compra | queja | consulta | noticia | otro",
  "entities": {
    "product": string o null,
    "price": number o null,
    "currency": string o null,
    "platform": string o null
  }
}

Texto a analizar:
"${text}"
`;

module.exports = buildAnalyzePrompt;
