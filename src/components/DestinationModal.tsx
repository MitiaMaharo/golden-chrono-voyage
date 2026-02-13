import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Clock, Zap } from "lucide-react";
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
  destination: Destination | null;
  onClose: () => void;
}

const DestinationModal = ({ destination, onClose }: Props) => {
  if (!destination) return null;

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-sm shadow-card"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-sm bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={imageMap[destination.image]}
                alt={destination.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
                    {destination.era}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {destination.title}
                  </h2>
                </div>
                <span className="font-display text-2xl font-bold text-primary">
                  {destination.price}
                </span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-6 mt-4 mb-8 text-muted-foreground text-sm font-body">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {destination.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Aventure {destination.adventureLevel}/5
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < destination.adventureLevel ? "text-primary fill-primary" : "text-border"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-foreground/90 font-body leading-relaxed mb-8">
                {destination.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  À ne pas manquer
                </h3>
                <ul className="space-y-3">
                  {destination.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm font-body text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              <div className="p-6 bg-secondary/50 rounded-sm border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Conseils de Voyage
                </h3>
                <ul className="space-y-2">
                  {destination.tips.map((t) => (
                    <li key={t} className="text-sm font-body text-muted-foreground">
                      • {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  onClose();
                  document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-4 rounded-sm tracking-wider uppercase hover:shadow-gold transition-all duration-300 hover:scale-[1.02]"
              >
                Réserver ce voyage — {destination.price}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DestinationModal;
