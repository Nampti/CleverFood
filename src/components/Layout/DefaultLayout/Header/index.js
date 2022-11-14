import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { Cartcontext } from "../../../../context";
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
]

function Header() {
    const { pathname } = useLocation()
    const activeNav = menuNav.findIndex(e => e.path === pathname)
    const headerRef = useRef(null)
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
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
                    <div className={cx('col', 'l-2')}>
                        <div className={cx('header__logo')}>
                            <a href="/" rel="home" title="CleverFood">CleverFood</a>
                        </div>
                    </div>
                    <div className={cx('col', 'l-8')}>
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

                    <div className={cx('col', 'l-2')}>
                        <Link to={"/cart"}>
                            <div className={cx('header__cart')}>
                                <i class="fa fa-store"></i>
                                <div className={cx('header__cart-number')}>{state.length}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
