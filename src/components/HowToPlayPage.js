import BackButton from "./BackButton";

const HowToPlayPage = () => {
    return ( 
        <>
            <div>
                <BackButton style={{}}/>
            </div>
            <div className="howToPlayPage">
                <h1>How To Play</h1>
                <div className="instructions"> 
                    <p>You will be dealt two cards. The dealer will also deal himself two cards but you 
                        can only see one of them. You will always be prompted to enter the running count. However, you have the choice
                        on whether you would like to enter the running count immediately or after several hands. The running count can be 
                        obtained by adding 1 (+1) for cards 2 through 6 and subtracting 1 (-1) from cards 10 through Ace. 
                        The true count can be obtained by dividing the running count by the decks remaining. So in theory as 
                        the true count increases, the amount of 10s and Aces that will appear will increase so you should increase your bet size.
                        This trainer is designed to help you increase your speed at obtaining the correct running count.</p>
                    <p></p>
                    <p></p>
                    <p>created by Daniel Coelho</p>
                </div>
            </div>
        </>
        
    );
}
 
export default HowToPlayPage;