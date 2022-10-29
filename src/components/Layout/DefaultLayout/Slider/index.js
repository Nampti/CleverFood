import BG1 from "./slider26.jpg";
import BG2 from "./slider28.jpg";
import img1 from "./imgslide13.png";
import img2 from "./imgslide22.png";
import bannerImg1 from "../../Banner/banner36.jpg";
import bannerImg2 from "../../Banner/banner34.jpg";
import bannerImg3 from "../../Banner/banner28.jpg";
import bannerImg4 from "../../Banner/banner35.jpg";
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const bannerImg = [
    { src: bannerImg1, },
    { src: bannerImg2, },
    { src: bannerImg3, },
    { src: bannerImg4, },
]
function Slider() {
    return (
        <div className={cx('slider')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col ', 'l-3', 'm-12', 'c-12')}>
                        <div className={cx('slider__container')}>
                            <h4>Apple Juice</h4>
                            <h2>100% tự nhiên</h2>
                            <p>Giảm giá khi đặt mua ngay hôm nay</p>
                            <a href="/shop">Mua ngay</a>
                        </div>
                    </div>
                    <div className={cx('col ', 'l-9', 'm-12', 'c-12')}>
                        <img src={img2}></img>
                    </div>
                </div>
            </div>
            <div className={cx('grid', 'wide', 'banner__container')}>
                <div className={cx('row', 'no-gutters ')}>
                    {bannerImg.map((item, index) => (
                        <div className={cx('col', 'l-6', 'banner__container-item')}>
                            <div className={cx('banner__container-item-img')}>
                                <a href="/shop">
                                    <img key={index} src={item.src}></img>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;