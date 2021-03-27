import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';
function App(props) {
  const data = [
    { id: 1, name: "Samsung M10s" , title: "Samsung M10s", description: "Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details", price: "16,000", image:"download.jpeg"},
    { id: 2, name: "Redmi Note7", title: "Redmi Note7" , description: " Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details ", price: "15000", image:"download.jpeg"},
    { id: 3, name: "One plus" , title:"One plus", description: "Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details  ", price: "16000", image:"download.jpeg"},
    { id: 4, name: "Apple iphone8s" , title:"Apple iphone8s", description: "Inclusive of all taxes Fastest delivery: Saturday, March 27 Order within 26 mins Details  ", price: "16000", image:"download.jpeg"},
  ];
  return (
    <div className="App">
      {data.map((item,index) => {
        return <Card key={data.id} title={item.title} description={item.description} image={item.image} price = {item.price} />
      })}
    </div>
  );
}

export default App;
