/**
 * i18n — Dictionnaire centralisé des traductions
 * Organisé par composant/section pour maintenabilité
 */
import type { Locale } from './languages';

const strings = {
  // ── Navigation ──────────────────────────────────────────
  nav: {
    projets:    { fr: 'Projets',    en: 'Projects',   it: 'Progetti' },
    studio:     { fr: 'Expertise',   en: 'Expertise',  it: 'Competenze' },
    processus:  { fr: 'À propos',   en: 'About',      it: 'Chi Siamo' },
    contact:    { fr: 'Contact',    en: 'Contact',    it: 'Contatti' },
    accueil:    { fr: 'Accueil',    en: 'Home',       it: 'Home' },
    rdv:        { fr: 'Rendez-vous', en: 'Book a Call', it: 'Appuntamento' },
    prendreRdv: { fr: 'Prendre Rendez-vous', en: 'Book a Consultation', it: 'Prenota un Appuntamento' },
  },

  // ── Branding ────────────────────────────────────────────
  brand: {
    name:    { fr: 'SB Design Riviera', en: 'SB Design Riviera', it: 'SB Design Riviera' },
    tagline: { fr: 'Architecture & Property Enhancement', en: 'Architecture & Property Enhancement', it: 'Architecture & Property Enhancement' },
  },

  // ── Hero ────────────────────────────────────────────────
  hero: {
    title: {
      fr: 'Créer des espaces\nqui inspirent',
      en: 'Creating spaces\nthat inspire',
      it: 'Creare spazi\nche ispirano',
    },
    subtitle1: {
      fr: 'Architecture & Property Enhancement — Côte d\'Azur',
      en: 'Architecture & Property Enhancement — French Riviera',
      it: 'Architecture & Property Enhancement — Costa Azzurra',
    },
    subtitle2: {
      fr: 'Conception et transformation de résidences secondaires haut de gamme pour propriétaires et investisseurs internationaux.',
      en: 'Design and transformation of high-end secondary residences for private owners and international investors.',
      it: 'Progettazione e trasformazione di residenze secondarie di lusso per proprietari e investitori internazionali.',
    },
    cta1: { fr: 'Découvrir nos projets', en: 'Discover Our Projects', it: 'Scopri i Nostri Progetti' },
    cta2: { fr: 'Nous contacter', en: 'Contact Us', it: 'Contattaci' },
    scroll: { fr: 'Scroll', en: 'Scroll', it: 'Scroll' },
  },

  // ── Section 01 — Manifeste ──────────────────────────────
  manifeste: {
    number:    { fr: '01 — Notre Vision',  en: '01 — Our Vision',  it: '01 — La Nostra Visione' },
    title:     { fr: 'Notre Vision',       en: 'Our Vision',       it: 'La Nostra Visione' },
    p1: {
      fr: 'SB Design Riviera est née d\'une vision : concevoir des résidences secondaires qui allient <em>excellence architecturale</em> et <em>intelligence patrimoniale</em>.',
      en: 'SB Design Riviera was founded on a clear vision: to design secondary residences that combine <em>architectural excellence</em> with <em>strategic asset enhancement</em>.',
      it: 'SB Design Riviera nasce da una visione chiara: progettare residenze secondarie che uniscono <em>eccellenza architettonica</em> e <em>valorizzazione strategica</em>.',
    },
    p2: {
      fr: 'Sur la Côte d\'Azur, chaque propriété raconte une histoire de lumière, de paysage et d\'élégance. Notre rôle est de <em>révéler ce potentiel</em> — et de l\'amplifier.',
      en: 'On the French Riviera, every property tells a story of light, landscape and elegance. Our role is to <em>reveal this potential</em> — and amplify it.',
      it: 'Sulla Costa Azzurra, ogni proprietà racconta una storia di luce, paesaggio ed eleganza. Il nostro ruolo è <em>rivelare questo potenziale</em> — e amplificarlo.',
    },
    p3: {
      fr: 'Nous accompagnons propriétaires privés et investisseurs internationaux dans la refonte et la valorisation de biens haut de gamme. Chaque projet est pensé comme un équilibre : émotion esthétique, cohérence fonctionnelle et performance durable.',
      en: 'We guide private owners and international investors through the transformation of high-end properties. Every project seeks balance: aesthetic emotion, functional coherence and long-term value.',
      it: 'Accompagniamo proprietari privati e investitori internazionali nella trasformazione e valorizzazione di beni di lusso. Ogni progetto è concepito come un equilibrio: emozione estetica, coerenza funzionale e performance duratura.',
    },
    p4: {
      fr: 'Plus qu\'un studio d\'architecture, SB Design Riviera est un partenaire de transformation.',
      en: 'SB Design Riviera is more than an architecture studio. It is a transformation partner.',
      it: 'SB Design Riviera è più di uno studio di architettura. È un partner di trasformazione.',
    },
    quote: {
      fr: 'Nous créons des lieux qui inspirent — et qui prennent de la valeur.',
      en: 'We create spaces that inspire — and grow in value.',
      it: 'Creiamo luoghi che ispirano — e che acquistano valore.',
    },
    value1Title: { fr: 'Excellence Architecturale', en: 'Architectural Excellence', it: 'Eccellenza Architettonica' },
    value1Desc: {
      fr: 'Conception sur-mesure alliant esthétique contemporaine, patrimoine méditerranéen et standards internationaux.',
      en: 'Bespoke design combining contemporary aesthetics, Mediterranean heritage and international standards.',
      it: 'Design su misura che unisce estetica contemporanea, patrimonio mediterraneo e standard internazionali.',
    },
    value2Title: { fr: 'Performance Patrimoniale', en: 'Asset Performance', it: 'Performance Patrimoniale' },
    value2Desc: {
      fr: 'Chaque intervention est pensée comme un investissement : valorisation mesurable, ROI optimisé, actif durable.',
      en: 'Every intervention is designed as an investment: measurable enhancement, optimised ROI, lasting asset.',
      it: 'Ogni intervento è pensato come un investimento: valorizzazione misurabile, ROI ottimizzato, asset durevole.',
    },
    value3Title: { fr: 'Vision Internationale', en: 'International Vision', it: 'Visione Internazionale' },
    value3Desc: {
      fr: 'Une clientèle internationale, des partenaires d\'excellence et une approche globale du marché premium Côte d\'Azur.',
      en: 'An international clientele, world-class partners and a global approach to the French Riviera premium market.',
      it: 'Una clientela internazionale, partner d\'eccellenza e un approccio globale al mercato premium della Costa Azzurra.',
    },
    imgLabel1: { fr: 'Rénovation Luxueuse', en: 'Luxury Renovation', it: 'Ristrutturazione di Lusso' },
    imgLabel2: { fr: 'Construction Haut de Gamme', en: 'Premium Construction', it: 'Costruzione di Prestigio' },
    imgDesc1: {
      fr: 'Transformation de résidences d\'exception sur la Côte d\'Azur',
      en: 'Transforming exceptional residences on the French Riviera',
      it: 'Trasformazione di residenze d\'eccezione sulla Costa Azzurra',
    },
    imgDesc2: {
      fr: 'Conception architecturale pour des biens de prestige',
      en: 'Architectural design for prestigious properties',
      it: 'Progettazione architettonica per beni di prestigio',
    },
    imgDiscover: { fr: 'Découvrir nos expertises', en: 'Discover Our Expertise', it: 'Scopri le Nostre Competenze' },
  },

  // ── Section 02 — Notre Approche ─────────────────────────
  approche: {
    number:  { fr: '02 — Notre Approche', en: '02 — Our Approach', it: '02 — Il Nostro Approccio' },
    title:   { fr: 'Notre', en: 'Our', it: 'Il Nostro' },
    morphWords: {
      fr: ['Approche', 'Méthode', 'Expertise'],
      en: ['Approach', 'Method', 'Expertise'],
      it: ['Approccio', 'Metodo', 'Expertise'],
    },
    subtitle: {
      fr: 'Trois expertises complémentaires pour concevoir, transformer et valoriser votre patrimoine',
      en: 'Three complementary expertises to design, transform and enhance your property assets',
      it: 'Tre competenze complementari per progettare, trasformare e valorizzare il vostro patrimonio',
    },
    // 2.1
    s1Title1:   { fr: 'Conception', en: 'Architectural', it: 'Concezione' },
    s1Title2:   { fr: 'Architecturale', en: 'Design', it: 'Architettonica' },
    s1Tag1:     { fr: 'Plans & Rendus 3D', en: '3D Plans & Renders', it: 'Piani & Render 3D' },
    s1Tag2:     { fr: 'Permis & Autorisations', en: 'Permits & Approvals', it: 'Permessi & Autorizzazioni' },
    s1Tag3:     { fr: 'Design Intérieur', en: 'Interior Design', it: 'Design d\'Interni' },
    s1Desc: {
      fr: 'De la vision initiale aux plans d\'exécution, nous concevons des espaces qui conjuguent esthétique méditerranéenne et exigences contemporaines. Chaque projet intègre dès la conception une réflexion sur la valorisation patrimoniale du bien — transformer un lieu de vie en actif durable.',
      en: 'From initial vision to execution plans, we design spaces that combine Mediterranean aesthetics with contemporary standards. Every project integrates from conception a focus on asset enhancement — transforming a living space into a lasting asset.',
      it: 'Dalla visione iniziale ai piani esecutivi, progettiamo spazi che coniugano estetica mediterranea ed esigenze contemporanee. Ogni progetto integra fin dalla concezione una riflessione sulla valorizzazione patrimoniale — trasformare un luogo di vita in un asset durevole.',
    },
    s1Bullet1: { fr: 'Études architecturales complètes et rendus photoréalistes', en: 'Complete architectural studies and photorealistic renders', it: 'Studi architettonici completi e render fotorealistici' },
    s1Bullet2: { fr: 'Optimisation des volumes et de la lumière naturelle', en: 'Volume and natural light optimisation', it: 'Ottimizzazione dei volumi e della luce naturale' },
    s1Bullet3: { fr: 'Sélection de matériaux nobles et durables', en: 'Selection of premium and sustainable materials', it: 'Selezione di materiali pregiati e sostenibili' },
    // 2.2
    s2Title1:   { fr: 'Interior', en: 'Interior', it: 'Interior' },
    s2Title2:   { fr: 'Refinement', en: 'Refinement', it: 'Refinement' },
    s2Tag1:     { fr: 'Mobilier Premium', en: 'Premium Furniture', it: 'Mobili Premium' },
    s2Tag2:     { fr: 'Partenaires d\'Excellence', en: 'World-Class Partners', it: 'Partner d\'Eccellenza' },
    s2Tag3:     { fr: 'Clé en Main', en: 'Turnkey', it: 'Chiavi in Mano' },
    s2Desc: {
      fr: 'Au-delà de la structure, nous orchestrons le refinement intérieur avec une exigence absolue. Sélection de mobilier et matériaux auprès de maisons d\'excellence italiennes et européennes, coordination complète du chantier et livraison clé en main.',
      en: 'Beyond structure, we orchestrate interior refinement with absolute rigour. Furniture and material selection from Italian and European houses of excellence, complete site coordination and turnkey delivery.',
      it: 'Oltre alla struttura, orchestriamo il refinement interiore con un\'esigenza assoluta. Selezione di mobili e materiali presso case d\'eccellenza italiane ed europee, coordinamento completo del cantiere e consegna chiavi in mano.',
    },
    s2Bullet1: { fr: 'Partenariats exclusifs : ALIVAR, PIANCA, MOLTENI&C', en: 'Exclusive partnerships: ALIVAR, PIANCA, MOLTENI&C', it: 'Partnership esclusivi: ALIVAR, PIANCA, MOLTENI&C' },
    s2Bullet2: { fr: 'Cuisines sur-mesure TONCELLI & ASTER cucine', en: 'Bespoke kitchens by TONCELLI & ASTER cucine', it: 'Cucine su misura TONCELLI & ASTER cucine' },
    s2Bullet3: { fr: 'Coordination complète et reporting qualité régulier', en: 'Complete coordination and regular quality reporting', it: 'Coordinamento completo e reporting qualità regolare' },
    // 2.3
    s3Title1:   { fr: 'Valorisation', en: 'Property', it: 'Valorizzazione' },
    s3Title2:   { fr: 'Patrimoniale', en: 'Enhancement', it: 'Patrimoniale' },
    s3Tag1:     { fr: 'ROI Immobilier', en: 'Property ROI', it: 'ROI Immobiliare' },
    s3Tag2:     { fr: 'Optimisation Locative', en: 'Rental Optimisation', it: 'Ottimizzazione Locativa' },
    s3Tag3:     { fr: 'Stratégie Patrimoine', en: 'Asset Strategy', it: 'Strategia Patrimoniale' },
    s3Desc: {
      fr: 'Ce qui nous distingue : chaque intervention est pensée comme un asset enhancement. Nous intégrons une vision stratégique pour maximiser la valeur de votre bien — location saisonnière premium, revente optimisée ou consolidation de patrimoine international.',
      en: 'What sets us apart: every intervention is designed as asset enhancement. We integrate a strategic vision to maximise your property\'s value — premium seasonal rental, optimised resale or international asset consolidation.',
      it: 'Ciò che ci distingue: ogni intervento è pensato come asset enhancement. Integriamo una visione strategica per massimizzare il valore del vostro bene — affitto stagionale premium, rivendita ottimizzata o consolidamento patrimoniale internazionale.',
    },
    s3Bullet1: { fr: 'Analyse de marché et positionnement optimal du bien', en: 'Market analysis and optimal property positioning', it: 'Analisi di mercato e posizionamento ottimale del bene' },
    s3Bullet2: { fr: 'Optimisation pour la location haut de gamme (Airbnb Luxe, gestion locative)', en: 'Optimisation for premium rental (Airbnb Luxe, property management)', it: 'Ottimizzazione per l\'affitto di lusso (Airbnb Luxe, gestione locativa)' },
    s3Bullet3: { fr: '+35% de valorisation moyenne constatée sur nos projets', en: '+35% average property value increase on our projects', it: '+35% di valorizzazione media riscontrata sui nostri progetti' },
    s3StatValue: { fr: '+35%', en: '+35%', it: '+35%' },
    s3StatLabel: { fr: 'de valorisation moyenne des biens rénovés', en: 'average value increase on renovated properties', it: 'di valorizzazione media dei beni ristrutturati' },
    learnMore: { fr: 'En savoir plus', en: 'Learn More', it: 'Scopri di più' },
  },

  // ── Featured Projects — Showcase cinématique ────────────
  featured: {
    label: { fr: 'Réalisations d\'exception', en: 'Signature Projects', it: 'Realizzazioni d\'eccellenza' },
    viewProject: { fr: 'Voir le projet', en: 'View Project', it: 'Vedi il Progetto' },
    viewAll: { fr: 'Découvrir tous nos projets', en: 'Discover All Projects', it: 'Scopri Tutti i Progetti' },
    ctaLine: { fr: 'Chaque projet est une histoire unique', en: 'Every project tells a unique story', it: 'Ogni progetto racconta una storia unica' },
    // Projet 1 — Villa Azur
    fp1Title: { fr: 'Villa Azur', en: 'Villa Azur', it: 'Villa Azur' },
    fp1Tag: { fr: 'Rénovation Villa', en: 'Villa Renovation', it: 'Ristrutturazione Villa' },
    fp1Meta: { fr: 'Villa vue mer · 450 m² · Saint-Jean-Cap-Ferrat', en: 'Sea view villa · 450 m² · Saint-Jean-Cap-Ferrat', it: 'Villa vista mare · 450 m² · Saint-Jean-Cap-Ferrat' },
    // Projet 2 — Penthouse Croisette
    fp2Title: { fr: 'Penthouse Croisette', en: 'Penthouse Croisette', it: 'Penthouse Croisette' },
    fp2Tag: { fr: 'Rénovation Prestige', en: 'Prestige Renovation', it: 'Ristrutturazione Prestige' },
    fp2Meta: { fr: 'Duplex face à la Croisette · 280 m²', en: 'Duplex facing La Croisette · 280 m²', it: 'Duplex fronte Croisette · 280 m²' },
    // Projet 3 — L'Écrin Monaco
    fp3Title: { fr: 'L\'Écrin', en: 'L\'Écrin', it: 'L\'Écrin' },
    fp3Tag: { fr: 'Design Contemporain', en: 'Contemporary Design', it: 'Design Contemporaneo' },
    fp3Meta: { fr: 'Duplex vue port · 200 m² · Monaco', en: 'Harbor view duplex · 200 m² · Monaco', it: 'Duplex vista porto · 200 m² · Monaco' },
  },

  // ── Section 03 — Portfolio ──────────────────────────────
  portfolio: {
    number:   { fr: '03 — Nos Réalisations', en: '03 — Our Projects', it: '03 — Le Nostre Realizzazioni' },
    title1:   { fr: 'Nos', en: 'Our', it: 'Le Nostre' },
    morphWords: {
      fr: ['Réalisations', 'Projets', 'Créations'],
      en: ['Projects', 'Works', 'Creations'],
      it: ['Realizzazioni', 'Progetti', 'Creazioni'],
    },
    subtitle: {
      fr: 'Découvrez une sélection de nos projets les plus emblématiques',
      en: 'Discover a selection of our most iconic projects',
      it: 'Scoprite una selezione dei nostri progetti più iconici',
    },
    cta: { fr: 'Voir tous nos projets', en: 'View All Projects', it: 'Vedi Tutti i Progetti' },
    catRenovation:   { fr: 'Rénovation',   en: 'Renovation',   it: 'Ristrutturazione' },
    catConstruction: { fr: 'Construction', en: 'Construction', it: 'Costruzione' },
    catAmenagement:  { fr: 'Aménagement', en: 'Interior Design', it: 'Arredamento' },
  },

  // ── Section 04 — Processus ──────────────────────────────
  processus: {
    number: { fr: '04 — Notre Processus', en: '04 — Our Process', it: '04 — Il Nostro Processo' },
    title:  { fr: 'Notre', en: 'Our', it: 'Il Nostro' },
    morphWords: {
      fr: ['Processus', 'Méthode', 'Approche'],
      en: ['Process', 'Method', 'Approach'],
      it: ['Processo', 'Metodo', 'Approccio'],
    },
    subtitle: {
      fr: 'Un accompagnement sur-mesure, de la vision initiale à la valorisation finale',
      en: 'A bespoke journey, from initial vision to final value creation',
      it: 'Un accompagnamento su misura, dalla visione iniziale alla valorizzazione finale',
    },
    step1Title: { fr: 'Écoute & Analyse', en: 'Listen & Analyse', it: 'Ascolto & Analisi' },
    step1Desc: {
      fr: 'Comprendre votre vision, analyser le potentiel du bien et définir les objectifs patrimoniaux. Étude de marché et positionnement stratégique.',
      en: 'Understanding your vision, analysing the property\'s potential and defining asset objectives. Market study and strategic positioning.',
      it: 'Comprendere la vostra visione, analizzare il potenziale del bene e definire gli obiettivi patrimoniali. Studio di mercato e posizionamento strategico.',
    },
    step2Title: { fr: 'Conception Stratégique', en: 'Strategic Design', it: 'Concezione Strategica' },
    step2Desc: {
      fr: 'Design architectural intégrant esthétique méditerranéenne, fonctionnalité contemporaine et optimisation de la valeur patrimoniale du bien.',
      en: 'Architectural design integrating Mediterranean aesthetics, contemporary functionality and property asset value optimisation.',
      it: 'Design architettonico che integra estetica mediterranea, funzionalità contemporanea e ottimizzazione del valore patrimoniale.',
    },
    step3Title: { fr: 'Réalisation & Refinement', en: 'Build & Refinement', it: 'Realizzazione & Refinement' },
    step3Desc: {
      fr: 'Coordination d\'excellence, mobilier ALIVAR, PIANCA, MOLTENI&C, cuisines TONCELLI & ASTER cucine. Suivi qualité sans compromis.',
      en: 'World-class coordination, ALIVAR, PIANCA, MOLTENI&C furniture, TONCELLI & ASTER cucine kitchens. Uncompromising quality control.',
      it: 'Coordinamento d\'eccellenza, mobili ALIVAR, PIANCA, MOLTENI&C, cucine TONCELLI & ASTER cucine. Controllo qualità senza compromessi.',
    },
    step4Title: { fr: 'Valorisation & Livraison', en: 'Enhancement & Delivery', it: 'Valorizzazione & Consegna' },
    step4Desc: {
      fr: 'Livraison clé en main. Accompagnement location premium, stratégie de revente ou consolidation d\'actif durable.',
      en: 'Turnkey delivery. Premium rental support, resale strategy or lasting asset consolidation.',
      it: 'Consegna chiavi in mano. Accompagnamento affitto premium, strategia di rivendita o consolidamento di asset durevole.',
    },
  },

  // ── Section 05 — Chiffres ───────────────────────────────
  stats: {
    number: { fr: '05 — En Chiffres', en: '05 — Key Figures', it: '05 — In Cifre' },
    title:  { fr: 'En', en: 'Key', it: 'In' },
    morphWords: {
      fr: ['chiffres', 'bref', 'résumé'],
      en: ['figures', 'brief', 'numbers'],
      it: ['cifre', 'breve', 'numeri'],
    },
    stat1Label:    { fr: "Années d'expérience", en: 'Years of Experience', it: 'Anni di Esperienza' },
    stat2Label:    { fr: 'Projets livrés', en: 'Projects Delivered', it: 'Progetti Consegnati' },
    stat3Label:    { fr: 'Clients satisfaits', en: 'Client Satisfaction', it: 'Clienti Soddisfatti' },
    stat4Label:    { fr: 'Valorisation moyenne*', en: 'Average Enhancement*', it: 'Valorizzazione Media*' },
    stat4Sublabel: { fr: '*des biens rénovés vs état initial', en: '*of renovated properties vs initial state', it: '*dei beni ristrutturati vs stato iniziale' },
  },

  // ── Section 06 — Pour Qui ───────────────────────────────
  pourQui: {
    number: { fr: '06 — Pour Qui ?', en: '06 — Who We Serve', it: '06 — Per Chi ?' },
    title:  { fr: 'Pour', en: 'Who We', it: 'Per' },
    morphWords: {
      fr: ['qui ?', 'vous', 'vos ambitions'],
      en: ['Serve', 'Support', 'Work With'],
      it: ['chi ?', 'voi', 'le vostre ambizioni'],
    },
    subtitle: {
      fr: 'Nous accompagnons ceux qui voient dans l\'immobilier un art de vivre — et un investissement',
      en: 'We support those who see real estate as an art of living — and an investment',
      it: 'Accompagniamo chi vede nell\'immobiliare un\'arte del vivere — e un investimento',
    },
    card1Title: { fr: 'Propriétaires Privés', en: 'Private Owners', it: 'Proprietari Privati' },
    card1Desc: {
      fr: 'Vous possédez une résidence secondaire sur la Côte d\'Azur et souhaitez la transformer en un lieu d\'exception. Nous concevons des espaces qui reflètent votre art de vivre tout en valorisant durablement votre patrimoine immobilier.',
      en: 'You own a secondary residence on the French Riviera and wish to transform it into an exceptional space. We design environments that reflect your lifestyle while sustainably enhancing your property assets.',
      it: 'Possedete una residenza secondaria sulla Costa Azzurra e desiderate trasformarla in un luogo d\'eccezione. Progettiamo spazi che riflettono il vostro stile di vita, valorizzando in modo duraturo il vostro patrimonio immobiliare.',
    },
    card1Tag: { fr: 'Résidences secondaires haut de gamme', en: 'High-end secondary residences', it: 'Residenze secondarie di lusso' },
    card2Title: { fr: 'Investisseurs Internationaux', en: 'International Investors', it: 'Investitori Internazionali' },
    card2Desc: {
      fr: 'Vous investissez sur la Riviera française et cherchez à maximiser le rendement de vos investment properties. Nous transformons chaque acquisition en actif performant — optimisation locative premium, stratégie de revente ou asset enhancement global.',
      en: 'You invest on the French Riviera and seek to maximise your investment property returns. We transform every acquisition into a performing asset — premium rental optimisation, resale strategy or global asset enhancement.',
      it: 'Investite sulla Riviera francese e cercate di massimizzare il rendimento delle vostre investment properties. Trasformiamo ogni acquisizione in un asset performante — ottimizzazione locativa premium, strategia di rivendita o asset enhancement globale.',
    },
    card2Tag: { fr: 'Asset enhancement & ROI', en: 'Asset Enhancement & ROI', it: 'Asset Enhancement & ROI' },
    card3Title: { fr: 'Acquéreurs Exigeants', en: 'Discerning Buyers', it: 'Acquirenti Esigenti' },
    card3Desc: {
      fr: 'Vous venez d\'acquérir un bien d\'exception et souhaitez un projet clé en main — de la conception architecturale au refinement intérieur, avec un accompagnement total, une sélection de mobilier premium et une livraison sans compromis.',
      en: 'You\'ve just acquired an exceptional property and want a turnkey project — from architectural design to interior refinement, with complete support, premium furniture selection and uncompromising delivery.',
      it: 'Avete appena acquisito un bene d\'eccezione e desiderate un progetto chiavi in mano — dalla concezione architettonica al refinement interiore, con un accompagnamento totale, una selezione di mobili premium e una consegna senza compromessi.',
    },
    card3Tag: { fr: 'Projet clé en main sur-mesure', en: 'Bespoke turnkey project', it: 'Progetto chiavi in mano su misura' },
  },

  // ── Section 07 — Témoignages ────────────────────────────
  temoignages: {
    number:   { fr: '07 — Témoignages', en: '07 — Testimonials', it: '07 — Testimonianze' },
    title1:   { fr: 'Ce que disent', en: 'What', it: 'Cosa dicono' },
    morphWords: {
      fr: ['nos clients', 'nos partenaires', 'ceux qui nous font confiance'],
      en: ['our clients say', 'our partners share', 'they say about us'],
      it: ['i nostri clienti', 'i nostri partner', 'chi si fida di noi'],
    },
    subtitle: {
      fr: 'La satisfaction de nos clients est notre plus belle récompense',
      en: 'Client satisfaction is our greatest reward',
      it: 'La soddisfazione dei nostri clienti è la nostra più bella ricompensa',
    },
  },

  // ── Section 08 — CTA Final ──────────────────────────────
  cta: {
    label:    { fr: '08 — Votre projet', en: '08 — Your Project', it: '08 — Il Vostro Progetto' },
    title:    { fr: 'Transformons Votre\nVision en Réalité', en: 'Let\'s Transform Your\nVision into Reality', it: 'Trasformiamo la Vostra\nVisione in Realtà' },
    subtitle: { fr: 'Contactez-nous pour un premier échange confidentiel.', en: 'Contact us for a first confidential discussion.', it: 'Contattateci per un primo scambio confidenziale.' },
    primary:  { fr: 'Prendre Rendez-vous', en: 'Book a Consultation', it: 'Prenota un Appuntamento' },
    secondary: { fr: 'Voir Nos Projets', en: 'View Our Projects', it: 'Vedi i Nostri Progetti' },
  },

  // ── Footer ──────────────────────────────────────────────
  footer: {
    desc: {
      fr: 'Conception architecturale et valorisation patrimoniale de résidences secondaires haut de gamme sur la Côte d\'Azur.',
      en: 'Architectural design and property enhancement of high-end secondary residences on the French Riviera.',
      it: 'Progettazione architettonica e valorizzazione patrimoniale di residenze secondarie di lusso sulla Costa Azzurra.',
    },
    navTitle:      { fr: 'Navigation', en: 'Navigation', it: 'Navigazione' },
    projetsTitle:  { fr: 'Projets', en: 'Projects', it: 'Progetti' },
    contactTitle:  { fr: 'Contact', en: 'Contact', it: 'Contatti' },
    accueil:       { fr: 'Accueil', en: 'Home', it: 'Home' },
    nosProjets:    { fr: 'Nos Projets', en: 'Our Projects', it: 'I Nostri Progetti' },
    notreExpertise: { fr: 'Notre Expertise', en: 'Our Expertise', it: 'La Nostra Expertise' },
    leStudio:      { fr: 'Le Studio', en: 'The Studio', it: 'Lo Studio' },
    renovation:    { fr: 'Rénovation', en: 'Renovation', it: 'Ristrutturazione' },
    construction:  { fr: 'Construction', en: 'Construction', it: 'Costruzione' },
    amenagement:   { fr: 'Aménagement', en: 'Interior Design', it: 'Arredamento' },
    copyright:     { fr: 'Tous droits réservés.', en: 'All rights reserved.', it: 'Tutti i diritti riservati.' },
    mentions:      { fr: 'Mentions légales', en: 'Legal Notice', it: 'Note Legali' },
    confidentialite: { fr: 'Confidentialité', en: 'Privacy Policy', it: 'Privacy' },
    cookies:       { fr: 'Cookies', en: 'Cookies', it: 'Cookies' },
  },

  // ── Marquee ─────────────────────────────────────────────
  marquee: {
    items: {
      fr: ['Architecture', 'Property Enhancement', 'Côte d\'Azur', 'Valorisation'],
      en: ['Architecture', 'Property Enhancement', 'French Riviera', 'Asset Value'],
      it: ['Architettura', 'Property Enhancement', 'Costa Azzurra', 'Valorizzazione'],
    },
  },

  // ── Common ──────────────────────────────────────────────
  common: {
    location: { fr: 'Côte d\'Azur, France', en: 'French Riviera, France', it: 'Costa Azzurra, Francia' },
  },

  // ── Page Expertise ─────────────────────────────────────
  expertisePage: {
    metaTitle: {
      fr: 'Notre Expertise — Architecture & Property Enhancement | SB Design Riviera',
      en: 'Our Expertise — Architecture & Property Enhancement | SB Design Riviera',
      it: 'La Nostra Expertise — Architecture & Property Enhancement | SB Design Riviera',
    },
    metaDesc: {
      fr: 'Conception architecturale, Interior Refinement et valorisation patrimoniale. SB Design Riviera vous accompagne de la vision à la livraison clé en main sur la Côte d\'Azur.',
      en: 'Architectural design, Interior Refinement and property enhancement. SB Design Riviera supports you from vision to turnkey delivery on the French Riviera.',
      it: 'Progettazione architettonica, Interior Refinement e valorizzazione patrimoniale. SB Design Riviera vi accompagna dalla visione alla consegna chiavi in mano sulla Costa Azzurra.',
    },
    heroLabel: { fr: 'Expertise', en: 'Expertise', it: 'Expertise' },
    heroPrefix: { fr: 'Notre', en: 'Our', it: 'La Nostra' },
    heroMorphWords: {
      fr: ['savoir-faire', 'différence', 'excellence'],
      en: ['expertise', 'difference', 'excellence'],
      it: ['competenza', 'differenza', 'eccellenza'],
    },
    heroSubtitle: {
      fr: 'Trois expertises complémentaires pour concevoir, transformer et valoriser vos résidences haut de gamme.',
      en: 'Three complementary expertises to design, transform and enhance your high-end residences.',
      it: 'Tre competenze complementari per progettare, trasformare e valorizzare le vostre residenze di lusso.',
    },
    // Service 01
    s1Title1: { fr: 'Conception', en: 'Architectural', it: 'Concezione' },
    s1Title2: { fr: 'Architecturale', en: 'Design', it: 'Architettonica' },
    s1Desc: {
      fr: 'De la vision initiale aux plans d\'exécution, nous concevons des espaces qui conjuguent esthétique méditerranéenne et exigences contemporaines. Chaque projet intègre dès la conception une réflexion sur la valorisation patrimoniale.',
      en: 'From initial vision to execution plans, we design spaces that combine Mediterranean aesthetics with contemporary standards. Every project integrates asset enhancement strategy from the very start.',
      it: 'Dalla visione iniziale ai piani esecutivi, progettiamo spazi che coniugano estetica mediterranea ed esigenze contemporanee. Ogni progetto integra fin dalla concezione una riflessione sulla valorizzazione patrimoniale.',
    },
    s1B1: { fr: 'Études architecturales complètes et rendus photoréalistes', en: 'Complete architectural studies and photorealistic renders', it: 'Studi architettonici completi e render fotorealistici' },
    s1B2: { fr: 'Optimisation des volumes et de la lumière naturelle', en: 'Volume and natural light optimisation', it: 'Ottimizzazione dei volumi e della luce naturale' },
    s1B3: { fr: 'Sélection de matériaux nobles et durables', en: 'Selection of premium and sustainable materials', it: 'Selezione di materiali pregiati e sostenibili' },
    s1B4: { fr: 'Livraison clé en main avec garanties complètes', en: 'Turnkey delivery with complete warranties', it: 'Consegna chiavi in mano con garanzie complete' },
    // Service 02
    s2Title1: { fr: 'Interior', en: 'Interior', it: 'Interior' },
    s2Title2: { fr: 'Refinement', en: 'Refinement', it: 'Refinement' },
    s2Desc: {
      fr: 'Au-delà de la structure, nous orchestrons le refinement intérieur avec une exigence absolue. Sélection de mobilier et matériaux auprès de maisons d\'excellence italiennes et européennes.',
      en: 'Beyond structure, we orchestrate interior refinement with absolute rigour. Furniture and material selection from Italian and European houses of excellence.',
      it: 'Oltre alla struttura, orchestriamo il refinement interiore con un\'esigenza assoluta. Selezione di mobili e materiali presso case d\'eccellenza italiane ed europee.',
    },
    s2B1: { fr: 'Partenariats exclusifs : ALIVAR, PIANCA, MOLTENI&C', en: 'Exclusive partnerships: ALIVAR, PIANCA, MOLTENI&C', it: 'Partnership esclusivi: ALIVAR, PIANCA, MOLTENI&C' },
    s2B2: { fr: 'Cuisines sur-mesure TONCELLI & ASTER cucine', en: 'Bespoke kitchens by TONCELLI & ASTER cucine', it: 'Cucine su misura TONCELLI & ASTER cucine' },
    s2B3: { fr: 'Mobilier et luminaires sur-mesure', en: 'Bespoke furniture and lighting', it: 'Mobili e illuminazione su misura' },
    s2B4: { fr: 'Mise en scène et décoration finale', en: 'Staging and final decoration', it: 'Allestimento e decorazione finale' },
    // Service 03
    s3Title1: { fr: 'Valorisation', en: 'Property', it: 'Valorizzazione' },
    s3Title2: { fr: 'Patrimoniale', en: 'Enhancement', it: 'Patrimoniale' },
    s3Desc: {
      fr: 'Chaque intervention est pensée comme un asset enhancement. Nous intégrons une vision stratégique pour maximiser la valeur de votre bien — location premium, revente optimisée ou consolidation de patrimoine.',
      en: 'Every intervention is designed as asset enhancement. We integrate a strategic vision to maximise your property\'s value — premium rental, optimised resale or asset consolidation.',
      it: 'Ogni intervento è pensato come asset enhancement. Integriamo una visione strategica per massimizzare il valore del vostro bene — affitto premium, rivendita ottimizzata o consolidamento patrimoniale.',
    },
    s3B1: { fr: 'Restauration de patrimoine et éléments d\'époque', en: 'Heritage restoration and period features', it: 'Restauro del patrimonio ed elementi d\'epoca' },
    s3B2: { fr: 'Domotique et technologies intelligentes', en: 'Home automation and smart technologies', it: 'Domotica e tecnologie intelligenti' },
    s3B3: { fr: 'Espaces wellness : spa, piscine, hammam', en: 'Wellness spaces: spa, pool, hammam', it: 'Spazi wellness: spa, piscina, hammam' },
    s3B4: { fr: 'Aménagements extérieurs et paysagisme', en: 'Outdoor design and landscaping', it: 'Progettazione esterna e paesaggismo' },
    // CTA
    ctaTitle1: { fr: 'Parlons de', en: 'Let\'s discuss', it: 'Parliamo del' },
    ctaTitle2: { fr: 'votre projet', en: 'your project', it: 'vostro progetto' },
    ctaDesc: {
      fr: 'Chaque propriété mérite une attention particulière. Contactez-nous pour une consultation personnalisée.',
      en: 'Every property deserves special attention. Contact us for a personalised consultation.',
      it: 'Ogni proprietà merita un\'attenzione particolare. Contattateci per una consulenza personalizzata.',
    },
    ctaBtn: { fr: 'Prendre rendez-vous', en: 'Book a Consultation', it: 'Prenota un Appuntamento' },
  },

  // ── Page À Propos ──────────────────────────────────────
  aproposPage: {
    metaTitle: {
      fr: 'À Propos — SB Design Riviera | Architecture & Property Enhancement Côte d\'Azur',
      en: 'About — SB Design Riviera | Architecture & Property Enhancement French Riviera',
      it: 'Chi Siamo — SB Design Riviera | Architecture & Property Enhancement Costa Azzurra',
    },
    metaDesc: {
      fr: 'SB Design Riviera : studio d\'architecture spécialisé dans la conception et la valorisation de résidences secondaires haut de gamme sur la Côte d\'Azur.',
      en: 'SB Design Riviera: architectural studio specialising in the design and enhancement of high-end secondary residences on the French Riviera.',
      it: 'SB Design Riviera: studio di architettura specializzato nella progettazione e valorizzazione di residenze secondarie di lusso sulla Costa Azzurra.',
    },
    heroLabel: { fr: 'Le Studio', en: 'The Studio', it: 'Lo Studio' },
    heroPrefix: { fr: 'Notre', en: 'Our', it: 'La Nostra' },
    heroMorphWords: {
      fr: ['vision', 'excellence', 'différence'],
      en: ['vision', 'excellence', 'difference'],
      it: ['visione', 'eccellenza', 'differenza'],
    },
    heroSubtitle: {
      fr: 'Un studio d\'architecture dédié à la valorisation de résidences secondaires d\'exception sur la Côte d\'Azur.',
      en: 'An architectural studio dedicated to the enhancement of exceptional secondary residences on the French Riviera.',
      it: 'Uno studio di architettura dedicato alla valorizzazione di residenze secondarie d\'eccezione sulla Costa Azzurra.',
    },
    historyLabel: { fr: 'Notre ADN', en: 'Our DNA', it: 'Il Nostro DNA' },
    historyTitle1: { fr: 'Architecture', en: 'Architecture', it: 'Architettura' },
    historyTitle2: { fr: '& stratégie', en: '& strategy', it: '& strategia' },
    historyTitle3: { fr: 'au service de votre patrimoine', en: 'at the service of your assets', it: 'al servizio del vostro patrimonio' },
    historyP1: {
      fr: 'SB Design Riviera est un studio d\'architecture et de property enhancement spécialisé dans les résidences secondaires haut de gamme sur la Côte d\'Azur. Notre approche unique fusionne excellence architecturale, interior refinement et stratégie d\'asset enhancement.',
      en: 'SB Design Riviera is an architecture and property enhancement studio specialising in high-end secondary residences on the French Riviera. Our unique approach fuses architectural excellence, interior refinement and asset enhancement strategy.',
      it: 'SB Design Riviera è uno studio di architettura e property enhancement specializzato in residenze secondarie di lusso sulla Costa Azzurra. Il nostro approccio unico fonde eccellenza architettonica, interior refinement e strategia di asset enhancement.',
    },
    historyP2: {
      fr: 'Fondé sur la conviction que l\'architecture doit être à la fois belle et stratégique, le studio accompagne une clientèle internationale — propriétaires privés, investisseurs et acquéreurs exigeants — dans la conception, la transformation et la valorisation de biens d\'exception sur la Riviera française.',
      en: 'Founded on the belief that architecture must be both beautiful and strategic, the studio supports an international clientele — private owners, investors and discerning buyers — in the design, transformation and enhancement of exceptional properties on the French Riviera.',
      it: 'Fondato sulla convinzione che l\'architettura debba essere al contempo bella e strategica, lo studio accompagna una clientela internazionale — proprietari privati, investitori e acquirenti esigenti — nella progettazione, trasformazione e valorizzazione di beni d\'eccezione sulla Riviera francese.',
    },
    historyP3: {
      fr: 'Notre équipe réunit des compétences complémentaires en architecture, design intérieur, coordination de chantier et conseil patrimonial. Chaque projet bénéficie d\'un accompagnement intégral — de la vision initiale à la livraison clé en main — avec une sélection de mobilier auprès de maisons d\'excellence italiennes et européennes : ALIVAR, PIANCA, MOLTENI&C, TONCELLI.',
      en: 'Our team brings together complementary expertise in architecture, interior design, site coordination and asset consultancy. Every project benefits from end-to-end support — from initial vision to turnkey delivery — with furniture selection from Italian and European houses of excellence: ALIVAR, PIANCA, MOLTENI&C, TONCELLI.',
      it: 'Il nostro team riunisce competenze complementari in architettura, design d\'interni, coordinamento di cantiere e consulenza patrimoniale. Ogni progetto beneficia di un accompagnamento integrale — dalla visione iniziale alla consegna chiavi in mano — con una selezione di mobili presso case d\'eccellenza italiane ed europee: ALIVAR, PIANCA, MOLTENI&C, TONCELLI.',
    },
    historyQuote: {
      fr: 'Sur la Côte d\'Azur, l\'architecture ne doit pas seulement être belle — elle doit être stratégique.',
      en: 'On the French Riviera, architecture must not only be beautiful — it must be strategic.',
      it: 'Sulla Costa Azzurra, l\'architettura non deve solo essere bella — deve essere strategica.',
    },
    valuesLabel: { fr: 'Nos engagements', en: 'Our commitments', it: 'I nostri impegni' },
    valuesTitle1: { fr: 'Ce qui nous', en: 'What sets', it: 'Ciò che ci' },
    valuesTitle2: { fr: 'distingue', en: 'us apart', it: 'distingue' },
    value1Title: { fr: 'Excellence Architecturale', en: 'Architectural Excellence', it: 'Eccellenza Architettonica' },
    value1Desc: {
      fr: 'Conception sur-mesure alliant esthétique contemporaine, patrimoine méditerranéen et standards internationaux. Chaque projet est pensé pour sublimer le potentiel architectural du lieu.',
      en: 'Bespoke design combining contemporary aesthetics, Mediterranean heritage and international standards. Every project is designed to elevate the architectural potential of the space.',
      it: 'Design su misura che unisce estetica contemporanea, patrimonio mediterraneo e standard internazionali. Ogni progetto è pensato per esaltare il potenziale architettonico del luogo.',
    },
    value2Title: { fr: 'Performance Patrimoniale', en: 'Asset Performance', it: 'Performance Patrimoniale' },
    value2Desc: {
      fr: 'Chaque intervention est conçue comme un investissement : valorisation mesurable, optimisation locative premium et stratégie de revente intégrées dès la conception du projet.',
      en: 'Every intervention is designed as an investment: measurable enhancement, premium rental optimisation and resale strategy integrated from the project\'s inception.',
      it: 'Ogni intervento è concepito come un investimento: valorizzazione misurabile, ottimizzazione locativa premium e strategia di rivendita integrate fin dalla concezione del progetto.',
    },
    value3Title: { fr: 'Vision Internationale', en: 'International Vision', it: 'Visione Internazionale' },
    value3Desc: {
      fr: 'Une clientèle internationale accompagnée en français, anglais et italien. Des partenariats d\'excellence avec les plus grandes maisons de mobilier et de matériaux européennes.',
      en: 'An international clientele supported in French, English and Italian. Partnerships of excellence with Europe\'s leading furniture and materials houses.',
      it: 'Una clientela internazionale accompagnata in francese, inglese e italiano. Partnership d\'eccellenza con le più grandi case di mobili e materiali europee.',
    },
    value4Title: { fr: 'Accompagnement Intégral', en: 'End-to-End Support', it: 'Accompagnamento Integrale' },
    value4Desc: {
      fr: 'De la conception architecturale au refinement intérieur, un suivi complet et sans compromis. Coordination de chantier, sélection de mobilier premium et livraison clé en main.',
      en: 'From architectural design to interior refinement, complete and uncompromising support. Site coordination, premium furniture selection and turnkey delivery.',
      it: 'Dalla concezione architettonica al refinement interiore, un seguito completo e senza compromessi. Coordinamento di cantiere, selezione di mobili premium e consegna chiavi in mano.',
    },
    ctaTitle1: { fr: 'Parlons de', en: 'Let\'s discuss', it: 'Parliamo del' },
    ctaTitle2: { fr: 'votre', en: 'your', it: 'vostro' },
    ctaTitle3: { fr: 'projet', en: 'project', it: 'progetto' },
    ctaDesc: { fr: 'Contactez-nous pour un premier échange confidentiel sur votre projet de résidence secondaire.', en: 'Contact us for a first confidential discussion about your secondary residence project.', it: 'Contattateci per un primo scambio confidenziale sul vostro progetto di residenza secondaria.' },
    ctaBtn: { fr: 'Nous contacter', en: 'Contact Us', it: 'Contattaci' },
  },

  // ── Page Contact ───────────────────────────────────────
  contactPage: {
    metaTitle: {
      fr: 'Contact — SB Design Riviera | Côte d\'Azur',
      en: 'Contact — SB Design Riviera | French Riviera',
      it: 'Contatti — SB Design Riviera | Costa Azzurra',
    },
    metaDesc: {
      fr: 'Contactez SB Design Riviera pour votre projet d\'architecture ou de valorisation patrimoniale sur la Côte d\'Azur. Consultation confidentielle.',
      en: 'Contact SB Design Riviera for your architecture or property enhancement project on the French Riviera. Confidential consultation.',
      it: 'Contattate SB Design Riviera per il vostro progetto di architettura o valorizzazione patrimoniale sulla Costa Azzurra. Consulenza riservata.',
    },
    heroLabel: { fr: 'Contact', en: 'Contact', it: 'Contatti' },
    heroPrefix: { fr: 'Parlons de', en: 'Let\'s discuss', it: 'Parliamo del' },
    heroMorphWords: {
      fr: ['votre projet', 'vous', 'vos envies'],
      en: ['your project', 'your vision', 'your goals'],
      it: ['vostro progetto', 'la vostra visione', 'i vostri obiettivi'],
    },
    heroSubtitle: {
      fr: 'Chaque projet commence par une conversation. Contactez-nous pour une consultation personnalisée et sans engagement.',
      en: 'Every project begins with a conversation. Contact us for a personalised, no-obligation consultation.',
      it: 'Ogni progetto inizia con una conversazione. Contattateci per una consulenza personalizzata e senza impegno.',
    },
    formTitle1: { fr: 'Demander', en: 'Request a', it: 'Richiedere un' },
    formTitle2: { fr: 'un devis', en: 'quote', it: 'preventivo' },
    labelFirstname: { fr: 'Prénom', en: 'First Name', it: 'Nome' },
    labelLastname: { fr: 'Nom', en: 'Last Name', it: 'Cognome' },
    labelEmail: { fr: 'Email', en: 'Email', it: 'Email' },
    labelPhone: { fr: 'Téléphone', en: 'Phone', it: 'Telefono' },
    labelProject: { fr: 'Type de projet', en: 'Project Type', it: 'Tipo di progetto' },
    labelMessage: { fr: 'Votre message', en: 'Your Message', it: 'Il vostro messaggio' },
    placeholderFirstname: { fr: 'Votre prénom', en: 'Your first name', it: 'Il vostro nome' },
    placeholderLastname: { fr: 'Votre nom', en: 'Your last name', it: 'Il vostro cognome' },
    placeholderEmail: { fr: 'votre@email.fr', en: 'your@email.com', it: 'vostra@email.it' },
    placeholderPhone: { fr: '06 00 00 00 00', en: '+33 6 00 00 00 00', it: '+33 6 00 00 00 00' },
    placeholderMessage: { fr: 'Décrivez votre projet...', en: 'Describe your project...', it: 'Descrivete il vostro progetto...' },
    selectDefault: { fr: 'Sélectionnez...', en: 'Select...', it: 'Selezionate...' },
    selectRenovation: { fr: 'Rénovation complète', en: 'Full Renovation', it: 'Ristrutturazione completa' },
    selectDesign: { fr: 'Interior Refinement', en: 'Interior Refinement', it: 'Interior Refinement' },
    selectPrestige: { fr: 'Valorisation Patrimoniale', en: 'Property Enhancement', it: 'Valorizzazione Patrimoniale' },
    selectOther: { fr: 'Autre', en: 'Other', it: 'Altro' },
    submitBtn: { fr: 'Envoyer ma demande', en: 'Send My Request', it: 'Invia la mia richiesta' },
    coordTitle1: { fr: 'Nos', en: 'Our', it: 'I nostri' },
    coordTitle2: { fr: 'coordonnées', en: 'details', it: 'contatti' },
    labelAddress: { fr: 'Adresse', en: 'Address', it: 'Indirizzo' },
    labelHours: { fr: 'Horaires', en: 'Hours', it: 'Orari' },
    hours: {
      fr: 'Lundi — Samedi : 10h — 12h / 14h — 18h30\nDimanche : fermé',
      en: 'Monday — Saturday: 10am — 12pm / 2pm — 6:30pm\nSunday: closed',
      it: 'Lunedì — Sabato: 10 — 12 / 14 — 18:30\nDomenica: chiuso',
    },
    followUs: { fr: 'Suivez-nous', en: 'Follow Us', it: 'Seguiteci' },
  },

  // ── Page Projets ───────────────────────────────────────
  projetsPage: {
    metaTitle: {
      fr: 'Nos Réalisations — Architecture & Valorisation | SB Design Riviera',
      en: 'Our Projects — Architecture & Enhancement | SB Design Riviera',
      it: 'Le Nostre Realizzazioni — Architettura & Valorizzazione | SB Design Riviera',
    },
    metaDesc: {
      fr: 'Découvrez les réalisations de SB Design Riviera : conception architecturale, interior refinement et valorisation patrimoniale sur la Côte d\'Azur.',
      en: 'Discover SB Design Riviera\'s projects: architectural design, interior refinement and property enhancement on the French Riviera.',
      it: 'Scoprite le realizzazioni di SB Design Riviera: progettazione architettonica, interior refinement e valorizzazione patrimoniale sulla Costa Azzurra.',
    },
    heroLabel: { fr: 'Portfolio', en: 'Portfolio', it: 'Portfolio' },
    heroPrefix: { fr: 'Nos', en: 'Our', it: 'Le Nostre' },
    heroMorphWords: {
      fr: ['Réalisations', 'Œuvres', 'Créations'],
      en: ['Projects', 'Works', 'Creations'],
      it: ['Realizzazioni', 'Opere', 'Creazioni'],
    },
    heroSubtitle: {
      fr: 'Chaque projet est une histoire unique. Découvrez notre savoir-faire à travers une sélection de réalisations d\'exception.',
      en: 'Every project tells a unique story. Discover our expertise through a selection of exceptional works.',
      it: 'Ogni progetto è una storia unica. Scoprite il nostro savoir-faire attraverso una selezione di realizzazioni d\'eccezione.',
    },
  },

  // ── Page Projet Détail ─────────────────────────────────
  projetDetail: {
    backToProjects: { fr: 'Tous les projets', en: 'All Projects', it: 'Tutti i Progetti' },
    labelLieu: { fr: 'Lieu', en: 'Location', it: 'Luogo' },
    labelSurface: { fr: 'Surface', en: 'Area', it: 'Superficie' },
    labelAnnee: { fr: 'Année', en: 'Year', it: 'Anno' },
    labelStyle: { fr: 'Style', en: 'Style', it: 'Stile' },
    labelCategorie: { fr: 'Catégorie', en: 'Category', it: 'Categoria' },
    aboutTitle1: { fr: 'À propos', en: 'About the', it: 'A proposito' },
    aboutTitle2: { fr: 'du projet', en: 'project', it: 'del progetto' },
    galleryTitle1: { fr: 'Galerie', en: 'Photo', it: 'Galleria' },
    galleryTitle2: { fr: 'photos', en: 'gallery', it: 'fotografica' },
    relatedTitle1: { fr: 'Autres', en: 'Other', it: 'Altre' },
    relatedTitle2: { fr: 'réalisations', en: 'projects', it: 'realizzazioni' },
    viewAll: { fr: 'Voir tous les projets', en: 'View All Projects', it: 'Vedi Tutti i Progetti' },
    ctaTitle1: { fr: 'Un projet', en: 'A similar', it: 'Un progetto' },
    ctaTitle2: { fr: 'similaire ?', en: 'project?', it: 'simile?' },
    ctaDesc: {
      fr: 'Discutons de votre projet. Consultation confidentielle et sans engagement.',
      en: 'Let\'s discuss your project. Confidential, no-obligation consultation.',
      it: 'Parliamo del vostro progetto. Consulenza riservata e senza impegno.',
    },
    ctaBtn: { fr: 'Prendre rendez-vous', en: 'Book a Consultation', it: 'Prenota un Appuntamento' },
    catAppartement: { fr: 'Appartement', en: 'Apartment', it: 'Appartamento' },
    catResidence: { fr: 'Résidence', en: 'Residence', it: 'Residenza' },
    catMaison: { fr: 'Maison', en: 'House', it: 'Casa' },
    catSalleDeBains: { fr: 'Salle de bains', en: 'Bathroom', it: 'Bagno' },
    styleModerne: { fr: 'Moderne', en: 'Modern', it: 'Moderno' },
    styleClassique: { fr: 'Classique', en: 'Classic', it: 'Classico' },
    styleContemporain: { fr: 'Contemporain', en: 'Contemporary', it: 'Contemporaneo' },
  },
} as const;

export type TranslationStrings = typeof strings;
export type TranslationKey = keyof TranslationStrings;

export default strings;
