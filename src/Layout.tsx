import {useState} from 'react'

import {Link, Outlet, useLocation, useOutletContext} from 'react-router-dom';
// import {UserAvatar} from "./components/UserAvatar";
import {Bars3Icon} from "@heroicons/react/24/outline";
// import AvatarMenu from "./components/AvatarMenu";

type ContextType = { slideOverOpen: boolean, setSlideOverOpen: Function, setSlideOverAvailable: Function };
export function useSlideOver() {
  return useOutletContext<ContextType>();
}

export default function Layout() {
  const [slideOverOpen, setSlideOverOpen] = useState<boolean>(false);
  const [slideOverAvailable, setSlideOverAvailable] = useState<boolean>(false);
  const rootHref = '/'
  const name = 'Pieter Parker'

  return (
      <div className="min-h-full">

        {/* MOBILE */}
        <header className="mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-4 sticky top-0 z-40 bg-white/80 lg:hidden backdrop-filter backdrop-blur firefox:bg-opacity-90">
          <div className="flex items-center justify-between ">
/            <Link to={rootHref} className="w-40">
              <img
                  src=''
                  alt="Product Pic"
              />
            </Link>
            <button className={slideOverAvailable ? 'block': 'invisible'}>
              <Bars3Icon className="h-9 w-9 text-gray-600" onClick={ () => {setSlideOverOpen(true)}} />
            </button>
          </div>

        </header>

        <div className="px-4 sm:px-6 md:px-8 pt-8 lg:hidden">
        </div>


        {/* DESKTOP */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
            <div className="flex items-center justify-between h-32">
                <Link to={rootHref} className="flex-none w-40">
                    <img
                      src='/shopping.jpg'
                      alt="shopping pic"
                    />
                </Link>
                <div className="grow flex items-center justify-end max-w-6xl space-x-4">
                    <div className="lg:w-80 w-64">
                    </div>
                    {/* <AvatarMenu button={<UserAvatar name={name} bgColor={'bg-orange-500'}/>}/> */}
                </div>
            </div>
        </header>

        <main className="">
          <Outlet context={{slideOverOpen, setSlideOverOpen, setSlideOverAvailable}} />
        </main>
      </div>
  )


}


