<script setup lang="ts">
const { t } = useI18n()

const { isDark, toggleDark } = useDarks()

const theme = computed(() => (isDark.value ? 'dark' : 'light'))
</script>

<template>
	<div class="m-6">Hello，This is the tov template！！</div>
	<div class="cursor-pointer m-6" @click="toggleDark()">theme: {{ theme }}</div>

	<div class="cursor-pointer mt-6 ml-6">
		<div>base: {{ t('about') }}</div>
		<div>nesting: {{ t('nesting.sir') }} {{ t('nesting.lady') }}</div>
	</div>
	<div>
		<n-button
			class="cursor-pointer mt-6 ml-6"
			@click="$router.push({ path: 'glass' })"
			>{{ t('go-glass') }}</n-button
		>
	</div>
</template>
