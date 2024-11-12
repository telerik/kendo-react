import * as React from "react";
import { chevronLeftIcon, trashIcon } from "@progress/kendo-svg-icons";
import {
  Form,
  Field,
  FormElement,
  FieldRenderProps,
  FormRenderProps,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { useCart } from "../helpers/CartContext";
import { NumericTextBox } from "@progress/kendo-react-inputs";
import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
import shoppingCartImage from "../assets/shoppingCartImg.png";

const EmailInput = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div className="k-form-field-wrap">
      <Input {...others} labelClassName={"k-form-label"} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export const ShoppingCartList: React.FC = () => {
  const { cart, updateIndividualCartItem } = useCart();
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/products");
  };

  const updateQuantity = (event) => {
    const target = event.target.element;
    const id = target.getAttribute("id");

    updateIndividualCartItem(id);
  };

  const onResetClick = (event) => {
    const target = event.target.element;
    const id = target.getAttribute("id");

    updateIndividualCartItem(id);
  };
  return (
    <>
      <Layout>
        <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-pt-5 ">
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

        {cart.map((item) => {
          const isCartItem = "quantity" in item;

          return (
            <div
              className="k-d-flex k-gap-5 k-justify-content-center k-border-y k-align-items-center k-pb-5"
              key={isCartItem ? item.product.id : null}
              style={{
                height: "120px",
              }}
            >
              <img
                className="k-rounded-lg"
                src={isCartItem ? item.product.img : null}
                alt={isCartItem ? item.product.title : null}
                style={{
                  maxHeight: "120px",
                }}
              />
              <div className="k-d-flex k-justify-content-between k-w-full">
                <span>{isCartItem ? item.product.title : null}</span>
                <span>{`$${
                  isCartItem ? item.product.newPrice.toLocaleString() : null
                }`}</span>
                <span>
                  {isCartItem ? (
                    <NumericTextBox
                      value={item.quantity}
                      id={String(item.product.id)}
                      onChange={updateQuantity}
                      width={"118px"}
                      fillMode={"flat"}
                    />
                  ) : (
                    <span>Quantity not available</span>
                  )}
                  <Button
                    svgIcon={trashIcon}
                    fillMode={"flat"}
                    onClick={onResetClick}
                  ></Button>
                </span>
                <span>
                  {isCartItem
                    ? `$${(
                        item.quantity * item.product.newPrice
                      ).toLocaleString()}`
                    : `$${item.product.newPrice.toLocaleString()}`}
                </span>
              </div>
            </div>
          );
        })}
      </Layout>
      {cart.length > 0 ? (
        <Layout>
          <section className="k-d-flex k-justify-content-between k-align-items-center">
            <div className="k-col-span-3">
              <Form
                render={(formRenderProps: FormRenderProps) => (
                  <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className={"k-form-fieldset"}>
                      <legend className={"k-h2"}>Order Details</legend>
                      <span>Please, insert your details</span>
                      <FieldWrapper>
                        <Field
                          name={"firstName"}
                          component={Input}
                          labelClassName={"k-form-label"}
                          label={"Full Name"}
                        />
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field
                          name={"email"}
                          type={"email"}
                          component={EmailInput}
                          label={"Email Address"}
                        />
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field
                          name={"phone"}
                          component={Input}
                          labelClassName={"k-form-label"}
                          label={"Phone Number"}
                        />
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field
                          name={"country"}
                          component={Input}
                          labelClassName={"k-form-label"}
                          label={"Country"}
                        />
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field
                          name={"street"}
                          component={Input}
                          labelClassName={"k-form-label"}
                          label={"Street Address"}
                        />
                      </FieldWrapper>
                    </fieldset>
                    <div className="k-form-buttons">
                      <Button themeColor={"primary"} size={"large"}>
                        Proceed to Checkout
                      </Button>
                    </div>
                  </FormElement>
                )}
              />
            </div>
            <div
              className="k-col-span-9 k-rounded-lg"
              style={{
                backgroundImage: `url(${shoppingCartImage})`,
                width: "630px",
                height: "455px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </section>
        </Layout>
      ) : null}
    </>
  );
};
