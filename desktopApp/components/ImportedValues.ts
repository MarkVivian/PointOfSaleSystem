import pic1 from "/public/icon_placeHolder.jpg"
import pic2 from "/public/icon_placeHolder1.jpg"
import pic3 from "/public/icon_placeHolder2.jpg"
import pic4 from "/public/icon_placeholder3.jpg"
import pic5 from "/public/icon_placeholder4.jpg"
import pic6 from "/public/icon_placeholder5.jpg"
import { valueStateInterface } from "./Interfaces"

export const valuesState : valueStateInterface[] = [
    {
      name : "Home",
      link : "/",
      description: "this is the homepage of the website",
      image : pic1
    },
    {
      name : "Orders",
      link : "/dashboard/orders",
      description: "this will allow the user to keep track of the orders and their expirations.",
      image : pic2
    },
    {
      name : "Products",
      link : "/dashboard/products",
      description: "this will allow the users to have a list of their products",
      image : pic3
    },
    {
      name : "Shop",
      link : "/dashboard/shop",
      description: "this will allow the user to sell their products efficiently",
      image : pic4
    },
    {
      name : "Dashboard",
      link : "/dashboard",
      description: "this will be used to analyse the products and orders...",
      image : pic5
    },
    {
      name : "Settings",
      link : "/dashboard/settings",
      description: "this will allow the user to change the appearance and the theme..",
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