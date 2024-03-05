import "./App.css";
import meow_pic from "./assets/meow.png";
function App() {
  return (
    <>
      <nav className="flex bg-purple-800  justify-between rounded-3xl items-center">
        <img
          className="w-10 h-10 rounded-2xl mx-2 my-2"
          src="https://plus.unsplash.com/premium_photo-1709307940890-3ee3727b2afc?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Das"
        />
        <ul className="px-4 py-2 flex space-x-3 bg-purple-800 text-white text-base font-medium rounded-t-2xl rounded-b-2xl">
          <li>Home</li>
          <li>Page</li>
          <li>Sections</li>
          <li>Docs</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="bg-purple-300 flex justify-between items-center">
        <div className="left pl-10">
          <h1 className="text-purple-900 font-bold text-6xl">
            Best cat food in the town
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            fuga molestiae placeat nemo ex dicta! Corrupti,
          </p>
          <div className="buttons mt-4 flex w-60 gap-2">
            <button className="bg-purple-400 text-white rounded-2xl px-2 py-2 hover:bg-purple-700">
              Buy Now
            </button>
            <button className="bg-purple-400 text-white rounded-2xl px-2 py-2 hover:bg-purple-700">
              Contact Us
            </button>
          </div>
        </div>
        <div className="right">
          <img src={meow_pic} className="" />
        </div>
      </div>
    </>
  );
}

export default App;
