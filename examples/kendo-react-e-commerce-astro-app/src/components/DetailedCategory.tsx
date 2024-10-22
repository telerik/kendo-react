import * as React from "react";
import {
  chevronLeftIcon,
  trashIcon,
} from "@progress/kendo-svg-icons";
import {
  Form,
  Field,
  FormElement,
  FieldRenderProps,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Layout } from "./Layout";

const cart = [
  {
    product: {
      id: 1,
      img: "/sample-item1.png",
      title: "Silver Bracelet with Onyx",
      newPrice: 49.99,
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      img: "/sample-item2.png",
      title: "Diamond Wedding Ring",
      newPrice: 120.0,
    },
    quantity: 1,
  },
  {
    product: {
      id: 3,
      img: "/sample-item3.png",
      title: "Casual Silver Watch",
      newPrice: 85.0,
    },
    quantity: 3,
  },
];

const EmailInput = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div className="k-form-field-wrap">
      <Input {...others} labelClassName={"k-form-label"} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const ShoppingCartList: React.FC = () => {
  const updateQuantity = (event: any) => {
    const target = event.target.element;
    const id = target.getAttribute("id");
    console.log(`Update quantity for item with ID ${id}`);
  };

  return (
    <>
      <Layout>
        <div className="k-h2 k-font-bold k-text-black k-col-span-12 k-pt-5">
          Shopping Cart
        </div>
        <div className="k-pb-5">
          <Button svgIcon={chevronLeftIcon} fillMode={"flat"}>
            Back
          </Button>
        </div>

        {cart.map((item) => (
          <div
            className="k-d-flex k-gap-5 k-justify-content-center k-border-y k-align-items-center k-pb-5"
            key={item.product.id}
            style={{ height: "120px" }}
          >
            <img
              className="k-rounded-lg"
              src={item.product.img} 
              alt={item.product.title}
              style={{ maxHeight: "120px" }}
            />
            <div className="k-d-flex k-justify-content-between k-w-full">
              <span>{item.product.title}</span>
              <span>{`$${item.product.newPrice.toLocaleString()}`}</span>
              <span>
                <NumericTextBox
                  value={item.quantity}
                  id={String(item.product.id)}
                  onChange={updateQuantity}
                  width={"118px"}
                  fillMode={"flat"}
                />
                <Button svgIcon={trashIcon} fillMode={"flat"}></Button>
              </span>
              <span>{`$${(item.quantity * item.product.newPrice).toLocaleString()}`}</span>
            </div>
          </div>
        ))}
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
                      <Button themeColor={"primary"} size={"large"}>
                        Proceed to Checkout
                      </Button>
                    </div>
                  </FormElement>
                )}
              />
            </div>
            <div className="k-col-span-9 k-rounded-lg">
              <img
                src="/shoppingCartImg.png" 
                alt="Shopping Cart Background"
                style={{ width: "630px", height: "455px" }}
              />
            </div>
          </section>
        </Layout>
      ) : null}
    </>
  );
};

export default ShoppingCartList;
