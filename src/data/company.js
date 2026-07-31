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
  hours: [
    { day: 'Lundi — Vendredi', time: '8h00 – 18h00' },
    { day: 'Samedi', time: '9h00 – 13h00' },
    { day: 'Dimanche', time: 'Fermé' },
  ],
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
    number: '01',
    icon: 'water',
    title: 'Eau & Assainissement',
    summary:
      "Études d'alimentation en eau potable, diagnostic réseau, assistance à maîtrise d'ouvrage.",
    description:
      "Nous accompagnons les maîtres d'ouvrage publics et privés sur l'ensemble du cycle de vie des ouvrages hydrauliques : diagnostic de terrain, dimensionnement des réseaux, rédaction des dossiers d'appel d'offres et suivi de l'exécution. Notre approche combine rigueur normative et connaissance fine des contraintes locales — pression disponible, qualité des sols, accès aux sources — pour livrer des infrastructures qui tiennent dans la durée.",
    services: [
      'Adduction en eau potable (AEP)',
      'Assainissement urbain et rural',
      'Suivi-évaluation de projets bailleurs',
    ],
    advantages: ['Diagnostic terrain', 'Dossiers bailleurs', 'Suivi d’exécution'],
    image: '/home/project-lab.png',
  },
  {
    id: 'energie',
    code: '02 / ÉNERGIE',
    number: '02',
    icon: 'energy',
    title: 'Énergie & Transport électrique',
    summary:
      "Maîtrise d'oeuvre de lignes de transport et études de réseaux moyenne et haute tension.",
    description:
      "Nos équipes interviennent en groupement sur des lignes de transport et des postes de transformation à forte exigence technique. De l'étude de tracé à la supervision de chantier, nous structurons des dossiers défendables devant les bailleurs et les autorités de régulation, avec une attention constante portée à la fiabilité du réseau et à la sécurité d'exécution.",
    services: [
      'Lignes HT/MT - études et supervision',
      'Postes de transformation',
      'Groupements internationaux',
    ],
    advantages: ['Études de tracé', 'Supervision de chantier', 'Groupements internationaux'],
    image: '/hero/site-4.jpg',
  },
  {
    id: 'infra',
    code: '03 / INFRA',
    number: '03',
    icon: 'structure',
    title: 'Infrastructures & BTP',
    summary:
      'Études de structure béton armé et charpente métallique, diagnostic bâtiment.',
    description:
      "Du diagnostic de bâtiments existants à la conception de structures neuves, nous dimensionnons des ouvrages en béton armé et charpente métallique adaptés aux usages publics et privés. Notre suivi de travaux garantit la cohérence entre les plans d'exécution et la réalité du chantier, jusqu'à la réception finale.",
    services: [
      'Béton armé et charpente métallique',
      'Diagnostic et réhabilitation',
      'Suivi de travaux',
    ],
    advantages: ['Diagnostic bâtiment', 'Réhabilitation', 'Suivi de travaux'],
    image: '/home/project-justice.jpg',
  },
]

export const VALUES = [
  {
    id: 'rigueur',
    title: 'Rigueur',
    text: 'Chaque hypothèse technique est vérifiée, documentée et défendable devant un comité.',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    text: 'Nous adaptons les meilleures pratiques internationales aux réalités du terrain africain.',
  },
  {
    id: 'impact',
    title: 'Impact',
    text: "Nos missions se mesurent à l'usage réel des infrastructures, pas seulement à leur livraison.",
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    text: 'Nous travaillons en groupement et en transparence avec maîtres d’ouvrage et partenaires.',
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
    image: '/home/project-lab.png',
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
    image: '/hero/site-4.jpg',
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
    image: '/home/project-justice.jpg',
    impact:
      'À préciser - projet identifié via une communication officielle CAMTEL, description à valider.',
  },
]

export const FAQ = [
  {
    question: 'Quels types de projets prenez-vous en charge ?',
    answer:
      "Nous intervenons sur des missions d'études, de maîtrise d'oeuvre et de suivi de travaux dans les domaines de l'eau, de l'énergie et des infrastructures, pour des maîtres d'ouvrage publics, privés ou en groupement.",
  },
  {
    question: 'Travaillez-vous en dehors du Cameroun ?',
    answer:
      'Oui, nous mobilisons notre expertise en Afrique centrale via des partenariats et groupements techniques, en particulier sur les projets financés par des bailleurs internationaux.',
  },
  {
    question: 'Quel est le délai moyen de réponse à une demande ?',
    answer:
      'Nous répondons généralement sous 48 heures ouvrées avec un premier retour sur la faisabilité et les prochaines étapes de votre projet.',
  },
  {
    question: 'Proposez-vous un accompagnement pour les dossiers bailleurs ?',
    answer:
      "Oui, nous structurons des dossiers techniques complets — diagnostics, notes de calcul, plans — conformes aux exigences des bailleurs de fonds internationaux.",
  },
  {
    question: 'Puis-je demander une simple consultation technique ?',
    answer:
      'Bien sûr. Le formulaire de contact permet de préciser la nature de votre demande, y compris une consultation ponctuelle sans engagement de mission complète.',
  },
]
