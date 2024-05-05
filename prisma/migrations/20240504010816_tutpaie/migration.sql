/*
  Warnings:

  - Added the required column `tutId` to the `Paiement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Paiement" ADD COLUMN     "tutId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_tutId_fkey" FOREIGN KEY ("tutId") REFERENCES "Tuteur"("id_Tut") ON DELETE RESTRICT ON UPDATE CASCADE;
