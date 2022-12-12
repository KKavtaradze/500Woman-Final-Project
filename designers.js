let currentPage = 1;
let totalPages;

// burger bar
let burgerBar = document.getElementById("burgerBarID");
let navigation = document.getElementById("navigationID");
burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("navDrop");
  burgerBar.classList.toggle("barMove");
});

function getDesigners(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (dabrunebuliTextdad) {
      if (dabrunebuliTextdad.status !== 200) {
        throw dabrunebuliTextdad.status;
      }
      return dabrunebuliTextdad.json();
    })
    .then(function (dabrunebulirogorcJs) {
      const fragment = new DocumentFragment();
      dabrunebulirogorcJs.data.forEach((item) => {
        let li = document.createElement("li");

        let fullname = document.createElement("p");
        fullname.classList.add("full-name-designer");
        fullname.innerText = `${item.first_name} ${item.last_name}`;

        let imgDiv = document.createElement("div");
        let image = document.createElement("img");
        image.src = item.avatar;
        imgDiv.classList.add("designer-divs");
        image.classList.add("designer-img");
        image.setAttribute("alt", "designer-image");

        li.appendChild(imgDiv);
        imgDiv.appendChild(image);
        li.appendChild(fullname);
        fragment.appendChild(li);
      });

      document.getElementById("designers-server").innerHTML = " ";
      document.getElementById("designers-server").appendChild(fragment);

      totalPages = dabrunebulirogorcJs.total_pages;
    })
    .catch(function (error) {
      if (error == 404) {
        let errorP404 = document.createElement("p");
        errorP404.textContent = "Page Not Found";
        document.getElementById("error-box").appendChild(errorP404);
      } else {
        let errorP = document.createElement("p");
        p.textContent = "Undefined Error";
        document.getElementById("error-box").appendChild(errorP);
      }
    });
}

document
  .getElementById("h3-show-more-designers")
  .addEventListener("click", getDesigners);

document
  .getElementById("h3-show-more-designers")
  .addEventListener("click", function () {
    document.getElementById("h3-show-more-designers").classList.add("vanish");
    document.getElementById("right").classList.add("appear");
    document.getElementById("left").classList.add("appear");
  });

document.getElementById("left").addEventListener("click", function (left) {
  if (currentPage == 1) {
    return;
  }
  currentPage--;

  getDesigners(currentPage);
});

document.getElementById("right").addEventListener("click", function (right) {
  if (currentPage == totalPages) {
    return;
  }
  currentPage++;
  getDesigners(currentPage);
});
