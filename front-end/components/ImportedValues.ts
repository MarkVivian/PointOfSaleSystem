import pic1 from "/public/icon_placeHolder.jpg"
import pic2 from "/public/icon_placeHolder1.jpg"
import pic3 from "/public/icon_placeHolder2.jpg"
import pic4 from "/public/icon_placeholder3.jpg"
import pic5 from "/public/icon_placeholder4.jpg"
import pic6 from "/public/icon_placeholder5.jpg"
import { valueStateInterface } from "./Interfaces"
import calendarOrders from "@/app/dashboard/dashboardContent/calendarOrders"
import monthAnalysis from "@/app/dashboard/dashboardContent/monthAnalysis"
import productAnalytics from "@/app/dashboard/dashboardContent/productAnalytics"
import productTracking from "@/app/dashboard/dashboardContent/productTracking"

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

export const dashboardContent:JSX.Element[] = [
    calendarOrders(),
    monthAnalysis(),
    productAnalytics(),
    productTracking()
]