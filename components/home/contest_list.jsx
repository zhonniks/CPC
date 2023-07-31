import 'components/home/contest_list.css'; 
import 'components/home/side_bar.css'
import { useEffect, useState } from 'react';

const ContestList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/contest.list');
        if (!response.ok) {
          throw new Error('Failed to fetch contests');
        }
        const data = await response.json();

        // Filter contests with end times in the future
        const currentTime = Math.floor(Date.now() / 1000);
        const filteredContests = data.result.filter(
          (contest) => contest.startTimeSeconds > currentTime
        );

        setContests(filteredContests);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContests();
  }, []);

  return (
    <div className="container">
      <div className="divider"></div> 
      <h1 className="title">Upcoming Contests</h1>
      <div className="divider"></div> 
      <ul className="contest-list">
        {contests.map((contest) => (
          <li key={contest.id} className="contest-item">
            <a
              href={`https://codeforces.com/contest/${contest.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contest-link"
            > 
              {contest.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default ContestList;

