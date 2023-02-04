import { AlanLogo } from "../logos/alan";
import { ArcLogo } from "../logos/arc";
import { CashAppLogo } from "../logos/cashapp";
import { DescriptLogo } from "../logos/descript";
import { LoomLogo } from "../logos/loom";
import { MercuryLogo } from "../logos/mercury";
import { OpenSeaLogo } from "../logos/opensea";
import { PitchLogo } from "../logos/pitch";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RetoolLogo } from "../logos/retool";
import { VercelLogo } from "../logos/vercel";
import { Button } from "../button"

export const Contact = () => (
  <>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contáctanos</h2>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg border border-[#2d2e3e] shadow-sm focus:ring-primary-500 focus:border-[#2d2e3e]" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg border border-[#2d2e3e] shadow-sm focus:ring-primary-500 focus:border-[#2d2e3e]" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label>
              <textarea id="message" rows={6} className="block p-3   w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg shadow-sm border border-[#2d2e3e] focus:ring-primary-500 focus:border-[#2d2e3e]" ></textarea>
          </div>
          <Button href="#">Enviar</Button>
      </form>
  </div>
  </>
);
