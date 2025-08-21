"use client";

import { useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { PLAN, ADDITIONAL_SPECS } from "@/constants/application";
import { Button } from "@/components/ui/button";

const ApplicationPrice = () => {
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);

  const calculateTotalPrice = () => {
    const additionalCost = selectedSpecs.reduce((total, specId) => {
      const spec = ADDITIONAL_SPECS.find((s) => s.id === specId);
      return total + (spec?.price || 0);
    }, 0);
    return PLAN.price + additionalCost;
  };

  const toggleSpec = (specId: string) => {
    setSelectedSpecs((prev) =>
      prev.includes(specId)
        ? prev.filter((id) => id !== specId)
        : [...prev, specId]
    );
  };

  return (
    <section className="w-full py-16 lg:py-24">
      <Wrapper className="container scroll-mt-28">
        <Container delay={0.1}>
          <div className="relative z-10 grid min-h-[24rem] gap-4 rounded-xl border border-neutral-800 bg-black px-6 py-6 text-white md:grid-cols-6">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute -inset-x-100 h-10 blur-[200px] bg-neutral-700"></div>
            </div>

            <div className="col-span-6 md:col-span-3 flex flex-col gap-6 z-10">
              <div className="absolute -top-3.5 flex items-center gap-1 rounded-full bg-neutral-800 border border-neutral-600 px-2 py-0.5 text-sm font-semibold text-white">
                {PLAN.badge}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z"></path>
                </svg>
              </div>

              <div className="flex flex-col gap-1 py-2">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {PLAN.name}
                </p>
                <p className="text-sm font-normal text-neutral-400 sm:text-base">
                  {PLAN.description}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold sm:text-4xl text-white">
                  R$ {calculateTotalPrice().toFixed(2).replace(".", ",")}
                </span>
                <span className="text-xs text-neutral-400">/mês</span>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-neutral-300">
                  Adicionais (opcionais):
                </h4>
                <div className="grid gap-2">
                  {ADDITIONAL_SPECS.map((spec) => (
                    <article
                      key={spec.id}
                      onClick={() => toggleSpec(spec.id)}
                      className={`group/attribute relative flex flex-col justify-center rounded-md border-2 border-dashed px-4 py-3 text-center cursor-pointer transition-all duration-200 ${
                        selectedSpecs.includes(spec.id)
                          ? "border-white bg-neutral-900"
                          : "border-neutral-600 hover:border-neutral-500"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="text-left max-w-[70%]">
                          <h3 className="text-sm font-semibold text-white">
                            {spec.name}
                          </h3>
                          <p className="text-xs text-neutral-400 break-words">
                            {spec.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <p className="font-bold text-neutral-300 whitespace-nowrap">
                            +R$ {spec.price.toFixed(2).replace(".", ",")}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {PLAN.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group/attribute flex flex-1 flex-col justify-center rounded-md border-2 border-neutral-700 bg-neutral-900 px-4 py-2 text-center"
                  >
                    <span className="text-xs font-semibold text-white md:text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full mt-4">
                <Button className="cursor-pointer">Comece agora</Button>
              </div>
            </div>

            <div
              className="col-span-6 md:col-span-3 hidden md:flex items-end justify-end rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${PLAN.image})` }}
            >
              <div className="z-10 text-5xl font-bold text-white opacity-100 shadow-square-900 drop-shadow-2xl p-6">
                Mais do que apenas um plano.
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default ApplicationPrice;
