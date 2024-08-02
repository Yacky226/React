import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LandingPageContainer } from "@/ui/modules/landing-page/components/landing-page.contaianer";


export default function Home() {
  return (
    <>
    <Seo title="Coders" description="Description"/>
    <Layout>
      <LandingPageContainer/>
    </Layout>
  </>
   
  );
}
