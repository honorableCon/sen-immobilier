const objet = [
    {
        'id':'appartement1',
        'description':'description complete',
        'images':['app1.1', 'app1.2', 'app1.3']
    },
]

const objetToDetail = JSON.parse(sessionStorage.getItem('objetToDetail'))

console.log( objetToDetail['id'] in objet)
