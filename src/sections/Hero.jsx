import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container mx-auto flex items-center justify-between max-lg:flex-col-reverse">
          {/* Left Side - Text Content */}
          <div className="relative z-2 max-w-512 max-lg:max-w-388 text-left max-lg:mb-10">
            <div className="caption small-2 uppercase text-p3">Video Editing</div>
            <h1 className="mb-6 h3 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              {/* Typewriter Effect */}
              <Typewriter
                words={['Amazingly simple', 'Fast and Powerful', 'Easy to Use']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Explore it now</Button>
            </LinkScroll>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative max-w-[640px] w-full flex justify-center max-lg:max-w-[80%]">
            <img
              src="/images/hero3.png"
              className="w-full h-auto object-contain"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
