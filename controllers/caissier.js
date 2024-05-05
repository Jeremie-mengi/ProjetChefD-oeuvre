const prisma = require("../db/prisma");

const getCaissiers = async (req, res) => {
    try {
        const caissier = await prisma.caissier.findMany();
        res.status(200).json(caissier);
    } catch (error) {
        console.error("Erreur lors de la récupération des caissier :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des caissier" });
    }
};

// Route POST pour créer un nouvel élève
const createCaissier = async (req, res) => {
    try {
        const caissiers = await prisma.caissier.create({
            data: {
                nom: req.body.nom,
                postnom : req.body.postnom,
                prenom : req.body.prenom,
                sexe : req.body.sexe,
                adresse : req.body.adresse,
                email: req.body.email,
                telephone: parseInt(req.body.telephone, 10),
            }
        });
        
        // Renvoi de la réponse avec le frais créé
        res.status(201).json(caissiers);
    } catch (error) {
        console.error("Erreur lors de la création de caissier:", error);
        res.status(500).json({ message: "Erreur lors de la création de caissier" });
    }
};

module.exports = {
    getCaissiers,
    createCaissier
};
