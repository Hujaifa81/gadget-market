# GadgetHeaven ✨

Your go-to destination for the latest and greatest gadgets.

## 📌 Live Website  
[Visit GadgetHeaven](http://gadget-market.surge.sh/)

## 📄 Requirement Document  
[View Full Requirements](ADD_YOUR_DRIVE_OR_GITHUB_LINK_HERE)

---

## 🛠 Tech Stack  
- **React.js** (for building UI components)  
- **React Router** (for navigation)  
- **Context API** (for state management and persistence)  
- **Recharts** (for statistics page visualization)  

---

## 🚀 Key Features  
✔️ **E-commerce Functionality**  
   - Browse gadgets by categories  
   - View product details  
   - Add items to cart and wishlist  

✔️ **Cart & Wishlist Management**  
   - Add/remove items from the cart  
   - Add items to the wishlist (prevents duplicate items)  

✔️ **Sorting & Filtering**  
   - Sort cart items by price (high to low)  
   - Filter gadgets by categories  

✔️ **Enhanced User Experience**  
   - Persistent state using Context API & LocalStorage  
   - Modal confirmation on purchase  
   - Dynamic page titles & favicons  
   - Custom rating system implemented without external libraries  

✔️ **Statistics Page**  
   - Interactive composed chart showing price vs product rating  

---

## 🔍 React Fundamentals Used  
- **Components & Props** (Reusable UI elements)  
- **State & Hooks** (`useState`, `useEffect`, `useContext`, `useLoaderData`, `useParams`, `useLocation`, `useNavigate`)  
- **React Router** (Page navigation)  
- **Event Handling** (Click events for cart & wishlist actions)  
- **Conditional Rendering** (Displaying UI elements based on state)  

---

## 📊 Data Handling  
- **Context API** → For managing cart and wishlist    

---

## ⭐ Rating System  
- Implemented a **custom rating system** without using external packages  
- Ratings are displayed dynamically based on product data  

---

## 📢 Notifications (Toast Messages)  
- 🛒 **Adding to Cart** → "Item added to cart!"  
- ❤️ **Adding to Wishlist** → "Item added to wishlist!"  

---

## 🎯 Challenge Tasks Implemented  
✅ Background color changes on home page using `useLocation()`  
✅ Modal confirmation after purchase with `useNavigate()`  
✅ Dynamic page titles & favicons  
✅ Price limit handling for cart (Max: $1000)  

