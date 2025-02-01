import { m } from "@mufw/maya";
import { Page } from "../../../../libs/components";
import { policyParas } from "../@libs/constants";

export default Page({
  title: "Privacy Policy - YouTube Attention Score",
  app: m.Div({
    class: "lh-tall mt4 mb5",
    children: m.For({
      subject: policyParas,
      map: (paragraph) =>
        m.If({
          subject: Array.isArray(paragraph),
          isTruthy: m.Ul(
            m.For({
              subject: paragraph as string[],
              map: (listItem) => {
                const sections = listItem.split("**");
                return m.Li({
                  class: "mb3",
                  children: m.For({
                    subject: sections,
                    map: (secItem, i) =>
                      m.If({
                        subject: i % 2 === 1 && 1 !== sections.length - 1,
                        isTruthy: m.B(secItem),
                        isFalsy: m.Span(secItem),
                      }),
                  }),
                });
              },
            })
          ),
          isFalsy:
            typeof paragraph !== "string"
              ? undefined
              : m.Switch({
                  subject: paragraph,
                  caseMatcher(subject, matchingCase) {
                    return subject.startsWith(matchingCase);
                  },
                  cases: {
                    "###": m.H2({
                      class: "mb4",
                      children: paragraph.replaceAll("###", ""),
                    }),
                    "##": m.H3({
                      class: "mt4 mb1",
                      children: paragraph.replaceAll("##", ""),
                    }),
                  },
                  defaultCase: m.P({
                    class: "mt1",
                    children: m.For({
                      subject: paragraph.split("**"),
                      map: (secItem, i) =>
                        m.If({
                          subject:
                            i % 2 === 1 &&
                            1 !== paragraph.split("**").length - 1,
                          isTruthy: m.B(secItem),
                          isFalsy: m.Span(secItem),
                        }),
                    }),
                  }),
                }),
        }),
    }),
  }),
});
