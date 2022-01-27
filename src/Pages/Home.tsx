import Navbar from "../Components/Navbar";

const Home = (): JSX.Element => {
  return (
    <div className="flex bg-[#a9d6e5] ]">
      <div className="bg-[#012a4a] sticky top-0 h-screen w-[20%] text-[#a9d6e5]">
        <Navbar />
      </div>
      <div className="flex flex-col ">
        <div className="h-screen">sarthak1</div>
        <div className="h-screen">sarthak2</div>
      </div>
    </div>
  );
};

export default Home;
