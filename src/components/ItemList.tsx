import { useState } from "react"
import styles from './ItemList.module.css'

interface Item {
    name: string,
    price: number,
}

function ItemList() {
    const [items, setItems] = useState<Item[]>([
        { name: 'たまご', price: 100 },
        { name: 'りんご', price: 160 },
    ])
    const [newItemName, setNewItemName] = useState<string>("")
    const [newItemPrice, setNewItemPrice] = useState<number>(0)

    const addItem = () => {
        if (newItemName === "" || newItemPrice === 0) { return }
        setItems([...items, { name: newItemName, price: newItemPrice}])
        setNewItemName("")
        setNewItemPrice(0)
    }

    return (
        <div>
            <div>ItemList</div>
            {items.map((item) => (
                <div key={item.name} className={item.price >= 500 ? styles.over500 : undefined}>
                    <div className="name">名前：{item.name}</div>
                    <div className="price">{item.price}円</div>
                    {item.price >= 10000 && <div>高額商品</div>}
                </div>
            ))}
            <div>
                <label>
                    名前
                    <input onChange={(e) => setNewItemName(e.target.value)} type="text" value={newItemName} />
                </label>
                <label>
                    価格
                    <input
                        onChange={(e) => setNewItemPrice(parseInt(e.target.value))}
                        type="number"
                        value={newItemPrice}
                    />
                </label>
                <button onClick={addItem}>add</button>
            </div>
        </div>
    )
}

export default ItemList