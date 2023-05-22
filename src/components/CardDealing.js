import cardImage from "../images/cards/AS.png"


const CardDealing = () => {
    return ( 
        <>
            {/* <div className="CardBeingDealt">
                <div style={{cardImage: `url(${cardImage})`, 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover",
                    height: "500px",
                    width: "200px"
                    }}>
                </div>
            </div> */}

            <div className="CardBeingDealt" style={{}}>
                <img style={{ width: 200, height: 280 }}src={cardImage}/>
            </div>
        </>
    );
}
 
export default CardDealing;