import schools from "../image/schools.jpg"
import image1 from "../image/Ec.jpg"
import image2 from "../image/Ecc.jpg"
import image3 from "../image/Eco.jpg"
function Main() {
    return(
        <div>
            <main className="">
            <hr className="mx-[60px] my-[-20px]" />

            <section className="flex flex-row items-center ml-5 mt-[17px] gap-[80px]">
                <div className="p-4 w-1/2 flex flex-col justify-between  mt-[-150px]  m-[50px]">
                    <hr className="w-1/4 border-black mb-0" />
                    <div className="mb-4 gap-[25px] flex flex-col mr-4 mb-[50px]">
                        <p className="text-lg font-bold">EXPERIMENTEZ NOTRE APPLICATION AVEC PLAISIR</p>
                        <p className="text-4xl font-bold font-[inter]">Bienvenue dans notre application de paiement pour les frais scolaires et d’autres transactions, bonne utilisation.</p>
                        <p className="text-base font-[inter] font-[Extra-Light" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis nihil adipisci veritatis natus labore ab,</p>
                    </div>
                    <div className="flex flex-row gap-[10px]">
                        <button className="mr-4 bg-[#483F3F] rounded-md w-[200px] h-[70px] text-[#FFFFFF] text-base font-[inter] ">Get started</button>
                        <button className="mr-4 bg-[#EEEAEA] rounded-md  w-[200px] h-[70px] text-black text-base font-[inter] ">Contactez-Nous</button>
                    </div>

                </div>
                <div className="mt-[-150px] ">
                    <img src={schools} alt="" />
                </div>
            </section>

            <section className="flex flex flex-colum items-center mt-[-530px] gap-[2px]">
                <p className="text-lg font-bold">BENEFITS</p>
                <p className="text-4xl font-bold font-[inter]">Unlocking the power of third </p>
                <p className="text-4xl font-bold font-[inter] mb-[26px]"> party payments</p>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit At nobis nihil.</p>
                <p>At nobis nihil adipisci veritatis natus labore ab, </p>
            </section>


            <section className="flex flex-row grow items-center mt-[-370px] gap-[20px] m-[auto]">
                <div className="bg-[#65F6B9] w-[600px] h-[800px] flex flex-col rounded-[15px]   ">
                    <div></div>
                    <div className="py-4 py-[150px] pb-[90px] pl-[40px] pr-[40px] font-[inter]">
                        <p className="text-lg font-bold">Forterest paiement </p>
                        <p className="text-lg">Bon et exceptionnel pour vos écoles, félicitations à vous et exceptionnel pour vos écoles, félicitations </p>
                    </div>
                    <div className="bg-[#FFFFFF] mx-[30px] rounded-[10px] ">
                        <h1 className="mx-[30px] mb-[26px] font-bold">Paiement details</h1>
                        <hr />
                        <form action="" className="flex flex-col space-y-4 mx-[30px] border border-gray-300 p-2 my-[18px] rounded-[19px] ">
                            <label htmlFor="">Email Adresse</label>
                            <input type="text" className="border border-gray-300 p-2 rounded-[10px]" />
                            <label htmlFor="">Email Adresse</label>
                            <input type="text" className="border border-gray-300 p-2 rounded-[10px]" />
                        </form>
                        <h1 className="mx-[30px]">Paiement details</h1>
                        <form action="" className="flex flex-col space-y-4 mx-[30px] border border-gray-300 p-2 my-2 mb-[26px] rounded-[19px]">
                            <label htmlFor="">Email Adresse</label>
                            <input type="text" className="border border-gray-300 p-2 rounded-[10px]" />
                        </form>
                    </div>


                </div>

                <div className="flex flex-col justify-between gap-[20px]">
                    <div className="bg-[#6557FF] w-[600px] h-[390px] rounded-[15px] py-[200px] pb-[40px] flex flex-col justify-end pl-[40px] font-[inter]">
                        <p className="text-lg font-bold text-white">Forterest paiement</p>
                        <p className="text-lg text-white ">Bon et exceptionnel pour vos écoles, félicitations à vous et exceptionnel pour vos écoles, félicitations</p>
                    </div>
                    <div className="bg-[#000000] w-[600px] h-[390px] rounded-[15px] py-[200px] pb-[40px] flex flex-col justify-end pl-[40px] font-[inter]">
                        <p className="text-lg font-bold text-white">Forterest paiement</p>
                        <p className="text-lg text-white ">Bon et exceptionnel pour vos écoles, félicitations à vous et exceptionnel pour vos écoles, félicitations</p>
                    </div>
                </div>
            </section>


            <section className="bg-[#F6F6F6] rounded-none m-[auto] flex flex-col  items-center">
                <div className="text-left mr-[800px] mt-[-130px] mb[400px]  flex flex-col gap-[10px]" >
                    <p className="text-lg font-bold">BENEFITS</p>
                    <p className="text-4xl font-bold font-[inter]">Unlocking the power of third</p>
                    <p className="text-base font-[inter] font-[Extra-Light]">Lorem ipsum dolor sit amet consectetur adipisicing elit At nobis nihil.</p>
                </div>

                <div className="flex flex-row w-[500px] mt-[60px] mr-[900px] gap-[20Px] ">
                    <img className="mx-2" src={image1} alt="" />
                    <img className="mx-2" src={image2} alt="" />
                    <img className="mx-2" src={image3} alt="" />
                </div>
            </section>
            </main>
        </div>
    ) 
}
 export default Main; 