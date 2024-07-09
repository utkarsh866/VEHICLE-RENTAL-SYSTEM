import './Preloader.css';
import car from "./car.gif"
export function Preloader() {
  return (
    <div className="preloader">
     <img src={car} alt="Loading..." />
    </div>
  );
}