const APP_NAME = "YouTube Attention Score";
const POLICY_EFFECTIVE_DATE = "01 February 2025";
const DEV_EMAIL = "cyftec@cyfer.tech";
export const YT_SCORE_EXT = {
  NAME: APP_NAME,
  ENQUIRY: DEV_EMAIL,
  POLICY: {
    EFFECTIVE_DATE: POLICY_EFFECTIVE_DATE,
    PARAS: [
      `###Privacy Policy for ${APP_NAME}`,
      `**Effective Date**: ${POLICY_EFFECTIVE_DATE}`,
      `${APP_NAME} ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you install and use our Chrome extension.`,
      `##1. How the Extension Works`,
      `${APP_NAME} is designed to work without needing to collect or store any user data. All functionality is processed locally on your device, with no data being sent to our servers or third parties.`,
      `##2. Information We Do Not Collect`,
      `We do not collect, store, or share any personally identifiable information from users of the extension. Specifically:`,
      [
        `**No Personal Data Collection**: We do not collect any personal information, such as your name, email address, or browsing history.`,
        `**No Usage Data Collection**: We do not track or log any usage data, including the websites you visit or your interaction with content within the extension.`,
        `**No Cookies or Tracking**: Our extension does not use cookies or any form of tracking technologies to monitor your activity.`,
      ],
      `##3. Permissions Requested`,
      `The extension may request certain permissions to function properly. These permissions are strictly for technical reasons and do not involve collecting or sharing any user data. For example, the extension might request access to the contents of the web pages you visit to enable specific features, but this does not involve storing or sharing any of that data.`,
      `##4. Security`,
      `While we do not collect any personal information, we are still committed to ensuring the security of the extension. We take steps to ensure the extension is secure and functions as expected, but please remember that no method of data transmission over the internet is 100% secure.`,
      `##5. Changes to This Privacy Policy`,
      `We may update this Privacy Policy from time to time. If we ever decide to change how we handle data (such as introducing new features that require data collection), we will update this policy and notify you of the changes. Please review this policy periodically for any updates.`,
      `##6. Contact Us`,
      `If you have any questions or concerns about this Privacy Policy or our extension, feel free to contact us at:`,
      `${DEV_EMAIL}`,
    ],
  },
};
