import { cn } from "@/lib/utils";
import { listenNowAlbums } from "../data/albums";
import Image from "next/image";

const album = listenNowAlbums[0];
interface UserDetailsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserDetails({ className }: UserDetailsProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="py-4 px-8  flex justify-center">
        <Image
          src={album.cover}
          alt={album.name}
          width={250}
          height={250}
          className={cn("object-cover rounded-md aspect-square")}
        />
      </div>
    </div>
  );
}
