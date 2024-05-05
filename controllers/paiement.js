const prisma = require("../db/prisma");

const getPaiements = async (req, res) => {
    try {
        const paiement = await prisma.paiement.findMany();
        res.status(200).json(paiement);
    } catch (error) {
        console.error("Erreur lors de la récupération des paiement :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des paiement" });
    }
};

// Route POST pour créer un nouvel élève
const createPaiement = async (req, res) => {
    try {
            // Récupérer la date limite sous forme de chaîne de caractères
            const datedePaye = req.body.Datedepaiement ;

            // Convertir la date limite en objet Date
            const datedePayeObj = new Date(datedePaye);
        // Création du frais dans la base de données
        const paiements = await prisma.paiement.create({
            data: {
                montantapaye:parseInt(req.body.montantapaye, 10),
                montantpaye:parseInt(req.body.montantpaye, 10),
                Datedepaiement: datedePayeObj, 
                tutId: parseInt(req.body.tutId, 10),
                caisId :parseInt(req.body.caisId, 10),
                fraiId :parseInt(req.body.fraiId, 10)
            }
        });
        
        // Renvoi de la réponse avec le frais créé
        res.status(201).json(paiements);
    } catch (error) {
        console.error("Erreur lors de la création de paiement:", error);
        res.status(500).json({ message: "Erreur lors de la création de paiement" });
    }
};

module.exports = {
    getPaiements,
    createPaiement
};
