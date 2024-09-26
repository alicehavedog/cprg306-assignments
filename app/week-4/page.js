import Counter from "./counter";
export default function Page(){
    return(
        <div className="w-full h-screen bg-orange-300">
            <main className="flex justify-center w-full">
                
                <div className="bg-white flex justify-between w-36 p-2 m-4 rounded">

                <Counter></Counter>
                </div>
            </main>
      </div>
    );
  };