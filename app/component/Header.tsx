import Login from './Login';

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center py-8 px-24">
      <div>LinkedIn App</div>
      <nav className="flex flex-row items-center gap-8">
        <ul>
            <li>
                about
            </li>
        </ul>
        <Login />
      </nav>
    </div>
  )
}
export default Header
