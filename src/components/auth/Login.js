import React from 'react'
import { useDispatch } from 'react-redux';
import { cargarNombre } from '../../actions/auth';
import { startRank } from '../../actions/rank';
import { useForm } from '../../hooks/useForm'

export const Login = ({history}) => {

    const dispatch = useDispatch()

    const [values, handleImputChange] = useForm({
        name: ''
    });
    
    const {name} = values
    const user = {
        name,
        id: new Date()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length > 3){
            dispatch(cargarNombre(user))
            dispatch(startRank(new Date()))
        }
        history.replace('/')
    }

    return (
        <form className="login-conteniner" onSubmit={handleSubmit}>
            <h1><b>Bienvendido a <br/> Memorice Spacial</b></h1>
            <h2>Coloca tu nombre</h2>
            <input 
                type="text"
                name="name" 
                placeholder="Name" 
                value={name}
                onChange={handleImputChange}
                autoComplete="off"   
            />
            <button onSubmit={handleSubmit}>Enviar</button>
        </form>
    )
}
