//Assets
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './style/style.css';
// Component
import './script/component/case-world.js';
import './script/component/case-country.js';
import './script/component/list-country.js';
import './script/component/detail-country.js';
import './script/component/app-bar.js';
import './script/component/jumbo-tron.js';
import './script/component/author-footer.js';
//main function
import main from './script/view/main.js';

document.addEventListener("DOMContentLoaded", main);
