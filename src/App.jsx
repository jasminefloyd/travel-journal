import Footer from './components/Footer'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data/travelData.jsx'



export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    

    return (
        <>
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
        <Footer />
        </>
    )
}