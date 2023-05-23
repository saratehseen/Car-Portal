import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link'

const cartype = [
  { name: 'Electrical', href: '/electrical'},
  { name: 'Sports', href: '/sports' },
  { name: '2 Wheels', href: '/wheels'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'menuColor' : 'menuColor',
              'group bg-white inline-flex items-center font-medium'
            )}
          >
            <span className="menuNavLink">Cars</span>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-3/4 mt-3 px-2 w-screen sm:px-0 max-w-xs">
              <div className="shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden borderMenu">
                <div className="relative grid gap-6 bg-white px-4 py-3
                 sm:gap-8 sm:p-8">
                  <div>
                    <h3 className="text-sm tracking-wide uppercase"><span className="submenuTitle">Car Type</span></h3>
                    <ul role="list" className="mt-4 space-y-6 pl-0">
                      {cartype.map((item) => (
                        <li key={item.name} className="flow-root">
                          <Link href={item.href}>
                          <a
                            className="-m-3 p-2 flex items-center text-sm transition ease-in-out duration-150 no-underline submenuNavLink"
                          >
                            <span>{item.name}</span>
                          </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}