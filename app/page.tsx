import AboutMe from "@/Components/about-me";
import Introduction from "@/Components/introduction";
import Navbar from "@/Components/navbar";
import Experience from "@/Components/experience";
import Services from "@/Components/services";
import Portfolio from "@/Components/portfolio";
import Contact from "@/Components/contact";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
