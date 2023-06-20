type Education = {
    year:string;
    heading:string;
    heading_title:string;
    description:string;
}
type Experience = {
    year:string;
    heading:string;
    heading_title:string;
    description:string;
}
export type Skills = {
    heading:string;
    ratio:string;
    last_week?:string;
    last_month?:string;
}
type Award = {
    year:string;
    heading:string;
    heading_title:string;
    description:string;
}
type profileLink = {
    id:string,
    title:string,
}
export const arrayEducation:Education[] = [
    {
        year:"2020-Present",
        heading:"Information Technology",
        heading_title:"HCMC University of Technology and Education",
        description:"I am currently a student at a school with the best achievements and quality in training information technology engineers"
    },
]
export const arrayExperience:Experience[] = [
    {
        year:"2020-Present",
        heading:"Front-end Developer",
        heading_title:"Cambridge University",
        description:"Currently, I am focusing on learning and developing skills in Front-end Developer"
    },
]

export const arraySkillsRatio:Skills[]=[
    {
        heading:"CSS",
        ratio:"90",
        last_week:"28%",
        last_month:"60%"
    },
    {
        heading:"HTML",
        ratio:"95",
        last_week:"28%",
        last_month:"60%"
    },
    {
        heading:"React",
        ratio:"75",
        last_week:"28%",
        last_month:"60%"
    }
]
export const arraySkills:Skills[]=[
    {
        heading:"Figma",
        ratio:"45%",
    },
    {
        heading:"HTML5",
        ratio:"95%",
    },
    {
        heading:"CSS3",
        ratio:"90%",
    },
    {
        heading:"ReactJS",
        ratio:"75%",
    },
    {
        heading:"GIT",
        ratio:"50%",
    },
]
export const arrayAward:Award[]=[
    {
        year:"15/11/2021",
        heading:"Top 10 Web Developer",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Top 5 LeaderShip Exellence Winner",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Top 4 Web Tester",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Art & Creative Director",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
]

export const arrayProfileLink:profileLink[] = [
    {
        id:"#education",
        title:"Education"
    },
    {
        id:"#experience",
        title:"Experience"
    },
    {
        id:"#skills",
        title:"Skills"
    },
]