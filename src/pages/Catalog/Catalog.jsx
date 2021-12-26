import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards'
import PageSwitcher from '../../components/ui/PageSwitcher/PageSwitcher';
import Layout from '../../components/Layout/Layout';
import { selectIsLoading, selectOffers, selectShownCategories } from '../../store/data/reducer';

const shownItemCount = 50
const Catalog = () => {
  console.log('Render Catalog')

  const isLoading = useSelector(selectIsLoading)
  const offers = useSelector(selectOffers)
  const shownCategories = useSelector(selectShownCategories)

  const [currentPage, setCurrentPage] = useState(1)

  if (isLoading) return <div>Загрузка</div>
  const filteredOffers = shownCategories.reduce((result, id) => result.concat(offers[id]), [])

  return (
    <Layout>
      {/* <Tags tags={categories}/> */}
      <Cards cards={filteredOffers.slice(shownItemCount * (currentPage - 1), shownItemCount * currentPage)}/>
      <PageSwitcher itemCount={filteredOffers && filteredOffers.length} shownItemCount={shownItemCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Layout>
  );
}

export default Catalog
