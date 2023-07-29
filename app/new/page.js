'use client'
import { useState } from "react";
import { Opens } from 'app/opens';
import opensContent from 'app/opensContent';
import Popup from 'app/popup';

export default function Page() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [selectedOpens, setSelectedOpens] = useState(null);

  const handleOpenPopup = (opens) => {
    setSelectedOpens(opens);
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedOpens(null);
    setIsOpenPopup(false);
  };

  return (
    <div className='Page'>
      {opensContent.map(opens => (
        <div key={opens.id} onClick={() => handleOpenPopup(opens)}>
          <Opens
            key={opens.id}
            image={opens.image}
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

