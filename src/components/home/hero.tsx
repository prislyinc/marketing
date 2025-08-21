import React from 'react'
import { Button } from "@/components/ui/button";

import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import DarkVeil from '@/components/global/background/dark-veil';

import BlurText from '@/components/global/text/blur';
import ShinyText from '@/components/global/text/shiny';

const Hero = () => {
    return (
        <section className="relative w-full h-full mt-10">
            <div className="absolute inset-0 z-0">
                <DarkVeil speed={2} />
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            <Wrapper className="py-20 relative z-10">
                <div className="flex flex-col items-start sm:items-start md:items-start justify-center w-full gap-6 text-left sm:text-left md:text-left px-4 sm:px-0">
                    <Container delay={0.1}>
                        <BlurText
                            text={["Tenha seu bot", "em segundos"]}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-balance !leading-[1.25] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight w-full"
                        />
                    </Container>

                    <Container delay={0.2}>
                        <ShinyText
                            text="Rápido, confiável e cheio de recursos para seu servidor Discord."
                            disabled={false}
                            speed={3}
                            className="custom-class text-base sm:text-lg md:text-lg font-normal max-w-xl sm:max-w-2xl mx-auto sm:mx-0"
                        />
                    </Container>

                    <Container delay={0.3}>
                        <div className="mt-6 flex flex-wrap gap-4 w-full justify-center sm:justify-start">
                            <Button className="flex-1 min-w-[140px] sm:flex-auto cursor-pointer" size="md">Comece Agora</Button>
                            <Button className="flex-1 min-w-[140px] sm:flex-auto cursor-pointer" size="md" variant="outline">Suporte</Button>
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </section>
    )
}

export default Hero;