
# Cultura e Letteratura Giapponese 2
## Project Bible per una piattaforma di studio intensivo interattiva

---

# 0. Istruzione principale per Codex

Devi progettare e implementare in locale una web app completa per studiare l’intero file **Cultura e Letteratura Giapponese 2.pdf** e preparare un esame orale universitario in due giorni.

Non creare un semplice visualizzatore di appunti, un riassunto o un sito statico.

Devi creare un **motore di apprendimento interattivo, adattivo, veloce e visivamente stimolante**.

L’utente:

- parte quasi da zero;
- perde facilmente la concentrazione con testi lunghi;
- si annoia se il formato resta uguale troppo a lungo;
- vuole procedere molto velocemente;
- impara soprattutto attraverso quiz, decisioni rapide, schemi, confronti e collegamenti;
- preferisce quasi sempre click, tap e drag and drop alla scrittura;
- quando comprende davvero un concetto, tende a ricordarlo stabilmente;
- punta all’eccellenza e deve coprire tutto il file, non soltanto gli argomenti più probabili;
- deve prepararsi a rispondere oralmente in modo completo, preciso e collegato.

Obiettivo finale:

> L’utente deve saper spiegare qualsiasi argomento del programma in modo chiaro, approfondito, collegato e sicuro durante un esame orale universitario.

---

# 1. Regole di esecuzione autonome

## 1.1 Non fermarti per chiedere conferma

Non chiedere:

- “Vuoi che continui?”
- “Posso procedere?”
- “Preferisci A o B?”
- “Vuoi che implementi anche questa parte?”

Quando l’obiettivo è chiaro, scegli la soluzione più coerente e continua.

## 1.2 Continua automaticamente

Mantieni una TODO list interna persistente.

Quando completi un’attività:

1. testala;
2. correggi eventuali errori;
3. aggiorna la documentazione;
4. salva lo stato;
5. scegli la prossima attività prioritaria;
6. continua senza attendere istruzioni.

## 1.3 Gestione degli errori

Quando incontri un errore:

1. leggi l’errore;
2. individua la causa;
3. prova almeno tre strategie ragionevoli;
4. correggi;
5. verifica;
6. continua.

Non fermarti al primo errore.

## 1.4 Quando puoi chiedere

Interrompiti soltanto se:

- serve una credenziale esterna non disponibile;
- un’azione è irreversibile e rischiosa;
- manca materialmente il file sorgente;
- esistono due interpretazioni incompatibili che cambierebbero radicalmente il prodotto;
- il progetto non compila dopo tentativi seri e documentati;
- una decisione comporta cancellazione di dati reali.

In tutti gli altri casi, fai una scelta ragionevole e registrala in `DECISIONS.md`.

## 1.5 Non provare a fare tutto in una singola risposta mentale

Il progetto è ampio. Lavora per fasi autonome.

Mantieni questi file:

- `PROJECT_BIBLE.md`
- `ROADMAP.md`
- `TODO.md`
- `DECISIONS.md`
- `CONTENT_COVERAGE.md`
- `QA_CHECKLIST.md`
- `CHANGELOG.md`

Alla fine di ogni fase aggiorna i file e continua.

## 1.6 Strategia per limiti di token

Non tentare di generare contemporaneamente:

- tutta l’architettura;
- tutti i contenuti;
- tutti gli esercizi;
- tutte le pagine;
- tutte le visualizzazioni.

Procedi così:

### Fase A. Fondazioni
- struttura progetto;
- design system;
- routing;
- modelli dati;
- localStorage;
- componenti riutilizzabili;
- dashboard;
- percorso base;
- una macro-unità completa end to end.

### Fase B. Motore didattico
- lesson player;
- quiz engine;
- progress engine;
- glossary;
- tooltip;
- flow mode;
- review engine;
- oral simulator.

### Fase C. Contenuti
- estrai e organizza il PDF;
- crea una coverage map;
- completa le macro-unità una alla volta;
- dopo ogni macro-unità genera esercizi e verifica copertura.

### Fase D. Rifinitura
- accessibilità;
- responsive;
- tema chiaro/scuro;
- performance;
- QA;
- correzione contenuti;
- polish visivo.

Se il contesto disponibile si riduce, termina la fase corrente, aggiorna i file di stato e riprendi dalla TODO più alta. Non perdere il lavoro già fatto.

---

# 2. Stack tecnico

Usa:

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- localStorage
- componenti modulari
- dati in JSON o TypeScript
- nessun backend obbligatorio
- nessun login
- nessuna API esterna necessaria
- funzionamento completamente locale

Avvio:

```bash
npm install
npm run dev
```

Aggiungere anche:

```bash
npm run build
npm run lint
npm run test
```

Preferire librerie leggere e stabili.

Non dipendere da servizi esterni per il funzionamento fondamentale.

---

# 3. Fonte e copertura

Fonte primaria:

`/mnt/data/Cultura e Letteratura Giapponese 2.pdf`

Fonte di coordinamento, se disponibile:

`/mnt/data/Exam_Study_Coordinator.md`

## 3.1 Regola di completezza

La piattaforma deve coprire **tutto il file**, non soltanto gli argomenti prioritari.

Le priorità servono a stabilire l’ordine di studio, non a eliminare contenuti.

## 3.2 Coverage matrix

Crea `CONTENT_COVERAGE.md` con una tabella:

| Pagina PDF | Sezione | Concetti | Autori | Opere | Lezione | Quiz | Orale | Stato |
|---|---|---|---|---|---|---|---|---|

Stati:

- non analizzato;
- estratto;
- spiegato;
- verificato;
- esercizi creati;
- copertura completa.

Nessuna macro-unità è “completa” finché ogni pagina del PDF associata è mappata.

## 3.3 Fedeltà

Non inventare.

Quando il PDF è troppo sintetico:

- integra con spiegazioni indispensabili;
- distingui chiaramente integrazione e contenuto del corso;
- evita attribuzioni non verificate;
- mantieni nomi, termini e date corretti;
- segnala punti dubbi.

---

# 4. Filosofia didattica

## 4.1 Insegnare, non riassumere

La web app deve spiegare bene.

Non accettare definizioni superficiali come:

- “L’orientalismo è uno stereotipo sull’Oriente.”
- “Il trauma è un evento doloroso.”
- “Sōseki parla dell’individualismo.”
- “Il genbun itchi unisce scritto e parlato.”

Ogni concetto importante deve includere:

- definizione precisa;
- contesto;
- origine;
- sviluppo;
- studiosi;
- argomentazioni;
- distinzioni;
- limiti;
- critiche;
- esempi;
- applicazioni alle opere;
- collegamenti;
- errori comuni;
- possibili domande d’esame;
- risposta modello.

## 4.2 Il sito deve massimizzare gli “Aha moments”

Il criterio principale non è quante pagine l’utente legge.

Il criterio è quante volte pensa:

> “Ah, ecco perché.”

## 4.3 Se l’utente sbaglia tre volte, cambia spiegazione

Non ripetere la stessa spiegazione.

Passa a:

- esempio concreto;
- metafora;
- schema;
- timeline;
- tabella;
- confronto;
- caso applicato;
- domanda guidata;
- visualizzazione causa-effetto.

## 4.4 Comprensione prima della memorizzazione

Per ogni concetto verificare:

- sa definirlo;
- sa spiegarne la causa;
- sa collocarlo nel contesto;
- sa distinguerlo da concetti simili;
- sa applicarlo a un’opera;
- sa collegarlo ad altri autori;
- sa rispondere oralmente.

---

# 5. Attention Engine

## 5.1 Nessun muro di testo

Mai più di 180-250 parole consecutive senza un cambiamento di stimolo.

Dopo deve apparire almeno uno tra:

- mini quiz;
- schema;
- tooltip;
- tabella;
- timeline;
- confronto;
- domanda;
- drag and drop;
- flashcard;
- mini mappa;
- decisione rapida;
- richiamo attivo.

## 5.2 Cambiare formato ogni 2-3 minuti

Ritmo consigliato:

1. spiegazione;
2. schema;
3. scelta rapida;
4. tabella;
5. esempio;
6. timeline;
7. quiz;
8. collegamento;
9. mini orale.

## 5.3 Micro-obiettivi

Non mostrare “Studia il Meiji”.

Mostrare:

- Capire perché cade il bakufu, 4 minuti.
- Capire il ruolo dei trattati ineguali, 3 minuti.
- Distinguere modernizzazione e occidentalizzazione, 5 minuti.
- Collegare kokugo e Stato-nazione, 4 minuti.

Ogni micro-obiettivo deve avere:

- tempo stimato;
- progresso;
- risultato atteso;
- verifica rapida.

## 5.4 Momentum Mode

Mostrare sempre:

- micro-obiettivi completati;
- minuti rimanenti;
- concetti rimanenti;
- prossimo checkpoint;
- progressione visiva.

Esempio:

> Hai completato 7 micro-obiettivi. Mancano 3 concetti al Boss Check.

## 5.5 Pulsante “Mi sto annoiando”

Quando premuto:

- cambia immediatamente formato;
- non perde la posizione;
- non elimina contenuti;
- passa da testo a schema, quiz, timeline, matching o visualizzazione.

## 5.6 Pulsante “Non ho capito”

Offrire:

- spiegazione più semplice;
- spiegazione universitaria;
- esempio;
- analogia;
- diagramma;
- confronto;
- applicazione a un’opera;
- percorso guidato.

---

# 6. Regola zero attrito

## 6.1 Non far digitare quasi nulla

Rapporto ideale:

- 70% click/tap;
- 20% drag and drop;
- 10% voce o scrittura.

Se un esercizio può essere completato senza digitare, progettarlo senza digitazione.

## 6.2 Durata delle risposte

La maggior parte delle attività deve richiedere 5-20 secondi.

La scrittura estesa è riservata a:

- simulazioni orali;
- eventuali note personali;
- risposte modello facoltative.

## 6.3 Flow Mode

Modalità continua, senza premere sempre “Avanti”.

Sequenza dinamica:

- mini spiegazione;
- quiz;
- schema;
- timeline;
- matching;
- popup;
- confronto;
- boss check.

Il flusso deve mantenere la sensazione di “ancora una”.

## 6.4 Lightning Round

- 10, 20 o 30 domande rapide;
- timer opzionale;
- feedback immediato;
- report finale;
- ripasso automatico degli errori.

---

# 7. Struttura del corso

Organizzare il programma in macro-unità.

## Macro-unità 1. Fondamenti teorici
- letteratura;
- mimesis;
- finzione;
- simbolo;
- sublime;
- canone;
- critica;
- ermeneutica;
- Bourdieu;
- Eagleton;
- Todorov;
- Eco;
- Bloom;
- Barthes;
- Sartre;
- jun bungaku;
- taishū bungaku;
- Tsubouchi.

## Macro-unità 2. Meiji, modernizzazione e lingua
- Tokugawa;
- bakufu;
- sakoku;
- Perry;
- trattati ineguali;
- Restaurazione;
- riforme;
- fukoku kyōhei;
- bunmei kaika;
- istruzione;
- Costituzione;
- modernizzazione;
- occidentalizzazione;
- individualismo;
- traduzioni;
- kokubungaku;
- kokugo;
- nihongo;
- genbun itchi;
- gabuntai;
- zokubuntai;
- orientalismo;
- auto-orientalismo;
- Cool Japan.

## Macro-unità 3. Nascita del romanzo moderno
- Tsubouchi Shōyō;
- Shōsetsu shinzui;
- ninjō;
- Futabatei Shimei;
- Ukigumo;
- realismo;
- interiorità;
- burocrazia;
- individuo e società.

## Macro-unità 4. Scrittura femminile e modernità
- tradizione Heian;
- sistema ie;
- educazione femminile;
- Higuchi Ichiyō;
- La tredicesima notte;
- Seitō;
- Yoshiya Nobuko;
- shōjo;
- dōseiai;
- gender studies.

## Macro-unità 5. Romanticismo e naturalismo
- Mori Ōgai;
- Izumi Kyōka;
- romanticismo;
- fantastico;
- simbolismo;
- naturalismo;
- Shimazaki Tōson;
- Tayama Katai;
- shishōsetsu.

## Macro-unità 6. Sōseki, Kafū e Tanizaki
- Natsume Sōseki;
- individualismo;
- egoismo;
- Kokoro;
- Io sono un gatto;
- Nagai Kafū;
- nostalgia di Edo;
- Tanizaki;
- eros;
- masochismo;
- estetica;
- Libro d’ombra;
- Neve sottile.

## Macro-unità 7. Poliziesco e modernismo
- tantei shōsetsu;
- Edogawa Ranpo;
- narratore inaffidabile;
- ero guro nansensu;
- Matsumoto Seichō;
- Akutagawa;
- Rashōmon;
- Kawabata;
- nuova sensibilità;
- cinema;
- Il paese delle nevi.

## Macro-unità 8. Guerra, trauma e bomba atomica
- trauma studies;
- belatedness;
- testimonianza;
- memoria;
- frammentazione;
- silenzio;
- genbaku bungaku;
- Ōta Yōko;
- Hayashi Kyōko;
- Ibuse Masuji;
- Nakazawa Keiji;
- Hara Tamiki;
- Tōge Sankichi;
- Wagō Ryōichi.

## Macro-unità 9. Dopoguerra e letteratura femminile
- Hayashi Fumiko;
- Enchi Fumiko;
- Maschere di donna;
- patriarcato;
- maternità;
- letteratura proletaria;
- Miyamoto Yuriko;
- Dazai;
- buraiha;
- Il sole si spegne.

## Macro-unità 10. Mishima, Ōe e Abe Kōbō
- Mishima;
- corpo;
- maschera;
- eros e thanatos;
- nazionalismo;
- Ōe;
- disabilità;
- responsabilità;
- ambiguità;
- Abe Kōbō;
- alienazione;
- La donna di sabbia.

## Macro-unità 11. Letteratura contemporanea
- world literature;
- traduzione;
- mercato;
- Murakami Ryū;
- Yoshimoto Banana;
- Murakami Haruki;
- cultura pop;
- perdita;
- memoria;
- mondi paralleli.

## Macro-unità 12. Noir, ecocritica e nuovi media
- Kirino Natsuo;
- Miyabe Miyuki;
- Minato Kanae;
- pink noir;
- ecocritica;
- Minamata;
- Fukushima;
- Densha otoko;
- keitai shōsetsu;
- cultura partecipativa.

---

# 8. Struttura di ogni lezione

Ogni lezione deve essere divisa in schermate brevi.

## 8.1 Orientamento
- cosa studieremo;
- perché è importante;
- dove si colloca;
- prerequisiti;
- tempo stimato;
- priorità.

## 8.2 Contesto
- periodo;
- trasformazioni;
- dibattito;
- problema storico.

## 8.3 Spiegazione
- definizione;
- sviluppo;
- terminologia;
- argomentazioni.

## 8.4 Approfondimento
- complessità;
- contraddizioni;
- limiti;
- interpretazioni.

## 8.5 Applicazione
- autore;
- opera;
- tecnica;
- esempio;
- interpretazione.

## 8.6 Collegamenti
- concetti;
- autori;
- movimenti;
- domande trasversali.

## 8.7 Recupero attivo
- quiz;
- matching;
- timeline;
- confronto;
- orale.

---

# 9. Livelli di profondità

Ogni argomento deve avere tre livelli accessibili senza eliminare informazioni.

## Essenziale
Per rispondere correttamente.

## Buona risposta
Contesto, tecniche, esempi e collegamenti.

## Eccellenza
Critiche, contraddizioni, interpretazioni, comparazioni e ricezione.

L’utente punta all’eccellenza, quindi il percorso completo deve includere tutti e tre.

---

# 10. Sistema visuale

Ogni concetto importante deve poter essere studiato in almeno otto modi:

1. spiegazione completa;
2. schema ad albero;
3. mappa concettuale;
4. tabella;
5. timeline;
6. diagramma causa-effetto;
7. quiz;
8. simulazione orale.

## 10.1 Schemi
- ad albero;
- sequenziali;
- causa-effetto;
- problema-risposta;
- autore-opera-tema-tecnica;
- continuità-discontinuità.

## 10.2 Mappe concettuali
- zoomabili;
- nodi cliccabili;
- collegamenti spiegati;
- filtri per tema;
- progressivamente illuminate.

## 10.3 Tabelle

Tabelle fondamentali:

### Autori
| Autore | Periodo | Movimento | Opere | Temi | Tecniche | Priorità |

### Opere
| Opera | Autore | Data | Contesto | Trama | Temi | Narratore | Tecniche |

### Movimenti
| Movimento | Periodo | Origine | Caratteristiche | Autori | Differenze |

### Teorie
| Teoria | Studioso | Definizione | Concetti chiave | Limiti | Applicazioni |

### Confronti
| Aspetto | Autore A | Autore B | Differenza fondamentale |

Ogni cella importante deve essere cliccabile.

## 10.4 Timeline
Mostrare insieme:

- storia;
- lingua;
- letteratura;
- movimenti;
- autori;
- opere;
- guerre;
- disastri;
- premi.

## 10.5 Schemi costruibili
L’utente deve poter:

- trascinare nodi;
- completare sequenze;
- ordinare cause;
- costruire confronti;
- ricomporre mappe.

---

# 11. Interattività testuale

## 11.1 Termini evidenziati

Evidenziare:

- termini giapponesi;
- teorie;
- movimenti;
- tecniche;
- autori;
- opere;
- eventi;
- istituzioni.

## 11.2 Hover e tap

Desktop: hover e focus.

Mobile/tablet: tap.

Mostrare:

- definizione breve;
- traduzione;
- contesto;
- esempio;
- collegamento.

## 11.3 Approfondisci

Aprire un pannello con:

- definizione estesa;
- etimologia;
- differenze;
- autori;
- opere;
- errore comune;
- domanda d’esame;
- collegamenti;
- aggiunta al ripasso.

## 11.4 Glossario dinamico

Categorie:

- teoria;
- storia;
- lingua;
- genere;
- tecnica;
- autore;
- opera;
- movimento;
- gender;
- trauma;
- ecocritica.

---

# 12. Tipi di esercizi

Implementare almeno:

1. scelta multipla;
2. vero/falso;
3. scegli l’affermazione falsa;
4. definizione corretta;
5. autore-opera;
6. opera-tema;
7. teoria-applicazione;
8. timeline;
9. causa-effetto;
10. completa la catena;
11. chi sono?;
12. trova l’intruso;
13. matching;
14. memory;
15. drag and drop;
16. ordina la risposta orale;
17. confronto rapido;
18. flashcard;
19. schema da costruire;
20. tabella da completare;
21. domande a cascata;
22. lightning round;
23. boss check;
24. boss finale;
25. simulazione professore severo.

## 12.1 Distrattori

Le risposte sbagliate devono essere plausibili.

Evitare quiz banali.

## 12.2 Feedback

Ogni risposta deve mostrare:

- corretto/sbagliato;
- perché;
- distinzione utile;
- collegamento;
- eventuale errore ricorrente.

---

# 13. Simulatore orale

## Modalità guidata
- domanda;
- struttura;
- parole chiave;
- timer;
- risposta modello.

## Modalità reale
- solo domanda;
- timer;
- autovalutazione.

## Modalità professore severo
Domande concatenate:

- definisca;
- non basta;
- perché?;
- esempio;
- limite;
- confronto;
- cosa cambia nel dopoguerra?;
- come si collega all’opera?

## Registrazione voce
Quando tecnicamente fattibile in locale:

- registrare;
- riascoltare;
- cronometrare;
- salvare autovalutazione.

Non rendere la registrazione obbligatoria.

---

# 14. Progressione

## 14.1 Barre a più livelli

Mostrare:

- corso;
- macro-unità;
- topic;
- lezione;
- schermata;
- padronanza.

Esempio:

- Corso: 41%
- Macro-unità: 63%
- Topic: 70%
- Lezione: 92%
- Padronanza: 58%

## 14.2 “Quanto manca?”

Sempre visibile:

- minuti stimati;
- numero di micro-obiettivi;
- attività rimanenti;
- quiz rimanenti;
- prossimo checkpoint.

Esempio:

> Ti mancano 6 minuti e 3 attività per completare questo topic.

## 14.3 Mini mappa laterale

- Definizione;
- Contesto;
- Approfondimento;
- Applicazione;
- Collegamenti;
- Quiz;
- Orale.

## 14.4 Stati

- non iniziato;
- visto;
- capito;
- ricordato;
- so spiegarlo;
- so collegarlo;
- padroneggiato.

---

# 15. Learning Engine adattivo

Salvare:

- errori;
- risposte corrette;
- tempo;
- sicurezza;
- ripassi;
- ultimo accesso;
- termini confusi;
- formato più efficace;
- concetti forti e deboli.

## 15.1 Tipi di errore

Distinguere:

- non conosce;
- confonde due concetti;
- dimentica un dettaglio;
- non comprende la causa;
- non collega teoria e opera;
- risposta casuale;
- conoscenza instabile.

## 15.2 Ripasso

Riproporre più spesso:

- concetti a priorità alta;
- errori;
- risposte corrette con bassa sicurezza;
- contenuti non ripassati;
- coppie confuse;
- collegamenti mancanti.

## 15.3 Pulsante “Non ricordo”

Non penalizzare.

Aggiungere al ripasso e mostrare una spiegazione alternativa.

---

# 16. Knowledge Coverage

Un concetto è completo soltanto se l’utente sa:

- definirlo;
- contestualizzarlo;
- spiegarne la causa;
- distinguerlo;
- applicarlo;
- fare un esempio;
- collegarlo;
- rispondere oralmente;
- evitare gli errori comuni.

Mostrare una matrice di copertura.

---

# 17. Modalità speciali

## 17.1 Piano 48 ore

Giorno 1:
- fondamenti;
- Meiji;
- lingua;
- romanzo moderno;
- scrittura femminile;
- naturalismo;
- Sōseki;
- Tanizaki;
- Akutagawa;
- Kawabata.

Giorno 2:
- trauma;
- bomba atomica;
- dopoguerra;
- Dazai;
- Mishima;
- Ōe;
- Abe;
- contemporaneità;
- noir;
- ecocritica;
- simulazioni.

## 17.2 Ripasso d’emergenza
Mostrare:

- concetti 5 stelle;
- autori principali;
- opere principali;
- termini;
- differenze;
- collegamenti;
- errori.

## 17.3 Solo errori
Mostrare esclusivamente elementi deboli.

## 17.4 Compression Mode
Per argomenti già compresi:

- schema;
- errori;
- collegamenti;
- domanda orale.

## 17.5 Expand Mode
Per argomenti difficili:

- spiegazione completa;
- esempi;
- teorie;
- confronti;
- visualizzazioni.

## 17.6 Focus Mode
Nascondere:

- menu;
- statistiche secondarie;
- distrazioni.

Mantenere:

- contenuto;
- progresso;
- tempo;
- prossimo passo.

## 17.7 Modalità Esame
Nascondere:

- evidenziazioni;
- tooltip;
- aiuti;
- risposte.

## 17.8 Modalità “Non so nulla”
- mappa generale;
- 20 concetti essenziali;
- diagnostico rapido;
- un solo prossimo passo;
- nessuna schermata opprimente.

---

# 18. Dashboard

Mostrare:

- avanzamento;
- tempo all’esame;
- ore stimate;
- missione del giorno;
- topic deboli;
- ripassi;
- domande orali;
- copertura;
- categorie;
- prossimo passo;
- pulsante “Continua”.

Categorie:

- teoria;
- storia;
- autori;
- opere;
- movimenti;
- lingua;
- gender;
- trauma;
- contemporaneità.

Non mostrare una falsa “probabilità di 30” come previsione scientifica. Usare invece:

- copertura;
- padronanza;
- sicurezza;
- prontezza orale.

---

# 19. Design system

## 19.1 Direzione visiva

Stile:

- moderno;
- premium;
- accademico;
- energico;
- femminile senza essere infantile;
- morbido;
- luminoso;
- memorabile.

## 19.2 Colori

### Primari
- Rosa: `#EC4899`
- Viola: `#7C3AED`
- Vermiglio: `#E34234`

### Varianti
- Rosa chiaro: `#FCE7F3`
- Viola chiaro: `#EDE9FE`
- Vermiglio chiaro: `#FDE8E6`
- Rosa intenso: `#DB2777`
- Viola intenso: `#6D28D9`
- Vermiglio intenso: `#C9342B`

### Sfondo chiaro
- `#FFF8FC`
- `#FFFDFE`

### Sfondo scuro
- `#16131F`
- `#211A2A`

### Testo
- `#1F1724`
- `#FAF7FB`

### Gradient
Rosa → Viola → Vermiglio.

Il tema chiaro e quello scuro devono mantenere la stessa identità cromatica.

## 19.3 Disegnini decorativi

Integrare piccoli elementi illustrativi coerenti:

- nuvole;
- cuori;
- stelline;
- scintille;
- fiori stilizzati;
- onde;
- lune;
- piccoli libri;
- segnalibri;
- bolle;
- nastri;
- petali.

Regole:

- usare SVG originali o CSS shapes;
- decorativi, non invasivi;
- mai ostacolare la lettura;
- non rendere il prodotto infantile;
- usare elementi morbidi negli stati vuoti, header, achievement e transizioni;
- evitare clipart casuale;
- mantenere coerenza tra chiaro e scuro;
- rispettare `prefers-reduced-motion`.

## 19.4 Nuvole e cuori

Le nuvole possono:

- contenere consigli;
- indicare pensieri;
- accompagnare spiegazioni semplificate;
- mostrare “Aha moments”.

I cuori possono:

- segnare concetti preferiti;
- indicare argomenti padroneggiati;
- decorare micro-successi;
- sostituire elementi gamificati troppo infantili con una versione elegante.

## 19.5 Tipografia

Usare font leggibili.

Titoli espressivi ma chiari.

Corpo con ottima leggibilità.

Evitare caratteri troppo sottili, soprattutto sul viola e sul vermiglio.

## 19.6 UI

- cards con gerarchia chiara;
- bordi morbidi;
- ombre leggere;
- spazio sufficiente;
- pulsanti grandi;
- touch targets accessibili;
- feedback visivo immediato;
- niente eccesso di padding;
- niente schermate vuote inutili.

---

# 20. Animazioni

Usare:

- fade;
- slide;
- piccole scale;
- progress animation;
- micro-celebrazioni;
- illuminazione dei nodi.

Evitare:

- animazioni lente;
- rimbalzi continui;
- movimento eccessivo;
- effetti che rallentano lo studio.

---

# 21. Accessibilità

Supportare:

- mouse;
- touch;
- tastiera;
- screen reader;
- focus visibile;
- Esc per chiudere;
- ARIA;
- contrasto;
- reduced motion.

Non affidarsi soltanto al colore.

---

# 22. Componenti principali

Creare componenti riutilizzabili:

- `LessonPlayer`
- `MicroGoalCard`
- `ProgressBar`
- `TopicProgress`
- `StudyTerm`
- `GlossaryTooltip`
- `DeepDivePanel`
- `QuizEngine`
- `MatchingGame`
- `TimelineGame`
- `MemoryGame`
- `DiagramBuilder`
- `ComparisonTable`
- `KnowledgeMap`
- `OralSimulator`
- `BossCheck`
- `LightningRound`
- `MomentumBar`
- `ConfidenceSelector`
- `AttentionSwitch`
- `BoredButton`
- `DontUnderstandButton`
- `DecorativeCloud`
- `DecorativeHeart`
- `DecorativeSparkle`
- `CoverageMatrix`

---

# 23. Modello dati

Esempio:

```ts
type Priority = 1 | 2 | 3 | 4 | 5;

type Lesson = {
  id: string;
  macroUnitId: string;
  topicId: string;
  title: string;
  objectives: string[];
  estimatedMinutes: number;
  priority: Priority;
  sections: LessonSection[];
  glossaryTermIds: string[];
  exerciseIds: string[];
  oralQuestionIds: string[];
  sourcePages: number[];
};

type GlossaryTerm = {
  id: string;
  label: string;
  reading?: string;
  translation?: string;
  category: string;
  shortDefinition: string;
  fullExplanation: string;
  examples: string[];
  commonMistakes: string[];
  relatedTermIds: string[];
  relatedAuthorIds: string[];
  relatedWorkIds: string[];
  priority: Priority;
  sourcePages: number[];
};

type ProgressRecord = {
  entityId: string;
  seen: boolean;
  understood: boolean;
  recalled: boolean;
  explained: boolean;
  connected: boolean;
  mastery: number;
  confidence: number;
  attempts: number;
  errors: string[];
  lastReviewedAt?: string;
};
```

---

# 24. QA

Prima di completare una macro-unità verificare:

- copertura PDF;
- spiegazioni complete;
- termini;
- autori;
- opere;
- date;
- teorie;
- applicazioni;
- schemi;
- tabelle;
- timeline;
- quiz;
- orale;
- mobile;
- accessibilità;
- tema chiaro/scuro;
- persistenza progressi.

---

# 25. Criteri di successo

Il prodotto è riuscito se:

- l’utente non deve chiedersi cosa fare dopo;
- l’utente vede sempre quanto manca;
- nessuna lezione appare infinita;
- il formato cambia frequentemente;
- la maggior parte delle risposte richiede un tap;
- gli errori producono spiegazioni migliori;
- tutto il PDF è coperto;
- ogni autore e opera è collegato al contesto;
- l’utente può passare da spiegazione a schema, tabella o quiz;
- l’utente arriva alle simulazioni orali con una struttura mentale chiara;
- il sito mantiene un’identità rosa, viola e vermiglio;
- nuvole, cuori e piccoli disegni rendono l’esperienza più viva senza renderla infantile.

---

# 26. Ordine di implementazione obbligatorio

## MVP funzionante
1. setup;
2. design system;
3. routing;
4. dashboard;
5. progress engine;
6. lesson player;
7. tooltip;
8. quiz engine;
9. una macro-unità completa;
10. piano 48 ore;
11. build e test.

## Seconda fase
1. tutte le macro-unità;
2. matching;
3. timeline;
4. tabelle;
5. schemi;
6. oral simulator;
7. review engine;
8. coverage matrix.

## Terza fase
1. flow mode;
2. adaptive teaching;
3. knowledge map;
4. diagram builder;
5. voice recording;
6. polish;
7. accessibilità;
8. QA finale.

Non lasciare il progetto in uno stato non avviabile.

Se non è possibile completare tutto nella stessa sessione, consegna sempre una versione funzionante e continua dalla roadmap senza richiedere conferma.


---

# 27. CONSOLIDAMENTO FINALE: REGOLE NON NEGOZIABILI

Questa sezione prevale in caso di ambiguità.

## 27.1 Prima versione già studiabile

La prima milestone non può essere soltanto infrastruttura.

Deve includere una vertical slice completa con:

- dashboard;
- navigazione;
- barra di avanzamento del corso, della macro-unità, del topic e della lezione;
- indicazione dei minuti e delle attività rimanenti;
- lesson player;
- micro-obiettivi;
- tooltip al passaggio del mouse e al tocco;
- pannelli di approfondimento;
- schemi;
- tabelle;
- timeline;
- quiz rapidi;
- matching;
- boss check;
- simulazione orale;
- salvataggio locale;
- tema chiaro e scuro;
- palette rosa, viola e vermiglio;
- nuvole, cuori, fiori, scintille e altri piccoli SVG;
- contenuti reali, completi e approfonditi.

Devono essere studiabili almeno:

1. fondamenti teorici, canone e critica;
2. Meiji, modernizzazione, lingua e orientalismo;
3. Tsubouchi Shōyō, Futabatei Shimei e nascita del romanzo moderno.

Criterio di accettazione:

> L’utente apre l’app e può studiare concretamente per diverse ore senza consultare il PDF per capire le basi.

## 27.2 Velocità percepita

L’utente deve sentire di avanzare rapidamente.

Perciò:

- la maggioranza degli esercizi richiede un solo click o tap;
- non richiedere risposte scritte estese durante il percorso ordinario;
- usare risposte orali soltanto dopo aver consolidato il contenuto;
- mostrare sempre il prossimo micro-obiettivo;
- evitare schermate che sembrano infinite;
- cambiare stimolo frequentemente;
- usare attività da 5-20 secondi;
- non obbligare a premere continuamente “Avanti” in Flow Mode.

## 27.3 Completezza senza sovraccarico

Non eliminare informazioni per rendere la lezione più breve.

Suddividere invece le informazioni in:

- micro-schermate;
- tab;
- accordion;
- tooltip;
- approfondimenti;
- schemi;
- tabelle;
- confronti;
- timeline;
- esercizi.

La profondità totale deve restare adatta a un esame universitario e a un obiettivo di eccellenza.

## 27.4 Ogni concetto in almeno otto forme

Ogni concetto centrale deve poter essere affrontato come:

1. spiegazione completa;
2. schema;
3. mappa concettuale;
4. tabella;
5. timeline o sequenza;
6. causa-effetto;
7. quiz o gioco rapido;
8. domanda orale con risposta modello.

## 27.5 Copertura dell’intero file

Nessuna pagina del PDF può essere ignorata senza una decisione documentata.

Le priorità indicano:

- ordine;
- profondità iniziale;
- frequenza di ripasso.

Non autorizzano l’omissione.

## 27.6 Nessuna falsa valutazione scientifica

Non mostrare una “probabilità di prendere 30” come dato scientifico.

Mostrare invece:

- copertura del programma;
- padronanza;
- sicurezza;
- prontezza orale;
- categorie forti e deboli.

## 27.7 Locale e offline

Dopo l’installazione iniziale, tutte le funzioni fondamentali devono essere utilizzabili senza internet.

L’eventuale AI futura deve essere facoltativa.

## 27.8 Autonomia di Codex

Codex non deve fermarsi per chiedere conferme ordinarie.

Deve:

- decidere in modo ragionevole;
- registrare le decisioni;
- testare;
- correggere;
- aggiornare la TODO;
- passare al task successivo;
- mantenere sempre il progetto avviabile.

---

# 28. PROMPT UNICO DA INCOLLARE IN CODEX

Leggi integralmente `Cultura_Letteratura_Giapponese_2_MASTER_SPEC.md` e trattalo come specifica obbligatoria e fonte di verità per il progetto.

Usa come fonte primaria `Cultura e Letteratura Giapponese 2.pdf` e, se disponibile, `Exam_Study_Coordinator.md`.

Implementa una web app interamente locale per studiare tutto il programma. Non creare un semplice sito di appunti, un riassunto o un’interfaccia vuota. Crea un motore di apprendimento universitario interattivo, adattivo, veloce, approfondito e immediatamente studiabile.

Non fermarti per chiedere conferma quando puoi prendere una decisione ragionevole. Non chiedere “Vuoi che continui?”, “Posso procedere?” o domande equivalenti. Mantieni aggiornati `ROADMAP.md`, `TODO.md`, `DECISIONS.md`, `CONTENT_COVERAGE.md`, `QA_CHECKLIST.md` e `CHANGELOG.md`.

Segui la roadmap da 120 task nell’ordine indicato, rispettando le dipendenze. Dopo ogni task:

1. implementa;
2. esegui i test pertinenti;
3. correggi gli errori;
4. aggiorna i file di stato;
5. passa automaticamente al task successivo.

La prima milestone deve essere già utilizzabile per studiare e deve includere i primi tre blocchi completi con contenuti reali, spiegazioni approfondite, schemi, tabelle, timeline, tooltip, quiz rapidi senza scrittura, progressione, boss check e simulazione orale.

L’utente perde facilmente la concentrazione, ma ricorda stabilmente ciò che comprende. Riduci il tempo tra uno stimolo e l’altro, non la quantità complessiva di contenuto. Non superare normalmente 180-250 parole consecutive senza una variazione interattiva. Preferisci click, tap e drag and drop. Se un esercizio può essere svolto senza digitare, non richiedere digitazione.

L’utente punta all’eccellenza. Non omettere parti del PDF. Usa `CONTENT_COVERAGE.md` per mappare ogni pagina, autore, opera, teoria, termine, domanda ed esercizio.

Il design deve usare rosa, viola e vermiglio in tema chiaro e scuro. Integra piccoli SVG coerenti, tra cui nuvole, cuori, fiori, scintille, stelle, libri, nastri e petali, senza rendere il prodotto infantile.

Se incontri un errore, prova più strategie, correggi e continua. Se il contesto disponibile si riduce, completa e testa l’incremento corrente, aggiorna tutti i file di stato e lascia il progetto avviabile. Non perdere lo stato e non consegnare soltanto infrastruttura vuota.

Inizia ora dal task 1 e continua autonomamente con il massimo lavoro concretamente realizzabile.

---

# 29. ROADMAP OPERATIVA DA 120 TASK

1. [ ] Creare il progetto React, Vite e TypeScript.
2. [ ] Configurare Tailwind CSS e il reset globale.
3. [ ] Configurare React Router.
4. [ ] Configurare ESLint, Prettier e TypeScript strict.
5. [ ] Creare gli script npm per dev, build, lint e test.
6. [ ] Definire la struttura delle cartelle del progetto.
7. [ ] Creare PROJECT_BIBLE.md nel repository.
8. [ ] Creare ROADMAP.md nel repository.
9. [ ] Creare TODO.md nel repository.
10. [ ] Creare DECISIONS.md nel repository.
11. [ ] Creare CONTENT_COVERAGE.md nel repository.
12. [ ] Creare QA_CHECKLIST.md nel repository.
13. [ ] Creare CHANGELOG.md nel repository.
14. [ ] Definire il modello dati per macro-unità, topic e lezioni.
15. [ ] Definire il modello dati per autori, opere e movimenti.
16. [ ] Definire il modello dati per termini di glossario.
17. [ ] Definire il modello dati per quiz ed esercizi.
18. [ ] Definire il modello dati per domande orali e risposte modello.
19. [ ] Definire il modello dati per progresso e padronanza.
20. [ ] Definire il modello dati per errori e confusioni ricorrenti.
21. [ ] Definire il modello dati per sourcePages e copertura del PDF.
22. [ ] Creare il design token system.
23. [ ] Implementare la palette rosa, viola e vermiglio.
24. [ ] Implementare tema chiaro.
25. [ ] Implementare tema scuro.
26. [ ] Creare il sistema tipografico.
27. [ ] Creare il sistema di spaziatura e dimensioni.
28. [ ] Creare pulsanti, card, badge e alert di base.
29. [ ] Creare icone e SVG locali.
30. [ ] Creare DecorativeCloud.
31. [ ] Creare DecorativeHeart.
32. [ ] Creare DecorativeSparkle.
33. [ ] Creare DecorativeFlower e DecorativeRibbon.
34. [ ] Creare il layout principale.
35. [ ] Creare la sidebar responsive.
36. [ ] Creare la top bar.
37. [ ] Creare breadcrumb.
38. [ ] Creare la dashboard iniziale.
39. [ ] Mostrare il countdown manuale all’esame.
40. [ ] Mostrare ore stimate rimanenti.
41. [ ] Mostrare missione del giorno.
42. [ ] Mostrare categorie forti e deboli.
43. [ ] Mostrare il prossimo passo automatico.
44. [ ] Implementare il motore di persistenza con localStorage.
45. [ ] Implementare esportazione dei progressi in JSON.
46. [ ] Implementare importazione dei progressi da JSON.
47. [ ] Implementare backup e reset locale.
48. [ ] Creare il progress engine a più livelli.
49. [ ] Implementare progresso del corso.
50. [ ] Implementare progresso della macro-unità.
51. [ ] Implementare progresso del topic.
52. [ ] Implementare progresso della lezione.
53. [ ] Implementare progresso della schermata.
54. [ ] Implementare padronanza separata dal completamento.
55. [ ] Mostrare tempo e attività rimanenti per ogni topic.
56. [ ] Creare la mini mappa laterale della lezione.
57. [ ] Creare LessonPlayer.
58. [ ] Creare MicroGoalCard.
59. [ ] Implementare micro-obiettivi da 3-6 minuti.
60. [ ] Implementare il cambio di formato ogni 2-3 minuti.
61. [ ] Limitare i blocchi testuali consecutivi.
62. [ ] Creare MomentumBar.
63. [ ] Creare Focus Mode.
64. [ ] Creare Flow Mode senza click continui su Avanti.
65. [ ] Creare il pulsante Mi sto annoiando.
66. [ ] Creare il pulsante Non ho capito.
67. [ ] Creare le modalità Essenziale, Buona risposta ed Eccellenza.
68. [ ] Creare Compression Mode.
69. [ ] Creare Expand Mode.
70. [ ] Creare modalità Lettura pulita.
71. [ ] Creare modalità Lettura guidata.
72. [ ] Creare modalità Studio intensivo.
73. [ ] Creare StudyTerm.
74. [ ] Creare tooltip desktop con hover e focus.
75. [ ] Creare tooltip mobile con tap.
76. [ ] Creare DeepDivePanel.
77. [ ] Creare il glossario dinamico.
78. [ ] Collegare glossario, autori, opere, lezioni e domande.
79. [ ] Implementare ricerca globale.
80. [ ] Creare schede autore complete.
81. [ ] Creare schede opera complete.
82. [ ] Creare schede movimento complete.
83. [ ] Creare schede teoria complete.
84. [ ] Creare tabelle comparative interattive.
85. [ ] Creare tabelle autori, opere, movimenti e teorie.
86. [ ] Rendere cliccabili le celle rilevanti.
87. [ ] Creare schemi ad albero.
88. [ ] Creare diagrammi causa-effetto.
89. [ ] Creare flowchart.
90. [ ] Creare mappe concettuali navigabili.
91. [ ] Creare KnowledgeMap globale.
92. [ ] Creare timeline storica e letteraria.
93. [ ] Creare filtri timeline.
94. [ ] Creare DiagramBuilder drag and drop.
95. [ ] Creare QuizEngine.
96. [ ] Creare domande a scelta multipla con distrattori plausibili.
97. [ ] Creare vero/falso ragionato.
98. [ ] Creare trova l’intruso.
99. [ ] Creare chi sono.
100. [ ] Creare completa la catena logica.
101. [ ] Creare matching autore-opera e teoria-applicazione.
102. [ ] Creare MemoryGame.
103. [ ] Creare TimelineGame.
104. [ ] Creare confronto rapido.
105. [ ] Creare flashcard attive.
106. [ ] Creare tabelle da completare.
107. [ ] Creare BossCheck, Boss finale e Lightning Round.
108. [ ] Implementare feedback spiegato, selezione della sicurezza e pulsante Non ricordo.
109. [ ] Creare il motore adattivo, classificare gli errori e proporre spiegazioni alternative.
110. [ ] Creare Knowledge Coverage per ogni concetto.
111. [ ] Creare OralSimulator guidato, reale e modalità Professore severo con domande concatenate.
112. [ ] Implementare registrazione vocale locale facoltativa.
113. [ ] Creare Piano 48 ore, Ripasso d’emergenza, Solo errori e modalità Non so nulla.
114. [ ] Analizzare e mappare tutto il PDF pagina per pagina nella coverage matrix.
115. [ ] Completare la macro-unità 1 con contenuti reali, esercizi e risposte orali.
116. [ ] Completare la macro-unità 2 con contenuti reali, esercizi e risposte orali.
117. [ ] Completare la macro-unità 3 con contenuti reali, esercizi e risposte orali.
118. [ ] Testare e rifinire la vertical slice studiabile end to end.
119. [ ] Completare progressivamente le macro-unità 4-12 e i relativi esercizi.
120. [ ] Verificare la copertura integrale del PDF ed eseguire QA, accessibilità, responsive e build finale.

---

# 30. DEFINIZIONE DI “FATTO”

Un task è completato solo quando:

- il codice è implementato;
- il progetto compila;
- la funzione è collegata al flusso reale;
- è verificata almeno manualmente;
- non rompe il tema chiaro o scuro;
- funziona su desktop e touch quando pertinente;
- salva correttamente lo stato quando necessario;
- la documentazione è aggiornata;
- la TODO è aggiornata.

Una macro-unità è completata solo quando:

- tutte le pagine PDF associate sono mappate;
- le spiegazioni sono approfondite;
- autori, opere, concetti e termini sono presenti;
- sono disponibili schemi e tabelle;
- sono presenti esercizi rapidi;
- sono presenti domande orali e risposte modello;
- la copertura è verificata;
- il percorso è realmente studiabile.

---

# 31. RISULTATO ATTESO DELLA PRIMA SESSIONE LUNGA

Alla conclusione della prima sessione lunga, Codex deve privilegiare questo risultato:

1. progetto avviabile;
2. identità visiva implementata;
3. dashboard e progressione funzionanti;
4. lesson player funzionante;
5. quiz engine funzionante;
6. glossario e tooltip funzionanti;
7. almeno i primi tre blocchi studiabili;
8. stato documentato;
9. build verificata;
10. percorso chiaro per continuare automaticamente.

Una piattaforma meno completa ma realmente studiabile è preferibile a molte funzioni parziali e nessun contenuto utilizzabile.
