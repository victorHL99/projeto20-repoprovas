/*
  Warnings:

  - You are about to drop the column `disciplineId` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `tests` table. All the data in the column will be lost.
  - Added the required column `teacherDisciplineId` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tests" DROP COLUMN "disciplineId",
DROP COLUMN "teacherId",
ADD COLUMN     "teacherDisciplineId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachers_disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
