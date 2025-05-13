"use client"

import Link from "next/link"
import styles from "./library.module.css"

const videos = [
  { id: "4NgRHtqGa8c", title: "Mutual Funds vs PMS: Why Most Investors Choose the Simpler Path!" },
  { id: "t6usdblgWvA", title: "What the Top 1% NRIs Are Doing With ₹50 Lakhs in 2025" },
  { id: "6a-1aeQZ9P8", title: "Mark Mobius Moves 95% to Cash | Why India May Emerge Stronger" },
  { id: "_RNrINmBuNY", title: "India vs USA Bond Market 2025: Where Should You Invest?" },
  { id: "Dg2kRFYbeqM", title: "What really happened at IndusInd Bank? A ₹2,100 crore derivatives loss" },
  { id: "dW7Vmp_HuuE", title: "How NRIs Can Invest in PMS (Step-by-Step)" },
  { id: "w79FkSfNIpw", title: "3 Key Mistakes you Must Avoid While Selecting PMS" },
  { id: "od0veNAto1E", title: "Diversification Is Killing Your Investment Portfolio — Here's Why" },
  { id: "UlA39A6bvTM", title: "What Are Alternative Investment Funds (AIFs)? A Simple Guide for HNIs" },
  { id: "u5d4OV7cuoQ", title: "PMS Fees Explained Simply | Hurdle Rate & High Water Mark Made" },
  { id: "X6gbJDoWge8", title: "Taxation in 2025: Don't Miss These Key Changes!" },
  { id: "gxU96FmAO20", title: "Mutual Fund vs PMS: Which Investment Style Suits You Best?" },
  { id: "wMH08nSgv-I", title: "Vodafone Idea's ₹2.16 Lakh Cr Debt: A Deep Dive" },
  { id: "P_SF9CuO70s", title: "SEBI's New ₹10 Lakh Investment Scheme | SIF Explained" },
  { id: "sdkeM63wnTI", title: "High-Income NRIs: Pay Zero Tax on Mutual Funds (Legally!)" },
  { id: "veOTOHAUwZA", title: "PMS vs Mutual Fund – Want to grow your wealth faster" },
  { id: "PFdAFE8Zv10", title: "What is Scuttlebutt Investing? | Smart Investing" },
  { id: "qlqf6XrU9xA", title: "Portfolio Management Explained! Take Control of Your Investments" },
]

export default function LibraryPage() {
  return (
    <div className="relative min-h-screen">
      <div className={styles.background}></div>
      <div className={styles.backgroundTexture}></div>

      <div className="relative z-10">
        <h1 className={styles.categoriesTitle}>Investment Insights</h1>

        <section className={styles.carousel}>
          <div className={styles.carouselContainer}>
            {videos.map((video) => (
              <div key={video.id} className={styles.carouselItem}>
                <Link href={`https://www.youtube.com/shorts/${video.id}`} target="_blank" rel="noopener noreferrer">
                  <img
                    className={styles.carouselItemImg}
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                  />
                  <div className={styles.carouselItemDetails}>
                    <div className={styles.controls}>
                      <span>▶</span>
                    </div>
                    <h5 className={styles.detailsTitle}>{video.title}</h5>
                    <h6 className={styles.detailsSubtitle}>Bharat Alternates</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
