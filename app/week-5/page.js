import NewItem from "./newItem";
export default function Page(){
    return(
        <div className="w-full h-screen">
            <main className="flex justify-center w-full">
                
                <div className="bg-white flex justify-center w-36 p-2 m-4 rounded">

                <NewItem></NewItem>
                </div>
            </main>
      </div>
    );
  };