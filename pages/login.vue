<script lang="ts" setup>
    definePageMeta({
        middleware: 'authenticated'
    })
</script>
<template>
    <UContainer>
    <Login/>
    </UContainer>
</template>