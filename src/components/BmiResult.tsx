import React from 'react';
import { IonCol, IonCardContent, IonCard, IonRow, IonAlert } from '@ionic/react';

const BmiResult: React.FC<{ result: undefined | number }> = props => {
    return (
        
        // {calulatedNtp && (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent>
                        <h2>Result BMI</h2>
                        {/* truyền hàm lấy kq bmi vào h2 */}
                        <h2>{props.result}</h2>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
        // )}
    );
};

export default BmiResult;