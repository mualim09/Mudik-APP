import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { isLogedin } from '../../models/userModel'

import Header from '../layout/header'
import { SortDropdown } from '../../components/SortDropdown'
import { Search } from '../../components/input'

import SectionTroubleshoot from './SectionTroubleshoot'

const Troubleshoot = () => {
  const router = useRouter();

  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const logedInStatus = await isLogedin()
      await setLogedIn(logedInStatus);
      if (!logedInStatus) {
        router.push('/login');
      }
    })()
  },[])

  if (!logedIn) return false;
  return (
    <>
      <Header title="Troubleshoot" hasMoreButtons
      additionalComponent={
        <>
          {/*<ButtonSort className="text-black mr-4" text="Semua rute" medium />*/}
          <SortDropdown placeholder="Semua rute" options={['Cilacap', 'Yogyakarta', 'Malang']} />
          <Search medium />
        </>
      } />
      <main className="px-4 py-2 grow">
        <SectionTroubleshoot />
      </main>
    </>
  );
}

export default Troubleshoot;