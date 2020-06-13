class CaseCountry extends HTMLElement{
	constructor(){
		super();
		this.shadowDOM = this.attachShadow({mode: 'open'});
	}

	set dataCountry(data){
		this._dataCountry = data;
		this.time = new Date(this._dataCountry.lastUpdate);
		this.render();
	}

	render(){
		this.shadowDOM.innerHTML=`
		<style>
      :host{
        display: block;
        border-radius: 10px;
        overflow: hidden;
        margin: 20px;
      }
      img,h5,h2,p{
        display: inline-block;
        margin: 0;
        margin-right: 5px;
        vertical-align: middle;
      }
      h2{
        font-style:italic;
        font-weight:normal;
        font-size:2.5rem;
      }
      h5, p{
        font-size: 1.5rem;
      }
      .header{
        padding: 10px 10px 0 10px;
        text-align:center;
      }
      .header p{
        font-style:italic;
        font-size:1rem;
      }
      .item{
        padding:5px;
        text-align: center;
        margin: auto;
      }
      .container{
        margin: auto;
        display: flex;
        flex-direction: row;
      }
      span{
        margin:auto;
      }
			@media screen and (max-width: 622px){
				.container{
					flex-direction: column;
				}
    </style>
    <div class="header">
      <img src=${this._dataCountry.identity.id} alt="icon-world" height="30">
  		<h5>${this._dataCountry.identity.name} Case</h5>
      <p>(${this.time.toLocaleDateString()})</p>
    </div>
    <div class="container">
      <div class="item">
        <span>
          <p>${this._dataCountry.confirmed.value.toLocaleString()}</p>
          <h2>Confirmed</h2>
        </span>
      </div>
      <div class="item">
        <p>${this._dataCountry.deaths.value.toLocaleString()}</p>
        <h2>Deaths</h2>
      </div>
      <div class="item">
        <p>${this._dataCountry.recovered.value.toLocaleString()}</p>
        <h2>Recovered</h2>
      </div>
    </div>
		`;
	}
}
customElements.define('case-country',CaseCountry);
