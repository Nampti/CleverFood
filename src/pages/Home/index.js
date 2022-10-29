import Slider from "../../components/Layout/DefaultLayout/Slider";
import Section from "../../components/Layout/Section";
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className="home">
            <Slider />
            <Section />
        </div>
    );
}

export default Home;