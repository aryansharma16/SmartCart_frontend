// import { useState, useEffect, useContext, createContext } from "react";
// // import axios from "axios";
// // import { set } from "mongoose";

// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: null,
//     token: "",
//   });
//   useEffect(() => {
//     const data = localStorage.getItem("auth");
//     if (data) {
//       const parseData = JSON.parse(data);
//       setAuth({
//         ...auth,
//         user: parseData.user,
//         token: parseData.token,
//       });
//     }
//     // esint-disable-next-linesghst  // just add to comment o stop the keep renderong this effect
//   }  ,[]);
//   //default axios
//   return (
//     <AuthContext.Provider value={[auth, setAuth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // custom hook
// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };
