"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Substituir useRouter por usePathname
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname(); // Obter o caminho atual da URL

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={`text-sm font-medium transition-colors ${
          pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
        } hover:text-primary`}
      >
        Dashboard
      </Link>
      <Link
        href="/courses"
        className={`text-sm font-medium transition-colors ${
          pathname === "/courses" ? "text-primary" : "text-muted-foreground"
        } hover:text-primary`}
      >
        Cursos
      </Link>
      <Link
        href="/products"
        className={`text-sm font-medium transition-colors ${
          pathname === "/products" ? "text-primary" : "text-muted-foreground"
        } hover:text-primary`}
      >
        Products
      </Link>
      <Link
        href="/settings"
        className={`text-sm font-medium transition-colors ${
          pathname === "/settings" ? "text-primary" : "text-muted-foreground"
        } hover:text-primary`}
      >
        Settings
      </Link>
    </nav>
  );
}
