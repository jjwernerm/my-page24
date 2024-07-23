import {
  NavLink,
} from "react-router-dom";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react';

import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

import { 
  navigationArray, 
  userData, 
  userNavigationArray 
} from '../data/DataNavbar.jsx';

export default function Navbar() {

  return (
    <>

      {/********** min-width: 768px;  menu **********/}
      <Disclosure as="nav" className='h-navbar m-4 mx-4 fixed top-0 left-0 right-0 z-50 rounded-lg shadow-md shadow-gray-700 bg-gray-800'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="My Logo"
                  src="https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page24/logo.svg"
                  className="h-16 w-16"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-white font-medium">
                  {navigationArray.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => isActive ? "bg-gray-900 rounded-md p-2"
                        : "hover:bg-gray-700 rounded-md p-2"}
                    >
                      {item.icon}
                      {' '}
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/********** Profile dropdown **********/}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Abrir menú del perfil</span>
                      <img alt="My Photo" src={userData.imageUrl} className="h-12 w-12 rounded-full" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-md ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in shadow-gray-700"
                  >
                    {userNavigationArray.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          className="block px-4 py-2 text-gray-800 data-[focus]:bg-gray-700 hover:text-white"
                        >
                          {item.icon}
                          {' '}
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>

            {/* ********** */}
            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Abrir menú</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/********** max-width: 768px;  menu ***********/}
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 text-white font-medium">
            {navigationArray.map((item) => (              
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => isActive ? "bg-gray-900 rounded-md block p-2"
                  : "hover:text-gray-300 hover:bg-gray-700 rounded-md block p-2"}
              >
                {item.icon}
                {' '}
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/********** Profile not dropdown **********/}
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img alt="My Photo" src={userData.imageUrl} className="h-10 w-10 rounded-full" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">{userData.name}</div>
                <div className="text-sm font-medium leading-none text-gray-400">{userData.email}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigationArray.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-4 py-2 text-white data-[focus]:bg-gray-700 hover:text-white hover:bg-gray-700"
                >
                  {item.icon}
                  {' '}
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};
