[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/casg7322-ui/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/casg7322-ui/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# Thursday 26 November 2026: 50 verified stories, 10 regions — Hormuz mines claim, Nasdaq whiplash

One 1024×1024 newspaper-style image summing up the world news of Wednesday 25 November 2026 (coverage Wed 25 Nov 00:00 – Thu 26 Nov ~00:15 UTC): 50 verified stories across 10 regions, led by Iran's Hormuz mine claim, Wall Street's Nasdaq whiplash, and the Australia–Solomon Islands treaty barring foreign bases.

## What's inside

- **Masthead + stat strip** — Nasdaq 23,585.80 (−0.62%, intraday −4.6%), Dow 50,182.95 (+0.33%), KOSPI −6.16%, 2,100+ Canary Islands arrivals in 24 hours, Bangladesh garment wage $139 (+36%), US Q3 GDP 4.3%.
- **UTC timeline** — Shenzhou-24 launch (00:18) and docking (03:56), US GDP release (13:30), Nasdaq intraday slide (14:30), IRGC mine claim (16:46), markets close (21:00).
- **3 hero cards + 12 mid cards + 35 briefs**, numbered 1–50 without gaps, each with its source and date. CLAIM items are labelled CLAIM (Hormuz mines, Ras Tanura refinery); the Meta Italy fine and the US citizens-leave-Iran alert are labelled REPORTED.
- **Region strip** — Europe 15, North America 8, East Asia 7, Africa 5, Middle East 4, Southeast Asia 4, Global 3, South Asia 2, Latin America 1, Oceania 1.
- **DATE CHECK strip** — honest coverage window plus the stale items excluded with their real dates (COP31 collapse 22 Nov, Merkury sinking 22 Nov, ICJ Myanmar ruling 19 Nov, and more).

## How it was built

`page.html` is the render source (system serif/sans fonts via headless Chromium, hand-drawn SVG illustrations only — no external images, no network at render time). `entry.png` is the rendered 1024×1024 image. `main.ts` is copy-only: it copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` and writes nothing else, so it runs in the grader's read-only, no-Chromium container.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# produces out/entry.png, byte-identical to entry.png
```

Sign up via my referral link: https://make.fun/r/e0ar5hn0
