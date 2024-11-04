import diamongWeddingRing from "../assets/listViewImages/diamondWeddingRing.png";
import pinkSilverBracelet from "../assets/listViewImages/pinkSilverBracelet.png";
import silverBraceletCross from "../assets/listViewImages/silverBraceletCross.png";
import yellowGoldEarrings from "../assets/listViewImages/yellowGoldEarrings.png";
import silverHeartNecklace from "../assets/listViewImages/necklace.png";
import homemadeSilverEarrings from "../assets/listViewImages/handmadeSilverEarrings.png";
import diamondWeddingBands from "../assets/listViewImages/diamondWeddingBands.png";
import casualSilverWatch from "../assets/listViewImages/casualSilverWatch.png";
import silverBraceletOnyx from "../assets/listViewImages/silverBraceletOnyx.png";
import weddingBandsPearl from "../assets/listViewImages/weddingBandsPearl.png";
import silverWeddingBands from "../assets/listViewImages/silverWeddingBands.png";
import handmadeYellowGoldRing from "../assets/listViewImages/handmadeYellowGoldRing.png";
import diamondRingSapphire from "../assets/listViewImages/diamondRingSapphire.png";
import silverHeartBracelet from "../assets/listViewImages/silverHeartBracelet.png";
import roseGoldEarringsOpal from "../assets/listViewImages/roseGoldEarringsOpal.png";
import silverBraceletTopaz from "../assets/listViewImages/silverBraceletTopaz.png";
import handmadeDiamongRing from "../assets/listViewImages/handmadeDiamongRing.png";
import diamondRingRuby from "../assets/listViewImages/diamondRingRuby.png";
import stainlessSteelWatch from "../assets/listViewImages/stainlessSteelWatch.png";
import goldEarringsGarnet from "../assets/listViewImages/goldEarringsGarnet.png";

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
    img: silverHeartNecklace,
    status: null,
    title: "Silver Heart Necklace",
    oldPrice: null,
    newPrice: 400
}, {
    img: homemadeSilverEarrings,
    status: null,
    title: "Handmade Silver Earrings",
    oldPrice: null,
    newPrice: 650
}, {
    img: diamondWeddingBands,
    status: "recommended",
    title: "Diamong Wedding Bands",
    oldPrice: null,
    newPrice: 4290
}, {
    img: casualSilverWatch,
    status: null,
    title: "Casual Silver Watch",
    oldPrice: null,
    newPrice: 390
}, {
    img: silverBraceletOnyx,
    status: "sale",
    title: "Silver Bracelet with Onyx",
    oldPrice: 950,
    newPrice: 770
}, {
    img: weddingBandsPearl,
    status: "must have",
    title: "Wedding Bands with Pearls",
    oldPrice: null,
    newPrice: 900
}, {
    img: silverWeddingBands,
    status: null,
    title: "Silver Wedding Bands",
    oldPrice: null,
    newPrice: 250
}, {
    img: handmadeYellowGoldRing,
    status: null,
    title: "Handmade Yellow Gold Ring",
    oldPrice: null,
    newPrice: 560
}, {
    img: diamondRingSapphire,
    status: "must have",
    title: "Diamond Ring with Sapphire",
    oldPrice: null,
    newPrice: 3590
}, {
    img: silverHeartBracelet,
    status: null,
    title: "Silver Heart Bracelet",
    oldPrice: null,
    newPrice: 430
}, {
    img: roseGoldEarringsOpal,
    status: "Sale",
    title: "Rose Gold Earrings with Opal",
    oldPrice: 850,
    newPrice: 690
},{
    img: silverBraceletTopaz,
    status: null,
    title: "Silver Bracelet with Topaz",
    oldPrice: null,
    newPrice: 580
},{
    img: handmadeDiamongRing,
    status: null,
    title: "Handmade Diamond Ring",
    oldPrice: null,
    newPrice: 1100
},{
    img: diamondRingRuby,
    status: "must have",
    title: "Diamong Ring with Ruby",
    oldPrice: null,
    newPrice: 5560
},{
    img: stainlessSteelWatch,
    status: null,
    title: "Stainless Steel Watch",
    oldPrice: null,
    newPrice: 270
}, {
    img: goldEarringsGarnet,
    status: null,
    title: "Gold Earrings with Garnet",
    oldPrice: null,
    newPrice: 270
},]