import { useComputed, useSignal } from "@preact/signals";
import Chroma from "chroma-js";

interface ColorSwatchProps {
    defaultColor: [number, number, number];
    colorName: string;
}

export default function ColorSwatch(
    { defaultColor, colorName }: ColorSwatchProps,
) {
    const lightness = useSignal(defaultColor[0]);
    const chroma = useSignal(defaultColor[1]);
    const hue = useSignal(defaultColor[2]);

    const okLCHColor = useComputed(
        () => [lightness.value, chroma.value, hue.value],
    );

    const hexColor = useComputed(() =>
        Chroma.oklch(
            okLCHColor.value[0],
            okLCHColor.value[1],
            okLCHColor.value[2],
        ).hex()
    );

    return (
        <div className="flex gap-2 flex-col items-start">
            <input
                type="color"
                readOnly
                value={hexColor}
                name="background"
                id="background"
                disabled
            />
            <label htmlFor="background">{colorName} color: {hexColor}</label>
            <label>
                Lightness {lightness}
                <input
                    className="block"
                    type="range"
                    name="lightness"
                    id="lightness"
                    step="0.01"
                    min="0"
                    max="1"
                    value={lightness}
                    onInput={(e) =>
                        lightness.value = Number(
                            (e.target as HTMLInputElement).value,
                        )}
                />
            </label>
            <label>
                Chroma {chroma}
                <input
                    className="block"
                    type="range"
                    name="chroma"
                    id="chroma"
                    step="0.01"
                    min="0"
                    max="0.5"
                    value={chroma}
                    onInput={(e) =>
                        chroma.value = Number(
                            (e.target as HTMLInputElement).value,
                        )}
                />
            </label>
            <label>
                Hue {hue}
                <input
                    className="block"
                    type="range"
                    name="hue"
                    id="hue"
                    step="0.1"
                    min="0"
                    max="360"
                    value={hue}
                    onInput={(e) =>
                        hue.value = Number(
                            (e.target as HTMLInputElement).value,
                        )}
                />
            </label>
        </div>
    );
}
