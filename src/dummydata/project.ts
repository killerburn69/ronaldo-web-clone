import img1 from '../images/ourproject4.webp'
import img2 from '../images/ourproject7.webp'
import img3 from '../images/ourproject6.webp'
import img4 from '../images/ourprject3.webp'
import img5 from '../images/ourproject5.webp'
import img6 from '../images/ourproject1.webp'
type Project = {
    img:string;
    title:string;
    desc:string;
}
export type TotalProject = {
    number:string,
    title:string,
}
export const arrayProject:Project[]=[
    {
        img:img1,
        title:"Branding & Illustration Design",
        desc:"WEB DESIGN"
    },
    {
        img:img2,
        title:"Branding & Illustration Design",
        desc:"WEB DESIGN"
    },
    {
        img:img3,
        title:"Branding & Illustration Design",
        desc:"WEB DESIGN"
    },
    {
        img:img4,
        title:"Branding & Illustration Design",
        desc:"WEB DESIGN"
    },
    {
        img:img5,
        title:"Branding & Illustration Design",
        desc:"WEB DESIGN"
    },
    {
        img:img6,
        title:"Branding & Illustration Design",
        desc:"WEB DESIGN"
    },
    
]
export const arrayTotalProject:TotalProject[] = [
    {
        number:"100",
        title:"Awards"
    },
    {
        number:"1200",
        title:"Complete Projects"
    },
    {
        number:"1200",
        title:"Happy Customers"
    },
    {
        number:"500",
        title:"Cups of coffee"
    },
]