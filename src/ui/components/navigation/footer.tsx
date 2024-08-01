import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"
import { footerLinks } from "./app-links"
import {v4 as uuidv4} from "uuid"
import { ActiveLink } from "./active-link"
import { AppLinks, FooterLinks } from "@/types/app-links"
import { LinkTypes } from "@/lib/link-type"
import { SocialNewtworksButtons } from "./social-networks-buttons"


export const Footer =()=>{
    const currentYear= new Date().getFullYear();

    const footerNavigationList= footerLinks.map((colomnLinks)=>(
        <FooterLink key={uuidv4()} data={colomnLinks}/>

    )
);

    return(
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">
               <div className="flex flex-col items-center gap-1">
                <Typography variant="caption1" themes="white" weight="medium">
                    Formations gratuites
                </Typography>
                <Typography variant="caption3" themes="gray">
                    Abonne toi à la chaine
                </Typography>
                <a href="https://www.youtube.com" target="_blank">
                    <Image src="/svg/YTB.svg"
                    width={229}
                    height={216}
                    alt="Youtube"
                    />
                </a>
               </div>
               <div className="flex gap-7"> {footerNavigationList} </div>  
            </Container>
            <Container className="pt-9 pb-11 space-y-11" >
                <hr className="text-gray-800"/>
            <div className="flex items-center justify-between">
           <Typography variant="caption4" themes="gray">
            {`Copyright © ${currentYear} | Propulsed by `}
            <a href="https://www.youtube.com" target="_blank" className="underline">  {`Arnaud desportes - Remote monkey SASU`}</a>
            </Typography>
            <div className=""><SocialNewtworksButtons theme="gray"/></div>

            </div>
            
            </Container>
        </div>
    )
};
 interface footerLinksProps{
    data:FooterLinks;
 }

const FooterLink = ({data}:footerLinksProps)=>{

    const LinkList= data.links.map((link)=>(
        <div key={uuidv4()}>
            {link.type===LinkTypes.INTERNAL &&(
                <ActiveLink key={uuidv4()} href={link.baseUrl}>{link.label}</ActiveLink>)}
            {link.type===LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">{link.label}</a>)}
        </div>
     )
 );
    return(
        <div className="min-w-[190px]">
            <Typography
            themes="white"
            variant="caption2"
            weight="medium"
            className="pb-5"
            >
                {data.label}
            </Typography>
            <Typography
            themes="gray"
            variant="caption3"
            className="space-y-4"
            >
                {LinkList}
            </Typography>
        </div>
    )
}
