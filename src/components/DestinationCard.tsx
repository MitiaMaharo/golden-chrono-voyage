import { motion } from "framer-motion";
import type { Destination } from "@/data/destinations";
import paris1889 from "@/assets/paris-1889.jpg";
import cretaceous from "@/assets/cretaceous.jpg";
import florence1504 from "@/assets/florence-1504.jpg";

const imageMap: Record<string, string> = {
  "paris-1889": paris1889,
  cretaceous: cretaceous,
  "florence-1504": florence1504,
};

interface Props {
  destination: Destination;
  index: number;
  onExplore: (destination: Destination) => void;
}

const DestinationCard = ({ destination, index, onExplore }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-sm border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-gold cursor-pointer"
      onClick={() => onExplore(destination)}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={imageMap[destination.image]}
          alt={destination.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="text-xs font-body tracking-wider uppercase bg-primary/90 text-primary-foreground px-3 py-1 rounded-sm">
            {destination.era}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          {destination.title}
        </h3>
        <p className="text-muted-foreground font-body text-sm mb-4">
          {destination.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body text-secondary-foreground bg-secondary px-3 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-primary">
            {destination.price}
          </span>
          <button className="font-body text-sm text-primary tracking-wider uppercase hover:text-gold-light transition-colors duration-300">
            Explorer →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
