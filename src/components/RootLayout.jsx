import { Outlet } from "react-router"
import Header from "./Header"

const RootLayout = () => {
  return (
    <div >

      <Header />

      <main>
        <Outlet />
      </main>





    </div>
  )
}
export default RootLayout