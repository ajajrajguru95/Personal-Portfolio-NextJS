'use client';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Recommendations = () => {
  const { data, error } = useSWR('/api/linkedin/recommendations', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {data.recommendations.map((recommendation) => (
          <li key={recommendation.id}>
            <h3>{recommendation.recommender.name}</h3>
            <p>{recommendation.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
