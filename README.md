# william.design

A React and Vite portfolio site. GitHub Actions builds and publishes it to GitHub Pages whenever you push to `main`.

## Publish with GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish. The published URL appears in the workflow run and in **Settings → Pages**.

The workflow detects the repository name and configures Vite for the matching Pages URL, so this works for both project sites (`username.github.io/repository`) and user sites (`username.github.io`).

## Run locally

```sh
npm install
npm run dev
```

To create a production build locally, run `npm run build`. The generated site is in `dist/`.
