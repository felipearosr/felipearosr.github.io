import Link from "next/link";
import { Container } from "./container";
import { CorfoLogo } from "./logos/corfo";



export const Footer = () => (
  <footer className="border-t border-transparent-white text-center py-[5.6rem] text-sm">
    <Container className="grid grid-col justify-items-center lg:grid-row">
      <div>
        <div className="grid h-full grid-row justify-between lg:grid-col">
          <div className="grid items-center text-grey">
            <p>Con el auspicio de</p>
            <CorfoLogo className="h-[1rem] w-1" /> 
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
