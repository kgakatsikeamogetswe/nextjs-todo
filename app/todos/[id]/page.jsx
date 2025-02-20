//dynamic route
const page = ({params}) => {
  return (
    <div>Param ID: {params.id} </div>
  )
}

export default page


//static route

export async function getStaticParams() {
    return [
        {id: "1"},
        {id: "2"},
        {id: "3"},
    ]
}