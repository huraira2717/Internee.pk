import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Contect from '../../Contect/Map/Map'
import { Link } from 'react-router-dom'
// import img from '../img/1689237835480-removebg-preview.png'


const navigation = [
  { name: 'Home', href: 'Home', current: true },
  { name: 'About', href: '', current: false },
  { name: 'Internship', href: '', current: false },
  { name: 'Contact', href:"Contect", current: false },
  { name: 'LMS', href: '', current: false },
  { name: 'Job Portal', href: '', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow h-32 mt-8">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-8 py-4 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between md:w-full">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-auto  cursor-pointer"
                  src={"https://portal.internee.pk/assets/logo.png"}
                  alt="Your Company"
                />
              </div>
              <div className="md:hidden">
                <Disclosure.Button className="bg-gray-800 p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <div className="flex space-x-4 pr-32">
                {navigation.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'text-purple-500' : 'text-gray-500 hover:text-purple-500',
                      'rounded-md px-4 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                    {console.log(item.href)}
                  </Link>
                ))}
              </div>
              <button className='text-white bg-purple-500 w-48 h-10 rounded-3xl'>Intern Portal</button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 bg-green-800 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <button className='text-white bg-purple-500 w-full h-10 rounded-3xl'>Intern Portal</button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  )
}
