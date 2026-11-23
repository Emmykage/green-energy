import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Zap,
  BatteryCharging,
  Cable,
  Wind,
  Network,
  Target,
  ShieldCheck,
  Building2,
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

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
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

const capabilities = [
  {
    icon: Network,
    number: "01",
    title: "Engineering & EPC Delivery",
    description:
      "Integrated engineering, procurement and construction coordination for defined infrastructure project scopes.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Equipment Procurement",
    description:
      "Equipment specification, supplier assessment and procurement coordination for critical energy infrastructure.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Power & Grid Infrastructure",
    description:
      "Technical coordination for substations, transformers, electrical distribution and renewable-energy integration.",
  },
];

const sectors = [
  {
    icon: Sun,
    title: "Solar Energy",
    description:
      "Utility-scale solar generation and associated infrastructure.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage",
    description: "Battery systems and power conversion infrastructure.",
  },
  {
    icon: Wind,
    title: "Wind Infrastructure",
    description: "Electrical equipment and balance-of-plant infrastructure.",
  },
  {
    icon: Cable,
    title: "Grid Modernisation",
    description: "Substations, transformers and power distribution systems.",
  },
];

const approach = [
  {
    number: "01",
    title: "Assess",
    description: "Understand project objectives, requirements and constraints.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define technical requirements and delivery responsibilities.",
  },
  {
    number: "03",
    title: "Coordinate",
    description: "Align suppliers, contractors and project stakeholders.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Support execution, quality requirements and project handover.",
  },
];

export default function HomePageIndex() {
  return (
    <main className="bg-[#f5f5f0] text-[#0b1922]">
      {/* HERO */}
      <section className="relative flex min-h-[760px] min-h-[93svh] items-center overflow-hidden bg-[#122832] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,31,.95)_0%,rgba(7,23,31,.82)_38%,rgba(7,23,31,.34)_100%),linear-gradient(0deg,rgba(7,23,31,.65),transparent_48%),url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=88')] bg-cover bg-[center_55%]" />

        <div className="container-site relative z-10 pb-28 pt-36">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel dark>
                Renewable Energy Infrastructure & Contracting
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
              Technical expertise. Commercial discipline. Integrated
              engineering, procurement and contract delivery for the
              infrastructure powering tomorrow.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Link to="/services" className="btn btn-green">
                Explore Our Services <ArrowUpRight size={15} />
              </Link>

              <a href="#contact" className="btn btn-outline">
                Partner With Us <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/20">
          <div className="container-site flex flex-wrap items-center justify-between gap-4 py-5 text-[9px] font-bold uppercase tracking-[.14em] text-[#d7e1e1] sm:text-[11px]">
            <span>
              New York headquartered <b className="text-[#b6d49b]">/</b>{" "}
              International perspective
            </span>
            <span>Engineering / Procurement / Delivery</span>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section id="overview" className="py-24 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-[.95fr_1.05fr] md:gap-20">
          <Reveal>
            <SectionLabel>01 / Who We Are</SectionLabel>

            <h2 className="serif mt-6 text-4xl leading-[1.12] md:text-[56px]">
              Connecting expertise with
              <br />
              <i>energy infrastructure.</i>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-xl leading-[1.65] text-[#273e43]">
              Vtail Energy is a New York-based renewable-energy infrastructure
              company connecting technical expertise with the practical demands
              of project delivery.
            </p>

            <p className="mt-5 leading-[1.85] text-[#54676b]">
              Founded in 2023, the company focuses on defined contracting scopes
              across engineering, equipment procurement, project coordination
              and energy infrastructure development.
            </p>

            <p className="mt-4 leading-[1.85] text-[#54676b]">
              We work alongside developers, project sponsors, equipment
              manufacturers and specialist delivery partners, with an emphasis
              on engineering discipline, commercial clarity and structured
              execution.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#456b55] hover:gap-5 transition-all"
            >
              Discover Vtail Energy <ArrowRight size={17} />
            </Link>

            <div className="mt-9 grid grid-cols-2 gap-5 border-t border-[#dfe6e0] pt-6">
              <div>
                <strong className="block text-3xl">2023</strong>
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

      {/* CAPABILITIES */}
      <section className="bg-white py-24 md:py-28">
        <div className="container-site">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>02 / What We Do</SectionLabel>

              <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
                Integrated capabilities.
                <br />
                Clear accountability.
              </h2>
            </div>

            <div className="max-w-[345px]">
              <p className="text-sm leading-7 text-[#54676b]">
                Specialist services structured around the technical and
                contractual needs of renewable-energy infrastructure.
              </p>

              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#456b55]"
              >
                View All Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:grid-cols-3"
          >
            {capabilities.map(({ icon: Icon, number, title, description }) => (
              <motion.article
                variants={fadeUp}
                key={number}
                whileHover={{ y: -7 }}
                className="border border-[#e8ece6] bg-[#f8f9f6] p-8 md:p-9"
              >
                <span className="text-xs font-extrabold tracking-widest text-[#78947c]">
                  {number}
                </span>

                <Icon className="my-7 h-9 w-9 stroke-[1.3] text-[#4d7866]" />

                <h3 className="text-xl font-semibold leading-tight">{title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#54676b]">
                  {description}
                </p>

                <Link
                  to="/services"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4d7866]"
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-[#0b1922] py-24 text-white md:py-28">
        <div className="container-site">
          <Reveal>
            <SectionLabel dark>03 / Our Sectors</SectionLabel>

            <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
              Infrastructure for a
              <br />
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
            {sectors.map(({ icon: Icon, title, description }) => (
              <motion.div
                variants={fadeUp}
                key={title}
                className="border-t border-[#78928d] pt-5"
              >
                <Icon className="mb-5 h-7 w-7 text-[#b6d49b]" />

                <strong className="text-lg">{title}</strong>

                <p className="mt-3 text-sm leading-6 text-[#b9c7ca]">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <Link
            to="/sectors"
            className="mt-12 inline-flex items-center gap-3 text-sm font-bold text-[#b6d49b] hover:gap-5 transition-all"
          >
            Explore Our Sectors <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 md:py-28">
        <div className="container-site">
          <Reveal>
            <SectionLabel>04 / Our Approach</SectionLabel>

            <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
              From scope to
              <br />
              <i>successful delivery.</i>
            </h2>

            <p className="mt-6 max-w-[650px] leading-7 text-[#54676b]">
              We apply a structured approach to project delivery, maintaining
              clarity across technical requirements, procurement and execution
              responsibilities.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-4"
          >
            {approach.map((step) => (
              <motion.div
                variants={fadeUp}
                key={step.number}
                className="border-t-2 border-[#b6d49b] pt-5"
              >
                <b className="text-xs text-[#5c8463]">{step.number}</b>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#66787c]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 text-sm font-bold text-[#456b55]"
          >
            Learn About Our Company <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* LEADERSHIP PREVIEW */}
      <section className="bg-[#e9eee7] py-24 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <SectionLabel>05 / Leadership</SectionLabel>

            <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[56px]">
              Experience behind
              <br />
              every decision.
            </h2>

            <p className="mt-7 text-lg leading-7 text-[#30474b]">
              Strong leadership combines technical understanding, commercial
              judgment and a clear vision for the future of energy
              infrastructure.
            </p>

            <p className="mt-5 leading-7 text-[#54676b]">
              Vtail Energy's leadership approach is centred on accountability,
              strategic thinking and disciplined project execution.
            </p>

            <Link
              to="/leadership"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#456b55] hover:gap-5 transition-all"
            >
              Meet Our Leadership <ArrowRight size={17} />
            </Link>
          </Reveal>

          <Reveal>
            <div className="relative min-h-[350px] overflow-hidden bg-[#0b1922]">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-[#b6d49b]" />
                <div className="absolute right-10 top-10 h-[280px] w-[280px] rounded-full border border-[#b6d49b]" />
              </div>

              <div className="relative flex min-h-[350px] flex-col justify-end p-9 md:p-12">
                <Target className="mb-6 text-[#b6d49b]" size={36} />

                <p className="text-xs uppercase tracking-[0.25em] text-[#b6d49b]">
                  Vtail Energy
                </p>

                <h3 className="serif mt-3 text-3xl text-white md:text-4xl">
                  Leadership with purpose.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
                  Focused on building partnerships and advancing infrastructure
                  opportunities.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPANY PHILOSOPHY */}
      <section className="bg-[#0b1922] py-20 text-white">
        <div className="container-site max-w-[1030px]">
          <Reveal>
            <SectionLabel dark>Our Philosophy</SectionLabel>

            <p className="serif mt-7 text-3xl leading-[1.4] tracking-tight md:text-[41px]">
              “The strength of an infrastructure project is measured not only by
              its ambition, but by the clarity of its engineering, its contracts
              and its execution.”
            </p>

            <div className="mt-7 text-xs uppercase tracking-[.11em] text-[#b5c6c5]">
              Vtail Energy · Project Delivery Philosophy
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <Reveal>
            <SectionLabel>06 / Start a Conversation</SectionLabel>

            <h2 className="serif mt-5 text-4xl leading-[1.12] md:text-[60px]">
              Let's build
              <br />
              what's next.
            </h2>

            <p className="mt-6 max-w-[600px] leading-7 text-[#54676b]">
              Developing a renewable-energy project, sourcing electrical
              equipment or looking for a specialist contracting partner? Let's
              discuss your requirements.
            </p>
          </Reveal>

          <Reveal>
            <a
              href="mailto:?subject=Vtail%20Energy%20-%20Business%20Enquiry"
              className="btn btn-dark"
            >
              Contact Vtail Energy <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
