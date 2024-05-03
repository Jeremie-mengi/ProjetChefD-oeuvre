const prisma = require("../db/prisma");
const twilio = require('twilio');
const accountSid = 'AC2322219b9d60b2e0e5a04b1108a7fcfc';
const authToken = 'f23d72f3b8926fc6c14ebeb522450f41';
const client = new twilio(accountSid, authToken);

// Route GET pour récupérer la liste des tuteurs
const getTuteurs = async (req, res) => {
    try {
        const tuteurs = await prisma.tuteur.findMany();
        res.status(200).json(tuteurs);
    } catch (error) {
        console.error("Erreur lors de la récupération des tuteurs :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des tuteurs" });
    }
};

// Fonction pour envoyer un SMS
const sendSMS = async (to, message) => {
    try {
        const response = await client.messages.create({
            body: message,
            to: "+243895905205", // Numéro de téléphone du destinataire au format international (par exemple : '+14155552671')
            from: '+13344871031' // Numéro Twilio (vous pouvez le trouver dans le tableau de bord Twilio)
        });
        console.log('SMS envoyé avec succès. SID :', response.sid);
    } catch (error) {
        console.error('Erreur lors de l\'envoi du SMS :', error);
    }
};

// Route POST pour créer un nouveau tuteur
const createTuteur = async (req, res) => {
    try {
        // Création du tuteur dans la base de données
        const tuteur = await prisma.tuteur.create({
            data: {
                nom: req.body.nom,
                postnom: req.body.postnom,
                prenom: req.body.prenom,
                sexe: req.body.sexe,
                adresse: req.body.adresse,
                email: req.body.email,
                telephone: parseInt(req.body.telephone, 10),
            }
        });

        // Envoi d'un SMS au numéro de téléphone du tuteur
        const message = `Bienvenue ${tuteur.nom} ${tuteur.prenom}! Vous venez d'être enregistré en tant que tuteur.`;
        await sendSMS(`+${tuteur.telephone}`, message);

        // Renvoi de la réponse avec le tuteur créé
        res.status(201).json(tuteur);
    } catch (error) {
        console.error("Erreur lors de la création du tuteur :", error);
        res.status(500).json({ message: "Erreur lors de la création du tuteur" });
    }
};

module.exports = {
    getTuteurs,
    createTuteur
};




