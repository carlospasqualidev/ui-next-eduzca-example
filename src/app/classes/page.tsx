import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { Modules } from "./components/module";
import { Overview } from "./components/overview";
import { Class } from "./components/class";

export const metadata: Metadata = {
  title: "Aulas",
  description: "Veja seu progresso e continue avançando!",
};

export default function Classes() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="md:flex">
        <Modules />
        <Separator orientation="vertical" className="mx-4" />
      </div>
      <Class />
      <div className="flex">
        <Separator orientation="vertical" className="mx-4" />
        <Overview />
      </div>
    </div>
  );
}
