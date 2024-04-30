import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import schools from "../image/schools.jpg"

function Register() {
    const [formData, setFormData] = useState({
        nom: "",
        postnom: "",
        adresseEmail: "",
        motdepasse: "",
        numerodetelephone: "",
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: formData })

    const onSubmit = (data) => {
        console.log(data);
        alert(`${data.nom} a été enregistré`);
        reset();
    };

    return (
        <section className="mySetion  flex flex-row  gap-[2px] ">
            <form className="myForm ml-[100px] " onSubmit={handleSubmit(onSubmit)}>
                <h1 className='myTitle'>CREER UN COMPTE</h1>

                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" className="myInput" {...register("nom", { required: true })} />
                    {errors.nom && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="postnom">Postnom</label>
                    <input type="text" id="postnom" name="postnom" className="myInput" {...register("postnom", { required: true })} />
                    {errors.postnom && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse email</label>
                    <input type="text" id="email" name="email" className="myInput" {...register("adresseEmail", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, required: true })} />
                    {errors.adresseEmail && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    {errors.adresseEmail && errors.adresseEmail.type === "pattern" && <span style={{ color: "red" }}>Veuillez saisir une adresse email valide</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" className="myInput" {...register("motdepasse", { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, required: true })} />
                    {errors.motdepasse && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    {errors.motdepasse && errors.motdepasse.type === "pattern" && <span style={{ color: "red" }}>Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="telephone">Numero de téléphone</label>
                    <input type="text" id="telephone" name="telephone" className="myInput" {...register("numerodetelephone", { pattern: /^[0-9]{10}$/i, required: true })} />
                    {errors.numerodetelephone && <span style={{ color: "red" }}>Ce champ est obligatoire et doit contenir exactement 10 chiffres</span>}
                </div>

                <div className='form-btn'>
                    <button className="btnRegister" type="submit">S'inscrire</button>
                </div>

                <div className='mytextCount'>
                    <p className='textCnnecte'>Vous avez un compte?</p>
                    <p><Link to="/Login" className='mylink'>Se connecter</Link></p>
                </div>
            </form>

            <div className="mt-[-3px]  mr-[100px] ">
                <img src={schools} alt="" className='h-[648px] w-[700px] rounded-[16px] ' />
            </div>
        </section>
    )
}

export default Register




