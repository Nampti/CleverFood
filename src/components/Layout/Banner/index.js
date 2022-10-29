import bannerImg1 from "./banner36.jpg";
import bannerImg2 from "./banner34.jpg";
import bannerImg3 from "./banner28.jpg";
import bannerImg4 from "./banner35.jpg";
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const bannerImg = [
    { src: bannerImg1, },
    { src: bannerImg2, },
    { src: bannerImg3, },
    { src: bannerImg4, },
]
function Banner() {
    return (
        <div className={cx('banner')}>
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

export default Banner;