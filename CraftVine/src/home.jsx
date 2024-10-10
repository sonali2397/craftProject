import React, { useState } from 'react';
import './home.css';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    // State to track items in the cart and cart visibility
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener("click", () => {
            nav.classList.add('active');
        })
    }
    if (close) {
        close.addEventListener("click", () => {
            nav.classList.remove('active');
        })
    }

    // Example product data
    const products = [
        {
            id: 1,
            image: 'src/assets/jewe.jpg',
            category: 'Jewellery',
            name: 'Zirconia Stacking Rings Prom Wedding Bridal Finger Jewelry Gift for Her',
            price: 'Rs. 55,000',
        },
        {
            id: 2,
            image: 'src/assets/jewe3.webp',
            category: 'Jewellery',
            name: 'Moissanite 925 Sterling Silver Necklace Women Girls Love Valentine Gift',
            price: 'Rs. 35,000',
        },
        {
            id: 3,
            image: 'src/assets/jewe7.jpg',
            category: 'Jewellery',
            name: 'Butterfly Pendant Necklace with Jewelry for Women Teen Girls',
            price: 'Rs. 1899',
        },
        {
            id: 4,
            image: 'src/assets/jewe4.webp',
            category: 'Jewellery',
            name: 'Zirconia Stacking Rings Prom Wedding Bridal Finger Jewelry Gift for Her',
            price: 'Rs. 5,000',
        },
        {
            id: 5,
            image: 'src/assets/jewe8.jpg',
            category: 'Jewellery',
            name: 'Onyx necklace for women - Gold filled necklace - statement necklace - Handmade - Sterling silver - Rose gold (19.6, 14K Gold filled)',
            price: 'Rs. 899',
        },
        {
            id: 6,
            image: 'src/assets/jewe9.webp',
            category: 'Jewellery',
            name: 'Tagua Necklace Yellow Hoops Handmade Fair Trade, andmade - Sterling silver - andmade - Sterling silver - Lightweight by Florama Natural Jewelry',
            price: 'Rs. 999',
        },
        {
            id: 7,
            image: 'src/assets/jewe10.jpg',
            category: 'Jewellery',
            name: 'COOLSTEELANDBEYOND Champagne Gold Oval Beads Statement Necklace.',
            price: 'Rs. 13999',
        },
        {
            id: 8,
            image: 'src/assets/jewe11.jpg',
            category: 'Jewellery',
            name: 'Zirconia Stacking Rings Prom Wedding Bridal Finger Jewelry Gift for Her',
            price: 'Rs. 8,999',
        },
        {
            id: 9,
            image: 'src/assets/decor1.jpg',
            category: 'Home Decor',
            name: 'Tiffany Style Stained Glass Ceiling Pendant Light Fixture Stained Glass Ceiling Personalized Name Sign Wooden Baby',
            price: 'Rs. 4,999',
        },
        {
            id: 10,
            image: 'src/assets/home decor2.jpg',
            category: 'Home Decor',
            name: 'Personalized Wooden Name Sign for Nursery Wall Decor, Customized Name Sign Baby Room Decor',
            price: 'Rs. 1,999',
        },
        {
            id: 11,
            image: 'src/assets/home decor3.webp',
            category: 'Home Decor',
            name: 'Bath Bomb Gift Set, Relaxing Gifts for Women & Men, Spa Gifts & Birthday Gifts for Women and Mom',
            price: 'Rs. 2,999',
        },
        {
            id: 12,
            image: 'src/assets/clothing1.webp',
            category: 'Clothing',
            name: 'Ajinomoto Peruano Peruvian Seasonings Pets Special Editions T-shirts',
            price: 'Rs. 499',
        },
        {
            id: 13,
            image: 'src/assets/kitchen 1.jpg',
            category: 'Home Decor',
            name: 'Caraway Nonstick Ceramic Cookware Set (12 Piece) Pots, Pans, Lids and Kitchen Storage - Non Toxic',
            price: 'Rs. 899',
        },
        {
            id: 14,
            image: 'src/assets/kitchen4.webp',
            category: 'Kitchen & Dining',
            name: 'Mothers Day Gift For Mom, Custom Kitchen Apron for Women, Yod A Best Mom Gifts',
            price: 'Rs. 799',
        },
        {
            id: 16,
            image: 'src/assets/kitchen5.webp',
            category: 'Kitchen & Dining',
            name: 'AmorArc Ceramic Dinnerware Sets,Handmade Reactive Glaze Plates and Bowls Sets,Highly Chip and Crack',
            price: 'Rs. 1,499',
        },
        {
            id: 17,
            image: 'src/assets/kitchen6.webp',
            category: 'Kitchen & Dining',
            name: 'Canisters Sets for Kitchen Counter Storage and Organization with Wooden Bamboo Lids, Food Pantry Containers',
            price: 'Rs. 999',
        },
        {
            id: 18,
            image: 'src/assets/kitchen7.webp',
            category: 'Kitchen & Dining',
            name: 'Handmade Charcuterie and Cutting Board - Decorative, Board - Decorative Olive Wood Board for Serving',
            price: 'Rs. 699',
        },
        {
            id: 15,
            image: 'src/assets/kitchen8.webp',
            category: 'Kitchen & Dining',
            name: 'Personalized silverware set, Newly, Bridal shower anniversary birthday present for her him',
            price: 'Rs. 14,999',
        },
        {
            id: 19,
            image: 'src/assets/kitchen9.webp',
            category: 'Kitchen & Dining',
            name: 'Sympathy for Loss of Loved One Dad Mom Husband Sister Friend Bereavement Gifts Condolences',
            price: 'Rs. 14,999',
        },
        {
            id: 20,
            image: 'src/assets/kitchen3.webp',
            category: 'Kitchen & Dining',
            name: 'Personalized silverware set, Newly, Bridal shower anniversary birthday present for her him',
            price: 'Rs. 14,999',
        },
        {
            id: 21,
            image: 'src/assets/kitchen and.jpg',
            category: 'Kitchen & Dining',
            name: 'C & M Personal Gifts Stemless Wine Glass (1 Piece) 17 Ounces, Gag Gifts for Women, Funny Christmas gift',
            price: 'Rs. 499',
        },
        {
            id: 22,
            image: 'src/assets/personalized.jpg',
            category: 'Stationery & Party Supplies',
            name: 'Personalized Hockey Stationery',
            price: 'Rs. 599',
        },
        {
            id: 23,
            image: 'src/assets/toys.jpg',
            category: 'Toys',
            name: 'Baby & Toddler Toys',
            price: 'Rs. 699',
        },
        {
            id: 24,
            image: 'src/assets/clothing.jpg',
            category: 'Clothing',
            name: 'Men\'s T-shirt',
            price: 'Rs. 699',
        },
        {
            id: 25,
            image: 'src/assets/home decor9.webp',
            category: 'Home Decor',
            name: 'Mason Jar Night Light for Friend, Birthday Day Gifts for Women, Home Decoration Lights, Night Light Gift for Birthday',
            price: 'Rs. 749',
        },
        {
            id: 26,
            image: 'src/assets/home decor8.webp',
            category: 'Home Decor',
            name: 'Night Light for Kids Room: Baby Night Light for Nursery Bedroom, Cute Bunny Personalized Acrylic Night Light',
            price: 'Rs. 999',
        },
        {
            id: 27,
            image: 'src/assets/home decor 7.webp',
            category: 'Home Decor',
            name: 'Modern LED Chandeliers Flush Mount Linear Art Deco Chandelier Fixture Sputnik Pendant Light for Dining',
            price: 'Rs. 1799',
        },
        {
            id: 28,
            image: 'src/assets/home decor9.webp',
            category: 'Home Decor',
            name: 'Beeswax & Propolis Magic Salve | Boils Treatment | Chalazion | Hidradenitis Suppurativa Abscesses',
            price: 'Rs. 999',
        },
        {
            id: 29,
            image: 'src/assets/beauty 3.jpg',
            category: 'Beauty & Grooming',
            name: 'Personalized baby night light | Gift for Baby | baby night light | girl boy bedroom bedside light gift for newborn',
            price: 'Rs. 699',
        },
        {
            id: 30,
            image: 'src/assets/beauty 8.jpg',
            category: 'Beauty & Grooming',
            name: 'Organic Lip Balm Peppermint - 4 Pack Organic Gifts for Women, All Natural Lip Balm Birthday Gifts for Her & Him,',
            price: 'Rs. 699',
        },
        {
            id: 31,
            image: 'src/assets/home decor6.webp',
            category: 'Beauty & Grooming',
            name: 'Personalized baby night light | Gift for Baby | baby night light | girl boy bedroom bedside light gift for newborn',
            price: 'Rs. 399',
        },
        {
            id: 32,
            image: 'src/assets/beauty 6.jpg',
            category: 'Beauty & Grooming',
            name: 'Exfoliating Knitted Back Scrubber Handles Two Sides Body Invigorating Blood Circulation Men Women',
            price: 'Rs. 499',
        },
        {
            id: 33,
            image: 'src/assets/beauty 7.jpg',
            category: 'Beauty & Grooming',
            name: 'Personalized baby night light | Gift for Baby | baby night light | girl boy bedroom bedside light gift for newborn',
            price: 'Rs. 699',
        },
        {
            id: 34,
            image: 'src/assets/beauty 5.jpg',
            category: 'Beauty & Grooming',
            name: 'Rosense Rose Water Discovery Set- Rose Water Discovery Set- Rose Water Selection 1.7oz | 4 Pack',
            price: 'Rs. 699',
        },
        {
            id: 35,
            image: 'src/assets/beauty 4.jpg',
            category: 'Beauty & Grooming',
            name: '6 Natural Soaps for Women & Men- Handmade Moisturizing Artisan Soap Gift Set with Essential Oils',
            price: 'Rs. 699',
        },
        {
            id: 36,
            image: 'src/assets/beauty 2.jpg',
            category: 'Beauty & Grooming',
            name: 'Personalized baby night light | Gift for Baby | baby night light | girl boy bedroom bedside light gift for newborn',
            price: 'Rs. 1199',
        },
        {
            id: 37,
            image: 'src/assets/handbags1.jpg',
            category: 'Handbags & Totes',
            name: 'Wise Owl Accessories Small Crossbody Bags for Women Real Leather Purse Handbags the Shoulder Pocketbook',
            price: 'Rs. 399',
        },
        {
            id: 38,
            image: 'src/assets/handbags2.jpg',
            category: 'Handbags & Totes',
            name: 'Worlds Strongest Tote Bag, Handmade with Organic Cotton Canvas and Beeswax, Long Straps, Side Handles, Stiff Waxed',
            price: 'Rs. 1199',
        },
        {
            id: 39,
            image: 'src/assets/handbags3.jpg',
            category: 'Handbags & Totes',
            name: 'Tooled leather iPhone 13 14 15 Pro Max purse case with shoulder strap, embossing leather',
            price: 'Rs. 1199',
        },
        {
            id: 40,
            image: 'src/assets/beauty 2.jpg',
            category: 'Handbags & Totes',
            name: 'Personalized baby night light | Gift for Baby | baby night light | girl boy bedroom bedside light gift for newborn',
            price: 'Rs. 1199',
        },
        {
            id: 41,
            image: 'src/assets/beauty 2.jpg',
            category: 'Handbags & Totes',
            name: 'Personalized baby night light | Gift for Baby | baby night light | girl boy bedroom bedside light gift for newborn',
            price: 'Rs. 1199',
        },
        {
            id: 42,
            image: 'src/assets/handbags7.jpg',
            category: 'Handbags & Totes',
            name: 'Personalized baby night light | Gift for Baby | baby night light',
            price: 'Rs. 399',
        },
        {
            id: 43,
            image: 'src/assets/handbags6.jpg',
            category: 'Handbags & Totes',
            name: 'PS PETITE SIMONE Woven Tote Bag for Women Large Woven Purse Woven Leather Handbags Braided Purse Weave Purse',
            price: 'Rs. 749',
        },
        {
            id: 44,
            image: 'src/assets/handbags5.jpg',
            category: 'Handbags & Totes',
            name: 'Create your own Dog Mom Gift Box. Great unique gift for Mothers Day, Birthday, Easter, Christmas, or Just Because',
            price: 'Rs. 1199',
        },
    ];
    // Function to add an item to the cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    // Function to toggle cart visibility
    const toggleCartVisibility = (event) => {
        event.preventDefault();
        setCartVisible(!isCartVisible);
    };

    // Function to toggle dropdown visibility
    const toggleDropdownVisibility = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    // Function to handle category selection
    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    // Filter products based on selected category
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
    return (
        <>
            {/* Header section */}
            <section id="header">
                <a href=""><img className='cv-logo' src={'src/assets/craftVine-logo-removebg-preview (1).png'} alt="Logo" /></a>
                <div>
                    <ul id="navbar">
                    <a href="#" id="close">
        <FontAwesomeIcon icon={faTimes} className="far fa-tin" />
    </a>
                        <li><a href="#header" className='active'>Home</a></li>
                        <li><a href="#product">Featured Products</a></li>
                        
                        <li><a href="/Seller">Seller</a></li>
                        <li>
                            <a href="#product" onClick={toggleDropdownVisibility} className={`dropdown-button ${isDropdownVisible ? 'open' : ''}`}>
                                Shop By Category
                            </a>
                            {/* Dropdown menu */}
                            {isDropdownVisible && (
                                <div className="dropdown-menu">
                                    <a href="#product" onClick={() => handleCategorySelection('Jewellery')}>Jewellery</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Home Decor')}>Home Decor</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Kitchen & Dining')}>Kitchen & Dining</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Beauty & Grooming')}>Beauty & Grooming</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Handbags & Totes')}>Handbags & Totes</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Stationery & Party Supplies')}>Stationery & Party Supplies</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Clothing')}>Clothing</a>
                                    <a href="#product" onClick={() => handleCategorySelection('Toys')}>Toys</a>
                                </div>
                            )}
                        </li>
                        <li><a href="#editorpicks">Editor's Choice</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li>
                            {/* Cart icon */}
                            <a href="#product" onClick={(event) => toggleCartVisibility(event)}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {cart.length > 0 && (
                                    <span className="cart-count">{cart.length}</span>
                                )}
                            </a>

                        </li>
                        {isAuthenticated || <button className='border-white border-2 rounded-full text-neutral-950 hover:text-black hover:scale-110 hover:border-white hover:bg-cyan-300' onClick={() => loginWithRedirect()}>Log In</button>}
                        <div className="profile-container flex flex-col justify-center items-center">
                            {isAuthenticated && (
                                <div>
                                    <img className='w-12  mb-2 sm:mb-0 sm:mr-2 flex items-center justify-center text-center rounded-full m-auto' src={user.picture}/>
                                    {/* <h2 className='text-neutral-950 ml-0'>{user.name}</h2> */}
                                </div>

                                )
                            }   
                            
                        </div>
                        {
                            isAuthenticated && <button className='border-black border-2 rounded-full text-neutral-950 hover:bg-black hover:text-white hover:scale-110' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        }
                    </ul>
                </div>
                <div id="mobile">
                
                            {/* Cart icon */}
                            <a href="#product" onClick={(event) => toggleCartVisibility(event)}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {cart.length > 0 && (
                                    <span className="cart-count">{cart.length}</span>
                                )}
                            </a>
                    <FontAwesomeIcon icon={faBars} className="fas fa-outdent" id="bar" />

                </div>

            </section>

            {/* Discount section */}
            <section id="discount">
                <h4>Trade-in Offer</h4>
                <h2>Super Value Deals</h2>
                <h1>On all Products</h1>
                <p>Save more with coupons and up to 70 off!</p>
                <a href="#product"><button>Shop Now</button></a>
            </section>

            {/* Featured Products section */}
            <section id="product">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className='pro-container'>
                    {filteredProducts.map((product) => (
                        <div className='pro' key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className='des'>
                                <span>{product.category}</span>
                                <h5>{product.name}</h5>
                                <div className='star'>
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} />
                                    ))}
                                </div>
                                <h4>{product.price}</h4>
                            </div>
                            <button onClick={() => addToCart(product)}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cart Display */}
            {isCartVisible && (
                <div className="cart-container">
                    <h3>Your Cart</h3>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    <span>{item.name} - {item.price}</span>
                                    <button onClick={() => removeFromCart(index)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p>
                        Total Price: Rs. {cart.reduce((acc, item) => acc + parseFloat(item.price.replace('Rs. ', '')), 0).toFixed(2)}
                    </p>
                    <a href="#checkout">
                        <button onClick={toggleCartVisibility}>Checkout</button></a>
                </div>
            )}

            {/* Shop By Category section */}
            <section id="catogoriesitems">
                <h3>Shop By Category</h3>
                <div className="catogories-items">
                    <div className="boxs"><a href="/jewellery" onClick={() => handleCategorySelection('Jewellery')}>Jewellery</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Home Decor')}>Home Decor</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Kitchen & Dining')}>Kitchen & Dining</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Beauty & Grooming')}>Beauty & Grooming</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Handbags & Totes')}>Handbags & Totes</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Stationery & Party Supplies')}>Stationery & Party Supplies</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Clothing')}>Clothing & Accessories</a></div>
                    <div className="boxs"><a href="#" onClick={() => handleCategorySelection('Toys & Games')}>Toys & Games</a></div>
                </div>
            </section>

            {/* Editor's Choice section */}
            <section id="editorpicks">
                <h3>Editor's Choice</h3>
                <div className='editorspickitems'>
                    <div className='arrival'><a href="#">Arrival</a></div>
                    <div className='madeinusa'><a href="#">Made in USA</a></div>
                    <div className='bestseller'><a href="#">Best Seller</a></div>
                </div>
            </section>

            {/* Sign Up section */}
            <section id="signup">
                <div className='signup-text'>
                    <h4>Sign Up for CraftsVine</h4>
                    <p>Get email updates about our latest shop and <span>special offers</span>.</p>
                </div>
                <div className='form'>
                    <input type="text" placeholder='Your email address' />
                    <button className='normal'>Sign-Up</button>
                </div>
            </section>

            {/* Footer section */}
            <footer id="footer">
                <div className='col'>
                    <img src='src/assets/craftVine-logo-removebg-preview (1).png' alt='CraftsVine Logo' className='logo' />

                    <p><strong>Address:</strong> 45 Sector Street, Chandigarh, Haryana 160014, India</p>
                    <p><strong>Phone:</strong> 9056110958, 7814742159</p>
                    <p><strong>Hours:</strong> From 9:00 a.m. to 6:30 p.m., Monday to Saturday</p>
                    <div className='follow-us'>
                        <div className='social-icons'>
                            {/* Facebook icon with link */}
                            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            {/* Twitter icon with link */}
                            <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            {/* Instagram icon with link */}
                            <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            {/* YouTube icon with link */}
                            <a href="https://www.youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className='col'>
                    <h5>About</h5>
                    <a href="/Seller">About Us</a>
                    <a href="/delivery_info">Delivery Information</a>
                    <a href="/privacy_policy">Privacy Policy</a>
                    <a href="/terms_conditions">Terms & Conditions</a>
                    <a href="/Contact">Contact</a>
                </div>

                <div className='col'>
                    <h6>My Account</h6>
                    <a href="/sign_in">Sign In</a>
                    <a href="/Seller">Seller Account</a>
                    <a href="/view_cart">View Cart</a>
                    <a href="/track_order">Track My Order</a>
                    <a href="/help">Help</a>
                </div>

                <div className='col'>
                    <h2>Install App</h2>
                    <p>From App Store or Google Play</p>
                    <div className='app-links'>
                        <img src='src/assets/png-clipart-app-store-google-play-apple-apple-text-logo (1).png' alt='App Store' />
                        <img src='src/assets/png-clipart-app-store-google-play-apple-apple-text-logo (1).png' alt='Google Play' />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
