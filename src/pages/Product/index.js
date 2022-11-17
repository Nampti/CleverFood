import productData from "../../assets/fakeDate/products";
import ProductCard from "../../components/ProductCard";
import InfinityList from "../../components/InfinityList";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../../context";
import classNames from 'classnames/bind';
import styles from "./Product.module.scss";
import numberWithCommas from "../../utils"
const cx = classNames.bind(styles);
function Product() {
    const { title } = useParams();
    const items = JSON.parse(localStorage.getItem('items'));
    const product = items.filter((item) => item.title === title)[0];
    product.quantity = 1;
    const relatedProducts = productData.getProducts(8);
    const productList = productData.getAllProducts();
    const [products, setProducts] = useState(productList);
    const [quantity, setQuantity] = useState(1);
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate);
    return (
        <div className={cx('product')}>
            <div className={cx('product__container')}>

                <div className={cx('product-img')} >
                    <div className={cx('product-img--container')}>
                        <img src={`data:image/jpeg;base64,${product.image}`}></img>
                    </div>
                </div>
                <div className={cx('product-info')}>
                    <h1 className={cx('product-info--title')}>{product.title}</h1>
                    <div className={cx('product-info--divide')}></div>
                    <p className={cx('product-info--price')}>{(product.price)} đ</p>
                    <p>Trái cây là nguồn cung cấp nhiều chất dinh dưỡng thiết yếu được tiêu thụ ít, bao gồm kali, chất xơ, vitamin C và folate (axit folic). Chế độ ăn giàu kali có thể giúp duy trì huyết áp khỏe mạnh. Các nguồn trái cây cung cấp kali bao gồm chuối, mận khô và nước ép mận, đào và mơ khô, dưa hấu, dưa mật và nước cam.</p>

                    <div className={cx('product-info--add')}>
                        <button onClick={() => dispatch({ type: "ADD", payload: product })}>Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
            <h1>Sản phẩm tương tự</h1>
            <div className={cx('shop-container')}>
                <InfinityList
                    data={relatedProducts} />
            </div>
        </div >

    )



};

export default Product;
