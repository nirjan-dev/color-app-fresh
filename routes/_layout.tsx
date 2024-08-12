import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Layout({ Component, state }: PageProps) {
    // do something with state here
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta name="viewport" content="width=device-width" />
                <title>Color App</title>
            </Head>
            <div class="layout">
                <Component />
            </div>
        </>
    );
}
