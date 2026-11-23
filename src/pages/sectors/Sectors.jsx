import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Factory,
  Building2,
  Zap,
  BatteryCharging,
  Network,
  Leaf,
  Fuel,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    number: "01",
    title: "Renewable Energy",
    subtitle: "Powering a cleaner future",
    description:
      "We focus on renewable energy opportunities that support the transition toward cleaner, more sustainable and resilient power systems.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Solar energy development",
      "Renewable project planning",
      "Clean energy infrastructure",
      "Project development coordination",
    ],
  },
  {
    number: "02",
    title: "Power & Utilities",
    subtitle: "Strengthening energy infrastructure",
    description:
      "We support power and utility infrastructure opportunities designed to improve energy reliability, connectivity and system performance.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Power generation infrastructure",
      "Grid infrastructure",
      "Electrical systems",
      "Energy distribution planning",
    ],
  },
  {
    number: "03",
    title: "Oil & Gas",
    subtitle: "Supporting evolving energy systems",
    description:
      "We recognize the importance of the oil and gas sector in today's energy landscape and the need for responsible infrastructure development.",
    icon: Fuel,
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646e35a40?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Energy infrastructure",
      "Industrial project coordination",
      "Infrastructure development",
      "Energy transition opportunities",
    ],
  },
  {
    number: "04",
    title: "Industrial & Manufacturing",
    subtitle: "Enabling industrial performance",
    description:
      "We explore opportunities to support industrial and manufacturing operations through dependable energy infrastructure and strategic planning.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Industrial energy solutions",
      "Power reliability",
      "Infrastructure optimization",
      "Energy project planning",
    ],
  },
  {
    number: "05",
    title: "Energy Storage",
    subtitle: "Creating flexibility and resilience",
    description:
      "We focus on energy storage opportunities that can help balance energy systems, support renewable integration and improve reliability.",
    icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Battery energy storage",
      "Storage infrastructure",
      "Renewable integration",
      "Energy system flexibility",
    ],
  },
  {
    number: "06",
    title: "Commercial & Real Estate",
    subtitle: "Building more efficient spaces",
    description:
      "We recognize the energy and infrastructure requirements of commercial developments and the built environment.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Commercial energy infrastructure",
      "Building energy systems",
      "Power planning",
      "Infrastructure advisory",
    ],
  },
  {
    number: "07",
    title: "Transportation & Logistics",
    subtitle: "Connecting infrastructure and mobility",
    description:
      "We explore infrastructure opportunities that support transportation networks, logistics facilities and evolving energy requirements.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Transport infrastructure",
      "Energy supply infrastructure",
      "Logistics facilities",
      "Electrification opportunities",
    ],
  },
  {
    number: "08",
    title: "Energy Transition",
    subtitle: "Advancing sustainable development",
    description:
      "We support the exploration of opportunities that align existing energy infrastructure with a more sustainable and lower-carbon future.",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    capabilities: [
      "Energy transition planning",
      "Decarbonization opportunities",
      "Renewable energy integration",
      "Sustainability strategy",
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Industry Understanding",
    description:
      "Understanding the commercial, operational and technical realities of the sectors in which we operate.",
  },
  {
    number: "02",
    title: "Strategic Thinking",
    description:
      "Identifying opportunities and developing practical approaches to complex infrastructure challenges.",
  },
  {
    number: "03",
    title: "Long-Term Perspective",
    description:
      "Considering the future needs of energy systems, infrastructure and the communities they serve.",
  },
];

export default function Sectors() {
  return (
    <main className="bg-[#f5f5f0] text-[#0b1922]">
      {/* HERO */}
      <section className="relative bg-[#0b1922] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-40 w-[550px] h-[550px] rounded-full border border-[#b6d49b]" />
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
              Industries We Serve
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Across industries.
              <br />
              <span className="text-[#b6d49b]">United by energy.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              From renewable energy to industrial infrastructure, we explore
              opportunities across the sectors shaping the future of energy and
              economic development.
            </p>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 bg-[#b6d49b] text-[#0b1922] px-8 py-4 hover:bg-white transition"
            >
              Explore Opportunities
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
              Our Industry Focus
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Energy is at the heart of every modern industry.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#53616a] text-lg leading-relaxed mb-6">
              The energy landscape is interconnected. Every industry depends on
              reliable infrastructure, efficient systems and forward-thinking
              development.
            </p>

            <p className="text-[#53616a] leading-relaxed">
              Vtail Energy focuses on opportunities across a range of
              energy-intensive and infrastructure-driven sectors. Our approach
              recognizes the different challenges, requirements and
              opportunities within each industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTOR GRID */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Our Sectors
            </p>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Where we focus.
            </h2>

            <p className="text-[#53616a] leading-relaxed">
              Explore the industries and infrastructure areas that align with
              our strategic focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <motion.article
                  key={sector.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group border border-[#e5e8e1] bg-[#f5f5f0] overflow-hidden"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-[#0b1922]/25" />

                    <span className="absolute top-5 left-5 bg-[#0b1922] text-[#b6d49b] text-xs px-4 py-2">
                      {sector.number}
                    </span>

                    <div className="absolute bottom-5 right-5 bg-[#b6d49b] p-3 text-[#0b1922]">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-[#71866b] text-xs uppercase tracking-wider mb-3">
                      {sector.subtitle}
                    </p>

                    <h3 className="font-serif text-2xl mb-5">{sector.title}</h3>

                    <p className="text-[#65727a] text-sm leading-relaxed mb-7">
                      {sector.description}
                    </p>

                    <div className="border-t border-[#e0e5dc] pt-6">
                      <p className="text-xs uppercase tracking-wider text-[#71866b] mb-4">
                        Areas of Focus
                      </p>

                      <ul className="space-y-3">
                        {sector.capabilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm text-[#65727a]"
                          >
                            <span className="text-[#71866b]">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Our Perspective
            </p>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              One vision. Multiple opportunities.
            </h2>

            <p className="text-[#53616a] leading-relaxed">
              While every industry has unique requirements, our commitment to
              thoughtful development and long-term value remains consistent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="border-t border-[#b6d49b] pt-7"
              >
                <span className="text-[#71866b] text-sm">{item.number}</span>

                <h3 className="font-serif text-3xl mt-6 mb-5">{item.title}</h3>

                <p className="text-[#65727a] text-sm leading-relaxed">
                  {item.description}
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
              Let's explore what's possible.
            </h2>

            <p className="text-white/60 leading-relaxed">
              Have an opportunity in energy, infrastructure or industrial
              development? We'd be glad to hear from you.
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
