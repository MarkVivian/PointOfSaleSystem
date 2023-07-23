import dashboard from "@/public/homepage/dashboardImage.jpg"
import login from "@/public/homepage/loginImage.jpg"
import settings from "@/public/homepage/downloadImage.jpg"
import { leftNavbarInterface, orderInterface, productInterface } from "./Interfaces"

export const homePageValues:leftNavbarInterface[] = [
  {
    name : "Login",
    link : "/dashboard/login",
    description: "this will allow you to create a backup of all your orders, products and dashboard details and easy view from the web.. ",
    image : login
  },
  {
    name : "Dashboard",
    link : "/dashboard",
    description: "this will be used to analyse the products, orders and the sales you have made through the month from the web or the applicccation.",
    image : dashboard
  },
  {
    name : "Desktop App",
    link : "/",
    description: "this is the application version that will allow you to use it offline and will update to the online site when connected to the web.",
    image : settings
  }
]

export const productListValues = [
  {
    name : "hammer",
    cost : 110,
    count : 10,
    id : 1
  },
  {
    name : "nails",
    cost : 220,
    count : 20,
    id : 2
  },  {
    name : "files",
    cost : 330,
    count : 30,
    id : 3
  }
]

export const searchProductsName = [
  {productName : "Hammer",productCost : 0, productCount : 10},
  {productName : "mark",productCost : 12, productCount : 0},
  {productName : "d", productCost : 12, productCount : 20},
  {productName : "e", productCost : 12, productCount : 30},
  {productName : "f", productCost : 12, productCount : 40},
  {productName: "a", productCost : 12, productCount : 50},
  {productName: "b", productCost : 12, productCount : 60},
  {productName: "c", productCost : 12, productCount : 70},
]

export const leftNavbarColors = {
  'default': 'linear-gradient(#0ba730 0 0),linear-gradient(#41a221 0 0);',
  'purple': 'linear-gradient(#8e2de2 0 0), linear-gradient(#4a00e0 0 0)',
  'pink': 'linear-gradient(#f953c6 0 0), linear-gradient(#b91d73 0 0)',
  'green': 'linear-gradient(#414d0b 0 0), linear-gradient(#727a17 0 0)',
}

export const ProductsValues:productInterface[] = [
  {
    productCost : 100,
    productCount : 0,
    productImage : "",
    productDescription : "Eu labore esse reprehenderit tempor tempor.",
    productName : "Nisi sint pariatur magna culpa.",
    productId : 1
  },
  {
    productCost : 100,
    productCount : 0,
    productImage : "",
    productDescription : "Eu labore esse reprehenderit tempor tempor.",
    productName : "Nisi sint pariatur magna culpa.",
    productId : 2
  },
  {
    productCost : 100,
    productCount : 0,
    productImage : "",
    productDescription : "Eu labore esse reprehenderit tempor tempor.",
    productName : "Nisi sint pariatur magna culpa.",
    productId : 3
  },
  {
    productCost : 100,
    productCount : 0,
    productImage : "",
    productDescription : "Eu labore esse reprehenderit tempor tempor.",
    productName : "Nisi sint pariatur magna culpa.",
    productId : 4
  },
  {
    productCost : 100,
    productCount : 0,
    productImage : "",
    productDescription : "Eu labore esse reprehenderit tempor tempor.",
    productName : "Nisi sint pariatur magna culpa.",
    productId : 5
  },
]

export const OrderValues:orderInterface[] = [
  {
    orderItem : "Incididunt.",
    orderCount : 0,
    orderDate : "/fdsf/fsd/sdfs",
    arrivalDate : "fdsf/fsd/fdsf",
    orderId : 1
  },
  {
    orderItem : "Incididunt.",
    orderCount : 0,
    orderDate : "/fdsf/fsd/sdfs",
    arrivalDate : "fdsf/fsd/fdsf",
    orderId : 2
  },
  {
    orderItem : "Incididunt.",
    orderCount : 0,
    orderDate : "/fdsf/fsd/sdfs",
    arrivalDate : "fdsf/fsd/fdsf",
    orderId : 3
  },
  {
    orderItem : "Incididunt.",
    orderCount : 0,
    orderDate : "/fdsf/fsd/sdfs",
    arrivalDate : "fdsf/fsd/fdsf",
    orderId : 4
  },
  {
    orderItem : "Incididunt.",
    orderCount : 0,
    orderDate : "/fdsf/fsd/sdfs",
    arrivalDate : "fdsf/fsd/fdsf",
    orderId : 5
  },
]