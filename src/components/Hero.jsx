import { useEffect, useMemo, useState } from "react";
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
  X,
  Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  edmore,
  logo2,
  mineeng,
  mining1,
  mining2,
  mining3,
  mining4,
  mining5,
  mining6,
  // munashe,
  sam,
  sergio,
  sergioBush,
  sergioBlk,
  sergiohole,
} from "../assets";

/* =========================================================
   Leopard Mining — One-Page Site (Single Component)
   - Modern, premium UI using TailwindCSS utility classes
   - Single exported component with embedded Gallery + Modal
   - Sections: Hero • About • Services • Gallery • Commodities • Reach • Values • Team • Policies • Contact
   - Sticky nav, scroll spy, smooth scrolling, glass cards, CTA widget, back-to-top
   - Easily retheme using the 'palette' object
   ========================================================= */

/* --------------------------- GALLERY DATA --------------------------- */
const galleryImages = [
  {
    id: 1,
    src: mining1,
    title: "Soil sampling",
    category: "Fieldwork",
  },
  {
    id: 2,
    src: mining2,
    title: "Drone survey",
    category: "Geological mapping",
  },
  { id: 3, src: mining3, title: "⁠Magnetic survey", category: "Geophysics" },
  { id: 4, src: mining4, title: "⁠Electrical survey", category: "Geophysics" },
  { id: 5, src: mining5, title: "XRF analysis", category: "Sample analysis" },
  { id: 6, src: mining6, title: "⁠Channel sampling", category: "Geochemistry" },
  {
    id: 7,
    src: sergiohole,
    title: "Geological mapping",
    category: "Geological mapping",
  },
  { id: 8, src: sergioBush, title: "Exploration", category: "Exploration" },
  { id: 9, src: sergioBlk, title: "Exploration", category: "Exploration" },
];

export default function LeopardMining() {
  /* ------------------------------ THEME / BRAND ------------------------------ */
  const palette = useMemo(
    () => ({
      bg: "#0B0B0C", // near-black canvas
      surface: "#111214", // card bg
      surfaceAlt: "#0f1115", // hero glass
      primary: "#D4AF37", // rich gold accent (leopard cue)
      primarySoft: "#f1e2a8", // soft gold for subtle accents
      text: "#E7EAF0", // high-contrast text
      muted: "#A3A7B0", // body
      ring: "#2A2E36", // borders / dividers
      success: "#22C55E",
      warning: "#F59E0B",
    }),
    [],
  );

  /* -------------------------------- CONTENT --------------------------------- */
  const about = {
    hq: "Bulawayo, Zimbabwe",
    founded: "December 2021",
    blurb:
      "Leopard Mining (Pvt) Ltd is a Zimbabwean geological consultancy delivering high-quality, cost-effective and technically sound solutions across Africa and beyond.",
    mission:
      "Provide world-class geological and mining solutions built on integrity, innovation, collaboration and measurable client value.",
    vision: "To be a leading geological consultancy in Africa and beyond.",
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
      desc: "Independent advice, project due diligence informed by regional experience.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Mineral Deposit Evaluation",
      desc: "Resource assessment, sampling strategies and data QA/QC for credible reporting.",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Exploration Management",
      desc: "Targeting, program design, contractor supervision and on-site leadership.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Feasibility Support",
      desc: "Inputs for scoping/pre-feasibility, technical assessments and risk registers.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Project Design & Implementation",
      desc: "From permits and tenement management to end-to-end field execution.",
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
    "Diamond",
    "Emerald",
    "Copper",
    "Nickel",
    "Iron",
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
      desc: "Fit-for-purpose solutions across various terrains and jurisdictions.",
    },
  ];

  const team = [
    { name: "Samuel Bakasa", role: "Director", image: sam },
    { name: "Edmore Marima", role: "Exploration Manager", image: edmore },
    { name: "Sergio de Souza", role: "Exploration Geologist", image: sergio },
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
  const [selectedImage, setSelectedImage] = useState(null);

  const sections = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
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

  /* ------------------------------ IMAGE MODAL ------------------------------- */
  const ImageModal = ({ image, onClose }) => (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-5xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-xl font-semibold">{image.title}</h3>
              <p className="text-sm" style={{ color: palette.muted }}>
                {image.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  /* --------------------------------- RENDER --------------------------------- */
  return (
    <div
      style={{ background: palette.bg, color: palette.text }}
      className="min-h-screen"
    >
      {/* Sticky, translucent top-nav */}
      <header
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg border-b"
        style={{ background: "rgba(15,16,18,0.6)", borderColor: palette.ring }}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-20 rounded-xl flex items-center justify-center font-black"
              // style={{ background: palette.primary, color: "#141414" }}
            >
              <img src={logo2} alt="LM" />
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
      <section id="hero" className="relative pt-28">
        {/* Ambient gradient glow */}
        <div
          aria-hidden
          style={{
            background:
              "radial-gradient(1000px 500px at 20% 10%, rgba(212,175,55,0.12), transparent 50%), radial-gradient(800px 400px at 80% 30%, rgba(241,226,168,0.08), transparent 55%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 ">
          <div
            className="relative overflow-hidden rounded-3xl border p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center"
            style={{
              /* Background photo for the entire hero card */
              backgroundImage: `url(${mineeng})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderColor: palette.ring,
            }}
          >
            {/* --- Overlay to darken the image: black at 30% --- */}
            <div className="absolute inset-0 bg-black/80 pointer-events-none" />

            {/* LEFT COLUMN (bring above overlay) */}
            <div className="relative z-10">
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

            {/* RIGHT COLUMN (bring above overlay) */}
            <div className="relative z-10">
              <div
                className="relative aspect-[4/3] w-full rounded-2xl border overflow-hidden bg-transparent"
                style={{ borderColor: palette.ring }}
              >
                {/* keep this empty (transparent) so the background image shows through */}
                <div
                  className="absolute inset-0 transition-opacity bg-black/50 duration-500 pointer-events-none"
                  style={{ backgroundImage: "none" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Globe2 className="mx-auto  h-16 w-16 mb-3" />
                    <div className="text-xl font-bold">Regional expertise</div>
                    <div
                      className="text-sm text-white mt-1"
                      // style={{ color: palette.muted }}
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
                "Diamond/RC drilling supervision",
                "Underground & surface mapping",
                "Sampling & QAQC",
                "Resource/ore-body modelling",
                "Project management & reporting",
                "Geophysics",
                "Drone surveys",
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

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-16 border-t"
        style={{ borderColor: palette.ring }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Project Gallery
              </h2>
              <p className="mt-2 text-sm" style={{ color: palette.muted }}>
                Visual insights into our geological consulting work
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className="aspect-[4/3] rounded-2xl border overflow-hidden"
                  style={{
                    borderColor: palette.ring,
                    background: palette.surface,
                  }}
                >
                  <div className="h-full w-full relative">
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <ImageIcon
                          className="h-10 w-10"
                          style={{ color: palette.muted }}
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="font-medium text-white">
                        {image.title}
                      </div>
                      <div className="text-sm text-gray-300">
                        {image.category}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Modal */}
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </section>

      {/* COMMODITIES */}
      <section id="commodities" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Commodities
            </h2>
            <p className="mt-2 text-sm" style={{ color: palette.muted }}>
              Multi-commodity experience across hard-rock and industrial
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
              Global Presence
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
                className="rounded-3xl border p-5 flex items-center gap-4"
                style={{
                  borderColor: palette.ring,
                  background: palette.surface,
                }}
              >
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
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
              Equal-opportunity employer with merit-based recruitment and
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
              professionalism. Customer care and after-sales support are
              integral to long-term relationships.
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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Let’s talk
          </h2>
          <p className="mt-2 text-sm" style={{ color: palette.muted }}>
            Share your objectives and constraints—we’ll recommend a pragmatic
            path to geological certainty.
          </p>

          <div className="grid lg:grid-cols-12 gap-8 mt-6">
            {/* Enquiry form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 gap-3 rounded-3xl border p-6"
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
                  className="rounded-xl px-3 py-2 bg-transparent border"
                  style={{ borderColor: palette.ring }}
                  placeholder="Email"
                />
                <textarea
                  rows={4}
                  className="rounded-xl px-3 py-2 bg-transparent border"
                  style={{ borderColor: palette.ring }}
                  placeholder="Project brief (targets, timeline, location)"
                />
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium w-full"
                  style={{ background: palette.primary, color: "#141414" }}
                >
                  Send enquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Contacts */}
            <aside className="space-y-3 lg:col-span-5">
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
            <span />
            <span>Developed by Rufaro Mucheri</span>
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

      {/* Back-to-top */}
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
