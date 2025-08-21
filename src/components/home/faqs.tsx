import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const FAQS = [
  {
    question: "Preciso fornecer o token do bot?",
    answer: "Sim, você precisa fornecer o token do seu bot para que ele possa ficar online."
  },
  {
    question: "O bot é gratuito?",
    answer: "Não, o bot não é gratuito, pois temos custos para mantê-lo em funcionamento."
  },
  {
    question: "É seguro?",
    answer: "Sim, nossos sistemas são totalmente seguros, tanto o bot do Discord quanto o sistema de envio de aplicações. Não salvamos seu token; apenas o utilizamos para configurar a aplicação na hospedagem."
  },
  {
    question: "A hospedagem que utilizam é segura?",
    answer: "Sim, a hospedagem que utilizamos é totalmente segura, além de ser extremamente estável e rápida."
  },
  {
    question: "Qual é a hospedagem que utilizam?",
    answer: <>Utilizamos a <a href="https://vertracloud.app" target="_blank" rel="noopener noreferrer" className="text-purple-300/80 hover:underline cursor-pointer">Vertra Cloud</a>.</>
  },
  {
    question: "Posso personalizar comandos?",
    answer: "Não, você não pode criar ou personalizar comandos, mas consegue customizar mensagens e outros conteúdos do bot."
  },
  {
    question: "Posso personalizar a aparência do bot?",
    answer: (
      <>
        Sim! Como a aplicação é sua e está em seu{" "}
        <a
          href="https://discord.com/developers/applications"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300/80 hover:underline cursor-pointer"
        >
          Portal De Desenvolvedor do Discord
        </a>
        , você consegue alterar avatar, banner e biografia. Mas em questão de biografia, caso você não pague o adicional que é cobrado todo mês, você não consegue remover nossa marca d'água. Se tentar remover, você será avisado e pode perder sua aplicação.
      </>
    )
  }
];

const Faqs = () => {
  return (
    <section>
      <Wrapper className="py-12 relative z-10 lg:py-16">
        <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 w-full">
            <Container delay={0.2}>
              <div className="w-fit rounded-2xl border border-white/[0.03] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-2 shadow-inner">
                <MessageSquare className="h-6 w-6 text-primary-300" />
              </div>
            </Container>

            <Container delay={0.3}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                Perguntas frequentes
              </h2>
            </Container>
          </div>

          <div className="w-full mt-4">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-white/[0.05]">
                  <AccordionTrigger className="flex justify-between items-center py-4 text-lg font-medium text-gray-200 hover:text-white transition-colors cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Faqs;