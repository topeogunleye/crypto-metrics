/* This example requires Tailwind CSS v2.0+ */

import { CogIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCryptos } from '../redux/crypto/crypto';

export default function Header() {
  const [search, setSearch] = useState('');
  const cryptos = useSelector((state) => state.cryptosReducer.cryptos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(filterCryptos(cryptos, search));
  };

  return (
    <header className="bg-white border border-stone-200 shadow divide-y divide-stone-200">
      <div className="py-2 px-8 max-w-7xl mx-auto md:flex items-center justify-between space-x-4 space-y-4 md:space-y-0">
        <div className="">
          <Link to="/">
            <h1 className="text-2xl font-bold text-gray-900">Crypto Tracker</h1>
          </Link>
        </div>

        <div id="meals-counter" />

        <form id="submit">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <SearchIcon className="h-6 w-6" />
              </button>
            </span>
            <input
              type="search"
              id="search"
              className="w-full md:w-96 py-2 text-sm text-gray-900 rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900 border-2"
              placeholder="Find a crypto currency"
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleSubmit}
            />
          </div>
        </form>

        <div className="font-bold text-sm w-20 flex justify-between">
          <MicrophoneIcon className="h-6 w-6 cursor-pointer" />
          <CogIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
