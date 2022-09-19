# Next.js Yandex Metrika
Add Yandex Metrika to your Next.js web-application.

## How to add this to my project?

### Install by package
Not avaliable yet! WIP!

### Install directly.
Copy `index.js` inside your components directory as `YandexMetrika.js`, then import inside your Layout or somewhere, and inject this code inside `<Head>` tag:
```jsx
<YandexMetrika 
  yid={YOUR_YM_ID},
  clickmap={true/false},
  trackLinks={true/false},
  accurateTrackBounce={true/false},
  webvisor={true/false},
/>
```

## Configuration.
- `yid`: Your Yandex Metrika tag ID.
- `clickmap`: Boolean, see YM docs, enables clickmap.
- `trackLinks`: Boolean, see YM docs.
- `accurateTrackBounce`:  Boolean, see YM docs.
- `webvisor`: Boolean, see YM docs. Enables webvisor.
