const Home = () => {
    return ( 
        <div className="homePage">
            <h1>Blackjack Card Counting Trainer</h1>
            <div className="playLinks">
                <a href="/play">PLAY</a>
            </div>
            <div className="howToPlay" style={{padding: "30px"}}>
                <a href="/how-to-play">How To Play</a>
            </div>
        </div>
    );
}
 
export default Home;