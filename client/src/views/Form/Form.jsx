////VA DE NUEEEVOOOOOO ESTE SI FUNCIONA --------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import styles from "../Form/Form.module.css";
import { createDog, getTemperaments } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory} from "react-router-dom";


const Form = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const temperament = useSelector((state) => state.temperaments).sort(
        function (a, b) {
            if (a < b) return -1;
            else return 1;
        }
        );
    
    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    const [form, setForm] = useState ({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span:"",
        temperament:[],
        image:"",
    })

    const [errors, setErrors] = useState({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span:"",
        temperament:[],
        image:"",
    })

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form)
    }
       
    const selectHandler = (e) => {
        setForm({
            ...form,
            temperament: [...form.temperament, e.target.value]
        })
    }

    const deleteHandler = (el) => {
        setForm({
            ...form,
            temperament: form.temperament.filter((temp) => temp !== el),
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(form)
        dispatch(createDog(form))
        alert("Your doggy has been created!!")
        setForm({
            name:"",
            height_min:"",
            height_max:"",
            weight_min:"",
            weight_max:"",
            life_span:"",
            temperament:[],
            image:"",
        })
        history.push("/home")
    }
    




//--------------------VALIDACIONES----------------------------------
    // const validate = (form) => {
    //     // name
    //     if (!/^[a-zA-Z\s]*$/.test(form.name)){
    //         setErrors ({...errors,name:"Invalid name, please insert only letters"})
    //     }
    //     if(!form.name){
    //         setErrors({...errors,name:"You must type a name"})
    //     }
    //     else {
    //         setErrors({...errors,name:""}) 
    //     }  
        
    //     //weights
    //     if (!form.weight_min) {
    //     // weight min
    //         setErrors({...errors,weight_min:"Type a valid minimal weight number"}) 
        
    //     } else if (!/\d{1,2}/gi.test(form.weight_min)) {
    //         setErrors({...errors,weight_min:"Weight must have min values. Example: '25'"}) 
        
    //     } else {
    //         setErrors({...errors,weight_min:""}) 
       
    //     }
    //     if (!form.weight_max) {
    //     // weight max
    //         setErrors({...errors,weight_min:"Type a valid maxim weight number"}) 
        
    //     } else if (!/\d{1,2}/gi.test(form.weight_max)) {
    //         setErrors({...errors,weight_min:"Weight must have max values. Example: '25'"}) 
    //     } else {
    //         setErrors({...errors,weight_max:""}) 
    //     }

    //      //heights
    //     if (!form.height_min) {
    //     // weight min
    //         setErrors({...errors,height_min:"Type a valid minimal height number"}) 
        
    //     } else if (!/\d{1,2}/gi.test(form.weight_min)) {
    //         setErrors({...errors,height_min:"Height must have min values. Example: '25'"}) 
        
    //     } else {
    //         setErrors({...errors,height_min:""}) 
       
    //     }
    //     if (!form.height_max) {
    //     // weight max
    //         setErrors({...errors,whight_min:"Type a valid maxim height number"}) 
        
    //     } else if (!/\d{1,2}/gi.test(form.height_max)) {
    //         setErrors({...errors,height_min:"Height must have max values. Example: '25'"}) 
    //     } else {
    //         setErrors({...errors,height_max:""}) 
    //     }

    // }
// //--------------------------------------------------------------------------------------------------------------------

    return(

            
        <div className={styles.container}>
            <div className={styles.form}>
                <Link to= "/home"><button>Volver a home</button></Link>
                    <h2 className={styles.title}>Create your own puppy!</h2>
                        <form onSubmit={submitHandler}>
                            <div className={styles.itemsContainer}>
                                <label>Name: </label>
                                <input type="text" value={form.name} onChange={changeHandler} name="name" placeholder="Name"/>
                                {errors.name && <span className={styles.error}>{errors.name}</span>}
                            </div>

                            <div className={styles.itemsContainer}>
                                <label>Min height: </label>
                                <input type="number" value={form.height_min} onChange={changeHandler} name="height_min" placeholder="Min height" />
                                <span className={styles.error}>{errors.min_height}</span>
                            </div>

                            <div className={styles.itemsContainer}>
                                <label>Max height: </label>
                                <input type="number" value={form.height_max} onChange={changeHandler} name="height_max" placeholder="Max height" />
                                <span className={styles.error}>{errors.max_height}</span>
                            </div>

                            <div className={styles.itemsContainer}>
                                <label>Min weight: </label>
                                <input type="number" value={form.weight_min} onChange={changeHandler} name="weight_min" placeholder="Min weight" />
                                <span className={styles.error}>{errors.min_weight}</span>
                            </div>

                            <div className={styles.itemsContainer}>
                                <label>Max weight: </label>
                                <input type="number" value={form.weight_max} onChange={changeHandler} name="weight_max" placeholder="Max weight"/>
                                <span className={styles.error}>{errors.max_weight}</span>
                            </div>

                            <div className={styles.itemsContainer}>
                                <label>Life span: </label>
                                <input type="number" value={form.life_span} onChange={changeHandler} name="life_span" placeholder="Life span"/>
                                <span className={styles.error}>{errors.life_span}</span>
                            </div>

                             
                         
                            <div >
                                {form.temperament.map((temperament) => (
                                    <p key={temperament}>{temperament}</p>
                                ))}
                            </div>
                            
                            <div>
                                <div>Temperaments</div>
                                <select onChange={(e) => selectHandler(e)}>
                                {
                                    temperament.map((temp) => (
                                    <option value={temp.name}>{temp.name}</option>
                                    )
                                )}
                                 </select>
                                 <div>
                                    <h4>You have selected that</h4>
                                    {form.temperament.map(el => 
                                    <div>
                                        <p>{el}</p>
                                    <button onClick={() => deleteHandler(el)}>x</button>
                                    </div>
                                    )}
                                </div>
                                </div>

                                <div className={styles.itemsContainer}>
                                    <label>Image URL: </label>
                                    <input type="url" value={form.image} onChange={changeHandler} name="image" placeholder="Link to the image in .jpg format"/>
                                    <span className={styles.error}>{errors.image}</span>
                                </div> 
                                <div>
                                <button type="submit">Create my puppy!</button>
                            </div>
                        </form>
                    </div>
                </div>
                    
                    )
                    }

                export default Form;

