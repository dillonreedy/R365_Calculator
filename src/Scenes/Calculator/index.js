import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import TextField from '../../Components/TextField/index';
import ButtonGrid from '../../Components/ButtonGrid/index';
import CalculationService from '../../Services/CalculationService';

function Calculator() {
    const [textFieldValue, setTextFieldValue] = useState('');
    const [errorThrown, setErrorThrown] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleTextFieldChange = (evt) => {
        setTextFieldValue(evt.target.value);
    };

    const handleInputClick = (evt, num) => {
        setTextFieldValue(textFieldValue + num);
    };

    const handleActionClick = (evt, action) => {
        try {
            var result = CalculationService.calculate({
                action: action,
                input: textFieldValue,
            });
            setTextFieldValue(result);
            setErrorThrown(false);
            setErrorMsg('');
        }
        catch (e)
        {
            setErrorThrown(true);
            setErrorMsg(e.message);
        }
    };

    return (  
    <div>
        <Box p={5} display="flex" justifyContent="center">
            <Box width="400px">
                <TextField value={textFieldValue}
                           onChange={handleTextFieldChange}
                           error={errorThrown}
                           errorText={errorMsg}
                           />
                <Box display="flex" direction="row">
                    <Box width="75%">
                            <ButtonGrid buttons={"7894561230,".split('')}
                                       onClick={handleInputClick}
                                       color="primary"
                            />
                    </Box>
                    <Box width="25%">
                            <ButtonGrid buttons={"+".split('')}
                                       onClick={handleActionClick}
                                       color="default"
                            />
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
    );
}

export default Calculator;
  