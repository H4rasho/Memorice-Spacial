import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startlogin } from '../../actions/auth';
import { startRank } from '../../actions/rank';
import { useForm } from '../../hooks/useForm'

export const Login = ({history}) => {

    const dispatch = useDispatch()

    const [values, handleImputChange] = useForm({
        email: '',
        password: ''
    });
    
    const {email, password} = values
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startlogin(email, password));
        dispatch(startRank(new Date()));
        history.replace('/')
    }

    return (
        <form className="login-conteniner" onSubmit={handleSubmit}>
            <h1><b>Bienvendido a <br/> Memorice Spacial</b></h1>
            <h2>Ingrese los datos</h2>
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
            <Link className="login__link" to="/auth/register" >No tienes cuenta, Registrate acá!</Link>
        </form>
    )
}
