import Banner1 from "../../components/Banner";
import Menu from "../../components/Menu";
import Food from "../../components/Food"
import Famous from "../../components/Famous";
import Comment from "../../components/Comment";
import Gps from "../../components/Gps";
import Footer from "../../components/Footer";



export default function Home(){

    return(
        <>
            <Menu />
            <Banner1 />
            <Food />
            <Famous />
            <Comment />
            <Gps />
            <Footer />
        </>

    )
}