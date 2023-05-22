import BackButton from "./BackButton";
import CardDealing from "./CardDealing";

const PlayPage = () => {
    return ( 
        <>
            {/* <div className="backgroundImagePage">
                <div style={{backgroundImage: `url(${backgroundImage})`, 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover",
                    height: "100vh"
                    }}>
                    <div>
                        <BackButton/>
                        <CardDealing/>
                    </div>
                </div>
            </div> */}

            <div className="main-container">
                <CardDealing/>
                <BackButton/>
            </div>
        </>
    );
}
 
export default PlayPage;