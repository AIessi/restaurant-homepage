function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            'Coco\'s Special',
            'Our signature dish! A blend of the finest ingredients, served with a side of fries.'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Coco\'s Burger',
            'A juicy beef patty, topped with lettuce, tomato, and our special sauce.'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Coco\'s Salad',
            'A mix of fresh greens, cherry tomatoes, and cucumbers, served with our house dressing.'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Coco\'s Pasta',
            'Spaghetti served with our special tomato sauce, topped with parmesan cheese.'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Coco\'s Pizza',
            'A thin-crust pizza topped with tomato sauce, mozzarella cheese, and your choice of toppings.'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Coco\'s Dessert',
            'A sweet treat to end your meal! Choose from our selection of cakes and pastries.'
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }

  function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
  }

  export default  loadMenu;