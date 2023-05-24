import { useState } from "react";
import {runningCountValue, CardDealing} from "./CardDealing";

const RunningCount = () => {
    const [userRunningCountValue, setUserRunningCountValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userRC = {userRunningCountValue};
        console.log(userRC);
    }

    return ( 
        <>
            <div>
                <CardDealing/>
            </div>
            <div className="runningCountInput">
                <form onSubmit={handleSubmit}>
                    <label>Running Count:</label>
                    <input
                        type="text"
                        required
                        value={userRunningCountValue}
                        onChange={(e) => setUserRunningCountValue(e.target.value)}
                    />
                    <button>Enter</button>
                </form>
                <p>{userRunningCountValue}</p>
            </div>
        </>
    );
}
 
export default RunningCount;