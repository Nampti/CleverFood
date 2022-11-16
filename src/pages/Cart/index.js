import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Cartcontext } from "../../context";
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import numberWithCommas from "../../utils";
export const totalPriceKey = 'totalPrice';
const cx = classNames.bind(styles);
function Cart() {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;
    const totalProduct = state.reduce((totalProduct, item) => {
        return totalProduct + item.buyQuantity;

    }, 0);

    const totalPrice = state.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.buyQuantity;
    }, 0);

    const [initialValues, setInitialValues] = useState({
        cusName: "",
        phone: "",
        email: "",
        address: "",
        pay: totalPrice + 'đ',
        bill: state,
    });
    const [formValues, setFormValues] = useState([]);

    const submitForm = () => {
        alert('Đặt hàng thành công')
        setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    };
    useEffect(() => {
        localStorage.setItem("cusInfo", JSON.stringify(formValues));
    }, [formValues]);

    return (
        <div className={cx('cart')}>
            <div className={cx('cart__info')}>
                <div className={cx('cart__info-cus')}>
                    <div className={cx('cart__info-cus-title')}>
                        Thông tin khách hàng
                    </div>
                    <div className={cx('cart__info-cus-form')}>
                        <div className={cx('grid', 'wide')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'l-6', 'cart__info-cus-form-item')}>
                                    <input value={initialValues.cusName} type="text" name='full_name' placeholder="Họ và tên" onChange={(e) =>
                                        setInitialValues({ ...initialValues, cusName: e.target.value })
                                    }></input>
                                </div>
                                <div className={cx('col', 'l-6', 'cart__info-cus-form-item')}>
                                    <input value={initialValues.phone} type="tel" name='phone' placeholder="Số điện thoại" onChange={(e) =>
                                        setInitialValues({ ...initialValues, phone: e.target.value })
                                    }></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className={cx('col', 'l-12', 'cart__info-cus-form-item')}>
                                    <input value={initialValues.email} type="mail" name='email' placeholder="Email" onChange={(e) =>
                                        setInitialValues({ ...initialValues, email: e.target.value })
                                    }></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className={cx('col', 'l-12', 'cart__info-cus-form-item')}>
                                    <input value={initialValues.address} type="text" name='address' placeholder="Địa chỉ" onChange={(e) =>
                                        setInitialValues({ ...initialValues, address: e.target.value })
                                    }></input>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={cx('cart__info-txt')}>
                    <p>
                        Bạn đang có {state.length} sản phẩm trong giỏ hàng
                    </p>
                    <div className={cx('cart__info-txt-price')}>
                        <span>Thành tiền </span>
                        <span>{numberWithCommas(totalPrice)} đ</span>
                        <p></p>
                    </div>
                </div>
                <div className={cx('cart__info-btn')}>
                    <button onClick={submitForm}>Đặt hàng</button>
                </div>
            </div>
            <div className={cx('cart__container')}>
                {state.map((item, index) => (
                    <div className={cx('cart__container-item')} key={index}>
                        <div className={cx('cart__container-item-img')}>
                            <img src={item.image}></img>
                        </div>
                        <div className={cx('cart__container-item-info')}>
                            <div className={cx('cart__container-item-info--name')}>
                                <p>{item.productName}</p>
                            </div>
                            <div className={cx('cart__container-item-info--price')}>
                                <span>{numberWithCommas(item.price)} đ</span>
                            </div>
                        </div>
                        <div className={cx('cart__container-item-quantity')}>

                            <div className={cx('cart__container-item-quantity-btn')} onClick={() => {
                                if (item.buyQuantity > 1) {
                                    dispatch({ type: "DECREASE", payload: item });
                                } else {
                                    dispatch({ type: "REMOVE", payload: item });
                                }
                            }}>
                                <i className={cx('fa fa-minus')}></i>
                            </div>
                            <div className={cx('cart__container-item-quantity-input')}>
                                {item.buyQuantity}
                            </div>
                            <div className={cx('cart__container-item-quantity-btn')} onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                                <i className={cx('fa fa-plus')}></i>
                            </div>
                        </div>
                        <div className={cx('cart__container-item-delete')} onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                            <i className={cx('fa fa-trash')}></i>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Cart;
