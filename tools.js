// Registro degli strumenti dell'hub.
// Per aggiungerne uno: carica il file HTML in /tools/ e aggiungi un oggetto nell'array "tools".
// Per una nuova categoria: aggiungila in "categories" e usa il suo id nello strumento.
// Campi opzionali per strumento: featured (in evidenza in home), simulation (usa simulazione Monte Carlo).
window.HUB = {
  title: "Hub dati",
  subtitle: "calcolatori e dashboard",

  // Chi sei e dove trovarti (mostrato nella pagina "About the project").
  // Aggiungi il tuo link LinkedIn tra le virgolette: il pulsante compare da solo.
  author: {
    name: "Lorenzo",
    github: "https://github.com/loreng0309",
    linkedin: ""
  },
  repo: "https://github.com/loreng0309/analisivita",

  // Aggiornamento dei dati fiscali e di mercato negli strumenti.
  dataAsOf: { en: "Oct 2026", it: "ott. 2026" },

  // Statistiche anonime e gratuite (GoatCounter, senza cookie).
  // 1) Registrati su goatcounter.com  2) scrivi qui il codice scelto, es. "loreng0309"
  // Lasciato vuoto = nessun tracking e nessuna richiesta di rete.
  analytics: { goatcounter: "" },

  categories: [
    { id: "immobiliare", name: "Immobiliare e finanza personale" },
    { id: "pianificazione", name: "Pianificazione finanziaria" },
    { id: "mobilita", name: "Auto e mobilità" }
  ],

  tools: [
    {
      id: "anticipo-o-mutuo",
      name: "Anticipo o mutuo al 100%?",
      category: "immobiliare",
      description: "Confronta un mutuo con anticipo e uno al 100% investendo la differenza: rata, patrimonio finale anno per anno e rendimento di pareggio.",
      tags: ["mutuo", "PAC", "detrazione interessi"],
      file: "anticipo-o-mutuo.html"
    },
    {
      id: "casa-comprare-o-affittare",
      name: "Comprare casa o affittare?",
      category: "immobiliare",
      description: "Dopo quanti anni conviene comprare con il mutuo invece di affittare e investire la differenza, con costi, imposte e simulazione di mercato.",
      tags: ["casa", "mutuo", "affitto", "ETF", "prima casa"],
      file: "casa-comprare-o-affittare.html",
      featured: true,
      simulation: true
    },
    {
      id: "quadrante-liberta",
      name: "Il quadrante della libertà",
      category: "pianificazione",
      description: "Quando puoi smettere di lavorare, in euro: Italia (Milano), Svizzera (Ginevra, Losanna) o Italia poi Svizzera, con pensioni, figli e simulazioni di mercato.",
      tags: ["libertà finanziaria", "pensione", "Italia", "Svizzera"],
      file: "quadrante-liberta.html",
      featured: true,
      simulation: true
    },
    {
      id: "capitale-umano-portafoglio",
      name: "Capitale umano e portafoglio",
      category: "pianificazione",
      description: "Calcola quanto vale oggi il tuo reddito futuro e quante azioni puoi permetterti in base al tipo di lavoro, con la spiegazione della formula di Merton.",
      tags: ["capitale umano", "asset allocation", "azioni", "pensione", "Merton"],
      file: "capitale-umano-portafoglio.html"
    },
    {
      id: "laboratorio-investimenti",
      name: "Laboratorio investimenti",
      category: "pianificazione",
      description: "Prova un piano di investimento: dividi tra azioni, obbligazioni e liquidità, confronta portafogli e vedi con che probabilità raggiungi il tuo obiettivo.",
      tags: ["investimenti", "portafoglio", "ETF", "simulazione", "costi", "tasse"],
      file: "laboratorio-investimenti.html",
      featured: true,
      simulation: true
    },
    {
      id: "piano-accumulo-mensile",
      name: "Piano d'accumulo mese per mese",
      category: "pianificazione",
      description: "Simula mese per mese come crescono liquidità, PAC e fondo obiettivo, e prova cosa cambia versando di più, prima o più a lungo.",
      tags: ["PAC", "accumulo", "cuscinetto", "ETF", "simulazione", "rendimento composto"],
      file: "piano-investimenti.html",
      simulation: true
    },
    {
      id: "auto-costo-reale",
      name: "Auto: il costo vero su 3–10 anni",
      category: "mobilita",
      description: "Confronta contanti, finanziamento, leasing e noleggio di un'auto, con svalutazione, costi di possesso, sconto da finanziamento e costo del denaro.",
      tags: ["auto", "finanziamento", "leasing", "noleggio", "svalutazione", "costo totale"],
      file: "auto-costo-reale.html",
      simulation: true
    }
  ]
};
