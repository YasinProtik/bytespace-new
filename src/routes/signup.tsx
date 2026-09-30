import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { AuthLayout } from "@/components/AuthLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/signup")({
  validateSearch: zodValidator(z.object({ role: fallback(z.string(), "").default("") })),
  head: () => ({
    meta: [
      { title: "Create account — ByteSpace" },
      { name: "description", content: "Create your ByteSpace account to learn or teach." },
      { property: "og:title", content: "Create account — ByteSpace" },
      { property: "og:description", content: "Create your ByteSpace account to learn or teach." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignupPage,
});

const input = "w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary";

function SignupPage() {
  const { role } = Route.useSearch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");
    setBusy(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: name, role: role || "student" },
      },
    });
    setBusy(false);
    if (error) {
      const message = error.message.toLowerCase().includes("weak")
        ? "Choose a stronger password that is not commonly used."
        : error.message;
      setFormError(message);
      toast.error(message);
      return;
    }
    if (data.session) {
      toast.success("Your account is ready.");
      await navigate({ to: "/dashboard", replace: true });
      return;
    }
    toast.success("Check your email to confirm your account, then sign in.");
  };

  return (
    <AuthLayout
      heading={role === "creator" ? "Become a creator" : "Join ByteSpace"}
      intro="Create an account to start learning and sharing your skills."
    >
      <h1 className="font-display text-2xl font-semibold text-ink">Create account</h1>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <input className={input} required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={input} type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={input} type="password" required minLength={8} autoComplete="new-password" placeholder="Password (8+ characters)" value={password} onChange={(e) => setPassword(e.target.value)} />
        {formError ? <p role="alert" className="text-sm text-destructive">{formError}</p> : null}
        <button disabled={busy} className="w-full rounded-full bg-primary py-3 text-sm text-primary-foreground disabled:opacity-70">
          {busy ? "Creating…" : "Create account"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">Sign in</Link>
      </p>
    </AuthLayout>
  );
}
