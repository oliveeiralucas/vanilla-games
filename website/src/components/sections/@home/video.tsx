export default function VideoBox() {
  return (
    <div className='relative z-30 md:px-0'>
      <div className='bg-[var(--color-gold)] text-darkBlue font-bold px-3 py-1 text-md rounded-t-md text-center font-display'>
        Explore o Universo
      </div>
      <div className='bg-black overflow-hidden rounded-b-md shadow-lg flex justify-center items-center'>
        <video
          src='/videos/intro-vanilla.mp4'
          className='max-w-[800px] w-full object-cover'
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}
