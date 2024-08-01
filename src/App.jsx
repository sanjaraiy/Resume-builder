import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom"
import Header from "./components/Header/Header";


function App() {
 
  const {user, isLoading, isSignedIn} = useUser();

  if(!isSignedIn && isLoading){
      return <Navigate to={'/auth/sign-in'}></Navigate>
  }


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
