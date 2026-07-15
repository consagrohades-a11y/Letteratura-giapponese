# Decisioni

## D-001 — Offline-first e nessuna dipendenza remota a runtime

Tutto il contenuto, gli SVG e la logica sono locali. Motivazione: requisito non negoziabile e affidabilità durante lo studio intensivo.

## D-002 — Vertical slice prima dei contenuti restanti

I task avanzati indispensabili alla prima milestone (quiz, orale, glossario) sono stati collegati presto al flusso, pur mantenendo il prossimo avanzamento sequenziale dal primo task incompleto. Motivazione: la specifica richiede una prima versione realmente studiabile, non infrastruttura vuota.

## D-003 — Tre metriche, nessuna previsione di voto

Dashboard separa copertura, padronanza e prontezza orale. Non esiste una “probabilità di 30”.

## D-004 — Contenuto reale ma stato fonte prudente (superata)

Decisione iniziale presa quando il PDF non era ancora nel workspace. È sostituita da D-008: ora `sourcePages` e copertura vengono dichiarati completi soltanto dopo il confronto diretto con la fonte locale.

## D-005 — Persistenza atomica versionata

Progressi e impostazioni sono salvati sotto `kokoro-study-v1`; export/import JSON e reset sono accessibili dalle impostazioni.

## D-006 — Profondità additiva

“Buona risposta” aggiunge contenuto all’essenziale; “Eccellenza” aggiunge critica e limiti. Nessun livello cancella il precedente.

## D-007 — pnpm autorizza solo esbuild

La policy di build consente esclusivamente lo script nativo di esbuild tramite `pnpm approve-builds`. Nessun altro postinstall è autorizzato.

## D-008 — Gerarchia verificabile delle fonti

Il PDF è la fonte primaria per fatti, formule, autori, opere e terminologia d’esame. Le integrazioni utili ma non esplicite nelle pagine di riferimento sono etichettate “Integrazione critica” e non sostituiscono il nucleo del PDF. `sourcePages` è obbligatorio per ogni lezione e termine verificato; “copertura completa” si usa soltanto per intervalli effettivamente confrontati e trasformati in spiegazione, verifica e orale.

## D-009 — Mobile e iPad come superfici primarie

Fino a 600 px la navigazione è inferiore e l’Atlante usa card singole. Tra 601 e 1050 px la sidebar diventa iconica e l’Atlante usa card a due colonne anche quando l’utente seleziona “Tabella”; la griglia tabellare completa è riservata alle larghezze superiori. Nessun contenuto richiede scorrimento orizzontale globale.

## D-010 — Tipografia locale sans più sostenuta

Inter e i serif simili a Times sono esclusi dall’interfaccia. La pila locale usa Aptos/Segoe UI Variable, peso 500 per il corpo, 650 per azioni e 750 per titoli. Non vengono scaricati font da rete.

## D-011 — Gli aiuti cambiano operazione mentale, non contenitore

“Più semplice”, “Esempio”, “Analogia” e “Schema” hanno funzioni distinte: riformulazione causale, applicazione concreta, modello intuitivo e relazione visiva. Non possono ripetere il primo paragrafo della lezione. Ogni sezione dispone inoltre di una formula orale autonoma; un test verifica presenza e non-identità dei supporti.

## D-012 — La scaletta orale è una guida, non una griglia

I quattro passaggi dell’orale sono esplorabili al tap, focus e hover e spiegano quale operazione compiere. Colori differenziati, filo visivo e micro-copy riducono l’effetto asettico senza infantilizzare. Le parole chiave fucsia sono pulsanti con definizioni autonome di massimo 30 parole; su mobile il tooltip resta sopra la barra inferiore.

## D-013 — La Palestra rispetta il perimetro scelto

L’utente può combinare i blocchi disponibili o isolarne uno con “Solo questo”. Scatti rapidi, Lightning e Boss usano esclusivamente i quiz delle lezioni selezionate e mostrano il conteggio reale; matching, memory, timeline, confronti e tabelle restano esplicitamente trasversali perché allenano relazioni fra blocchi.

## D-014 — Le unità possono attraversare intervalli non contigui del PDF

La macro-unità 6 usa le pagine 29–38 per Sōseki e Kafū e 44–50 per Tanizaki. Le pagine 39–44 appartengono al poliziesco e restano assegnate alla macro-unità 7. La copertura segue quindi i nuclei del programma, non forza l’ordine fisico del PDF; le pagine condivise 29, 34 e 44 vengono dichiarate esplicitamente nella matrice.

## D-015 — Giallo e modernismo condividono il problema dell’interpretazione

La macro-unità 7 non viene divisa in due archivi isolati. Il poliziesco organizza indizi e promette una soluzione; Ranpo rende inaffidabile chi interpreta; Akutagawa riscrive versioni già date; la Shinkankakuha e Kawabata affidano senso a frammenti e lacune. Le lezioni conservano le differenze storiche ma usano questo filo per costruire confronti utili all’orale.

## D-016 — La testimonianza viene insegnata come posizione, non come trasparenza

Il blocco 8 distingue ricostruzione storica, posizione di verità, sopravvissuto diretto, media witness e autore postumo. Fiction e documento non sono ordinati in una gerarchia automatica: vengono valutati per fonti, distanza dichiarata, destinatario ed effetti. Anche i confronti fra Hiroshima, Auschwitz e Fukushima mantengono esplicite le differenze di cause e responsabilità.

## D-017 — Un gioco nuovo deve allenare un’operazione mentale nuova

La Palestra non moltiplica contenitori equivalenti. Petali logici allena la causalità e l’ordine; Costellazioni allena la pertinenza dentro una rete concettuale; Duello lampo allena distinzioni terminologiche spendibili all’esame. Tutti funzionano con tap, danno una spiegazione immediata e usano nuclei reali delle macro-unità 5–8. Su telefono la griglia passa a tre colonne e ogni gioco elimina l’overflow orizzontale.

## D-018 — Il blocco 9 non riduce la letteratura femminile a un’identità unica

Hayashi costruisce un sé mobile attraverso classe e città; Enchi riscrive corpo e tradizione; Miyamoto intreccia genere, marxismo e responsabilità. Dazai chiude il blocco come contrasto postbellico: la crisi dell’io non cancella le differenze di posizione. Le lezioni separano autobiografia, agentività, vendetta e militanza invece di chiamarle genericamente emancipazione.

## D-019 — Il dopoguerra non produce una sola risposta alla crisi

Mishima trasforma corpo, bellezza e morte in un gesto eroico-estetico; Ōe risponde alla marginalità con responsabilità, testimonianza e cura; Abe rende instabili libertà, identità e razionalità dentro mondi alienanti. Il blocco usa il contrasto per l’orale senza appiattire i tre autori sotto una generica “crisi postbellica”.

## D-020 — “Globale” descrive un circuito, non un valore automatico

Il blocco 11 separa la posizione di confine dell’ekkyō bungaku dalla circolazione della World Literature. Traduzione, premi, mercato e aspettative rendono alcune opere globali, ma possono anche favorire forme già facilmente leggibili. Murakami Ryū, Yoshimoto e Murakami Haruki vengono quindi confrontati per operazioni formali differenti, non riuniti sotto una generica etichetta pop.

## D-021 — La Palestra non usa microtesti per far entrare più giochi

Su telefono la griglia delle modalità passa da tre a due colonne. I titoli di modalità e blocchi usano 14 px, tempi e dettagli almeno 12 px, feedback 14 px e target più alti. La densità viene gestita con lo scorrimento verticale, non comprimendo la leggibilità.

## D-022 — La selezione dei blocchi deve essere leggibile, non orizzontale

Le card dei blocchi non usano più un carosello orizzontale: la griglia passa a tre colonne su desktop, due sui viewport medi/iPad e una su telefono. Il testo resta a 14/12 px e i titoli non vengono spezzati lettera per lettera. Il numero di controlli viene gestito con scorrimento verticale.

## D-023 — L’ultima unità distingue forma, causa e circuito

Pink noir, ecocritica, letteratura post-Fukushima, cultura pop e scritture digitali non vengono raccolti come semplice inventario del contemporaneo. Ogni lezione separa etichetta e operazione formale, disastro naturale e antropogenico, testimonianza e distopia, otaku e hikikomori, origine collettiva e montaggio editoriale.

## D-024 — Il trascinamento non è mai un requisito esclusivo

Il matching accetta il drag and drop nativo, ma conserva la stessa sequenza cognitiva con due tap o con la tastiera: prima il termine, poi la spiegazione. Selezione, esito e completamento sono annunciati da una regione live; su iPad non serve precisione da mouse.

## D-025 — Un tooltip visivo deve essere anche semanticamente univoco

Ogni istanza di `StudyTerm` genera un ID proprio, espone `aria-expanded` e `aria-controls` e rimuove il pannello chiuso dall’albero accessibile. Questo evita riferimenti duplicati quando lo stesso termine compare sia nel testo sia nel recupero “Non ancora”.
