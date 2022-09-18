import { Test } from "@prisma/client";

export interface CreateTestInterface {
  name: string;
  pdfUrl: string;
  categoryId: number;
  teacherDisciplineId: number;
}

