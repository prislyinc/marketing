import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import SectionBadge from "@/components/global/section-badge";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

import { RESOURCES } from "@/constants/links";

const Resources = () => {
  return (
    <section>
      <Wrapper className="py-20 relative z-10 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:flex-1">
            <Container delay={0.2}>
              <SectionBadge title="Prisly" />
            </Container>

            <Container delay={0.3}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                Explore nossos recursos
              </h2>
            </Container>

            <Container delay={0.4}>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Conheça guias detalhados, tudo sobre nosso bot do Discord para
                aprimorar sua comunidade e descubra também um pouco mais sobre a
                nossa trajetória.
              </p>
            </Container>

            <Container delay={0.5}>
              <Button
                variant="outline"
                className="hover:scale-105 transition-transform"
              >
                Comece sua jornada!
              </Button>
            </Container>
          </div>

          <div className="flex flex-col gap-5 lg:flex-1 w-full">
            {RESOURCES.map((link, index) => {
              const Icon = link.icon;
              return (
                <Container
                  key={index}
                  animation="fadeRight"
                  delay={0.6 + index * 0.2}
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className={clsx(
                      "relative flex items-center gap-4 lg:gap-6",
                      "p-4 lg:p-6",
                      "rounded-2xl transition-all duration-300 group",
                      "bg-gradient-to-br from-[#191919] to-[#0f0f0f] border border-white/[0.05]",
                      "shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),_0_2px_4px_rgba(0,0,0,0.4)]",
                      "hover:scale-[1.02] hover:border-white/[0.1] hover:shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] active:scale-[0.98]",
                      link.reverse
                        ? "flex-row-reverse justify-between"
                        : "justify-between"
                    )}
                  >
                    <p className="text-lg md:text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {link.label}
                    </p>

                    <div
                      className="group relative border border-white/[0.03] 
                                                    bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
                                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_1px_3px_rgba(0,0,0,0.3),_inset_0_-1px_1px_rgba(0,0,0,0.2)]
                                                    transition-all duration-500
                                                    before:absolute before:inset-0 before:-z-10 before:rounded-2xl 
                                                    before:bg-gradient-to-b before:from-white/[0.02] before:to-transparent before:opacity-0 before:transition-opacity
                                                    after:absolute after:inset-0 after:z-[-1] after:rounded-2xl 
                                                    after:bg-gradient-to-t after:from-black/30 after:to-transparent
                                                    grid shrink-0 place-content-center size-12 lg:size-14 rounded-[1.2rem]"
                    >
                      <Icon className="size-6 text-neutral-200 transition-transform group-hover:rotate-6" />
                    </div>
                  </a>
                </Container>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Resources;