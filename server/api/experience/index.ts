import { H3Error } from 'h3';
import { Experiences, experiences, technologies, Technologies } from '~/db/schema/experience';
import { db } from '~/server/neon.service';
import { JSONResponse } from '~/server/types/types';

export default defineEventHandler(async (): Promise<JSONResponse | H3Error | undefined> => {
  const response = {} as JSONResponse;
  try {
    const experiencesRes: Experiences[] = await db.select().from(experiences);
    const technologiesRes: Technologies[] = await db.select().from(technologies);

    const techMap = technologiesRes.reduce<Record<number, string[]>>((acc, tech) => {
      if (!acc[tech.experience_id]) {
        acc[tech.experience_id] = [];
      }
      acc[tech.experience_id].push(tech.technology);
      return acc;
    }, {});

    const parsedArray = experiencesRes.map((item) => ({
      ...item,
      technologies: techMap[item.id] || [],
    }));

    parsedArray.push({
      created_at: null,
      date: '',
      description: '',
      id: 0,
      responsibility: '',
      technologies: [],
      title: '',
      updated_at: null,
    });

    response.status = 'success';
    response.data = {
      experiences: parsedArray,
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
