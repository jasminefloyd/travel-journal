import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { supabase } from './config/supabase'; // Adjust the path if necessary

export default function App() {
    const [travelData, setTravelData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from('travelData')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setTravelData(data);
            }
        };

        fetchData();
    }, []);

    const cards = travelData.map(item => (
        <Card key={item.id} item={item} />
    ));

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
    );
}
