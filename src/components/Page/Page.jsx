import React, { Fragment } from 'react';
import styles from './Page.module.css'
import Loader from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';
import Form from '../Form/Form';
import Error from '../Error/Error';
import useForecast from '../../hooks/useForecast';

import Header from '../Header';

const Page = () => {
    const {isLoading, isError, forecast, submitRequest} = useForecast();
    
    const onSubmit = (value) => {    
        submitRequest(value);
    }

    return (
        <Fragment>
            <Header />
            {!forecast && <div className={`${styles.box} position-relative`}>
                {!isLoading && <Form  onSubmitSearch={onSubmit} />}

                {isError &&  <Error message={isError} /> }

                 {isLoading && <Loader /> }

           </div>}

                {forecast &&  <Forecast forecast={forecast} /> }
                 
            
        </Fragment>
    );
};

export default Page;
