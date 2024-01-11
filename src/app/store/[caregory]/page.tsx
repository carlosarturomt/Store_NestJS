interface CategoryProps {
  params: { caregory: string },
  searchParams: {}
}

export default function Category(props: CategoryProps) {
  const categoryID = props.params.caregory

  return (
    <div>Categoria: {categoryID}</div>
  )
}
