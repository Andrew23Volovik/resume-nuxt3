import { H3Error } from 'h3';
import { additionalData, AdditionalDataReturn, Paragraph, paragraphs } from '~/db/schema/profile';
import { db } from '~/server/turso.service';
import { JSONResponse, ProfileResponse } from '~/server/types/types';

export default defineEventHandler(async (): Promise<JSONResponse | H3Error | undefined> => {
  const response = {} as JSONResponse;
  try {
    const paragraphsRes: Paragraph[] = await db.select().from(paragraphs).all();
    const additionalDataRes: AdditionalDataReturn[] = await db
      .select({
        Experience: additionalData.Experience,
        Education: additionalData.Education,
        English: additionalData.English,
        Ukrainian: additionalData.Ukrainian,
      })
      .from(additionalData)
      .all();

    response.status = 'success';
    response.data = {
      paragraphs: paragraphsRes,
      additionalData: additionalDataRes[0],
    } as ProfileResponse;

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
