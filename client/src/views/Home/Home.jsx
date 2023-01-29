import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

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
            <SideBar />
            <CardsContainer />

       </div>
    )
}

export default Home;

//  {/* ORDENAMIENTOS */}
//  <div>   
//  <select>
//  {/* // defaultValue="sortByName" onChange={(e) => handleOrderByName(e)}> */}
//      <option value="A-Z">A - Z</option>
//      <option value="Z-A">Z - A</option>
//  </select>
// </div>
