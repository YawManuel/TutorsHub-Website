import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

// Real app screenshots (390×844 @2x) inside a CSS device frame.
export default function Phone({ src, alt, priority, className = '' }: Props) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__screen">
        <Image
          src={src}
          alt={alt}
          width={780}
          height={1688}
          priority={priority}
          sizes="(max-width: 720px) 70vw, 300px"
        />
      </div>
    </div>
  );
}
