import React, { useEffect, useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe2,
  Shield,
  CheckCircle2,
  Layers,
  Users,
  ClipboardList,
  Briefcase,
  Compass,
  ChevronUp,
} from "lucide-react";

/* =========================================================
   Leopard Mining — One‑Page Site (Single Component)
   - Modern, premium UI using TailwindCSS utility classes
   - No external state mgmt; all content/data inline below
   - Sections: Hero • About • Services • Commodities • Reach • Values • Team • Policies • Contact
   - Sticky nav, scroll spy, smooth scrolling, glass cards, CTA widget, back‑to‑top
   - Easily retheme using the 'palette' object
   ========================================================= */

export default function LeopardMining() {
  /* ------------------------------ THEME / BRAND ------------------------------ */
  // Update these to align with brand guidelines when you have exact hex codes
  const palette = useMemo(
    () => ({
      bg: "#0B0B0C", // near‑black canvas
      surface: "#111214", // card bg
      surfaceAlt: "#0f1115", // hero glass
      primary: "#D4AF37", // rich gold accent (leopard cue)
      primarySoft: "#f1e2a8", // soft gold for subtle accents
      text: "#E7EAF0", // high‑contrast text
      muted: "#A3A7B0", // body
      ring: "#2A2E36", // borders / dividers
      success: "#22C55E",
      warning: "#F59E0B",
    }),
    []
  );

  /* -------------------------------- CONTENT --------------------------------- */
  const about = {
    hq: "Bulawayo, Zimbabwe",
    founded: "December 2021",
    blurb:
      "Leopard Mining (Pvt) Ltd is a Zimbabwean geological consultancy delivering high‑quality, cost‑effective and technically sound solutions across Africa and beyond.",
    mission:
      "Provide world‑class geological and mining solutions built on integrity, innovation, collaboration and measurable client value.",
    vision: "To be a leading geological consultancy in Zimbabwe and beyond.",
  };

  const geographies = [
    "Zimbabwe",
    "Namibia",
    "South Sudan",
    "Nigeria",
    "DRC",
    "Mozambique",
    "Australia",
  ];

  const services = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Expert Geological Advice",
      desc: "Independent advice, project diligence and concept studies informed by regional experience.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Mineral Deposit Evaluation",
      desc: "Resource assessment, sampling strategies and data QA/QC for credible reporting.",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Exploration Management",
      desc: "Targeting, program design, contractor supervision and on‑site leadership.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Feasibility Support",
      desc: "Inputs for scoping/pre‑feasibility, technical options and risk registers.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Project Design & Implementation",
      desc: "From permits and tenement management to end‑to‑end field execution.",
    },
  ];

  const commodities = [
    "Gold",
    "Chrome",
    "Tantalite",
    "Lithium",
    "Granite",
    "Graphite",
    "Limestone",
    "Coal",
  ];

  const values = [
    {
      title: "Commitment",
      desc: "Ownership mindset; accountability from bid to closeout.",
    },
    {
      title: "Customer Value",
      desc: "Practical outcomes that move NPV, not just paperwork.",
    },
    {
      title: "Teamwork",
      desc: "Permanent staff, associates and alliances working as one.",
    },
    {
      title: "Professionalism",
      desc: "Safety, ethics and report quality without compromise.",
    },
    {
      title: "Adaptability",
      desc: "Fit‑for‑purpose solutions across terrains and jurisdictions.",
    },
  ];

  const team = [
    { name: "Samuel Bakasa", role: "Director" },
    { name: "Edmore Marima", role: "Exploration Manager" },
    { name: "Samuel Bakasa", role: "Exploration Geologist" },
  ];

  const contacts = {
    phone1: "+263 774 083 821",
    phone2: "+61 4 736 682 09",
    email: "sambakasa@yahoo.com",
    location: "Bulawayo, Zimbabwe",
    site: "leopardmining.co.zw",
  };

  /* ------------------------------- UX ENHANCERS ------------------------------ */
  const [active, setActive] = useState("hero");
  const sections = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "commodities", label: "Commodities" },
    { id: "reach", label: "Reach" },
    { id: "values", label: "Values" },
    { id: "team", label: "Team" },
    { id: "policies", label: "Policies" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    document.title = "Leopard Mining — Geological Consulting";
    const handler = () => {
      const offsets = ["hero", ...sections.map((s) => s.id)].map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0]?.id || "hero");
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stat = (label, value) => (
    <div
      key={label}
      className="flex flex-col items-start rounded-2xl border px-4 py-3"
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))`,
        borderColor: palette.ring,
      }}
    >
      <span className="text-sm" style={{ color: palette.muted }}>
        {label}
      </span>
      <span className="text-xl font-semibold" style={{ color: palette.text }}>
        {value}
      </span>
    </div>
  );

  /* --------------------------------- RENDER --------------------------------- */
  return (
    <div
      style={{ background: palette.bg, color: palette.text }}
      className="min-h-screen"
    >
      {/* Sticky, translucent top‑nav */}
      <header
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg border-b"
        style={{ background: "rgba(15,16,18,0.6)", borderColor: palette.ring }}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl flex items-center justify-center font-black"
              style={{ background: palette.primary, color: "#141414" }}
            >
              LM
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Leopard Mining</div>
              <div className="text-xs" style={{ color: palette.muted }}>
                Geological Consulting
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-3 py-2 rounded-lg text-sm"
                style={{
                  color: active === s.id ? palette.text : palette.muted,
                  background:
                    active === s.id ? "rgba(212,175,55,0.08)" : "transparent",
                }}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${contacts.email}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium"
              style={{ background: palette.primary, color: "#141414" }}
            >
              <Mail className="h-4 w-4" /> Email Us
            </a>
            <a
              href={`tel:${contacts.phone1.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm"
              style={{ border: `1px solid ${palette.ring}` }}
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-12">
        {/* Ambient gradient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 500px at 20% 10%, rgba(212,175,55,0.12), transparent 50%), radial-gradient(800px 400px at 80% 30%, rgba(241,226,168,0.08), transparent 55%)",
          }}
        />

        <div className=" mx-auto max-w-7xl px-4">
          <div
            className="relative overflow-hidden rounded-3xl border p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center"
            style={{
              background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.00))`,
              borderColor: palette.ring,
            }}
          >
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs mb-4"
                style={{
                  background: "rgba(212,175,55,0.12)",
                  color: palette.primary,
                }}
              >
                <Shield className="h-3.5 w-3.5" /> Integrity • Innovation •
                Collaboration
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Geological consulting for Africa & beyond
              </h1>
              <p
                className="mt-4 text-base sm:text-lg"
                style={{ color: palette.muted }}
              >
                {about.blurb}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contacts.email}`}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
                  style={{ background: palette.primary, color: "#141414" }}
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  onClick={() => scrollTo("services")}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm"
                  style={{ border: `1px solid ${palette.ring}` }}
                >
                  Explore services
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stat("Head Office", about.hq)}
                {stat("Founded", about.founded)}
                {stat("Operating Regions", `${geographies.length}+`)}
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-[4/3] w-full rounded-2xl border"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                {/* Decorative blueprint style grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Globe2 className="mx-auto h-10 w-10 mb-3" />
                    <div className="font-semibold">Regional expertise</div>
                    <div
                      className="text-sm mt-1"
                      style={{ color: palette.muted }}
                    >
                      Zimbabwe • Namibia • South Sudan • Nigeria • DRC •
                      Mozambique • Australia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              About Us
            </h2>
            <p className="text-base" style={{ color: palette.muted }}>
              We partner with clients from early target generation through
              exploration programs, drilling, sampling, resource modelling and
              project management. Our associates and strategic alliances allow
              us to scale specialist inputs when and where they matter.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div
                className="rounded-2xl border p-4"
                style={{ borderColor: palette.ring }}
              >
                <h3 className="font-semibold">Mission</h3>
                <p className="text-sm mt-1" style={{ color: palette.muted }}>
                  {about.mission}
                </p>
              </div>
              <div
                className="rounded-2xl border p-4"
                style={{ borderColor: palette.ring }}
              >
                <h3 className="font-semibold">Vision</h3>
                <p className="text-sm mt-1" style={{ color: palette.muted }}>
                  {about.vision}
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl border p-6"
            style={{ borderColor: palette.ring, background: palette.surface }}
          >
            <div
              className="text-sm font-medium mb-4"
              style={{ color: palette.muted }}
            >
              Capabilities snapshot
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Target generation & prospecting permits",
                "Tenement & data management",
                "Exploration program leadership",
                "Diamond/core drilling supervision",
                "Underground & surface mapping",
                "Channel sampling & QA/QC",
                "Resource/ore‑body modelling",
                "Project management & reporting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: palette.primary }}
                  />
                  <span className="text-sm" style={{ color: palette.text }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 border-t"
        style={{ borderColor: palette.ring }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-3xl border p-6 transition-transform hover:-translate-y-0.5"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center mb-4"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                    color: palette.primary,
                  }}
                >
                  {s.icon}
                </div>
                <div className="font-semibold mb-1">{s.title}</div>
                <div className="text-sm" style={{ color: palette.muted }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMODITIES */}
      <section id="commodities" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Commodities
            </h2>
            <p className="mt-2 text-sm" style={{ color: palette.muted }}>
              Multi‑commodity experience across hard‑rock and industrial
              minerals.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {commodities.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full text-sm"
                style={{
                  background: "rgba(212,175,55,0.10)",
                  color: palette.primary,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REACH */}
      <section
        id="reach"
        className="py-16 border-t"
        style={{ borderColor: palette.ring }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center gap-3">
            <Globe2 className="h-6 w-6" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Where We Operate
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {geographies.map((g) => (
              <div
                key={g}
                className="px-3 py-1.5 rounded-xl text-sm border"
                style={{ borderColor: palette.ring }}
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border p-6"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <div className="font-semibold">{v.title}</div>
                <div className="text-sm mt-2" style={{ color: palette.muted }}>
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="py-16 border-t"
        style={{ borderColor: palette.ring }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
            Management
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m, idx) => (
              <div
                key={`${m.name}-${idx}`}
                className="rounded-3xl border p-6 flex items-center gap-4"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <div
                  className="h-12 w-12 rounded-xl grid place-items-center font-bold"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                    color: palette.primary,
                  }}
                >
                  {m.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm" style={{ color: palette.muted }}>
                    {m.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section id="policies" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-6">
          <div
            className="rounded-3xl border p-6"
            style={{ borderColor: palette.ring, background: palette.surface }}
          >
            <h3 className="font-semibold text-lg">Staff Policy</h3>
            <p className="text-sm mt-2" style={{ color: palette.muted }}>
              Equal‑opportunity employer with merit‑based recruitment and
              advancement. We recognise and reward initiative, diligence and
              loyalty; decisions remain free from discrimination.
            </p>
          </div>
          <div
            className="rounded-3xl border p-6"
            style={{ borderColor: palette.ring, background: palette.surface }}
          >
            <h3 className="font-semibold text-lg">Client Policy</h3>
            <p className="text-sm mt-2" style={{ color: palette.muted }}>
              We honour contractual obligations and deliver services with
              professionalism. Customer care and after‑sales support are
              integral to long‑term relationships.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-16 border-t"
        style={{ borderColor: palette.ring }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let’s talk
              </h2>
              <p className="mt-2 text-sm" style={{ color: palette.muted }}>
                Share your objectives and constraints—we’ll recommend a
                pragmatic path to geological certainty.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 grid sm:grid-cols-2 gap-3 rounded-3xl border p-6"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <input
                  className="rounded-xl px-3 py-2 bg-transparent border"
                  style={{ borderColor: palette.ring }}
                  placeholder="Full name"
                />
                <input
                  className="rounded-xl px-3 py-2 bg-transparent border"
                  style={{ borderColor: palette.ring }}
                  placeholder="Company"
                />
                <input
                  className="rounded-xl px-3 py-2 bg-transparent border sm:col-span-2"
                  style={{ borderColor: palette.ring }}
                  placeholder="Email"
                />
                <textarea
                  className="rounded-xl px-3 py-2 bg-transparent border sm:col-span-2"
                  style={{ borderColor: palette.ring }}
                  placeholder="Project brief (targets, timeline, location)"
                ></textarea>
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium"
                  style={{ background: palette.primary, color: "#141414" }}
                >
                  Send enquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            <aside className="space-y-3">
              <div
                className="rounded-3xl border p-6"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <div className="flex items-center gap-2 font-semibold mb-2">
                  <Phone className="h-4 w-4" /> Phone
                </div>
                <div className="text-sm" style={{ color: palette.muted }}>
                  {contacts.phone1}
                </div>
                <div className="text-sm" style={{ color: palette.muted }}>
                  {contacts.phone2}
                </div>
              </div>
              <div
                className="rounded-3xl border p-6"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <div className="flex items-center gap-2 font-semibold mb-2">
                  <Mail className="h-4 w-4" /> Email
                </div>
                <a
                  href={`mailto:${contacts.email}`}
                  className="text-sm underline"
                  style={{ color: palette.text }}
                >
                  {contacts.email}
                </a>
              </div>
              <div
                className="rounded-3xl border p-6"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <div className="flex items-center gap-2 font-semibold mb-2">
                  <MapPin className="h-4 w-4" /> Location
                </div>
                <div className="text-sm" style={{ color: palette.muted }}>
                  {contacts.location}
                </div>
                <a
                  href={`https://${contacts.site}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline mt-1 inline-block"
                  style={{ color: palette.text }}
                >
                  {contacts.site}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ borderColor: palette.ring }}>
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-sm" style={{ color: palette.muted }}>
            © {new Date().getFullYear()} Leopard Mining (Pvt) Ltd. All rights
            reserved.
          </div>
          <div
            className="flex items-center gap-4 text-sm"
            style={{ color: palette.muted }}
          >
            <span></span>
            <span>Made by Rufaro Mucheri</span>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed right-4 bottom-4">
        <a
          href={`mailto:${contacts.email}`}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-xl"
          style={{ background: palette.primary, color: "#141414" }}
        >
          <Mail className="h-4 w-4" /> Quick enquiry
        </a>
      </div>

      {/* Back‑to‑top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed left-4 bottom-4 rounded-full p-3 border"
        style={{
          borderColor: palette.ring,
          background: "rgba(255,255,255,0.02)",
        }}
        aria-label="Back to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
