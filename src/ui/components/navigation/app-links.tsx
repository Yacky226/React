import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";
 const footerApplicationLinks :AppLinks[] =[
    {
        label:"Accueil",
        baseUrl:"/",
        type:"internal",

    },
    {
        label:"Projets",
        baseUrl:"/projets",
        type:"internal",

    },
    {
        label:"Coders Monkey",
        baseUrl:"/#",
        type:"internal",

    },
    {
        label:"Formations",
        baseUrl:"https://www/youtbe.com",
        type:"external",

    },
];

const footerUsersLinks :AppLinks[] =[
    {
        label:"Mon espace",
        baseUrl:"#",
        type:"internal",

    },
    {
        label:"Connexion",
        baseUrl:"/projets",
        type:"internal",

    },
    {
        label:"Inscription",
        baseUrl:"/#",
        type:"internal",

    },
    {
        label:"Mot de passe oublié",
        baseUrl:"#",
        type:"internal",

    },
];

const footerInformationLinks :AppLinks[] =[
    {
        label:"CGU",
        baseUrl:"/#",
        type:"internal",

    },
    {
        label:"Confidentialité",
        baseUrl:"/#",
        type:"internal",

    },
    {
        label:"A propos",
        baseUrl:"/#",
        type:"internal",

    },
    {
        label:"Contacts",
        baseUrl:"#",
        type:"internal",

    },
];
export const footerSocialNetworkLinks :AppLinks[] =[
    {
        label:"Youtube",
        baseUrl:"https://www.youtube.com",
        type:"external",
        icon: RiYoutubeFill,
    },
    {
        label:"Linkdin",
        baseUrl:"https://www.linkedin.com/in/yacouba52",
        type:"external",
        icon: RiLinkedinFill
       

    },
    {
        label:"Slack",
        baseUrl:"https://github.com/Yacky226/React",
        type:"external",
        icon:RiSlackFill,
    },
];

export const footerLinks =[
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks,
    },
    {
        label: "Information",
        links: footerInformationLinks,
    },

    {
        label: "Réseaux",
        links: footerSocialNetworkLinks,
    },
    

];