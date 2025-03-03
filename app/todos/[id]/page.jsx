import DeleteTodo from "@/components/DeleteTodo";

async function TodosPage(){
  const response = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store',
  });

  const data = await response.json();

  console.log(data);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <table className="w-auto bg-gray-500 border border-white rounded-lg overflow-hidden"> 
        <thead className="bg-gray-800 text-white uppercase text-sm leading-normal">
          <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-white text-sm font-light">
          {data.todos.map(todo => (
            <tr key={todo.id} className="border-b border-white hover:bg-gray-600">
                <td className="py-3 px-6">{todo.id}</td>
                <td className="py-3 px-6">{todo.name}</td>
                <td className="py-3 px-6">
                  <DeleteTodo id={todo.id} />
                </td>
            </tr>
          ))}
        </tbody>
      </table>

    </section>
  )
}

export default TodosPage;