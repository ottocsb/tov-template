<script setup>
import { testRequest } from '../api/test'

const { data, loading, error } = testRequest()
</script>

<template>
	<div>
		<div v-if="loading">loading...</div>
		<div v-if="error">failed to fetch</div>
		<div v-if="data">Hey! {{ data }}11</div>
	</div>
</template>
