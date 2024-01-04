const express = require("express");
const app = express();
const cors = require("cors");

const data = require('./products')

const { process } = require('@progress/kendo-data-query');

const currentYear = new Date().getFullYear();

const parsedData = data.sampleProducts.map(product => {
    const date = new Date(product.FirstOrderedOn);
    date.setFullYear(currentYear);
    product.FirstOrderedOn = date.toISOString()
    return product;
})

app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
    let dataState = req.query.dataState;
    // this is the place to get the items from the database
    let skip = parseInt(dataState.skip);
    let take = parseInt(dataState.take);
    res.send(process(parsedData,
        {
            skip: skip,
            take: take,
            group: dataState.group,
            sort: dataState.sort,
            filter: dataState.filter
        }
    ));
});

app.put("/update", (req, res) => {
    let dataState = req.body.dataState;
    const item = req.body.item;
    const id = item.ProductID;
    // this is the place to update the database and return success if it was successful
    let index = parsedData.findIndex(item => item.ProductID === id);
    parsedData[index] = item;
    parsedData[index].inEdit = false;
    // return error if any
    res.send(process(parsedData, dataState));
});

app.post("/create", (req, res) => {
    const item = req.body.item
    let dataState = req.body.dataState;
    const id = parsedData.length + 1;
    item.ProductID = id;
    item.inEdit = false;
    parsedData.unshift(item);
    res.send(process(parsedData, dataState));
});

app.delete("/delete/:id", (req, res) => {
    let dataState = req.body.dataState;
    const id = parseInt(req.params.id);
    // this is the place to delete the item from the database and return success if it was successful
    let index = parsedData.findIndex(item => item.ProductID === id);
    parsedData.splice(index, 1);
    // return error if any
    res.send(process(parsedData, dataState));
});


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});