
import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) =>  {
  
    // const {episodeId, title} = curElem;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={curElem.interestingMoment._342x192.webp.value.url}  alt={curElem.title} width={260} height={200}/>
                </div>

                <div className={styles.card_data}>
                    <h2>{curElem.title}</h2>
                    <p>
                        {`${curElem.contextualSynopsis.text.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${curElem.episodeId}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                    
                </div>
            </div>    
        </>
  );
};

export default MovieCard;


