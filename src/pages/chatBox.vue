<script setup>
import { router } from '../modules/router'
import { useWebSocket } from '../composables/websocket'

const state = reactive({
	msg: '',
	list: [],
})
const { t } = useI18n()
const msg = ref(null)
let userName = ''

const handelMessage = (msg) => {
	console.log(msg)
	let data = JSON.parse(msg.data)
	state.list.push(data)
}
const ws = useWebSocket(handelMessage)

onMounted(() => {
	userName = localStorage.getItem('name')
	if (!userName) {
		router.push('/')
	}
})

const sendMsg = () => {
	const _msg = msg.value
	if (!_msg.trim().length) {
		return
	}
	ws.send(
		JSON.stringify({
			msg: _msg,
			time: new Date().getTime(),
			id: Math.floor(Math.random() * 100),
			name: userName,
		})
	)
	msg.value = ''
}
</script>

<template>
	<div class="m-6">
		<div class="w-1/2">
			<n-input
				v-model:value="msg"
				style="display: inline-block; width: 200px"
				placeholder="请输入消息"
			></n-input>
			<n-button @click="sendMsg">{{ t('confirm') }}</n-button>
			<div>
				<n-list v-for="item in state.list" :key="item.id" style="width: 200px">
					<n-list-item>{{ item.id }}</n-list-item>
					<n-list-item>{{ item.name }}</n-list-item>
					<n-list-item>{{ item.time }}</n-list-item>
					<n-list-item>{{ item.msg }}</n-list-item>
				</n-list>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
