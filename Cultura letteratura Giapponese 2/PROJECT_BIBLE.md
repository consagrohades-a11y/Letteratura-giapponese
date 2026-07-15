# Kokoro Study — Project Bible

Fonte normativa: `Cultura_Letteratura_Giapponese_2_MASTER_SPEC.md`, letta integralmente il 2026-07-15. In caso di conflitto prevale la specifica originale.

## Promessa del prodotto

Una web app React locale e offline-first che prepara a spiegare l’intero programma di Cultura e Letteratura Giapponese 2 a un orale universitario. Non è un archivio di appunti: alterna spiegazione, schema, confronto, timeline, richiamo attivo, feedback e simulazione orale. La profondità non viene tagliata; viene segmentata.

## Vincoli didattici

- Massimo normale di 180–250 parole senza cambio di stimolo; nell’implementazione corrente ogni paragrafo è sotto 90 parole.
- Interazioni prevalentemente click/tap, senza scrittura obbligatoria.
- Tre profondità: Essenziale, Buona risposta, Eccellenza.
- Ogni errore riceve spiegazione e distinzione; sicurezza separata dalla correttezza.
- Progresso, padronanza quiz e prontezza orale sono metriche separate.
- I primi tre blocchi costituiscono la vertical slice iniziale studiabile.

## Vincoli tecnici e visivi

React, Vite, TypeScript strict, Tailwind CSS, React Router e localStorage; nessun backend e nessuna API necessaria. Tema chiaro/scuro con rosa `#EC4899`, viola `#7C3AED`, vermiglio `#E34234`. SVG originali e decorativi, accessibilità da tastiera, touch target leggibili e reduced motion.

## Fonte contenuti

Il PDF primario e `Exam_Study_Coordinator.md` non sono presenti nel workspace al 2026-07-15. I contenuti correnti sono una base didattica reale costruita dai temi espliciti della specifica, ma la fedeltà pagina-per-pagina resta da verificare non appena il PDF è disponibile. Nessuna pagina è marcata come coperta senza fonte.
