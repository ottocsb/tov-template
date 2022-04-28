<script setup>
import { weather, weatherEn } from '../api/test'
import { useMessage } from 'naive-ui'

const { isDark, toggleDark } = useDarks()
const theme = computed(() => (isDark.value ? 'dark' : 'light'))
const { t, locale } = useI18n()
const language = computed(() => (locale.value === 'zh-CN' ? '中文' : 'English'))
const name = ref(null)
const message = useMessage()

onMounted(() => {
	name.value = localStorage.getItem('name')
	if (name.value) {
		message.success('欢迎回来' + name.value)
	}
})

watch(name, (val) => {
	localStorage.setItem('name', val)
})

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
	<div class="m-6">
		<div>id：{{ name }}</div>
		<div @click="toggleLocale()">{{ t('language') }}: {{ language }}</div>
		<div class="cursor-pointer" @click="toggleDark()">
			{{ t('theme') }}: {{ theme }}
		</div>

		<div>{{ t('weather') }}: &nbsp; {{ t('temp') }}：</div>
	</div>
</template>
