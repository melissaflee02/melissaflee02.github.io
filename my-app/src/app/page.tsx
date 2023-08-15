import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
         Welcome to my page! &nbsp;
        </p>
        <a href="../public/Melissa_Lee_Resume.pdf">Resume</a>
      </div>

      <div className={styles.center}>
        <p>
          <b>Hi! I'm Melissa</b>, a rising senior at <a href="https://www.stanford.edu/" className={styles.link}>Stanford University</a> pursuing 
          a dual Bachelor's and Master's degree in Computer Science (Artificial Intelligence and Computer Systems). This past summer, 
          I interned at <a href="https://www.riotgames.com/en" className={styles.link}>Riot Games</a>, architecting and implementing an end-to-end 
          match simulation framework enabling all game teams across <i>League of Legends</i>, <i>Valorant</i>, and R&D initiatives to iteratively test and 
          optimize their matchmaking algorithms. This complemented my previous year's experience integrating an industry-leading BERT Natural Language 
          Processing model into Riot's name-checking pipeline, improving offensive name detection by 50%!<br /> <br />

          In my free time, I enjoy growing the sport of <a href="https://www.wrestling.life/yes-we-can" className={styles.link}>women's wrestling</a> and 
          learning more about the programming world through independent coding projects. Feel free to check out my <a href="https://github.com/melissaflee02" className={styles.link}>Github</a>!<br /> <br />

          Having struggled with social interaction at a young age, I am passionate about leveraging technology to advance the human interaction
          model. In pursuit of this goal, I am exploring ways AI can facilitate, and participate in, healthy human interaction.
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
