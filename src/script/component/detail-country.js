class DetailCountry extends HTMLElement{

	set dataProvince(dataProvince){
		this._dataProvince = dataProvince;
		this.render();
	}

	render(){
		this.innerHTML= ``;
		this.innerHTML= `
			<style>
			detail-country{
				display: block;
				margin-top: 30px;
				margin-bottom: 30px;
			}
			tbody {
				display:block;
				max-height:550px;
				overflow:auto;
			}

			thead, tbody tr {
				display:table;
				width:100%;
				table-layout:fixed;
			}
			.no{
				width: 40px;
			}
			</style>
		`;
		const tableElement = document.createElement('table');
		tableElement.innerHTML = `
			<thead>
				<tr>
					<th class='no'>No</th>
					<th>Province</th>
					<th>Confirmed</th>
					<th>Recovered</th>
					<th>Deaths</th>
				</tr>
			</thead>
		`;
		const tbodyElement = document.createElement('tbody');
		this._dataProvince.forEach((province,index) => {
			const trElement = document.createElement('tr');
			trElement.innerHTML = `
				<td class='no' >${index+1}</td>
				<td>${province.name}</td>
				<td>${province.positive}</td>
				<td>${province.recovered}</td>
				<td>${province.deaths}</td>
			`;
			tbodyElement.appendChild(trElement);
		});
		tableElement.appendChild(tbodyElement);
		this.appendChild(tableElement);
	}

	renderError(message){
		this.innerHTML = `<h6 class='center'>I'm sorry ${message} :(</h6>`
	}
}

customElements.define('detail-country',DetailCountry);
