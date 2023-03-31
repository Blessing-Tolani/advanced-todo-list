import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import {
  addTodo,
  editTodo,
  completeTodo,
  removeTodo,
  removeCompletedTodo,
} from '../TodoReducer';
import ProgressBar from '../progress-bar';

export default function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  const [todo, setTodo] = useState('');
  // used -1 as initial value because no todo can have an id of -1
  const [todoId, setTodoId] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoAction, toggleAction] = useState('add');

  const addUserTodo = () => {
    if (todo.length) {
      const todoItem = {
        id: Math.floor(Math.random() * 100),
        item: todo,
        completed: false,
      };
      dispatch(addTodo(todoItem));
      setTodo('');
    }
  };

  const updateTodo = () => {
    dispatch(editTodo({ id: todoId, item: todo }));
    setTodo('');
    setTodoId(-1);
    toggleAction('add');
  };

  return (
    <section className="bg-primary flex h-screen items-center justify-center">
      <main className="my-8  bg-white px-4 flex  flex-col items-center sm:px-10 py-3 w-full sm:w-3/4 h-auto lg:h-auto lg:max-h-[70vh] lg:w-[38%]">
        <h1 className="text-2xl md:text-3xl text-[#4F575C] text-center tracking-tight font-bold">
          TODOLIST
        </h1>
        <div className=" items-center w-full grid grid-cols-[8fr,1fr] space-x-1 mt-3">
          <input
            type="text"
            ref={inputRef}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="todo-input border-2 border-[#999874] text-lg italic text-primary font-medium text-center px-3 py-2  focus:outline-none"
            placeholder="Enter todo"
          />

          <button
            onClick={addUserTodo}
            className={`${
              todoAction === 'add' ? '' : 'hidden'
            } bg-primary hover:bg-opacity-50 text-white w-[3.125rem] h-[3rem] focus:outline-none`}
          >
            <AddIcon fontSize="small" />
          </button>
          <button
            onClick={updateTodo}
            className={`${
              todoAction === 'edit' ? '' : 'hidden'
            } bg-primary hover:bg-opacity-50 text-white w-[3.125rem] h-[3rem] focus:outline-none`}
          >
            <DoneIcon fontSize="small" />
          </button>
        </div>

        {todos?.length ? (
          <div className="mt-4 w-full h-full">
            <div className="w-full max-h-[40vh] sm:max-h-[40vh] overflow-y-auto focus:outline-none divide-y border-y">
              {todos?.map((todo) => (
                <div
                  key={todo?.id}
                  className={`p-2 flex items-center justify-between space-x-4 w-full ${
                    todo?.completed ? '' : 'bg-[#F0F9FE]'
                  }`}
                >
                  <div className="flex items-center space-x-3 ">
                    <input
                      type="checkbox"
                      className="checkbox cursor-pointer"
                      onClick={() => dispatch(completeTodo(todo))}
                    />
                    <p
                      className={`text-primary text-sm text-left ${
                        todo?.completed ? 'line-through' : ''
                      }`}
                    >
                      {todo?.item}
                    </p>
                  </div>
                  <div className="flex items-center text-[1rem] font-semibold space-x-2 text-gray-300">
                    <button
                      onClick={() => {
                        setTodo(todo?.item);
                        toggleAction('edit');
                        inputRef?.current?.focus();
                        setTodoId(todo?.id);
                      }}
                    >
                      <EditIcon fontSize="inherit" />
                    </button>
                    <button
                      onClick={() => {
                        dispatch(removeTodo(todo));
                        console.log(todos);
                        localStorage.setItem('todoList', JSON.stringify(todos));
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:flex sm:items-center sm:justify-between">
              <ProgressBar
                current={todos.filter((todo) => todo.completed === true).length}
                total={todos.length}
              />
              {todos.some((todo) => todo.completed === true) && (
                <button
                  onClick={() => dispatch(removeCompletedTodo())}
                  className="flex smMax:justify-between sm:space-x-1 bg-[#4D99BB] smMax:w-full  smMax:mt-4 text-white px-4 h-9 items-center text-sm"
                >
                  <span>Remove Checked</span>
                  <CloseIcon fontSize="small" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-gray-300 h-[103px] flex items-center text-lg mt-6">
            <p>Sleep all day.. There's nothing to do</p>
          </div>
        )}
      </main>
    </section>
  );
}
