import { motion } from "framer-motion";
import { ShieldCheck, Users, Crown } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Sécurité Absolue",
    description:
      "Notre technologie de bulle temporelle garantit votre protection totale. Aucun paradoxe, aucun risque. Certifié par l'Agence Internationale du Temps.",
  },
  {
    icon: Users,
    title: "Guides Experts",
    description:
      "Nos chrononautes certifiés sont des historiens, linguistes et aventuriers. Ils connaissent chaque époque comme leur poche et veillent à votre confort.",
  },
  {
    icon: Crown,
    title: "Luxe Intemporel",
    description:
      "Hébergements d'exception reconstitués avec une fidélité absolue. Gastronomie d'époque revisitée par nos chefs étoilés. Le luxe, à travers les âges.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Pourquoi nous choisir
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            L'Excellence du Voyage<br />
            <span className="text-gradient-gold">Temporel</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group p-8 rounded-sm border border-border bg-background hover:border-primary/40 transition-all duration-500 hover:shadow-gold"
            >
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <adv.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {adv.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
