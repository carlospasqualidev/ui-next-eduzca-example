import { MainNav } from "./main-nav";
import { TogleTheme } from "./togleTheme";
import { UserNav } from "./user-nav";

export function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="border-b">
        <div className="flex justify-center h-16 md:px-8 md:justify-between">
          <div className="flex items-center">
            <UserNav />
            <MainNav className="mx-6 md:mx-6" />
          </div>
          <div className="flex items-center">
            <TogleTheme />
          </div>
        </div>
      </div>
      <div className="p-4 pt-3 md:pt-6 md:p-8">{children}</div>
    </div>
  );
}
