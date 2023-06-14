import {BsFillSignpost2Fill,BsFillTelephoneFill,BsFillSendFill} from 'react-icons/bs'
import {GrSend} from 'react-icons/gr'
import {RiEarthFill} from 'react-icons/ri'
export type Contact = {
    icon:React.ReactNode;
    title:string;
    desc:string;
    isColorPrimary:boolean;
}
export const arrayContact:Contact[] = [
    {
        icon:<BsFillSignpost2Fill/>,
        title:"Address",
        desc:"198 West 21th Street, Suite 721 New York NY 10016",
        isColorPrimary:false
    },
    {
        icon:<BsFillTelephoneFill/>,
        title:"Contact Number",
        desc:"+ 1235 2355 98",
        isColorPrimary:true
    },
    {
        icon:<BsFillSendFill/>,
        title:"Email Address",
        desc:"info@yoursite.com",
        isColorPrimary:true
    },
    {
        icon:<RiEarthFill/>,
        title:"Website",
        desc:"yoursite.com",
        isColorPrimary:true
    },
]