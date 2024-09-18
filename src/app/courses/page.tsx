import { Metadata } from "next";

import { AlbumArtwork } from "./components/album-artwork";
import { UserDetails } from "./components/user-details";
import { listenNowAlbums, madeForYouAlbums } from "./data/albums";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Veja seu progresso e continue avançando!",
};

export default function Courses() {
  return (
    <>
      <div>
        <div className="md:flex">
          <UserDetails />

          <div className="flex flex-col md:flex-row">
            <Separator orientation="vertical" className="mx-4" />
            <div>
              <Separator orientation="horizontal" className="my-4 md:hidden" />
              <h2 className="text-2xl font-semibold tracking-tight">
                Meus Cursos
              </h2>
              <p className="text-sm text-muted-foreground">
                Veja seu progresso e continue avançando! Você está mais perto de
                concluir seus cursos do que imagina.
              </p>
              <Separator className="my-4" />
              <div>
                <div className="flex justify-center gap-4 flex-wrap">
                  {listenNowAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px] md:w-[250px]"
                      aspectRatio="portrait"
                      width={250}
                      height={330}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Feitos para você
                </h2>
                <p className="text-sm text-muted-foreground">
                  Cursos selecionados com base nos seus interesses.
                </p>
              </div>
              <Separator className="my-4" />
              <div>
                <div className="flex justify-center gap-4 flex-wrap">
                  {madeForYouAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
