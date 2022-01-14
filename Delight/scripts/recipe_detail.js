let el = JSON.parse(localStorage.getItem("recipe_detail"));
console.log(el);
let container = document.getElementById("image");
let im = document.createElement("img");
im.src=el.strMealThumb;
im.setAttribute("id","meal_im")
container.append(im)
let desc = document.getElementById("desc");
let head = document.createElement("h1");
head.textContent=el.strMeal;
desc.append(head);
head.setAttribute("id","title");
let des = document.getElementById("desc");
let para = document.createElement("p");
para.innerText=el.strInstructions;
des.append(para);
para.setAttribute("id","para")
