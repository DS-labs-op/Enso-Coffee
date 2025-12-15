import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    items: [
      { name: "Espresso", description: "Double shot, bold and rich", price: "₹120" },
      { name: "Americano", description: "Espresso with hot water", price: "₹140" },
      { name: "Cappuccino", description: "Espresso, steamed milk, foam", price: "₹160" },
      { name: "Latte", description: "Espresso with steamed milk", price: "₹170" },
      { name: "Flat White", description: "Velvety microfoam, double shot", price: "₹180" },
      { name: "Mocha", description: "Espresso, chocolate, steamed milk", price: "₹190" },
    ],
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee & Tonics",
    items: [
      { name: "Cold Brew Barrel", description: "Signature smooth cold brew, aged 24h", price: "₹220", featured: true },
      { name: "Iced Americano", description: "Espresso over ice", price: "₹150" },
      { name: "Iced Latte", description: "Espresso, cold milk, ice", price: "₹180" },
      { name: "Vietnamese Coffee", description: "Phin-dripped with condensed milk", price: "₹180", featured: true },
      { name: "Espresso Tonic", description: "Espresso, tonic water, citrus", price: "₹200" },
      { name: "Cold Brew Float", description: "Cold brew with vanilla ice cream", price: "₹250" },
    ],
  },
  {
    id: "signature",
    name: "Signature Drinks",
    items: [
      { name: "Enso Sunrise", description: "Orange, espresso, sparkling water", price: "₹220" },
      { name: "Salted Caramel Latte", description: "House-made caramel, sea salt flakes", price: "₹200" },
      { name: "Lavender Honey Latte", description: "Floral notes, local honey", price: "₹210" },
      { name: "Matcha Latte", description: "Ceremonial grade matcha, oat milk", price: "₹190" },
      { name: "Turmeric Golden Milk", description: "Warming spices, coconut milk", price: "₹170" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Bakes",
    items: [
      { name: "Classic Affogato", description: "Vanilla gelato drowned in espresso", price: "₹200", featured: true },
      { name: "Berry Cheesecake", description: "NY style, seasonal berry compote", price: "₹250", featured: true },
      { name: "Tiramisu", description: "Coffee-soaked ladyfingers, mascarpone", price: "₹230" },
      { name: "Chocolate Brownie", description: "Warm, fudgy, served with ice cream", price: "₹180" },
      { name: "Croissant", description: "Buttery, flaky, baked fresh", price: "₹120" },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      { name: "Avocado Toast", description: "Sourdough, smashed avo, poached egg", price: "₹220" },
      { name: "Classic Bagel", description: "Cream cheese, choice of toppings", price: "₹160" },
      { name: "Grilled Sandwich", description: "Choice of fillings, served with fries", price: "₹180" },
      { name: "Nachos", description: "Loaded wi
