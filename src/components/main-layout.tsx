import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

export function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-8">
          <UserNav />
          <MainNav className="mx-6" />
        </div>
      </div>
      {children}
    </div>
  );
}
