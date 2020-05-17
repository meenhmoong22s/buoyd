import React from 'react';
import { IonCol, IonButton, IonIcon, IonRow } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void; }> = props => {
    
    return (
        <IonRow>
            <IonCol className='ion-text-lefl'>
                {/* set sự kiện onClick theo cú pháp dưới */}
                <IonButton onClick={props.onCalculate}  >
                    {/* slot set vtri của icon , name tên icon name='calculator-outline' là cú pháp trong JS,
              react phải gọi icon={tenicon mình import ở trên}  */}
                    <IonIcon slot='start' icon={calculatorOutline}></IonIcon>
              Calculate
            </IonButton>
            </IonCol>
            <IonCol className='ion-text-right'>
                <IonButton onClick={props.onReset}>
                    {/* slot set vtri của icon , name tên icon name='calculator-outline' là cú pháp trong JS,
              react phải gọi icon={tenicon mình import ở trên}  */}
                    <IonIcon slot='start' icon={refreshOutline}></IonIcon>
              Reset
            </IonButton>
            </IonCol>   
        </IonRow>
    );
};

export default BmiControls;