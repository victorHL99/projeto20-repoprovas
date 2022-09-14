import Joi from "joi";

const createTestSchema = Joi.object({
  name: Joi.string().required(),
  pdfUrl: Joi.string().required().uri(),
  categoryId: Joi.number().required(),
  teacherDisciplineId: Joi.number().required(),
})

const testsSchema = {
  createTestSchema
}

export default testsSchema;