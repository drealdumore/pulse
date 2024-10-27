import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className="text-5xl font-medium text-center">Pulse</h1>
        <p className="text-light text-center">
          Powerful file conversion app that supports a wide range of formats for
          images, videos, and audio. Experience fast and reliable conversions
          with a sleek user interface.
        </p>
      </div>

      <Dropzone />
    </div>
  );
}
