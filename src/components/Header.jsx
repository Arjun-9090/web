import { NavLink } from "react-router"

const Header = () => {
  return (
    <header className="bg-black text-white px-4 flex items-baseline justify-between py-2 ">
      <h1 className="text-2xl font-semibold  ">Demo</h1>
      <nav className="space-x-5">
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/Contact'}>Contact</NavLink>

      </nav>

    </header>
  )
}
export default Header