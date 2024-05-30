import schools from "../image/schools.jpg"
import image1 from "../image/Ec.jpg"
import image2 from "../image/Ecc.jpg"
import image3 from "../image/Eco.jpg"
function Main() {
    return(
        <div>
        <main>
            <hr class="mx-[60px] my-[-20px] mt-[2px]" />
    
            <section class="flex flex-col md:flex-row items-center mt-[8px]">
                <div class="p-4 w-full md:w-1/2 flex flex-col justify-between ">
                    <hr class="w-1/4 border-black mb-0" />
                    <div class="mb-4 gap-[25px] flex flex-col mb-[100px]">
                        <p class="text-lg font-bold">EXPÉRIMENTEZ NOTRE APPLICATION AVEC PLAISIR</p>
                        <p class="text-2xl md:text-4xl font-bold font-[inter]">Bienvenue dans notre application de paiement pour les frais scolaires et d’autres transactions, bonne utilisation.</p>
                        <p class="text-base font-[inter] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis nihil adipisci veritatis natus labore ab,</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-[10px]">
                        <button class="mr-4 bg-[#483F3F] rounded-md w-full sm:w-[200px] h-[50px] sm:h-[70px] text-[#FFFFFF] text-base font-[inter]">Get started</button>
                        <button class="mr-4 bg-[#EEEAEA] rounded-md w-full sm:w-[200px] h-[50px] sm:h-[70px] text-black text-base font-[inter]">Contactez-Nous</button>
                    </div>
                </div>
                <div class="mt-[130px] md:mt-0 w-full md:w-auto">
                    <img src={schools} alt="Schools" class="w-full md:w-auto" />
                </div>
            </section>
    
            <section class="flex flex-col items-center md:mt-[-430px] gap-2 text-center px-4">
           <p class="text-lg md:text-xl font-bold">AVANTAGES</p>
           <p class="text-2xl md:text-4xl font-bold font-[inter]">Déverrouiller la puissance des</p>
           <p class="text-2xl md:text-4xl font-bold font-[inter] mb-6 md:mb-10">paiements tiers</p>
           <p class="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis nihil.</p>
           <p class="text-base md:text-lg">At nobis nihil adipisci veritatis natus labore ab.</p>
            </section>

            <section class="flex flex-col md:flex-row items-center mt-[40px] md:mt-[-370px] gap-5 m-auto px-4">
    <div class="bg-[#65F6B9] w-full md:w-[600px] h-auto md:h-[800px] flex flex-col rounded-[15px] p-4">
        <div class="py-4 pb-20 px-10 font-[inter]">
            <p class="text-lg font-bold">Forterest paiement</p>
            <p class="text-lg">Bon et exceptionnel pour vos écoles, félicitations à vous et exceptionnel pour vos écoles, félicitations</p>
        </div>
        <div class="bg-[#FFFFFF] mx-7 rounded-[10px] p-4">
            <h1 class="mx-7 mb-6 font-bold">Détails de paiement</h1>
            <hr />
            <form action="" class="flex flex-col space-y-4 mx-7 border border-gray-300 p-2 my-4 rounded-[19px]">
                <label for="email1">Adresse Email</label>
                <input id="email1" type="text" class="border border-gray-300 p-2 rounded-[10px]" />
                <label for="email2">Adresse Email</label>
                <input id="email2" type="text" class="border border-gray-300 p-2 rounded-[10px]" />
            </form>
            <h1 class="mx-7">Détails de paiement</h1>
            <form action="" class="flex flex-col space-y-4 mx-7 border border-gray-300 p-2 my-2 mb-6 rounded-[19px]">
                <label for="email3">Adresse Email</label>
                <input id="email3" type="text" class="border border-gray-300 p-2 rounded-[10px]" />
            </form>
        </div>
    </div>

    <div class="flex flex-col justify-between gap-5 w-full md:w-auto">
        <div class="bg-[#6557FF] w-full md:w-[600px] h-auto md:h-[390px] rounded-[15px] p-4 flex flex-col justify-end">
            <p class="text-lg font-bold text-white">Forterest paiement</p>
            <p class="text-lg text-white">Bon et exceptionnel pour vos écoles, félicitations à vous et exceptionnel pour vos écoles, félicitations</p>
        </div>
        <div class="bg-[#000000] w-full md:w-[600px] h-auto md:h-[390px] rounded-[15px] p-4 flex flex-col justify-end">
            <p class="text-lg font-bold text-white">Forterest paiement</p>
            <p class="text-lg text-white">Bon et exceptionnel pour vos écoles, félicitations à vous et exceptionnel pour vos écoles, félicitations</p>
        </div>
    </div>
</section>

    
<section class="bg-[#F6F6F6] rounded-[10px] flex flex-col items-center py-4">
    <div class="text-left w-full md:w-auto md:mr-[800px] mt-4  mt-[100px] mb-[400px] flex flex-col gap-2 px-4">
        <p class="text-lg font-bold">BENEFITS</p>
        <p class="text-2xl md:text-4xl font-bold font-[inter]">Unlocking the power of third</p>
        <p class="text-base font-[inter] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis nihil.</p>
    </div>

    <div class="flex flex-row justify-center w-full md:w-[500px] mt-4 md:mt-[60px] gap-2 px-4">
    <img class="w-1/3 md:w-auto" src={image1} alt="Image 1" />
    <img class="w-1/3 md:w-auto" src={image2} alt="Image 2" />
    <img class="w-1/3 md:w-auto" src={image3} alt="Image 3" />
</div>

</section>

        </main>
    </div>
    
    ) 
}
 export default Main; 