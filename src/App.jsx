import { useState } from "react";
import "./App.css";
import { ITEM_POOL } from "./constants/itemPool";
import { ItemInfo } from "./components/ItemInfo";

function App() {
  const [inventory, setInventory] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const spawnItem = () => {
    if (inventory.length >= 6) return;
    setInventory((prevState) => [
      ...prevState,
      ITEM_POOL[Math.floor(Math.random() * ITEM_POOL.length)],
    ]);
  };

  const selectItem = (item) => {
    if (!item) return;
    setSelectedItem(item);
  };

  return (
    <>
      {selectedItem && <ItemInfo item={selectedItem} />}
      <div className="page-container">
        <div className="inventory-container">
          {inventory?.map((item) => (
            <div className="inventory-item" onClick={() => selectItem(item)}>
              <img className="item-photo" src={ITEM_POOL[2].sprite} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <button className="spawn-button" onClick={spawnItem}>
          Spawn Item
        </button>
      </div>
    </>
  );
}

export default App;
