import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Busque y encuentre
      <br className="hidden md:block" />  exactamente lo que necesita
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
    Ofrecemos respuestas relevantes y accionables en 
      <br className="hidden md:block" /> donde sus clientes y empleados buscan información.
    </HeroSubtitle>
  </Hero>
);
