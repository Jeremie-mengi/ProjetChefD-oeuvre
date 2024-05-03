const prisma = require("../db/prisma");

const getFraisS = async (req, res) => {
    try {
        const fraisS = await prisma.frais.findMany();
        res.status(200).json(fraisS);
    } catch (error) {
        console.error("Erreur lors de la récupération des frais :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des frais" });
    }
};

// Route POST pour créer un nouvel élève
const createFrais = async (req, res) => {
    try {
        // Récupérer la date limite sous forme de chaîne de caractères
        const dateLimite = req.body.DateLimite;

        // Convertir la date limite en objet Date
        const dateLimiteObj = new Date(dateLimite);

        // Création du frais dans la base de données
        const frais = await prisma.frais.create({
            data: {
                libelle: req.body.libelle,
                montantFrais: parseInt(req.body.montantFrais, 10),
                DateLimite: dateLimiteObj // Utiliser la date limite sous forme d'objet Date
            }
        });
        
        // Renvoi de la réponse avec le frais créé
        res.status(201).json(frais);
    } catch (error) {
        console.error("Erreur lors de la création de frais:", error);
        res.status(500).json({ message: "Erreur lors de la création de frais" });
    }
};

module.exports = {
    getFraisS,
    createFrais
};
