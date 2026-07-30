// Centralise toutes les informations métier du site.
// Mettez à jour ce fichier avec les données confirmées par ND Builtshine.

export const COMPANY = {
  name: 'ND Builtshine',
  tagline: 'Incubateur de solutions techniques',
  address: 'BP 30320, Yaoundé, Cameroun',
  phone: '+237 6XX XXX XXX',
  email: 'contact@ndbuiltshine.cm',
  whatsapp: 'https://wa.me/237000000000',
  linkedin: 'https://www.linkedin.com/company/nd-builtshine',
}

export const STATS = [
  { value: '3', label: "Pôles d'expertise" },
  { value: '5', label: 'Villes - projet AEP en cours' },
  { value: '400kV', label: 'Ligne pilotée en groupement' },
]

export const EXPERTISES = [
  {
    id: 'eau',
    code: '01 / EAU',
    title: 'Eau & Assainissement',
    summary:
      "Études d'alimentation en eau potable, diagnostic réseau, assistance à maîtrise d'ouvrage.",
    services: [
      'Adduction en eau potable (AEP)',
      'Assainissement urbain et rural',
      'Suivi-évaluation de projets bailleurs',
    ],
  },
  {
    id: 'energie',
    code: '02 / ÉNERGIE',
    title: 'Énergie & Transport électrique',
    summary:
      "Maîtrise d'oeuvre de lignes de transport et études de réseaux moyenne et haute tension.",
    services: [
      'Lignes HT/MT - études et supervision',
      'Postes de transformation',
      'Groupements internationaux',
    ],
  },
  {
    id: 'infra',
    code: '03 / INFRA',
    title: 'Infrastructures & BTP',
    summary:
      'Études de structure béton armé et charpente métallique, diagnostic bâtiment.',
    services: [
      'Béton armé et charpente métallique',
      'Diagnostic et réhabilitation',
      'Suivi de travaux',
    ],
  },
]

export const TEAM = [
  { initials: 'EN', name: 'Emmanuel Ngameni', role: 'Expert Eau & Assainissement' },
  { initials: 'MS', name: 'Mérimé Souffo', role: 'Consultant Projets' },
]

export const PARTNERS = [
  { name: 'ATECS', desc: 'Ingénierie technique & conseil' },
  { name: 'MONENCO', desc: "Protocoles d'infrastructure internationaux" },
  { name: 'GNEX', desc: 'Systèmes énergie & environnement' },
]

export const PROJECTS = [
  {
    id: 'aep-5-villes',
    category: 'eau',
    badge: 'EAU · INFRASTRUCTURE',
    title: 'Alimentation en eau potable de 5 villes',
    location: 'Dschang, Yabassi, Maroua, Garoua, Garoua-Boulaï',
    role: "Bureau d'études",
    client: null,
    status: 'EN COURS',
    impact:
      "Sécuriser l'accès à l'eau potable pour cinq centres urbains et renforcer la santé publique locale.",
  },
  {
    id: 'ligne-400kv',
    category: 'energie',
    badge: 'ÉNERGIE · RÉSEAU',
    title: 'Ligne de transport 400kV Nachtigal-Bafoussam',
    location: 'Corridor Nachtigal - Bafoussam',
    role: "Maîtrise d'oeuvre, en groupement",
    client: 'MINEE, 2021',
    status: 'ATTRIBUÉ',
    impact:
      'Renforcer la capacité du réseau national pour alimenter les pôles régionaux en électricité stable.',
  },
  {
    id: 'camtel-telecom',
    category: 'infra',
    badge: 'INFRASTRUCTURES · TÉLÉCOM',
    title: 'Étude technique - infrastructures télécoms',
    location: 'Détails à confirmer',
    role: 'Détails à confirmer avec vous',
    client: 'CAMTEL, 2024',
    status: 'EN COURS',
    impact:
      'À préciser - projet identifié via une communication officielle CAMTEL, description à valider.',
  },
]
