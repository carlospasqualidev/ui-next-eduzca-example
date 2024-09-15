import { Metadata } from "next";
// import Image from "next/image";
import { CalendarDateRangePicker } from "./components/date-range-picker";
import { Overview } from "./components/overview";
import { RecentSales } from "./components/recent-sales";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Summary } from "./components/summary";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function Dashboard() {
  return (
    <>
      <div className="flex-1 space-y-4">
        <div className="flex justify-between space-y-2 flex-col md:flex-row md:items-center">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Gerar relátorio</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Visão geral</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Summary />
            <div className="grid gap-y-4 md:gap-x-4 md:grid-cols-2 lg:grid-cols-7">
              <Overview />
              <RecentSales />
            </div>
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            <Summary />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Overview />
              <RecentSales />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
