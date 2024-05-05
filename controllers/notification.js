const prisma = require("../db/prisma");

const getNotifications = async (req, res) => {
    try {
        const notifications = await prisma.notification.findMany();
        res.status(200).json(notifications);
    } catch (error) {
        console.error("Erreur lors de la récupération des notifications :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des notifications" });
    }
};

// Route POST pour créer un nouvel élève
const createNotification = async (req, res) => {
    try {
            // Récupérer la date limite sous forme de chaîne de caractères
            const dateEnvoie = req.body.date_envoie ;

            // Convertir la date limite en objet Date
            const dateEnvoieObj = new Date(dateEnvoie);
        // Création du frais dans la base de données
        const notifications = await prisma.notification.create({
            data: {
                message: req.body.message,
                date_envoie : dateEnvoieObj,
                tutId : parseInt(req.body.tutId, 10),
                caisId : parseInt(req.body.tutId, 10)
            }
        });
        
        // Renvoi de la réponse avec le frais créé
        res.status(201).json(notifications);
    } catch (error) {
        console.error("Erreur lors de la création de notification:", error);
        res.status(500).json({ message: "Erreur lors de la création de notification" });
    }
};

module.exports = {
    getNotifications,
    createNotification
};
