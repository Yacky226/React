import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
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

    <Navigation/>  
  </>
   
  );
}
