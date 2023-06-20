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
        desc:"Ho Chi Minh City, Vietnam",
        isColorPrimary:false
    },
    {
        icon:<BsFillTelephoneFill/>,
        title:"Contact Number",
        desc:"0934844649",
        isColorPrimary:true
    },
    {
        icon:<BsFillSendFill/>,
        title:"Email Address",
        desc:"kietthetran123@gmail.com",
        isColorPrimary:true
    },
    {
        icon:<RiEarthFill/>,
        title:"Website",
        desc:"https://thekiet.netlify.app/",
        isColorPrimary:true
    },
]