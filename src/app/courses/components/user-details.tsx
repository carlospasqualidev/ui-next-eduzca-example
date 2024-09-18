import { listenNowAlbums } from "../data/albums";
import Image from "next/image";
import {
  Atom,
  Award,
  BookCheck,
  Mail,
  Pickaxe,
  Rocket,
  Smartphone,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const album = listenNowAlbums[0];

export function UserDetails() {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className="rounded-full overflow-hidden w-64 h-64 border-[#E4E4E7] border-2 dark:border-[#27272A]">
        <Image
          src={album.cover}
          alt={album.name}
          width={256}
          height={256}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-2xl font-medium leading-none">Carlos Pasquali</p>
        <div className="flex items-center gap-1">
          <Sparkles size={16} className="text-muted-foreground" />
          <p className="text-md text-muted-foreground">2500 pontos</p>
        </div>
      </div>

      <Separator />
      <div>
        <div className="flex items-center space-x-2">
          <Mail size={16} />
          <p className="text-sm">carlos.pasquali.dev@gmail.com</p>
        </div>

        <div className="flex items-center space-x-2">
          <Smartphone size={16} />
          <p className="text-sm">(48) 99622-3154</p>
        </div>
      </div>

      <Separator />
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium leading-none">Conquistas</p>

        <div className="flex">
          <Atom size={38} strokeWidth={1.2} />
          <Award size={38} strokeWidth={1.2} />
          <Trophy size={38} strokeWidth={1.2} />
          <Pickaxe size={38} strokeWidth={1.2} />
          <Rocket size={38} strokeWidth={1.2} />
          <BookCheck size={38} strokeWidth={1.2} />
        </div>
      </div>
    </div>
  );
}
