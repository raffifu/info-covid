class ListCountry extends HTMLElement{
	set listCountry(countries){
		this._countries = countries;
		this.render();
	}

	set onClicked(event){
		this._onClicked = event;
	}

	render(){
		this.innerHTML=`
		<style>
			list-country{
				display: block;
			}
		</style>
		<a class='dropdown-trigger btn' href='#' data-target='list-country'>Choose Country ></a>
		`;
		const ulElement = document.createElement('ul');
		ulElement.id = "list-country";
		ulElement.classList.add("dropdown-content");
		this._countries.forEach(country =>{
			const liElement = document.createElement('li');
			liElement.innerHTML = `
				<a id='${country.iso2}' class='list-country'>${country.name}</a>
			`;
			ulElement.appendChild(liElement);
		})
		this.appendChild(ulElement);
		this.buttonInit();
	}
	buttonInit(){
		const dropdownTrigger = document.querySelectorAll(".dropdown-trigger");
		M.Dropdown.init(dropdownTrigger);

		const buttonListCountries = document.querySelectorAll('.list-country');
		buttonListCountries.forEach(button => {
			button.addEventListener('click', this._onClicked);
		});
	}
}

customElements.define('list-country',ListCountry);
