"use client";

import React from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/global/border-beam";

const CTA = () => {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      <Wrapper className="relative z-10">
        <Container delay={0.1}>
          <div
            className="flex flex-col md:flex-row items-start justify-between 
                          bg-black/80 backdrop-blur-sm rounded-xl border border-white/5 
                          p-6 md:p-10 gap-6 shadow-lg"
          >
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-blue-500/40 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-purple-500/40 to-transparent"
            />

            <div className="flex flex-col text-start">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Vamos começar nossa história?
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Sua comunidade merece o melhor bot, tudo em um só lugar.
              </p>
            </div>

            <div className="flex justify-start md:justify-end w-full md:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 group text-sm md:text-base px-5 py-2 rounded-lg cursor-pointer"
              >
                Comece Agora{" "}
                <ArrowRight
                  size={18}
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default CTA;
