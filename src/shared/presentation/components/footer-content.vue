<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); const year = new Date().getFullYear();
</script>
<template><footer class="surface-card border-top-1 surface-border py-4"><div class="max-w-screen-xl mx-auto px-3 flex justify-content-between align-items-center"><small>© {{ year }} {{ t('app.name') }}. {{ t('footer.copyright') }}</small><nav class="flex gap-3"><a href="#privacy">{{ t('footer.privacy') }}</a><a href="mailto:soporte@technoload.pe">{{ t('footer.support') }}</a></nav></div></footer></template>
