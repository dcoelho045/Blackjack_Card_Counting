import {useState} from 'react'
import oneS from "../images/cards/1S.png"
import twoS from "../images/cards/2S.png"
import threeS from "../images/cards/3S.png"
import fourS from "../images/cards/4S.png"
import fiveS from "../images/cards/5S.png"
import sixS from "../images/cards/6S.png"
import sevenS from "../images/cards/7S.png"
import eightS from "../images/cards/8S.png"
import nineS from "../images/cards/9S.png"
import tenS from "../images/cards/10S.png"
import JS from "../images/cards/11S.png"
import QS from "../images/cards/12S.png"
import KS from "../images/cards/13S.png"
import oneC from "../images/cards/1C.png"
import twoC from "../images/cards/2C.png"
import threeC from "../images/cards/3C.png"
import fourC from "../images/cards/4C.png"
import fiveC from "../images/cards/5C.png"
import sixC from "../images/cards/6C.png"
import sevenC from "../images/cards/7C.png"
import eightC from "../images/cards/8C.png"
import nineC from "../images/cards/9C.png"
import tenC from "../images/cards/10C.png"
import JC from "../images/cards/11C.png"
import QC from "../images/cards/12C.png"
import KC from "../images/cards/13C.png"
import oneH from "../images/cards/1H.png"
import twoH from "../images/cards/2H.png"
import threeH from "../images/cards/3H.png"
import fourH from "../images/cards/4H.png"
import fiveH from "../images/cards/5H.png"
import sixH from "../images/cards/6H.png"
import sevenH from "../images/cards/7H.png"
import eightH from "../images/cards/8H.png"
import nineH from "../images/cards/9H.png"
import tenH from "../images/cards/10H.png"
import JH from "../images/cards/11H.png"
import QH from "../images/cards/12H.png"
import KH from "../images/cards/13H.png"
import oneD from "../images/cards/1D.png"
import twoD from "../images/cards/2D.png"
import threeD from "../images/cards/3D.png"
import fourD from "../images/cards/4D.png"
import fiveD from "../images/cards/5D.png"
import sixD from "../images/cards/13D.png"
import sevenD from "../images/cards/6D.png"
import eightD from "../images/cards/7D.png"
import nineD from "../images/cards/8D.png"
import tenD from "../images/cards/9D.png"
import JD from "../images/cards/10D.png"
import QD from "../images/cards/11D.png"
import KD from "../images/cards/12D.png"

let runningCountValue = 0; 

const incrementRunningCount = () => {
    runningCountValue++;
};
  
const decrementRunningCount = () => {
    runningCountValue--;
};
  
const getRunningCountValue = () => {
    return runningCountValue;
};


const CardDealing = () => {
    const [showImages, setShowImages] = useState(false);
    const [randomDeal1, setRandomDeal1] = useState(0);
    const [randomDeal2, setRandomDeal2] = useState(0);
    const [randomDeal3, setRandomDeal3] = useState(0);
    const [randomDeal4, setRandomDeal4] = useState(0);

    // 2 to 6: +1   7 to 9: 0   10 to Ace: -1
    // 0-23: +1   24-35: 0  36-51: -1
    const playingCards = [oneS, oneC,  oneH, oneD, twoS, twoC, twoH, twoD, threeS, threeC, threeH, threeD, fourS, fourC, fourH, fourD, // 15
        fiveS, fiveC, fiveH, fiveD, sixS, sixC, sixH, sixD, sevenS, sevenC, sevenH, sevenD, eightS, eightC, eightH, eightD, nineS, nineC, // 33
        nineH, nineD, tenS, tenC, tenH, tenD, JS, JC, JH, JD, QS, QC, QH, QD, KS, KC, KH, KD]

    const adder = (rc) => {
        if(playingCards.indexOf(rc) <= 23){
            incrementRunningCount(); 
        }
        else if(playingCards.indexOf(rc) >= 36){
            decrementRunningCount();
        }
        console.log(getRunningCountValue());
    }


    const handleDealButtonClick = () => {
        const randomNum1 = Math.floor(Math.random() * 52);
        adder(playingCards[randomNum1]);
        setRandomDeal1(randomNum1);
        
        const randomNum2 = Math.floor(Math.random() * 52);
        adder(playingCards[randomNum2]);
        setRandomDeal2(randomNum2);
        
        const randomNum3 = Math.floor(Math.random() * 52);
        adder(playingCards[randomNum3]);
        setRandomDeal3(randomNum3);
        
        const randomNum4 = Math.floor(Math.random() * 52);
        adder(playingCards[randomNum4]);
        setRandomDeal4(randomNum4);
        
        setShowImages(true);
    }

    return ( 
        <>
            <div className="startButton">
                <button onClick={handleDealButtonClick}>Deal Cards</button>
            </div>
            {showImages && (
                <>
                    <div className="dealtCardDealer1" style={{top: "17%", left: "42.5%"}}>
                        <img style={{ width: 200, height: 280 }}src={playingCards[randomDeal1]} alt="dealerCard1"/>
                    </div>
                    <div className="dealtCardDealer2" style={{top: "22%", left: "45.5%"}}>
                        <img style={{ width: 200, height: 280 }}src={playingCards[randomDeal2]} alt="dealerCard2"/>
                    </div>
                    <div className="dealtPlayerCard1" style={{top: "50%", left: "42.5%"}}>
                        <img style={{ width: 200, height: 280 }}src={playingCards[randomDeal3]} alt="playerCard1"/>
                    </div>
                    <div className="dealtPlayerCard2" style={{top: "55%", left: "45.5%"}}>
                        <img style={{ width: 200, height: 280 }}src={playingCards[randomDeal4]} alt="playerCard2"/>
                    </div>
                    <div>
                        <p>{runningCountValue}</p>
                    </div>
                </>
            )}
        </>
    );
}
 
export {runningCountValue, CardDealing};