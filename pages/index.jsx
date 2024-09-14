import Header from "@/components/header"
import styles from "./Home.module.scss"
import Banner from "@/components/banner"
import About from "@/components/About"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <About />
      <Footer />

    </div>
    
  )
  
}
