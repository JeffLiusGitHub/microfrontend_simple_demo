import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';
// import 'products/src/index';
console.log('container!');

productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
