const BASE_URL = '/api/items';

//create
export function create(item) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(item)
    }).then(res => res.json());
}

//read
export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

//update
export function update(item) {
    return fetch(`${BASE_URL}/${item._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(item)
    }).then(res => res.json());
}

//delete
export function deleteItem(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

