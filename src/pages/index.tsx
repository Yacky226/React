import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/typography/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Seo title="Coders" description="Description"/>
    <div className="flex items-center gap-4 p-10 ">
    <Button size="small"> Accent</Button>
    <Button size="small" variant="secondary"> Secondary</Button>
    <Button size="small" variant="outline"> Outline</Button>
    <Button size="small" variant="disabled" disabled> disabled</Button>
    </div>
    
    <div className="flex items-center gap-4 p-10 ">
    <Button> Accent</Button>
    <Button variant="secondary"> Secondary</Button>
    <Button variant="outline"> Outline</Button>
    <Button variant="disabled" disabled> disabled</Button>
    </div>
    
    <div className="flex items-center gap-4 p-10 ">
    <Button size="large"> Accent</Button>
    <Button size="large" variant="secondary"> Secondary</Button>
    <Button size="large" variant="outline"> Outline</Button>
    <Button size="large" variant="disabled" disabled> disabled</Button>
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
