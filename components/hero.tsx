import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Stanley</h1>
          <p className="hero-description">
            I'm a software developer in Malawi. I love open-source, writing,
            reading, and exploring places when bored <br />
            <br />
            This website is my digital garden contains notes for my past self
          </p>
        </div>
        <div className="hero-img">
          <Image
            priority
            src="/images/bio.png"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
