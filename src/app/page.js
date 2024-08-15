"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../app/components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return (
    <div>
      <Nav/>
      This is the home page
    </div>
  );
}
