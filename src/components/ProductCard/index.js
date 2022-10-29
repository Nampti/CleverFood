import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from "./ProductCard.module.scss";
import numberWithCommas from "../../utils"
const cx = classNames.bind(styles);
function ProductCard(props) {
    return (
        <div className={cx('product-card', 'col', 'l-3')}>
            <Link to={`/shop/${props.slug}`}>
                <div className={cx('product-card-container')}>
                    <div className={cx('product-card-img')}>
                        <img src={props.img} alt=""></img>
                    </div>
                    <div className={cx('product-card-deltails')}>
                        <div className={cx('product-card-deltails--title')}>
                            <h2>{props.name}</h2>
                        </div>
                        <span className={cx('product-card-deltails--price')}>
                            {numberWithCommas(props.price)}
                            <span className={cx('product-card-deltails--icon')}> ₫</span>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}
export default ProductCard;