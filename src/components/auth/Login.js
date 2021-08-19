import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cargarNombre } from '../../actions/auth';
import { startRank } from '../../actions/rank';
import { useForm } from '../../hooks/useForm'

export const Login = ({history}) => {

    const dispatch = useDispatch()

    const [values, handleImputChange] = useForm({
        name: '',
        password: null
    });
    
    const {email, password} = values
    const user = {
        email,
        id: new Date()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(cargarNombre(user))
        dispatch(startRank(new Date()))
        history.replace('/')
    }

    return (
        <form className="login-conteniner" onSubmit={handleSubmit}>
            <h1><b>Bienvendido a <br/> Memorice Spacial</b></h1>
            <h2>Coloca tu nombre</h2>
            <input 
                type="email"
                name="email" 
                placeholder="Correo" 
                value={email}
                onChange={handleImputChange}
                autoComplete="off"   
            />
            <input 
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleImputChange}
                autoComplete="off"
            />
            <button onSubmit={handleSubmit}>Enviar</button>
            <Link className="login__link" to="/register" >No tienes cuenta, Registrate acá!</Link>
        </form>
    )
}
