import { Application } from "https://deno.land/x/oak/mod.ts";
function table99() {
    let table = ["<table><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>"]
    for (let i = 1; i <= 9; i++) {
        let row = "<tr>"
        for (let j = 1; j <= 9; j++) {
            row += `<td>${i * j}</td>`
        }
        row += "</tr>"
        table.push(row)
    }
    return table.join('\n') + "</table>"
}

console.log(table99())

const app = new Application();

app.use((ctx) => {
    ctx.response.body = `
    <html>
    <style>
        table{
            width: 500px;
            border-collapse:collapse;
            border: 1px solid black;
            padding: 10px;
        }
        th{
            text-align: left; 
            background-color: black;
            color: white;
            padding: 10px;
        }
        tr{ 
            border: 1px solid black;
            padding: 10px;
        }
    </style>
        <body>
            ${table99()}
        </body>
    </html>
    `
    table99()
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });


