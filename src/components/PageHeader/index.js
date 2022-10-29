import { Link } from 'react-router-dom';
import styles from './PageHeader.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function PageHeader(props) {
    const myStyle = {
        backgroundImage: `url(${props.bg})`,
    }
    return (
        <div className={cx('page-header')} >
            <div className={cx('page-header-bg')} style={myStyle}></div>
            <div className={cx('page-header-bg--overplay')}></div>
            <div className={cx('page-header-content')}>
                <h1>{props.h1}</h1>
                <div className={cx('page-header-content--info')}>
                    <Link to={'/'}>{props.a}</Link>
                    <span>/</span>
                    {props.span}
                </div>
            </div>
        </div>
    );
}

export default PageHeader;