import { useState, useCallback, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from "../../components/ProductCard"
import productData from "../../assets/fakeDate/products";
import CheckBox from '../../components/CheckBox';
import InfinityList from "../../components/InfinityList";
import shopFilter from '../../assets/fakeDate/shopFilter';
import styles from './Shop.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Shop() {
    const initFilter = {
        category: [],
    }
    const productList = productData.getAllProducts();
    const [products, setProducts] = useState(productList);
    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(productList));
    }, [productList]);
    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
                    break

                default:
            }
        } else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({ ...filter, category: newCategory })
                    break
                default:
            }
        }
    }
    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')
    return (
        <div className={cx('shop')}>
            <div className={cx('shop-filter')}>
                <div className={cx('shop-filter__widget')}>
                    <div className={cx('shop-filter__widget--title')}>
                        Danh mục sản phẩm
                    </div>
                    <div className={cx('shop-filter__widget--container')}>
                        {shopFilter.map((item, index) => (
                            <div key={index} className={cx('shop-filter__widget--container-item')}>
                                <CheckBox label={item.display}
                                    onChange={(input) => filterSelect("CATEGORY",
                                        input.checked, item)}
                                    checked={filter.category.includes(item.categorySlug)} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className={cx('shop-container')}>
                <InfinityList
                    data={products} />
            </div>
        </div>
    );
}

export default Shop;
