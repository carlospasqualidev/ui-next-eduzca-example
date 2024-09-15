// #region COMPONENTS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// #endregion

export function CheckHasAccountForm() {
  return (
    <>
      <Input
        autoFocus
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        placeholder="digite seu e-mail"
      />

      <Button className="w-full" type="submit">
        Entrar com e-mail
      </Button>
    </>
  );
}
