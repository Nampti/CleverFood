import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
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
    {
        display: "Giỏ hàng",
        path: "/cart"
    },
]

function Header() {
    const { pathname } = useLocation()
    const activeNav = menuNav.findIndex(e => e.path === pathname)
    const headerRef = useRef(null)
    const [show, setShow] = useState(true);
    const handleClick = () => {
        setShow(!show)
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                headerRef.current.className = cx('header', 'shrink')
            }
            else {
                headerRef.current.className = cx('header')
            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);
    return (
        <div className={cx('header')} ref={headerRef}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row', 'header__row')}>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('header__logo')}>
                            <a href="/" rel="home" title="CleverFood">CleverFood</a>
                        </div>
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('header__navbar')}>
                            {menuNav.map((item, index) => (
                                <div key={index} className={cx('header__navbar-item', `${index === activeNav ? 'active' : ''}`)}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('col', 'l-3')}>
                        <div className={cx('header__search')}>
                            <i className={cx('fas fa-search')} onClick={handleClick}></i>
                            <input type="text" placeholder="Search" className={cx('header__search-input', `${(show === true) ? '' : 'show'}`)}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;