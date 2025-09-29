import { SRC } from "./asset-sources";

export const PRODUCTS_SHOWCASE = {
  title: "Products Showcase",
  products: [
    {
      title: "Maya UI Framework",
      subtitle: "NPM Package",
      size: 32,
      logoSrc: SRC.ASSETS.LOGOS.MAYA,
      description: [
        `A TypeScript only web framework which generates MPA (multi-page
        application) and only needs file server to host the app as opposed
        to other popular web framewroks which creates mostly an SPA and
        needs app server.`,
      ],
    },
    {
      title: "Signal",
      subtitle: "NPM Package",
      size: 40,
      logoSrc: SRC.ASSETS.LOGOS.SIGNAL,
      description: [
        `Signals are basic data units that can automatically alert functions
        or computations when the data it holds changes. This library is a
        TypeScript implementation of signals.`,
      ],
    },
    {
      title: "Batua",
      subtitle: "Web App",
      logoSrc: SRC.ASSETS.LOGOS.BATUA,
      description: [
        `A tag based personal money tracker app. The flexibile user-defined
        tags, unlike fixed categories helps in classifying and monitoring expenses
        and earnings more effectively with detailed charts and graphs.`,
      ],
    },
    {
      title: "YouTube Attention Score",
      subtitle: "Chrome Extenstion",
      logoSrc: SRC.ASSETS.LOGOS.YT_ATTENTION_SCORE,
      description: [
        `A chrome extension for YouTube videos which calculates a score to indicate
        how attention-worthy a video is. It simply derives and shows a ratio of total
        number of likes over total number of views of the video.`,
      ],
    },
  ],
};
