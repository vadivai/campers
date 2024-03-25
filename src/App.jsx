import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CampersList } from "./pages/CampersList";

import data from "./campers.json";
import { Modal } from "./components/Modal/Modal";

const App = () => {
  const { name, rating, reviews, location, price, gallery, description } =
    data[1];

  // console.log(name, rating, reviews.length, location, price);
  console.log("data", data[1]);

  return (
    <Routes>
      {/* <Route path="/" element={<Home />}> */}
      {/* <Route index element={<h1>Home Page 2</h1>} /> */}
      <Route
        path="/"
        element={
          <Modal
            props={{ name, rating, location, price, gallery, description }}
          />
        }
      />
      <Route path="catalog" element={<CampersList />} />
      {/* <Route path="catalog/:camperId" element={<h1>Catalog ID </h1>}>
          <Route path="features" element={<h2>Features </h2>} />
          <Route path="reviews" element={<h2>Reviews </h2>} />
        </Route> */}
      <Route path="favorites" element={<h2>Favorites </h2>} />
      {/* <Route path="favorites/:camperId" element={<h2>Favorites ID </h2>}>
        <Route path="features" element={<h2>Features</h2>} />
        <Route path="reviews" element={<h2>Reviews </h2>} />
      </Route> */}
      <Route path="*" element={<h2>Another page</h2>} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;
