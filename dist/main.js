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

$(_('.cart'), 'click', (e)=>{
    e.preventDefault()
    let objetToDetail = {
        id:_('.image-to-detail').id,
        title:_('.description h3').textContent,
        location:_('.prop .location').textContent,
        price:_('.price').textContent,
        bed:_('.bed').textContent,
        toilet:_('.toilet').textContent
    }
    sessionStorage.clear();
    sessionStorage.setItem('objetToDetail', JSON.stringify(objetToDetail));
   
});