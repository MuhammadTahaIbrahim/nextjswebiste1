
import Link from "next/link";
import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const DynamicMovie = async({params}) =>  {
    
    const id = params.id;
    console.log(id);
    // const url = `https://netflix-data.p.rapidapi.com/season/episodes/?ids=${id}&offset=0&limit=25`;
    const url = "https://netflix-data.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25";
    // const url = `https://netflix-data.p.rapidapi.com/season/episodes/?ids=${id}&offset=0&limit=25`;

    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '8fb1f909fcmsh8a02cf3bb544b20p1fbd8cjsna03f926b0218',
          'x-rapidapi-host': 'netflix-data.p.rapidapi.com'
        }
      };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].episodes;
    // console.log(main_data);

    // Find the specific episode based on the id
  const episode = main_data.find((ep) => ep.episodeId === id);

//   if (!episode) {
//     return <div>Episode not found.</div>;
//   }

    return (
      <>
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix \ <span>{episode.summary.type}</span></h2>
            <div className={styles.card_section}>
                <div>
                    <Image alt={episode.title} src={episode.interestingMoment._342x192.webp.value.url} width={600} height={300}/>
                </div>
                <div>
                    <h1>{episode.title}</h1>
                    <p>{episode.contextualSynopsis.text}</p>
                </div>
                
            </div>
        </div>
       
      </>
  );
};

export default DynamicMovie;


