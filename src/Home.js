import styles from './Home.module.css';

function Home() {
    return (
      <section>
<div className={styles.home}>

<div className={styles.intro}>
    <h1>Hello World</h1>
    <h2>I'm Thabo Theko</h2>
    <h3>A Front-end Web Developer</h3>
</div>

<div className={styles.buttons}>
    <button>Download Resume</button>
    <button>View Projects</button>
</div>


</div>

      </section>
   
   
    );
  }
  
  export default Home;