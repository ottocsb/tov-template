<template>
	<div class="card">
		<h1>TiKi Platinum</h1>
		<h2>6228 8076 2232 8768</h2>
		<h3>van conf banck</h3>
		<h4>03 / 29</h4>
	</div>
	<div class="circle"></div>
	<div class="rect"></div>
</template>

<script setup></script>

<style scoped>
.card {
	color: rgba(255, 255, 255, 0.8);
	position: absolute;
	right: 50%;
	bottom: 50%;
	z-index: 10;
	font-family: sans-serif;
	text-align: center;
	width: 300px;
	height: 500px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	border-left: 1px solid rgba(255, 255, 255, 0.4);
	background: linear-gradient(
		to top right,
		rgba(90, 149, 207, 0.5),
		rgba(58, 76, 99, 0.8)
	);
	box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
		-10px 10px 20px rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(6px); /*  元素后面区域添加模糊效果 */
	border-radius: 20px;
	transform: rotate(-15deg);
}
</style>
