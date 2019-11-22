# ReactReduxSkeleton

Skeleton of the React Native Redux app which is common in almost all of app.

**REDUX**
---
This contains all the common redux structure like `Redux Store` , combine `reducer`, `constants` and `actions`. 

**Forms**
---
It contains **SignIn** and **SingUP** form. It was created using _formik_. 

You can set `validation` in >>util/yupValidationsSchema.js

**Component**
---
It has almost all of general purpose components like `showError`, `showToast`, `CButton` (Custom Button), `CText` (Custom Text) and others for form, list etc related.

**Router**
---
`Router.js` contains router.


<br />
<br />

**USES AND INSTALLATION**
---
All you have to do is, copy all of file in your project nad install following dependencies :

**Navigation:**
>npm install react-navigation --save   

>npm install react-native-gesture-handler react-native-reanimated react-native-screens   --save   

>npm install react-navigation-stack react-navigation-drawer --save

Note: Follow installation guide from ref

**Redux:**
>npm install redux react-redux redux-thunk --save

**Form:** 
>npm install formik --save   

>npm install recompose --save   

>npm install react-native-formik --save  

>npm i react-native-keyboard-aware-scroll-view --save

>npm install yup --save

**Utils:**
>npm install --save @react-native-community/netinfo && cd ios/ && pod install   

>npm install @react-native-community/async-storage --save && cd ios/ && pod install   

>npm install react-native-vector-icons --save   


Note: Follow installation guide from ref for { storage, netinfo , icon}

>npm install prop-types --save  

>npm i react-native-root-toast --save   


**API:**
>npm install axios --save