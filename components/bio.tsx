import Image from "next/image";
export default function AuthorBio() {
  return (
    <div className="author-bio">
      <div className="author-image">
        <Image
          priority
          src="/images/bio.png"
          alt="Picture of the author"
          width={400}
          height={400}
        />
      </div>
      <div className="author-details">
        <p>
          My details all come here here and I will write about it very soon when
          I am finished
        </p>
      </div>
    </div>
  );
}
