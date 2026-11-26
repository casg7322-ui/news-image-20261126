// news-image-20261126 entry (Node 22, standard library only): its image is
// the entry.png beside this file, and the program copies it to
// $MAKEFUN_OUTPUT_DIR/entry.png. The grader has no Chromium and no network
// and mounts the repo read-only, so this program does nothing but copy.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
