import { m } from "@mufw/maya";
import { App } from "./app";

export default () =>
  m.Html({
    lang: "en",
    children: [
      m.Head({
        children: [
          m.Title({
            children: "Maya Docs",
          }),
          m.Link({
            rel: "stylesheet",
            href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
          }),
          m.Link({
            rel: "stylesheet",
            href: "assets/styles.css",
          }),
        ],
      }),
      m.Body({
        children: [
          m.Script({
            src: "main.js",
            defer: true,
          }),
          App(),
        ],
      }),
    ],
  });
