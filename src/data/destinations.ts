export interface Destination {
  id: string;
  title: string;
  era: string;
  tagline: string;
  tags: string[];
  image: string;
  description: string;
  highlights: string[];
  tips: string[];
  adventureLevel: number;
  price: string;
  duration: string;
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    era: "Exposition Universelle",
    tagline: "Assistez à la naissance de la Tour Eiffel",
    tags: ["Belle Époque", "Architecture", "Culture"],
    image: "paris-1889",
    description:
      "Plongez au cœur de l'Exposition Universelle de 1889 et découvrez Paris dans toute sa splendeur. Admirez la Tour Eiffel fraîchement inaugurée, flânez sur les Champs-Élysées à l'ère de la Belle Époque et savourez la gastronomie française dans les premiers grands restaurants parisiens.",
    highlights: [
      "Inauguration de la Tour Eiffel par Gustave Eiffel en personne",
      "Dîner privé au Pavillon français de l'Exposition",
      "Balade en calèche sur les grands boulevards haussmanniens",
      "Rencontre avec les impressionnistes à Montmartre",
    ],
    tips: [
      "Prévoyez des vêtements d'époque (fournis dans votre kit de voyage)",
      "Le franc germinal est la monnaie en cours — nous vous en fournissons",
      "Évitez de mentionner les événements futurs aux locaux",
    ],
    adventureLevel: 2,
    price: "12 500 €",
    duration: "3 jours",
  },
  {
    id: "cretaceous",
    title: "Crétacé",
    era: "-65 Millions d'années",
    tagline: "Face à face avec les titans du passé",
    tags: ["Préhistoire", "Aventure", "Nature"],
    image: "cretaceous",
    description:
      "Remontez 65 millions d'années en arrière pour observer les derniers dinosaures dans leur habitat naturel. Depuis notre camp de base sécurisé et invisible, contemplez des T-Rex, Tricératops et Ptéranodons dans un monde sauvage et majestueux que personne n'a jamais vu.",
    highlights: [
      "Observation de T-Rex depuis une bulle de protection temporelle",
      "Survol en navette silencieuse des plaines du Crétacé",
      "Collecte de fossiles pré-fossilisation (autorisée sous contrôle)",
      "Coucher de soleil sur un monde sans trace humaine",
    ],
    tips: [
      "Niveau physique modéré requis — terrain accidenté",
      "Restez TOUJOURS dans le périmètre sécurisé",
      "Combinaison bio-protectrice obligatoire (fournie)",
    ],
    adventureLevel: 5,
    price: "28 000 €",
    duration: "2 jours",
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    era: "Renaissance italienne",
    tagline: "Dans l'atelier de Michel-Ange",
    tags: ["Renaissance", "Art", "Histoire"],
    image: "florence-1504",
    description:
      "Vivez la Renaissance italienne à son apogée. Visitez l'atelier de Michel-Ange alors qu'il sculpte le David, assistez aux cours de Léonard de Vinci et déambulez dans les rues de Florence sous le mécénat des Médicis. Un voyage pour les amoureux d'art et d'histoire.",
    highlights: [
      "Visite privée de l'atelier de Michel-Ange",
      "Démonstration de peinture par un maître de la Renaissance",
      "Banquet au Palazzo Medici avec la cour florentine",
      "Promenade dans les jardins de Boboli à leur création",
    ],
    tips: [
      "L'italien ancien diffère de l'italien moderne — traducteur temporel inclus",
      "Les Florentins sont méfiants envers les étrangers — restez discrets",
      "Apportez un carnet pour dessiner — pas de photos autorisées",
    ],
    adventureLevel: 3,
    price: "15 800 €",
    duration: "4 jours",
  },
];
