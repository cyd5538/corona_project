import Koreacompo from "../components/Home/Koreacompo";
import KoreaToday from "../components/Home/KoreaToday";
import KoreaChart from "../components/Home/Koreachart";
const Korea = () => {
    return(
        <div className='p-5 w-full flex-wrap'>
            <Koreacompo />
            <KoreaToday />
            <KoreaChart />
        </div>
    )
}

export default Korea;