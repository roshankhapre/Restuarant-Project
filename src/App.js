import { RestaurantMenu } from "@mui/icons-material";
import "./App.css";
import AboutUs from "./Components/About Us/AboutUs";
import AboutUsFood from "./Components/About Us/AboutUsFood";
import AboutUsGallery from "./Components/About Us/AboutUsGallery";
import ArtGallery from "./Components/ArtGallery/ArtGallery";
import BookingForm from "./Components/BookingForm/BookingForm";
import BookingCard from "./Components/BookingTableCards/BookingCard";
import CafeCarousel from "./Components/CafePage/CafeCarousel";
import CafeDiscoverTest from "./Components/CafePage/CafeDiscoverTest";
import CafeGallery from "./Components/CafePage/CafeGallery";
import CafeMenu from "./Components/CafePage/CafeMenu";
import CafeServices from "./Components/CafePage/CafeServices";
import Carousel from "./Components/Carousel/Carousel";
import HomeFoodCategory from "./Components/FoodCategory/HomeFoodCategory";
import HomeFoodMenu from "./Components/FoodMenu/HomeFoodMenu";
import HotelCarousel from "./Components/HotelPage/HotelCarousel";
import HotelRooms from "./Components/HotelPage/HotelRooms";
import HotelServices from "./Components/HotelPage/HotelServices";
import CafeMenuCard from "./Components/Menu/CafeMenuCard";
import Review from "./Components/ReviewCustomer/HomeReview";
import RestaurantMenuCard from "./Components/Menu/RestaurantMenuCard";

function App() {
  return (
    <div>
      <Carousel />
      <BookingCard />
      <Review />
      <HomeFoodCategory />

      <ArtGallery />
      <HomeFoodMenu />
      <CafeCarousel />
      <CafeDiscoverTest />
      <CafeServices />
      <CafeMenu />
      <CafeGallery />
      <HotelCarousel />

      <HotelRooms />
      <HotelServices />
      <BookingForm />
      <AboutUs />
      <AboutUsFood />
      <AboutUsGallery />
      <CafeMenuCard />
      <RestaurantMenuCard />
    </div>
  );
}

export default App;
