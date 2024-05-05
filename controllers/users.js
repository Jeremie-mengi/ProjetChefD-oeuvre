const bcrypt = require("bcrypt");
const prisma = require("../db/prisma");

const getUsers = async(req,res)=>{
try{
    const users = await prisma.user.findMany();
    res.status(200).json(users)
}  catch(error ){
    res.status(500)
}
};

const registerUser = async (req, res) => {
    console.log(req.body);
    try {
        const passwordHashed = bcrypt.hashSync(req.body.password, 10);
        const user = await prisma.user.create({
            data: {
                nom: req.body.nom,
                postnom: req.body.postnom,
                email: req.body.email,
                password: passwordHashed,
                telephone : parseInt(req.body.telephone,10)
            }
        });
        res.status(201).json(user);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
}

module.exports = {
    getUsers, registerUser
}