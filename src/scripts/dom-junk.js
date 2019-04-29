const junkDom = (obj) => {
    return `<div>
                ${obj.name}
                ${obj.categoryId}
            </div>`;
};

const listCategory = () => {
  let categoryName = document.querySelector("#junk_item_category")
  categoryName.innerHTML = ""
  API.getCategories().then(categories => {
    categories.forEach(category => {
      console.log(category)
      let categoryHTML = `<option value="${category.id}">${category.name}</option>`
      categoryName.innerHTML += categoryHTML
    })
  })
  console.log(categoryName)
};
listCategory()


function buildJunkDom(dataArray) {
    mainContainer.innerHTML = "";
    dataArray.forEach((obj) => {
        mainContainer.innerHTML += junkDom(obj);
    });
};

const buildJunkDetailDom = (data) => {
    mainContainer.innerHTML = "";
    data.forEach(element => {
        mainContainer.innerHTML += junkDetailDom(element);
    });
};