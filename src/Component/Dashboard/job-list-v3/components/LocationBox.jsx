
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { addLocation } from "../../../features/filter/filterSlice";

// const LocationBox = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { jobList } = useSelector((state) => state.filter);
//   const dispatch = useDispatch();

//   // Initialize state from URL or Redux store
//   const [getLocation, setLocation] = useState(
//     searchParams.get('location') || jobList.location || ''
//   );

//   // Location handler to update both Redux and URL
//   const locationHandler = (e) => {
//     const location = e.target.value;
    
//     // Update Redux store
//     dispatch(addLocation(location));
    
//     // Update URL parameters
//     const currentParams = Object.fromEntries(searchParams);
//     if (location) {
//       currentParams['location'] = location;
//     } else {
//       delete currentParams['location'];
//     }
//     setSearchParams(currentParams);
//   };

//   // Synchronize state with URL or Redux changes
//   useEffect(() => {
//     // Priority: URL params > Redux store
//     const urlLocation = searchParams.get('location');
//     if (urlLocation !== null) {
//       setLocation(urlLocation);
//       dispatch(addLocation(urlLocation));
//     } else {
//       setLocation(jobList.location);
//     }
//   }, [searchParams, jobList.location, dispatch]);

//   return (
//     <>
//       <input
//         type="text"
//         name="listing-search"
//         placeholder="City or postcode"
//         value={getLocation}
//         onChange={locationHandler}
//       />
//       <span className="icon flaticon-map-locator"></span>
//     </>
//   );
// };

// export default LocationBox;
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LocationBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state from the URL
  const [location, setLocation] = useState(searchParams.get("location") || "");

  // Location handler to update the state and URL
  const locationHandler = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);

    // Update URL parameters
    const currentParams = Object.fromEntries(searchParams);
    if (newLocation) {
      currentParams["location"] = newLocation;
    } else {
      delete currentParams["location"];
    }
    setSearchParams(currentParams);
  };

  // Sync state with the URL whenever it changes
  useEffect(() => {
    const urlLocation = searchParams.get("location");
    if (urlLocation !== location) {
      setLocation(urlLocation || "");
    }
  }, [searchParams, location]);

  return (
    <div className="location-box">
      <input
        type="text"
        name="listing-search"
        placeholder="City or postcode"
        value={location}
        onChange={locationHandler}
      />
      <span className="icon flaticon-map-locator"></span>
    </div>
  );
};

export default LocationBox;
