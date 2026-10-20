# Mobile Security Midterm Lab

A simple phone-friendly quiz for all 67 questions from the supplied midterm sample and lectures 1–7.

Click **Начать экзамен** to start immediately. There is one quiz and no menus or separate study modes. Questions and options shuffle automatically. Every answer immediately shows an explanation below the options. Incorrect answers return after two intervening questions, or sooner when fewer remain, until answered correctly.

Progress and the active quiz are stored in this browser. Opening again and pressing the start button resumes an unfinished full quiz. Completed quizzes show the first-attempt score and a button to begin again. After the first successful load, the site can also load offline.

## Run and verify

Requires Node.js; no packages, API keys, or backend are needed.

```sh
npm start
npm test
```

Open http://127.0.0.1:4173. Deploy `dist/` on a static host. Opening `index.html` over `file://` is unsupported.

## Content

Original questions and repeated/missing sample numbers are retained. There are 9, 10, 18, 10, 10, and 10 questions for lectures 1, 2, 3–4, 5, 6, and 7. Lecture 3 and lecture 3–4 are text-identical.

The sample had no answer key or options. Answers and distractors are authored for practice, based on the supplied slides. Each explanation identifies the lecture and slide; clarifications are labeled. Nation-state motives and vishing use CISA references, and static analysis uses OWASP. This is not an official instructor answer key.

Code is in GitHub and deployed to Vercel. Git-based automatic deployment requires connecting GitHub within the Vercel account; current deployments use the Vercel API.
