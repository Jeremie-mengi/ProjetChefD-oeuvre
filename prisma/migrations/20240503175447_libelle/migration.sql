/*
  Warnings:

  - A unique constraint covering the columns `[libelle]` on the table `Frais` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Frais_libelle_key" ON "Frais"("libelle");
