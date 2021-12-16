export default function ({ route, i18n }) {
  const hl = route.query?.hl ?? "";

  if (hl.length === 0) {
    return;
  }

  const currentLocale =
    i18n.locales.find(
      (locale) => locale.code.toLowerCase() === hl.toLowerCase()
    ) ?? null;

  if (currentLocale === null) {
    return;
  }

  i18n.setLocale(currentLocale.code);
}
