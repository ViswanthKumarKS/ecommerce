let initialproducts = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  },
];

let initialUsers = [
  {
    id: 1,
    email: "admin123@gmail.com",
    password: "admin123",
  },
  {
    id: 2,
    email: "viswanth.ch23@gmail.com",
    password: "visw2328",
  },
  {
    id: 3,
    email: "chandu34@gmail.com",
    password: "chandu289",
  },
];

window.addEventListener("load", () => {
  //loading users

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(initialUsers));
  }
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(initialproducts));
  }
  if (location.pathname === "/admin/users/Home.html") {
    loadProducts();
  }
  if (location.pathname === "/admin/admin_login.html") {
    loadAdminProducts();
  }
  if (location.pathname === "/admin/users/Cart.html") {
    loadCartProduct();
  }
  if (location.pathname === "/admin/users/orders.html") {
    loadorder();
  }
  if (location.pathname === "/admin/Orders.html") {
    loadadminorder();
  }
});

//genearte rand number

const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

//create user id

const getRandomId = (type = "users") => {
  let jsonArray = JSON.parse(localStorage.getItem(type));
  for (let i = 0; i < 10000; i++) {
    const randomId = getRandomNumber();

    const checkingId = jsonArray.find((obj) => obj.id === randomId);
    if (!checkingId) {
      return randomId;
    }
  }
};

//sign in

const Signin = () => {
  const emailinput = document.getElementById("email");
  const passwordinput = document.getElementById("password");
  const errorRef = document.getElementById("error");

  if (emailinput.value.length === 0) {
    errorRef.innerText = "please enter the email-id";
    return;
  }

  if (!validateEmail(emailinput.value)) {
    errorRef.innerText = "Invalid email address";
    return;
  }

  if (passwordinput.value.length === 0) {
    errorRef.innerText = "please enter the password";
    return;
  }

  if (passwordinput.value.length < 3) {
    errorRef.innerText = "Invalid password";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));

  let loggedInUser = users.find(
    (user) =>
      user.email === emailinput.value && user.password === passwordinput.value
  );

  if (!loggedInUser) {
    errorRef.innerText = "Invalid Credentails";
  } else {
    sessionStorage.setItem("userId", loggedInUser.id);
    if (emailinput.value === "admin123@gmail.com")
      location.replace("/admin/admin_login.html");
    else location.replace("/admin/users/Home.html");
  }
};

const validateEmail = (email) => {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//sign up

const Signup = () => {
  const nameRef = document.getElementById("regname");
  const emailRef = document.getElementById("regemail");
  const passwordRef = document.getElementById("regpassword");
  const confirmpasswordRef = document.getElementById("confirmpassword");
  const errorRef = document.getElementById("error");

  if (nameRef.value.length === 0) {
    errorRef.innerText = "please enter the valid name";
    return;
  }
  if (emailRef.value.length === 0) {
    errorRef.innerText = "please enter the email-id";
    return;
  }
  if (!validateEmail(emailRef.value)) {
    errorRef.innerText = "Invalid email address";
    return;
  }
  if (passwordRef.value.length === 0) {
    errorRef.innerText = "please enter the password";
    return;
  }
  if (confirmpasswordRef.value.length === 0) {
    errorRef.innerText = "confirm password cannt be empty";
    return;
  }
  if (passwordRef.value.length < 4) {
    errorRef.innerText = "password should be gearter tahn 5";
    return;
  }
  if (confirmpasswordRef.value.length > 5) {
    errorRef.innerText = "confirm password be gearther than 5";
    return;
  }

  if (passwordRef.value === confirmpasswordRef.value) {
    let users = JSON.parse(localStorage.getItem("users"));

    users.push({
      id: getRandomId(),
      email: emailRef.value,
      password: passwordRef.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
    location.href = "/admin/login.html";
  } else {
    errorRef.innerText = "password mismatch";
  }
};

// user singout handler
const userSignOutHandler = () => {
  location.replace("/admin/users/Home.html");
};

//load the products in home page

const loadProducts = () => {
  let products = JSON.parse(localStorage.getItem("products"));
  let productContainer = document.getElementById("productcontainer");

  // if (products.length === 0) {
  //   productContainer.innerHTML = "<h2>No products found</h2>";
  //   return;
  // }
  let productbody = "";
  for (let product of products) {
    productbody += ` <div class="col-3 mt-4">
    <div
      class="border rounded p-2 bg-primary-subtle border-primary-subtle w-100 d-flex flex-column"
    >
      <img src="${product.thumbnail}" alt="image" style="min-width:200px;height:200px" />
      <p class="fs-5 my-1 mt-2 text-center">${product.title}</p>
      <p class="fs-4 my-1 mb-2 text-center">₹ ${product.price}</p>
      <button class="btn btn-success" onClick="addToCart(${product.id})">Add to Cart</button>
    </div>
  </div>
    `;
  }
  productContainer.innerHTML = productbody;
};

//load products in admin page

const loadAdminProducts = () => {
  let products = JSON.parse(localStorage.getItem("products"));
  let productRow = document.getElementById("productsTableBody");

  if (products.length === 0) {
    productRow.innerHTML = "<h2>No products found</h2>";
    return;
  }
  let body = "";
  for (let product of products) {
    body += `<tr>
    <td><img src="${
      product.thumbnail
    }" alt="image" class="img-fluid img-thumbnail" style="width:100px;height:"50px;"/></td>
    <td>${product.title}</td>
    <td>${product.description.substring(0, 50)}...</td>
    <td> ₹ ${product.price}</td>
    <td class="d-flex justify-content-center">
      <button class="btn btn-secondary me-4" onClick="editProductHandler(${
        product.id
      })">Edit</button>
      <button class="btn btn-danger" onClick="deleteProduct(${
        product.id
      })">Delete</button>
    </td>
  </tr>`;
  }

  productRow.innerHTML = body;
};

//delete  the products

const deleteProduct = (id) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const newProducts = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(newProducts));
  loadAdminProducts();
};

// edit product - admin page
const editProductHandler = (id) => {
  location.href = `/admin/add_product.html?id=${id}`;
};

// populating products
const populateProduct = (product) => {
  const nameRef = document.getElementById("name");
  const priceRef = document.getElementById("price");
  const descriptionRef = document.getElementById("desc");
  const imageRef = document.getElementById("image");
  const idRef = document.getElementById("id");
  const titleRef = document.getElementById("title");
  const btnRef = document.getElementById("btn");

  idRef.value = product.id;
  nameRef.value = product.title;
  priceRef.value = product.price;
  descriptionRef.value = product.description;
  imageRef.value = product.thumbnail;
  titleRef.innerText = "Edit Product";
  btnRef.innerText = "Update Product";
};

//add to products
const addproduct = () => {
  const nameref = document.getElementById("name");
  const priceref = document.getElementById("price");
  const idref = document.getElementById("id");
  const descref = document.getElementById("desc");
  const imageref = document.getElementById("image");

  let products = JSON.parse(localStorage.getItem("products"));

  let id = idref.value;

  if (id) {
    const product = products.find((product) => product.id === parseInt(id));
    products = products.filter((product) => product.id !== parseInt(id));
    products.push({
      ...product,
      title: nameref.value,
      description: descref.value,
      price: priceref.value,
      thumbnail: imageref.value,
    });
  } else {
    products.push({
      id: getRandomId("products"),
      title: nameref.value,
      description: descref.value,
      price: priceref.value,
      thumbnail: imageref.value,
    });
  }
  localStorage.setItem("products", JSON.stringify(products));
  location.href = "/admin/admin_login.html";
};

// Add to cart
const addToCart = (id) => {
  let addtocart = JSON.parse(localStorage.getItem("products"));
  const product = addtocart.find((product) => product.id === parseInt(id));
  if (!sessionStorage.getItem("userId")) {
    location.href = "/admin/users/Home.html";
  } else {
    let userId = parseInt(sessionStorage.getItem("userId"));
    let cart = [];
    // console.log(cart.length);
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const cartProduct = cart.find(
      (c) => c.userId === parseInt(userId) && c.id === parseInt(id)
    );
    if (cartProduct) {
      cart = cart.map((product) => {
        if (
          product.id === parseInt(id) &&
          product.userId === parseInt(userId)
        ) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      });
    } else {
      cart.push({ userId: parseInt(userId), count: 1, ...product });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// loading cart
const loadCartProduct = () => {
  const cartTableRef = document.getElementById("cartTableBody");
  const totalRef = document.getElementById("Totalamount");
  if (localStorage.getItem("cart")) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (sessionStorage.getItem("userId")) {
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userCart = cart.filter((c) => c.userId === userId);
      let body = "";
      let total = 0;
      for (let cartItem of userCart) {
        total = total + parseInt(cartItem.count) * parseInt(cartItem.price);
        const count = cartItem.count * cartItem.price;
        body += `<tr>
            <td>${cartItem.title}</td>
            <td>${cartItem.count}</td>
            <td>${cartItem.price}</td>
            <td>₹ ${cartItem.price * cartItem.count}</td>
          </tr>`;
      }
      cartTableRef.innerHTML = body;
      totalRef.innerText = `Total - ${total}`;
    } else {
      location.href = "/admin/login.html";
    }
  }
};

//checkout

const checkout = () => {
  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userCart = cart.filter((usercart) => usercart.userId === userId);

      let orders = [];
      if (localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));
      }
      orders.push({
        orderId: getRandomNumber(),
        userId: userId,
        status: "pending",
        products: userCart,
      });

      const otherCart = cart.filter(
        (otherusercart) => otherusercart.userId !== userId
      );
      localStorage.setItem("cart", JSON.stringify(otherCart));
      localStorage.setItem("orders", JSON.stringify(orders));
      location.href = "/admin/users/Home.html";
    }
  }
};

//orders for user page
const loadorder = () => {
  const orderref = document.getElementById("ordertable");
  const orders = JSON.parse(localStorage.getItem("orders"));
  const userId = parseInt(sessionStorage.getItem("userId"));
  const userOrder = orders.filter((users) => users.userId === userId);

  let body = "";
  for (let order of userOrder) {
    let produ = "";
    let totalcount = 0;
    for (let prod of order.products) {
      produ += `<p>${prod.count} * ${prod.title}</p>`;
      totalcount += prod.count * prod.price;
      body += `<tr>
        <td>${order.orderId}</td>
        <td>${prod.title}</td>
        <td>${produ}</td>
        <td> ${order.status}</td>
        </tr>`;
    }
  }

  orderref.innerHTML = body;

  // location.href = "/admin/users/Home.html";
};

//load admin order page

const loadadminorder = () => {
  const orderRef = document.getElementById("admintable");
  const orders = JSON.parse(localStorage.getItem("orders"));
  const users = JSON.parse(localStorage.getItem("users"));

  let body = "";
  for (let order of orders) {
    let product = "";
    let total = 0;
    let userId = "";
    for (let prod of order.products) {
      product += `<p>${prod.count} * ${prod.title}</p>`;
      total += prod.count * prod.price;
      userId += prod.userId;
    }

    const users = JSON.parse(localStorage.getItem("users"));
    const orderedUser = users.find(
      (user) => user.id === parseInt(order.userId)
    );
    body += `<tr>
          <td>${order.orderId}</td>
          <td>${orderedUser.email}</td>
          <td>${product}</td>
          <td>₹ ${total}</td>
          <td>
        <select id="pending-${order.orderId}">
        <option value="Pending">Pending</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </td>
  </tr>`;
  }
  orderRef.innerHTML = body;

  for (let order of orders) {
    const statusRef = document.getElementById(`pending-${order.orderId}`);
    console.log(statusRef);
    //statusRef.value = order.status;
    statusRef.addEventListener("change", () => {
      const lastUpdatedOrders = JSON.parse(localStorage.getItem("orders"));
      const updatedOrders = lastUpdatedOrders.map((o) => {
        if (o.orderId === parseInt(order.orderId)) {
          return { ...o, status: statusRef.value };
        } else return o;
      });
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    });
  }
};
