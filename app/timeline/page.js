import React from 'react';
// import {VerticalTimeline}  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import "app/timeline.css"
const App = () => {
  return (
    <div class="containers">
  <div class="timeline">
    <ul>
      <li>
        <div class="timeline-content">
          <h3 class="date">2006-2007</h3>
          <h1>First KZ team in ICPC world Finals</h1>
          <img src="https://live.staticflickr.com/1614/26736326695_05903ef273_b.jpg" alt="Timeline Image" className="timeline-image" />
          <p>The first season when a team from Kazakhstan made it to the World Finals was 2005-2006. It was a Kazakh-British Technical University team (Nurzhan Bakibayev, Dilyara Issamadiyeva and Khairosh Yerzhan)</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">2012-2013</h3>
          <h1>13th place overall - is the highest place in standings</h1>
          <img src="https://www.archive.inform.kz/fotoarticles/20121207175906.jpg" alt="Timeline Image" className="timeline-image" />
          <p>It was noteworthy that two (!) Kazakhstan teams advanced to the final of the competition – Almaty IITU (Bolshakov, Kovalenko, Kutybaev) and Kazakh-British TU 1 (Aitbayev, Almakhan, Satylkhanov), securing the 13th and 15th places among all participants in the semifinals</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">2014-2015</h3>
          <img src="https://sun9-16.userapi.com/impf/DuMEijX1E_Ka4aASdMMzdRa6ylwQyqdBLerTvg/Qr5eVkDkznQ.jpg?size=510x382&quality=96&sign=737f7ea8fb871fc2a588640d8f9a258e&type=album" alt="Timeline Image" className="timeline-image" />
          <h1>The last season when KZ teams advanced to the finals till 2018</h1>
          <p>2014-2015 - is the last season when our teams advanced to the finals, with the last team representing Nazarbayev University (Dikhanov, Kanapin, Zhaxybay). </p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">2018</h3>
          <h1>The return of KBTU teams to the ICPC World Finals after 2013.</h1>
          <img src="https://sun9-52.userapi.com/impf/ne6X54znrwJpTdAdgT4piT780nDWaAYeWgmpTQ/TaKDP0ibgZ4.jpg?size=510x408&quality=96&sign=f62f5dc25d6cee126bc8712af1eea1fb&type=album" alt="Timeline Image" className="timeline-image" />
          <p>On April 19th, the main event of the year in the world of competitive programming took place in the capital of China – the final of the ACM ICPC 2018 World Championship. Our region, NEERC, was represented by 16 teams, including the team Kazakh-British TU1 (Alan Amanov, Zharas Khan Aman, Nurlan Zhussupov).</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">2021</h3>
          <h1>The successful performance of IITU students at the ICPC Northern Eurasia Final 2021.</h1>
          <img src=" https://iitu.edu.kz/media/images/2022-11-14_10.30.43.width-500.jpg" alt="Timeline Image" className="timeline-image" />
          <p>This year, the team representing Kazakhstan consisted of students from the International University of Information Technologies - Abay Baimukanov, Batyr Sardarbekov, Parassat Kyzyrkanov - and their coach Aibar Kuanyshbay.</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">2023</h3>
          <h1>Cpfed</h1>
          <img src="https://cdn.nur.kz/images/1120/9fd2903ff14378b5.jpeg" alt="Timeline Image" className="timeline-image" />
          <p>In Kazakhstan, a Federation of Sports Programming has been established with Bagdat Mussin, the Minister of Digital Development, Innovation, and Aerospace Industry, becoming its leader.</p>
        </div>
      </li>
    </ul>
  </div>
</div>
  );
}

export default App;
