import pic1 from "/public/icon_placeHolder.jpg"
import pic5 from "/public/icon_placeholder4.jpg"
import pic6 from "/public/icon_placeholder5.jpg"
import { leftNavbarInterface } from "./Interfaces"



export const homePageValues:leftNavbarInterface[] = [
  {
    name : "Login",
    link : "/dashboard/login",
    description: "this will allow you to create a backup of all your orders, products and dashboard details and easy view from the web.. ",
    image : pic1
  },
  {
    name : "Dashboard",
    link : "/dashboard",
    description: "this will be used to analyse the products, orders and the sales you have made through the month from the web or the applicccation.",
    image : pic5
  },
  {
    name : "Settings",
    link : "/dashboard/settings",
    description: "this will allow the user to change the appearance, theme and give the creator of he system a tip if you are fealing generous.",
    image : pic6
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