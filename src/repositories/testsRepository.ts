import client from '../config/database.js'

async function findTeacherDisciplineById(teacherDisciplineId: number) {
  const result = await client.teacherDiscipline.findFirst({
    where: {
      id: teacherDisciplineId
    }
  })

  return result
}


const testsRepository = {
  findTeacherDisciplineById
}

export default testsRepository;