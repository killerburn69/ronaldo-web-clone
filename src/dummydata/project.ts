import img1 from '../images/rensis.jpg'
import img2 from '../images/freshauc.jpg'
import img3 from '../images/tripfinder.jpg'
import img4 from '../images/recipes.jpg'
import img5 from '../images/budget.jpg'
type Project = {
    img:string;
    title:string;
    desc:string;
    link:string;
}
export type TotalProject = {
    number:string,
    title:string,
}
export const arrayProject:Project[]=[
    {
        img:img1,
        title:"Rensis",
        desc:"For baby and nani can connect together",
        link:"https://github.com/killerburn69/renis-client"
    },
    {
        img:img2,
        title:"FresAuc E-commerce",
        desc:"For people who want buy some item",
        link:"https://github.com/EcommerceGroup7"
    },
    {
        img:img3,
        title:"Booking Hotel Website",
        desc:"The people want book a hotel for they vacation",
        link:"https://github.com/WebDevUTE/Hotel_Booking_MVC"
    },
    {
        img:img4,
        title:"Recipes App",
        desc:"For people want find some recipes",
        link:"https://github.com/killerburn69/recipeApp"
    },
    {
        img:img5,
        title:"Budget App",
        desc:"Personal project",
        link:"https://github.com/killerburn69/budgetApp"
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