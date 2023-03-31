import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

export default function Dashboard() {
  const addTodo = () => {};
  return (
    <section className="bg-primary flex h-screen items-center justify-center">
      <main className="my-8 bg-white px-8 flex flex-col items-center sm:px-6 py-3 md:w-3/4 max-h-[40vh] lg:h-[30vh] lg:w-[36%]">
        <h1 className="text-3xl md:text-3xl text-[#4F575C] text-center tracking-tight font-bold">
          TODOLIST
        </h1>
        <div className="flex items-center space-x-1 mt-3">
          <input
            type="text"
            className="todo-input border-2 border-[#999874] text-lg italic text-primary font-medium text-center px-3 py-2 w-56 sm:w-80 md:w-[24rem] focus:outline-none"
            placeholder="Enter todo"
          />

          <button className="bg-primary hover:bg-opacity-50 text-white w-[50px] h-[3rem] focus:outline-none">
            <AddIcon fontSize="small" />
          </button>
          <button className=" hidden  bg-primary hover:bg-opacity-50 text-white w-20 h-[3.2rem] focus:outline-none">
            <DoneIcon />
          </button>
        </div>
        <div className="text-gray-300 text-xl mt-6 ">
          <p>Sleep all day.. There's nothing to do</p>
        </div>
      </main>
    </section>
  );
}
