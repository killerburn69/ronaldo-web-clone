import webDesgin from '../images/analyse.png'
import photography from '../images/laboratory.png'
import webDeveloper from '../images/ideas.png'
import appDeveloping from '../images/innovation.png'
import branding from '../images/ux-design.png'
import product from '../images/lightbulb.png'
export type Service = {
    icon: string;
    heading:string;
    description:string;
}
export const arrayService:Service[]=[
    {
        icon:webDesgin,
        heading:"WEB DESIGN",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        icon:photography,
        heading:"PHOTOGRAPHY",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        icon:webDeveloper,
        heading:"WEB DEVELOPER",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        icon:appDeveloping,
        heading:"APP DEVELOPING",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        icon:branding,
        heading:"BRANDING",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        icon:product,
        heading:"PRODUCT STRATEGY",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
]