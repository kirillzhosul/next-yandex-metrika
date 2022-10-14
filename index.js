/// Yandex Metrika for Next.JS

function convertParam(boolValue, defaultValue) {
  return (boolValue === undefined ? defaultValue : boolValue)
    ? "true"
    : "false";
}

function YandexMetrikaTag({
  yid,
  clickmap,
  trackLinks,
  accurateTrackBounce,
  webvisor,
}) {
  /// Tag version of the Yandex Metrika.
  /// Used when there is support for the JavaScript to fully track user.
  /// Will cause loading and injecting tag script, and activate Yandex Metrika by constructor.

  // Tag options, see your Yandex Metrika recommendations for setup.
  clickmap = convertParam(clickmap, true);
  trackLinks = convertParam(trackLinks, true);
  accurateTrackBounce = convertParam(accurateTrackBounce, true);
  webvisor = convertParam(webvisor, true);

  // Script that injects Yandex Metrika tag script.
  const scriptInjectorHTML = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            ${scriptInjectorHTML}
            ym(${yid}, "init", {
                clickmap:${clickmap},
                trackLinks:${trackLinks},
                accurateTrackBounce:${accurateTrackBounce},
                webvisor:${webvisor}
            });
      `,
      }}
    />
  );
}

function YandexMetrikaPixel({ yid }) {
  /// Pixel version of the Yandex Metrika.
  /// Used when there is no JavaScript on the target browser.
  /// This will cause the Yandex Metrika to track user by calling loading of the pixel image (with target params).

  // Target source to load pixel from.
  const pixelSource = `https://mc.yandex.ru/watch/${yid}`;

  /* eslint-disable @next/next/no-img-element */
  return (
    <noscript>
      <div>
        <img
          src={pixelSource}
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
  );
}

export default function YandexMetrika({
  yid,
  clickmap,
  trackLinks,
  accurateTrackBounce,
  webvisor,
}) {
  /// Yandex Metrika service.
  return (
    <>
      <YandexMetrikaTag
        yid={yid}
        clickmap={clickmap}
        trackLinks={trackLinks}
        accuracyTrackBounce={accurateTrackBounce}
        webvisor={webvisor}
      />
      <YandexMetrikaPixel yid={yid} />
    </>
  );
}
