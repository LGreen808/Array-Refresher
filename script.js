const listArray = ["The Pirate", "Carry On", "Rocket Man", "Elvis", "The Irishman", "Unbroken", "Red Eye", "The Immortal Man", "Oppenheimer", "Guys and Dolls"]

const listContainer = document.getElementById("output");


forEach (item => {
   const listItem = document.createElement("li");
   listItem.textContent = item;
   listContainer.appendChild(listItem)
})