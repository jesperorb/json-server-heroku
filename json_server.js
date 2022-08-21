
import nevbar from "./components/nevbar.js";
let nevbars = document.getElementById('nev');
nevbars.innerHTML = nevbar();
document.getElementById('add').addEventListener('click', Add_Product);
async function Add_Product() {
    let id = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let image = document.getElementById('image').value;
    let price = document.getElementById('price').value;

    // let send_data = {
    //     id: id,
    //     title: title,
    //     image: image
    // };
    let send_data = {
        id,
        title,
        image,
        price
    };

    console.log(id, title, image);


    let res = await fetch("http://localhost:3000/posts", {
        method: 'POST',
        body: JSON.stringify(send_data),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let data = await res.json();
    // products_arr.push(data);
    // localStorage.setItem('products', JSON.stringify(data));
    // append_data(data);
    console.log(data);

}




