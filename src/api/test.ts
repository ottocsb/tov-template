import { useRequest } from 'vue-request'


//根据城市id获取天气信息
export const weather = () => {
		const { data, loading, error} = useRequest({
			url: `https://devapi.qweather.com/v7/weather/now?location=${101010100}&key=ad4ea74a5f4a42c2b03263e382779b6f`,
			method: 'get',
		})
		return { data, loading, error }
}
//获取英文天气哦
export const weatherEn = () => {
	const { data, loading, error} = useRequest ({
		url: `https://devapi.qweather.com/v7/weather/now?key=ad4ea74a5f4a42c2b03263e382779b6f&location=${101010100}&lang=en`,
		method: 'get',
	})
	return { data, loading, error }
}
