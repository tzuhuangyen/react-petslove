import React, { useState, useEffect, useReducer } from "react";
import { useContext } from "react";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
// import CartNavbar from "../components/CartNavbar";
import { CartContext } from "./component/Context";
import Cart from "./component/Cart";

const cartReducer = (state, action) => {
  // 從 state 中解構出的購物車列表
  const { cartList } = state;
  console.log(action);
  //用於存儲更新後的購物車列表
  let updatedCartList;
  //cartItemId: product's ID in the cart list
  const cartItemId = cartList.findIndex(
    (item) => item.id === action.payload.id
  );
  console.log("index:", cartItemId);
  let jsonItemId;

  switch (action.type) {
    case "ADD_TO_CART":
      console.log("action:", action);
      //if no item in the cartList, add to cart list
      if (cartItemId === -1) {
        // POST request to add a new item into API cart
        axios
          .post("http://localhost:3000/carts", {
            productName: action.payload.name,
            quantity: 1,
            price: action.payload.price,
            total: action.payload.price,
          })
          .then((response) => {
            console.log("New item added to cart successfully", response.data);
            // save db.json'cart newItemId ID for change qty
            jsonItemId = response.data.id;

            // Add the new item to the cart list
            updatedCartList = [
              ...cartList,
              { ...action.payload, quantity: 1, id: jsonItemId },
            ];
          })
          .catch(
            (error) => console.error("Error adding new item to cart:", error)
            //ReferenceError: dispatch is not defined
          );
      } else {
        // If item already exists, update its quantity
        //在卡片內加入購物車按鈕可觸發 找到購物車的index去變更數量
        updatedCartList = cartList.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        //save data in localstorage
        localStorage.setItem(
          "cart",
          JSON.stringify({ cartList: updatedCartList })
        );

        return {
          //購物車列表狀態
          ...state,
          cartList: updatedCartList,
          total: caleTotalPrice(updatedCartList),
        };
      }

    // case "STORE_ITEM_ID":
    //   return {
    //     ...state,
    //     lastAddedItemId: action.payload,
    //   };
    //change qty from cartList
    // case "CHANGE_CART_QUANTITY":
    //   //要有兩個ID 一個是購物車的index 一個是db.json id
    //   //先复制购物车数组避免變更原始購物車列表
    //   updatedCartList = [...cartList];
    //   //購物車的indexID product's ID in the cart list
    //   const cartItemId = updatedCartList.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   // 更新購物車內商品数量
    //   updatedCartList[cartItemId].quantity = action.payload.quantity;
    //   // axios.patch update json server's cart data
    //   axios
    //     .patch(`http://localhost:3000/carts/${jsonItemId}`, {
    //       quantity: action.payload.quantity,
    //       total: action.payload.quantity * updatedCartList[index].price,
    //     })
    //     .then((response) =>
    //       console.log("Cart item updated successfully", response.data)
    //     )
    //     .catch((error) => console.error("Error updating cart:", error));

    //   localStorage.setItem(
    //     "cart",
    //     JSON.stringify({ cartList: updatedCartList })
    //   );

    //   return {
    //     ...state,
    //     cartList: updatedCartList,
    //     total: caleTotalPrice(updatedCartList),
    //   };

    case "REMOVE_CART_ITEM":
      const itemIdToRemove = action.payload.id;
      updatedCartList = cartList.filter((item) => item.id !== itemIdToRemove);

      // Update cart in local storage
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartList: updatedCartList })
      );

      return {
        ...state,
        cartList: updatedCartList,
        total: caleTotalPrice(updatedCartList),
      };

    // Handle other cases as needed
    // case "LOAD_CART":
    //   return {
    //     ...state,
    //     cartList: action.payload.cartList,
    //     total: caleTotalPrice(action.payload.cartList),
    //   };

    // Handle other cases as needed
    default:
      return state;
  }
};

const Shop = () => {
  //add to cart dispatch function
  const [state, dispatch] = useReducer(cartReducer, { cartList: [] });
  //取得原始資料
  const [jsonData, setJsonData] = useState();
  //search
  const [text, setText] = useState([]);
  //filter
  const [productTypes, setProductTypes] = useState([]);
  //sort price
  const [sortPrice, setSortPrice] = useState("asc");
  //toggleFavorite function
  const [favorites, setFavorites] = useState([]);

  // 取得jsonData資料 Use useEffect to set the initial state
  useEffect(() => {
    (async () => {
      try {
        const datas = await axios.get("http://localhost:3000/products");
        setJsonData(datas.data);
        setProductTypes(datas.data);
        console.log("jsonData:", datas.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  //search box component
  const SearchBox = () => {
    //search handler
    const searchHandler = (event) => {
      const keyword = event.target.value;
      setText(keyword); // Update the text state directly

      if (keyword !== "") {
        const searchProducts = jsonData.filter((product) => {
          return (
            product.name.toLowerCase().includes(keyword.toLowerCase()) ||
            product.type.toLowerCase().includes(keyword.toLowerCase())
          );
        });
        setProductTypes(searchProducts);
      } else {
        setProductTypes(jsonData);
      }
    };

    return (
      <>
        <div className="mb-3">
          <label htmlFor="search"></label>
          <input
            id="search"
            type="search"
            className="form-control productSearch"
            value={text}
            onChange={searchHandler}
            placeholder="search...beef?pork?"
          />
        </div>
      </>
    );
  };

  //handle filter by order type click
  const handleFilters = (type) => {
    let filteredTypes;

    if (type !== "") {
      filteredTypes = jsonData.filter((productType) => {
        return productType.order === type || productType.type === type;
      });
      setProductTypes(filteredTypes);
      console.log("filteredTypes", filteredTypes);
    } else {
      setProductTypes(jsonData);
      console.log("Data:", jsonData);
    }
  };

  //handle sort by price
  const handleSortPrice = () => {
    const sortedProducts = [...productTypes];

    sortedProducts.sort((a, b) =>
      sortPrice === "asc" ? b.price - a.price : a.price - b.price
    );
    console.log("Sorted Products:", sortedProducts);

    setProductTypes(sortedProducts);
    setSortPrice((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
  };

  //check item is already in favorite list
  const isFavorite = (productId) => favorites.includes(productId);
  // add item favorite function
  const toggleFavorite = (productId) => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(productId);

    if (index !== -1) {
      // if item is already in the favorites array. Remove from favorites
      updatedFavorites.splice(index, 1);
    } else {
      // or Add to favorites
      updatedFavorites.push(productId);
    }
    //update state
    setFavorites(updatedFavorites);
    //update local storage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    console.log("Updated Favorites:", updatedFavorites);
  };
  // get favorites data and load the favorites from local storage when the component mounts.
  useEffect(() => {
    // Load favorites & cart from local storage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {
      cartList: [],
    };

    setFavorites(storedFavorites);
    dispatch({ type: "LOAD_CART", payload: storedCart });
    console.log("Favorites:", favorites);
    console.log("Cart:", storedCart);
  }, [dispatch]);

  // filter favorite function
  const filterFavorites = () => {
    const favoriteProducts = jsonData.filter((product) => {
      return isFavorite(product.id);
    });
    setProductTypes(favoriteProducts);
    console.log(favoriteProducts);
  };
  // Card component: create a product card JSX(Product)
  const CreateDataCard = ({ productType }) => {
    const isProductFavorite = isFavorite(productType.id);

    return (
      <div className="col">
        <div className="card mb-4 shadow-sm productCard">
          <img
            src={productType.img_url}
            className="card-img-top object-fit "
            alt="product"
          />
          <div className="card-body">
            <p className="card-title">
              {productType.name}
              <span className="card-text float-end">${productType.price}</span>
            </p>
            <div className="d-flex justify-content-between align-end  ">
              <p className="card-text">Type: {productType.type}</p>
              <span className="card-text">{productType.order}</span>
            </div>
            <div className="btns cardBtns">
              <button
                className={`btnHeart btn-purple-outline ${
                  isProductFavorite ? "favorited" : ""
                }`}
                onClick={() => toggleFavorite(productType.id)}
              >
                <MdFavoriteBorder />
              </button>
              <button
                type="button"
                className=" btnCart"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { ...productType, quantity: 1 },
                  });
                }}
              >
                <CiShoppingCart />
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  };

  return (
    <>
      {/*JSON.stringify(productTypes)*/}
      <CartContext.Provider value={{ cartReducer, state, dispatch }}>
        <div className="container-lg">
          {/* <CartNavbar /> */}
          <SearchBox />
          <div className="filterbtns mb-4 d-flex justify-content-between align-items-center">
            <div className="typeBtns">
              <button
                id="filter-preOrder"
                onClick={() => handleFilters("order")}
              >
                order
              </button>
              <button
                id="filter-inStock"
                className="btn-purple"
                onClick={() => handleFilters("in-stock")}
              >
                in-stock
              </button>
              <button
                id="filter-customized"
                onClick={() => handleFilters("customized")}
              >
                customized
              </button>
              <button
                id="filter-chicken"
                onClick={() => handleFilters("chicken")}
              >
                chicken
              </button>
              <button id="filter-beef" onClick={() => handleFilters("beef")}>
                beef
              </button>
              <button id="filter-duck" onClick={() => handleFilters("duck")}>
                duck
              </button>
              <button id="reset" onClick={() => handleFilters("")}>
                Reset
              </button>
            </div>
            {/* Sort dropdown */}
            <div className=" sortBtn">
              <label htmlFor="sortSelect">Sort:</label>
              <select
                id="sortSelect"
                className="filterSelect"
                defaultValue={"increase"}
                onChange={(e) => handleSortPrice(e.target.value)}
              >
                <option value="asc">Low to High </option>
                <option value="desc"> High to Low</option>
              </select>
            </div>
            {/* filter favorite */}
            <button
              id="filter-favorite"
              className="filterFavoBtn"
              onClick={() => filterFavorites()}
            >
              <MdFavoriteBorder />
            </button>
          </div>
          {/* Filter by order result content */}
          <div className="row">
            <div className="col-md-7">
              <div className="row row-cols-3 g-3">
                {productTypes.map((productType, index) => (
                  <CreateDataCard
                    productType={productType}
                    key={`${productType.id}-${index}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <Cart />
            </div>
          </div>
        </div>
      </CartContext.Provider>
    </>
  );
};

function caleTotalPrice(cartList) {
  return cartList
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);
}
export default Shop;
