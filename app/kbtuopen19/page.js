'use client'

import 'app/archiveSideBar.css';
import Link from "next/link";

const MyApp = () => {

  return (
    <div className="flex-1 w-full border-zinc-100 bg-white overflow-hidden flex">
      <div className="w-1/4 bg-black container">
        <div className="divider"></div>
        <h1 className="title">Archive Opens</h1>
        <div className="divider"></div>

        <ul className="pdf-list">
        <li >
          <Link href='/archive'>
            <p >KBTU OPEN 2021</p>
          </Link>
          </li>
          <li>
          <Link href='/kbtuopen2020'>
            <p >KBTU OPEN 2020</p>
          </Link>
          <Link href='/kbtuopen19'>
            <p>KBTU OPEN 2019</p>
          </Link>
          <Link href='/archive'>
            <p>KBTU OPEN 2018</p>
          </Link>
          </li>
        </ul>
      </div>

      <div className="w-3/4 bg-white p-4">
  
          <div className="mt-8 w-full md:w-2/3 mx-auto"> 
            <iframe
              src='/kbtu19.pdf'
              title="Selected PDF"
              width="100%"
              height="900px"
            />
          </div>
      </div>
    </div>
  );
};

export default MyApp;
