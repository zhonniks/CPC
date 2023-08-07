'use client'
import { useState } from "react";
import { Sources } from 'app/sourcesDisplayer';
import SourcesData from 'app/sources';
import Popup from 'app/popup';


export default function Page() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [selectedOpens, setSelectedOpens] = useState(null);

  const open = () => {
    window.open('https://calendar.google.com/', '_blank');
  };


  return (
    <div className='Page' >
      {SourcesData.map(opens => (
        <div key={opens.id} onClick={() => handleOpenPopup(opens)}>
          <Sources 
            key={opens.id}
            name={opens.name}
            uni={opens.uni}
            description={opens.description}
          />
        </div>
      ))}
      {isOpenPopup && <Popup opens={selectedOpens} onClose={handleClosePopup} />}
    </div>
  )
}
