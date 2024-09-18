import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import { CircleCheck } from "lucide-react";

export const course = {
  title: "Iniciando com javascript",
  modules: [
    {
      title: "Iniciando o projeto javascript",
      classes: [
        {
          title: "O que é javascript",
          duration: "2:56",
        },
        {
          title: "Configurando o ambiente",
          duration: "4:56",
        },
        {
          title: "Primeiro código javascript",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Variáveis e funções",
      classes: [
        {
          title: "Variáveis",
          duration: "2:56",
        },
        {
          title: "Funções",
          duration: "4:56",
        },
        {
          title: "Funções de callback",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Estruturas de controle",
      classes: [
        {
          title: "if else",
          duration: "2:56",
        },
        {
          title: "switch case",
          duration: "4:56",
        },
        {
          title: "for loop",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Arrays e objetos",
      classes: [
        {
          title: "Arrays",
          duration: "2:56",
        },
        {
          title: "Objetos",
          duration: "4:56",
        },
        {
          title: "Array de objetos",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Manipulando o DOM",
      classes: [
        {
          title: "Selecionando elementos",
          duration: "2:56",
        },
        {
          title: "Adicionando elementos",
          duration: "4:56",
        },
        {
          title: "Eventos",
          duration: "7:56",
        },
      ],
    },
    {
      title: "Iniciando o projeto javascript",
      classes: [
        {
          title: "O que é javascript",
          duration: "2:56",
        },
        {
          title: "Configurando o ambiente",
          duration: "4:56",
        },
        {
          title: "Primeiro código javascript",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Variáveis e funções",
      classes: [
        {
          title: "Variáveis",
          duration: "2:56",
        },
        {
          title: "Funções",
          duration: "4:56",
        },
        {
          title: "Funções de callback",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Estruturas de controle",
      classes: [
        {
          title: "if else",
          duration: "2:56",
        },
        {
          title: "switch case",
          duration: "4:56",
        },
        {
          title: "for loop",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Arrays e objetos",
      classes: [
        {
          title: "Arrays",
          duration: "2:56",
        },
        {
          title: "Objetos",
          duration: "4:56",
        },
        {
          title: "Array de objetos",
          duration: "7:56",
        },
      ],
    },

    {
      title: "Manipulando o DOM",
      classes: [
        {
          title: "Selecionando elementos",
          duration: "2:56",
        },
        {
          title: "Adicionando elementos",
          duration: "4:56",
        },
        {
          title: "Eventos",
          duration: "7:56",
        },
      ],
    },
  ],
};

export function Modules() {
  return (
    <Accordion type="single" collapsible className="w-full md:w-80">
      {course.modules.map((module, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className="flex gap-2">
              <CircleCheck size={42} />
              <div className="flex flex-col">
                <h2 className="text-start text-sm text-muted-foreground">
                  Modulo {index + 1}
                </h2>
                <h3 className="text-start text-lg leading-none tracking-tight">
                  {module.title}
                </h3>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-1">
            {module.classes.map((classe, index) => (
              <div key={index} className="flex gap-2">
                <div className="ml-1">
                  <CircleCheck size={24} />
                  {module.classes.length - 1 !== index && (
                    <Separator className="h-8 ml-3" orientation="vertical" />
                  )}
                </div>

                <div className="flex justify-between mt-2 w-full">
                  <h3 className=" leading-none tracking-tight">
                    {classe.title}
                  </h3>

                  <h4 className="text-sm leading-none text-muted-foreground">
                    {classe.duration}
                  </h4>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
