import styles from "../style";
import movie  from "../assets/movie.png";

const Hero = () => {
  return (
    // Your Gateway to a World of Shows
    <section id="home" style={{paddingLeft:"2rem", paddingTop:"0rem", marginTop:"7rem"}} className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-0`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Your <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Gateway</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          to World of Shows.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our innovative approach curates the ultimate viewing experience, analyzing genres, ratings, and more to tailor your showtime just for you.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={movie} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
