import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CalendarClock,
  CircleDollarSign,
  Clock,
  CreditCard,
  GitBranchPlus,
  Mouse,
  Search,
  Waypoints,
} from "lucide-react";

export function MonetarySummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Receita total</CardTitle>
          <CircleDollarSign />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% do mes passado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Vendas</CardTitle>
          <CreditCard />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% do mes passado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Buscas</CardTitle>
          <Search />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">
            +180.1% do mes passado
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Clicks</CardTitle>
          <Mouse />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">
            +201 desde a última hora
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function UsersSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de horas</CardTitle>
          <CalendarClock />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2043</div>
          <p className="text-xs text-muted-foreground">+20.1% do mes passado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Conhecimentos gerados
          </CardTitle>
          <Waypoints />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">52</div>
          <p className="text-xs text-muted-foreground">+19% do mes passado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Minutos assistidos
          </CardTitle>
          <Clock />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+23550</div>
          <p className="text-xs text-muted-foreground">
            +180.1% do mes passado
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Aulas assistidas
          </CardTitle>
          <GitBranchPlus />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">
            +201 desde a última semana
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
