export default function Item({ name, quantity, category }) {
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };
    return (
        <section className="mb-4">
            <h3 className="text-xl font-bold text-green-700">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </section>
    );
}
