import "./App.css";
import BookingCard from "./Components/BookingTableCards/BookingCard";
import Carousel from "./Components/Carousel/Carousel";
import HomeFoodCategory from "./Components/FoodCategory/HomeFoodCategory";
import HomeFoodMenu from "./Components/FoodMenu/HomeFoodMenu";
import Review from "./Components/ReviewCustomer/HomeReview";

function App() {
  return (
    <div>
      <Carousel />
      <BookingCard />
      <Review />
      <HomeFoodCategory />
      <HomeFoodMenu />
    </div>
  );
}

export default App;
