fetch("./users.json")
.then(response => {
   return response.json();
})
.then(data => {

   data.Users.forEach( user => {

      let lastName = user.lname.charAt(0).toUpperCase() + user.lname.slice(1);
      let firstName = user.fname.charAt(0).toUpperCase() + user.fname.slice(1);
   
      let node = document.createElement("LI");
      node.classList.add("users-list-item");
      let textnode = document.createTextNode(lastName + ", " + firstName); 
      node.appendChild(textnode);
      document.getElementById("users-list").appendChild(node);

   })

});