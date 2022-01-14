searchRecipe();
async function searchRecipe(){
   
   
//     if(recipe.length<1)
//     {
//         document.querySelector("#recipe_result").innerHTML=""; 
//         document.querySelector("#recipe_result").style.display="none"; 
//         return false;
//    }
   
    try{
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
        let data = await res.json();
       
       console.log(data.meals);
       append_data(data.meals)
      
    }
    catch(err){
       console.log(err)
    }
}
function append_data(data)
{

data.map(function(elem){
    let im = document.querySelector("#image");
    let desc = document.querySelector("#desc");
    let imag = document.createElement("img");
    imag.setAttribute("id","meal_image")
    imag.src=elem.strMealThumb;
    // console.log(elem.strMealThumb)
    im.append(imag)
    // let des = document.createElement("div");
    let head = document.createElement("h1");
    head.textContent=elem.strMeal;
    desc.append(head);
    head.setAttribute("id","title");
    // let des = document.getElementById("desc");
    let para = document.createElement("p");
    para.innerText=elem.strInstructions;
    desc.append(para);
    para.setAttribute("id","para")
})
 
}