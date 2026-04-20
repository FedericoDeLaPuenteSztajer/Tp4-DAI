

function GetHora() {
    const date= new Date()
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function GetFechaCompleta() {
    return Date()
}

export default { GetHora, GetFechaCompleta }