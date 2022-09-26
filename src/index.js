/*
 * External dependencies
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';

/*
 * Internal dependencies
 */
import './styles/style.scss';
import form from './components/form';
import mobileMenu from './components/mobileMenu';
import curentNavActive from './components/curentNavActive';

document.addEventListener('DOMContentLoaded', () => {
    form();
    curentNavActive();
    mobileMenu();
});
