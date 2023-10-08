import { EventHandlerRequest, H3Error, H3Event } from 'h3';
import { validateSender } from '~/server/utils/validators';
import { MailService } from '~/server/api/mail/mail.service';
import { JSONResponse } from '~/server/types/types';

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>): Promise<JSONResponse> => {
  const response = {} as JSONResponse;
  const validationError = await validateSender(event);

  if (validationError instanceof H3Error) {
    response.status = 'fail';
    response.error = validationError;
    return response;
  }

  const body = await readBody(event);
  const dataOrError = await MailService.send(body);

  if (dataOrError instanceof H3Error) {
    response.status = 'fail';
    response.error = dataOrError;
    return response;
  } else if (typeof dataOrError === 'string') {
    response.status = 'success';
    response.data = dataOrError;
  }

  return response;
});
