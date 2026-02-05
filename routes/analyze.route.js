const express = require('express');
const buildAnalyzePrompt = require('../prompts/analyze.prompt');
const analyzeTextWithAI = require('../services/LLM.service');
const analyzeSchema = require('../schemas/analyze.schema');

const router = express.Router();

router.post('/analyze', async (req, res) => {
  const { text } = req.body;

  // 1️⃣ Validación de input
  if (!text) {
    return res.status(400).json({
      error: "Field 'text' is required"
    });
  }

  try {
    // 2️⃣ Construir prompt
    const prompt = buildAnalyzePrompt(text);

    // 3️⃣ Llamar al LLM
    const rawOutput = await analyzeTextWithAI(prompt);

    // 4️⃣ Parsear JSON (primer filtro)
    let parsedJson;
    try {
      parsedJson = JSON.parse(rawOutput);
    } catch (err) {
      return res.status(500).json({
        error: "Invalid JSON returned by LLM",
        rawOutput
      });
    }

    // 5️⃣ Validar schema con Zod (seguro)
    const validationResult = analyzeSchema.safeParse(parsedJson);

    if (!validationResult.success) {
      return res.status(500).json({
        error: "AI response does not match schema",
        details: validationResult.error.errors,
        rawOutput
      });
    }

    // 6️⃣ Respuesta final validada
    res.json(validationResult.data);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "AI service error"
    });
  }
});

module.exports = router;
