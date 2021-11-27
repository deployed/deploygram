import { borderRadius } from "@mui/system";
import "./cssplik.css"
const Stories = ({imgSrc, userId}) =>
{
    return (
        <div className="background">
            <img src={imgSrc} alt="avatar" width="84" height="84" className="circle"/>
            <span className="text">{userId.length > 10 ? userId.substring(0,7)+"...": userId}</span>
        </div>
    );
};
export default Stories;