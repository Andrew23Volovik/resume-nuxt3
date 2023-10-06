import { H3Error, H3Event } from 'h3';
import { ISender } from '~/server/types/types';

function isNotEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length !== 0;
}
export async function validateSender(event: H3Event): Promise<H3Error | void> {
  const body: ISender = await readBody(event);
  const bodyError: { name?: string; email?: string; message?: string } = {};

  if (!('name' in body) || body.name.trim() === '') {
    bodyError.name = "'name' is required";
  }

  if (!('email' in body) || body.email.trim() === '') {
    bodyError.email = "'email' is required";
  }

  if (!('message' in body) || body.message.trim() === '') {
    bodyError.message = "'message' is required";
  }

  if (isNotEmpty(bodyError))
    return createError({
      statusCode: 400,
      statusMessage: 'Validation error',
      data: bodyError,
    });
}
