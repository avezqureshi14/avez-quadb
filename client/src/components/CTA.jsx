import styles from "../style";
import Button from "./Button";

const CTA = ({data}) => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 mb-0 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Watch it now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need , is to just click on Watch Now ! , and you will be with your favourite show
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mb-0 mt-10`}>
      <Button data={data}/>
    </div>
  </section>
);

export default CTA;
