import jumbotronImg from '../../img/jumbotron.png';
class JumboTron extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML=`
			<style>
				jumbo-tron {
						 display: block;
				}
				.jumbotron{
					height: 250px;
					overflow: hidden;
					padding-top: 20px;
					background-repeat: repeat;
					background: url(${jumbotronImg});
				}
			</style>
			<div class="jumbotron center">
				<h3>Covid-19 Update</h3>
			</div>
		`;
	}
}
customElements.define('jumbo-tron',JumboTron);
