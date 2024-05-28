import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import schools from "../image/schools.jpg"
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({

        adresseEmail: "",
        motdepasse: "",

    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: formData })

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:3009/login", {
                email: data.adresseEmail,
                password: data.motdepasse
            });
            if (res.status === 200) {
                localStorage.setItem('tokenUser', JSON.stringify(res.data));
                alert('User connecté avec succès')
                window.location.href = "/dash"
              
            }
        } catch (error) {
            console.log(error && error.response);
            const err = error && error.response &&
                error.response.data && error.response.data.message;
            alert(err);
        }
    };

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3009', // Votre URL de base
    });
    
    // Intercepteur pour ajouter le jeton d'authentification à chaque requête
    axiosInstance.interceptors.request.use(config => {
        const token = localStorage.getItem('tokenUser');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }, error => {
        return Promise.reject(error);
    });

    return (
        <section className="myBody   flex flex-row  gap-[2px]">
            <form className="myForm  ml-[100px]" onSubmit={handleSubmit(onSubmit)}>
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

                <div className='form-btn'>
                    <button className="btnRegister" type="submit">Se connecter</button>
                </div>

                <div className='mytextCount'>
                    <p className='textCnnecte'><Link to='/ForgotPass' className='mylink'>Mot de passe oublié?</Link></p>
                    <p><Link to='/' className='mylink'>Creer un compte</Link></p>
                </div>
            </form>
            <div className="mt-[-3px]  mr-[100px] ">
                <img src={schools} alt="" className='h-[420px] w-[700px] rounded-[16px] ' />
            </div>
        </section>
    )
}

export default Login
