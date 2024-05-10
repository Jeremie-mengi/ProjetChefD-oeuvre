import { useState } from "react";
import { useForm } from "react-hook-form";

function Dashbord(params) {
    const [formData, setFormData] = useState({
        Matriculeeleve: "",
        NomdeEleve: "",
        PostnomdeEleve: "",
        PrenomdeEleve: "",
        classe: "",
    });

    const onSubmit = (data) => {
        console.log(data);
        alert(`Paiement enregistré avec succès`);
        reset();
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: formData });

    return (
        <section className="mySectionDash">
            <div className="bloc2 m">
                <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='myTitlePaie'>Formulaire de paiement de frais </h1>
                    <div className="form-group">
                        <label htmlFor="Matriculeeleve">Matricule eleve</label>
                        <input type="text" id="Matriculeeleve" name="Matriculeeleve" className="myInput" {...register("Matriculeeleve", { required: true })} />
                        {errors.Matriculeeleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="NomdeEleve">Nom de l'eleve</label>
                        <input type="text" id="NomdeEleve" name="NomdeEleve" className="myInput" {...register("NomdeEleve", { required: true })} />
                        {errors.NomdeEleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="PostnomdeEleve">Postnom de l'eleve</label>
                        <input type="text" id="PostnomdeEleve" name="PostnomdeEleve" className="myInput" {...register("PostnomdeEleve", { required: true })} />
                        {errors.PostnomdeEleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="PrenomdeEleve">Prenom de l'eleve</label>
                        <input type="text" id="PrenomdeEleve" name="PrenomdeEleve" className="myInput" {...register("PrenomdeEleve", { required: true })} />
                        {errors.PrenomdeEleve && <span style={{ color: "red" }}>Ce champ est obligatoire</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="classe">Classe</label>
                        <select id="classe" name="classe" className="myInput" {...register("classe", { required: true })}>
                            <option value="">Sélectionner une classe</option>
                            <option value="Classe A">Classe A</option>
                            <option value="Classe B">Classe B</option>
                            <option value="Classe C">Classe C</option>
                        </select>
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
