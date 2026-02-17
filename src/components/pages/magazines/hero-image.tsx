import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative aspect-video w-full">
      <Image
        src="/sample/featured-blog.png"
        alt="Featured Blog"
        fill
        className="object-cover"
        priority={true}
      />
    </div>
  );
}

export default HeroImage;
