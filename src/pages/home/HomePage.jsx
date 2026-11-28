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
import { Link } from "react-router-dom";

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
            Vtail Energy is a privately held renewable-energy infrastructure
            contracting and project development company headquartered in New
            York City.
          </p>
          <p className="mt-5 leading-[1.85] text-[#54676b]">
            Established in 2023, the company provides integrated engineering,
            procurement, project management and infrastructure delivery services
            to renewable-energy developers, commercial organisations and
            infrastructure stakeholders.
          </p>
          <p className="mt-4 leading-[1.85] text-[#54676b]">
            Our work covers technical planning, equipment sourcing, contract
            execution, construction coordination and project commissioning. We
            combine technical expertise, commercial discipline and specialist
            industry partnerships to support the delivery of energy
            infrastructure projects.
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

// const services = [
//   {
//     n: "01 / EPC DELIVERY",
//     icon: House,
//     title: "Engineering, Procurement & Construction",
//     body: "Defined EPC scopes delivered through coordinated technical teams, qualified contractors and project-specific delivery arrangements.",
//   },
//   {
//     n: "02 / EQUIPMENT SUPPLY",
//     icon: Package,
//     title: "Equipment Procurement & Supply",
//     body: "Technical specification, supplier assessment, purchasing and delivery coordination for critical energy infrastructure equipment.",
//   },
//   {
//     n: "03 / PROJECT DEVELOPMENT",
//     icon: ChartNoAxesCombined,
//     title: "Renewable Project Development",
//     body: "Feasibility planning, technical assessments, development coordination and project preparation for renewable-energy assets.",
//   },
//   {
//     n: "04 / CONTRACT EXECUTION",
//     icon: FileText,
//     title: "Contract & Project Management",
//     body: "Structured oversight of milestones, interfaces, schedules, suppliers and contractor responsibilities across assigned project scopes.",
//   },
//   {
//     n: "05 / ENGINEERING ADVISORY",
//     icon: Network,
//     title: "Technical Advisory & Due Diligence",
//     body: "Engineering reviews, technical risk assessments, equipment evaluation and independent support for infrastructure decisions.",
//   },
//   {
//     n: "06 / GRID INFRASTRUCTURE",
//     icon: Zap,
//     title: "Power & Grid Infrastructure",
//     body: "Technical coordination for substations, transformers, electrical distribution and renewable-energy grid integration.",
//   },
// ];

// function Services() {
//   return (
//     <section id="services" className="bg-[#f5f5f0] py-24 md:py-28">
//       <div className="container-site">
//         <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <SectionLabel>02 / What we do</SectionLabel>
//             <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
//               Integrated capabilities.
//               <br />
//               Clear accountability.
//             </h2>
//           </div>
//           <p className="max-w-[345px] text-sm leading-7 text-[#54676b]">
//             Specialist services structured around the technical and contractual
//             needs of renewable-energy infrastructure.
//           </p>
//         </Reveal>
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.08 }}
//           className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {services.map(({ n, icon: Icon, title, body }) => (
//             <motion.article
//               variants={fadeUp}
//               key={n}
//               whileHover={{ y: -7 }}
//               transition={{ duration: 0.25 }}
//               className="min-h-[315px] border border-[#e8ece6] bg-white p-8 md:p-9"
//             >
//               <span className="text-xs font-extrabold tracking-widest text-[#78947c]">
//                 {n}
//               </span>
//               <Icon className="my-7 h-9 w-9 stroke-[1.3] text-[#4d7866]" />
//               <h3 className="text-[21px] font-semibold leading-tight">
//                 {title}
//               </h3>
//               <p className="mt-3 text-sm leading-7 text-[#54676b]">{body}</p>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

const sectors = [
  {
    icon: Sun,
    title: "Utility-Scale Solar Energy",
    body: "Engineering coordination, equipment procurement, electrical integration and project execution support for solar infrastructure.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage Systems",
    body: "Technical and procurement support for battery storage equipment, electrical infrastructure and implementation planning.",
  },
  {
    icon: Wind,
    title: "Wind Energy Infrastructure",
    body: "Engineering advisory, electrical equipment procurement and balance-of-plant coordination for wind-energy projects.",
  },
  {
    icon: Cable,
    title: "Electrical Grid & Power Infrastructure",
    body: "Support for substations, transformers, switchgear and power distribution systems required for renewable-energy integration.",
  },
  {
    icon: Zap,
    title: "Commercial & Industrial Energy",
    body: "Support for on-site generation, energy storage integration and electrical infrastructure upgrades for commercial and industrial organisations.",
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
    "Project assessment",
    "Evaluate client objectives, technical requirements, delivery expectations and commercial constraints.",
  ],
  [
    "02 / PLAN",
    "Engineering & planning",
    "Review engineering requirements, identify project interfaces, assess implementation risks and establish delivery plans.",
  ],
  [
    "03 / SOURCE",
    "Procurement & contracting",
    "Coordinate supplier evaluations, equipment specifications, commercial proposals, procurement requirements and contractual responsibilities.",
  ],
  [
    "04 / EXECUTE",
    "Project execution",
    "Coordinate assigned contractors, suppliers and technical partners while monitoring schedules, quality requirements and commercial milestones.",
  ],
  [
    "05 / DELIVER",
    "Testing, handover & closeout",
    "Coordinate inspection, testing, commissioning and documentation requirements through project completion and formal acceptance.",
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
    location: "Kedah, Malaysia",
    title: "Kedah Solar Energy Infrastructure Development",
    body: "Vtail Energy was appointed by Energy Assets Development, a UK-based EPC contractor, to deliver a major electrical infrastructure subcontract for a utility-scale solar development in Malaysia.",
    type: "Specialist Electrical Infrastructure Subcontract",
    value: "USD 28.5 Million",
    award: "2025",
    completion: "Scheduled 2027",
    status: "In Progress",
    principal: "Energy Assets Development",
    scope:
      "Procurement, engineering coordination, installation management and commissioning support for designated electrical systems.",
    details: [
      "Solar inverter-transformer stations",
      "Medium-voltage switchgear and substation equipment",
      "Associated cabling and electrical protection systems",
      "Specialist manufacturer and logistics coordination",
      "Local electrical contractor coordination",
      "Installation and commissioning support",
    ],
    image: "photo-1509391366360-2e959784a276",
  },
  {
    sector: "storage",
    location: "United Kingdom",
    title: "32 MW Battery Energy Storage Infrastructure",
    body: "A 32 MW / 64 MWh battery energy storage development designed to support grid flexibility and renewable-energy integration. Vtail Energy's contractual responsibilities covered specialist electrical infrastructure, procurement and installation support.",
    type: "Specialist Electrical Infrastructure Subcontract",
    value: "USD 20.3 Million",
    award: "October 2024",
    completion: "December 2025",
    status: "Contract delivery details not provided",
    principal: "Project developer",
    scope:
      "Electrical balance-of-plant infrastructure, equipment procurement, engineering coordination and installation support.",
    details: [
      "Ten 4 MVA power-conversion-system transformer packages",
      "Associated medium-voltage switchgear",
      "33 kV collection network and protection interfaces",
      "Power and control cabling and distribution panels",
      "UK-qualified electrical subcontractor coordination",
      "Inspection, testing and commissioning documentation",
    ],
    image: "photo-1473341304170-971dccb5ac1e",
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [
    ["all", "All Projects"],
    ["solar", "Solar Energy"],
    ["storage", "Battery Storage"],
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
              Selected project <i>portfolio.</i>{" "}
            </h2>
          </div>
          <p className="max-w-[355px] text-sm leading-7 text-[#54676b]">
            Selected renewable-energy and electrical infrastructure contracts
            involving Vtail Energy's procurement, engineering coordination and
            specialist subcontracting capabilities.
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
                className="group min-w-0 bg-white"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#0b1922]/10" />
                </div>

                {/* Project Information */}
                <div className="p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#829078]">
                      {project.category}
                    </span>

                    <span className="text-xs text-[#6d756c]">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="mb-4 font-serif text-2xl text-[#0b1922]">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#65716c]">
                    {project.description}
                  </p>

                  {/* Project Link */}
                  <Link
                    to="/projects"
                    className="mt-6 flex items-center justify-between border-t border-[#dfe3da] pt-5 text-sm font-semibold text-[#0b1922] transition-colors hover:text-[#829c6c]"
                  >
                    Explore Project
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* <p className="mt-7 max-w-[870px] border-l-[3px] border-[#799a7b] py-1 pl-4 text-xs leading-6 text-[#667873]">
          <strong>Project information:</strong> The projects presented reflect
          Vtail Energy's project experience, including its involvement in
          renewable-energy infrastructure, equipment procurement and technical
          project delivery.
        </p> */}
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

          <h3 className="mt-8 text-xl font-semibold">James Masterson</h3>

          <div className="eyebrow mt-1 text-[#6e9179]">
            Founder & Managing Director
          </div>

          <p className="mt-6 text-lg leading-7 text-[#30474b]">
            James Masterson founded Vtail Energy in 2023 following an extensive
            career in engineering, power infrastructure and international energy
            consulting.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#54676b]">
            A mechanical engineering graduate of the University of Edinburgh,
            James began his professional career in industrial engineering before
            moving to Germany, where he developed experience in power-generation
            systems and infrastructure projects.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#54676b]">
            He later joined Bayernwerk, part of the VIAG group, progressing into
            senior engineering and technical management roles. He continued his
            career following the formation of E.ON in 2000, taking on
            responsibilities involving energy infrastructure assessment,
            technical advisory and project coordination.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#54676b]">
            After returning to the United States, James continued working as a
            senior energy consultant before establishing Vtail Energy. As
            Founder and Managing Director, he oversees the company's strategic
            direction, major client relationships, commercial partnerships and
            significant project decisions.
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
                <MapPin size={14} /> New York City, United States{" "}
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

const services = [
  {
    number: "01",
    title: "Engineering, Procurement & Construction",
    description:
      "Coordination of engineering, procurement and construction scopes for renewable-energy infrastructure, working with specialist engineering teams, equipment manufacturers and installation contractors.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
    icon: House,
  },
  {
    number: "02",
    title: "Renewable Energy Equipment Procurement & Supply",
    description:
      "Sourcing, specification, purchasing and delivery coordination of transformers, switchgear, solar inverters, battery systems and other essential electrical infrastructure equipment.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
    icon: Package,
  },
  {
    number: "03",
    title: "Renewable Energy Project Development",
    description:
      "Technical feasibility reviews, project planning, infrastructure assessments, equipment evaluation and development coordination to prepare projects for procurement and construction.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
    icon: Sun,
  },
  {
    number: "04",
    title: "Project Management & Contract Execution",
    description:
      "Project scheduling, contractor and supplier coordination, budget monitoring, risk identification, contract administration and project handover support.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
    icon: FileText,
  },
  {
    number: "05",
    title: "Technical Advisory & Engineering Consultancy",
    description:
      "Technical due diligence, engineering feasibility assessments, equipment specification reviews, project risk analysis and owner's engineering support.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    icon: Network,
  },
];

function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-28">
      <div className="container-site">
        <Reveal className="mx-auto mb-14 max-w-[700px] text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="serif mt-5 text-4xl leading-tight md:text-[54px]">
            Integrated Energy Solutions
            <br />
            <i>Built Around Delivery.</i>
          </h2>
          <p className="mx-auto mt-5 max-w-[570px] text-sm leading-7 text-[#66787c]">
            From engineering and procurement to project coordination and
            infrastructure delivery, we provide practical capabilities that
            support complex energy projects.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ number, title, description, image, icon: Icon }) => (
            <motion.article
              variants={fadeUp}
              key={number}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-lg bg-white shadow-[0_10px_45px_rgba(15,35,30,0.08)]"
            >
              <div className="relative h-[245px] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0b1922]/10" />
              </div>

              <div className="relative px-6 pb-7 pt-16">
                <div className="absolute -top-12 left-6 flex h-[94px] w-[94px] items-center justify-center rounded-full bg-white shadow-lg">
                  <Icon className="h-10 w-10 stroke-[1.6] text-[#2dbb70]" />
                </div>

                <span className="text-[11px] font-bold tracking-widest text-[#2dbb70]">
                  SERVICE {number}
                </span>

                <h3 className="mt-2 text-xl font-semibold leading-snug text-[#0b1922]">
                  {title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#7b898c]">
                  {description}
                </p>

                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2dbb70] transition group-hover:gap-3"
                >
                  Read More <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="/services" className="btn btn-dark">
            Explore All Services <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    number: "01",
    title: "Technical Expertise",
    description:
      "We approach energy infrastructure with engineering knowledge, technical assessment and practical project understanding.",
    icon: Network,
  },
  {
    number: "02",
    title: "Integrated Project Delivery",
    description:
      "We connect engineering, procurement and project coordination to support a more structured delivery process.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Commercial Discipline",
    description:
      "We value clearly defined scopes, transparent responsibilities and disciplined contract execution.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Partnership Approach",
    description:
      "We work alongside developers, manufacturers, contractors and specialist partners to address project requirements.",
    icon: Package,
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#f2f5f0] py-24 md:py-28">
      <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionLabel>Why Choose Vtail Energy</SectionLabel>

          <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
            The right expertise.
            <br />
            <i>A practical approach.</i>
          </h2>

          <p className="mt-6 max-w-[440px] text-sm leading-7 text-[#66787c]">
            Successful energy infrastructure requires more than ambition. It
            requires sound technical judgment, effective coordination and clear
            accountability at every stage.
          </p>

          <a href="/about" className="btn btn-dark mt-8">
            Discover Vtail Energy <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {reasons.map(({ number, title, description, icon: Icon }) => (
            <motion.article
              variants={fadeUp}
              key={number}
              className="border border-[#e1e8df] bg-white p-7 transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#7d9b7d]">
                  {number}
                </span>
                <Icon className="h-7 w-7 text-[#4d8063]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-[#0b1922]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#66787c]">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b1922] py-24 text-white md:py-32"
    >
      <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#b6d49b]/10" />
      <div className="absolute -right-12 -top-12 h-[300px] w-[300px] rounded-full border border-[#b6d49b]/10" />

      <div className="container-site relative z-10">
        <Reveal className="mx-auto max-w-[850px] text-center">
          <SectionLabel dark>Let's Work Together</SectionLabel>

          <h2 className="serif mt-6 text-4xl leading-tight md:text-[65px]">
            Have an energy project
            <br />
            <i className="text-[#b6d49b]">in mind?</i>
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] text-sm leading-7 text-[#c0ccce] md:text-base">
            Whether you are developing a renewable-energy project, sourcing
            critical equipment or seeking an experienced infrastructure partner,
            we would welcome the opportunity to understand your requirements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn btn-green">
              Discuss Your Project <ArrowUpRight size={16} />
            </a>

            <a href="/services" className="btn btn-outline">
              Explore Our Services <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const HomePage = () => {
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
        <WhyChooseUs />
        <FinalCTA />
      </main>
    </>
  );
};

export default HomePage;
