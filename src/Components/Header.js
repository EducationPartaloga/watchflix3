
import Logo from "./Logo"
import Menu from "./Menu"


export default function Header() {

    return (
        <div className="flex items-center max-w-7xl mx-auto">
            <Logo/>
            <Menu/>
        </div>
        
    )
}