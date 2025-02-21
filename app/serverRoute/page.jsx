import clientComponent from "@/components/clientComponent"


const serverPage = () => {

    console.log('This page has been rendered on the server')

  return (
    <div>
        <div>server Page</div>
        <clientComponent />
    </div>
  )
}

export default serverPage