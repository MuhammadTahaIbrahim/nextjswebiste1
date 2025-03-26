
import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {

    // await new Promise(executor: resolve => setTimeout(resolve, timeout:2000));

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '8fb1f909fcmsh8a02cf3bb544b20p1fbd8cjsna03f926b0218',
          'x-rapidapi-host': 'netflix-data.p.rapidapi.com'
        }
      };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = (data[0].episodes);
    // console.log(data);
    // const main_data = (data[0], data[1]);
    // console.log(data[0].episodes);

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                    {/* <Link href="/movie/jlkljks">go to </Link> */}
                    {
                        main_data && main_data.map((curElem) => {
                            return <MovieCard key={curElem.episodeId} {...curElem} />
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;


