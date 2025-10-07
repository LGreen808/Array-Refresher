const listArray = ['The Pirate', 'Carry On', 'Rocket Man', 'Elvis', 'The Irishman', 'Unbroken', 'Red Eye', 'The Immortal Man', 'Oppenheimer', 'Guys and Dolls']

const listContainer = document.getElementById("output");

listArray.forEach(item => {
    const listItem = document.getElementById("li")
    listItem.textContent = item;
    listContainer.appendChild(listItem);
});



