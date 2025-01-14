import { Application, send } from "https://deno.land/x/oak/mod.ts";

import { table99 } from "./table99";

const app = new Application();

app.use(async (ctx) => {
    console.log('path=', ctx.request.url.pathname)
    await send(ctx, ctx.request.url.pathname, {
        // root: `${Deno.cwd()}/public/`,
        root: Deno.cwd() + '/css/',
        index: "css.css",
    });
})

console.log('start at : http://127.0.0.1:8000')

await app.listen({ port: 8000 });