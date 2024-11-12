// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import axios from "axios";

// export const Order = () => {
//   const { getTotalCartAmount, all_products, cartItems, url, token } =
//     useContext(ShopContext);

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });

//   const onChangeHandler = (event) => {
//     let name = event.target.name;
//     let value = event.target.value;

//     setData((data) => ({ ...data, [name]: value }));
//   };

//   // useEffect(() => {
//   //   console.log(data);

//   // }, [data])

//   const placeOrder = async (e) => {
//     e.preventDefault();

//     let orderItems = [];

//     all_products.map((item) => {
//       if (cartItems[item._id] > 0) {
//         let itemInfo = item;

//         itemInfo["quantity"] = cartItems[item._id];
//         orderItems.push(itemInfo);
//       }
//     });
//     // console.log(orderItems);
//     let orderData = {
//       address: data,
//       items: orderItems,
//       amount: getTotalCartAmount() + 2,
//     };

//     let response = await axios.post(url + "/api/order/place", orderData, {
//       headers: { token },
//     });
//     if (response.data.success) {
//       const { session_url } = response.data;
//       window.location.replace(session_url);
//     } else {
//       alert("Error");
//     }
//   };

//   return (
//     <section className="max-padd-container py-28 xl:py-32">
//       <form
//         onSubmit={placeOrder}
//         className="flex flex-col xl:flex-row gap-20 xl:gap-28"
//       >
//         {/* Delivery Information */}
//         <div className="flex flex-1 flex-col gap-3 text-[95%]">
//           <h3 className="bold-28 mb-4">Delivery Information</h3>
//           <div className="flex gap-3">
//             <input
//               type="text"
//               required
//               onChange={onChangeHandler}
//               value={data.firstName}
//               name="firstName"
//               placeholder="First name"
//               className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
//             />
//             <input
//               onChange={onChangeHandler}
//               required
//               value={data.lastName}
//               name="lastName"
//               type="text"
//               placeholder="Last name"
//               className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
//             />
//           </div>
//           <input
//             onChange={onChangeHandler}
//             required
//             value={data.email}
//             name="email"
//             type="email"
//             placeholder="Email address"
//             className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
//           />
//           <input
//             onChange={onChangeHandler}
//             required
//             value={data.phone}
//             name="phone"
//             type="phone"
//             placeholder="Phone number"
//             className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
//           />
//           <input
//             onChange={onChangeHandler}
//             required
//             value={data.street}
//             name="street"
//             type="text"
//             placeholder="Street address"
//             className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
//           />
//           <div className="flex gap-3">
//             <input
//               onChange={onChangeHandler}
//               required
//               value={data.city}
//               name="city"
//               type="text"
//               placeholder="City"
//               className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
//             />
//             <input
//               onChange={onChangeHandler}
//               required
//               value={data.state}
//               name="state"
//               type="text"
//               placeholder="State"
//               className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
//             />
//           </div>
//           <div className="flex gap-3">
//             <input
//               onChange={onChangeHandler}
//               required
//               value={data.zipcode}
//               name="zipcode"
//               type="text"
//               placeholder="Zip code"
//               className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
//             />
//             <input
//               type="text"
//               required
//               onChange={onChangeHandler}
//               value={data.country}
//               name="country"
//               placeholder="Country"
//               className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
//             />
//           </div>
//         </div>

//         {/* Cart Details */}
//         <div className="flex flex-col flex-1">
//           <div className="flex flex-col gap-2">
//             <h4 className="bold-22">Summary</h4>
//             <div>
//               <div className="flexBetween py-3">
//                 <h4 className="medium-16">Subtotal:</h4>
//                 <h4 className="text-gray-30 font-semibold">
//                   ${getTotalCartAmount()}
//                 </h4>
//               </div>
//               <hr />
//               <div className="flexBetween py-3">
//                 <h4 className="medium-16">Shipping Fee:</h4>
//                 <h4 className="text-gray-30 font-semibold">${2}</h4>
//               </div>
//               <hr />
//               <div className="flexBetween py-3">
//                 <h4 className="medium-18">Total:</h4>
//                 <h4 className="bold-18">
//                   $
//                   {getTotalCartAmount() === 0
//                     ? getTotalCartAmount()
//                     : getTotalCartAmount() + 2}
//                 </h4>
//               </div>
//             </div>
//             <button type="submit" className="btn-secondary w-52 rounded">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </form>
//     </section>
//   );
// };

























import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export const Order = () => {
  const { getTotalCartAmount, all_products, cartItems, url, token } =
    useContext(ShopContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItems = [];

    all_products.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        const { url } = response.data; // Updated to use `url`
        window.location.replace(url);  // Redirecting to Stripe checkout
      } else {
        console.error("Error:", response.data.message);
        alert("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error processing your order.");
    }
  };

  const navigate = useNavigate()

  useEffect(() => {
    
    if(!token){
      navigate('/cart')
    } else if(getTotalCartAmount() === 0){
      navigate(("/cart"))
    }
    
  }, [])
  


  return (
    <section className="max-padd-container py-28 xl:py-32">
      <form
        onSubmit={placeOrder}
        className="flex flex-col xl:flex-row gap-20 xl:gap-28"
      >
        {/* Delivery Information */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="bold-28 mb-4">Delivery Information</h3>
          <div className="flex gap-3">
            <input
              type="text"
              required
              onChange={onChangeHandler}
              value={data.firstName}
              name="firstName"
              placeholder="First name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              onChange={onChangeHandler}
              required
              value={data.lastName}
              name="lastName"
              type="text"
              placeholder="Last name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <input
            onChange={onChangeHandler}
            required
            value={data.email}
            name="email"
            type="email"
            placeholder="Email address"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
            onChange={onChangeHandler}
            required
            value={data.phone}
            name="phone"
            type="phone"
            placeholder="Phone number"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
            onChange={onChangeHandler}
            required
            value={data.street}
            name="street"
            type="text"
            placeholder="Street address"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              required
              value={data.city}
              name="city"
              type="text"
              placeholder="City"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              onChange={onChangeHandler}
              required
              value={data.state}
              name="state"
              type="text"
              placeholder="State"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              required
              value={data.zipcode}
              name="zipcode"
              type="text"
              placeholder="Zip code"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              type="text"
              required
              onChange={onChangeHandler}
              value={data.country}
              name="country"
              placeholder="Country"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
        </div>

        {/* Cart Details */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-2">
            <h4 className="bold-22">Summary</h4>
            <div>
              <div className="flexBetween py-3">
                <h4 className="medium-16">Subtotal:</h4>
                <h4 className="text-gray-30 font-semibold">
                  ${getTotalCartAmount()}
                </h4>
              </div>
              <hr />
              <div className="flexBetween py-3">
                <h4 className="medium-16">Shipping Fee:</h4>
                <h4 className="text-gray-30 font-semibold">${2}</h4>
              </div>
              <hr />
              <div className="flexBetween py-3">
                <h4 className="medium-18">Total:</h4>
                <h4 className="bold-18">
                  $
                  {getTotalCartAmount() === 0
                    ? getTotalCartAmount()
                    : getTotalCartAmount() + 2}
                </h4>
              </div>
            </div>
            <button type="submit" className="btn-secondary w-52 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
