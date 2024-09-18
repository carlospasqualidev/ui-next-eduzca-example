import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartColumnDecreasing, Clock, Eye, TvMinimalPlay } from "lucide-react";
import { course } from "./module";

export function Overview() {
  return (
    <div className="hidden md:flex flex-col gap-4">
      <Card className="p-4">
        <div className="flex gap-2">
          <TvMinimalPlay size={24} />
          <div className="flex w-full items-center justify-between">
            <h3 className="text-md">Tipo de aula</h3>
            <p className="text-sm text-muted-foreground">Gravada</p>
          </div>
        </div>

        <div className="flex gap-2">
          <ChartColumnDecreasing size={24} />
          <div className="flex w-full items-center justify-between">
            <h3 className="text-md">Nível de habilidade</h3>
            <p className="text-sm text-muted-foreground">Iniciante</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Clock size={24} />
          <div className="flex w-full items-center justify-between">
            <h3 className="text-md">Duração</h3>
            <p className="text-sm text-muted-foreground">5 Módulos, 24 horas</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Eye size={24} />
          <div className="flex w-full items-center justify-between">
            <h3 className="text-md">Última revisão</h3>
            <p className="text-sm text-muted-foreground">19/09/2024</p>
          </div>
        </div>
      </Card>
      <Tabs defaultValue="summary" className="w-80">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summary">Resumo</TabsTrigger>
          <TabsTrigger value="instructors" disabled>
            Instrutores
          </TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl font-semibold tracking-tight">
              Programendo em javascript
            </h2>

            <div className="flex flex-wrap gap-1">
              <Badge>JavaScript</Badge>
              <Badge>Programação</Badge>
              <Badge>Front-end</Badge>
              <Badge>Back-end</Badge>
              <Badge>Full-stack</Badge>
              <Badge>Web</Badge>
              <Badge>Mobile</Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              Este curso é projetado para ensinar programação em JavaScript
              desde o básico até níveis avançados. Através de uma abordagem
              prática e centrada em projetos, os alunos aprenderão a dominar as
              fundamentações da linguagem JavaScript, assim como suas aplicações
              modernas em desenvolvimento web e mobile. O curso abrange desde
              conceitos fundamentais até o uso de frameworks modernos como React
              e Node.js.
            </p>
          </div>
          <div>
            <h2 className="text-1xl font-semibold tracking-tight">
              Módulos do curso
            </h2>

            {course.modules.map((module, index) => (
              <div
                className="flex gap-2 mb-1 items-center text-muted-foreground"
                key={module.title}
              >
                <div className="flex items-center justify-center border rounded p-1 w-5 h-5">
                  <p className="text-sm">{index + 1}</p>
                </div>

                <p>{module.title}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="instructors"></TabsContent>
      </Tabs>
    </div>
  );
}
