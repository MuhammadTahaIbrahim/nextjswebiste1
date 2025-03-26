// import Image from "next/image";
// import styles from "./page.module.css";
import React from "react";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
      <>
        <Herosection title={"LETS WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"}/>
      </>
  );
}
