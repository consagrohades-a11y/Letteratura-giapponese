# QA Checklist

Aggiornato: 2026-07-15

## Automazione

- [x] TypeScript strict e build produzione.
- [x] ESLint senza warning.
- [x] 25 test Vitest: integrità dati, collegamenti, lunghezza blocchi, aiuti semantici, selezione blocchi, giochi in Palestra e quattro flussi E2E locali.
- [x] Nessuna dipendenza di rete a runtime.
- [x] Smoke test browser: navigazione, cambio stimolo, quiz, tema, Flow Mode, atlante, mappa, builder, timeline e console.
- [x] Audit browser di 10 route su telefono 390×844 e iPad 820×1180: un solo `h1`, nessun ID duplicato e nessun overflow orizzontale.
- [x] Audit desktop 1440×900 su Percorso, lezione, Atlante e Palestra: nessun overflow orizzontale o ID duplicato.

## Vertical slice

- [x] Dashboard con prossimo passo, metriche e data esame.
- [x] Navigazione desktop e mobile.
- [x] 12 macro-unità e 50 lezioni reali.
- [x] Livelli Essenziale / Buona risposta / Eccellenza.
- [x] Schemi, confronti, sequenze e timeline integrate.
- [x] Tooltip hover/focus/tap e approfondimento.
- [x] Quiz senza digitazione, sicurezza e feedback.
- [x] “Non ancora” mostra spiegazione super chiara, schema e risorse nello stesso punto.
- [x] “Mi sto annoiando” cambia formato nello stesso punto senza perdere posizione.
- [x] Spiegazione semplice, esempio, analogia e schema hanno contenuti e funzioni differenti in tutte le 150 sezioni.
- [x] Boss check e simulazione orale in tre modalità.
- [x] Scaletta orale esplorabile al tap/hover/focus e 200 parole chiave con spiegazione concisa.
- [x] Macro-unità 9: 15 sezioni, 15 quiz, 5 orali, 45 termini e Atlante collegato sulle pp. 64–73.
- [x] Macro-unità 10: 15 sezioni, 15 quiz, 5 orali, 45 termini e Atlante collegato sulle pp. 74–85.
- [x] Macro-unità 11: 15 sezioni, 15 quiz, 5 orali, 45 termini e Atlante collegato sulle pp. 86–96.
- [x] Macro-unità 12: 15 sezioni, 15 quiz, 5 orali, 45 termini e Atlante collegato sulle pp. 96–107.
- [x] Pagine PDF 65, 69, 71 e 73 renderizzate e controllate visivamente contro l’estrazione.
- [x] Pagine PDF 75, 80, 82 e 85 renderizzate e controllate visivamente contro l’estrazione.
- [x] Pagine PDF 86, 89, 92 e 95 renderizzate e controllate visivamente contro l’estrazione.
- [x] Ritorno contestuale dalla pagina Percorso, oltre alla navigazione globale e al Focus mode.
- [x] Piano 48 ore.
- [x] Atlante, tabelle cliccabili, confronto, timeline filtrabile e knowledge map.
- [x] Diagram builder drag and drop con controlli equivalenti da tastiera.
- [x] Palestra con 11 famiglie di esercizi, inclusi Petali logici, Costellazioni e Duello lampo, Lightning 10/20/30 e boss finale.
- [x] Palestra con selezione multipla dei blocchi, “Solo questo”, conteggio domande e filtro su Scatti/Lightning/Boss.
- [x] Tema chiaro/scuro e SVG locali.
- [x] Persistenza, export, import e reset.
- [x] Flow Mode automatico con pausa e countdown.
- [x] Verifica visiva browser a 375 px, 768 px e desktop; nessun overflow orizzontale.
- [x] Redesign mobile-first verificato a 375×812, iPad 768×1024, iPad landscape 1024×768 e desktop 1440×900.
- [x] Nuovi giochi Palestra verificati a 375 px e iPad 820 px: zero overflow globale, nella griglia modalità e nella card di gioco.
- [x] Palestra a 375 px: griglia a due colonne, titoli modalità/blocchi a 14 px, metadati a 12 px e zero overflow.
- [x] Selezione blocchi Palestra corretta in 3 colonne desktop, 2 iPad/viewport medio e 1 telefono; nessuna card ridotta a striscia verticale.
- [x] Lezione Mishima verificata a 375 px e iPad 805 px effettivi: zero overflow, mappa e termini interattivi presenti.
- [x] Atlante: card su telefono/iPad, tabella desktop, badge separati, line clamp e nessun overflow globale.
- [x] Sidebar compatta su iPad e collassabile su desktop; Focus Mode invariata.
- [x] Motion completa/ridotta/disattivata configurabile nelle impostazioni.

## Accessibilità

- [x] Landmark, label, focus visibile, skip link.
- [x] Uso da tastiera dei controlli principali.
- [x] `prefers-reduced-motion` rispettato nel CSS.
- [x] Preferenza motion persistita e applicata all’intero documento.
- [x] Stato non affidato soltanto al colore nei quiz.
- [x] Audit semantico automatizzato: landmark, nomi accessibili, progressbar, tooltip univoci, stati espansi e regioni live.
- [x] Matching utilizzabile con drag and drop, tap e tastiera; il trascinamento non è l’unico input disponibile.
- [x] Target tattili principali portati a 44 px su telefono/iPad.
- [ ] Prova manuale finale con VoiceOver/NVDA su hardware reale.

## Contenuti

- [x] Spiegazioni segmentate; test automatico ≤90 parole per paragrafo.
- [x] Errori comuni e distinzioni nel glossario/quiz.
- [x] Risposte modello orali per tutti i dodici blocchi.
- [x] Fedeltà pagina-per-pagina del PDF 1–107, con riferimenti nelle lezioni e nel glossario.
- [x] Trasformazione didattica della seconda parte di p. 96 e delle pp. 97–107 nella macro-unità 12.
