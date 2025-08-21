"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import MobileMenu from "./mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full h-16 transition-all duration-300",
        isScrolled ? "bg-[#050505]/50 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Wrapper className="flex items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" width={40} height={40} alt="Logo Prisly" />
          </Link>
        </motion.div>

        <div className="hidden lg:flex flex-1 justify-center gap-x-6 text-sm font-medium text-muted-foreground">
          <AnimatePresence>
            {NAV_LINKS.map((link, idx) => (
              <Container key={idx} animation="fadeDown" delay={0.1 * idx}>
                <Link
                  href={link.link}
                  className="relative px-2 py-1 hover:text-foreground transition-all duration-300"
                >
                  {link.name}
                </Link>
              </Container>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-x-4">
          <Link href="/" className="hidden lg:block">
            <Button size="sm" variant="outline" className="cursor-pointer">
              Começar
            </Button>
          </Link>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;