import styles, { layout } from "../style";
import CustomTag from "./CustomeTag";
const SingleSection1 = ({ data }) => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="singleImage">
        <img
          src={data?.image?.original}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>{data?.name}</h2>
      <div className="tags ml-0">
        {data?.genres?.slice(0, 3).map((item) => {
            return <CustomTag text={item} color={"red"} />;
        })}
        </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 five-line-ellipsis`}>{data?.summary}</p>

      <div className="mt-2 flex flex-row flex-wrap ml-0" >
        <div className=""  style={{color:"#fff"}}>
          <i style={{ color: "yellow" }} class="bx bxs-star-half"></i>{" "}
          <span style={{ marginLeft: "5px" }}>
            {data?.rating.average === null ? 0 : data?.rating.average} Rating 
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default SingleSection1;
