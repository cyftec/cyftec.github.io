import { m } from "@mufw/maya";
import { Button } from "../elements";
import { SRC } from "../../constants/asset-sources";

export const AboutUs = m.Div({
  children: [
    m.Div({
      id: "about-us",
      class: "f2 space-mono lh-copy mt5",
      children: [
        "# ",
        m.Span({
          class: "highlight",
          children: "&nbsp;about us&nbsp;",
        }),
      ],
    }),
    m.Div({
      class: "pa5",
      children: [
        m.Div({
          class: "flex items-stretch",
          children: [
            m.Img({
              class: "mr4 flip",
              src: SRC.ASSETS.IMAGES.FOUNDER,
              height: "200",
              width: "200",
            }),
            m.Div({
              children: [
                m.H3({
                  class: "mt0 mb0",
                  children: "Chandan Kumar, Founder & CTO",
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
        Button({
          classNames: "mt4 mb5",
          label: "Check out careers at Cyfer",
          onClick: () => location.assign("/products"),
        }),
      ],
    }),
  ],
});
