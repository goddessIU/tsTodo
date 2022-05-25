<script setup lang="ts">
const ps = document.querySelectorAll('p')
for (const p of ps) {
    p.oncopy = null
    p.addEventListener('copy', (e) => {
        e.stopImmediatePropagation()
        e.stopPropagation()
    })
}
</script>

<template>
</template>

<style scoped lang="scss">
</style>
