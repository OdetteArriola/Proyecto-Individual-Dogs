import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar";


const Home = () => {

    ///funciones handlers------------
    // function handleOrderByName(e) {
    //     e.preventDefault();
    //     dispatch(orderByName(e.target.value));
    //     setCurrentPage(1);
    //     setOrden(e.target.value);
    // }


    ///--------------------------

    return(
        <div>
            <NavBar />
            <CardsContainer />

       </div>
    )
}

export default Home;

