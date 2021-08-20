import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import { validadorCampos } from '../../helpers/validadorCampos';
import { useForm } from '../../hooks/useForm'

export const Register = () => {

    const dispatch = useDispatch()

    const [values, handleImputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const {name, email, password, password2} = values

    const handleSubmit = (e) => {
        e.preventDefault();
        const {ok, msg} = validadorCampos(name, email, password, password2)
        if (ok === true){
            dispatch(startRegister(email, password, name));
        }
        else{
            Swal.fire('Error', msg, 'error')
        }
    }


    return (
        <div className="login-conteniner">
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <h2>Ingrese los Datos</h2>
                <label>Nombre</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Ingrese nombre"
                    onChange={handleImputChange}
                    value={name}
                    autoComplete="off"
                />
                <label>Correo</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="xxxx@xxx.xxx"
                    onChange={handleImputChange}
                    value={email}
                    autoComplete="off"
                />
                <label>Contraseña</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="xxxxxxxxxx"
                    onChange={handleImputChange}
                    value={password}
                    autoComplete="off"
                />
                <label>Confirmar Contraseaña</label>
                <input 
                    type="password"
                    name="password2"
                    placeholder="xxxxxxxxxx"
                    onChange={handleImputChange}
                    value={password2}
                    autoComplete="off"
                    
                />
               <button
                    onSubmit={handleSubmit}
               >
                   Enviar
               </button>
               <Link className="login__link" to="/auth/login"> Ya tengo cuenta!</Link>

            </form>
        </div>
    )
}


