function sendData(){

    
    const color = document.querySelector("#colorpicker").value;
    const text = document.querySelector("#text").value;
    const picture = document.querySelector("#picture").value;
    
    console.log(color);
    console.log(text);
    console.log(picture);

 
    const myCard = document.querySelector("#card");
    myCard.innerHTML ="";
    // Add text
    const textInCard = document.createElement("p");
    textInCard.innerHTML= text;
    myCard.append(textInCard)
    //Change color
    myCard.style.backgroundColor = color;

    //Add picture
    var img = document.createElement("img");
    img. style. width = '156px';
    img. style. height = 'auto';
    img.style.marginLeft ="20px";
    if(picture == "myra"){
        img.src = "myra.gif";
    }
    
    else if(picture == "sol"){
        img.src = "sol.jpg";
    }

    else{
        img.src = picture + ".png";
    }


    myCard.appendChild(img);


    

    






 
    // const nyRad = document.createElement("tr");
    // nyRad.setAttribute("id", radId);
    // nyRad.setAttribute("class", "unselectedRow");
    // const formcontent = `
    // <td id="namn${radId}">${document.querySelector("#namn").value}</td>
    // <td id="tel${radId}">${document.querySelector("#tel").value}</td>
    // <td id="mat${radId}">${mat}</td>
    // <td id="antal${radId}">  ${antal}</td>
    // <td><input type ="button" value ="Redigera ${document.querySelector("#namn").value}" onclick = "editTable(${radId})">
    //  / <input type ="button" value ="Ta bort ${document.querySelector("#namn").value}" onclick ="removeDataFromTable(${radId})"></td>
    // `;

    // nyRad.innerHTML = formcontent;
    // myDataTable.append(nyRad);
}