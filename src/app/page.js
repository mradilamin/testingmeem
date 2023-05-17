"use client"
import { CategoryItem } from './components/CategoryItem'
import Following from './components/Following'
import HomeBanner from './components/HomeBanner'
import ProductAllItem from './components/ProductAllItem'
import ProductItemInSlide from './components/ProductItemInSlide'
import { TopItem } from './components/TopItem'
import MainLayout from './layout/MainLayout'

export default function Home() {
  return (
    <>
  
    <MainLayout >
      <HomeBanner />
      <TopItem />
      <CategoryItem  />

      <ProductItemInSlide />

      <Following />
      <ProductAllItem />


    </MainLayout>
    </>
  )
}
