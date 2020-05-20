import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const InputControl: React.FC<{selectValue: 'mkg' | 'ftlbs'; 
                            onSelectValue: (value:'mkg' | 'ftlbs') => void;}>
                            = props => {

    const inputChangeHandler = (event: CustomEvent) =>{
        props.onSelectValue(event.detail.value);
    }                            
    return (
        <IonSegment value={props.selectValue} 
                    onIonChange={inputChangeHandler}>
            <IonSegmentButton value='mkg'>
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='ftlbs'>
                <IonLabel>
                    ft/lbs
                </IonLabel>
            </IonSegmentButton>
        </IonSegment>

    );
};

export default InputControl;