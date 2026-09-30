import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { AuthLayout } from "@/components/AuthLayout";
import { safeRedirect } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/login")({
  validateSearch: zodValidator(z.object({ redirect: fallback(z.string(), "").default("") })),
  head: () => ({
    meta: [
      { title: "Sign in — ByteSpace" },
      { name: "description", content: "Sign in to your ByteSpace account." },
      { property: "og:title", content: "Sign in — ByteSpace" },
      { property: "og:description", content: "Sign in to your ByteSpace account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

const input = "w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary";

function LoginPage() {
  const { redirect } = Route.useSearch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      const message = error.message === "Invalid login credentials"
        ? "Email or password is incorrect. If you just created this account, try creating it again with a stronger password."
        : error.message;
      setFormError(message);
      toast.error(message);
      return;
    }
    toast.success("Signed in successfully.");
    await navigate({ to: safeRedirect(redirect), replace: true });
  };

  return (
    <AuthLayout heading="Welcome back" intro="Sign in to continue learning with ByteSpace.">
      <h1 className="font-display text-2xl font-semibold text-ink">Sign in</h1>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <input className={input} type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={input} type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {formError ? <p role="alert" className="text-sm text-destructive">{formError}</p> : null}
        <button disabled={busy} className="w-full rounded-full bg-primary py-3 text-sm text-primary-foreground disabled:opacity-70">
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary">Sign up</Link>
      </p>
    </AuthLayout>
  );
}
