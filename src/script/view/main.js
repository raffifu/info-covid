import worldLogo from '../../img/world.svg';
const listCountryElement = document.querySelector('list-country');
const caseWorld = document.querySelector('case-world');
const caseCountry = document.querySelector('case-country');
const detailCountry = document.querySelector('detail-country');

const getDataWorldwide = () => {
	fetch(`https://covid19.mathdro.id/api/`)
		.then(response => response.json())
		.then(responseJson => {
			responseJson.world = worldLogo;
			caseWorld.dataWorld = responseJson;
		})
		.catch(error => alert('check your internet connection'));
}

const getDataCountry = (id = 'ID', name = 'indonesia') => {
	return fetch(`https://covid19.mathdro.id/api/countries/${name}`)
		.then(response => response.json())
		.then(responseJson => {
			if(id == 'undefined') {
				id = worldLogo;
			}else{
				id = `https://www.countryflags.io/${id}/flat/64.png`;
			}
			responseJson.identity = {name,id};
			return Promise.resolve(responseJson)
		})
		.catch(error => alert('check your internet connection'));
}

const getProvinceData = (id = 'ID') => {
	 if(id === 'ID'){
		return fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
			.then(response => response.json())
			.then(responseJson =>{
				const arr = [];
				responseJson.data.slice(0,34).forEach(data => {
					const obj = {
						positive: `${data.kasusPosi.toLocaleString()}`,
						deaths: `${data.kasusMeni.toLocaleString()}`,
						recovered: `${data.kasusSemb.toLocaleString()}`,
						name: `${data.provinsi}`
					}
						arr.push(obj);
				});
				return Promise.resolve(arr);
			}).catch(error => detailCountry.renderError(error))
	}else{
		return fetch(`https://covid19.mathdro.id/api/countries/${id}/confirmed`)
			.then(response => response.json())
			.then(responseJson => {
					if(responseJson.length > 1){
						const arr = [];
						responseJson.forEach(data => {
							const obj = {
								positive: `${data.confirmed.toLocaleString()}`,
								deaths: `${data.deaths.toLocaleString()}`,
								recovered: `${data.recovered.toLocaleString()}`,
								name: `${data.provinceState}`
							}
							arr.push(obj);
						})
						return Promise.resolve(arr);
					}else{
						return Promise.reject('detail data not found');
					}
			})
			.catch(error => detailCountry.renderError(error))
	}

}

const getListCountry = () => {
	fetch('https://covid19.mathdro.id/api/countries')
	.then(response => response.json())
	.then(responseJson => {
		listCountryElement.listCountry = responseJson.countries;
	}).catch(error => alert('internet connection problem'))
}

const getAllDataCountry = (country = 'indonesia', code = 'ID') => {
	Promise.all([getDataCountry(code, country), getProvinceData(code)])
	.then(response => {
		const [dataCountry, provinceData] = response;
		if(provinceData !== undefined) detailCountry.dataProvince = provinceData;
		caseCountry.dataCountry = dataCountry;
	})
}

const main = () => {
	getDataWorldwide();
	getListCountry();
	getAllDataCountry()

	const onClicked = (event) => {
		getAllDataCountry(event.target.innerText, event.target.id)
	}

	const mobileNav = document.querySelectorAll(".sidenav");
	M.Sidenav.init(mobileNav);

	const loveTrigger = document.querySelectorAll('.tooltipped');
	M.Tooltip.init(loveTrigger,{
		margin: 12
	});

	listCountryElement.onClicked = onClicked;
}

export default main;
