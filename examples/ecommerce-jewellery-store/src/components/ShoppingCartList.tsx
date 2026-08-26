import * as React from "react";
import {
  chevronLeftIcon,
  trashIcon,
  walletIcon,
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
import { NumericTextBoxChangeEvent } from "@progress/kendo-react-inputs";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { useCart } from "../helpers/CartContext";
import { NumericTextBox } from "@progress/kendo-react-inputs";
import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
import shoppingCartImage from "../assets/shoppingCartImg.png";
import { Avatar } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { useLanguageContext } from "../helpers/LanguageContext";

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
  const { t } = useLanguageContext();

  const onBackClick = () => {
    navigate("/products");
  };

  const onProceedClick = () => {
    navigate("/paymentdetails");
  };

  const updateQuantity = (event: NumericTextBoxChangeEvent) => {
    const id = event.target.element?.id;

    if (id) {
      updateIndividualCartItem(id);
    }
  };

  return (
    <>
      <Layout>
        <div className="shopping-cart__title">
          {t.shoppingCartTitle}
        </div>
        <div className="shopping-cart__back">
          <Button
            svgIcon={chevronLeftIcon}
            fillMode={"flat"}
            onClick={onBackClick}
          >
            {t.backButtonText}
          </Button>
        </div>

        {cart.map((item) => {
          const isCartItem = "quantity" in item;

          return (
            <div
              className="shopping-cart__item"
              key={item.product.id}
              style={{
                height: "120px",
              }}
            >
              <img
                className="shopping-cart__item-image"
                src={isCartItem ? item.product.img : undefined}
                alt={isCartItem ? item.product.title : undefined}
                style={{
                  maxHeight: "120px",
                }}
              />
              <div className="shopping-cart__item-details">
                <span>{isCartItem ? item.product.title : null}</span>
                <span>{`$${isCartItem ? item.product.newPrice.toLocaleString() : null}`}</span>
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
                    <span>{t.emptyCartMessage}</span>
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
          <section className="shopping-cart__checkout">
            <div className="shopping-cart__checkout-form">
              <Form
                render={() => (
                  <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className={"k-form-fieldset"}>
                      <legend className={"k-h2"}>{t.paymentDetailsTitle}</legend>
                      <span>{t.paymentDetailsSubtitle}</span>
                      <FieldWrapper>
                        <Field
                          name={"firstName"}
                          component={Input}
                          labelClassName={"k-form-label"}
                          label={t.fullNameLabel}
                        />
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field
                          name={"email"}
                          type={"email"}
                          component={EmailInput}
                          label={t.emailLabel}
                        />
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field
                          name={"phone"}
                          component={Input}
                          labelClassName={"k-form-label"}
                          label={t.phoneNumberLabel}
                        />
                      </FieldWrapper>
                    </fieldset>
                    <div className="k-form-buttons">
                      <Button
                        themeColor={"primary"}
                        size={"large"}
                        onClick={onProceedClick}
                      >
                        {t.proceedToCheckoutButtonText}
                      </Button>
                    </div>
                  </FormElement>
                )}
              />
            </div>
            <div
              className="shopping-cart__checkout-image"
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
        <div className="shopping-cart__benefits">
          <h2>{t.whyChooseUs}</h2>
          <div className="shopping-cart__benefit-items">
            <div className="shopping-cart__benefit">
              <Avatar rounded="full" themeColor="primary" size="large">
                <SvgIcon icon={walletIcon} size="xxlarge" />
              </Avatar>
              <p className="shopping-cart__benefit-title">{t.returnPolicyTitle}</p>
              <p>{t.returnPolicyContent}</p>
            </div>
            <div className="shopping-cart__benefit">
              <Avatar rounded="full" themeColor="primary" size="large">
                <SvgIcon icon={heartIcon} size="xxlarge" />
              </Avatar>
              <p className="shopping-cart__benefit-title">
                {t.includedGiftWrappingTitle}
              </p>
              <p>{t.includedGiftWrappingContent}</p>
            </div>
            <div className="shopping-cart__benefit">
              <Avatar rounded="full" themeColor="primary" size="large">
                <SvgIcon icon={percentIcon} size="xxlarge" />
              </Avatar>
              <p className="shopping-cart__benefit-title">{t.discountCodeTitle}</p>
              <p>{t.discountCodeContent}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
