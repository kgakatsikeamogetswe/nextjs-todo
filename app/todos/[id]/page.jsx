async function TodosPage(){
  const response = await fetch('http://localhost:3000/api/todos')
  const data = await response.json()
  console.log(data)
  return (
    <div>todo Page</div>
  )
}

export default TodosPage