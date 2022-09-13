/*
  Warnings:

  - Added the required column `tesss` to the `disciplines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "disciplines" ADD COLUMN     "tesss" TEXT NOT NULL;
