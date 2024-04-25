import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
function Home() {
    return (
        <div className="bg-white h-screen-[100%] relative"> 
        <Header/> 
        <Main/>
        <Footer/>
        </div>
    );
}

export default Home;
