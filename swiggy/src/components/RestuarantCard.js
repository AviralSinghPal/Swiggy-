import { image_url } from "./config";
import { restaurant_list } from "./config";

const RestuarantCard = ({restaurant}) => {
    // console.log(props);
  return (
    <>
    
      <div className="card">
        <div >
            <img className="card-img" src={image_url+restaurant.data?.cloudinaryImageId} />
        </div>
        <div className="card-info">
          <p className="text-title">{restaurant.data?.name}</p>
          <p className="text-body">{restaurant.data?.locality}</p>
          <p className="text-body">{"Avg. Rating: "+restaurant.data?.avgRating+"⭐"}</p>
          <p className="text-body">{restaurant.data.cuisines.join(", ")}</p>
    
        </div>
        <div className="card-footer">
          <span className="text-title">{"Price: "+ restaurant.data.costForTwo/100 +" for two"}</span>
        </div>
      </div>
    </>
  );
};

export default RestuarantCard;
