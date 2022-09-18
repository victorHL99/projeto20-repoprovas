import testsRepository from "../repositories/testsRepository.js";

async function verifyIfTeacherDisciplineIdExists(teacherDisciplineId: number) {
  const result = await testsRepository.findTeacherDisciplineById(teacherDisciplineId);

  if (!result) {
    throw {
      type: 'notFound',
      message: 'TeacherDisciplineId not found',
    }
  }
}

const testsService = {
  verifyIfTeacherDisciplineIdExists
}

export default testsService;
