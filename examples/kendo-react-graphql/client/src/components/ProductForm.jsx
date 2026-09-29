import React, { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { NumericTextBox, Input } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { useMutation } from '@apollo/client';
import { addProductMutation, getProductsQuery, updateProductMutation } from '../queries/queries';

const newProduct = {
  ProductName: '',
  UnitPrice: 0,
  UnitsInStock: 0,
};

export default function ProductsForm({
  selectedItem,
  inEdit,
  onDiscard,
  onDirtyChange,
  onSaved,
  onError,
}) {
  const [values, setValues] = useState(newProduct);
  const [addProduct, { loading: isAdding }] = useMutation(addProductMutation);
  const [updateProduct, { loading: isUpdating }] = useMutation(updateProductMutation);
  const isSaving = isAdding || isUpdating;

  useEffect(() => {
    setValues(inEdit ? selectedItem : newProduct);
    onDirtyChange(false);
  }, [inEdit, onDirtyChange, selectedItem]);

  const updateValue = (field, value) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    onDirtyChange(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (inEdit) {
        await updateProduct({
          variables: {
            ProductID: selectedItem.ProductID,
            ...values,
          },
          refetchQueries: [{ query: getProductsQuery }],
        });
        onSaved(`Updated ${values.ProductName}.`);
      } else {
        await addProduct({
          variables: values,
          refetchQueries: [{ query: getProductsQuery }],
        });
        onSaved(`Added ${values.ProductName}.`);
      }
    } catch (error) {
      onError(`Unable to save the product. ${error.message}`);
    }
  };

  return (
    <aside className="product-editor" aria-labelledby="product-editor-title">
      <div className="panel-heading">
        <p className="panel-heading__eyebrow">{inEdit ? 'Editing product' : 'New product'}</p>
        <h2 id="product-editor-title">{inEdit ? selectedItem.ProductName : 'Add a product'}</h2>
        <p>{inEdit ? 'Update the selected catalog item.' : 'Enter the core details for a catalog item.'}</p>
      </div>
      <form className="k-form product-form" onSubmit={handleSubmit}>
        <Label className="k-form-field">
          <span>Product name</span>
          <Input
            required
            placeholder="e.g. Alpine tea"
            value={values.ProductName}
            onChange={(event) => updateValue('ProductName', event.value)}
          />
        </Label>
        <Label className="k-form-field">
          <span>Unit price</span>
          <NumericTextBox
            required
            min={0}
            format="c2"
            value={values.UnitPrice}
            onChange={(event) => updateValue('UnitPrice', event.value ?? 0)}
          />
        </Label>
        <Label className="k-form-field">
          <span>Units in stock</span>
          <NumericTextBox
            required
            min={0}
            format="n0"
            value={values.UnitsInStock}
            onChange={(event) => updateValue('UnitsInStock', event.value ?? 0)}
          />
        </Label>
        <div className="product-form__actions">
          <Button fillMode="outline" type="button" onClick={onDiscard} disabled={isSaving}>Cancel</Button>
          <Button themeColor="primary" type="submit" disabled={isSaving}>
            {isSaving ? 'Saving...' : inEdit ? 'Save changes' : 'Add product'}
          </Button>
        </div>
      </form>
    </aside>
  );
}
