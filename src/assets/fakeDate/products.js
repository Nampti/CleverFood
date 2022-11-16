import Axios from "../../Axios"
const getAllProducts = () => Axios();
const getProducts = (count) => {
    const max = Axios().length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return Axios().slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts,
}

export default productData


