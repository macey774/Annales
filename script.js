// ---------- DONNÉES ----------

// Couleurs principales pour chaque école
const schoolColors = {
  esg: "#2e7d32", // vert forêt
  ista: "#ed6a02", // orange
  isa: "#0b2b40" // bleu foncé
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

// ---------- FONCTIONS DE RENDU ----------

// Vue Accueil
function renderAccueil() {
  const ecoleCards = ecoleData
    .map((ecole) => {
      const searchData = `${ecole.nom} ${
        ecole.description
      } ${ecole.filieres.map((f) => f.nom).join(" ")}`.toLowerCase();
      const logoHtml = `<img src="${ecole.logo}" alt="${ecole.nom} logo" class="campus-logo-img" onerror="this.style.display='none'">`;
      const filieresHtml = ecole.filieres
        .slice(0, 4)
        .map(
          (f) => `<li><span class="campus-filiere-text">${f.nom}</span></li>`
        )
        .join("");
      return `
            <a href="#${ecole.id}" class="campus-card" data-search="${searchData}">
                <div class="campus-logo">${logoHtml}</div>
                <h3>${ecole.nom}</h3>
                <div class="campus-desc">${ecole.description}</div>
                <ul>${filieresHtml}</ul>
            </a>
        `;
    })
    .join("");

  const latestList = annalesDataAccueil
    .map(
      (annale) => `
        <li>
            <span class="latest-badge">${annale.ecole}</span>
            <span class="latest-title"><a href="${annale.lien}">${annale.titre}</a></span>
            <span class="latest-meta">${annale.date}</span>
        </li>
    `
    )
    .join("");

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
                            <a href="#${ecoleId}/${spec.id}/bts1" class="btn-bts">BTS 1</a>
                            <a href="#${ecoleId}/${spec.id}/bts2" class="btn-bts">BTS 2</a>
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

// Vue Niveau
function renderNiveau(ecoleId, specialiteId, niveauId) {
  const ecole = ecoleDetails[ecoleId];
  if (!ecole) return renderAccueil();

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
    .map(
      (m) =>
        `<li data-search="${m.nom.toLowerCase()}"><a href="#${ecoleId}/${specialiteId}/${niveauId}/${
          m.id
        }" class="matiere-link">${m.nom}</a></li>`
    )
    .join("");

  return `
        <div class="campus-header" style="background: linear-gradient(135deg, ${schoolColors[ecoleId]}, ${schoolColors[ecoleId]}dd);">
            <div class="header-logo"><img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'"></div>
            <div class="header-text"><h1>${foundSpecialite.nom} - ${foundNiveau.nom}</h1><p>${ecole.nomComplet} - Toutes les matières</p></div>
        </div>
        <a href="#${ecoleId}" class="btn-campus">← Retour à l'école</a>
        <section class="section"><h2>📚 Matières disponibles</h2><ul class="matieres-list">${matieresList}</ul></section>
    `;
}

// Vue Spécialité
function renderSpecialite(ecoleId, specialiteId) {
  const ecole = ecoleDetails[ecoleId];
  if (!ecole) return renderAccueil();

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
        }"><span class="annale-badge">${a.annee} - ${
          a.session
        }</span><span class="annale-matiere">${a.matiere} (${
          a.niveau
        })</span><span class="annale-links"><a href="${
          a.sujet
        }" target="_blank">📄 Sujet</a>${
          a.corrige
            ? `<a href="${a.corrige}" target="_blank">✅ Corrigé</a>`
            : ""
        }</span></li>`
    )
    .join("");
  const filterButtons = annees
    .map((y) => `<button class="year-btn" data-year="${y}">${y}</button>`)
    .join("");

  return `
        <div class="campus-header" style="background: linear-gradient(135deg, ${schoolColors[ecoleId]}, ${schoolColors[ecoleId]}dd);">
            <div class="header-logo"><img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'"></div>
            <div class="header-text"><h1>${foundSpecialite.nom} - Tous les sujets</h1><p>${ecole.nomComplet}</p></div>
        </div>
        <a href="#${ecoleId}" class="btn-campus">← Retour à l'école</a>
        <div class="filter-years"><span>📅 Filtrer par année :</span><button class="year-btn active" data-year="all">Toutes</button>${filterButtons}</div>
        <section class="section"><h2>📋 Anciens sujets d'examen</h2><ul class="annales-list" id="annales-specialite-list">${annalesList}</ul></section>
    `;
}

// Vue Matière
function renderMatiere(ecoleId, specialiteId, niveauId, matiereId) {
  const ecole = ecoleDetails[ecoleId];
  if (!ecole) return renderAccueil();

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
        `<li data-annee="${a.annee}"><span class="annale-badge">${a.annee} - ${
          a.session
        }</span><span class="annale-links"><a href="${
          a.sujet
        }" target="_blank">📄 Sujet</a>${
          a.corrige
            ? `<a href="${a.corrige}" target="_blank">✅ Corrigé</a>`
            : ""
        }</span></li>`
    )
    .join("");
  const filterButtons = annees
    .map((y) => `<button class="year-btn" data-year="${y}">${y}</button>`)
    .join("");

  return `
        <div class="campus-header" style="background: linear-gradient(135deg, ${schoolColors[ecoleId]}, ${schoolColors[ecoleId]}dd);">
            <div class="header-logo"><img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'"></div>
            <div class="header-text"><h1>${foundMatiere.nom}</h1><p>${foundSpecialite.nom} - ${foundNiveau.nom} - ${ecole.nomComplet}</p></div>
        </div>
        <a href="#${ecoleId}" class="btn-campus">← Retour à l'école</a>
        <div class="filter-years"><span>📅 Filtrer par année :</span><button class="year-btn active" data-year="all">Toutes</button>${filterButtons}</div>
        <section class="section"><h2>📋 Épreuves disponibles</h2><ul class="annales-list" id="annales-matiere-list">${annalesList}</ul></section>
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
    } else window.location.hash = "accueil";
  } else window.location.hash = "accueil";

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
