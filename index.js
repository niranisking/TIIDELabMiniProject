// 1. API Url

const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch Users From The API Url
function fetchUsers() {
  // 2.1 Make Use Of The Browser Fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   2.2 Passing THe USer Data To The renderUsers Function
      renderUSers(data);
    });
}

// 3. Render The Users In The DOM

function renderUSers(usersData) {
  
  const ul = document.getElementById("user-list-container");
  

  // 3.1 Render An li Tag For Each Of The Users
  usersData.forEach((user, index) => {
    
    const li = document.createElement("li");
    li.innerHTML = `   
    <span>${index + 1}.</span>
    <span>${user.name}</span>
    <span>-</span>
     <span class="username">${user.username}</span>
        
         `;

    // 3.2  Append The Current User li Tag To The ul Tag
    ul.appendChild(li);
  });
}

// 4. Add A Search Function To The DOM
function searchUsersByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-container");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li"); // Array Of All The li Tags

  

  // Loop Through All The USers  And Render The Ones That Match The Search

  for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch) {
      usersList[index].style.display = "block";
    } else {
      usersList[index].style.display = "none";
    }
  }
}

// Calling The Fetch Function
fetchUsers();
