import axios from "axios";
import { useState } from "react";
import styles from "../Form/Form.module.css";
import { getTemperaments } from "../../redux/actions";

const Form = () => {

    const [form, setForm] = useState ({
        name:"",
        min_height:"",
        max_height:"",
        min_weight:"",
        max_weight:"",
        life_span:"",
        temperament:[],
        image:"",
    })

    const [errors, setErrors] = useState({
        name:"",
        min_height:"",
        max_height:"",
        min_weight:"",
        max_weight:"",
        life_span:"",
        temperament:[],
        image:"",
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({ ...form, [property]:value})

        setForm({ ...form, [property]:value }) 
    }

//--------------------VALIDACIONES----------------------------------
    const validate = (form) => {
        // name
        if (!/^[a-zA-Z\s]*$/.test(form.name)){
            setErrors ({...errors,name:"Invalid name, please insert only letters"})
        }
        if(!form.name){
            setErrors({...errors,name:"You must type a name"})
        }
        else {
            setErrors({...errors,name:""}) 
        }  
        
        //weights
        if (!form.weight_min) {
        // weight min
            setErrors({...errors,weight_min:"Type a valid minimal weight number"}) 
        
        } else if (!/\d{1,2}/gi.test(form.weight_min)) {
            setErrors({...errors,weight_min:"Weight must have min values. Example: '25'"}) 
        
        } else {
            setErrors({...errors,weight_min:""}) 
       
        }
        if (!form.weight_max) {
        // weight max
            setErrors({...errors,weight_min:"Type a valid maxim weight number"}) 
        
        } else if (!/\d{1,2}/gi.test(form.weight_max)) {
            setErrors({...errors,weight_min:"Weight must have max values. Example: '25'"}) 
        } else {
            setErrors({...errors,weight_max:""}) 
        }

         //heights
        if (!form.height_min) {
        // weight min
            setErrors({...errors,height_min:"Type a valid minimal height number"}) 
        
        } else if (!/\d{1,2}/gi.test(form.weight_min)) {
            setErrors({...errors,height_min:"Height must have min values. Example: '25'"}) 
        
        } else {
            setErrors({...errors,height_min:""}) 
       
        }
        if (!form.height_max) {
        // weight max
            setErrors({...errors,whight_min:"Type a valid maxim height number"}) 
        
        } else if (!/\d{1,2}/gi.test(form.height_max)) {
            setErrors({...errors,height_min:"Height must have max values. Example: '25'"}) 
        } else {
            setErrors({...errors,height_max:""}) 
        }

    }
//--------------------------------------------------------------------------------------------------------------------
       

        


    const submitHandler = (event) => {
        event.preventDefault()
        const response = axios.post("http://localhost:3001/dogs", form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    // const selectHandler = (event) => {
    //     set
    // }



    return(
        <div className={styles.container}>
            <div className={styles.form}>
            <h2 className={styles.title}>Create your own puppy!</h2>
        <form onSubmit={submitHandler}>
            <div className={styles.itemsContainer}>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" placeholder="Name"/>
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.itemsContainer}>
                <label>Min height: </label>
                <input type="number" value={form.min_height} onChange={changeHandler} name="min_height" placeholder="Min height" />
                <span className={styles.error}>{errors.min_height}</span>
            </div>

            <div className={styles.itemsContainer}>
                <label>Max height: </label>
                <input type="number" value={form.max_height} onChange={changeHandler} name="max_height" placeholder="Max height" />
                <span className={styles.error}>{errors.max_height}</span>
            </div>

            <div className={styles.itemsContainer}>
                <label>Min weight: </label>
                <input type="number" value={form.min_weight} onChange={changeHandler} name="min_weight" placeholder="Min weight" />
                <span className={styles.error}>{errors.min_weight}</span>
            </div>

            <div className={styles.itemsContainer}>
                <label>Max weight: </label>
                <input type="number" value={form.max_weight} onChange={changeHandler} name="max_weight" placeholder="Max weight" />
                <span className={styles.error}>{errors.max_weight}</span>
            </div>

            <div className={styles.itemsContainer}>
                <label>Life span: </label>
                <input type="number" value={form.life_span} onChange={changeHandler} name="life_span" placeholder="Life span"/>
                <span className={styles.error}>{errors.life_span}</span>
            </div>
{/* 
            <div>
                <label>Temperament: </label>
                <select name="temperament" value={form.image} onChange={changeHandler}>
                    <option value="null">Choose your dog's temperament</option>
                    {
                        temperaments.map(d => <option value={d.name}>{d.name}</option>)
                    }
                </select>
                <span className={styles.error}>{errors.temperaments}</span> */}
                {/* <input type="text" value={form.temperament} onChange={changeHandler} name="temperament" placeholder="" /> */}
            {/* </div> */}

            <div className={styles.itemsContainer}>
                <label>Image URL: </label>
                <input type="link" value={form.image} onChange={changeHandler} name="image" placeholder="Link to the image in .jpg format"/>
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