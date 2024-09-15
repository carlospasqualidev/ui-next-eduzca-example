import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";

const courseSales = [
  {
    acronym: "PW",
    name: "Programação Web",
    description:
      "Curso de desenvolvimento para a web com HTML, CSS e JavaScript",
    value: "R$ 1.200,00",
  },
  {
    acronym: "DM",
    name: "Desenvolvimento Mobile",
    description: "Criação de aplicativos móveis com React Native",
    value: "R$ 1.500,00",
  },
  {
    acronym: "DS",
    name: "Data Science",
    description:
      "Introdução à ciência de dados com Python e análise estatística",
    value: "R$ 2.000,00",
  },
  {
    acronym: "UX",
    name: "UX/UI Design",
    description:
      "Conceitos e ferramentas de design de interfaces e experiência do usuário",
    value: "R$ 1.400,00",
  },
  {
    acronym: "DO",
    name: "DevOps",
    description:
      "Automatização e integração contínua para desenvolvimento ágil",
    value: "R$ 1.800,00",
  },
  {
    acronym: "CS",
    name: "Cybersecurity",
    description: "Segurança da informação e práticas de proteção de dados",
    value: "R$ 2.300,00",
  },
  {
    acronym: "CC",
    name: "Cloud Computing",
    description:
      "Serviços e ferramentas de computação em nuvem, com foco em AWS e Azure",
    value: "R$ 1.900,00",
  },
  {
    acronym: "IA",
    name: "Inteligência Artificial",
    description: "Introdução ao aprendizado de máquina e IA com Python",
    value: "R$ 2.500,00",
  },
  {
    acronym: "BC",
    name: "Blockchain",
    description:
      "Fundamentos da tecnologia blockchain e desenvolvimento de contratos inteligentes",
    value: "R$ 2.200,00",
  },
  {
    acronym: "MD",
    name: "Marketing Digital",
    description:
      "Técnicas e estratégias de marketing online, incluindo SEO e mídias sociais",
    value: "R$ 1.000,00",
  },
];

export function RecentSales() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Vendas recentes</CardTitle>
        <CardDescription>
          você vendeu {courseSales.length} cursos este mês.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          {courseSales.map((course) => (
            <div key={course.name} className="flex items-center py-2 pr-3">
              <Avatar className="h-9 w-9">
                <AvatarImage alt="Avatar" />
                <AvatarFallback>{course.acronym}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {course.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {course.description}
                </p>
              </div>
              <div className="ml-auto font-medium">{course.value}</div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
