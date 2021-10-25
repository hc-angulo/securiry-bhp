import React from 'react'
import ArnesCondition from './ArnesCondition';
import CompleteCheckList from './CompleteCheckList';

const CheckList = ({arnesCondition, additionOfArnesConditions}) => {
    const estadoDelArnes = [
        {id:1, pregunta:'¿Pregunta N°1?', respuesta:'si'},
        {id:2, pregunta:'¿Pregunta N°2?', respuesta:'no'},
        {id:3, pregunta:'¿Pregunta N°3?', respuesta:'no'},
        {id:4, pregunta:'¿Pregunta N°4?', respuesta:'si'}, 
        {id:5, pregunta:'¿Pregunta N°5?', respuesta:'si'},
        {id:6, pregunta:'¿Pregunta N°6?', respuesta:'no'},
        {id:7, pregunta:'¿Pregunta N°7?', respuesta:'si'},
        {}
       ];
    
    
    return (
        <div>
            <h2>Verifica si el punto de anclaje cuenta con los siguientes requisitos:</h2>
            <br />
            <h4>Estado del Arnés</h4>
            <br/>
            <ol> { arnesCondition.length < 8 ?
                arnesCondition.map((condition) => {
                    return(
                          <ArnesCondition
                           key={condition.id}
                           condition={condition}
                           additionOfArnesConditions={additionOfArnesConditions}
                           estadoDelArnes={estadoDelArnes}
                            />
                    )
                    }
                    )
                    :
                <CompleteCheckList
                arnesCondition={arnesCondition}
                additionOfArnesConditions={additionOfArnesConditions}
                />
                }
            </ol>
        </div>
    )
}
export default CheckList;
