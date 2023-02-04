import { Button, Highlight } from "../button";
import { Container } from "../container";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../keyboard-shortcuts";

export const UnlikeAnyTool = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
        Obtenga rápidamente el 
          <br className="hidden md:inline-block" /> resultado correcto
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
        Nuestra tecnología de búsqueda proporciona los resultados más relevantes de entre los miles de documentos que tiene su organización.
        </p>
      </div>
    </Container>
    <div className="h-[14rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[14rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(50%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <p className="mb-4 text-3xl">eCommerce</p>
          <p className="text-md text-primary-text">
          Mejore las búsquedas de productos, recomendaciones y aumente la conversión
          </p>
        </div>
        <div className="relative flex min-h-[14rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(50%-12px)] md:p-14">
          <p className="mb-4 text-3xl">Empresa</p>
          <p className="text-md text-primary-text">
          Aumente la productividad del equipo de trabajo y su satisfacción
          </p>
        </div>
      </div>
    </div>
  </div>
);
