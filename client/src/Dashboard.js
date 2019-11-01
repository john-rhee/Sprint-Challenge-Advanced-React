import React, {useState} from 'react';

function Dashboard(props) {  

  const [value, setValue, handleChanges] = useInput();
  
  //// testing custom hook ////
  console.log(value)

  return (
    <div> 
      <h2 data-testid="testid">Form</h2>
        <form>
            <input 
            onChange={handleChanges}
            value={value}
            placeholder='form using custom hook'
            />
        </form>
    </div>
  );
 } 

//// custom Hook ////
const useInput = initialValue => {
    
const [value, setValue] = useState(initialValue);
   
const handleChanges = e => {
    setValue(e.target.value);
};

return [value, setValue, handleChanges];
};

export default Dashboard;