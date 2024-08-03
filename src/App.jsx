import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { supabase } from './config/supabase'; 

export default function App() {
  const [travelData, setTravelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('travelData').select('*');

      console.log("Fetched travel data:", data); 

      setTravelData(data || []);
      setIsLoading(false);
    };

    fetchData(); 
  }, []); 

  return (
    <div className='container'>
      <Navbar />
      <section className="cards-list">
        {isLoading ? (
          <p>Loading...</p> 
        ) : (
          travelData.map(item => (
            <Card key={item.id || item.locationName} item={item} /> 
          ))
        )}
      </section>
      <Footer />
    </div>
  );
}
