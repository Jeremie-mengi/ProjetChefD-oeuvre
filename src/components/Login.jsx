import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({

        adresseEmail: "",
        motdepasse: "",

    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: formData })

    const onSubmit = (data) => {
        console.log(data);
        alert(` Connecté avec succés`);
        reset();
    };

    return (
        <section className="myBody">
            <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='myTitle'>BIENVENUE</h1>
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
                </div>

                <div className="Radio">
                    <input type="checkbox" id="check" name="checkbox" className="myInputChecK" />
                    <label htmlFor="check" className="labelText">Se souvenir de moi</label>
                </div>

                <div  className='form-btn'>
                    <button className="btnRegister" type="submit">Se connecter</button>
                </div>

                <div className='mytextCount'>
                    <p className='textCnnecte'><Link to='/ForgotPass' className='mylink'>Mot de passe oublié?</Link></p>
                    <p><Link to='/' className='mylink'>Creer un compte</Link></p>
                </div>
            </form>
        </section>
    )
}

export default Login
