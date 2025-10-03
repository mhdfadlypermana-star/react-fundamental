import List from "./assets/List"


function App() {

  const fruits = [
    {id: 1,name: "Apel",calories: 120},
    {id: 2,name:"Pisang",calories: 150},
    {id: 3,name:"Semangka",calories: 96},
    {id: 4,name:"Melon",calories: 40}];

    const vegetables = [
    {id: 5,name: "Kol",calories:25 },
    {id: 6,name:"Bayam",calories: 40},
    {id: 7,name:"Kungkang",calories: 50},
    {id: 8,name:"Gory",calories: 120}];

  return(<>
    {fruits.length > 0 && <List items={fruits} category="Fruits" />}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
);
}

export default App
