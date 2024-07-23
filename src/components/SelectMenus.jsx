import { useContext } from 'react';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';

import {
  CheckIcon,
  ChevronUpDownIcon
} from '@heroicons/react/20/solid';

import { SelectTechnologyContext } from '../context/SelectTechnologyContext.jsx';



export default function SelectMenus() {

  const { selected, setSelected, technologiesArray } = useContext(SelectTechnologyContext);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-pointer rounded-md bg-gray-500 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <img alt="" src={selected.logo} className="h-5 w-5 flex-shrink-0 rounded-full" />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {technologiesArray.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-cyan-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <img alt="" src={item.logo} className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {item.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-black group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
