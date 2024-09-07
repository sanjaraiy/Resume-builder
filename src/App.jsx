import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom"
import Header from "./components/header/Header";
import { Toaster } from "@/components/ui/sonner"

function App() {
 
  const {user, isLoading, isSignedIn} = useUser();

  if(!isSignedIn && isLoading){
      return <Navigate to={'/auth/sign-in'}></Navigate>
  }


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster />
    </>
  )
}

export default App
