import { socialMedia } from "../images/constant";
import { profile } from "../images/constant.js";

const Hero = () => {
  return (
    <section
      className="flex justify-between items-center max:lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ml-5">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          I&apos;m
          <span className="text-red-500 "> Full</span>
          <span className="text-red-500 "> Stack</span> Developer
        </h2>
        <p className="mt-4 mb-4 lg:max-w-lg info-text">
          Passionate and skilled Node.js Full Stack Developer with over 2 years
          of experience in crafting robust, scalable web applications.
          Proficient in both front-end and back-end development, specializing in
          leveraging Node.js for server-side logic and API development. Highly
          adept at utilizing modern front-end frameworks like React.js for
          building dynamic user interfaces. Experienced in database management
          and integration, ensuring seamless functionality across all layers of
          web applications.
        </p>
        <div className=" mt-8 flex gap-5">
          {/* <Button lable="View details" /> */}
          {socialMedia.map((social) => (
            <div
              key={social}
              className="flex justify-center items-center w-11 h-11 bg bg-white hover:bg-blue-500 rounded-full cursor-pointer"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <img src={social.src} alt={social.alt} width={27} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center mt-5">
        <img
          src={profile}
          alt="book"
          width={400}
          height={100}
          className="object-contain rounded-full shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
