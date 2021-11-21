let cart = _('.cart').cloneNode(true);

// for ( let i = 0; i < 3; i++ ) {
//     _('.location').appendChild(_('.cart').cloneNode(true));
// }

for ( let cart of __('.cart') ) {
    cart.addEventListener('mouseover', ()=> {
        cart.children[0].children[1].style.display = 'block';
    }, false);
}

for ( let cart of __('.cart') ) {
    cart.addEventListener('mouseout', ()=> {
        cart.children[0].children[1].style.display = 'none';
    }, false);
}