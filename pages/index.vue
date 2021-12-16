<template>
  <div>
    <nuxt-link
      v-for="locale in i18n.locales"
      :key="locale.code"
      :to="{ query: { hl: locale.code } }"
      tag="button"
    >
      {{ locale.name }}
    </nuxt-link>
    <h1>{{ $t("test") }}</h1>
  </div>
</template>

<script>
import i18n from "@/i18n.config";

export default {
  name: "IndexPage",
  data() {
    return { i18n };
  },
};
</script>
