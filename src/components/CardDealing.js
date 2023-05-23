import dealerCard1 from "../images/cards/AS.png"
import dealerCard2 from "../images/cards/AH.png"
import playerCard1 from "../images/cards/2C.png"
import playerCard2 from "../images/cards/KD.png"

const CardDealing = () => {
    const baseImageAddressDealer1 = "../images/cards/##.png";

    return ( 
        <>
            <div className="startButton">
                <button>Deal Cards</button>
            </div>
            <div className="dealtCardDealer1" style={{top: "17%", left: "42.5%"}}>
                <img style={{ width: 200, height: 280 }}src={dealerCard1} alt="dealerCard1"/>
            </div>
            <div className="dealtCardDealer2" style={{top: "22%", left: "45.5%"}}>
                <img style={{ width: 200, height: 280 }}src={dealerCard2} alt="dealerCard2"/>
            </div>
            <div className="dealtPlayerCard1" style={{top: "50%", left: "42.5%"}}>
                <img style={{ width: 200, height: 280 }}src={playerCard1} alt="playerCard1"/>
            </div>
            <div className="dealtPlayerCard2" style={{top: "55%", left: "45.5%"}}>
                <img style={{ width: 200, height: 280 }}src={playerCard2} alt="playerCard2"/>
            </div>
        </>
    );
}
 
export default CardDealing;

// check - import the 52 images of the cards
//       - create a string that can be concatenated so that random cards can be selected
//       - figure out how to hide and then show two sets of hands and their layouts
