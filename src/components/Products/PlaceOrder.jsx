import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Utilities/Button";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";
import { createOrder } from "@/toolkit/slices/orders/createOrderSlice";
import Loading from "../Utilities/Loading";
import { useRouter } from "next/router";

const PlaceOrder = ({ className }) => {
  const router = useRouter();
  const { cart_items } = useSelector((state) => state.cartItems);
  const { loading } = useSelector((state) => state.createOrder);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(createOrder());
    setTimeout(() => {
      dispatch(getCartItems());
      router.push("/confirmation");
    }, 300);
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className={`bg-white py-6 px-4 ${className}`}>
      <div className="flex justify-start items-center gap-2 mb-3">
        <span className="bg-primary text-white flex justify-center items-center w-[32px] h-[32px] rounded-full">
          {cart_items?.count}
        </span>
        <p className="text-primary text-lg">Products have been selected</p>
      </div>
      <Button className="w-full" onClick={handlePlaceOrder}>
        {loading ? <Loading /> : "Place order"}
      </Button>
      <p className="text-second text-sm text-center mt-3">
        Note that: your order will not be confirmed before you receive a call
        from us to let you know your order price to confirm.
      </p>
    </div>
  );
};

export default PlaceOrder;
