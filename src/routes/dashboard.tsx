import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/dashboard")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "My Courses — ByteSpace" },
      { name: "description", content: "Your ByteSpace dashboard and enrolled courses." },
      { property: "og:title", content: "My Courses — ByteSpace" },
      { property: "og:description", content: "Your ByteSpace dashboard and enrolled courses." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user, loading, displayName } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login", search: { redirect: "/dashboard" } });
  }, [loading, user, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <section className="bs-grid overflow-hidden pb-14">
        <div className="bs-grid-lines" />
        <div className="relative">
          <Navbar />
          <h1 className="bs-container mt-6 font-display text-3xl font-semibold text-white">
            {displayName ? `Welcome back, ${displayName}` : "Dashboard"}
          </h1>
        </div>
      </section>
      <div className="bs-container py-20">
        <p className="text-sm text-muted-foreground">
          Your enrolled courses will appear here.
        </p>
      </div>
      <Footer />
    </div>
  );
}
