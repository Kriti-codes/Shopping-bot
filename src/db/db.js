import BasketImg from "../images/Basket.png";
import BottleImg from "../images/Bottle.png";
import CandleImg from "../images/Candle.png";
import DiyaImg from "../images/Diya.png";
import HandBagImg from "../images/HandBag.png";
import MugsImg from "../images/Mugs.png";
import VaseImg from "../images/Vase.png";
import VaselslImg from "../images/Vasels.png";

 export function getData(){
    return [
        {title:"Basket", price: 240, Image: BasketImg },
        {title:"Bottle", price: 80, Image: BottleImg},
        {title:"Candle", price: 150, Image: CandleImg },
        {title:"Diya", price: 79, Image: DiyaImg },
        {title: "HandBag", price: 479, Image: HandBagImg },
        {title:"Mugs", price: 559, Image: MugsImg},
        {title:"Vase", price:349 , Image: VaseImg },
        {title:"Vasels", price: 920, Image: VaselslImg },

    ];
 }