import diamongWeddingRing from "../assets/listViewImages/diamondWeddingRing.png?url";
import pinkSilverBracelet from "../assets/listViewImages/pinkSilverBracelet.png?url";
import silverBraceletCross from "../assets/listViewImages/silverBraceletCross.png?url";
import yellowGoldEarrings from "../assets/listViewImages/yellowGoldEarrings.png?url";

type ListDataDescriptor = {
    img: string | null;
    status: string | null;
    title: string;
    oldPrice: number | null;
    newPrice: number;
};

export const listData: ListDataDescriptor[] = [{
    img: diamongWeddingRing,
    status: "sale",
    title: "Diamong Wedding Ring",
    oldPrice: 990,
    newPrice: 890
}, {
    img: silverBraceletCross,
    status: "recommended",
    title: "Silver Bracelet with Cross",
    oldPrice: null,
    newPrice: 270
},
{
    img: pinkSilverBracelet,
    status: null,
    title: "Pink Silver Bracelet",
    oldPrice: null,
    newPrice: 460
}, {
    img: yellowGoldEarrings,
    status: "sale",
    title: "Yellow Gold Earrings",
    oldPrice: 500,
    newPrice: 380
}, {
    img: "",
    status: null,
    title: "Silver Heart Necklace",
    oldPrice: null,
    newPrice: 400
}, {
    img: "",
    status: null,
    title: "Handmade Silver Earrings",
    oldPrice: null,
    newPrice: 650
}, {
    img: "",
    status: "recommended",
    title: "Diamong Wedding Bands",
    oldPrice: null,
    newPrice: 4290
}, {
    img: "",
    status: null,
    title: "Casual Silver Watch",
    oldPrice: null,
    newPrice: 390
}, {
    img: "",
    status: "sale",
    title: "Silver Bracelet with Onyx",
    oldPrice: 950,
    newPrice: 770
}, {
    img: "",
    status: "must have",
    title: "Wedding Bands with Pearls",
    oldPrice: null,
    newPrice: 900
}, {
    img: "",
    status: null,
    title: "Silver Wedding Bands",
    oldPrice: null,
    newPrice: 250
}, {
    img: "",
    status: null,
    title: "Handmade Yellow Gold Ring",
    oldPrice: null,
    newPrice: 560
}, {
    img: "",
    status: "must have",
    title: "Diamond Ring with Sapphire",
    oldPrice: null,
    newPrice: 3590
}, {
    img: "",
    status: null,
    title: "Silver Heart Bracelet",
    oldPrice: null,
    newPrice: 430
}, {
    img: "",
    status: "Sale",
    title: "Rose Gold Earrings with Opal",
    oldPrice: 850,
    newPrice: 690
},{
    img: "",
    status: null,
    title: "Silver Bracelet with Topaz",
    oldPrice: null,
    newPrice: 580
},{
    img: "",
    status: null,
    title: "Handmade Diamond Ring",
    oldPrice: null,
    newPrice: 1100
},{
    img: "",
    status: null,
    title: "Silver Heart Bracelet",
    oldPrice: null,
    newPrice: 430
},{
    img: "",
    status: "must have",
    title: "Diamong Ring with Ruby",
    oldPrice: null,
    newPrice: 5560
},{
    img: "",
    status: null,
    title: "Stainless Steel Watch",
    oldPrice: null,
    newPrice: 270
}, {
    img: "",
    status: null,
    title: "Gold Earrings with Garnet",
    oldPrice: null,
    newPrice: 270
},]