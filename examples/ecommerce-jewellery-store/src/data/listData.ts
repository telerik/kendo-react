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
import { ListDataDescriptor } from "./types";
import { useLanguageContext } from "../helpers/LanguageContext";

export const useTranslatedListData = (): ListDataDescriptor[] => {
  const { t } = useLanguageContext();

  return [
    {
      img: diamongWeddingRing,
      status: t.statuses.statusSale,
      title: t.diamondWeddingRing,
      category: t.categories.Rings,
      material: t.materials.materialSilver,
      oldPrice: 990,
      newPrice: 890,
    },
    {
      img: silverBraceletCross,
      status: t.statuses.statusRecommended,
      title: t.silverBraceletWithCross,
      category: t.categories.Bracelets,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 270,
    },
    {
      img: pinkSilverBracelet,
      status: null,
      title: t.pinkSilverBracelet,
      category: t.categories.Bracelets,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 460,
    },
    {
      img: yellowGoldEarrings,
      status: t.statuses.statusSale,
      title: t.yellowGoldEarrings,
      category: t.categories.Earrings,
      material: t.materials.materialSilver,
      oldPrice: 500,
      newPrice: 380,
    },
    {
      img: silverHeartNecklace,
      status: null,
      title: t.silverHeartNecklace,
      category: t.categories.Necklaces,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 400,
    },
    {
      img: homemadeSilverEarrings,
      status: null,
      title: t.handmadeSilverEarrings,
      category: t.categories.Earrings,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 650,
    },
    {
      img: diamondWeddingBands,
      status: t.statuses.statusRecommended,
      title: t.diamondWeddingBands,
      category: t.categories.Rings,
      material: t.materials.materialGold,
      oldPrice: null,
      newPrice: 4290,
    },
    {
      img: casualSilverWatch,
      status: null,
      title: t.casualSilverWatch,
      category: t.categories.Watches,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 390,
    },
    {
      img: silverBraceletOnyx,
      status: t.statuses.statusSale,
      title: t.silverBraceletWithOnyx,
      category: t.categories.Bracelets,
      material: t.materials.materialSilver,
      oldPrice: 950,
      newPrice: 770,
    },
    {
      img: weddingBandsPearl,
      status: t.statuses.statusMustHave,
      title: t.weddingBandsWithPearls,
      category: t.categories.Rings,
      material: t.materials.materialGold,
      oldPrice: null,
      newPrice: 900,
    },
    {
      img: silverWeddingBands,
      status: null,
      title: t.silverWeddingBands,
      category: t.categories.Rings,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 250,
    },
    {
      img: handmadeYellowGoldRing,
      status: null,
      title: t.handmadeYellowGoldRing,
      category: t.categories.Rings,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 560,
    },
    {
      img: diamondRingSapphire,
      status: t.statuses.statusMustHave,
      title: t.diamondRingWithSapphire,
      category: t.categories.Rings,
      material: t.materials.materialGold,
      oldPrice: null,
      newPrice: 3590,
    },
    {
      img: silverHeartBracelet,
      status: null,
      title: t.silverHeartBracelet,
      category: t.categories.Bracelets,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 430,
    },
    {
      img: roseGoldEarringsOpal,
      status: t.statuses.statusSale,
      title: t.roseGoldEarringsWithOpal,
      category: t.categories.Earrings,
      material: t.materials.materialGold,
      oldPrice: 850,
      newPrice: 690,
    },
    {
      img: silverBraceletTopaz,
      status: null,
      title: t.silverBraceletWithTopaz,
      category: t.categories.Bracelets,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 580,
    },
    {
      img: handmadeDiamongRing,
      status: null,
      title: t.handmadeDiamondRing,
      category: t.categories.Rings,
      material: t.materials.materialGold,
      oldPrice: null,
      newPrice: 1100,
    },
    {
      img: diamondRingRuby,
      status: t.statuses.statusMustHave,
      title: t.diamondRingWithRuby,
      category: t.categories.Rings,
      material: t.materials.materialGold,
      oldPrice: null,
      newPrice: 5560,
    },
    {
      img: stainlessSteelWatch,
      status: null,
      title: t.silverWatch,
      category: t.categories.Watches,
      material: t.materials.materialSilver,
      oldPrice: null,
      newPrice: 270,
    },
    {
      img: goldEarringsGarnet,
      status: null,
      title: t.goldEarringsWithGarnet,
      category: t.categories.Earrings,
      material: t.materials.materialGold,
      oldPrice: null,
      newPrice: 270,
    },
  ].map((item, index) => ({
    ...item,
    id: index + 1,
    rating: Math.floor(Math.random() * 5) + 3,
  }));
};
