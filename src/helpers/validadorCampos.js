


export const validadorCampos = (name, email, password, password2) => {
    
    if(name === '' || email === '' || password === '' || password2 === ''){
        return {
            ok: false,
            msg: 'Debe completar todos los campos'
        }
    } 
    else if (password !== password2){
        return {
            ok: false,
            msg: 'Las contraseñas deben ser iguales'
        }
    }
    return {
        ok: true,
        msg: 'succes'
    }
}

