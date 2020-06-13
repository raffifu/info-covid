import loveImg from '../../img/love.svg'
class AuthorFooter extends HTMLElement{
	connectedCallback(){
		this.render();
	}
	render(){
		this.innerHTML=`
			<footer class='page-footer red darken-1'>
				<div class="footer-copyright">
					<div class="container center">
						<a class="tooltipped" data-position="top" data-tooltip='made by Raffi F U'><img src=${loveImg} alt="love img" width='35'></a>
					</div>
				</div>
			</footer>
		`;
	}
}
customElements.define('author-footer',AuthorFooter);
