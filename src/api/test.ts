import { useRequest } from 'vue-request'

export const testRequest = () => {
	const { data, loading, error} = useRequest ({
		url: 'https://geoapi.qweather.com/v2/city/lookup?location=beij&key=ad4ea74a5f4a42c2b03263e382779b6f',
		method: 'get',
	})
	return { data, loading, error }
}
