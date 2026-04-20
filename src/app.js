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

//Debería ocurrir siempre pero como JS es lineal (Linea por linea) se ejecuta hasta lo último. Si ya se encontro la ruta no se ejecuta.
app.use((req, res) => {
    res.redirect('https://http.cat/images/404.jpg');
});

/** 
app.get('/', (req, res) => {
    res.status(404).redirect('https://http.cat/images/404.jpg')
})
*/

export default app
