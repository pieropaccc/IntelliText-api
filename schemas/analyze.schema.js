const { z } = require("zod");

const analyzeSchema = z.object({
  summary: z.string(),
  classification: z.enum([
    "compra",
    "queja",
    "consulta",
    "noticia",
    "otro"
  ]),
  entities: z.object({
    product: z.string().nullable(),
    price: z.number().nullable(),
    currency: z.string().nullable(),
    platform: z.string().nullable(),
  })
});

module.exports = analyzeSchema;
