-- CreateTable
CREATE TABLE "User" (
    "id_Us" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_Us")
);

-- CreateTable
CREATE TABLE "Role" (
    "id_rol" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "Eleve" (
    "id_El" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,
    "classe" TEXT NOT NULL,
    "tutId" INTEGER NOT NULL,

    CONSTRAINT "Eleve_pkey" PRIMARY KEY ("id_El")
);

-- CreateTable
CREATE TABLE "Tuteur" (
    "id_Tut" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,

    CONSTRAINT "Tuteur_pkey" PRIMARY KEY ("id_Tut")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id_Not" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "date_envoie" TIMESTAMP(3) NOT NULL,
    "tutId" INTEGER NOT NULL,
    "caisId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id_Not")
);

-- CreateTable
CREATE TABLE "Caissier" (
    "id_Cais" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,

    CONSTRAINT "Caissier_pkey" PRIMARY KEY ("id_Cais")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id_Pai" SERIAL NOT NULL,
    "montantapaye" INTEGER NOT NULL,
    "montantpaye" INTEGER NOT NULL,
    "Datedepaiement" TIMESTAMP(3) NOT NULL,
    "caisId" INTEGER NOT NULL,
    "fraiId" INTEGER NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id_Pai")
);

-- CreateTable
CREATE TABLE "Frais" (
    "id_Frai" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "montantFrais" INTEGER NOT NULL,
    "DateLimite" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Frais_pkey" PRIMARY KEY ("id_Frai")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Eleve_email_key" ON "Eleve"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Eleve_telephone_key" ON "Eleve"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Tuteur_email_key" ON "Tuteur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tuteur_telephone_key" ON "Tuteur"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Caissier_email_key" ON "Caissier"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Caissier_telephone_key" ON "Caissier"("telephone");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id_Us") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eleve" ADD CONSTRAINT "Eleve_tutId_fkey" FOREIGN KEY ("tutId") REFERENCES "Tuteur"("id_Tut") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_tutId_fkey" FOREIGN KEY ("tutId") REFERENCES "Tuteur"("id_Tut") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_caisId_fkey" FOREIGN KEY ("caisId") REFERENCES "Caissier"("id_Cais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_caisId_fkey" FOREIGN KEY ("caisId") REFERENCES "Caissier"("id_Cais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_fraiId_fkey" FOREIGN KEY ("fraiId") REFERENCES "Frais"("id_Frai") ON DELETE RESTRICT ON UPDATE CASCADE;
