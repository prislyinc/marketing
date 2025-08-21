"use client";

import React, { useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import {
  APPLICATION_FEATURES,
  APPLICATION_FUNCTIONALITY_CATEGORIES,
} from "@/constants/application";
import { cn } from "@/lib/utils";

const ApplicationSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "moderation" | "community" | "fivem" | "others"
  >("all");

  const filteredFunctionalities = APPLICATION_FEATURES.filter((func) =>
    activeCategory === "all" ? true : func.category === activeCategory
  );

  return (
    <div className="w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-wrap gap-2">
            {APPLICATION_FUNCTIONALITY_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                aria-label={`Filtrar por ${category.label}`}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border",
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "bg-card hover:bg-primary/10 border-border"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>

        <Container delay={0.1}>
          {filteredFunctionalities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {filteredFunctionalities.map((func, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col p-5 rounded-2xl bg-[#0A0A0A] border border-border hover:border-primary/20 transition-all duration-300 group"
                  >
                    <h3 className="text-base font-semibold">{func.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {func.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-10 flex flex-col p-5 rounded-2xl border border-dashed transition-all duration-300 group">
              Nenhuma funcionalidade disponível nesta categoria.
            </p>
          )}
        </Container>
      </Wrapper>
    </div>
  );
};

export default ApplicationSection;