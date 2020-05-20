// tự thêm useRef vào import dưới
import React, { useRef, useState } from "react";
// import { Redirect, Route } from 'react-router-dom'; xóa luôn cái này
// xóa , IonRouterOutlet, IonButton trong import dưới
// thêm icon phải import
import { homeOutline, appsOutline, key } from "ionicons/icons";

import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonCardContent,
  IonTextarea,
  IonText,
  IonFooter,
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonAlert,
} from "@ionic/react";
// note thêm IonHeader và IonContent vào trên

// tự thêm import icon vào NOTE
// import {calculatorOutline, refreshOutline } from 'ionicons/icons';

// thêm BmiControls từ component
import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";

// import { IonReactRouter } from '@ionic/react-router'; và cái này
// import Home from './pages/Home'; cái này củng xóa

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import InputControl from "./components/InputControl";

// tạo ionicframework: ionic start myApp tabs,cd myApp ionic serve

// chuyển () thành {} của App rồi return cho IonApp NOTE!!!!!!!!!!!!!!!!!!!!!!!!!!
const App: React.FC = () => {
  const [calulatedNtp, setCalculatedNtp] = useState<number>();
  const [error, seterror] = useState<string>();
  const [calcunits, setcalcunits] = useState<"mkg" | "ftlbs">("mkg");

  // hàm useRef look like get value input, nó được mình thêm vào ở trên cùng, dưới thẻ input set ref={}
  // thêm <HTMLIonInputElement> null như dưới để fix lỗi ref dưới thẻ input ref={}
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calulateNTP = () => {
    // ionic sự kiện theo kiểu reactjs ???????????????
    // const entereWeight = weightInputRef.current?.value;
    // const entereHeight = heightInputRef.current?.value;
    const entereWeight = weightInputRef.current!.value;
    const entereHeight = heightInputRef.current!.value;

    if (
      !entereWeight ||
      !entereHeight ||
      +entereWeight <= 0 ||
      +entereHeight <= 0
    ) {
      seterror("Please enter a valid input number!");
      return;
    }
    const weightConversionFactor = calcunits === "ftlbs" ? 2.2 : 1;
    const heightConversionFactor = calcunits === "ftlbs" ? 3.28 : 1;
    const weight = +entereWeight / weightConversionFactor;
    const height = +entereHeight / heightConversionFactor;
    const ntp = weight / (height * height);

    console.log(ntp);
    setCalculatedNtp(ntp);
  };

  const resetInput = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  const renderKQ = () => {
    const entereWeight = weightInputRef.current?.value;
    const entereHeight = heightInputRef.current?.value;
    if (!entereWeight || !entereHeight) {
      return;
    }
    const ntp = +entereWeight / (+entereHeight * +entereHeight);
    if (ntp + 1 < 17) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="tertiary" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>BMI ≤ 16: Gầy độ III</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    } else if (ntp + 1 < 18) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="primary" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>16 ≤ BMI => 17: Gầy độ II</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    } else if (ntp + 1 < 19) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="secondary" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>17 ≤ BMI => 18.5: Gầy độ I</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    } else if (ntp + 1 < 25) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="success" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>18.5 ≤ BMI => 25: Bình thường</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    } else if (ntp + 1 < 30) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="light" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>25 ≤ BMI => 30: Thừa cân</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    } else if (ntp + 1 < 35) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="warning" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>30 ≤ BMI => 35: Béo phì độ I</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    } else if (ntp + 1 < 41) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="danger" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>35 ≤ BMI => 40: Béo phì độ II</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    } else if (ntp + 1 > 40) {
      return (
        <IonRow>
          <IonCol>
            <IonItem color="dark" className="ion-padding-vertical">
              <IonLabel className="ion-text-center ion-text-uppercase">
                <h2>BMI >40: Béo phì độ III</h2>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      );
    }
  };

  const clearError = () => {
    seterror("");
  };

  const selectCalcUnitsHandler = (selectValue: "mkg" | "ftlbs") => {
    setcalcunits(selectValue);
  };

  return (
    <React.Fragment>
      {/* them 2 dấu thăng để thay đổi kiểu error */}
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {
            text: "Okay",
            handler: () => {
              clearError();
            },
          },
        ]}
      ></IonAlert>
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>NTP Calculator BMI (Body mass Index)</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding" color="">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl
                  selectValue={calcunits}
                  onSelectValue={selectCalcUnitsHandler}
                ></InputControl>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Your height ({calcunits === "mkg" ? "meters" : "feet"})
                  </IonLabel>

                  {/* bắt sự kiện */}
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  {/* position set định vị */}
                  <IonLabel position="floating">
                    Your weight ({calcunits === "mkg" ? "kg" : "lbs"})
                  </IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControls
              onCalculate={calulateNTP}
              onReset={resetInput}
            ></BmiControls>
            <BmiResult result={calulatedNtp} />
            {renderKQ()}
            {/* <IonRow>
            <IonCol>
              <IonItem color='tertiary'>
                <IonLabel>BMI ≤ 15.9: Gầy độ III</IonLabel>
              </IonItem>
              <IonItem color='primary'>
                <IonLabel>16 ≤ BMI => 17: Gầy độ II</IonLabel>
              </IonItem>
              <IonItem color='secondary'>
                <IonLabel>17 ≤ BMI => 18.5: Gầy độ I</IonLabel>
              </IonItem>
              <IonItem color='success'>
                <IonLabel>18.5 ≤ BMI => 25: Bình thường</IonLabel>
              </IonItem>
              <IonItem color='light'>
                <IonLabel>25 ≤ BMI => 30: Thừa cân</IonLabel>
              </IonItem>
              <IonItem color='warning'>
                <IonLabel>30 ≤ BMI => 35: Béo phì độ I</IonLabel>
              </IonItem>
              <IonItem color='danger'>
                <IonLabel>35 ≤ BMI => 40: Béo phì độ II</IonLabel>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel>BMI >40: Béo phì độ III</IonLabel>
              </IonItem>

            </IonCol>
          </IonRow> */}
          </IonGrid>
        </IonContent>

        <IonFooter>
          {/* thanh ngang */}
          <IonToolbar color="success">
            <IonTitle>NTP</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
