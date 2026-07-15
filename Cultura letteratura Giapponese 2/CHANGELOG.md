# Changelog

## 2026-07-15 — 0.11.1 chiusura QA e accessibilità

### Migliorato

- Matching trasformato in drag and drop reale con alternativa equivalente via tap e tastiera, feedback live e stato di selezione accessibile.
- Progressi esposti come `progressbar`, ricerche Atlante/Glossario etichettate e tooltip con ID univoci e stato espanso.
- Target tattili principali portati a 44 px su telefono e iPad senza aumentare la dimensione delle card della Palestra.
- Testi di stato aggiornati a 12 blocchi e all’avanzamento dell’intero programma.

### Verificato

- 25/25 test Vitest, ESLint, TypeScript e build di produzione superati.
- 10 route controllate a 390×844 e 820×1180; Percorso, lezione, Atlante e Palestra ricontrollati a 1440×900 senza overflow orizzontale o ID duplicati.
- Tema chiaro/scuro, Focus mode, recupero “Non ancora”, ricerca Atlante e matching verificati nei flussi locali.

## 2026-07-15 — 0.11.0 copertura PDF completa e Palestra corretta

### Aggiunto

- Macro-unità 12 sulle pagine 96–107: pink noir, *OUT*, *Kasha*, *Kokuhaku*, ecocritica, Minamata, Shinsai bungaku, Wagō, identità pop, *Densha otoko*, keitai shōsetsu e filoni globali.
- 5 lezioni, 15 sezioni, 45 termini con tooltip, 15 quiz, 5 risposte orali, 8 schede Atlante e 7 eventi timeline.
- 15 aiuti adattivi distinti per “Non ancora” e 20 spiegazioni concise delle parole chiave orali.

### Corretto

- Selezione blocchi della Palestra: eliminato il conflitto CSS che riduceva le undici card a strisce verticali; nuova griglia 3/2/1 colonne senza testo spezzato.

### Verificato

- Copertura continua e studiabile delle pagine PDF 1–107.
- ESLint, 20/20 test Vitest e build di produzione superati.

## 2026-07-15 — 0.10.0 blocco 11 e Palestra leggibile

### Aggiunto

- Macro-unità 11 sulle pagine 86–96: World Literature, ekkyō bungaku, Tawada Yōko, mercato editoriale anni Ottanta, tachiyomi, Murakami Ryū, *Blu quasi trasparente*, Yoshimoto Banana, *Kitchen* e Murakami Haruki.
- 5 lezioni, 15 sezioni, 45 termini, 15 quiz, 5 risposte orali, 8 schede Atlante e 7 eventi timeline.
- Supporti distinti su confine/circolazione, libro-oggetto, montaggio sensoriale, famiglia scelta e doppio mondo.

### Migliorato

- Palestra: modalità e titoli blocco a 14 px, dettagli e tempi a 12 px, feedback a 14 px e due colonne su telefono.
- Aumentati anche mappa della lezione, termini interattivi, controlli, badge, quiz e scaletta orale prima troppo piccoli.

### Verificato

- Estrazione delle pp. 86–96 e controllo visuale delle pagine PDF 86, 89, 92 e 95.
- ESLint, 20/20 test Vitest e build di produzione superati.
- Palestra e nuova lezione verificate a 375 px e iPad 805 px effettivi: nessun overflow orizzontale.

## 2026-07-15 — 0.9.0 blocco 10

### Aggiunto

- Macro-unità 10 sulle pagine 74–85: Mishima Yukio, *Confessioni di una maschera*, *Il padiglione d’oro*, *Patriottismo*, Ōe Kenzaburō, *Note su Hiroshima*, *Un’esperienza personale*, *Il Giappone ambiguo e io*, Abe Kōbō e *La donna di sabbia*.
- 5 lezioni, 15 sezioni, 45 termini, 15 quiz, 5 risposte orali, 8 schede Atlante e 7 eventi timeline.
- Supporti semanticamente distinti su corpo-opera, maschera, bellezza e distruzione, marginalità, cura, ambiguità nucleare, sabbia e rovesciamento della libertà.

### Verificato

- Estrazione delle pp. 74–85 e controllo visuale delle pagine PDF 75, 80, 82 e 85.
- ESLint, 20/20 test Vitest e build di produzione superati.
- Lezione verificata a 375 px e su iPad (805 px effettivi): nessun overflow orizzontale, mappa e tooltip interattivi presenti.

## 2026-07-15 — 0.8.0 blocco 9

### Aggiunto

- Macro-unità 9 sulle pagine 64–73: Hayashi Fumiko, Hōrōki, Inazuma, Enchi Fumiko, Maschere di donna, letteratura proletaria, Miyamoto Yuriko, buraiha, Dazai e Il sole si spegne.
- 5 lezioni, 15 sezioni, 45 termini, 15 quiz, 5 risposte orali, 8 schede Atlante e 5 eventi timeline.
- Supporti distinti per alter ego e wander, città e indipendenza, tre maschere Nō, autobiografia di gruppo e montaggio documentario postbellico.

### Verificato

- Estrazione delle pp. 64–73 e controllo visuale delle pagine PDF 65, 69, 71 e 73.
- ESLint, 20/20 test Vitest e build di produzione superati.

## 2026-07-15 — 0.7.1 Palestra più giocosa

### Aggiunto

- Tre modalità senza scrittura: Petali logici per le catene causali, Costellazioni per le reti concettuali e Duello lampo per i contrasti d’esame.
- Contenuti trasversali reali da Sōseki, Tanizaki, poliziesco, Shinkankakuha, trauma studies e genbaku bungaku, con feedback esplicativo immediato.
- Layout touch-first: 11 modalità leggibili, petali a colonna su telefono, costellazione ricomposta e pulsanti con target ampi.

### Verificato

- ESLint, 20/20 test Vitest e build di produzione superati.
- Controllo responsive a 375 px e 820 px: nessun overflow globale, della griglia modalità o della card attiva.

## 2026-07-15 — 0.7.0 blocco 8

### Aggiunto

- Macro-unità 8 sulle pagine 59–64: trauma studies, testimonianza, belatedness, genbaku bungaku, Ōta Yōko, Hayashi Kyōko, Ibuse Masuji, Nakazawa Keiji, Hara Tamiki, Kurihara Sadako, Tōge Sankichi e Wagō Ryōichi.
- 5 lezioni, 15 sezioni, 45 termini, 15 quiz, 5 risposte orali, 10 schede Atlante e 7 eventi timeline.
- Confronti interattivi fra macerie/distanza/commistione, sopravvissuto/media witness, grafie poetiche e memoria nucleare 1945/2011.

### Verificato

- Estrazione e controllo visuale delle pagine PDF 60–64.
- `pnpm lint` e 19/19 test superati; build di produzione eseguita al checkpoint finale.

## 2026-07-15 — 0.6.0 blocco 7

### Aggiunto

- Macro-unità 7 sulle pagine 38–44 e 50–59: genealogie del poliziesco, tantei/suiri shōsetsu, Ranpo, *La belva nell’ombra*, Seichō, Akutagawa, *Rashōmon*, Shinkankakuha, cinema, Kawabata e *Il paese delle nevi*.
- 5 lezioni, 15 sezioni, 45 termini, 15 quiz, 5 risposte orali, 8 schede Atlante e 8 eventi timeline.
- Supporti alternativi e micro-definizioni orali per logica dell’indagine, narratore inaffidabile, giallo sociale, riscrittura e strategia della lacuna.

### Verificato

- Estrazione e controllo visuale delle pagine PDF 39, 42, 54, 57 e 59.
- `pnpm lint` e 19/19 test superati; build di produzione eseguita al checkpoint finale.

## 2026-07-15 — 0.5.0 blocco 6

### Aggiunto

- Macro-unità 6 sulle pagine 29–38 e 44–50: Sōseki, individualismo, *Kokoro*, *Io sono un gatto*, Kafū, Shitamachi, Tanizaki, eros, *Libro d’ombra* e *Neve sottile*.
- 5 lezioni, 15 sezioni, 45 termini, 15 quiz, 5 risposte orali, 6 schede Atlante e 6 eventi timeline.
- Supporti alternativi semanticamente distinti e micro-definizioni per tutte le nuove parole chiave orali.

### Verificato

- Estrazione completa e controllo visuale delle pagine PDF 31, 36, 47 e 50; esplicitata la discontinuità 39–44 riservata al blocco 7.
- `pnpm lint` e 19/19 test superati; build di produzione eseguita al checkpoint finale.

## 2026-07-15 — 0.4.0 blocco 5 e Palestra selettiva

### Aggiunto

- Macro-unità 5 sulle pagine 17–29: romanshugi, Mori Ōgai, *Gan*, Izumi Kyōka, *Il monaco del Monte Kōya*, shizenshugi, *Hakai*, *Il futon* e shishōsetsu.
- 5 lezioni, 15 sezioni, 36 termini, 15 quiz, 5 risposte orali, 9 schede Atlante e 5 eventi timeline.
- Selettore multiplo dei blocchi nella Palestra con scorciatoia “Solo questo” e conteggio delle domande disponibili.

### Verificato

- Rendering e controllo visivo delle pagine PDF 17, 22, 25 e 28.
- `pnpm lint`, 19/19 test e build di produzione superati.

## 2026-07-15 — 0.3.0 riscrittura semantica e blocco 4

### Migliorato

- Riscritti gli aiuti di tutte le 30 sezioni: spiegazione semplice, esempio, analogia, schema e formula orale ora svolgono operazioni diverse e non riciclano il paragrafo principale.
- “Non ancora” apre una sequenza chiara con tesi, relazione visiva, esempio concreto e formula pronta per l’orale.
- “Mi sto annoiando” offre quattro formati selezionabili nello stesso punto della lezione.
- La scaletta orale non è più una griglia asettica: quattro passaggi colorati e interattivi mostrano che cosa dire e quale funzione svolge ogni parte.
- Le 40 parole chiave fucsia aprono una definizione utile e concisa al passaggio del mouse, focus o tap.
- La pagina Percorso offre un ritorno contestuale esplicito a “Oggi”; il Focus mode continua a nascondere le distrazioni.

### Aggiunto

- Macro-unità 4 sulle pagine 11–16: scrittura Heian, joryūbungaku, ie/katei, Higuchi Ichiyō, *La tredicesima notte*, Seitō, Yoshiya Nobuko, cultura shōjo, dōseiai ed esu.
- 3 lezioni, 9 sezioni, 15 termini, 9 quiz e 3 simulazioni orali; totale attuale: 10 lezioni, 30 sezioni, 44 termini, 30 quiz e 10 orali.
- 5 schede Atlante e 3 eventi timeline per Higuchi, Yoshiya, *La tredicesima notte*, *Hana monogatari* e Seitō.
- Test automatico contro supporti mancanti o identici fra loro.

### Verificato

- `pnpm lint`, 18/18 test e build di produzione superati.

## 2026-07-15 — 0.1.0 vertical slice

### Aggiunto

- Progetto React 19, Vite, TypeScript strict, Tailwind CSS 4 e React Router.
- Design system chiaro/scuro rosa, viola e vermiglio con SVG originali.
- Dashboard, percorso in 12 blocchi, piano 48 ore, glossario e impostazioni.
- Lesson player con micro-obiettivi, livelli di profondità, focus, momentum, cambio formato e aiuto alternativo.
- Flow Mode opzionale con countdown, pausa e avanzamento automatico ogni due minuti.
- Progress engine locale con copertura, completamento, padronanza, sicurezza e prontezza orale.
- Export/import/reset dei progressi.
- Quiz engine, boss check e simulatore orale guidato/reale/professore severo.
- Primi tre blocchi: 7 lezioni, 29 termini, 21 quiz e 7 risposte orali.
- Atlante con 12 schede, vista tabellare, celle cliccabili e confronto Tsubouchi/Futabatei.
- Timeline sincronizzata a quattro corsie con filtri e pannello interpretativo.
- Knowledge map con relazioni verbali, schema ad albero e diagram builder accessibile.
- Palestra con intruso, “chi sono?”, catene, matching, memory, timeline game, confronto, flashcard e tabelle vive.
- Lightning Round da 10/20/30 domande e boss finale dei tre blocchi.
- Test automatici di contenuto e smoke test UI.

### Verificato

- `pnpm run build`: superato.
- `pnpm run test`: 12/12 test superati.
- `pnpm run lint`: superato senza warning.
- Browser QA: desktop, 375 px e 768 px; navigazione, cambio stimolo, quiz, tema scuro, Flow Mode e assenza di errori console verificati.

### Limiti noti

- Macro-unità 4–12 (PDF pp. 11–107) restano da trasformare in lezioni interattive.
- `Exam_Study_Coordinator.md` non è stato trovato nel workspace.

## 2026-07-15 — 0.1.1 audit della fonte

### Corretto

- Confrontate integralmente le pagine 1–10 del PDF con i primi tre blocchi.
- Aggiunti autori, teorie, cronologia, dibattiti linguistici, casi di esotismo, programma tecnico di Shōyō, trama e tecniche di *Ukigumo* prima mancanti.
- Separati i contenuti della fonte dalle integrazioni critiche.
- Aggiunti riferimenti di pagina a lezioni e glossario e portati i quiz da 13 a 21.

### Verificato

- PDF di 107 pagine estratto senza pagine vuote; controllo visivo delle pagine 1, 7 e 10.
- `pnpm run lint`, 12/12 test e build di produzione superati.

## 2026-07-15 — 0.2.0 redesign ADHD-safe mobile-first

### Migliorato

- Tema scuro stratificato con gradienti rosa, viola e vermiglio; superfici più calde e compatte.
- Percorso con missione primaria, tempo residuo, micro-attività, fonte PDF, risultati attesi e prossimo step evidente.
- Atlante riscritto per la scansione: tabella leggibile su desktop e card automatiche su telefono/iPad.
- Sidebar collassabile e compatta su iPad; Focus Mode preservata.
- Controllo sidebar spostato dal bordo della barra all’header desktop; nascosto dove la navigazione è già compatta.
- Recupero attentivo contestuale: “Non ancora” apre spiegazione, schema e risorse; “Mi sto annoiando” mostra il formato alternativo accanto al comando.
- Impostazioni motion completa, ridotta e disattivata con persistenza locale.
- Tipografia locale Aptos/Segoe UI Variable, più bold e senza serif simili a Times.

### Verificato

- Telefono 375×812, iPad portrait 768×1024, iPad landscape 1024×768 e desktop 1440×900.
- Nessun overflow orizzontale globale; target principali di almeno 44 px su telefono.
- `pnpm run lint`, 14/14 test e build produzione superati dopo il redesign.
