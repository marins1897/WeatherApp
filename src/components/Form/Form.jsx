import React , { useState } from 'react';


import styles from './Form.module.css';


const Form = (props) => {
    const [location, setLocation] = useState('');

    const submitHandler = (event) => {
         event.preventDefault();
         
         if(!location || location === '')  return;

        

        props.onSubmitSearch(location);
    };


    return (
        <form onSubmit={submitHandler}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                onChange={event => setLocation(event.target.value)}
                value={location}
                
            />

            <button type="submit" className={styles.button} onClick={submitHandler}>
                SEARCH
            </button>
        </form>
    );
};



export default Form;
