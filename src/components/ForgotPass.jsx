import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

function ForgotPass() {
    const [formData, setFormData] = useState({
        adresseEmail: "",
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: formData })

    const onSubmit = (data) => {
        console.log(data);
        alert(`${data.nom} a été enregistré`);
        reset();
    };

    return (
        <section className="mySetion">
            <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='myTitle'>MOT DE PASSE OUBLIE</h1>

                <div className="form-group">
                <p className='text'>Nous comprenons, il se passe des choses. Entrez 
                simplement votre adresse e-mail ci-dessous et nous 
                vous enverrons un lien pour réinitialiser votre mot de passe!</p>                     
                </div>
            
                <div className="form-group">
                    <label htmlFor="email">Adresse email</label>
                    <input type="text" id="email" name="email" className="myInput" {...register("adresseEmail", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, required: true })} />
                    {errors.adresseEmail && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    {errors.adresseEmail && errors.adresseEmail.type === "pattern" && <span style={{ color: "red" }}>Veuillez saisir une adresse email valide</span>}
                </div>
              
                <div className='form-btn'>
                    <button className="btnRegister" type="submit">Réinitialiser le mot de passe  </button>
                </div>

               <div  className='mytextParent'>
                    <p className='textCnnecte'><Link to="/">Creer un compte</Link></p>
                    <div className='mytextCount'>
                    <p className='textCnnecte'><Link to='/ForgotPass' className='mylink'>Vous avez un compte?</Link></p>
                    <p><Link to='/' className='mylink'>Se connecter</Link></p>
                   </div>
                </div>
            </form>
        </section>
    )
}

export default ForgotPass
