interface CategoryProps {
  params: { categories: string[] },
  searchParams: {}
}

export default function Category(props: CategoryProps) {
  const categoryID = props.params.categories
  //console.log(props.searchParams);
  return (
    <div>Categoria dinámica: {categoryID}</div>
  )
}
