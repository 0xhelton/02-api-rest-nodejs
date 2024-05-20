import fastify from "fastify";
import crpyto from "node:crypto";
import { knex } from "./database";
import { env } from "./env";

const app = fastify();

app.get("/hello", async () => {
  const transaction = await knex("transactions")
    .insert({
      id: crpyto.randomUUID(),
      title: "Transação de teste",
      amount: 1000,
    })
    .returning("*");

  return transaction;
});

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP Server Running");
});
