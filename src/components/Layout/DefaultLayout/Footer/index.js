import { Link, useLocation } from 'react-router-dom';
import ftLogo from "./logo-new.png";
import ftimg1 from "./5.jpg";
import ftimg2 from "./7.jpg";
import ftimg3 from "./10.jpg";
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Rating from "../../../Rating"
const cx = classNames.bind(styles);
const menuNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Giới thiệu",
        path: "/info"
    },
    {
        display: "Cửa hàng",
        path: "/shop"
    },
]
const productMenu = [
    {
        display: "Rau củ",
        path: "/product/rau củ"
    },
    {
        display: "Trái cây",
        path: "/product/trái cây"
    },
    {
        display: "Đồ uống",
        path: "/product/đồ uống"
    },
    {
        display: "Đồ khô",
        path: "/product/đồ khô"
    }
]
function Footer() {
    const { pathname } = useLocation()
    const activeNav = menuNav.findIndex(e => e.path === pathname)
    return (
        <div className={cx('footer')}>
            <div className={cx('grid')}>
                <Rating />
            </div>
            <div className={cx('footer__container', 'grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3')}>
                        <img src={ftLogo}></img>
                        <div className={cx('footer__container-contact')}>
                            <i className={cx('fas fa-map-marker')}></i>
                            <p>Số nhà 4 nghách 41/3 Trần Duy Hưng</p>
                        </div>
                        <div className={cx('footer__container-contact')}>
                            <i className={cx('fas fa-phone')}></i>
                            <p>123456789</p>
                        </div>
                        <div className={cx('footer__container-contact')}>
                            <i className={cx('fas fa-at')}></i>
                            <p>abc@gmail.com</p>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3', 'footer__container-content')}>
                        <div className={cx('footer__container-content-title')}>MENU</div>
                        <div className={cx('footer__container-content-menu')}>
                            {menuNav.map((item, index) => (
                                <p key={index} className={cx('footer__container-content-menu-item', `${index === activeNav ? 'active' : ''}`)}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </p>
                            ))}

                        </div>
                    </div>
                    <div className={cx('col', 'l-3', 'footer__container-content')}>
                        <div className={cx('footer__container-content-title')}>Sản Phẩm</div>
                        <div className={cx('footer__container-content-menu')}>
                            {productMenu.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('footer__logo')}>
                            <a href="/" rel="home" title="CleverFood">CleverFood</a>
                        </div>
                        <h1>100% tự nhiên</h1>
                        <h2>Đảm bảo chất lượng VietGap</h2>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Footer;