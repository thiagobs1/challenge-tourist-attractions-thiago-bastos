document.addEventListener("DOMContentLoaded", function(){
    const titleInput = document.querySelector(".input-text");
    const descriptionInput = document.querySelector(".input-description");
    const imageInput = document.querySelector(".input-image");
    const items = document.querySelector(".list-items-wrapper");
    const form = document.querySelector(".inputs-form");
    const list = [];

    form.addEventListener("submit", addItemToList);
    imageInput.addEventListener("change", showPreview);
    
    function showPreview(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("img-input");
          preview.src = src;
          preview.style.display = "none";
        }
      }

    function addItemToList(e){
        e.preventDefault();

        const itemTitle = e.target["title"].value;
        const itemImage = e.target["img-input"].src;
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
            console.log(item)
            renderListItems();
            
        }
    }

    

    function renderListItems(){
        
        let structure = "";

        list.forEach(function(item){
            structure += `
            <li class="list-item">
            <img class="item-image" src="${item.image}" id="Img"/> 
                <div class="list-image-and-description">
                   <h2 class="list-text-title"> ${item.title} </h2>
                   <p class="list-text-description"> ${item.description} </p>
                   </div>
            </li>
            `;
        });
        items.innerHTML = structure;
    }

    


})