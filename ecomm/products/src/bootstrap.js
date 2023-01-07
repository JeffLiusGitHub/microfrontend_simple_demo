import faker from 'faker';

const mount = (el) => {
	let products = '';
	for (let i = 0; i < 10; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;

		el.innerHTML = products;
	}
};
//context/ situation #1
//running file in development in isolation, using local index.html have dev-products, we want to render app immediately
if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-products');
	//container may not have element with id dev-products
	if (el) {
		//probably running isolation
		mount(el);
	}
}
//Context/ situation #2
//running file in development or production through container app, no guarantee element will have id 'dev-products', so we don't want to immediately render app
export { mount };
