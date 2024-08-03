export default function Navbar() {
    return (
        <nav>
            <img src={`${process.env.PUBLIC_URL}/images/headerLogo2.png`} className="nav--logo" />
            <p>my food journal.</p>
        </nav>
    )
}