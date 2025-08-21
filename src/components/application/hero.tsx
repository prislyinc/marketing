import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import DarkVeil from "@/components/global/background/dark-veil";

import { Button } from "@/components/ui/button";

const ApplicationHero = () => {
  return (
    <section className="relative w-full h-full mt-10">
      <div className="absolute inset-0 z-0">
        <DarkVeil speed={2} />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <Wrapper className="relative z-10 flex flex-col items-center justify-center h-full py-20">
        <div className="flex flex-col items-center text-center w-full max-w-4xl gap-6">
          <Container delay={0.1}>
            <h2 className="text-balance !leading-[1.25] text-4xl md:text-6xl font-semibold tracking-tight w-full">
              Conheça nossa <br className="hidden lg:inline-block" />
              aplicação poderosa
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-balance text-muted-foreground max-w-md lg:max-w-lg mx-auto">
              Engaje e organize sua comunidade com sistemas eficientes,
              projetados para facilitar a gestão e maximizar resultados.
            </p>
          </Container>

          <Container delay={0.3}>
            <div>
              <Button
                className="min-w-[140px] cursor-pointer"
                size="md"
                variant="outline"
              >
                Comece Agora
              </Button>
            </div>
          </Container>
        </div>
      </Wrapper>
    </section>
  );
};

export default ApplicationHero;
