// import React from 'react'
// import { Route, Redirect } from 'react-router-dom'
// export const ProtectedRoute = ({isAuth: isAuth, component: Component, ...rest}) => {
//     return (
//         <Route {...rest} render={(props)=>{
//             if(isAuth){
//                 return <Component />
//             }else{
//                 return <Redirect to={{pathname:'/', state:{from: props.location}}} />
//             }
//         }}/>
//     )
// }
