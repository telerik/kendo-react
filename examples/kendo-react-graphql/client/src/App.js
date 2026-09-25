import React, { useCallback, useState } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { Button } from '@progress/kendo-react-buttons';
import './App.css';
import GridContainer from './components/GridContainer';
import ProductsForm from './components/ProductForm';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

const emptyProduct = {
  ProductName: '',
  UnitPrice: 0,
  UnitsInStock: 0,
};

function AppContent() {
  const [selectedItem, setSelectedItem] = useState(emptyProduct);
  const [inEdit, setInEdit] = useState(false);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [notification, setNotification] = useState(null);

  const confirmDiscard = useCallback(() => (
    !isFormDirty || window.confirm('Discard unsaved product changes?')
  ), [isFormDirty]);

  const selectProduct = useCallback((product) => {
    if (!confirmDiscard()) {
      return;
    }

    setSelectedItem(product);
    setInEdit(true);
    setIsFormDirty(false);
  }, [confirmDiscard]);

  const startNewProduct = useCallback(() => {
    if (!confirmDiscard()) {
      return;
    }

    setSelectedItem(emptyProduct);
    setInEdit(false);
    setIsFormDirty(false);
  }, [confirmDiscard]);

  const resetEditor = useCallback(() => {
    setSelectedItem(emptyProduct);
    setInEdit(false);
    setIsFormDirty(false);
  }, []);

  const showNotification = useCallback((message, style = 'success') => {
    setNotification({ message, style });
  }, []);

  return (
    <div className="app-shell">
      <header className="app-topbar">
        <div className="app-brand">
          <span className="app-brand__eyebrow">GraphQL inventory</span>
          <span className="app-brand__name">Product manager</span>
        </div>
      </header>

      <main className="app-main">
        <section className="page-heading" aria-labelledby="page-title">
          <div>
            <p className="page-heading__eyebrow">Catalog administration</p>
            <h1 id="page-title">Products</h1>
            <p>Maintain product details and monitor current inventory from the GraphQL data source.</p>
          </div>
          <Button themeColor="primary" onClick={startNewProduct}>Add product</Button>
        </section>

        <div className="products-workspace">
          <ProductsForm
            selectedItem={selectedItem}
            inEdit={inEdit}
            onDiscard={startNewProduct}
            onDirtyChange={setIsFormDirty}
            onSaved={(message) => {
              resetEditor();
              showNotification(message);
            }}
            onError={(message) => showNotification(message, 'error')}
          />
          <GridContainer
            onProductSelect={selectProduct}
            onAddProduct={startNewProduct}
            onNotification={showNotification}
          />
        </div>
      </main>

      {notification && (
        <div className={`app-notifications app-notifications--${notification.style}`} role="status">
          <span>{notification.message}</span>
          <Button fillMode="flat" onClick={() => setNotification(null)}>Dismiss</Button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContent />
    </ApolloProvider>
  );
}
