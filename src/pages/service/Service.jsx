import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Zap,
  BatteryCharging,
  Factory,
  Network,
  Leaf,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: Sun,
    title: "Renewable Energy Development",
    description:
      "Supporting the development of renewable energy opportunities through strategic planning, project assessment and coordinated execution.",
    features: [
      "Solar energy development",
      "Renewable project planning",
      "Feasibility assessment",
      "Project development coordination",
    ],
  },
  {
    number: "02",
    icon: Zap,
    title: "Power Infrastructure",
    description:
      "Developing and coordinating power infrastructure opportunities designed to support reliable and efficient energy systems.",
    features: [
      "Power generation infrastructure",
      "Electrical infrastructure planning",
      "Grid integration coordination",
      "Power system development",
    ],
  },
  {
    number: "03",
    icon: BatteryCharging,
    title: "Energy Storage Solutions",
    description:
      "Exploring energy storage opportunities that improve system flexibility and support renewable energy integration.",
    features: [
      "Battery storage systems",
      "Energy storage assessment",
      "Renewable integration",
      "Energy system flexibility",
    ],
  },
  {
    number: "04",
    icon: Factory,
    title: "Industrial Energy Solutions",
    description:
      "Supporting commercial and industrial energy initiatives with an emphasis on infrastructure performance and reliability.",
    features: [
      "Industrial energy infrastructure",
      "Energy project planning",
      "Power reliability",
      "Infrastructure optimization",
    ],
  },
  {
    number: "05",
    icon: Network,
    title: "Infrastructure Advisory",
    description:
      "Helping stakeholders evaluate energy opportunities, understand project requirements and make informed infrastructure decisions.",
    features: [
      "Project feasibility",
      "Technical coordination",
      "Investment opportunity evaluation",
      "Infrastructure strategy",
    ],
  },
  {
    number: "06",
    icon: Leaf,
    title: "Energy Transition",
    description:
      "Supporting organizations as they explore practical pathways toward more efficient and sustainable energy infrastructure.",
    features: [
      "Energy transition planning",
      "Decarbonization strategies",
      "Renewable energy opportunities",
      "Sustainability integration",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your objectives, project requirements and operating environment.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "We assess opportunities, technical considerations, risks and potential development pathways.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We coordinate planning and development activities to move opportunities forward.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We support project execution with a focus on quality, accountability and long-term value.",
  },
];

export default function Services() {
  return (
    <main className="bg-[#f5f5f0] text-[#0b1922]">
      {/* HERO SECTION */}
      <section className="relative bg-[#0b1922] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-40 w-[550px] h-[550px] rounded-full border border-[#b6d49b]" />
          <div className="absolute right-20 top-20 w-[350px] h-[350px] rounded-full border border-[#b6d49b]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#b6d49b] uppercase tracking-[0.3em] text-xs mb-8">
              Our Services
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Powering progress.
              <br />
              <span className="text-[#b6d49b]">Building possibilities.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              We bring together strategic insight, energy expertise and
              infrastructure thinking to support projects that create lasting
              value.
            </p>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 bg-[#b6d49b] text-[#0b1922] px-8 py-4 hover:bg-white transition"
            >
              Discuss a Project
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              What We Do
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Enabling the next generation of energy infrastructure.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#53616a] text-lg leading-relaxed mb-6">
              Energy infrastructure requires more than ambition. It requires
              careful planning, technical understanding and coordinated
              execution.
            </p>

            <p className="text-[#53616a] leading-relaxed">
              Vtail Energy focuses on energy and infrastructure opportunities
              that respond to evolving industry needs. Our service areas reflect
              our commitment to practical solutions, responsible development and
              long-term value creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Our Capabilities
            </p>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Our services.
              <br />
              Our commitment.
            </h2>

            <p className="text-[#53616a] leading-relaxed">
              Explore the areas where we focus our energy and infrastructure
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group border border-[#e5e8e1] p-8 md:p-10 hover:bg-[#0b1922] hover:text-white hover:border-[#0b1922] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-sm text-[#71866b]">
                      {service.number}
                    </span>

                    <Icon
                      size={30}
                      strokeWidth={1.3}
                      className="text-[#71866b] group-hover:text-[#b6d49b]"
                    />
                  </div>

                  <h3 className="font-serif text-2xl mb-5">{service.title}</h3>

                  <p className="text-sm text-[#65727a] group-hover:text-white/65 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="border-t border-[#e5e8e1] group-hover:border-white/20 pt-6">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm text-[#65727a] group-hover:text-white/75"
                        >
                          <span className="text-[#71866b]">—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Our Approach
            </p>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              From opportunity to execution.
            </h2>

            <p className="text-[#53616a] leading-relaxed">
              Every project is different. Our approach provides a clear
              framework for understanding challenges and progressing
              opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="border-t border-[#b6d49b] pt-7"
              >
                <span className="text-[#71866b] text-sm">{step.number}</span>

                <h3 className="font-serif text-3xl mt-6 mb-4">{step.title}</h3>

                <p className="text-[#65727a] leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1922] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="max-w-2xl">
            <p className="text-[#b6d49b] uppercase tracking-[0.25em] text-xs mb-5">
              Let's Connect
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Let's build something meaningful.
            </h2>

            <p className="text-white/60 leading-relaxed">
              Have an energy or infrastructure opportunity to discuss? We'd be
              glad to hear from you.
            </p>
          </div>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-4 bg-[#b6d49b] text-[#0b1922] px-8 py-5 hover:bg-white transition shrink-0"
          >
            Contact Vtail Energy
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
