import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function DeeplyNestedComponent() {  
    const globalState = useSelector((state) => state);  
    const dispatch = useDispatch();  
    return (    
        <div>      
            {globalState.isLogged ? (        
                <button onClick={() => dispatch({ type: "SET_IS_LOGGED", payload: false })}>
                    Log out        
                </button>
            ) : (        
                <button onClick={() => dispatch({ type: "SET_IS_LOGGED", payload: true })}>
                    Log in
                </button>      
            )}
        </div>
    );
}