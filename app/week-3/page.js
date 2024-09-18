// import Dog from "./dog";

// export default function Page(){
//     let dog1 = {
//         name: "Buddy",
//         breed: "Australian Shepherd",
//         age: 11,
//         color: "brown",
//     };

//     let dog2 ={
//         name: "Kali",
//         breed: "Corgi",
//         age: 5,
//         color: "orange",
//     };

//     let dog3 = {
//         name: "Ginger",
//         breed: "Sausage Dog",
//         age: 1,
//         color: "black",

//     };

//     return(
//         <main className="m-4">
//             <h2 className="text-2x1 font-bold"> Meet the dogs</h2>
//             <Dog>
//                 name = {dog1.name}
//                 breed = {dog1.breed}
//                 age = {dog1.age}
//                 color = {dog1.color}
//             </Dog>
//             <Dog>
//                 name = {dog2.name}
//                 breed = {dog2.breed}
//                 age = {dog2.age}
//                 color = {dog2.color}
//             </Dog>
//         </main>
//     );

// }

import ItemList from "./item-list";
export default function Page(){
    return(
      <main className="bg-slate-950">
        <ItemList></ItemList>
      </main>
    );
  };