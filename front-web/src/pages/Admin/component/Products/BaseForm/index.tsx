import React from 'react';
import { useHistory } from 'react-router';
import './styles.scss';

type Props = {
    text : string;
    children : React.ReactNode; 
}

const BaseForm = ({text, children}:Props) => {
const history = useHistory();
const handleCancel = () =>{
    history.push('../');
}

    return(
        <div className="admin-base-form  card-base">
            <h1 className="admin-form-title">
                {text}
             </h1>
             {children}
            <div className="base-form-action">
                <button className="btn btn-outline-danger border-10 mr-3"
                onClick={handleCancel}
                >
                    Cancelar
                </button>
                <button className="btn btn-primary border-10">
                    Cadastrar
                </button>

            </div>
        </div>
    )
}
export default BaseForm;