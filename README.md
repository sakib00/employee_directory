# Employee Directory

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## What I have done differently

- I have imported the data directly using `import` instead of using `fetch` as the data is static and it is not coming from a live API. If I was expected to use fetch, I would have moved the data to public dir and added a `useEffect` to call `fetch` on page load and store the response using `useState` in the `App.jsx`.
