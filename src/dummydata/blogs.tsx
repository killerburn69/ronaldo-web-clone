import { ReactNode } from 'react'
import blog1 from '../images/ourblog1.webp'
import blog2 from '../images/ourblog2.webp'
import blog3 from '../images/ourblog3.webp'
import {BiCommentDetail} from 'react-icons/bi'
export type Blog = {
    img:string;
    heading:string;
    date:string;
    role:string;
    commentIcon:ReactNode;
    commentNumber:number;
    desc:string;
}
export const arrayBlog:Blog[] = [
    {
        img:blog1,
        heading:"Why Lead Generation is Key for Business Growth",
        date:"Sept. 12, 2019",
        role:"ADMIN",
        commentIcon:<BiCommentDetail/>,
        commentNumber:3,
        desc:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        img:blog2,
        heading:"Why Lead Generation is Key for Business Growth",
        date:"Sept. 12, 2019",
        role:"ADMIN",
        commentIcon:<BiCommentDetail/>,
        commentNumber:3,
        desc:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        img:blog3,
        heading:"Why Lead Generation is Key for Business Growth",
        date:"Sept. 12, 2019",
        role:"ADMIN",
        commentIcon:<BiCommentDetail/>,
        commentNumber:3,
        desc:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
]