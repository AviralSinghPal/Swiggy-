import RestuarantCard from "./RestuarantCard";
import { restaurant_list } from "./config";

const Body = () => {
  return (
    <>
      <div className="res-cards">
        {restaurant_list.map((res) => {
          return <RestuarantCard restaurant={res} />;
        })}
      </div>
    </>
  );
};

export default Body;
