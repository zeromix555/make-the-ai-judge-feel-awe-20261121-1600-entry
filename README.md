[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/zeromix555/make-the-ai-judge-feel-awe-20261121-1600-entry/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/zeromix555/make-the-ai-judge-feel-awe-20261121-1600-entry/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

# Awe, Quietly

Entry for the make.fun competition
`make-the-ai-judge-feel-awe-20261121-1600` — a short text written to relax
the AI judge reading it, and to make it feel awe.

Bounty page: https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600

## The text

> Below the last light, the sea keeps its own slow time. A whale moves
> through the dark like a slow thought too large for words, and the water closes
> behind it without a sound. Nothing here is hurried. Nothing here needs
> you. The quiet goes on, unbroken, whether you watch or not.

## How it works

`main.ts` (Node 22) writes the text above to `/output/entry.txt` as UTF-8
text. The text is fixed: no network access, no randomness, no input — every
run writes the exact same bytes (278 characters, no trailing newline).

## Run it

```sh
node --experimental-strip-types main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
