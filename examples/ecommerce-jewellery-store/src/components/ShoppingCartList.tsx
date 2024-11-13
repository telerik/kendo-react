import * as React from "react";
import {
  chevronLeftIcon,
  trashIcon,
  walletSolidIcon,
  heartIcon,
  percentIcon,
} from "@progress/kendo-svg-icons";
import {
  Form,
  Field,
  FormElement,
  FieldRenderProps,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { useCart } from "../helpers/CartContext";
import {
  NumericTextBox
} from "@progress/kendo-react-inputs";
import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
import shoppingCartImage from "../assets/shoppingCartImg.png";
import { Avatar } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";

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

  const onProceedClick = () => {
    navigate("/paymentdetails");
  };

  const updateQuantity = (event) => {
    console.log(typeof event);
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
                src={isCartItem ? item.product.img : undefined}
                alt={isCartItem ? item.product.title : undefined}
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
                  <Button svgIcon={trashIcon} fillMode={"flat"}></Button>
                </span>
                <span>
                  {`$${(
                    item.quantity * item.product.newPrice
                  ).toLocaleString()}`}
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
                render={() => (
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
                      <Button
                        themeColor={"primary"}
                        size={"large"}
                        onClick={onProceedClick}
                      >
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
      <Layout>
        <div className="k-d-flex k-flex-col k-align-items-center k-py-12 k-px-4.5 k-px-sm-6 k-px-md-4 k-px-lg-7.5 k-px-xl-10 k-gap-10">
          <div className="k-d-flex k-flex-col k-align-items-center k-gap-4 k-text-center">
            <h2 className="k-h2 !k-mb-0">Why people choose us?</h2>
          </div>
          <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-3 k-gap-5">
            <div className="k-d-flex k-flex-col k-align-items-center">
              <Avatar
                rounded="full"
                type="icon"
                themeColor="primary"
                size="large"
              >
                <SvgIcon icon={walletSolidIcon} size="xxlarge" />
              </Avatar>
              <p className="k-font-size-xl k-font-bold k-px-4 k-py-3 !k-mb-0">
                Return Policy
              </p>
              <p className="k-p-4 !k-mb-0 k-text-center">
                You can return your items within 30 days for a full refund or
                exchange.
              </p>
            </div>

            <div className="k-d-flex k-flex-col k-align-items-center">
              <Avatar
                rounded="full"
                type="icon"
                themeColor="primary"
                size="large"
              >
                <SvgIcon icon={heartIcon} size="xxlarge" />
              </Avatar>
              <p className="k-font-size-xl k-font-bold k-px-4 k-py-3 !k-mb-0">
                Included Gift Wrapping
              </p>
              <p className="k-p-4 !k-mb-0 k-text-center">
                Apply your discount code at checkout to enjoy exclusive savings
                on your order.
              </p>
            </div>

            <div className="k-d-flex k-flex-col k-align-items-center">
              <Avatar
                rounded="full"
                type="icon"
                themeColor="primary"
                size="large"
              >
                <SvgIcon icon={percentIcon} size="xxlarge" />
              </Avatar>
              <p className="k-font-size-xl k-font-bold k-px-4 k-py-3 !k-mb-0 k-text-center">
                Discount Code Available
              </p>
              <p className="k-p-4 !k-mb-0 k-text-center">
                Add gift wrapping for a special touch, along with a personalized
                message for your loved ones.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
