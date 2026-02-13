import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-80 md:w-96 bg-card border border-border rounded-sm shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-gold px-5 py-4 flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-primary-foreground text-sm">
                  Chronobot
                </h4>
                <p className="text-primary-foreground/70 text-xs font-body">
                  Assistant temporel
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 p-5 overflow-y-auto">
              <div className="bg-secondary rounded-sm p-3 max-w-[80%]">
                <p className="text-sm font-body text-foreground">
                  Bonjour ! 👋 Je suis Chronobot, votre assistant temporel. Comment puis-je vous aider à planifier votre voyage dans le temps ?
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                placeholder="Posez votre question…"
                className="flex-1 bg-background border border-border rounded-sm px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-10 h-10 bg-gradient-gold rounded-sm flex items-center justify-center hover:shadow-gold transition-all">
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center hover:scale-110 transition-transform duration-300"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatbotWidget;
