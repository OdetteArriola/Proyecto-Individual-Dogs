
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDetails } from "../../redux/actions";

const Detail = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(props.match.params.id));
        return () => dispatch(deleteDetails());
    }, [dispatch, props.match.params.id]);

    const myDog = useSelector((state) => state.details);






    return(
        <div>
           
 
      {myDog ? (
        <div key={myDog.id}>
          <div>
            <h2>{myDog.name}</h2>
            <img src={myDog.image} alt={myDog.name}/>
            <div>
              {myDog.breed_group ? (
                <div >
                  <div>
                    
                  </div>
                  <div>
                    <h3>Breed group: </h3>
                    <p>{myDog.breed_group}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div>
                <div>
                
                </div>
                <div>
                  <h3>Life span: </h3>
                  <p>{myDog.life_span}</p>
                </div>
              </div>
              <div>
                <div>
               
                </div>
                <div>
                  <h3>Weight: </h3>
                  <p>Min: {myDog.weight_min}</p>
                  <p>Max: {myDog.weight_max}</p>
                </div>
              </div>
              <div>
                <div>
                
                </div>
                <div>
                  <h3>Height: </h3>
                  <p>Min: {myDog.height_min}</p>
                  <p>Max: {myDog.height_max}</p>
                </div>
              </div>
              <br />
              <div>
                <div>
                  {
                    <div>
                      <h3>Temperament: </h3>
                      <p>
                        {myDog.createdInDB
                          ? myDog.temperaments.map((el) => el.name).join(", ")
                          : myDog.temperament}
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <Link to="/home">
              <button>Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
        </div>
    )
}

export default Detail;




