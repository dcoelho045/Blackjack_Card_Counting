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
                        can only see one of them. Every 5 rounds you will be promted to answer what the current 
                        running and true count is. The running count can be obtained by adding 1 (+1) for cards 2 through 6 
                        and subtracting 1 (-1) from cards 10 through Ace. The true count can be obtained by dividing the runnign count
                        by the decks remaining. So in theory as the true count increases, the amount of 10s and Aces that will appear 
                        will increase so you should increase your bet size.</p>
                </div>
            </div>
        </>
        
    );
}
 
export default HowToPlayPage;