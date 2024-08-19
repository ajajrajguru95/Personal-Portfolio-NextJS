
import Banner from "../components/elements/blocks/Banner";
import Image from "next/image";
import Recommendations from '../components/elements/blocks/Recommendations'
import Skills from '../components/elements/blocks/Skills'


export default function Home() {
  
  return (

    <section className="fade-in home">
      {/* Main Body and components */}

        <Banner />

        <Skills />

      {/* Recommendations */}
      <Recommendations />


    </section>


  );
}
