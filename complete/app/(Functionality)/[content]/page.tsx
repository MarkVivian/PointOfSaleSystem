import ContentPage from "@/components/FunctionalityContent/ContentPage"

interface propInterface{
  params : {
      pages : string
  },
  searchParams : {
      searchQuery : string
  }
}

const Content = ({params, searchParams}:propInterface) => {
  
  return (
    <>
      <ContentPage pages={params.pages} searchQuery={searchParams.searchQuery} />
    </>
  )
}

export default Content
