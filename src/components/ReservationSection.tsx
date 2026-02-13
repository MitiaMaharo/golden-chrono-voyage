import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { destinations } from "@/data/destinations";
import { toast } from "sonner";

const ReservationSection = () => {
  const [form, setForm] = useState({
    destination: "",
    date: "",
    travelers: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.destination) e.destination = "Choisissez une destination";
    if (!form.date) e.date = "Sélectionnez une date";
    if (!form.travelers || Number(form.travelers) < 1) e.travelers = "Au moins 1 voyageur";
    if (!form.name.trim()) e.name = "Entrez votre nom";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email invalide";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      toast.success("Demande envoyée ! Notre équipe vous contactera sous 24h.");
      setForm({ destination: "", date: "", travelers: "", name: "", email: "" });
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-background border ${errors[field] ? "border-destructive" : "border-border"} rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`;

  return (
    <section id="reservation" className="py-32 px-6 bg-card">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Réservation
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Préparez Votre <span className="text-gradient-gold">Voyage</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Nom complet</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jean Dupont"
                className={inputClass("name")}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jean@exemple.com"
                className={inputClass("email")}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block font-body text-sm text-muted-foreground mb-2">Destination</label>
            <select
              value={form.destination}
              onChange={(e) => setForm({ ...form, destination: e.target.value })}
              className={inputClass("destination")}
            >
              <option value="">Choisir une destination…</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title} — {d.era}
                </option>
              ))}
            </select>
            {errors.destination && <p className="text-destructive text-xs mt-1">{errors.destination}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Date de départ</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass("date")}
              />
              {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Nombre de voyageurs</label>
              <input
                type="number"
                min={1}
                max={8}
                value={form.travelers}
                onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                placeholder="2"
                className={inputClass("travelers")}
              />
              {errors.travelers && <p className="text-destructive text-xs mt-1">{errors.travelers}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-4 rounded-sm tracking-wider uppercase hover:shadow-gold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <Send className="w-4 h-4" />
            Envoyer ma demande
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
