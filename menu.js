var count =1;
function addData() {
    var title = document.getElementById("Title").value;
    var article = document.getElementById("Article").value; 
    var Image = document.getElementById("Image").value; 

    var myBox = document.createElement("div");
    myBox.setAttribute("class","card m-3");
   
    var mytitle = document.createTextNode(title);
    var DivTitle = document.createElement("div");
    DivTitle.setAttribute("class","card-header");
    DivTitle.appendChild(mytitle);

    var myarticle = document.createTextNode(article);
    var DivArticle = document.createElement("div");
    DivArticle.setAttribute("class","card-clock-deals-detail");
    DivArticle.appendChild(myarticle);

    var DivImage = document.createElement("img");
    DivImage.setAttribute("class","card-img-top");
    DivImage.setAttribute("src",Image);
    
    myBox.appendChild(DivTitle);
    myBox.appendChild(DivArticle);
    myBox.appendChild(DivImage);

   
    myBox.setAttribute("style","color:black;font-size:16px;width: 180px;float: left;margin-left: 10px;");

    count++;
    document.getElementById("box").appendChild(myBox);
   
   
}
