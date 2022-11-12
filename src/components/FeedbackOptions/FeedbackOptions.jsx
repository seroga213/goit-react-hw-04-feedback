import React from "react";
import PropTypes from 'prop-types';
import { Container, ContainerListBtm } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, addFeedback }) => {
    return (
        <Container>
        {options.map(name => {
            return (
                <ContainerListBtm
            key = { name }
            name = { name }
            onClick = {addFeedback}
        >
        {name}
    </ContainerListBtm>
);
        })}
    </Container>
    );
}
//         <Container>
//             {options.map(item => (
//                 <ContainerList key={item} >
//                     <ContainerListBtm type="button" name={item} onClick={addFeedback}>{item}
//                     </ContainerListBtm>
//                 </ContainerList>
//             ))}
//         </Container>
//     )
// }

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    addFeedback: PropTypes.func.isRequired,
}
