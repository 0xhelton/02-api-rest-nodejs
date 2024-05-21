import { FastifyReply, FastifyRequest } from "fastify";

export async function checkSessionIdExists(request: FastifyRequest, reply: FastifyReply) {
  const sessinoId = request.cookies.sessinoId;

  if (!sessinoId) {
    return reply.status(401).send({
      error: "Unauthorized",
    });
  }
}
