import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import DarkVeil from "@/components/global/background/dark-veil";
import { TIMELINE } from "@/constants/timeline";

const AboutSection = () => {
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
              Quem somos!
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-balance text-muted-foreground max-w-md lg:max-w-lg mx-auto">
              A Prisly é mais que bots: somos uma plataforma que transforma o
              acesso a soluções completas para Discord em algo simples,
              acessível e de qualidade.
            </p>
          </Container>
        </div>
      </Wrapper>

      <Wrapper className="py-20 relative z-10">
        <Container delay={0.5}>
          <div className="max-w-7xl">
            <h1 className="mb-3 text-2xl font-semibold text-white underline decoration-2 underline-offset-8">
              Nossa história
            </h1>
            <p className="pb-8 text-white">
              Do início até hoje, conheça como a Prisly nasceu.
            </p>

            <Timeline defaultValue={0}>
              {TIMELINE.map((item) => {
                return (
                  <TimelineItem key={item.id} step={item.id}>
                    <TimelineHeader className="flex items-center">
                      <TimelineSeparator />
                      <TimelineDate
                        className="
                          block max-w-full rounded-sm border border-white/5
                          bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
                          px-2 py-0.5 text-xs shadow-inner mr-3 break-words
                        "
                      >
                        {item.date}
                      </TimelineDate>

                      <TimelineIndicator />
                    </TimelineHeader>
                    <TimelineContent>{item.description}</TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default AboutSection;
