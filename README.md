# isomorphic-git-issue-1855
Just outlining what I experienced in <https://github.com/isomorphic-git/isomorphic-git/issues/1855>

Originally I had to pin the repo to `1.24.5` to get `isomorphic-git` operational. Since then I've been able to update to the latest and it appears to now work correctly.

I assume that a sub-dependency was acting up, but honestly that's just a guess.

With regards to <https://github.com/isomorphic-git/isomorphic-git/issues/1855#issuecomment-1911226532>, you need `nodePolyfills()` in the `vite.config.ts` / `plugins` (related <https://github.com/vitejs/vite/discussions/13799#discussioncomment-6458557>)


## Setup
Clone the repo

```
npm i
npm run dev
```

See the web inspector at the URL printed in the console

## Notes
This repo was generated with `npm create vite@latest my-vue-app -- --template vanilla`