
const imgUrl = process.env.PUBLIC_URL + '/images/headerLogo2.png';
export default function Navbar() {
    return (
        <nav>
            <img src={imgUrl} className="nav--logo" />
            <p>my food journal.</p>
        </nav>
    )
}