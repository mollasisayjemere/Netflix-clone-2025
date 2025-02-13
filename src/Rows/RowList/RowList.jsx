// // RowList.jsx
// import React from "react";
// import Row from "../../Rows/Row/Row";
// import rowListStyle from "./RowList.module.css";
// import requests from "../../utils/Request";

// export const RowList = () => {
//   return (
//     <div className={rowListStyle.rowListContainer}>
//       <Row
//         title="Netflix Originals"
//         fetchUrl={requests.fetchNetflixOriginals}
//         isLargeRow
//       />
//       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
//       <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />{" "}
//       {/* Added a third row */}
//       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//       {/* Added a fourth row */}
//       {/* Add more rows for other categories */}
//     </div>
//   );
// };

// export default RowList;

// RowList.jsx
import React from 'react';
import Row from "../../Rows/Row/Row";
import rowListStyle from "./RowList.module.css";
import requests from '../../utils/Request';

export const RowList = () => {
  return (
    <div className={rowListStyle.rowListContainer}>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Popular TV Shows" fetchUrl={requests.fetchTvShow} />
      {/* Add more rows for other categories here */}
    </div>
  );
}

export default RowList;
