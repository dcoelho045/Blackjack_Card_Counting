import BackButton from "./BackButton";
import CardDealing from "./CardDealing";

const PlayPage = () => {
    return ( 
        <>
            <div className="main-container">
                <CardDealing/>
                <BackButton/>
            </div>

            <p> This is a test</p>
        </>
    );
}
 
export default PlayPage;