import { motion } from "framer-motion";
import { ArrowRight, Building2, Link2, FileCheck, Truck, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/zeitona_logo.png";
import wordmark from "@/assets/zeitona_wordmark.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Building2,
    title: "BIM Integration",
    description:
      "Building Information Modeling for complete lifecycle management — from design to decommissioning with full digital twin capabilities.",
  },
  {
    icon: Link2,
    title: "Blockchain Ledger",
    description:
      "Immutable, transparent records for every transaction, material, and decision across your construction supply chain.",
  },
  {
    icon: FileCheck,
    title: "Smart Contracts",
    description:
      "Automated milestone payments, compliance verification, and dispute resolution — eliminating delays and disputes.",
  },
  {
    icon: Truck,
    title: "Supply Chain 5.0",
    description:
      "Real-time tracking, predictive logistics, and tokenized materials provenance from quarry to building site.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <img src={logo} alt="Zeitona" className="h-8 brightness-0 invert" />
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button size="sm" className="hidden md:inline-flex">
            Get in Touch
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-accent/10 text-accent border border-accent/20">
              Construction 5.0
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Building the Future
            <br />
            <span className="text-accent">Block by Block</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Zeitona merges BIM, Blockchain, and Smart Contracts to deliver
            transparent, efficient, and trustworthy construction ecosystems.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="gap-2 text-base">
              Explore Our Vision <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Read Whitepaper
            </Button>
          </motion.div>
        </div>

        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four Pillars of <span className="text-accent">Innovation</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              An integrated platform where physical construction meets digital trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why <span className="text-accent">Zeitona</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The construction industry loses billions annually to inefficiencies,
                opaque supply chains, and contractual disputes. Zeitona was founded
                to change that — permanently.
              </p>
              <p>
                We bring Construction 5.0 to life: human-centric, sustainable, and
                digitally sovereign. Our platform connects every stakeholder — from
                architects and engineers to suppliers and regulators — on a single,
                verifiable source of truth.
              </p>
              <p>
                Built by engineers who understand both concrete and code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "5.0", label: "Construction Generation" },
              { value: "100%", label: "On-chain Transparency" },
              { value: "BIM", label: "Digital Twin Ready" },
              { value: "24/7", label: "Automated Compliance" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-12 rounded-3xl bg-card border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
            <div className="relative">
              <Mail className="w-10 h-10 text-accent mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let's Build Together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you're a developer, contractor, or innovator — we'd love
                to explore how Zeitona can transform your next project.
              </p>
              <Button size="lg" className="gap-2 text-base">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={wordmark} alt="Zeitona" className="h-5 brightness-0 invert opacity-60" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zeitona. Building the future of construction.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
