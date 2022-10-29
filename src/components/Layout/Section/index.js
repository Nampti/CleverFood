import ProductCard from "../../ProductCard";
import productData from "../../../assets/fakeDate/products";
import styles from './Section.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Section() {
    return (
        <div className={cx('section')}>
            <div className={cx('section__title')}>Sản phẩm nổi bật</div>
            <div className={cx('section__container')}>
                {/* <div className={cx('grid', 'wide')}> */}
                <div className={cx('grid', 'row')}>
                    {productData.getProducts(8).map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            slug={item.slug}
                        ></ProductCard>
                    ))}
                </div>
            </div>
            {/* </div> */}

        </div>
    );
}

export default Section;