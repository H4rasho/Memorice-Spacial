

export const  restaurasNaves = (naves) => {
    return naves.map(nave => (
        nave.modo = "oculto"
    ))
}

