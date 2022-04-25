<script setup>
import { weather, weatherEn } from '../api/test'

const { t, locale } = useI18n()
const language = computed(() => (locale.value === 'zh-CN' ? '中文' : 'English'))

const weatherData = () => {
	if (locale.value === 'en') {
		const { data } = weatherEn()
		console.log(data)
	} else {
		const { data } = weather()
		console.log(data)
	}
}
weatherData()

const toggleLocale = () => {
	locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
	weatherData()
}
</script>

<template>
	<div @click="toggleLocale()">
		<div>{{ t('language') }}: {{ language }}</div>

		<div>{{ t('weather') }}: &nbsp; {{ t('temp') }}：</div>
	</div>
</template>
