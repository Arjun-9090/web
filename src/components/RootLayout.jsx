import { Outlet } from "react-router"
import Header from "./Header"

const RootLayout = () => {
  return (
    <div >

      <Header />

      <main className="px-14 ">
        <Outlet />
      </main>





    </div>
  )
}
export default RootLayout