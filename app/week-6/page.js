// 'use client'; 

// import { useState } from 'react'; 
// import dogJson from './dogs.json'; 
// import Image from 'next/image'; 

// export default function Page() {
//     const [selectedDogId, setSelectedDogId] = useState(-1);
//     let dogs = [...dogJson];
//     dogs.sort((a, b) => a.name.localeCompare(b.name));

//     dogs = dogs.filter((dog) => dog.name.length > 5);

//     const handleClick = (id) => {
//         if (id === selectedDogId) {
//             setSelectedDogId(-1);
//         } else {
//             setSelectedDogId(id); 
//         }
//     };
    
//     return (
//         <main className="flex justify-center w-full">
//             <h1 className="text-3xl font-bold">Dogs</h1>
//             <ul>
//                 {dogs.map((dog) => (
//                     <li 
//                     key={dog.id}
//                     className={`py-2 m-2 ${dog.id === selectedDogId ? 'bg-gray-200' : 'bg-red-200'}`}
//                     onClick={() => handleClick(dog.id)}> 
//                         <h2>{dog.name}</h2>
//                         <p>{dog.description}</p>
//                         <p>
//                             <Image src={dog.image} alt={dog.name} width={600} height={400} />
//                         </p>
//                     </li>
//                 ))}
//             </ul>
//         </main>
//     );
// }
'use client';
import ItemList from './item-list';

import { useState } from 'react'; 

export default function Page() {
    return (
        <div className="w-full h-screen">
            <main className="flex w-full  bg-orange-300">
                <div className="flex justify-between w-100 p-2 m-4 rounded">
                    <ItemList />
                </div>
            </main>
        </div>
    );
}
