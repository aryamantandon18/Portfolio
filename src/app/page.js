import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { RiInstagramLine } from "react-icons/ri";
import 'toastr/build/toastr.min.css'; 

export default function Home() {

  return (
    <>
    <div className="flex flex-row flex-shrink justify-center w-[100%] h-full bg-[#121212]">
<div className="w-[5%] h-full ">
<div className="hidden socials md:flex flex-col gap-2 bg-[#121212] bottom-20 left-20 fixed ">
          <Link href="https://github.com/aryamantandon18 ">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/aryaman-tandon-0a60b3247/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.instagram.com/aryamantandon18?igsh=MmF5Y2ptYXEyZWFr"> 
          <RiInstagramLine className="text-white font-bold text-[44px]"/>
          </Link>
        </div>
</div>
        <main className="flex min-h-screen flex-col bg-[#121212] w-[100%] md:w-[90%]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
    <div className="hidden md:flex w-[5%]  mt-24 fixed right-0">
    <p className="relative text-white origin-top-left rotate-90 text-2xl left-8 top-60 ">tandon.aryaman1@gmail.com</p>
    </div>
    </div>
 
    </>
  );
}
