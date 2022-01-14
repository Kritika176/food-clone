
let div = document.getElementById("recipes");
getData();

async function getData(){
    
    try{
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=b")
        let data = await res.json();
        // appendRecipe(data.meals);
      //  console.log(data);
       appendData(data.meals);
      
    }
    catch(err){
       console.log(err)
    }
}
function appendData(data)
{
  console.log(data)
  show_recipe(data);
  document.querySelector('#select_two').addEventListener("click",sort_item);
    
    function sort_item(){
      document.getElementById("recipes").innerHTML="";
      let selected = document.querySelector("#select_two").value;
      if(selected=="random"){
        show_recipe(data);
      }
     if(selected=="newly")
      {
        console.log(selected)
        data.sort(function(a,b)
        {
          return Number(b.idMeal)-Number(a.idMeal);
        })
        localStorage.setItem("sorted_data",JSON.stringify(data))
        console.log(data);
        show_recipe(data);
      }
       else if(selected=="random"){
        data.sort(function(a,b)
        {
          return Number(a.idMeal)-Number(b.idMeal);
        })
        localStorage.setItem("sorted_data",JSON.stringify(data))
        console.log(data);
        show_recipe(data);
      }
    }
      
          
    
  document.querySelector('#select').addEventListener("click",change);
  function change(){
    document.getElementById("recipes").innerHTML="";
    let value= document.querySelector("#select").value;
    console.log(value)
    
    let filterList = data.filter(function(elem){
      let changeList = [];
      if(elem.strCategory == `${value}`) {
        
        changeList.push(elem);
        localStorage.setItem("filterd",JSON.stringify(changeList));
        console.log(changeList)
        show_recipe(changeList);
      }
      else if (value =="category")
      {
        show_recipe(data);
      }
    });
    
   
  }
  function show_recipe(d)
  {
    
    d.map(function(elem){
        let item = document.createElement("div");
        item.addEventListener('click',show);
        function show()
        {
          let el = elem;
          localStorage.setItem("recipe_detail",JSON.stringify(el))
          console.log(el);
          window.location.href =" ./recipe_detail.html";
        
        }
        item.style.backgroundColor="lightgray";
        item.setAttribute("id","item")
        let container = document.getElementById("recipes");
        container.append(item);
        let image = document.createElement("img");
        image.setAttribute("id","image")
      image.src=elem.strMealThumb;
      let title = document.createElement("h2");
      title.innerText = elem.strMeal;
      title.setAttribute("id","title");
     
      let des = document.createElement("h3");
        des.innerHTML = `Category: ${elem.strCategory}`
        item.append(image,title,des);
        des.setAttribute("class","des")
        let area = document.createElement("h3");
        area.innerHTML = `${elem.strArea}`
       
        area.setAttribute("class","des")
        
        item.append(image,title,des,area,);
    })
}
}


