import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-6">
        {/* <h1 className="font-heading text-pretty text-center text-[29px] font-semibold tracking-tighter text-gray-900 sm:text-[32px] md:text-[46px]">Pulse</h1> */}
        <div className="mb-2">
          <h1 className="font-heading text-center text-[29px] font-semibold tracking-tighter  sm:text-[32px] md:text-[46px]">
            Pulse
          </h1>
          <p className="text-light text-center">
            The Most Minimal and Fastest Conversion App.
          </p>
        </div>
      </div>

      <Dropzone />
    </div>
  );
}
