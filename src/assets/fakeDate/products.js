import cachua from "../img/products/cachua.jpg";
import cam from "../img/products/cam.jpg";
import chanh from "../img/products/chanh.jpg";
import dua from "../img/products/dua.jpg";
import dualeo from "../img/products/dualeo.jpg";
import nhoxanh from "../img/products/nhoxanh.jpg";
import ot from "../img/products/ot.jpg";
import suplo from "../img/products/suplo.jpg";
import taoxanh from "../img/products/taoxanh.jpg";
import xoai from "../img/products/xoai.jpg";
const products = [
    {
        name: "Cà chua",
        price: 320000,
        img: cachua,
        categorySlug: "raucu",
        slug: "cachua",
    },
    {
        name: "Cam",
        price: 320000,
        img: cam,
        categorySlug: "traicay",
        slug: "cam",
    },
    {
        name: "Chanh",
        price: 320000,
        img: chanh,
        categorySlug: "douong",
        slug: "chanh",
    },
    {
        name: "Dưa",
        price: 320000,
        img: dua,
        categorySlug: "dokho",
        slug: "dua",
    },
    {
        name: "Ớt",
        price: 320000,
        img: dualeo,
        categorySlug: "raucu",
        slug: "ot",
    },
    {
        name: "Súp lơ",
        price: 320000,
        img: cachua,
        categorySlug: "raucu",
        slug: "suplo",
    },
    {
        name: "Táo Xanh",
        price: 320000,
        img: cachua,
        categorySlug: "traicay",
        slug: "taoxanh",
    },
    {
        name: "Xoài",
        price: 320000,
        img: cachua,
        categorySlug: "traicay",
        slug: "xoai",
    },
]
const getAllProducts = () => products
const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => {
    return products.filter((product) => product.slug === slug)
}

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData


