<script setup>
import {ref} from 'vue';import {useI18n} from 'vue-i18n';defineProps({asset:{type:Object,default:null}});const {t}=useI18n();const popover=ref(null);/** @param {Event} event */function toggle(event){popover.value?.toggle(event);}defineExpose({toggle});
</script>
<template><pv-popover ref="popover"><article v-if="asset" class="w-16rem"><h3 class="mt-0">{{t('fleet.assetDetails')}}</h3><dl class="m-0"><dt>{{t('fleet.assetCode')}}</dt><dd class="ml-0 mb-3">{{asset.code}}</dd><dt>{{t('fleet.assetName')}}</dt><dd class="ml-0 mb-3">{{asset.name}}</dd><dt>{{t('fleet.assetStatus')}}</dt><dd class="ml-0"><pv-tag :value="asset.status"/></dd></dl></article><p v-else>{{t('fleet.noAssets')}}</p></pv-popover></template>
