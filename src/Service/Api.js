import axios from "axios";

async function getSlider() {
    const res = await axios.get("http://localhost:3000/SliderMain")
        return res.data
}
async function getColleciones() {
    const res = await axios.get("http://localhost:3000/Colecciones")
        return res.data
}
async function getOfertas() {
    const res = await axios.get("http://localhost:3000/Ofertas")
        return res.data
}
async function getTienda() {
    const res = await axios.get("http://localhost:3000/Tienda")
        return res.data
}

export {
    getSlider, getColleciones, getOfertas, getTienda
}