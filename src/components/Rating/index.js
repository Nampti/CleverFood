import { useState } from "react";
import star from "./icon-star.svg";
import thanks from "./illustration-thank-you.svg";
import styles from './Rating.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Rating() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [number, setNumber] = useState("");
    const Button = ({ number }) => {
        return (
            <button onClick={() => setNumber(number)}>{number}</button>
        )
    }
    return (
        <>
            {!isSubmitted && (
                <div className={cx('rating')}>
                    <div className={cx('rating__bg')}></div>
                    <div className={cx('rating__container')}>
                        <div className={cx('row')}>
                            <div className={cx('col', 'l-12', 'rating__container-content')}>
                                <h1>Đánh giá dịch vụ</h1>
                                <img src={star} alt="" className="rating__container-star"></img>
                                <p>Tất cả các phản hồi đều được đánh giá cao để giúp chúng tôi cải thiện dịch vụ của mình!</p>
                                <div className={cx('rating__container-submit')}>
                                    <ul className={cx('rating__container-submit-ul')}>
                                        <li className={cx('rating__container-item')}>
                                            <Button number={1} />
                                        </li>
                                        <li className={cx('rating__container-item')}>
                                            <Button number={2} />
                                        </li>
                                        <li className={cx('rating__container-item')}>
                                            <Button number={3} />
                                        </li>
                                        <li className={cx('rating__container-item')}>
                                            <Button number={4} />
                                        </li>
                                        <li className={cx('rating__container-item')}>
                                            <Button number={5} />
                                        </li>
                                    </ul>
                                    <div className={cx('rating__container-submit-btn')}>
                                        <button className={cx('btn-submit')} onClick={() => setIsSubmitted(true)}>Đánh giá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isSubmitted && <Thanks setIsSubmitted={setIsSubmitted} number={number} />}
        </>

    );
}
const Thanks = (props) => {
    return (
        <div className={cx('rating')}>
            <div className={cx('rating__bg')}></div>
            <div className={cx('rating__container')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'rating__container-content')}>
                        <img src={thanks} alt="" className="rating__container-star"></img>
                        <h1>Cảm ơn bạn đã đánh giá</h1>
                        <p>Chúng tôi đánh giá cao bạn đã dành thời gian để đưa ra đánh giá. Nếu bạn cần thêm hỗ trợ, đừng ngần ngại liên hệ!</p>
                        <div className={cx('rating__container-submit')}>
                            <div className={cx('rating__container-submit-thanks')}>
                                <button className={cx('rating__container-submit-thanks-btn')} onClick={() => props.setIsSubmitted(false)}>Đánh giá lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rating;