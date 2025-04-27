import { useState } from 'react';
import './App.css'

function App() {
const [inventory, setInventory] = useState([])

  const itemPool=[
  { id: 0, nombre: "Espada de Fuego", durabilidad: 84, calidad: 4 },
  { id: 1, nombre: "Escudo de Hierro", durabilidad: 72, calidad: 3 },
  { id: 2, nombre: "Arco Élfico", durabilidad: 59, calidad: 5 },
  { id: 3, nombre: "Capa de Invisibilidad", durabilidad: 66, calidad: 2 },
  { id: 4, nombre: "Amuleto del Sabio", durabilidad: 91, calidad: 5 },
  { id: 5, nombre: "Botas del Viento", durabilidad: 38, calidad: 3 },
  { id: 6, nombre: "Hacha del Trueno", durabilidad: 75, calidad: 4 },
  { id: 7, nombre: "Daga de Sombras", durabilidad: 47, calidad: 2 },
  { id: 8, nombre: "Báculo de Hielo", durabilidad: 53, calidad: 5 },
  { id: 9, nombre: "Casco del Guerrero", durabilidad: 64, calidad: 3 },
  { id: 10, nombre: "Guantes de Poder", durabilidad: 82, calidad: 4 },
  { id: 11, nombre: "Anillo del Caos", durabilidad: 29, calidad: 1 },
  { id: 12, nombre: "Lanza Sagrada", durabilidad: 77, calidad: 5 },
  { id: 13, nombre: "Ballesta Envenenada", durabilidad: 46, calidad: 2 },
  { id: 14, nombre: "Túnica Arcana", durabilidad: 88, calidad: 4 },
  { id: 15, nombre: "Collar del Lobo", durabilidad: 35, calidad: 3 },
  { id: 16, nombre: "Martillo del Destino", durabilidad: 93, calidad: 5 },
  { id: 17, nombre: "Grebas de Acero", durabilidad: 71, calidad: 4 },
  { id: 18, nombre: "Cinturón del Gigante", durabilidad: 58, calidad: 3 },
  { id: 19, nombre: "Orbe del Vacío", durabilidad: 26, calidad: 2 },
  { id: 20, nombre: "Libro de Hechizos", durabilidad: 44, calidad: 4 },
  { id: 21, nombre: "Yelmo Maldito", durabilidad: 19, calidad: 1 },
  { id: 22, nombre: "Espada Rúnica", durabilidad: 68, calidad: 4 },
  { id: 23, nombre: "Escudo Solar", durabilidad: 95, calidad: 5 },
  { id: 24, nombre: "Guadaña Oscura", durabilidad: 41, calidad: 2 }
];

 console.log(itemPool)
console.log('Inventario', inventory)

const spawnItem = () => {
setInventory(prevState => [...prevState, itemPool[Math.floor(Math.random()*itemPool.length)]])
}

  return (
    <>
     Hola
<button onClick={spawnItem}>Spawn Item</button>
    </>
  )
}

export default App
