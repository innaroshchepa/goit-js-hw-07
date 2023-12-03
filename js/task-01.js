 const categories = document.querySelector("#categories");
 const categoriesLength = categories.children.length;

console.log(`Number of categories: ${categoriesLength}`);

const elements = document.querySelectorAll(".item");
elements.forEach(element => {
    console.log("Category: ", element.firstElementChild.textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
    
});




