import { Metadata } from "next"
import { MainProducts } from "app/components/home/MainProducts"

export const metadata: Metadata = {
  title: "✨ Future world",
  description: "Welcome to the future world, an ecommerce from the century",
  keywords: ["ecommece", "future", "world", "technology"]
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}