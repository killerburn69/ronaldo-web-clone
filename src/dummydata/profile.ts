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
        year:"2014-2015",
        heading:"Bachelor of Science in Computer Science",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Computer Processing Systems/Computer Software",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Diploma in Computer",
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
export const arrayExperience:Experience[] = [
    {
        year:"2014-2015",
        heading:"Software Developer",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Web Designer",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Web Marketing",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Art & Creative Director",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2014-2015",
        heading:"Wordpress Developer",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year:"2017-2018",
        heading:"UI/UX Designer",
        heading_title:"Cambridge University",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
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
        ratio:"80",
        last_week:"28%",
        last_month:"60%"
    },
    {
        heading:"jQuery",
        ratio:"75",
        last_week:"28%",
        last_month:"60%"
    }
]
export const arraySkills:Skills[]=[
    {
        heading:"Photoshop",
        ratio:"90%",
    },
    {
        heading:"HTML5",
        ratio:"95%",
    },
    {
        heading:"WordPress",
        ratio:"70%",
    },
    {
        heading:"jQuery",
        ratio:"85%",
    },
    {
        heading:"CSS3",
        ratio:"90%",
    },
    {
        heading:"SEO",
        ratio:"80%",
    },
]
export const arrayAward:Award[]=[
    {
        year:"2014-2015",
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
    {
        id:"#award",
        title:"Award"
    },
]