// ---------- DONNÉES ----------

// Couleurs principales pour chaque école
const schoolColors = {
  esg: "#2e7d32", // vert forêt
  ista: "#ed6a02", // orange
  isa: "#0b2b40", // bleu foncé
  default: "#0b2b40" // couleur par défaut (accueil)
};

// Mapping d'emojis pour chaque filière (basé sur l'ID)
function getEmojiForFiliere(id) {
  const map = {
    // ESG
    assurances: "🛡️",
    "assistant-manager": "👔",
    "banque-finance": "💰",
    "commerce-international": "🌍",
    "communication-organisations": "📢",
    "comptabilite-gestion-entreprises": "📊",
    "douane-transit": "🚢",
    "droit-foncier-domanial": "⚖️",
    "e-commerce-marketing-numerique": "🛒",
    "gestion-projets": "📅",
    "gestion-fiscale": "🧾",
    "gestion-collectivites-territoriales": "🏛️",
    "gestion-logistique-transports": "🚚",
    "gestion-ressources-humaines": "👥",
    "gestion-systemes-informations": "💻",
    journalisme: "📰",
    "marketing-commerce-vente": "📈",
    "management-sport": "⚽",
    microfinance: "💹",
    statistiques: "📉",
    // ISTA
    electrotechnique: "⚡",
    "froid-climatisation": "❄️",
    "genie-logiciel": "💾",
    "genie-civil-travaux-publics": "🏗️",
    "genie-civil-batiment": "🏢",
    "geometre-topographe": "📐",
    "infographie-web-design": "🎨",
    "informatique-industrielle-automatisme": "🤖",
    "maintenance-equipements-industriels": "🔧",
    "maintenance-appareils-biomedicaux": "🩺",
    "maintenance-systemes-informatiques": "🖥️",
    "maintenance-apres-vente-automobile": "🚗",
    "maintenance-systemes-electrotechniques": "🔌",
    mecatronique: "⚙️",
    "maintenance-industrielle-productique": "🏭",
    "reseaux-securite": "🔒",
    telecommunication: "📡",
    // ISA
    kinesitherapie: "🦵",
    "sage-femme": "👶",
    odontostomatologie: "🦷",
    "sciences-infirmieres": "💉",
    "opticien-lunetier": "👓",
    "techniques-pharmaceutiques": "💊",
    "radiologie-imagerie-medicale": "🩻",
    "techniques-laboratoire-analyses-medicales": "🔬"
  };
  return map[id] || "📚";
}

// Mapping d'images libres de droits pour chaque filière (basé sur l'ID)
function getImageForFiliere(id) {
  const map = {
    // ESG
    assurances:
      "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "assistant-manager":
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "banque-finance":
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "commerce-international":
      "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "communication-organisations":
      "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "comptabilite-gestion-entreprises":
      "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "douane-transit":
      "https://images.pexels.com/photos/933484/pexels-photo-933484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "droit-foncier-domanial":
      "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "e-commerce-marketing-numerique":
      "https://images.pexels.com/photos/6694546/pexels-photo-6694546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "gestion-projets":
      "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "gestion-fiscale":
      "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "gestion-collectivites-territoriales":
      "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "gestion-logistique-transports":
      "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "gestion-ressources-humaines":
      "https://images.pexels.com/photos/3807692/pexels-photo-3807692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "gestion-systemes-informations":
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    journalisme:
      "https://images.pexels.com/photos/25842/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "marketing-commerce-vente":
      "https://images.pexels.com/photos/6694546/pexels-photo-6694546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "management-sport":
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    microfinance:
      "https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    statistiques:
      "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // ISTA
    electrotechnique:
      "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "froid-climatisation":
      "https://images.pexels.com/photos/5972849/pexels-photo-5972849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "genie-logiciel":
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "genie-civil-travaux-publics":
      "https://images.pexels.com/photos/131658/pexels-photo-131658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "genie-civil-batiment":
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "geometre-topographe":
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "infographie-web-design":
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "informatique-industrielle-automatisme":
      "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "maintenance-equipements-industriels":
      "https://images.pexels.com/photos/236093/pexels-photo-236093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "maintenance-appareils-biomedicaux":
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "maintenance-systemes-informatiques":
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "maintenance-apres-vente-automobile":
      "https://images.pexels.com/photos/4488646/pexels-photo-4488646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "maintenance-systemes-electrotechniques":
      "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    mecatronique:
      "https://images.pexels.com/photos/8386961/pexels-photo-8386961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "maintenance-industrielle-productique":
      "https://images.pexels.com/photos/236093/pexels-photo-236093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "reseaux-securite":
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    telecommunication:
      "https://images.pexels.com/photos/163176/ant-antenna-communication-transmitter-163176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // ISA
    kinesitherapie:
      "https://images.pexels.com/photos/4098156/pexels-photo-4098156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "sage-femme":
      "https://images.pexels.com/photos/5727863/pexels-photo-5727863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    odontostomatologie:
      "https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "sciences-infirmieres":
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "opticien-lunetier":
      "https://images.pexels.com/photos/128758/pexels-photo-128758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "techniques-pharmaceutiques":
      "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "radiologie-imagerie-medicale":
      "https://images.pexels.com/photos/5452258/pexels-photo-5452258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "techniques-laboratoire-analyses-medicales":
      "https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  };
  return (
    map[id] ||
    "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );
}

// Mapping d'emojis pour chaque matière (basé sur l'ID)
function getEmojiForMatiere(id) {
  const map = {
    anglais: "🇬🇧",
    automatisme: "🤖",
    "commande-par-ordinateur": "🖥️",
    comptabilite: "📊",
    droit: "⚖️",
    "electronique-de-base": "🔌",
    "electronique-de-puissance": "⚡",
    francais: "🇫🇷",
    mathematiques: "📐",
    metrologie: "📏",
    microprocesseur: "💾",
    "regulation-et-asservissement": "📈",
    matiere1: "📘",
    matiere2: "📙",
    matiere3: "📕"
  };
  return map[id] || "📘";
}

// Mapping d'images libres de droits pour chaque matière (basé sur l'ID)
function getImageForMatiere(id) {
  const map = {
    anglais:
      "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    automatisme:
      "https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "commande-par-ordinateur":
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    comptabilite:
      "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    droit:
      "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "electronique-de-base":
      "https://images.pexels.com/photos/592639/pexels-photo-592639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "electronique-de-puissance":
      "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    francais:
      "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    mathematiques:
      "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    metrologie:
      "https://images.pexels.com/photos/4068335/pexels-photo-4068335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    microprocesseur:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "regulation-et-asservissement":
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  };
  return (
    map[id] ||
    "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );
}

// Données pour l'accueil (écoles) avec filières structurées
const ecoleData = [
  {
    id: "esg",
    nom: "ESG",
    description: "Ecole Supérieure de Gestion",
    filieres: [
      { nom: "Assurances", id: "assurances" },
      { nom: "Assistant Manager", id: "assistant-manager" },
      { nom: "Banque & Finance", id: "banque-finance" },
      { nom: "Commerce International", id: "commerce-international" },
      {
        nom: "Communication des Organisations",
        id: "communication-organisations"
      },
      {
        nom: "Comptabilité & Gestion des Entreprises",
        id: "comptabilite-gestion-entreprises"
      },
      { nom: "Douane & Transit", id: "douane-transit" },
      { nom: "Droit Foncier & Domanial", id: "droit-foncier-domanial" },
      {
        nom: "E-commerce et Marketing Numérique",
        id: "e-commerce-marketing-numerique"
      },
      { nom: "Gestion des Projets", id: "gestion-projets" },
      { nom: "Gestion Fiscale", id: "gestion-fiscale" },
      {
        nom: "Gestion des Collectivités Territoriales",
        id: "gestion-collectivites-territoriales"
      },
      {
        nom: "Gestion Logistique & Transports",
        id: "gestion-logistique-transports"
      },
      {
        nom: "Gestion des Ressources Humaines",
        id: "gestion-ressources-humaines"
      },
      {
        nom: "Gestion des Systèmes d'informations",
        id: "gestion-systemes-informations"
      },
      { nom: "Journalisme", id: "journalisme" },
      { nom: "Marketing Commerce & Vente", id: "marketing-commerce-vente" },
      { nom: "Management du Sport", id: "management-sport" },
      { nom: "Microfinance", id: "microfinance" },
      { nom: "Statistiques", id: "statistiques" }
    ],
    logo: "https://www.univ-iug.com/assets/images/ESG.png"
  },
  {
    id: "ista",
    nom: "ISTA",
    description: "Institut Supérieur des Technologies Avancées",
    filieres: [
      { nom: "Electrotechnique", id: "electrotechnique" },
      { nom: "Froid et Climatisation", id: "froid-climatisation" },
      { nom: "Génie Logiciel", id: "genie-logiciel" },
      {
        nom: "Génie Civil (Travaux Publics)",
        id: "genie-civil-travaux-publics"
      },
      { nom: "Génie Civil (Bâtiment)", id: "genie-civil-batiment" },
      { nom: "Géomètre Topographe", id: "geometre-topographe" },
      { nom: "Infographie et Web Design", id: "infographie-web-design" },
      {
        nom: "Informatique Industrielle & Automatisme",
        id: "informatique-industrielle-automatisme"
      },
      {
        nom: "Maintenance des Equipements Industriels",
        id: "maintenance-equipements-industriels"
      },
      {
        nom: "Maintenance des Appareils Biomédicaux",
        id: "maintenance-appareils-biomedicaux"
      },
      {
        nom: "Maintenance des Systèmes Informatiques",
        id: "maintenance-systemes-informatiques"
      },
      {
        nom: "Maintenance Après-Vente Automobile",
        id: "maintenance-apres-vente-automobile"
      },
      {
        nom: "Maintenance des Systèmes Électrotechniques",
        id: "maintenance-systemes-electrotechniques"
      },
      { nom: "Mécatronique", id: "mecatronique" },
      {
        nom: "Maintenance Industrielle & Productique",
        id: "maintenance-industrielle-productique"
      },
      { nom: "Réseaux & Sécurité", id: "reseaux-securite" },
      { nom: "Télécommunication", id: "telecommunication" }
    ],
    logo: "https://www.univ-iug.com/assets/images/ista-logo.jpg"
  },
  {
    id: "isa",
    nom: "ISA",
    description: "Institut Supérieur des Sciences Appliquées",
    filieres: [
      { nom: "Kinésithérapie (KIN)", id: "kinesitherapie" },
      { nom: "Sage-Femme (SF)", id: "sage-femme" },
      { nom: "Odontostomatologie (ODO)", id: "odontostomatologie" },
      { nom: "Sciences Infirmières (SI)", id: "sciences-infirmieres" },
      { nom: "Opticien-Lunetier (OPT)", id: "opticien-lunetier" },
      {
        nom: "Techniques Pharmaceutiques (TPH)",
        id: "techniques-pharmaceutiques"
      },
      {
        nom: "Radiologie & Imagerie Médicale (RIM)",
        id: "radiologie-imagerie-medicale"
      },
      {
        nom: "Techniques de Laboratoire & d'Analyses Médicales (TLB)",
        id: "techniques-laboratoire-analyses-medicales"
      }
    ],
    logo: "https://www.univ-iug.com/assets/images/isa-logo.jpg"
  }
];

const annalesDataAccueil = [
  {
    ecole: "ESG",
    titre: "Comptabilité - BTS 2024 (normale)",
    date: "il y a 3 jours",
    lien: "#"
  },
  {
    ecole: "ISTA",
    titre: "Informatique - BTS 2023 (spéciale)",
    date: "il y a 1 semaine",
    lien: "#"
  },
  {
    ecole: "ESG",
    titre: "Gestion - BTS 2022 (normale)",
    date: "il y a 2 semaines",
    lien: "#"
  },
  {
    ecole: "ISA",
    titre: "Soins infirmiers - BTS 2024 (normale)",
    date: "il y a 3 semaines",
    lien: "#"
  }
];

// Données pour chaque école (spécialités, niveaux, matières, annales)
// Pour cet exemple, nous allons remplacer tous les liens "#" des sujets et corrigés par le chemin vers le PDF fourni.
// Dans une application réelle, chaque annale aurait son propre fichier.
const pdfBasePath = "pdf/Cours-Thales-ANNALES-MATHS-Sujet-et-corrige-2022.pdf";

// Fonction pour mettre à jour les annales avec le chemin PDF
function updateAnnalesWithPdf(obj) {
  if (Array.isArray(obj)) {
    obj.forEach((item) => updateAnnalesWithPdf(item));
  } else if (obj && typeof obj === "object") {
    if (obj.annales) {
      obj.annales.forEach((annale) => {
        if (annale.sujet === "#") annale.sujet = pdfBasePath;
        if (annale.corrige === "#") annale.corrige = pdfBasePath;
      });
    }
    for (let key in obj) {
      if (typeof obj[key] === "object") updateAnnalesWithPdf(obj[key]);
    }
  }
}

const ecoleDetails = {
  esg: {
    nom: "ESG",
    nomComplet: "Ecole Supérieure de Gestion",
    logo: "https://www.univ-iug.com/assets/images/ESG.png",
    specialites: [
      { id: "assurances", nom: "Assurances" },
      { id: "assistant-manager", nom: "Assistant Manager" },
      { id: "banque-finance", nom: "Banque & Finance" },
      { id: "commerce-international", nom: "Commerce International" },
      {
        id: "communication-organisations",
        nom: "Communication des Organisations"
      },
      {
        id: "comptabilite-gestion-entreprises",
        nom: "Comptabilité & Gestion des Entreprises"
      },
      { id: "douane-transit", nom: "Douane & Transit" },
      { id: "droit-foncier-domanial", nom: "Droit Foncier & Domanial" },
      {
        id: "e-commerce-marketing-numerique",
        nom: "E-commerce et Marketing Numérique"
      },
      { id: "gestion-projets", nom: "Gestion des Projets" },
      { id: "gestion-fiscale", nom: "Gestion Fiscale" },
      {
        id: "gestion-collectivites-territoriales",
        nom: "Gestion des Collectivités Territoriales"
      },
      {
        id: "gestion-logistique-transports",
        nom: "Gestion Logistique & Transports"
      },
      {
        id: "gestion-ressources-humaines",
        nom: "Gestion des Ressources Humaines"
      },
      {
        id: "gestion-systemes-informations",
        nom: "Gestion des Systèmes d'informations"
      },
      { id: "journalisme", nom: "Journalisme" },
      { id: "marketing-commerce-vente", nom: "Marketing Commerce & Vente" },
      { id: "management-sport", nom: "Management du Sport" },
      { id: "microfinance", nom: "Microfinance" },
      { id: "statistiques", nom: "Statistiques" }
    ].map((spec) => ({
      ...spec,
      niveaux: [
        {
          id: "bts1",
          nom: "BTS 1",
          matieres: [
            {
              id: "matiere1",
              nom: "Matière 1",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "spéciale", sujet: "#", corrige: null },
                { annee: 2022, session: "normale", sujet: "#", corrige: "#" }
              ]
            },
            {
              id: "matiere2",
              nom: "Matière 2",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
              ]
            }
          ]
        },
        {
          id: "bts2",
          nom: "BTS 2",
          matieres: [
            {
              id: "matiere3",
              nom: "Matière 3",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
              ]
            }
          ]
        }
      ]
    }))
  },
  ista: {
    nom: "ISTA",
    nomComplet: "Institut Supérieur des Technologies Avancées",
    logo: "https://www.univ-iug.com/assets/images/ista-logo.jpg",
    specialites: [
      { id: "electrotechnique", nom: "Electrotechnique" },
      { id: "froid-climatisation", nom: "Froid et Climatisation" },
      { id: "genie-logiciel", nom: "Génie Logiciel" },
      {
        id: "genie-civil-travaux-publics",
        nom: "Génie Civil (Travaux Publics)"
      },
      { id: "genie-civil-batiment", nom: "Génie Civil (Bâtiment)" },
      { id: "geometre-topographe", nom: "Géomètre Topographe" },
      { id: "infographie-web-design", nom: "Infographie et Web Design" },
      {
        id: "informatique-industrielle-automatisme",
        nom: "Informatique Industrielle & Automatisme"
      },
      {
        id: "maintenance-equipements-industriels",
        nom: "Maintenance des Equipements Industriels"
      },
      {
        id: "maintenance-appareils-biomedicaux",
        nom: "Maintenance des Appareils Biomédicaux"
      },
      {
        id: "maintenance-systemes-informatiques",
        nom: "Maintenance des Systèmes Informatiques"
      },
      {
        id: "maintenance-apres-vente-automobile",
        nom: "Maintenance Après-Vente Automobile"
      },
      {
        id: "maintenance-systemes-electrotechniques",
        nom: "Maintenance des Systèmes Électrotechniques"
      },
      { id: "mecatronique", nom: "Mécatronique" },
      {
        id: "maintenance-industrielle-productique",
        nom: "Maintenance Industrielle & Productique"
      },
      { id: "reseaux-securite", nom: "Réseaux & Sécurité" },
      { id: "telecommunication", nom: "Télécommunication" }
    ].map((spec) => {
      // Niveaux génériques par défaut
      const niveauxGeneriques = [
        {
          id: "bts1",
          nom: "BTS 1",
          matieres: [
            {
              id: "matiere1",
              nom: "Matière 1",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "spéciale", sujet: "#", corrige: null },
                { annee: 2022, session: "normale", sujet: "#", corrige: "#" }
              ]
            },
            {
              id: "matiere2",
              nom: "Matière 2",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
              ]
            }
          ]
        },
        {
          id: "bts2",
          nom: "BTS 2",
          matieres: [
            {
              id: "matiere3",
              nom: "Matière 3",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
              ]
            }
          ]
        }
      ];

      // Niveaux spécifiques pour Informatique Industrielle & Automatisme
      if (spec.id === "informatique-industrielle-automatisme") {
        return {
          ...spec,
          niveaux: [
            {
              id: "bts1",
              nom: "BTS 1",
              matieres: [
                {
                  id: "anglais",
                  nom: "Anglais",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "spéciale",
                      sujet: "#",
                      corrige: null
                    },
                    {
                      annee: 2022,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    }
                  ]
                },
                {
                  id: "automatisme",
                  nom: "Automatisme",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    }
                  ]
                },
                {
                  id: "commande-par-ordinateur",
                  nom: "Commande par ordinateur",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "spéciale",
                      sujet: "#",
                      corrige: null
                    }
                  ]
                },
                {
                  id: "comptabilite",
                  nom: "Comptabilité",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    }
                  ]
                },
                {
                  id: "droit",
                  nom: "Droit",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "spéciale",
                      sujet: "#",
                      corrige: null
                    }
                  ]
                },
                {
                  id: "electronique-de-base",
                  nom: "Electronique de base",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    }
                  ]
                }
              ]
            },
            {
              id: "bts2",
              nom: "BTS 2",
              matieres: [
                {
                  id: "electronique-de-puissance",
                  nom: "Electronique de puissance",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "spéciale",
                      sujet: "#",
                      corrige: null
                    }
                  ]
                },
                {
                  id: "francais",
                  nom: "Français",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    }
                  ]
                },
                {
                  id: "mathematiques",
                  nom: "Mathématiques",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    }
                  ]
                },
                {
                  id: "metrologie",
                  nom: "Métrologie",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "spéciale",
                      sujet: "#",
                      corrige: null
                    }
                  ]
                },
                {
                  id: "microprocesseur",
                  nom: "Microprocesseur",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    }
                  ]
                },
                {
                  id: "regulation-et-asservissement",
                  nom: "Régulation et Asservissement",
                  annales: [
                    {
                      annee: 2024,
                      session: "normale",
                      sujet: "#",
                      corrige: "#"
                    },
                    {
                      annee: 2023,
                      session: "spéciale",
                      sujet: "#",
                      corrige: null
                    }
                  ]
                }
              ]
            }
          ]
        };
      } else {
        return {
          ...spec,
          niveaux: niveauxGeneriques
        };
      }
    })
  },
  isa: {
    nom: "ISA",
    nomComplet: "Institut Supérieur des Sciences Appliquées",
    logo: "https://www.univ-iug.com/assets/images/isa-logo.jpg",
    specialites: [
      { id: "kinesitherapie", nom: "Kinésithérapie (KIN)" },
      { id: "sage-femme", nom: "Sage-Femme (SF)" },
      { id: "odontostomatologie", nom: "Odontostomatologie (ODO)" },
      { id: "sciences-infirmieres", nom: "Sciences Infirmières (SI)" },
      { id: "opticien-lunetier", nom: "Opticien-Lunetier (OPT)" },
      {
        id: "techniques-pharmaceutiques",
        nom: "Techniques Pharmaceutiques (TPH)"
      },
      {
        id: "radiologie-imagerie-medicale",
        nom: "Radiologie & Imagerie Médicale (RIM)"
      },
      {
        id: "techniques-laboratoire-analyses-medicales",
        nom: "Techniques de Laboratoire & d'Analyses Médicales (TLB)"
      }
    ].map((spec) => ({
      ...spec,
      niveaux: [
        {
          id: "bts1",
          nom: "BTS 1",
          matieres: [
            {
              id: "matiere1",
              nom: "Matière 1",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "spéciale", sujet: "#", corrige: null },
                { annee: 2022, session: "normale", sujet: "#", corrige: "#" }
              ]
            },
            {
              id: "matiere2",
              nom: "Matière 2",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
              ]
            }
          ]
        },
        {
          id: "bts2",
          nom: "BTS 2",
          matieres: [
            {
              id: "matiere3",
              nom: "Matière 3",
              annales: [
                { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
              ]
            }
          ]
        }
      ]
    }))
  }
};

// Remplacer tous les "#" par le chemin du PDF
updateAnnalesWithPdf(ecoleDetails);

// ---------- GESTION DE LA CONNEXION ----------

// Vérifie si un utilisateur est connecté
function getUser() {
  const userStr = sessionStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
}

// Enregistre l'utilisateur connecté
function setUser(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

// Déconnecte l'utilisateur
function logout() {
  sessionStorage.removeItem("user");
  window.location.hash = "accueil";
}

// Met à jour l'affichage du statut de connexion dans le header
function updateUserStatus() {
  const userStatusDiv = document.getElementById("user-status");
  if (!userStatusDiv) return;
  const user = getUser();
  if (user) {
    userStatusDiv.innerHTML = `
            <span class="user-greeting">Bonjour, ${
              user.role === "visiteur" ? "Visiteur" : "Étudiant"
            }</span>
            <button class="logout-btn" id="logout-btn">Déconnexion</button>
        `;
    document.getElementById("logout-btn")?.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  } else {
    userStatusDiv.innerHTML = `<a href="#login" class="nav-link">Connexion</a>`;
  }
}

// ---------- FONCTIONS DE RENDU ----------

// Vue Accueil (sans carrousel, avec le texte simple)
function renderAccueil() {
    const ecoleCards = ecoleData.map(ecole => {
        const searchData = `${ecole.nom} ${ecole.description} ${ecole.filieres.map(f => f.nom).join(' ')}`.toLowerCase();
        const logoHtml = `<img src="${ecole.logo}" alt="${ecole.nom} logo" class="campus-logo-img" onerror="this.style.display='none'">`;
        const schoolColor = schoolColors[ecole.id];
        const filieresHtml = ecole.filieres.slice(0,4).map(f => `<li><span class="campus-filiere-text">${f.nom}</span></li>`).join('');
        return `
            <a href="#${ecole.id}" class="campus-card" data-search="${searchData}">
                <div class="campus-logo">${logoHtml}</div>
                <h3 style="color: ${schoolColor};">${ecole.nom}</h3>
                <div class="campus-desc" style="color: ${schoolColor};">${ecole.description}</div>
                <ul>${filieresHtml}</ul>
            </a>
        `;
    }).join('');

    const latestList = annalesDataAccueil.map(annale => {
        const ecoleId = annale.ecole === "ESG" ? "esg" : annale.ecole === "ISTA" ? "ista" : "isa";
        const schoolColor = schoolColors[ecoleId];
        return `
            <li>
                <span class="latest-badge" style="background: ${schoolColor};">${annale.ecole}</span>
                <span class="latest-title"><a href="${annale.lien}">${annale.titre}</a></span>
                <span class="latest-meta">${annale.date}</span>
            </li>
        `;
    }).join('');

    return `
        <section class="hero">
            <div class="container">
                <h2>Révisez avec les annales des examens</h2>
                <p>Retrouvez tous les sujets et corrigés des années précédentes, classés par école, filière et niveau.</p>
            </div>
        </section>
        <section class="section"><h2>🏛️ Choisissez votre école</h2><div class="campus-grid">${ecoleCards}</div></section>
        <section class="section"><h2>🆕 Dernières annales</h2><ul class="latest-list">${latestList}</ul></section>
        <section class="section contrib-box"><h2>📤 Tu as des annales ?</h2><p>Partage tes sujets et corrigés !</p><a href="#contact" class="btn-contrib">Je contribue</a></section>
    `;
}

// Vue École
function renderEcole(ecoleId) {
  const ecole = ecoleDetails[ecoleId];
  if (!ecole) return renderAccueil();

  const logoHtml = `<img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'">`;
  const schoolColor = schoolColors[ecoleId];

  const specialitesTriees = [...ecole.specialites].sort((a, b) =>
    a.nom.localeCompare(b.nom)
  );
  let specialitesHtml = "";
  specialitesTriees.forEach((spec) => {
    const searchData = `${spec.nom} ${spec.niveaux
      .map((n) => n.nom)
      .join(" ")}`.toLowerCase();
    const emoji = getEmojiForFiliere(spec.id);
    const imageUrl = getImageForFiliere(spec.id);
    specialitesHtml += `
            <div class="filiere-card" data-specialite="${spec.id}" data-search="${searchData}" 
                 style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${imageUrl}'); background-size: cover; background-position: center;">
                <div class="filiere-overlay">
                    <div class="filiere-emoji">${emoji}</div>
                    <div class="filiere-content">
                        <h3 class="filiere-nom">${spec.nom}</h3>
                        <div class="filiere-actions">
                            <a href="#${ecoleId}/${spec.id}/bts1" class="btn-bts" style="background: ${schoolColor};">BTS 1</a>
                            <a href="#${ecoleId}/${spec.id}/bts2" class="btn-bts" style="background: ${schoolColor};">BTS 2</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  return `
        <div class="campus-header" style="background: linear-gradient(135deg, ${hexToRgba(
          schoolColor,
          0.9
        )}, ${hexToRgba(schoolColor, 0.7)});">
            <div class="header-logo">${logoHtml}</div>
            <div class="header-text">
                <h1>${ecole.nomComplet}</h1>
                <p>Choisissez une filière et un niveau pour voir les matières.</p>
            </div>
        </div>
        <div class="filieres-grid">${specialitesHtml}</div>
    `;
}

// Helper hexToRgba
function hexToRgba(hex, opacity) {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Vue Niveau (toutes les matières sous forme de cartes avec image personnalisée)
function renderNiveau(ecoleId, specialiteId, niveauId) {
  const ecole = ecoleDetails[ecoleId];
  if (!ecole) return renderAccueil();
  const schoolColor = schoolColors[ecoleId];

  let foundSpecialite = null,
    foundNiveau = null;
  for (const spec of ecole.specialites) {
    if (spec.id === specialiteId) {
      foundSpecialite = spec;
      for (const niv of spec.niveaux)
        if (niv.id === niveauId) foundNiveau = niv;
      break;
    }
  }
  if (!foundNiveau) {
    window.location.hash = ecoleId;
    return "";
  }

  const matieresList = foundNiveau.matieres
    .map((m) => {
      const matierePath = `#${ecoleId}/${specialiteId}/${niveauId}/${m.id}`;
      const emoji = getEmojiForMatiere(m.id);
      const imageUrl = getImageForMatiere(m.id);
      return `
            <div class="filiere-card" data-search="${m.nom.toLowerCase()}">
                <div class="filiere-overlay" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${imageUrl}'); background-size: cover; background-position: center;">
                    <div class="filiere-emoji">${emoji}</div>
                    <div class="filiere-content">
                        <h3 class="filiere-nom">${m.nom}</h3>
                        <div class="filiere-actions">
                            <a href="${matierePath}" class="btn-bts" style="background: ${schoolColor};">Voir</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  return `
        <div class="campus-header" style="background: linear-gradient(135deg, ${schoolColor}, ${schoolColor}dd);">
            <div class="header-logo"><img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'"></div>
            <div class="header-text"><h1>${foundSpecialite.nom} - ${foundNiveau.nom}</h1><p>${ecole.nomComplet} - Toutes les matières</p></div>
        </div>
        <a href="#${ecoleId}" class="btn-campus" style="background: ${schoolColor};">← Retour à l'école</a>
        <section class="section">
            <h2>📚 Matières disponibles</h2>
            <div class="filieres-grid">${matieresList}</div>
        </section>
    `;
}

// Vue Spécialité
function renderSpecialite(ecoleId, specialiteId) {
  const ecole = ecoleDetails[ecoleId];
  if (!ecole) return renderAccueil();
  const schoolColor = schoolColors[ecoleId];

  let foundSpecialite = null;
  for (const spec of ecole.specialites)
    if (spec.id === specialiteId) {
      foundSpecialite = spec;
      break;
    }
  if (!foundSpecialite) {
    window.location.hash = ecoleId;
    return "";
  }

  let annales = [];
  foundSpecialite.niveaux.forEach((n) =>
    n.matieres.forEach((m) =>
      m.annales.forEach((a) =>
        annales.push({
          ...a,
          niveau: n.nom,
          niveauId: n.id,
          matiere: m.nom,
          matiereId: m.id
        })
      )
    )
  );
  annales.sort((a, b) => b.annee - a.annee);
  const annees = [...new Set(annales.map((a) => a.annee))].sort(
    (a, b) => b - a
  );

  const annalesList = annales
    .map(
      (a) =>
        `<li data-annee="${a.annee}" data-search="${a.matiere} ${a.niveau} ${
          a.annee
        }"><span class="annale-badge" style="background: ${schoolColor};">${
          a.annee
        } - ${a.session}</span><span class="annale-matiere">${a.matiere} (${
          a.niveau
        })</span><span class="annale-links"><a href="#${a.sujet}">📄 Sujet</a>${
          a.corrige ? `<a href="#${a.corrige}">✅ Corrigé</a>` : ""
        }</span></li>`
    )
    .join("");
  const filterButtons = annees
    .map((y) => `<button class="year-btn" data-year="${y}">${y}</button>`)
    .join("");

  return `
        <div class="campus-header" style="background: linear-gradient(135deg, ${schoolColor}, ${schoolColor}dd);">
            <div class="header-logo"><img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'"></div>
            <div class="header-text"><h1>${foundSpecialite.nom} - Tous les sujets</h1><p>${ecole.nomComplet}</p></div>
        </div>
        <a href="#${ecoleId}" class="btn-campus" style="background: ${schoolColor};">← Retour à l'école</a>
        <div class="filter-years"><span>📅 Filtrer par année :</span><button class="year-btn active" data-year="all">Toutes</button>${filterButtons}</div>
        <section class="section"><h2>📋 Anciens sujets d'examen</h2><ul class="annales-list" id="annales-specialite-list">${annalesList}</ul></section>
    `;
}

// Vue Matière (avec affichage du fichier uploadé pour automatisme)
function renderMatiere(ecoleId, specialiteId, niveauId, matiereId) {
  const ecole = ecoleDetails[ecoleId];
  if (!ecole) return renderAccueil();
  const schoolColor = schoolColors[ecoleId];

  let foundMatiere = null,
    foundSpecialite = null,
    foundNiveau = null;
  for (const spec of ecole.specialites) {
    if (spec.id === specialiteId) {
      foundSpecialite = spec;
      for (const niv of spec.niveaux)
        if (niv.id === niveauId) {
          foundNiveau = niv;
          for (const mat of niv.matieres)
            if (mat.id === matiereId) foundMatiere = mat;
          break;
        }
      break;
    }
  }
  if (!foundMatiere) {
    window.location.hash = ecoleId;
    return "";
  }

  const annees = [...new Set(foundMatiere.annales.map((a) => a.annee))].sort(
    (a, b) => b - a
  );
  const annalesList = foundMatiere.annales
    .map(
      (a) =>
        `<li data-annee="${
          a.annee
        }"><span class="annale-badge" style="background: ${schoolColor};">${
          a.annee
        } - ${a.session}</span><span class="annale-links"><a href="#${
          a.sujet
        }">📄 Sujet</a>${
          a.corrige ? `<a href="#${a.corrige}">✅ Corrigé</a>` : ""
        }</span></li>`
    )
    .join("");
  const filterButtons = annees
    .map((y) => `<button class="year-btn" data-year="${y}">${y}</button>`)
    .join("");

  // Vérifier si c'est la matière automatisme et si un fichier est uploadé
  let uploadedHtml = "";
  if (matiereId === "automatisme") {
    const uploaded = localStorage.getItem("uploaded_automatisme");
    if (uploaded) {
      const data = JSON.parse(uploaded);
      uploadedHtml = `
        <div class="uploaded-file" style="margin: 2rem 0; padding: 1rem; background: var(--gray-100); border-radius: var(--radius); display: flex; align-items: center; justify-content: space-between;">
          <span>📎 Document ajouté : <strong>${data.name}</strong></span>
          <div>
            <a href="#pdf/uploaded/automatisme" class="btn-bts" style="background: ${schoolColor}; margin-right: 0.5rem;">👁️ Voir</a>
            <button id="delete-upload-btn" class="btn-bts" style="background: #dc2626;">🗑️ Supprimer</button>
          </div>
        </div>
      `;
    }
  }

  return `
        <div class="campus-header" style="background: linear-gradient(135deg, ${schoolColor}, ${schoolColor}dd);">
            <div class="header-logo"><img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'"></div>
            <div class="header-text"><h1>${foundMatiere.nom}</h1><p>${foundSpecialite.nom} - ${foundNiveau.nom} - ${ecole.nomComplet}</p></div>
        </div>
        <a href="#${ecoleId}" class="btn-campus" style="background: ${schoolColor};">← Retour à l'école</a>
        <div class="filter-years"><span>📅 Filtrer par année :</span><button class="year-btn active" data-year="all">Toutes</button>${filterButtons}</div>
        <section class="section"><h2>📋 Épreuves disponibles</h2><ul class="annales-list" id="annales-matiere-list">${annalesList}</ul></section>
        ${uploadedHtml}
    `;
}

// Vue PDF pour les fichiers standards
function renderPdf(filePath) {
  const fullPath = filePath;
  return `
        <div class="pdf-viewer" style="padding: 1rem;">
            <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                <a href="javascript:history.back()" class="btn-campus">← Retour</a>
                <a href="${fullPath}" download class="btn-campus" style="background: var(--primary);">⬇️ Télécharger</a>
            </div>
            <iframe src="${fullPath}" width="100%" height="600px" style="border: none; border-radius: var(--radius-lg); box-shadow: var(--shadow);"></iframe>
            <p style="text-align: center; margin-top: 1rem;">Si le PDF ne s'affiche pas, <a href="${fullPath}" target="_blank">cliquez ici pour l'ouvrir</a>.</p>
        </div>
    `;
}

// Vue PDF pour les fichiers uploadés (base64)
function renderUploadedPdf(data) {
  const fileData = JSON.parse(data);
  return `
        <div class="pdf-viewer" style="padding: 1rem;">
            <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                <a href="javascript:history.back()" class="btn-campus">← Retour</a>
                <a href="${fileData.content}" download="${fileData.name}" class="btn-campus" style="background: var(--primary);">⬇️ Télécharger</a>
            </div>
            <iframe src="${fileData.content}" width="100%" height="600px" style="border: none; border-radius: var(--radius-lg); box-shadow: var(--shadow);"></iframe>
            <p style="text-align: center; margin-top: 1rem;">Si le PDF ne s'affiche pas, <a href="${fileData.content}" target="_blank">cliquez ici pour l'ouvrir</a>.</p>
        </div>
    `;
}

// Vue Contact
function renderContact() {
  return `
        <section class="section">
            <h2>📞 Contact</h2>
            <p>Pour toute question, suggestion ou pour partager des annales, utilisez le formulaire ci-dessous.</p>
            <div class="contact-form">
                <input type="text" placeholder="Votre nom" id="name">
                <input type="email" placeholder="Votre email" id="email">
                <textarea rows="5" placeholder="Votre message" id="message"></textarea>
                <button id="send-contact">Envoyer</button>
            </div>
        </section>
    `;
}

// Vue Login
function renderLogin() {
  return `
        <section class="section login-section">
            <h2>🔐 Connexion</h2>
            <p>Choisissez votre mode de connexion :</p>
            <div class="login-options">
                <button class="login-btn student-btn" id="student-login">👨‍🎓 Étudiant</button>
                <button class="login-btn visitor-btn" id="visitor-login">👤 Visiteur</button>
            </div>
            <a href="#accueil" class="back-link">← Retour à l'accueil</a>
            <div class="login-footer-text">
                <p>En vous connectant, vous acceptez nos <a href="#">Conditions d'utilisation</a> et notre <a href="#">Politique de confidentialité</a>.</p>
            </div>
        </section>
    `;
}

// ---------- FILTRES ----------

function initMatiereFilters() {
  const yearBtns = document.querySelectorAll("#filter-years-matiere .year-btn");
  const items = document.querySelectorAll("#annales-matiere-list li");
  if (!yearBtns.length || !items.length) return;
  yearBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      yearBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const annee = btn.dataset.year;
      items.forEach(
        (item) =>
          (item.style.display =
            annee === "all" || item.dataset.annee === annee ? "flex" : "none")
      );
    })
  );
}

function initSpecialiteFilters() {
  const yearBtns = document.querySelectorAll(
    "#filter-years-specialite .year-btn"
  );
  const items = document.querySelectorAll("#annales-specialite-list li");
  if (!yearBtns.length || !items.length) return;
  yearBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      yearBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const annee = btn.dataset.year;
      items.forEach(
        (item) =>
          (item.style.display =
            annee === "all" || item.dataset.annee === annee ? "flex" : "none")
      );
    })
  );
}

// ---------- RECHERCHE ----------

let searchBound = false;
function bindSearch() {
  if (searchBound) return;
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", (e) =>
    filterContent(e.target.value.toLowerCase().trim())
  );
  searchBound = true;
}

function filterContent(term) {
  document.querySelectorAll("[data-search]").forEach((item) => {
    const searchText = item.getAttribute("data-search").toLowerCase();
    item.style.display = term === "" || searchText.includes(term) ? "" : "none";
  });
}

// ---------- UPLOAD ----------
function initUpload() {
  const uploadBtn = document.getElementById("upload-automatisme-btn");
  if (!uploadBtn) return;

  // Créer un input file caché
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "*/*";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);

  uploadBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const base64 = e.target.result;
      const data = {
        name: file.name,
        content: base64,
        type: file.type,
        size: file.size
      };
      localStorage.setItem("uploaded_automatisme", JSON.stringify(data));
      alert("Fichier ajouté pour Automatisme !");
      // Si on est sur la page automatisme, recharger
      if (window.location.hash.includes("automatisme")) {
        window.location.reload();
      }
    };
    reader.readAsDataURL(file);
  });
}

// ---------- ROUTAGE ----------

const app = document.getElementById("app");
function router() {
  const hash = window.location.hash.slice(1) || "accueil";
  const parts = hash.split("/").filter((p) => p.length > 0);

  if (hash === "accueil") {
    app.innerHTML = renderAccueil();
    document.title = "Accueil - Banque d'Annales IUG";
  } else if (hash === "contact") {
    app.innerHTML = renderContact();
    document.title = "Contact - Banque d'Annales IUG";
  } else if (hash === "login") {
    app.innerHTML = renderLogin();
    document.title = "Connexion - Banque d'Annales IUG";
    // Ajout des gestionnaires pour les boutons de connexion
    document.getElementById("student-login")?.addEventListener("click", () => {
      setUser({ role: "etudiant" });
      window.location.hash = "accueil";
    });
    document.getElementById("visitor-login")?.addEventListener("click", () => {
      setUser({ role: "visiteur" });
      window.location.hash = "accueil";
    });
  } else if (parts.length >= 2 && parts[0] === "pdf") {
    if (parts[1] === "uploaded" && parts[2] === "automatisme") {
      const data = localStorage.getItem("uploaded_automatisme");
      if (data) {
        app.innerHTML = renderUploadedPdf(data);
        document.title = "Document uploadé - Automatisme";
      } else {
        window.location.hash = "accueil";
      }
    } else {
      const filePath = parts.join("/");
      app.innerHTML = renderPdf(filePath);
      document.title = "Document - Banque d'Annales IUG";
    }
  } else if (parts.length === 1 && ["esg", "ista", "isa"].includes(parts[0])) {
    app.innerHTML = renderEcole(parts[0]);
    document.title = `${parts[0].toUpperCase()} - Banque d'Annales IUG`;
  } else if (parts.length === 2) {
    const [eId, sId] = parts;
    if (ecoleDetails[eId]) {
      app.innerHTML = renderSpecialite(eId, sId);
      document.title = `Tous les sujets - Banque d'Annales IUG`;
      initSpecialiteFilters();
    } else window.location.hash = "accueil";
  } else if (parts.length === 3) {
    const [eId, sId, nId] = parts;
    if (ecoleDetails[eId]) {
      app.innerHTML = renderNiveau(eId, sId, nId);
      document.title = `Niveau - Banque d'Annales IUG`;
    } else window.location.hash = "accueil";
  } else if (parts.length === 4) {
    const [eId, sId, nId, mId] = parts;
    if (ecoleDetails[eId]) {
      app.innerHTML = renderMatiere(eId, sId, nId, mId);
      document.title = `Matière - Banque d'Annales IUG`;
      initMatiereFilters();
      // Ajouter gestionnaire pour supprimer le fichier uploadé
      const deleteBtn = document.getElementById("delete-upload-btn");
      if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
          localStorage.removeItem("uploaded_automatisme");
          // Recharger la même route
          window.location.hash = hash;
        });
      }
    } else window.location.hash = "accueil";
  } else window.location.hash = "accueil";

  // Forcer le défilement en haut de la page à chaque changement de route
  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkHash = link.getAttribute("href").slice(1);
    if (linkHash === parts[0]) {
      link.style.fontWeight = "bold";
      link.style.textDecoration = "underline";
    } else {
      link.style.fontWeight = "normal";
      link.style.textDecoration = "none";
    }
  });

  bindSearch();
  const input = document.getElementById("search-input");
  if (input) filterContent(input.value.toLowerCase().trim());

  // Mise à jour du statut de connexion dans le header
  updateUserStatus();

  // ---------- BOUTON RETOUR EN HAUT : MISE À JOUR DE LA COULEUR ----------
  const scrollBtn = document.getElementById("scrollToTop");
  if (scrollBtn) {
    let color;
    if (hash === "accueil" || hash === "contact" || hash === "login") {
      color = schoolColors.default;
    } else if (parts[0] === "pdf") {
      color = schoolColors.default;
    } else {
      const ecoleId = parts[0];
      color = schoolColors[ecoleId] || schoolColors.default;
    }
    scrollBtn.style.backgroundColor = color;
  }
}

// ---------- ÉVÉNEMENTS ----------

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (link && link.getAttribute("href")?.startsWith("#")) {
    e.preventDefault();
    window.location.hash = link.getAttribute("href").slice(1);
  }
});
window.addEventListener("hashchange", router);
router();

document.addEventListener("click", (e) => {
  if (e.target.id === "send-contact") {
    e.preventDefault();
    alert("Message envoyé (simulation). Merci !");
  }
});

// ---------- BOUTON RETOUR EN HAUT : LOGIQUE D'AFFICHAGE ----------
const scrollToTopBtn = document.getElementById("scrollToTop");
if (scrollToTopBtn) {
  function toggleScrollToTop() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleScrollToTop);
  toggleScrollToTop(); // Vérifie l'état initial

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Initialiser l'upload après le premier rendu
initUpload();
