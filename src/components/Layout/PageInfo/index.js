import img1 from "../../../assets/img/info/imgslide11.png";
import img2 from "../../../assets/img/info/imgslide13.png";
import img3 from "../../../assets/img/info/imgslide14.png";
import img4 from "../../../assets/img/info/imgslide18.png";
import slider from "../../../assets/img/info/imgslide22.png";
import styles from './PageInfo.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function PageInfo() {
    return (
        <div className={cx('page-info')}>
            <div className={cx('page-info-text')}>
                <h1>CleverFood</h1>
                <p>100% tự nhiên.</p>
                <p> Đảm bảo chất lượng VietGap.</p>
            </div>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('page-info-item')}>
                            <div className={cx('page-info-item--img')}>
                                <div className={cx('page-info-item--img-container')}>
                                    <img src={img1}></img>
                                </div>
                            </div>
                            <div className={cx('page-info-item--content')}>
                                <h3>Hoa Quả</h3>
                                <p>Theo tiêu chuẩn GlobalGap, hữu cơ, được xử lý bằng công nghệ bức xạ i-on hóa.</p>
                            </div>
                        </div>
                        <div className={cx('page-info-item')}>
                            <div className={cx('page-info-item--img')}>
                                <div className={cx('page-info-item--img-container')}>
                                    <img src={img2}></img>
                                </div>
                            </div>
                            <div className={cx('page-info-item--content')}>
                                <h3>Rau củ</h3>
                                <p>Rau an toàn, rau đặc sản tự nhiên.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('page-info-item--img-container')}>
                            <img src={slider}></img>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('page-info-item')}>
                            <div className={cx('page-info-item--img')}>
                                <div className={cx('page-info-item--img-container')}>
                                    <img src={img1}></img>
                                </div>
                            </div>
                            <div className={cx('page-info-item--content')}>
                                <h3>Hoa Quả</h3>
                                <p>Theo tiêu chuẩn GlobalGap, hữu cơ, được xử lý bằng công nghệ bức xạ i-on hóa.</p>
                            </div>
                        </div>
                        <div className={cx('page-info-item')}>
                            <div className={cx('page-info-item--img')}>
                                <div className={cx('page-info-item--img-container')}>
                                    <img src={img2}></img>
                                </div>
                            </div>
                            <div className={cx('page-info-item--content')}>
                                <h3>Rau củ</h3>
                                <p>Rau an toàn, rau đặc sản tự nhiên.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageInfo;