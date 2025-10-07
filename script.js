const listArray = ["The Pirate", "Carry On", "Rocketman", "Elvis", "The Irishman", "Unbroken", "Red Eye", "The Immortal Man", "Oppenhimer", "Guys and Dolls"]

const arrayContainer = document.getElementById("output");

listArray.forEach (item => {
    const listItem = document.createElementById("li");
    listItem.textContent = item;
    listContainer.appendChild(listItem); 
});