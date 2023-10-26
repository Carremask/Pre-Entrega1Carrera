import CardWidget from "./CardWidget/CardWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>MASK.</h3>
            <div>
                <button>Buzos</button>
                <button>Remeras</button>
                <button>Pantalones</button>
            </div>
            < CardWidget />
        </nav>
    )
}

export default NavBar