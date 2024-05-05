import { useState } from "react";
import { useForm } from "react-hook-form";

function Dashbord(params) {
    const [formData, setFormData] = useState({
        Matriculeeleve: "",
        NomdeEleve: "",
        PostnomdeEleve: "",
        PrenomdeEleve: "",
        classe : "",

    });

    const onSubmit = (data) => {
        console.log(data);
        alert(`Paiement enregistré avec succes`);
        reset();
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: formData });

    return (
        <section className="mySectionDash">
            <div className="bloc2 m">
                <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='myTitlePaie'>Formulaire de paiement de frais </h1>
                    <div className="form-group">
                        <label htmlFor="email">Matricule eleve</label>
                        <input type="text" id="email" name="email" className="myInput" {...register("Matriculeeleve", { required: true })} />
                        {errors.Matriculeeleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Nom de l'eleve</label>
                        <input type="text" id="email" name="email" className="myInput" {...register("NomdeEleve", { required: true })} />
                        {errors.NomdeEleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Postnom de l'eleve</label>
                        <input type="text" id="password" name="password" className="myInput" {...register("PostnomdeEleve", { required: true })} />
                        {errors.PostnomdeEleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Prenom de l'eleve</label>
                        <input type="text" id="password" name="password" className="myInput" {...register("PrenomdeEleve", { required: true })} />
                        {errors.PrenomdeEleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <select className="form-group">
                        <option htmlFor="password">Classe</option>
                        <option htmlFor="password">Classe</option>
                        <option htmlFor="password">Classe</option>
                    </select>
                    
                    <div className="form-group">
                        <label htmlFor="password">Classe</label>
                        <input type="text" id="password" name="password" className="myInput" {...register("classe", { required: true })} />
                        {errors.classe && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>


                    
                    <div className='form-btn'>
                        <button className="btnRegister" type="submit">Payer</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Dashbord;
