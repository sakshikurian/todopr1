import TodoList from "./components/Todo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EA5959] flex items-center justify-center">
      <div
        className="relative bg-white p-4 rounded-lg mb-4  shadow-[#00000040] "
        style={{ width: "950px", height: "702px" }}
      >
        <div className="absolute top-0 left-[230px] h-full border-l border-gray-200"></div>
        <TodoList />
      </div>
    </div>
  );
}
