// import React, { useState } from 'react';
// import { FormControlLabel } from '@material-ui/core';
// import { Checkbox } from '@material-ui/core';

// import './style.css';

// export default function App() {
//   let initialState = {
//     symbol: true,
//     numbers: 15,
//     uppercase: true,
//     lowercase: true
//   };

//   const [checkBoxStates, setCheckBoxStates] = useState(initialState);

//   const handleChange = changedParameter => {
//     setCheckBoxStates(prevState => ({
//       ...prevState,
//       [changedParameter]: !checkBoxStates[changedParameter]
//     }));
//   };
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checkBoxStates.symbol}
//             onChange={() => handleChange('symbol')}
//             name="checkedA"
//             color="primary"
//           />
//         }
//         label="Symbols"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checkBoxStates.uppercase}
//             onChange={() => handleChange('uppercase')}
//             name="checkedB"
//             color="primary"
//           />
//         }
//         label="Uppercase"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checkBoxStates.lowercase}
//             onChange={() => handleChange('lowercase')}
//             name="checkedA"
//             color="primary"
//           />
//         }
//         label="Lowercase"
//       />
//       <button onClick={() => console.log(checkBoxStates)}>Get State</button>
//     </div>
//   );
// }
