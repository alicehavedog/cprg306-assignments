export default function Item({name, quantity, category}){
        return(
            <section>
                <h3 className="text-x1 font-bold text-green-100">{name}</h3>
                <p>{quantity}</p>
                <p>{category}</p>
            </section>

        );
    }