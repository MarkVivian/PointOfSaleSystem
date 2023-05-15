import Database from "@/Database/Database"
import ContentPage from "@/components/FunctionalityContent/ContentPage"
interface propInterface{
  params : {
      pages : string
  },
  searchParams : {
      searchQuery : string
  }
}

const Content = async ({searchParams}:propInterface) => {
  const DB = new Database()
  DB.ConnectToDatabase()

  return (
    <>
      <ContentPage searchQuery={searchParams.searchQuery}/>
    </>
  )
}

export default Content
