import styles from "../style";


const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Let’s try our service now!</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Try one of ours free trails or sign up now and get 20% off for the first month.
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary button-gradient rounded-[10px] outline-none ${styles}`}>
                Get Started
            </button>
        </div>
    </section>
);

export default CTA;