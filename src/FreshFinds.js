import React from "react";
import "./FreshFinds.css";
import { listings } from "./listingsDummyData";
import Listing from "./Listing";

function FreshFinds() {
  return (
    <div className="freshfinds">
      <p className="freshfinds__title">Fresh Finds</p>
      <div id="listings" className="listings">
        {listings.map((listing) => {
          return (
            <Listing
              profilePic="defaultProfilePic.png"
              username={listing.username}
              thumbnail={listing.thumbnail}
              title={listing.title}
              description={listing.description}
              time="1000"
            />
          );
        })}
      </div>
    </div>
  );
}

export default FreshFinds;
