import nevbar from "./components/nevbar.js";
console.log(nevbar);
let body = document.querySelector('#nev');
body.innerHTML = nevbar();
document.getElementById('delete').addEventListener('click', delete_Product);
async function delete_Product() {
    let id = document.getElementById('delete_id').value;
    let res = await fetch(`http://localhost:3000/posts/${id}
    `, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await res.json();
    console.log("data: ", data);

}
document.getElementById('update').addEventListener('click', Update_Product);
async function Update_Product() {
    let id = document.getElementById('update_id').value;
    let title = document.getElementById('update_title').value;
    let send_update_data = {
        title,
    };
    let res = await fetch(`http://localhost:3000/posts/${id}
    `, {
        method: 'PATCH',
        body: JSON.stringify(send_update_data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await res.json();
    console.log("data: ", data);
}

document.getElementById('replace').addEventListener('click', Replace_Data);

async function Replace_Data() {
    let id = document.getElementById('replace_id').value;
    let title = document.getElementById('replace_title').value;
    let send_replace_data = {
        title,
    };

    let res = await fetch(`http://localhost:3000/posts/${id}
    `, {
        method: 'PUT',
        body: JSON.stringify(send_replace_data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await res.json();
    console.log("data: ", data);
}
let get_data = async () => {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    console.log("data: ", data);
    append_data(data);
};
get_data();
let append_data = (data) => {
    let box = document.getElementById('show_product_data');
    data.forEach((el) => {
        let div = document.createElement('div');
        let id = document.createElement('p');
        id.innerText = el.id;
        let image = document.createElement('img');
        image.src = el.image;
        let title = document.createElement('h3');
        title.innerText = el.title;
        let price = document.createElement('p');
        price.innerText = `₹${el.price}`;
        div.append(image, id, title, price);
        box.append(div);
    });
};