const messages = {
  "en-US": {
    test: "en-US",
  },
  "ko-KR": {
    test: "ko-KR",
  },
  "zh-TW": {
    test: "zh-TW",
  },
  "zh-CN": {
    test: "zh-CN",
  },
  "ja-JP": {
    test: "ja-JP",
  },
};

export default {
  strategy: "no_prefix",
  locales: [
    { code: "en-US", name: "English" },
    { code: "ko-KR", name: "한국어" },
    { code: "zh-TW", name: "繁體中文" },
    { code: "zh-CN", name: "简体中文" },
    { code: "ja-JP", name: "日本語" },
  ],
  defaultLocale: "en-US",
  vueI18n: {
    fallbackLocale: "en-US",
    messages,
  },
};
