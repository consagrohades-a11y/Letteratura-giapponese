# PROMPT UNICO PER CODEX
## Redesign completo, ADHD-safe e coerente con lo stile del progetto

Leggi integralmente questo prompt prima di modificare il codice.

Devi intervenire sull’app esistente senza ricostruirla da zero e senza perdere funzionalità, dati, progressi, contenuti, quiz o routing già presenti.

L’attuale tema scuro funziona e può restare come base, ma il prodotto è ancora troppo austero, troppo simile a una dashboard accademica e poco riconoscibile come stile personale dell’utente.

L’obiettivo è trasformarlo in una piattaforma di studio:

- molto più ADHD-safe;
- più calda;
- più personale;
- più dinamica;
- più visivamente ricca;
- più veloce da scansionare;
- più facile da usare per molte ore;
- più coerente con una palette rosa, viola e vermiglio;
- elegante e premium, ma non fredda;
- morbida e creativa, ma non infantile.

Non chiedere conferma durante il lavoro quando puoi prendere una decisione ragionevole.

Non chiedere:

- “Vuoi che continui?”
- “Preferisci A o B?”
- “Posso procedere?”
- “Vuoi anche questo?”

Analizza il codice esistente, definisci un piano interno, implementa, testa, correggi e continua autonomamente fino a completare il redesign.

# 1. Problemi attuali da risolvere

## 1.1 Aspetto troppo austero

L’interfaccia attuale comunica:

- serietà;
- ordine;
- dashboard accademica;
- prodotto amministrativo.

Deve invece comunicare:

- studio guidato;
- energia;
- leggerezza;
- ritmo;
- progressione;
- personalità;
- creatività;
- supporto cognitivo.

Il tema scuro non deve sembrare una superficie quasi nera con pochi accenti viola.

Deve sembrare un ambiente di studio creativo, premium e coinvolgente.

## 1.2 Troppo nero uniforme

Ridurre le grandi aree di nero o viola quasi nero uniforme.

Aggiungere:

- gradienti profondi;
- bagliori rosa;
- bagliori viola;
- accenti vermigli;
- superfici differenziate;
- pattern molto leggeri;
- elementi illustrativi morbidi.

Il risultato deve restare leggibile e non rumoroso.

## 1.3 Gerarchia tipografica troppo pesante

La tipografia attuale è troppo grande o troppo austera in alcune aree.

Serve:

- più compattezza;
- più leggibilità;
- più differenza tra titoli, corpo, metadata e badge;
- meno serif;
- più sans-serif nei contenuti e nelle tabelle;
- meno spazi vuoti causati da titoli enormi.

## 1.4 Padding troppo ampio

Alcune card occupano molto spazio rispetto al contenuto.

Serve:

- ridurre padding verticali;
- ridurre margini inutili;
- mostrare più contenuto nella stessa viewport;
- mantenere aria solo dove aiuta davvero;
- distinguere spazio tra sezioni da spazio tra elementi correlati.

## 1.5 Pagina Atlante illeggibile

Correggere completamente:

- testi concatenati;
- tag senza gap;
- colonne compresse;
- overflow;
- sovrapposizioni;
- contributi troppo lunghi;
- allineamenti inconsistenti;
- font inadatto alle tabelle;
- righe difficili da scansionare.

## 1.6 Mancanza di identità visiva

Integrare in modo coerente:

- nuvole;
- cuori;
- scintille;
- stelline;
- fiori stilizzati;
- petali;
- onde;
- lune;
- piccoli libri;
- segnalibri;
- nastri;
- bolle.

Non usare clipart casuale.

Creare SVG locali o elementi CSS coerenti con il design system.

# 2. Principio centrale: ADHD-safe

L’interfaccia deve essere progettata per una persona che:

- perde facilmente la concentrazione;
- si annoia con testi lunghi e lineari;
- ha bisogno di stimoli frequenti;
- vuole procedere rapidamente;
- si sente rallentata quando deve scrivere molto;
- ricorda bene ciò che comprende davvero;
- ha bisogno di vedere sempre quanto manca;
- si blocca davanti a percorsi che sembrano infiniti;
- ha bisogno di un prossimo passo evidente.

Il prodotto deve ridurre il carico cognitivo e mantenere il ritmo.

La regola fondamentale è:

> Riduci il tempo tra uno stimolo e l’altro, non la quantità complessiva di contenuto.

# 3. Regole ADHD-safe obbligatorie

## 3.1 Mostrare poco per volta

Ogni schermata deve concentrarsi su:

- un concetto principale;
- un obiettivo;
- una piccola azione;
- un prossimo passo.

Non mostrare troppi elementi con lo stesso peso visivo.

## 3.2 Nessun muro di testo

Non mostrare grandi blocchi tutti insieme.

Spezzare con:

- card;
- tab;
- accordion;
- schemi;
- tabelle;
- quiz;
- confronti;
- tooltip;
- timeline;
- micro-obiettivi;
- callout;
- mappe.

Non ridurre le informazioni. Ridurre soltanto la quantità visibile nello stesso momento.

## 3.3 Nuovo stimolo ogni 1 o 2 minuti

Durante una lezione, alternare:

1. mini spiegazione;
2. schema;
3. domanda rapida;
4. tabella;
5. esempio;
6. confronto;
7. mini quiz;
8. progress update;
9. collegamento;
10. mini orale.

## 3.4 Un solo punto di attenzione principale

Ogni viewport deve avere una chiara azione primaria.

Evitare:

- troppi pulsanti equivalenti;
- troppe card con lo stesso peso;
- troppi badge;
- più call to action concorrenti.

## 3.5 Progresso sempre visibile

Mostrare sempre:

- dove sono;
- quanto manca;
- cosa viene dopo;
- quanto tempo serve;
- cosa ho appena completato.

Usare progressi separati per:

- corso;
- macro-unità;
- topic;
- lezione;
- schermata;
- padronanza.

Esempio:

> Ti mancano 6 minuti e 3 attività per completare questo topic.

## 3.6 Micro-obiettivi

Non mostrare:

> Studia il Meiji.

Mostrare:

> Capire perché cade il bakufu, 4 minuti.

Ogni micro-obiettivo deve avere:

- tempo stimato;
- risultato;
- verifica;
- progresso.

## 3.7 Velocità percepita

La maggioranza delle attività deve richiedere:

- un tap;
- un click;
- una selezione;
- un drag and drop.

Non richiedere digitazione se non è indispensabile.

La maggior parte delle attività deve durare tra 5 e 20 secondi.

## 3.8 Feedback immediato

Dopo ogni azione mostrare un feedback concreto.

Esempi:

- “Ora sai distinguere kokugo e nihongo.”
- “Manca solo il rapporto con lo Stato-nazione.”
- “Hai risolto una confusione ricorrente.”
- “Ancora due attività al checkpoint.”

Evitare feedback generici come:

- “Brava!”
- “Ottimo lavoro!”

senza spiegare cosa è stato acquisito.

## 3.9 Pulsante “Mi sto annoiando”

Il pulsante deve:

- cambiare formato;
- mantenere lo stesso contenuto;
- non perdere la posizione;
- passare da testo a schema, timeline, confronto, matching o quiz.

## 3.10 Pulsante “Non ho capito”

Offrire una scelta tra:

- spiegazione più semplice;
- spiegazione universitaria;
- esempio concreto;
- analogia;
- schema;
- tabella;
- timeline;
- confronto;
- applicazione a un’opera.

# 4. Direzione visiva

## 4.1 Stile

Il prodotto deve essere:

- moderno;
- premium;
- accademico;
- morbido;
- energico;
- creativo;
- personale;
- femminile senza essere infantile;
- visivamente memorabile;
- rassicurante;
- dinamico.

## 4.2 Palette

Colori principali:

- Rosa: `#EC4899`
- Viola: `#7C3AED`
- Vermiglio: `#E34234`

Varianti:

- Rosa chiaro: `#FCE7F3`
- Viola chiaro: `#EDE9FE`
- Vermiglio chiaro: `#FDE8E6`
- Rosa intenso: `#DB2777`
- Viola intenso: `#6D28D9`
- Vermiglio intenso: `#C9342B`

Tema scuro:

- Sfondo 1: `#16131F`
- Sfondo 2: `#211A2A`
- Superficie: `#261D32`
- Superficie elevata: `#30223D`

Tema chiaro:

- Sfondo 1: `#FFF8FC`
- Sfondo 2: `#FFFDFE`
- Superficie: `#FFFFFF`

Testo:

- Scuro: `#1F1724`
- Chiaro: `#FAF7FB`

Gradient principale:

> Rosa → Viola → Vermiglio

## 4.3 Distribuzione del colore

Non usare rosa, viola e vermiglio soltanto per icone o titoli piccoli.

Usarli anche in:

- card;
- progress bar;
- bordi;
- badge;
- superfici;
- tab attivi;
- quiz;
- callout;
- background glow;
- sezioni;
- focus state.

Mantenere però un contrasto leggibile.

## 4.4 Tema scuro

Mantenere il tema scuro come modalità principale.

Renderlo:

- meno nero;
- più stratificato;
- più caldo;
- più ricco;
- più morbido;
- più coerente con rosa, viola e vermiglio.

Usare:

- gradienti radiali;
- bagliori soffusi;
- bordi colorati trasparenti;
- ombre morbide;
- superfici differenziate.

Non usare sfondi in movimento continuo.

## 4.5 Tema chiaro

Il tema chiaro deve avere la stessa identità.

Non deve diventare un’interfaccia generica bianca.

Usare:

- rosa pallido;
- lavanda;
- vermiglio molto chiaro;
- gradienti leggeri;
- decorazioni morbide;
- bordi caldi.

# 5. Tipografia

## 5.1 Regole generali

Usare:

- sans-serif molto leggibile per corpo, tabelle, badge, sidebar, quiz e controlli;
- serif elegante solo per titoli principali o titoli di macro-unità;
- niente serif nelle tabelle;
- niente font troppo sottili;
- niente titoli eccessivamente grandi;
- niente parole concatenate.

## 5.2 Font stack locali

Sans-serif:

`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Serif:

`Georgia, "Times New Roman", serif`

Se un font serif locale già presente è coerente e leggibile, può essere usato.

Non dipendere da Google Fonts o CDN.

## 5.3 Scala tipografica

Desktop:

- Hero title: `clamp(2.4rem, 4.5vw, 4rem)`
- Titolo pagina: `clamp(1.9rem, 3vw, 2.8rem)`
- Titolo macro-unità: `1.5rem - 1.9rem`
- Titolo lezione: `1rem - 1.125rem`
- Corpo principale: `1rem`
- Corpo secondario: `0.875rem - 0.9375rem`
- Tabelle: `0.875rem - 0.9375rem`
- Badge: `0.75rem - 0.8125rem`
- Metadata: `0.75rem - 0.8125rem`

## 5.4 Line-height

- Titoli grandi: `1.05 - 1.15`
- Titoli medi: `1.2 - 1.3`
- Corpo: `1.55 - 1.7`
- Tabelle: `1.35 - 1.5`
- Badge: `1.1 - 1.2`

## 5.5 Larghezza del testo

- Spiegazioni: massimo 65-75 caratteri per riga.
- Descrizioni card: 55-70 caratteri.
- Evitare paragrafi troppo larghi.

## 5.6 Font weight

- 700 solo per titoli e dati essenziali.
- 600 per label e pulsanti.
- 400-500 per corpo e tabelle.

# 6. Padding, spaziature e densità

Usare una scala coerente basata su 4px o 8px.

- 4px: micro-gap
- 8px: elementi molto correlati
- 12px: badge e controlli
- 16px: padding standard
- 20px: card compatte
- 24px: card principali
- 32px: sezioni
- 48px: macro-sezioni
- 64px+: solo hero o transizioni importanti

## 6.1 Card lezione

Desktop:

- padding: 14-18px;
- gap: 8-12px.

Mobile:

- padding: 12-14px.

## 6.2 Macro-unità

- padding desktop: 24-28px;
- evitare oltre 32px;
- ridurre gli spazi interni inutili;
- mantenere più spazio tra macro-unità diverse.

## 6.3 Tabelle

- padding celle desktop: 12px 14px;
- modalità compatta: 8px 10px;
- non superare 16px nelle righe ordinarie.

## 6.4 Sidebar

- voci alte 44-48px;
- gap icona-testo 10-12px;
- padding orizzontale ridotto;
- larghezza minima necessaria;
- modalità compatta a sole icone;
- collassabile;
- nascosta in Focus Mode.

## 6.5 Header

- ridurre altezza;
- avvicinare breadcrumb e titolo;
- evitare fasce vuote;
- mostrare subito missione e progresso.

# 7. Pagina Percorso

La pagina Percorso deve diventare molto più ADHD-safe.

## 7.1 Header

Ridurre il titolo principale del 10-15%.

Sotto mostrare subito:

- missione attuale;
- tempo stimato;
- progresso;
- prossima attività;
- argomento consigliato.

## 7.2 Macro-unità

Ogni macro-unità deve mostrare:

- percentuale;
- tempo rimanente;
- numero di lezioni;
- numero di concetti;
- numero di quiz;
- difficoltà;
- cosa saprò spiegare;
- prossimo passo;
- stato.

## 7.3 Progress bar

Usare una progress bar molto visibile con gradient:

> Rosa → Viola → Vermiglio

Mostrare anche:

- lezioni completate;
- minuti rimanenti;
- concetti da padroneggiare;
- prossimo checkpoint.

## 7.4 Tipi di attività

Distinguerli visivamente:

- teoria;
- esercizi;
- boss check;
- orale;
- ripasso;
- completato;
- consigliato.

Usare colore, icona, label e gerarchia, non solo colore.

## 7.5 Compattezza

Ridurre:

- altezza delle card;
- padding verticali;
- spazio tra titolo, descrizione e metadata.

La pagina deve mostrare più percorso nella stessa viewport.

# 8. Pagina Atlante

La pagina Atlante deve essere corretta completamente.

## 8.1 Tabella desktop

Usare:

- sans-serif;
- font 14-15px;
- header 13-14px weight 600;
- allineamento a sinistra e in alto;
- griglia stabile;
- line clamp;
- tooltip o espansione;
- zebra rows leggere o separatori.

## 8.2 Colonne

Larghezze minime:

- Nome: 170-200px
- Periodo: 120-140px
- Contributo: `minmax(280px, 1.5fr)`
- Temi: `minmax(220px, 1fr)`
- Lezione: 90-110px

## 8.3 Temi

Non concatenare mai testo.

Ogni tema deve essere un badge separato.

Usare:

- `display: flex`
- `flex-wrap: wrap`
- `gap: 6px`
- padding badge: `4px 8px`

## 8.4 Contributo

Limitare a 2-3 righe con line clamp.

Mostrare il testo completo con:

- tooltip;
- popover;
- pannello espandibile.

## 8.5 Mobile e tablet

Quando la tabella non entra:

- trasformare ogni riga in card;
- oppure usare scroll orizzontale controllato.

Non comprimere fino a creare sovrapposizioni.

## 8.6 Confronto interattivo

Usare due card separate.

Ogni card deve avere:

- titolo;
- periodo;
- contributo;
- temi;
- opera;
- collegamenti;
- quiz o approfondimento.

Non usare testo concatenato o compresso.

# 9. Disegnini e illustrazioni

Creare SVG locali coerenti.

## 9.1 Elementi

- nuvole;
- cuori;
- scintille;
- stelline;
- fiori;
- petali;
- onde;
- lune;
- libri;
- segnalibri;
- bolle;
- nastri.

## 9.2 Funzione

Le decorazioni devono aiutare l’esperienza.

Nuvole:

- spiegazioni alternative;
- consigli;
- Aha moments;
- pensieri;
- reset attentivi.

Cuori:

- preferiti;
- padroneggiato;
- concetti salvati;
- piccoli traguardi.

Scintille:

- progressi;
- nuovi collegamenti;
- risposte corrette;
- contenuti sbloccati.

Fiori e petali:

- transizioni;
- header;
- stati vuoti;
- completamenti.

## 9.3 Regole

- non sopra il testo;
- non invasivi;
- non infantili;
- non casuali;
- coerenti tra tema chiaro e scuro;
- dimensioni controllate;
- animazioni ridotte;
- supportare `prefers-reduced-motion`.

# 10. Motion system

Le animazioni devono avere una funzione cognitiva o orientativa.

## 10.1 Obiettivi

Le animazioni devono aiutare a:

- riattivare l’attenzione;
- mostrare causa-effetto;
- rendere visibile il progresso;
- segnalare il prossimo passo;
- spiegare un cambiamento;
- evidenziare un collegamento;
- confermare una risposta;
- creare una breve pausa cognitiva.

## 10.2 Regole

- brevi;
- fluide;
- prevedibili;
- non bloccanti;
- non continue;
- un solo punto di movimento principale;
- sempre saltabili;
- nessun layout shift;
- rispettare `prefers-reduced-motion`.

## 10.3 Impostazioni

Aggiungere:

- Animazioni complete;
- Animazioni ridotte;
- Animazioni disattivate.

## 10.4 Durate

- feedback: 120-180ms;
- hover: 120-160ms;
- tooltip: 180-240ms;
- cambio schermata: 220-320ms;
- progresso: 300-500ms;
- schema didattico: 500-900ms;
- celebrazione: massimo 1.2s.

## 10.5 Progresso

Quando si completa un’attività:

- progress bar animata;
- percentuale aggiornata;
- nodo illuminato;
- prossimo nodo evidenziato;
- messaggio concreto.

## 10.6 Schemi animati

Rivelare progressivamente:

- causa;
- passaggio;
- conseguenza;
- collegamento.

L’utente deve poter:

- mettere in pausa;
- avanzare;
- ripetere;
- mostrare tutto;
- ricostruire da solo.

## 10.7 Timeline animate

Aggiungere:

- Riproduci;
- Pausa;
- Passo successivo;
- Mostra tutto;
- Ricostruisci tu.

## 10.8 Mappe concettuali

Quando un nodo è selezionato:

- evidenziarlo;
- attenuare gli altri;
- illuminare connessioni;
- spiegare il rapporto.

## 10.9 Quiz

Risposta corretta:

- lieve illuminazione;
- bordo;
- piccola scintilla;
- feedback;
- progresso.

Risposta quasi corretta:

- breve pulsazione vermiglia;
- dettaglio mancante;
- confronto rapido.

Risposta errata:

- niente shake aggressivo;
- niente punizione;
- mostrare la distinzione;
- cambiare spiegazione dopo errori ripetuti.

## 10.10 Micro-celebrazioni

Usare solo per:

- topic completato;
- boss check;
- macro-unità;
- risposta orale padroneggiata;
- errore ricorrente risolto.

Usare:

- cuori;
- petali;
- scintille;
- onda rosa-viola-vermiglio.

Durata massima 1 secondo.

Non usare coriandoli a ogni risposta.

## 10.11 Animazioni didattiche vere

Creare micro-animazioni per:

### Canone letterario
Mostrare opere che entrano o escono dalla libreria in base a critica, scuola, università, editoria e mercato.

### Campo letterario di Bourdieu
Mostrare autori, editori, critici, premi e università in competizione per capitale simbolico.

### Genbun itchi
Mostrare lingua scritta e parlata distanti, poi il progressivo avvicinamento.

### Orientalismo
Mostrare come una rappresentazione ripetuta costruisce un’immagine dell’Oriente collegata al potere.

### Trauma
Mostrare un evento non assimilato che ritorna attraverso frammenti, ripetizioni e silenzi.

Queste animazioni devono essere controllabili e accompagnate da testo.

# 11. Componenti da creare o aggiornare

- `AnimatedProgress`
- `ConceptReveal`
- `AnimatedTimeline`
- `CauseEffectAnimation`
- `KnowledgeMapFocus`
- `QuizFeedbackMotion`
- `MicroCelebration`
- `AttentionReset`
- `AnimatedDiagram`
- `MotionSettings`
- `DecorativeCloud`
- `DecorativeHeart`
- `DecorativeSparkle`
- `DecorativeFlower`
- `CompactSidebar`
- `TopicProgressCard`
- `ADHDSafeLessonCard`
- `ResponsiveAtlasTable`

Riutilizzare i componenti già esistenti quando possibile.

# 12. Accessibilità

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

Verificare che ogni tooltip sia accessibile anche da tastiera.

# 13. Performance

Preferire:

- CSS transitions;
- CSS keyframes leggere;
- Web Animations API;
- Framer Motion solo se già presente o realmente necessario.

Animare soprattutto:

- opacity;
- transform;
- scale;
- translate.

Evitare di animare frequentemente:

- width;
- height;
- top;
- left.

Non aggiungere librerie pesanti per effetti minimi.

# 14. Modalità Focus

In Focus Mode:

- nascondere la sidebar;
- nascondere statistiche secondarie;
- mantenere progresso;
- mantenere timer;
- mantenere prossimo step;
- mostrare una sola attività principale.

# 15. QA obbligatorio

Prima di concludere il redesign:

1. verificare desktop;
2. verificare tablet;
3. verificare mobile;
4. verificare tema chiaro;
5. verificare tema scuro;
6. verificare font;
7. verificare padding;
8. verificare tabelle;
9. verificare badge;
10. verificare overflow;
11. verificare sovrapposizioni;
12. verificare line clamp;
13. verificare focus;
14. verificare reduced motion;
15. verificare modalità animazioni complete;
16. verificare modalità ridotta;
17. verificare animazioni disattivate;
18. eseguire build;
19. eseguire lint;
20. correggere tutti gli errori;
21. acquisire screenshot finali di Percorso e Atlante;
22. confrontare visivamente prima e dopo;
23. continuare autonomamente finché i criteri sono soddisfatti.

# 16. Criteri di accettazione

Il redesign è completato solo quando:

- il tema scuro mantiene la propria funzionalità ma sembra molto più personale;
- il tema chiaro mantiene la stessa identità;
- rosa, viola e vermiglio sono visibili e ben distribuiti;
- il prodotto non sembra più una dashboard amministrativa;
- le card sono più compatte;
- i font sono più leggibili;
- il padding è più equilibrato;
- la pagina Percorso è più veloce da scansionare;
- la pagina Atlante è completamente leggibile;
- i temi non sono concatenati;
- la sidebar è collassabile;
- il prossimo passo è sempre evidente;
- il progresso è sempre visibile;
- gli elementi decorativi sono presenti ma non invasivi;
- le animazioni aiutano attenzione e comprensione;
- il prodotto è realmente ADHD-safe;
- nessuna funzionalità esistente è stata persa;
- il progetto compila e funziona in locale.

# 17. Ordine di lavoro

Procedi in questo ordine:

1. Audit del codice e del design esistente.
2. Correzione tipografia e spaziature.
3. Correzione pagina Atlante.
4. Miglioramento pagina Percorso.
5. Sidebar compatta e Focus Mode.
6. Design system rosa-viola-vermiglio.
7. Disegnini SVG.
8. Progressione ADHD-safe.
9. Motion system.
10. Responsive.
11. Accessibilità.
12. QA.
13. Build finale.
14. Screenshot finali.
15. Aggiornamento documentazione.

Non fermarti tra una fase e l’altra.

Inizia ora.
