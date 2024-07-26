import { Seo } from "@/ui/components/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import Head from "next/head";
import {RiUser6Fill} from "react-icons/ri";
import { RiAncientGateFill } from "react-icons/ri";
export default function Home() {
  return (
    <>
    <Seo title="Coders" description="Description"/>
    
<div className="max-w-6xl mx-auto space-y-5 py-10">
    {/*TYpography*/}
    <div className="space-y-2">
    <p>Display</p>
    <Typography variant="display" >
    Nothing is impossible
    </Typography>

    <p>h1</p>
    <Typography variant="h1">
    Nothing is impossible, the word itself says, I’m possible!
    </Typography>

    <p>h2</p>
    <Typography variant="h2" >
      Your time is limited, so don’t waste it living someone else’s life
    </Typography>

    <p>h3</p>
    <Typography variant="h3" >
    Daily Report: Removing Checks to the Power of the Internet Titans
    </Typography>

    <p>h4</p>
    <Typography variant="h4" >
    Daily Report: Removing Checks to the Power of the Internet Titans
    </Typography>

    <p>h5</p>
    <Typography variant="h5" >
    Daily Report: Removing Checks to the Power of the Internet Titans
    </Typography>

    <p>Lead</p>
    <Typography variant="Lead" weight="regular" >
    Nothing is impossible, the word itself says, I’m possible!
    </Typography>
    <Typography variant="Lead" weight="medium" >
    Nothing is impossible, the word itself says, I’m possible!
    </Typography>

    <p>body-lg</p>
    <Typography variant="body-lg" >
    When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up.
    </Typography>

    <p>body-lg</p>
    <Typography variant="body-sm" >
    When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up.
    </Typography>

    <p>body-sm</p>
    <Typography variant="body-sm" >
    When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up.
    </Typography>
    </div>

    <div className="felx items-start gap-7">
    {/**Spinner */}
    <div className="space-y-2">
      <Typography variant="caption2" weight="medium">
        spinner
      </Typography>
      <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
         <Spinner size="small"/>
         <Spinner/>
         <Spinner size="large"/>
       </div>
   </div>

  </div>
  <div className="felx items-start gap-7">
    {/**Logo */}
    <div className="space-y-2">
      <Typography variant="caption2" weight="medium">
        Logo
      </Typography>
      <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
         <Logo size="very-small"/>
         <Logo size="small"/>
         <Logo />
         <Logo size="large"/>
       </div>
   </div>

  </div>

  <div className="felx items-start gap-7">
    {/**Avatar */}
    <div className="space-y-2">
      <Typography variant="caption2" weight="medium">
        Avatar
      </Typography>
      <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
        <Avatar/>
       </div>
   </div>

  </div>

    <div className="flex items-center gap-4 p-10 ">
     
    <Button  size="small" icon={{icon:RiUser6Fill}}> Accent</Button>
    <Button isLoading size="small"> Accent</Button>
    <Button isLoading size="small" variant="secondary"> Secondary</Button>
    <Button size="small" variant="outline"> Outline</Button>
    <Button size="small" variant="ico"  icon={{icon:RiUser6Fill}}/>
    </div>
    <div className="flex items-center gap-4 p-10 ">
    <Button isLoading> Accent</Button>
    <Button variant="secondary"> Secondary</Button>
    <Button variant="secondary" icon={{icon: RiUser6Fill}} iconPosition="left" > Secondary</Button>
    <Button variant="outline"> Outline</Button>
    <Button variant="disabled" disabled> disabled</Button>
    <Button isLoading size="medium" iconTheme="gray" variant="ico"  icon={{icon:RiUser6Fill}}/>
    </div>
    
    <div className="flex items-center gap-4 p-10 ">
    <Button  size="large"> Accent</Button>
    <Button isLoading size="large" variant="secondary"> Secondary</Button>
    <Button size="large" variant="outline"> Outline</Button>
    <Button size="large" variant="disabled" disabled> disabled</Button>
    <Button size="large" iconTheme="secondary" variant="ico"  icon={{icon:RiUser6Fill}}/>
    </div>
</div>
     {/* <div className="space-y-5">
    <Typography variant="display" component="div" themes="primary">
      Coders
    </Typography>
    <Typography variant="h1" component="div" themes="secondary">
      Coders Monkey
    </Typography>
    <Typography variant="Lead" component="div">
      Coders
    </Typography>
    <Typography variant="body-sm" component="div">
      Coders
    </Typography>
    <Typography variant="caption4" component="div">
      Coders
    </Typography>
    <Typography variant="caption4" weight="medium" component="div">
      Coders
    </Typography>
    </div> */}
  </>
   
  );
}
