import {data} from './data.js';






/////////////////////////////////////////////////////////////////////////

const searchfun =()=>{
    let search=document.getElementsById("searchbtn").value;
    console.log(search);
}

const searchbtn=document.getElementsByClassName("searchbtn");

const imgs=document.getElementsByClassName("imgs").value;
const food=document.getElementsByClassName("food");

var cards=document.getElementById("wrapper");
function loaddata(data){
    console.log(data.length);
    
for(var i=0;i<data.length;i++){
    // console.log(data.includes(data.name="Veggie Delight"));
    var row=`
    <div class="food">
                <ul>
                    <img src="${data[i].imageSrc}"
                        class="imgs" height="130px" width="320px" alt="food">
                    <div class="info">
                     <li id="cato">${data[i].type}</li> 
                <div class="title">
                    <h4>${data[i].name}</h4>
                    <li id="rating"><img src="img/Star.png"   alt="star"> ${data[i].rating}</li>
                </div>  
                    
                    
                </div>
                <div class="title">
                <li id="orange">${data[i].time} MINS</li>
                <li id="oranget"><img src="img/Vector.png" alt="vector"> <img src="img/comments.png" alt="comments"></li>
                </div>
                
            </ul>
            </div>`

            cards.innerHTML += row;
}
}

     loaddata(data);
    //  cards.innerHTML="dfghjkl";
    /////////////////////////////////////////////////////////////////////

    searchbtn.onclick=function(){
        // console.log(search.innerHTML);
    }

    
    
    



