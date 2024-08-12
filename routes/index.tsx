import ColorSwatch from "../islands/ColorSwatch.tsx";

export default function Home() {
  return (
    <>
      <h1 class="text-4xl text-center py-2 px-2 font-bold mb-6">
        Color palette generator
      </h1>

      <section class="max-w-sm py-2 px-4">
        <h2 class="text-2xl mb-4">Edit your palette</h2>
        <form action="" class="grid gap-4">
          <div class="grid gap-1">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="awesome palette #1"
            />
          </div>

          <ColorSwatch
            colorName="Background"
            defaultColor={[0.2, 0.5, 220]}
          />

          <ColorSwatch
            colorName="Primary"
            defaultColor={[0.2, 0.5, 120]}
          />

          <ColorSwatch
            colorName="Secondary"
            defaultColor={[0.6, 0.3, 110]}
          />
        </form>
      </section>
    </>
  );
}
