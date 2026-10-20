# Mobile Security Midterm Lab

Phone-friendly quiz for all 67 questions from the supplied midterm sample and lectures 1–7.

Choose any combination of lectures and whether to shuffle questions, then click **Начать экзамен**. Answer choices always shuffle. Every answer immediately shows its explanation; a collapsed **Ассоциация для запоминания** adds a short memory aid. Incorrect answers return after two intervening questions, or sooner when fewer remain, until answered correctly.

**Начать заново** opens the start screen to configure a new test. The unfinished test is preserved until a new one is started and can be resumed using **Продолжить сохранённый тест**. A new test clears its question queue and answers while retaining lifetime browser progress. Completed quizzes show the first-attempt score.

Progress, settings and active quiz are stored in this browser. The site can load offline after the first successful load.

## Run

Requires Node.js. No packages, API keys or backend.

```sh
npm start
npm test
```

Open http://127.0.0.1:4173. Deploy `dist/` on a static host; `file://` is unsupported.

## Content

All original questions and repeated/missing sample numbers are retained. Lecture selection groups contain 9, 10, 9, 9, 10, 10 and 10 questions. Lectures 3 and 4 share an identical combined deck; questions are assigned by the topic of the supporting slide (threats and attack vectors vs application security fundamentals and ontologies).

The sample had no answer key or choices. Answers and distractors are authored for practice based on the slides; every explanation names the source lecture and slide. Clarifications and memory aids are distinct from official lecture wording. Nation-state motives and vishing reference CISA, static analysis references OWASP. This is not an official instructor answer key.

GitHub contains the source and Vercel hosts the site. Automatic deployment on Git pushes requires connecting GitHub within Vercel; current deployments use the Vercel API.
