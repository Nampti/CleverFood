import PageHeader from "../../components/PageHeader";
import PageInfo from "../../components/Layout/PageInfo";
import bg from "../../assets/img/background/InfoBG.jpg"
function Info() {
    return (
        <>
            <PageHeader
                bg={bg}
                h1="Giới Thiệu"
                a="Trang chủ"
                span="Giới thiệu"
            />
            <PageInfo />
        </>
    );
}

export default Info;