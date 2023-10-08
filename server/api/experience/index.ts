import { H3Error } from 'h3';
import { Experiences, experiences } from '~/db/schema/experience';
import { db } from '~/server/turso.service';
import { JSONResponse } from '~/server/types/types';

export default defineEventHandler(async (): Promise<JSONResponse | H3Error | undefined> => {
  const response = {} as JSONResponse;
  try {
    const experiencesRes: Experiences[] = await db.select().from(experiences).all();

    response.status = 'success';
    response.data = {
      experiences: experiencesRes,
    };

    return response;
  } catch (e) {
    if (e instanceof Error) {
      return createError({
        status: 400,
        statusMessage: e.message,
      });
    }
  }
});
