import React from 'react';
import { IonCol, IonCardContent, IonCard, IonRow, IonAlert } from '@ionic/react';

const BmiResult: React.FC<{ result: number| undefined }> = props => {
    return (
        
        // {calulatedNtp && (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className='ion-text-center'>
                        <h2>Result BMI</h2>
                        {/* truyền hàm lấy kq bmi vào h2 */}
                        <h1>{props.result?.toFixed(2)}</h1>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
        // )}
    );
};

export default BmiResult;