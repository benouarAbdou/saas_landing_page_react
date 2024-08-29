import styles from "../styles";
import { content } from "../assets";
const Content = () => {
  return (
    <section className={`${styles.paddingX}  ${styles.paddingY} `}>
      <div
        className={`  ${styles.paddingTop}  md:px-32 px-6 bg-[#FDF5DF] rounded-[20px]`}
      >
        <img src={content} className="w-full rounded-t-[20px]" alt="" />
      </div>
    </section>
  );
};

export default Content;
