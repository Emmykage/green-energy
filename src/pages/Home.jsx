import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  House,
  Package,
  ChartNoAxesCombined,
  FileText,
  Network,
  Zap,
  Sun,
  BatteryCharging,
  Wind,
  Cable,
  MapPin,
  Mail,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <div className={`eyebrow ${dark ? "text-[#b6d49b]" : "text-[#71877e]"}`}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] min-h-[93svh] items-center overflow-hidden bg-[#122832] text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,31,.95)_0%,rgba(7,23,31,.82)_38%,rgba(7,23,31,.34)_100%),linear-gradient(0deg,rgba(7,23,31,.65),transparent_48%),url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=88')] bg-cover bg-[center_55%]" />
      <div className="container-site relative z-10 pb-28 pt-36">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionLabel dark>
              Renewable energy infrastructure & contracting
            </SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="serif mt-7 max-w-[940px] text-[clamp(52px,8vw,112px)] leading-[1.02]"
          >
            Engineering energy.
            <br />
            <em className="text-[#b6d49b]">Delivering</em>
            <br />
            infrastructure.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[610px] text-base leading-[1.85] text-[#d0dbdc] md:text-lg"
          >
            Technical expertise. Commercial discipline. Integrated engineering,
            procurement and contract delivery for the infrastructure powering
            tomorrow.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href="#services" className="btn btn-green">
              Explore Our Capabilities <ArrowUpRight size={15} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Partner With Us <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 border-t border-white/20">
        <div className="container-site flex items-center justify-between gap-4 py-5 text-[9px] font-bold uppercase tracking-[.14em] text-[#d7e1e1] sm:text-[11px]">
          <span>
            New York headquartered <b className="text-[#b6d49b]">/</b>{" "}
            International perspective
          </span>
          <span className="text-right">
            Engineering / Procurement / Delivery
          </span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-28">
      <div className="container-site grid gap-12 md:grid-cols-[.95fr_1.05fr] md:gap-20">
        <Reveal>
          <SectionLabel>01 / About Vtail Energy</SectionLabel>
          <h2 className="serif mt-6 text-4xl leading-[1.12] md:text-[56px]">
            Built on experience.
            <br />
            Focused on <i>execution.</i>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl leading-[1.65] text-[#273e43]">
            Vtail Energy is a New York-based renewable-energy infrastructure
            company connecting technical expertise with the practical demands of
            project delivery.
          </p>
          <p className="mt-5 leading-[1.85] text-[#54676b]">
            Founded in 2023, our firm focuses on defined contracting scopes
            across engineering, equipment procurement, project coordination and
            energy infrastructure development. We work alongside developers,
            project sponsors, equipment manufacturers and specialist delivery
            partners.
          </p>
          <p className="mt-4 leading-[1.85] text-[#54676b]">
            Our approach is grounded in clear commercial responsibilities,
            engineering discipline and structured execution—from initial
            assessment through supply, installation coordination and handover.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-5 border-t border-[#dfe6e0] pt-6">
            <div>
              <strong className="block text-2xl">2023</strong>
              <span className="text-xs text-[#66787c]">Year established</span>
            </div>
            <div>
              <strong className="block text-2xl">New York</strong>
              <span className="text-xs text-[#66787c]">
                Corporate headquarters
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    n: "01 / EPC DELIVERY",
    icon: House,
    title: "Engineering, Procurement & Construction",
    body: "Defined EPC scopes delivered through coordinated technical teams, qualified contractors and project-specific delivery arrangements.",
  },
  {
    n: "02 / EQUIPMENT SUPPLY",
    icon: Package,
    title: "Equipment Procurement & Supply",
    body: "Technical specification, supplier assessment, purchasing and delivery coordination for critical energy infrastructure equipment.",
  },
  {
    n: "03 / PROJECT DEVELOPMENT",
    icon: ChartNoAxesCombined,
    title: "Renewable Project Development",
    body: "Feasibility planning, technical assessments, development coordination and project preparation for renewable-energy assets.",
  },
  {
    n: "04 / CONTRACT EXECUTION",
    icon: FileText,
    title: "Contract & Project Management",
    body: "Structured oversight of milestones, interfaces, schedules, suppliers and contractor responsibilities across assigned project scopes.",
  },
  {
    n: "05 / ENGINEERING ADVISORY",
    icon: Network,
    title: "Technical Advisory & Due Diligence",
    body: "Engineering reviews, technical risk assessments, equipment evaluation and independent support for infrastructure decisions.",
  },
  {
    n: "06 / GRID INFRASTRUCTURE",
    icon: Zap,
    title: "Power & Grid Infrastructure",
    body: "Technical coordination for substations, transformers, electrical distribution and renewable-energy grid integration.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f5f5f0] py-24 md:py-28">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>02 / What we do</SectionLabel>
            <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
              Integrated capabilities.
              <br />
              Clear accountability.
            </h2>
          </div>
          <p className="max-w-[345px] text-sm leading-7 text-[#54676b]">
            Specialist services structured around the technical and contractual
            needs of renewable-energy infrastructure.
          </p>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ n, icon: Icon, title, body }) => (
            <motion.article
              variants={fadeUp}
              key={n}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25 }}
              className="min-h-[315px] border border-[#e8ece6] bg-white p-8 md:p-9"
            >
              <span className="text-xs font-extrabold tracking-widest text-[#78947c]">
                {n}
              </span>
              <Icon className="my-7 h-9 w-9 stroke-[1.3] text-[#4d7866]" />
              <h3 className="text-[21px] font-semibold leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#54676b]">{body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const sectors = [
  {
    icon: Sun,
    title: "Solar Energy",
    body: "Utility-scale generation and electrical balance-of-system infrastructure.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage",
    body: "Battery systems and associated power conversion and grid connections.",
  },
  {
    icon: Wind,
    title: "Wind Infrastructure",
    body: "Electrical equipment, balance-of-plant and upgrade support.",
  },
  {
    icon: Cable,
    title: "Grid Modernisation",
    body: "Substations, transformers, switchgear and power distribution systems.",
  },
];

function Sectors() {
  return (
    <section id="sectors" className="bg-[#0b1922] py-24 text-white md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionLabel dark>03 / Sectors</SectionLabel>
          <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
            Infrastructure for a<br />
            changing energy system.
          </h2>
          <p className="mt-6 max-w-[680px] leading-7 text-[#b9c7ca]">
            We focus on technologies and infrastructure essential to the
            development, delivery and integration of renewable power.
          </p>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-4"
        >
          {sectors.map(({ icon: Icon, title, body }) => (
            <motion.div
              variants={fadeUp}
              key={title}
              className="border-t border-[#78928d] pt-5"
            >
              <Icon className="mb-5 h-7 w-7 text-[#b6d49b]" />
              <strong className="text-lg">{title}</strong>
              <p className="mt-3 text-sm leading-6 text-[#b9c7ca]">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  [
    "01 / ASSESS",
    "Project evaluation",
    "Review client objectives, technical requirements, schedule and commercial constraints.",
  ],
  [
    "02 / PLAN",
    "Engineering & strategy",
    "Establish execution requirements, risks and delivery responsibilities.",
  ],
  [
    "03 / SOURCE",
    "Procurement",
    "Evaluate suppliers, specifications, manufacturing timelines and contractual terms.",
  ],
  [
    "04 / EXECUTE",
    "Project coordination",
    "Manage designated contractors, technical interfaces, milestones and quality requirements.",
  ],
  [
    "05 / DELIVER",
    "Handover",
    "Support inspection, commissioning, documentation and contractual closeout.",
  ],
];

function Process() {
  return (
    <section id="approach" className="py-24 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionLabel>04 / How we work</SectionLabel>
          <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
            From scope to
            <br />
            <i>successful delivery.</i>
          </h2>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-5"
        >
          {steps.map(([num, title, body]) => (
            <motion.div
              variants={fadeUp}
              key={num}
              className="border-t-2 border-[#b6d49b] pt-5"
            >
              <b className="text-xs text-[#5c8463]">{num}</b>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#66787c]">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    sector: "solar",
    location: "Texas, USA · 2025",
    title: "Utility-Scale Solar Infrastructure",
    body: "Equipment procurement and supply coordination for electrical infrastructure supporting a proposed 50 MW solar development.",
    type: "Equipment procurement",
    value: "Illustrative $4.8M",
    image: "photo-1509391366360-2e959784a276",
  },
  {
    sector: "storage",
    location: "California, USA · 2025",
    title: "Battery Storage Integration",
    body: "Engineering coordination and electrical equipment procurement for a proposed 15 MW storage facility.",
    type: "Specialist subcontract",
    value: "Illustrative $2.6M",
    image: "photo-1473341304170-971dccb5ac1e",
  },
  {
    sector: "grid",
    location: "Germany · 2026",
    title: "Grid Infrastructure Upgrade",
    body: "Substation equipment specification review, supplier coordination and technical procurement support.",
    type: "Technical procurement",
    value: "Illustrative €3.2M",
    image: "photo-1497435334941-8c899ee9e8e9",
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [
    ["all", "All Projects"],
    ["solar", "Solar"],
    ["storage", "Storage"],
    ["grid", "Grid"],
  ];
  const visibleProjects = projects.filter(
    (p) => filter === "all" || p.sector === filter,
  );
  return (
    <section id="projects" className="bg-[#f2f5f0] py-24 md:py-28">
      <div className="container-site">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>05 / Project experience</SectionLabel>
            <h2 className="serif mt-5 text-4xl md:text-[56px]">
              Selected project <i>scenarios.</i>
            </h2>
          </div>
          <p className="max-w-[355px] text-sm leading-7 text-[#54676b]">
            Illustrative contract profiles demonstrating the type of work
            represented in Vtail Energy's fictional company history.
          </p>
        </Reveal>
        <div className="my-9 flex flex-wrap gap-2" aria-label="Filter projects">
          {filters.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={`border px-4 py-2 text-xs font-bold transition ${filter === key ? "border-[#0b1922] bg-[#0b1922] text-white" : "border-[#bdcfc3] text-[#344d48] hover:bg-[#dfe9df]"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.sector}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3 }}
                className="min-w-0 bg-white"
              >
                <div
                  className="relative h-[235px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1100&q=80)`,
                  }}
                >
                  <span className="absolute left-4 top-4 bg-[#b6d49b] px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#132721]">
                    Fictional · Completed
                  </span>
                </div>
                <div className="p-6">
                  <small className="text-[11px] font-extrabold uppercase tracking-widest text-[#6f807b]">
                    {project.location}
                  </small>
                  <h3 className="mt-3 text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#66787c]">
                    {project.body}
                  </p>
                  <div className="mt-5 flex justify-between gap-3 border-t border-[#dfe6e0] pt-4 text-[10px] font-bold text-[#71817d]">
                    <span>{project.type}</span>
                    <span>{project.value}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-7 max-w-[870px] border-l-[3px] border-[#799a7b] py-1 pl-4 text-xs leading-6 text-[#667873]">
          <strong>Screenplay development notice:</strong> The projects, values,
          completion statuses and delivery outcomes shown above are fictional
          examples. They are not verified contract awards or company performance
          claims. Replace these scenarios with documented project records before
          using this site for a real business.
        </p>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section
      id="leadership"
      className="grid bg-[#e9eee7] lg:grid-cols-[45%_55%]"
    >
      <div
        role="img"
        aria-label="Professional office interior representing Vtail Energy leadership"
        className="min-h-[330px] bg-[linear-gradient(145deg,#19303933,#193039bb),url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=85')] bg-cover bg-center lg:min-h-[575px]"
      />
      <div className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <Reveal>
          <SectionLabel>06 / Leadership</SectionLabel>
          <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
            Experience behind
            <br />
            every decision.
          </h2>
          <h3 className="mt-8 text-xl font-semibold">
            James Alexander Masterson
          </h3>
          <div className="eyebrow mt-1 text-[#6e9179]">
            Founder & Managing Director
          </div>
          <p className="mt-6 text-lg leading-7 text-[#30474b]">
            Engineering expertise shaped by decades in Europe's energy industry
            and international infrastructure consulting.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#54676b]">
            James began his career as a mechanical engineer before progressing
            into senior technical and advisory roles in Germany's power sector,
            including work within Bayernwerk under the VIAG group and through
            its transition to E.ON.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#54676b]">
            He founded Vtail Energy in 2023 to bring technical discipline,
            commercial judgment and a hands-on approach to renewable-energy
            infrastructure contracting and delivery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="bg-[#0b1922] py-20 text-white">
      <div className="container-site max-w-[1030px]">
        <Reveal>
          <SectionLabel dark>Our approach</SectionLabel>
          <p className="serif mt-7 text-3xl leading-[1.4] tracking-tight md:text-[41px]">
            “The strength of an infrastructure project is measured not only by
            its ambition, but by the clarity of its engineering, its contracts
            and its execution.”
          </p>
          <div className="mt-7 text-xs uppercase tracking-[.11em] text-[#b5c6c5]">
            Vtail Energy · Project delivery philosophy
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState(
    "This demonstration form opens your email app with a draft; it does not transmit or store information. Configure a verified business inbox and backend before launch.",
  );
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Vtail Energy — ${data.get("type")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("company")}\nType: ${data.get("type")}\n\nProject details:\n${data.get("message")}`;
    setStatus(
      "Your email application should open with a draft. Add the recipient address before sending; no enquiry has been submitted by this website.",
    );
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <section id="contact" className="py-24 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <div className="contact-info pt-5">
            <SectionLabel>07 / Contact</SectionLabel>
            <h2 className="serif mt-5 text-5xl leading-[1.08] md:text-[60px]">
              Let's build
              <br />
              what's next.
            </h2>
            <p className="mt-6 max-w-[430px] leading-7 text-[#54676b]">
              Developing a renewable-energy project, sourcing electrical
              equipment or looking for a specialist contracting partner? Tell us
              about your requirements.
            </p>
            <div className="mt-10 border-t border-[#dfe6e0] pt-5">
              <strong className="block text-sm">Corporate headquarters</strong>
              <span className="mt-1 flex items-center gap-2 text-sm text-[#6a7c7b]">
                <MapPin size={14} /> Manhattan, New York, United States
              </span>
            </div>
            <div className="mt-6 border-t border-[#dfe6e0] pt-5">
              <strong className="block text-sm">Enquiries</strong>
              <span className="mt-1 block text-sm text-[#6a7c7b]">
                Project development · Contracting · Procurement · Partnerships
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-[#f4f6f2] p-6 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="name">
                  Full name *
                </label>
                <input
                  className="field-control"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="email">
                  Email address *
                </label>
                <input
                  className="field-control"
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="company">
                  Organisation
                </label>
                <input
                  className="field-control"
                  id="company"
                  name="company"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="type">
                  Enquiry type
                </label>
                <select className="field-control" id="type" name="type">
                  <option>Project enquiry</option>
                  <option>Procurement</option>
                  <option>Contracting partnership</option>
                  <option>General enquiry</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="field-label" htmlFor="message">
                Project details *
              </label>
              <textarea
                className="field-control min-h-[130px] resize-y"
                id="message"
                name="message"
                required
                placeholder="Tell us about the scope, location and timeline..."
              />
            </div>
            <button className="btn btn-dark mt-2" type="submit">
              Prepare Email Enquiry <ArrowUpRight size={15} />
            </button>
            <p role="status" className="mt-4 text-xs leading-5 text-[#71817d]">
              {status}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Process />
        <Projects />
        <Leadership />
        <Quote />
        <Contact />
      </main>
    </>
  );
}
