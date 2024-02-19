import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import { getProducts } from "app/services/shopify"

interface CategoryProps {
  params: { categories: string[] },
  //searchParams: {}
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  //const categoryID = props.params.categories
  //console.log(props.searchParams);
  const products = await getProducts()

  return (
    <>
      {/* <div>Categoria dinámica: {categoryID}</div> */}
      <ProductsWrapper products={products} />
    </>
  )
}
