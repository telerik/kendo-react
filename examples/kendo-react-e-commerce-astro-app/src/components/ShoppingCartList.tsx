import * as React from "react";
import {
  chevronLeftIcon,
  trashIcon,
} from "@progress/kendo-svg-icons";

import { NumericTextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Layout } from "./Layout";

export const ShoppingCartList: React.FC = () => {
  const [shoppingCart, setShoppingCart] = React.useState<any[]>([]);

  React.useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setShoppingCart(storedCart);
  }, []);

  const onBackClick = () => {
    window.location.href = "/kendo-react/kendo-react-e-commerce-astro-app/products";
  };

  const onProceedClick = () => {
    window.location.href = "/kendo-react/kendo-react-e-commerce-astro-app/paymentdetails";
  };

  const updateQuantity = (index: number, value: number) => {
    const updatedCart = [...shoppingCart];
    updatedCart[index].quantity = value;
    setShoppingCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index: number) => {
    const updatedCart = shoppingCart.filter((_, i) => i !== index);
    setShoppingCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Layout>
        <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-pt-5">
          Shopping Cart
        </div>
        <div className="k-pb-5">
          <Button
            svgIcon={chevronLeftIcon}
            fillMode={"flat"}
            onClick={onBackClick}
          >
            Back
          </Button>
        </div>

        {shoppingCart.length > 0 ? (
          shoppingCart.map((item, index) => (
            <div
              className="k-d-flex k-gap-5 k-justify-content-center k-border-y k-align-items-center k-pb-5"
              key={item.id}
              style={{
                height: "120px",
              }}
            >
              <img
                className="k-rounded-lg"
                src={item.img}
                alt={item.title}
                style={{
                  maxHeight: "120px",
                }}
              />
              <div className="k-d-flex k-justify-content-between k-w-full">
                <span>{item.title}</span>
                <span>{`$${item.newPrice.toLocaleString()}`}</span>
                <span>
                  <NumericTextBox
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(index, e.value ?? item.quantity)
                    }
                    width={"118px"}
                    fillMode={"flat"}
                  />
                  <Button
                    svgIcon={trashIcon}
                    fillMode={"flat"}
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </Button>
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>Your shopping cart is empty.</p>
        )}
      </Layout>
      {shoppingCart.length > 0 && (
        <Layout>
          <Button themeColor={"primary"} size={"large"} onClick={onProceedClick}>
            Proceed to Checkout
          </Button>
        </Layout>
      )}
    </>
  );
};

export default ShoppingCartList;
