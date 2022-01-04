document.addEventListener("DOMContentLoaded", function(){
    const titleInput = document.querySelector(".input-text");
    const descriptionInput = document.querySelector(".input-description");
    const imageInput = document.querySelector(".input-image");
    const items = document.querySelector(".list-items");
    const form = document.querySelector(".inputs-form");
    const list = [];

    form.addEventListener("submit", addItemToList);

    function addItemToList(e){
        e.preventDefault();

        const itemTitle = e.target["title"].value;
        const itemImage = e.target["Image"].value;
        const itemDescription = e.target["description"].value;

        if(itemTitle == ""){
            alert("Por favor, preencha o campo do título");
        }
        else if(itemImage == ""){
            alert("Por favor, coloque a imagem");
        }
        else if(itemDescription == ""){
            alert("Por favor, preencha a descrição");
        } else{
            const item = {
                title: itemTitle,
                image: itemImage,
                description: itemDescription
            }
            list.push(item);

            renderListItems();
        }
    }

    function renderListItems(){
        let structure = "";

        list.forEach(function(item){
            structure += `
            <li class="list-item">
            <span> ${item.title} </span>
            <span> ${item.image} </span>
            <span> ${item.description} </span>
            </li>
            `;
        });
        items.innerHTML = structure;
    }

    


})