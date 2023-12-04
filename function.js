document.getElementById('home').style.display = 'block';
function showSection(category) {
  // This is the code to get all the section
  const sections = document.querySelectorAll('section');

  // Hide all sections by default
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Display the selected section
  const selectedSection = document.getElementById(category);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}
function showCategory(category) {

    var menuList = document.getElementById('menuList');
    // Clear existing content
    menuList.innerHTML = '';

    // Number of items per row
    var itemsPerRow = 5;

    // Define menu item data
    var menuItemsMap = {
      'sandwich': [
        { name: 'Monte Cristo', image: 'Monte Cristo.jpg', price: '₱180.00' },
        { name: 'Phili cheese steak', image: 'Phili cheese steak.jpg', price: '₱210.00' },
      ],
      'veggie': [
        { name: 'Kangkong with Tofu', image: 'kangkong with tofu.jpg', price: '₱130.00' },
        { name: 'Mixed vegetable', image: 'Mixed vegetable.jpg', price: '₱180.00' },
      ],
      'salad': [
        { name: 'Caesar', image: 'Caesar.jpg', price: '₱180.00' },
        { name: 'Chef Salad', image: 'Chef.jpg', price: '₱180.00' },
        { name: 'Chicken Caesar', image: 'Chicken caesar.jpg', price: '₱210.00' },
        { name: 'Calamaris', image: 'Calamaris.jpg', price: '₱230.00' },
      ],
      'brunch': [
        { name: 'Ham and cheese omellete', image: 'Ham and cheese omellete.jpg', price: '₱130.00' },
        { name: 'Tuna omellete.jpg', image: 'Tuna omellete.jpg', price: '₱130.00' },
      ],
      'burger/fries': [
        { name: 'Classic Burger', image: 'ClassicBurger.JPG', price: '₱130.00' },
        { name: 'Cheese Burger', image: 'CheeseBurger.JPG', price: '₱140.00' },
        { name: 'Bacon Burger', image: 'BaconBurger.JPG', price: '₱160.00' },
        { name: 'Fish Burger', image: 'FishBurger.JPG', price: '₱150.00' },
        { name: 'CaHawaiian Burger', image: 'HawaiianBurger.JPG', price: '₱180.00' },
      ],
      'curry': [
        { name: 'Chicken Curry with Rice', image: 'chicken.jpg', price: '₱130.00' },
        { name: 'Beef curry with rice', image: 'beef.jpg', price: '₱150.00' },
        { name: 'Fried Pork Chop', image: 'Fried Pork Chop.jpg', price: '₱145.00' },
        { name: 'Vegetable', image: 'vegetable.jfif', price: '₱130.00' },
        { name: 'Seafood', image: 'Seafood.jpeg', price: '₱150.00' },
      ],
      'mexican': [
        { name: 'Tuna Quesadilla', image: 'TunaQuesadilla.JPG', price: '₱170.00' },
        { name: 'Chicken Quesadilla', image: 'ChickenQuesadilla.JPG', price: '₱190.00' },
        { name: 'Beef Quesadilla', image: 'BeefQuesadilla.JPG', price: '₱210.00' },
        { name: 'Chicken Burrito', image: 'ChickenBurrito.JPG', price: '₱190.00' },
        { name: 'Beef Burrito', image: 'BeefBurrito.JPG', price: '₱210.00' },
        { name: 'Chicken Chimichanga', image: 'ChickenChimichanga.JPG', price: '₱210.00' },
      ],
      'FriedRice': [
        { name: 'Chicken Nasi Goreng', image: 'chicken nasi goreng.jpg', price: '₱160.00' },
        { name: 'Beef Fried Rice', image: 'beef fried rice.jpg', price: '₱160.00' },
        { name: 'Beef Goreng', image: 'Beef goreng.jpg', price: '₱170.00' },
        { name: 'Chicken + shrimp', image: 'Chicken + shrimp.jpg', price: '₱160.00' },
        { name: 'Pineapple Crab', image: 'Pineapple Crab.jpg', price: '₱150.00' },
        { name: 'Yang Chow', image: 'yang chow.jpg', price: '₱150.00' },
        { name: 'Shrimp + Squid Fried Rice', image: 'Shrimp + squid fried rice.jpg', price: '₱180.00' },
        { name: 'Ham and Bacon', image: 'Ham and Bacon.jpg', price: '₱130.00' },
      ],
      'Fries': [
        { name: 'Basket Of Fries', image: 'BasketOfFries.JPG', price: '₱90.00' },
        { name: 'Garlic And Basil', image: 'GarlicAndBasil.JPG', price: '₱140.00' },
        { name: 'Cheese With Gravy', image: 'CheeseWithGravy.JPG', price: '₱150.00' },
        { name: 'ChiliAndCheese.JPG', image: 'ChiliAndCheese.JPG', price: '₱180.00' },
      ],
      
      'Pasta': [
        { name: 'Carbonara', image: 'Carbonara1.png', price: '₱130.00' },
        { name: 'Tuna Olio', image: 'Tuna Olio1.png', price: '₱130.00' },
        { name: 'Shrimp Olio', image: 'Shrimp Olio.png', price: '₱150.00' },
        { name: 'Bolognese', image: 'Bolognese1.png', price: '₱140.00' },
        { name: 'Seafood Marinara', image: 'Seafood Marinara1.png', price: '₱180.00' },
        { name: 'Baked Bolognese Penne', image: 'Baked Bolognese Penne1.png', price: '₱190.00' },
        { name: 'Baked Seafood Penne', image: 'Baked Seafood Penne1.png', price: '₱200.00' },
        { name: 'Chicken Pesto', image: 'Chicken Pesto1.png', price: '₱160.00' },
        { name: 'Seafood Pesto', image: 'Seafood Pesto1.png', price: '₱180.00' },
        { name: 'Clam Pasta / White Wine', image: 'Clam Pasta with White Wine1.png', price: '₱150.00' },
        { name: 'Baked Eggplant Pasta', image: 'Baked Eggplant Pasta1.png', price: '₱150.00' },
        { name: 'Seafood in White Wine', image: 'Seafood in White Wine1.png', price: '₱180.00' },
        { name: 'Chicken Alfredo', image: 'Chicken Alfredo1.png', price: '₱160.00' },
        { name: 'Arrabiata Chicken', image: 'Arrabiata Chicken1.png', price: '₱160.00' },
        { name: 'Arrabiata Seafood', image: 'Arrabiata Seafood1.png', price: '₱180.00' },
      ],
      'Meal': [
        { name: 'PorkChop with Gravy', image: 'PorkChopwithGravy.jpg', price: '₱145.00' },
        { name: 'Chicken Leg / Gravy', image: 'Chicken Leg with Gravy.jpg', price: '₱140.00' },
        { name: 'Fried Pork Chop', image: 'Fried Pork Chop.jpg', price: '₱145.00' },
        { name: 'Chicken Teriyaki', image: 'Chicken Teriyaki.jpg', price: '₱130.00' },
        { name: 'Chicken Wings / Chilli Sauce', image: 'Chicken wings with chilli sauce.jpg', price: '₱130.00' },
        { name: 'Cream Dory Fish / Honey Mustard', image: 'Cream dory fish with honey mustard.jpg', price: '₱130.00' },
        { name: 'Salis bury Steak', image: 'Salis bury Steak.jpg', price: '₱160.00' },
        { name: 'Fried Pork Chop', image: 'Fried Bangus.jpg', price: '₱140.00' },
        { name: 'Chili Con Carne', image: 'Chili Con Carne.jpg', price: '₱160.00' },
        { name: 'Beef Salpicao', image: 'Beef Salpicao.jpg', price: '₱190.00' },
      ],
      'Risotto': [
        { name: 'Chicken Risotto', image: 'ChickenRisotto.png', price: '₱160.00' },
        { name: 'Seafood Risotto', image: 'SeafoodRisotto.png', price: '₱180.00' },
        { name: 'Vegetable Risotto', image: 'VegetableRisotto.png', price: '₱180.00' },
      ],
      'Snack': [
        { name: 'Fish and Chips / Lemon', image: 'Fish and Chips with Lemon1.png', price: '₱160.00' },
        { name: 'Calamari / Anchovy Sauce', image: 'Calamari with Anchovy Sauce1.png', price: '₱180.00' },
        { name: 'Onion Ring / Honey Mustard', image: 'Onion Ring with Honey Mustard1.png', price: '₱140.00' },
        { name: 'Chicken and Chips', image: 'Chicken and Chips1.png', price: '₱190.00' },
        { name: 'Classic Nachos', image: 'Classic Nachos1.png', price: '₱140.00' },
        { name: 'Chicken Strips /Honey Mustard', image: 'Chicken Strips with Honey Mustard1.png', price: '₱160.00' },
        { name: 'Chicken Wings', image: 'Chicken Wings1.png', price: '₱190.00' },
        { name: 'Chili Cheese Nachos', image: 'Chili Cheese Nachos1.png', price: '₱150.00' },
      ],
    };

    // create html content for the selected category
    menuItemsMap[category].forEach(function(item, index) {
      var listItem = document.createElement('div');
      listItem.className = 'list';
      listItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h1>${item.name}<br>${item.price}</h1> 
      `;  
      menuList.appendChild(listItem);

      // Add a line break after each row
      if ((index + 1) % itemsPerRow === 0) {
        menuList.appendChild(document.createElement('br'));
      }
    });
  }

  // Call the function to add menu items for the initial category when the page loads
  showCategory('sandwich');