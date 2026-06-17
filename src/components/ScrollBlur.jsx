export default function ScrollBlur() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-32 backdrop-blur-[12px] [-webkit-mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-32 backdrop-blur-[12px] [-webkit-mask-image:linear-gradient(to_top,black_20%,transparent_100%)] [mask-image:linear-gradient(to_top,black_20%,transparent_100%)]" />
    </>
  )
}
