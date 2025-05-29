import { gql } from 'apollo-boost';

const getProductsQuery = gql `
{
    products {
        ProductID
        ProductName
        UnitPrice
        UnitsInStock
    }
}
`;

const addProductMutation = gql`
    mutation AddProduct($ProductName: String!, $UnitPrice: Float!, $UnitsInStock: Float!){
        AddProduct(ProductName: $ProductName, UnitPrice: $UnitPrice, UnitsInStock: $UnitsInStock){
            ProductName
            ProductID
        }
    }
`;

const updateProductMutation = gql`
    mutation UpdateProduct($ProductID: ID!, $ProductName: String! ,$UnitPrice: Float!, $UnitsInStock: Float!){
        UpdateProduct(ProductID: $ProductID, ProductName: $ProductName, UnitPrice: $UnitPrice, UnitsInStock: $UnitsInStock){
            ProductID
        }
    }
`;

const deleteProductMutation = gql`
    mutation DeleteProduct($ProductID: ID!){
        DeleteProduct(ProductID: $ProductID){
            ProductID
        }
    }
`;

export { getProductsQuery, addProductMutation, deleteProductMutation, updateProductMutation };