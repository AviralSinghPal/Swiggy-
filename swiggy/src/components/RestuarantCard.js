import { image_url } from "./config";
import { restaurant_list } from "./config";

const RestuarantCard = ({restaurant}) => {
    // console.log(props);
  return (
    <>
    
      <div class="card">
        <div >
            <img class="card-img" src={image_url+restaurant.data?.cloudinaryImageId} />
        </div>
        <div class="card-info">
          <p class="text-title">{restaurant.data?.name}</p>
          <p class="text-body">{restaurant.data?.locality}</p>
          <p class="text-body">{"Avg. Rating: "+restaurant.data?.avgRating+"⭐"}</p>
          <p class="text-body">{restaurant.data.cuisines.join(", ")}</p>
    
        </div>
        <div class="card-footer">
          <span class="text-title">{"Price: "+ restaurant.data.costForTwo/100 +" for two"}</span>
        </div>
      </div>
    </>
  );
};

export default RestuarantCard;
