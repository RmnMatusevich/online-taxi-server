import app from "./app";
import { Options } from "graphql-yoga";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT
}

const handleAppStart = () => {
    console.log("App is listening on port ", PORT)
}

app.start(appOptions, handleAppStart);