import { useState } from "react";
import { motion } from "framer-motion";
import { destinations, type Destination } from "@/data/destinations";
import DestinationCard from "./DestinationCard";
import DestinationModal from "./DestinationModal";

const DestinationsSection = () => {
  const [selected, setSelected] = useState<Destination | null>(null);

  return (
    <>
      <section id="destinations" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Nos Époques
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Destinations <span className="text-gradient-gold">Temporelles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                index={i}
                onExplore={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      <DestinationModal
        destination={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default DestinationsSection;
