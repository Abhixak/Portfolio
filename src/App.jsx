import profileimg from "/img1.jpg";
import Nav from "./nav.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      {/* Back design */}
      <div className="bg-[#474554] fixed top-[-100px] opacity-[0.3] left-[-100px] z-1 rounded-[500px_30px_500px_300px] h-[200px] w-[250px]"></div>
      <div className="bg-[#474554] fixed top-[50px] opacity-[0.4] right-[-50px] z-1 rounded-[500px_30px_200px_300px] h-[200px] w-[150px]"></div>
      <div className="bg-[#474554] fixed top-[200px] opacity-[0.3] left-[-200px] z-1 rounded-[300px_550px_300px_400px] h-[500px] w-[450px]"></div>
      <div className="bg-[#474554] fixed top-[550px] opacity-[0.4] right-[-100px] z-1 rounded-[500px_750px_500px_800px] h-[200px] w-[250px]"></div>

      <section className="h-[45em] w-screen flex flex-col items-center">
        <img
          src={profileimg}
          alt="Profile Image"
          className="border-[2px] border-[#474554] !mt-20 relative z-20 h-[15em] w-[15em] rounded-[50%]"
        />
        <h1 className="text-[#474554] text-[50px] relative z-20">
          Abhishek Kumar
        </h1>
        <p className="text-[#474554] text-[16px] relative z-20">
          MERN STACK DEVELOPER
        </p>
        <p className="text-[#474554] text-[16px] relative z-20 text-center !mt-20 w-80">
          "Building scalable and dynamic web applications with MERN—where
          MongoDB powers the data, Express streamlines the backend, React
          enhances the frontend, and Node.js ensures seamless performance."
        </p>
      </section>
    </>
  );
}

export default App;
