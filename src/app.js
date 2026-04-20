import express from "express";
import time from "./time.js";

const app = express();
const textBienvenida = "Bienvenido!!! ||| / -> Bienvenida ||| /hora -> Hora actual ||| /fecha-completa -> Fecha completa actual"

app.get('/', (req, res) => {
    res.send(textBienvenida)
})

app.get('/hora', (req, res) => {
    res.send(time.GetHora())
})

app.get('/fecha-completa', (req, res) => {
    res.send(time.GetFechaCompleta())
})

export default app
