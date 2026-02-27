// ---------- DONNÉES ----------

// Données pour l'accueil (écoles) avec filières structurées (nom + id)
const ecoleData = [
    {
        id: "esg",
        nom: "ESG",
        description: "Ecole Supérieure de Gestion",
        filieres: [
            { nom: "Gestion", id: "gestion" },
            { nom: "Comptabilité", id: "compta" },
            { nom: "Banque & Finance", id: "banque" },
            { nom: "Marketing", id: "marketing" }
        ],
        logo: "https://www.univ-iug.com/assets/images/ESG.png"
    },
    {
        id: "ista",
        nom: "ISTA",
        description: "Institut Supérieur des Technologies Avancées",
        filieres: [
            { nom: "Informatique", id: "info" },
            { nom: "Réseaux", id: "reseaux" },
            { nom: "Télécommunications", id: "telecom" },
            { nom: "Intelligence artificielle", id: "ia" }
        ],
        logo: "https://www.univ-iug.com/assets/images/ista-logo.jpg"
    },
    {
        id: "isa",
        nom: "ISA",
        description: "Institut Supérieur des Sciences Appliquées",
        filieres: [
            { nom: "Soins infirmiers", id: "soins" },
            { nom: "Social", id: "social" },
            { nom: "Analyses médicales", id: "analyses" },
            { nom: "Santé publique", id: "sante" }
        ],
        logo: "https://www.univ-iug.com/assets/images/isa-logo.jpg"
    }
];

const annalesDataAccueil = [
    { ecole: "ESG", titre: "Comptabilité - BTS 2024 (normale)", date: "il y a 3 jours", lien: "#" },
    { ecole: "ISTA", titre: "Informatique - BTS 2023 (spéciale)", date: "il y a 1 semaine", lien: "#" },
    { ecole: "ESG", titre: "Gestion - BTS 2022 (normale)", date: "il y a 2 semaines", lien: "#" },
    { ecole: "ISA", titre: "Soins infirmiers - BTS 2024 (normale)", date: "il y a 3 semaines", lien: "#" }
];

// Données pour chaque école (spécialités, niveaux, matières, annales)
const ecoleDetails = {
    esg: {
        nom: "ESG",
        nomComplet: "Ecole Supérieure de Gestion",
        logo: "https://www.univ-iug.com/assets/images/ESG.png",
        specialites: [
            {
                id: "gestion",
                nom: "Gestion",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "maths",
                                nom: "Mathématiques",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2023, session: "spéciale", sujet: "#", corrige: null },
                                    { annee: 2022, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "eco",
                                nom: "Economie",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "droit",
                                nom: "Droit",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: null },
                                    { annee: 2023, session: "spéciale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "comportement",
                                nom: "Comportement organisationnel",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "strategie",
                                nom: "Stratégie d'entreprise",
                                annales: [
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
                                id: "maths",
                                nom: "Mathématiques",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "gestion_fin",
                                nom: "Gestion financière",
                                annales: [
                                    { annee: 2024, session: "spéciale", sujet: "#", corrige: null }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "compta",
                nom: "Comptabilité",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "compta_gen",
                                nom: "Comptabilité générale",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "maths",
                                nom: "Mathématiques",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "compta_approf",
                                nom: "Comptabilité approfondie",
                                annales: [
                                    { annee: 2024, session: "spéciale", sujet: "#", corrige: null },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "banque",
                nom: "Banque & Finance",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "maths_fin",
                                nom: "Mathématiques financières",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "gestion_portef",
                                nom: "Gestion de portefeuille",
                                annales: [
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2022, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "marketing",
                nom: "Marketing",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "fond_marketing",
                                nom: "Fondamentaux du marketing",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2023, session: "spéciale", sujet: "#", corrige: null }
                                ]
                            }
                        ]
                    },
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "marketing_digital",
                                nom: "Marketing digital",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    ista: {
        nom: "ISTA",
        nomComplet: "Institut Supérieur des Technologies Avancées",
        logo: "https://www.univ-iug.com/assets/images/ista-logo.jpg",
        specialites: [
            {
                id: "info",
                nom: "Informatique",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "algo",
                                nom: "Algorithmique",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "prog",
                                nom: "Programmation",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "systeme",
                                nom: "Systèmes d'exploitation",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "bdd",
                                nom: "Bases de données",
                                annales: [
                                    { annee: 2024, session: "spéciale", sujet: "#", corrige: null },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "reseaux",
                nom: "Réseaux",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "archi_res",
                                nom: "Architecture des réseaux",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "secu_res",
                                nom: "Sécurité réseau",
                                annales: [
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "telecom",
                nom: "Télécommunications",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "transmission",
                                nom: "Transmission",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "ia",
                nom: "Intelligence artificielle",
                niveaux: [
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "ml",
                                nom: "Machine Learning",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    isa: {
        nom: "ISA",
        nomComplet: "Institut Supérieur des Sciences Appliquées",
        logo: "https://www.univ-iug.com/assets/images/isa-logo.jpg",
        specialites: [
            {
                id: "soins",
                nom: "Soins infirmiers",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "anatomie",
                                nom: "Anatomie",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "soins_base",
                                nom: "Soins de base",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            },
                            {
                                id: "pharma",
                                nom: "Pharmacologie",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "soins_intensifs",
                                nom: "Soins intensifs",
                                annales: [
                                    { annee: 2024, session: "spéciale", sujet: "#", corrige: null },
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "social",
                nom: "Social",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "pol_sociales",
                                nom: "Politiques sociales",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "analyses",
                nom: "Analyses médicales",
                niveaux: [
                    {
                        id: "bts2",
                        nom: "BTS 2",
                        matieres: [
                            {
                                id: "biochimie",
                                nom: "Biochimie",
                                annales: [
                                    { annee: 2023, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "sante",
                nom: "Santé publique",
                niveaux: [
                    {
                        id: "bts1",
                        nom: "BTS 1",
                        matieres: [
                            {
                                id: "epidemio",
                                nom: "Epidémiologie",
                                annales: [
                                    { annee: 2024, session: "normale", sujet: "#", corrige: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// ---------- FONCTIONS DE RENDU ----------

// Vue Accueil (modifiée pour les liens des filières)
function renderAccueil() {
    const ecoleCards = ecoleData.map(ecole => {
        const searchData = `${ecole.nom} ${ecole.description} ${ecole.filieres.map(f => f.nom).join(' ')}`.toLowerCase();
        const logoHtml = `<img src="${ecole.logo}" alt="${ecole.nom} logo" class="campus-logo-img" onerror="this.style.display='none'">`;
        const filieresHtml = ecole.filieres.map(f => {
            const lien = `#${ecole.id}/${f.id}`;
            return `<li><a href="${lien}">${f.nom}</a></li>`;
        }).join('');
        return `
            <div class="campus-card" data-search="${searchData}">
                <div class="campus-logo">
                    ${logoHtml}
                </div>
                <h3>${ecole.nom}</h3>
                <div class="campus-desc">${ecole.description}</div>
                <ul>
                    ${filieresHtml}
                </ul>
                <a href="#${ecole.id}" class="btn-campus">Voir toutes les filières →</a>
            </div>
        `;
    }).join('');

    const latestList = annalesDataAccueil.map(annale => `
        <li>
            <span class="latest-badge">${annale.ecole}</span>
            <span class="latest-title"><a href="${annale.lien}">${annale.titre}</a></span>
            <span class="latest-meta">${annale.date}</span>
        </li>
    `).join('');

    return `
        <section class="hero" style="background: linear-gradient(135deg, #124e6d, #0b2b40); color: white; text-align: center; padding: 3rem 1rem; margin-bottom: 2rem; border-radius: 0 0 20px 20px;">
            <div class="container">
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">Révisez avec les annales des examens</h2>
                <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto;">Retrouvez tous les sujets et corrigés des années précédentes, classés par école, filière et niveau.</p>
            </div>
        </section>

        <section class="section">
            <h2>🏛️ Choisissez votre école</h2>
            <div class="campus-grid">
                ${ecoleCards}
            </div>
        </section>

        <section class="section">
            <h2>🆕 Dernières annales</h2>
            <ul class="latest-list">
                ${latestList}
            </ul>
            <p style="text-align: right; margin-top: 1rem;"><a href="#">Voir toutes les annales récentes →</a></p>
        </section>

        <section class="section contrib-box">
            <h2 style="border-left: none; text-align: center;">📤 Tu as des annales ?</h2>
            <p>Partage tes sujets et corrigés avec la communauté ! Envoyez-nous vos fichiers (PDF) par email ou via notre formulaire.</p>
            <a href="#contact" class="btn-contrib">Je contribue</a>
        </section>
    `;
}

// Vue École (liste des spécialités, niveaux et 3 premières matières) avec onglets
function renderEcole(ecoleId) {
    const ecole = ecoleDetails[ecoleId];
    if (!ecole) return renderAccueil();

    const logoHtml = `<img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'">`;

    const tabsHtml = ecole.specialites.map(spec => 
        `<button class="tab-btn" data-specialite="${spec.id}">${spec.nom}</button>`
    ).join('');

    let specialitesHtml = '';
    ecole.specialites.forEach(spec => {
        // Construction de la chaîne de recherche pour cette spécialité
        const searchData = `${spec.nom} ${spec.niveaux.map(n => n.nom).join(' ')} ${spec.niveaux.flatMap(n => n.matieres.map(m => m.nom)).join(' ')}`.toLowerCase();
        
        specialitesHtml += `<div class="specialite-section" data-specialite="${spec.id}" data-search="${searchData}">`;
        specialitesHtml += `<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">`;
        specialitesHtml += `<h2 class="specialite-title">${spec.nom}</h2>`;
        specialitesHtml += `<a href="#${ecoleId}/${spec.id}" class="btn-show-all">📋 Tous les sujets</a>`;
        specialitesHtml += `</div>`;

        spec.niveaux.forEach(niveau => {
            specialitesHtml += `<div class="niveau-block">`;
            specialitesHtml += `<h3 class="niveau-title">${niveau.nom}</h3>`;
            specialitesHtml += `<ul class="matieres-list">`;

            // Afficher les 3 premières matières
            niveau.matieres.slice(0, 3).forEach(matiere => {
                const matierePath = `#${ecoleId}/${spec.id}/${niveau.id}/${matiere.id}`;
                specialitesHtml += `<li><a href="${matierePath}" class="matiere-link">${matiere.nom}</a></li>`;
            });

            // Si plus de 3 matières, lien vers la page du niveau
            if (niveau.matieres.length > 3) {
                const niveauPath = `#${ecoleId}/${spec.id}/${niveau.id}`;
                specialitesHtml += `<li><a href="${niveauPath}" class="btn-show-all">➕ Voir toutes les matières (${niveau.matieres.length})</a></li>`;
            }

            specialitesHtml += `</ul>`;
            specialitesHtml += `</div>`;
        });

        specialitesHtml += `</div>`;
    });

    return `
        <div class="campus-header">
            <div class="header-logo">
                ${logoHtml}
            </div>
            <div class="header-text">
                <h1>${ecole.nom} - ${ecole.nomComplet}</h1>
                <p>Choisissez une matière pour voir les annales disponibles.</p>
            </div>
        </div>

        <div class="campus-tabs" id="campus-tabs">
            <button class="tab-btn active" data-specialite="all">Toutes</button>
            ${tabsHtml}
        </div>

        <div id="campus-content">
            ${specialitesHtml}
        </div>
    `;
}

// Vue Niveau (toutes les matières d'un niveau)
function renderNiveau(ecoleId, specialiteId, niveauId) {
    const ecole = ecoleDetails[ecoleId];
    if (!ecole) return renderAccueil();

    let foundSpecialite = null;
    let foundNiveau = null;
    for (const spec of ecole.specialites) {
        if (spec.id === specialiteId) {
            foundSpecialite = spec;
            for (const niv of spec.niveaux) {
                if (niv.id === niveauId) {
                    foundNiveau = niv;
                    break;
                }
            }
            break;
        }
    }

    if (!foundNiveau) {
        window.location.hash = ecoleId;
        return '';
    }

    const matieresList = foundNiveau.matieres.map(matiere => {
        const matierePath = `#${ecoleId}/${specialiteId}/${niveauId}/${matiere.id}`;
        return `<li data-search="${matiere.nom.toLowerCase()}"><a href="${matierePath}" class="matiere-link">${matiere.nom}</a></li>`;
    }).join('');

    return `
        <div class="campus-header" style="margin-bottom: 1rem;">
            <div class="header-logo">
                <img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'">
            </div>
            <div class="header-text">
                <h1>${foundSpecialite.nom} - ${foundNiveau.nom}</h1>
                <p>${ecole.nom} - Toutes les matières</p>
            </div>
        </div>
        <div style="margin-bottom: 1rem;">
            <a href="#${ecoleId}" class="btn-campus">← Retour à l'école</a>
        </div>

        <section class="section">
            <h2>📚 Matières disponibles</h2>
            <ul class="matieres-list" style="list-style: none; padding: 0;">
                ${matieresList}
            </ul>
        </section>
    `;
}

// Vue Spécialité (tous les sujets d'une spécialité)
function renderSpecialite(ecoleId, specialiteId) {
    const ecole = ecoleDetails[ecoleId];
    if (!ecole) return renderAccueil();

    let foundSpecialite = null;
    for (const spec of ecole.specialites) {
        if (spec.id === specialiteId) {
            foundSpecialite = spec;
            break;
        }
    }
    if (!foundSpecialite) {
        window.location.hash = ecoleId;
        return '';
    }

    // Collecter toutes les annales de la spécialité
    let annales = [];
    foundSpecialite.niveaux.forEach(niveau => {
        niveau.matieres.forEach(matiere => {
            matiere.annales.forEach(annale => {
                annales.push({
                    ...annale,
                    niveau: niveau.nom,
                    niveauId: niveau.id,
                    matiere: matiere.nom,
                    matiereId: matiere.id
                });
            });
        });
    });

    // Trier par année décroissante
    annales.sort((a, b) => b.annee - a.annee);

    // Années disponibles pour filtre
    const annees = [...new Set(annales.map(a => a.annee))].sort((a, b) => b - a);

    const annalesList = annales.map(annale => {
        const matierePath = `#${ecoleId}/${specialiteId}/${annale.niveauId}/${annale.matiereId}`;
        const searchData = `${annale.matiere} ${annale.niveau} ${annale.annee}`.toLowerCase();
        return `
            <li data-annee="${annale.annee}" data-search="${searchData}">
                <span class="annale-badge">${annale.annee} - ${annale.session}</span>
                <span class="annale-matiere">${annale.matiere} (${annale.niveau})</span>
                <span class="annale-links">
                    <a href="${annale.sujet}" target="_blank">📄 Sujet</a>
                    ${annale.corrige ? `<a href="${annale.corrige}" target="_blank">✅ Corrigé</a>` : ''}
                </span>
            </li>
        `;
    }).join('');

    const filterButtons = annees.map(annee => 
        `<button class="year-btn" data-year="${annee}">${annee}</button>`
    ).join('');

    return `
        <div class="campus-header" style="margin-bottom: 1rem;">
            <div class="header-logo">
                <img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'">
            </div>
            <div class="header-text">
                <h1>${foundSpecialite.nom} - Tous les sujets</h1>
                <p>${ecole.nom}</p>
            </div>
        </div>
        <div style="margin-bottom: 1rem;">
            <a href="#${ecoleId}" class="btn-campus">← Retour à l'école</a>
        </div>

        <div class="filter-years" id="filter-years-specialite">
            <span>📅 Filtrer par année :</span>
            <button class="year-btn active" data-year="all">Toutes</button>
            ${filterButtons}
        </div>

        <section class="section">
            <h2>📋 Anciens sujets d'examen</h2>
            <ul class="annales-list" id="annales-specialite-list" style="list-style: none; padding: 0;">
                ${annalesList}
            </ul>
        </section>
    `;
}

// Vue Matière (liste des épreuves) avec filtre par année
function renderMatiere(ecoleId, specialiteId, niveauId, matiereId) {
    const ecole = ecoleDetails[ecoleId];
    if (!ecole) return renderAccueil();

    let foundMatiere = null;
    let foundSpecialite = null;
    let foundNiveau = null;
    for (const spec of ecole.specialites) {
        if (spec.id === specialiteId) {
            foundSpecialite = spec;
            for (const niv of spec.niveaux) {
                if (niv.id === niveauId) {
                    foundNiveau = niv;
                    for (const mat of niv.matieres) {
                        if (mat.id === matiereId) {
                            foundMatiere = mat;
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
    }

    if (!foundMatiere) {
        window.location.hash = ecoleId;
        return '';
    }

    // Récupérer les années uniques des annales
    const annees = [...new Set(foundMatiere.annales.map(a => a.annee))].sort((a,b) => b - a);

    const annalesList = foundMatiere.annales.map(annale => `
        <li data-annee="${annale.annee}" data-search="${annale.annee} ${annale.session}">
            <span class="annale-badge">${annale.annee} - ${annale.session}</span>
            <span class="annale-links">
                <a href="${annale.sujet}" target="_blank">📄 Sujet</a>
                ${annale.corrige ? `<a href="${annale.corrige}" target="_blank">✅ Corrigé</a>` : ''}
            </span>
        </li>
    `).join('');

    const filterButtons = annees.map(annee => 
        `<button class="year-btn" data-year="${annee}">${annee}</button>`
    ).join('');

    return `
        <div class="campus-header" style="margin-bottom: 1rem;">
            <div class="header-logo">
                <img src="${ecole.logo}" alt="${ecole.nom} logo" class="header-logo-img" onerror="this.style.display='none'">
            </div>
            <div class="header-text">
                <h1>${foundMatiere.nom}</h1>
                <p>${foundSpecialite.nom} - ${foundNiveau.nom} - ${ecole.nom}</p>
            </div>
        </div>
        <div style="margin-bottom: 1rem;">
            <a href="#${ecoleId}" class="btn-campus">← Retour à l'école</a>
        </div>

        <div class="filter-years" id="filter-years-matiere">
            <span>📅 Filtrer par année :</span>
            <button class="year-btn active" data-year="all">Toutes</button>
            ${filterButtons}
        </div>

        <section class="section">
            <h2>📋 Épreuves disponibles</h2>
            <ul class="annales-list" id="annales-matiere-list" style="list-style: none; padding: 0;">
                ${annalesList}
            </ul>
        </section>
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

function initEcoleFilters() {
    const tabs = document.querySelectorAll('.campus-tabs .tab-btn');
    const specialiteSections = document.querySelectorAll('.specialite-section');

    if (!tabs.length || !specialiteSections.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const specialite = tab.dataset.specialite;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            specialiteSections.forEach(section => {
                if (specialite === 'all' || section.dataset.specialite === specialite) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

function initMatiereFilters() {
    const yearBtns = document.querySelectorAll('#filter-years-matiere .year-btn');
    const annalesItems = document.querySelectorAll('#annales-matiere-list li');

    if (!yearBtns.length || !annalesItems.length) return;

    yearBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const annee = btn.dataset.year;

            yearBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            annalesItems.forEach(item => {
                if (annee === 'all' || item.dataset.annee === annee) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initSpecialiteFilters() {
    const yearBtns = document.querySelectorAll('#filter-years-specialite .year-btn');
    const annalesItems = document.querySelectorAll('#annales-specialite-list li');

    if (!yearBtns.length || !annalesItems.length) return;

    yearBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const annee = btn.dataset.year;

            yearBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            annalesItems.forEach(item => {
                if (annee === 'all' || item.dataset.annee === annee) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ---------- RECHERCHE ----------

let searchBound = false;

function bindSearch() {
    if (searchBound) return;
    const input = document.getElementById('search-input');
    if (!input) return;
    input.addEventListener('input', (e) => {
        filterContent(e.target.value.toLowerCase().trim());
    });
    searchBound = true;
}

function filterContent(term) {
    const items = document.querySelectorAll('[data-search]');
    items.forEach(item => {
        const searchText = item.getAttribute('data-search').toLowerCase();
        if (term === '' || searchText.includes(term)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// ---------- ROUTAGE ----------

const app = document.getElementById('app');

function router() {
    const hash = window.location.hash.slice(1) || 'accueil';
    const parts = hash.split('/').filter(p => p.length > 0);

    if (hash === 'accueil') {
        app.innerHTML = renderAccueil();
        document.title = 'Accueil - Banque d\'Annales IUG';
    } else if (hash === 'contact') {
        app.innerHTML = renderContact();
        document.title = 'Contact - Banque d\'Annales IUG';
    } else if (parts.length === 1 && (parts[0] === 'esg' || parts[0] === 'ista' || parts[0] === 'isa')) {
        // Route école
        app.innerHTML = renderEcole(parts[0]);
        document.title = `${parts[0].toUpperCase()} - Banque d'Annales IUG`;
    } else if (parts.length === 2) {
        // Route spécialité : ecole/specialite
        const [ecoleId, specialiteId] = parts;
        if (ecoleDetails[ecoleId]) {
            app.innerHTML = renderSpecialite(ecoleId, specialiteId);
            document.title = `Tous les sujets - ${specialiteId} - Banque d'Annales IUG`;
            initSpecialiteFilters();
        } else {
            window.location.hash = 'accueil';
        }
    } else if (parts.length === 3) {
        // Route niveau : ecole/specialite/niveau
        const [ecoleId, specialiteId, niveauId] = parts;
        if (ecoleDetails[ecoleId]) {
            app.innerHTML = renderNiveau(ecoleId, specialiteId, niveauId);
            document.title = `Niveau - Banque d'Annales IUG`;
        } else {
            window.location.hash = 'accueil';
        }
    } else if (parts.length === 4) {
        // Route matière : ecole/specialite/niveau/matiere
        const [ecoleId, specialiteId, niveauId, matiereId] = parts;
        if (ecoleDetails[ecoleId]) {
            app.innerHTML = renderMatiere(ecoleId, specialiteId, niveauId, matiereId);
            document.title = `Matière - Banque d'Annales IUG`;
            initMatiereFilters();
        } else {
            window.location.hash = 'accueil';
        }
    } else {
        // Route inconnue
        window.location.hash = 'accueil';
    }

    // Mettre à jour la classe active sur les liens de navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHash = link.getAttribute('href').slice(1);
        if (linkHash === parts[0]) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
        } else {
            link.style.fontWeight = 'normal';
            link.style.textDecoration = 'none';
        }
    });

    // Réappliquer la recherche après le changement de page
    bindSearch();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        filterContent(searchInput.value.toLowerCase().trim());
    }
}

// ---------- GESTION DE LA NAVIGATION ----------

// Intercepter les clics sur les liens internes pour utiliser le hash
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const hash = link.getAttribute('href').slice(1);
        window.location.hash = hash;
    }
});

// Écouter les changements de hash
window.addEventListener('hashchange', router);

// Premier rendu
router();

// Formulaire de contact (simulation)
document.addEventListener('click', (e) => {
    if (e.target.id === 'send-contact') {
        e.preventDefault();
        alert('Message envoyé (simulation). Merci !');
    }
});
