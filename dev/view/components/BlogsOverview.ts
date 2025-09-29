import { m } from "@mufw/maya";
import { Button } from "../elements";
import { SRC } from "../../constants/asset-sources";

export const BlogsOverview = m.Div({
  children: [
    m.Div({
      id: "blogs",
      class: "f2 space-mono lh-copy mt5",
      children: [
        "# ",
        m.Span({
          class: "highlight",
          children: "&nbsp;blogs&nbsp;",
        }),
      ],
    }),
    m.Div({
      class: "pa5",
      children: [
        m.Div({
          class: "flex items-stretch mb5",
          children: [
            m.Img({
              class: "mr4",
              src: SRC.ASSETS.SCREENSHOTS.CODE_EXAMPLE.LIGHT,
              width: "360",
            }),
            m.Div({
              children: [
                m.H3({
                  class: "mt0 mb0",
                  children: "Dilemma of flux pattern and React",
                }),
                m.P({
                  class: "ma1 silver",
                  children: `A chrome extension for YouTube videos which calculates an attention
            score to indicate how attention-worthy a video is. It simply derives and
            shows a ratio of number of likes over number of total views of the video.
            A chrome extension for YouTube videos which calculates an attention
            score to indicate how attention-worthy a video is. It simply derives and
            shows a ratio of number of likes over number of total views of the video.
            A chrome extension for YouTube videos which calculates an attention
            score to indicate how attention-worthy a video is. It simply derives and
            shows a ratio of number of likes over number of total views of the video.`,
                }),
              ],
            }),
          ],
        }),
        m.Div({
          class: "flex items-stretch mb4",
          children: [
            m.Div({
              children: [
                m.H3({
                  class: "mt0 mb0",
                  children: "Dilemma of flux pattern and React",
                }),
                m.P({
                  class: "ma1 silver",
                  children: `A chrome extension for YouTube videos which calculates an attention
            score to indicate how attention-worthy a video is. It simply derives and
            shows a ratio of number of likes over number of total views of the video.
            A chrome extension for YouTube videos which calculates an attention
            score to indicate how attention-worthy a video is. It simply derives and
            shows a ratio of number of likes over number of total views of the video.
            A chrome extension for YouTube videos which calculates an attention
            score to indicate how attention-worthy a video is. It simply derives and
            shows a ratio of number of likes over number of total views of the video.`,
                }),
              ],
            }),
            m.Img({
              class: "ml4",
              src: SRC.ASSETS.SCREENSHOTS.CODE_EXAMPLE.LIGHT,
              width: "360",
            }),
          ],
        }),
        Button({
          classNames: "mb5",
          href: "/blogs",
          label: "Check out all blogs",
        }),
      ],
    }),
  ],
});
