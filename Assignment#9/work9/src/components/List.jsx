import Card from "./Card";

function List() {
    const person = [ 
    {Name:"Neo", job:"Bartender", hobby: "Kintsugi"},
    {Name:"Ping", job:"Engineer", hobby: "Listen to music"},
    {Name:"Graphic", job:"Musician", hobby: "Take a photo"},
    {Name:"May", job:"Baker", hobby: "Sleep"},
];
    return (
       <>
       {person.map((p) => {
        return <Card name={p.Name} job={p.job} hobby={p.hobby}></Card>
       }
       )}
       </>
    )
}
export default List;