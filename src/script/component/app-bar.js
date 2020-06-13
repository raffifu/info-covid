import logoImg from "../../img/logo.svg";
class AppBar extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML=`
			<nav class="red darken-1">
				<div class="nav-wrapper container ">
					<a href="" class="brand-logo"><img class="responsive-img" src=${logoImg} alt=""></a>
				</div>
			</nav>
		`;
	}
}
customElements.define('app-bar',AppBar);
