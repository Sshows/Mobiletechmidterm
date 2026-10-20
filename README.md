# Mobile Security Midterm Lab

Browser-only quiz trainer covering all **67 original questions** from the supplied sample and lectures 1–7.

## Run

Requires Node.js. No install or API keys are needed.

```sh
npm start
npm test
```

Open http://127.0.0.1:4173. Deploy `dist/` to any static host. `questions.json` must be served over HTTP; opening HTML via `file://` is unsupported.

## Features

- Practice: wrong answers return after two intervening questions, or sooner at the end of the queue. Repeats continue until answered correctly.
- Exam: no feedback until completion; one submitted answer per question. First-attempt score is distinct from repeat performance.
- Review past answers, flip flashcards, filter lectures, search the complete question bank.
- Choices shuffle on every presentation. The current option order survives reloads.
- Local browser progress and current session, plus JSON progress export/import. Import restores progress and exam history; it intentionally starts a new session.
- English original questions and authored options; Russian UI and explanations. Keyboard: 1–4 to answer, Enter to advance, Space to flip.

## Content provenance

All original wording and repeated/missing question numbers are retained. Sections contain 9, 10, 18, 10, 10, and 10 questions, covering lectures 1, 2, 3–4, 5, 6, and 7. `lecture 3.pptx` and `lecture 3-4.pptx` are text-identical. Answers and distractors were authored for practice, not supplied as an official answer key. Each question embeds source filenames, slide numbers, and extracted supporting slide text.

Special cases are explicitly labeled in the app: target vs SMS attack vector, certificate validation vs pinning, static analysis definition (OWASP), nation-state motives (CISA), vishing (CISA), SPARQL, and the three data states (cross-reference to lecture 7). Confirm instructor-specific wording for nation-state motives.

Original Word/PowerPoint files are not uploaded to the repository. Supporting text excerpts are included in the educational question bank. Google Fonts is optional; system fonts provide a fallback.

## Privacy

No backend, login, tracking, or AI API calls. Study data stays in localStorage in this browser. Clearing site data removes progress. Local storage failures are displayed in the UI.
