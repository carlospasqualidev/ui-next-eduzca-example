import { cn } from "@/lib/utils";
import { listenNowAlbums } from "../data/albums";
import Image from "next/image";

const album = listenNowAlbums[0];

export function UserDetails() {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className="flex ">
        <Image
          src={album.cover}
          alt={album.name}
          width={250}
          height={250}
          className={cn("object-cover rounded-md aspect-square")}
        />
      </div>
      <div>
        <p className="text-lg font-medium leading-none">Carlos Pasquali</p>
        <p className="text-sm text-muted-foreground">
          carlos.pasquali.dev@gmail.com
        </p>
      </div>
    </div>
  );
}
