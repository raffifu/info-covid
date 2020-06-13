
const dataTable = document.querySelector('tbody');

const getCountry = () => {
	fetch("https://covid19.mathdro.id/api/countries")
	.then(response => response.json())
	.then(responseJson => {
		responseJson.countries.forEach((obj, index) => {
			fetch(`https://covid19.mathdro.id/api/countries/${obj.name}`)
				.then(response => response.json())
				.then(responseJson => {
					const rowTable = document.createElement('tr');
					rowTable.innerHTML = `
							<td>${index + 1}</td>
							<td>${obj.name}</td>
							<td>${responseJson.confirmed.value}</td>
							<td>${responseJson.recovered.value}</td>
							<td>${responseJson.deaths.value}</td>
					`;
					dataTable.appendChild(rowTable);
				})
				.catch(error => console.log(error));

		})
	}).catch(error => console.log(error))
};

export default getCountry;
