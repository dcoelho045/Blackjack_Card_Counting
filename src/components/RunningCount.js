import { useState } from "react";
import {runningCountValue, CardDealing} from "./CardDealing";

const RunningCount = () => {
    const [userRunningCountValue, setUserRunningCountValue] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userRC = parseInt(userRunningCountValue);
        if(userRC === runningCountValue){
            setResult("Correct!");
        }    
        else{
            setResult(`Incorrect, the count was: ${runningCountValue}`);
        }
    }

    return ( 
        <>
            <div>
                <CardDealing/>
            </div>
            <div className="runningCountInput">
                <form onSubmit={handleSubmit}>
                    <label>Running Count</label>
                    <input
                        type="text"
                        required
                        value={userRunningCountValue}
                        onChange={(e) => setUserRunningCountValue(e.target.value)}
                    />
                    <button>Enter</button>
                </form>
                <p>{result}</p>
            </div>
        </>
    );
}
 
export default RunningCount;