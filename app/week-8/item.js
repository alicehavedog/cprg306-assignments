export default function Item({ name, quantity, category, onSelect }) {
    // Function to handle item selection (e.g., when clicked)
    const handleClick = () => {
        if (onSelect) {
            onSelect({ name, quantity, category });
        }
    };

    return (
        <section className="mb-4" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h3 className="text-xl font-bold text-green-700">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </section>
    );
}
