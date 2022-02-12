import react from "react";
import { Link } from "react-router-dom";
import { listMenu } from "../Pages/listMenu";
import dropStyles from "../styles/Dropdown.module.css"
import { useState } from "react";
function DropDown() {

    const[dropmenu,setDropmenu] = useState(false)

    return(
        <>
        <ul 
        className={ dropmenu ? dropStyles.moreMenuClicked : dropStyles.moreMenu} 
        onClick={()=> setDropmenu(!dropmenu)
        }>
            {listMenu.map(item => {
                return(
                    <li key={item.id} className={dropStyles.moreList}>
                        <Link to={item.path}
                         onClick={()=>setDropmenu(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
export default DropDown