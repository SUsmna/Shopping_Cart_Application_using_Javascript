document.addEventListener('DOMContentLoaded', () => {
    // Example products
    const products = [
        { id: 1, name: 'Red Shirt', category: 'men', color: 'Red', size: 'M', image: 'https://images.meesho.com/images/products/312903015/bmtuo_512.jpg', price: 500 },
        { id: 2, name: 'Blue Shirt', category: 'men', color: 'Blue', size: 'L', image: 'https://n1.sdlcdn.com/imgs/a/l/v/Edenelliot-Royal-Blue-Color-Jute-SDL043145268-1-3ea47.jpg', price: 600 },
        { id: 3, name: 'Gold Shirt', category: 'men', color: 'Gold', size: 'S', image: 'https://m.media-amazon.com/images/I/61VnzUp2MxL._AC_UY1100_.jpg', price: 750 },
        { id: 4, name: 'Black Shirt', category: 'men', color: 'Black', size: 'XL', image: 'https://imagescdn.thecollective.in/img/app/product/9/953848-12327413.JPG', price: 800 },
        { id: 5, name: 'Red Shirt', category: 'men', color: 'Red', size: 'M', image: 'https://rukminim2.flixcart.com/image/1100/1300/kz4gh3k0/shirt/9/x/a/m-fbp-capture-m-fabplus-original-imagb7cmhgpbwbxr.jpeg?q=90', price: 540 },
        { id: 6, name: 'Blue Shirt', category: 'men', color: 'Blue', size: 'L', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/1/h/8/m-01-shirt-plain-blue-only-vinay-original-imagxhv3rmrztgcz.jpeg?q=90&crop=false', price: 900 },
        

        { id: 7, name: 'Red chudidar', category: 'women', color: 'Red', size: 'M', image: 'https://www.jiomart.com/images/product/original/rvbetwtueu/salwar-studio-women-s-red-white-cotton-printed-unstitch-dress-material-with-dupatta-product-images-rvbetwtueu-0-202211072245.jpg?im=Resize=(1000,1000)', price: 500 },
        { id: 8, name: 'Blue chudidar', category: 'women', color: 'Blue', size: 'L', image: 'https://m.media-amazon.com/images/I/61TR70obzIL._AC_UY1100_.jpg', price: 600 },
        { id: 9, name: 'Black chudidar', category: 'women', color: 'Black', size: 'S', image: 'https://assets.ajio.com/medias/sys_master/root/20230602/OZ2T/6479225042f9e729d70a5087/-473Wx593H-461128288-black-MODEL.jpg', price: 700 },
        { id: 10, name: 'Red chudidar', category: 'women', color: 'Red', size: 'M', image: 'https://m.media-amazon.com/images/I/71M5nW6Q58L._AC_UY1100_.jpg', price: 500 },
        { id: 11, name: 'Blue chudidar', category: 'women', color: 'Blue', size: 'L', image: 'https://4.imimg.com/data4/SF/SE/MY-27982302/y28.jpg', price: 600 },
        { id: 12, name: 'Gold chudidar', category: 'women', color: 'Gold', size: 'XL', image: 'https://m.media-amazon.com/images/I/71XB1gY8jTL._AC_UY1100_.jpg', price: 700 },

        { id: 13, name: 'Gold', category: 'jewellery', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/0/b/f/cultured-na-1-plkl100ssjkog-tonolika-jewellery-original-imahfy6xrnxsv9ry.jpeg?q=90&crop=false', price: 51000 },
        { id: 14, name: 'Gold', category: 'jewellery', image: 'https://m.media-amazon.com/images/I/81aUa3LrDzL._AC_UY1100_.jpg', price: 60000 },
        { id: 15, name: 'Gold', category: 'jewellery', image: 'https://images-static.nykaa.com/media/catalog/product/4/7/4731d6eFIDAX00000067_02S_3.jpg?tr=w-500', price: 700 },
        { id: 16, name: 'Gold', category: 'jewellery', image: 'https://www.candere.com/media/jewellery/images/C001952__1.jpeg', price: 55000 },
        { id: 17, name: 'Gold', category: 'jewellery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2QMeK2pydyUIrnEeF1BqeXQBEn1ndFmBrQ1lA86b8AyjEu_9VZT4pJFep_US_gwQ7Sw&usqp=CAU', price: 40000 },
        { id: 18, name: 'Gold', category: 'jewellery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4DLKpUda5xql6ejodClYvbUTb7c-66x4pM64nlxuT0mow6K2kPTMU1tGD5g__DQhGaU&usqp=CAU', price: 70000 },

        { id: 19, name: 'Headphones', category: 'electronics', image: 'https://m.media-amazon.com/images/I/51Ivj-FTf6S.jpg', price: 800 },
        { id: 20, name: 'Headphones', category: 'electronics', image: 'https://m.media-amazon.com/images/I/61wx1LBLYKL._AC_UF1000,1000_QL80_.jpg', price: 1100 },
        { id: 21, name: 'Headphones', category: 'electronics', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/328876633/DK/AQ/UC/192808299/mobile-headphones-with-mic.jpg', price: 1500 },
        // Add more products as needed
    ];

    // Load cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display products
    const productsContainer = document.getElementById('productsContainer');
    const displayProducts = (products) => {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    };
                //  <p>Color: ${product.color}</p>
                // <p>Size: ${product.size}</p>
    displayProducts(products);

    // Display cart items
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountContainer = document.getElementById('totalAmount');
  
    const displayCartItems = () => {
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;
  
        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalAmount += item.price;
        });
  
        totalAmountContainer.textContent = `Total Amount: ₹${totalAmount}`;
    };

    displayCartItems();


    // Add to cart
    window.addToCart = (id) => {
        const product = products.find(p => p.id === id);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        displayCartItems();

        const addCartToHTML = () => {
            listCartHTML.innerHTML = '';
            let totalQuantity = 0;

            if(cart.length > 0){

                cart.forEach(item => {
                    totalQuantity = totalQuantity +  item.quantity;
                    let newItem = document.createElement('div');
                    newItem.classList.add('item');
                    newItem.dataset.id = item.product_id;
        
                    let positionProduct = products.findIndex((value) => value.id == item.product_id);
                    let info = products[positionProduct];
                    listCartHTML.appendChild(newItem);
                    newItem.innerHTML = `
                    <div class="image">
                    <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice">$${info.price * item.quantity}</div>
                    <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                    </div>
                    `;
                })
            }
            iconCartSpan.innerText = totalQuantity; 
        }
    };


    // Remove from cart
    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    };


    document.getElementById('checkoutButton').addEventListener('click', () => {
        var options = {
          key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
          amount: 1000 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "MyShop Checkout",
          description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          theme: {
            color: "#000",
          },
          image:
            "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
        };
      
        var rzpy1 = new Razorpay(options);
        rzpy1.open();
        // clear mycart - localStorage
        e.preventDefault();
      });


    // Search functionality
    document.getElementById('searchBox').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    // Filter functionality
    const colorFilter = document.getElementById('colorFilter');
    const sizeFilter = document.getElementById('sizeFilter');

    const filterProducts = () => {
        let filteredProducts = products;
        if (colorFilter.value) {
            filteredProducts = filteredProducts.filter(product => product.color === colorFilter.value);
        }
        if (sizeFilter.value) {
            filteredProducts = filteredProducts.filter(product => product.size === sizeFilter.value);
        }
        displayProducts(filteredProducts);
    };

    colorFilter.addEventListener('change', filterProducts);
    sizeFilter.addEventListener('change', filterProducts);

    window.filterByCategory = (category) => {
        let filteredProducts = products;
        if (category !== 'all') {
            filteredProducts = products.filter(product => product.category === category);
        }
        displayProducts(filteredProducts);
    };
});













