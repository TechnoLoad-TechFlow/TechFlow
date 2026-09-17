<script setup>
defineProps({asset:{type:Object,required:true}});const emit=defineEmits(['select']);const severity=Object.freeze({AVAILABLE:'success',IN_MAINTENANCE:'warn',IN_OPERATION:'info',OUT_OF_SERVICE:'danger'});
</script>
<template><pv-card class="h-full cursor-pointer" @click="emit('select',asset)"><template #title><div class="flex justify-content-between gap-2"><span>{{asset.name}}</span><pv-tag :value="asset.status" :severity="severity[asset.status]"/></div></template><template #subtitle>{{asset.code}} · {{asset.type}}</template><template #content><p class="m-0 text-600">Uso acumulado: {{asset.currentUsage}}</p></template></pv-card></template>
