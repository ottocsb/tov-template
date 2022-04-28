<script setup>
import { useMessage } from 'naive-ui'
import { router } from '../modules/router'
const { t } = useI18n()

const name = ref(null)
const message = useMessage()

onMounted(() => {
	name.value = localStorage.getItem('name')
	if (!name.value) {
		name.value = '路过游客' + Math.floor(Math.random() * 100)
	} else {
		router.push('/chatBox')
	}
})

const sendName = () => {
	console.log(name)
	const _name = name.value.trim()
	if (_name.length < 6) {
		message.error('请输入至少6个字符的昵称')
	} else {
		localStorage.setItem('name', _name)
		name.value = _name
		router.push('/chatBox')
		router.go(0)
	}
}
</script>

<template>
	<div class="m-6">
		<div class="w-1/2">
			<n-input
				v-model:value="name"
				style="display: inline-block; width: 200px"
				placeholder="请输入用户名"
			></n-input>
			<n-button @click="sendName">{{ t('confirm') }}</n-button>
		</div>
	</div>
</template>

<style scoped></style>
