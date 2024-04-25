import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import schools from "../image/schools.jpg"
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
        <section className="mySetion  flex flex-row  gap-[2px]">
            <form className="myForm  ml-[100px]" onSubmit={handleSubmit(onSubmit)}>
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
                    <p className='textCnnecte'>Vous avez un compte?</p>
                    <p><Link to='/' className='mylink'>Se connecter</Link></p>
                   </div>
                </div>
            </form>
            <div className="mt-[-3px]  mr-[100px] ">
                    <img src={schools} alt="" className='h-[397px] w-[700px] rounded-[16px] '  />
            </div>
        </section>
    )
}

export default ForgotPass
