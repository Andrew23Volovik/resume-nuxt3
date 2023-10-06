import { Transporter, createTransport } from 'nodemailer';
import { H3Error } from 'h3';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import { ISender } from '~/server/types/types';
import { createHtml } from '~/server/utils/createEmailTemplate';

const { elasticHost, elasticPort, elasticAppPassword, elasticUserName } = useRuntimeConfig();

export class MailService {
  private static transporter: Transporter = createTransport({
    host: elasticHost,
    port: elasticPort,
    secure: false,
    auth: {
      user: elasticUserName,
      pass: elasticAppPassword,
    },
  } as unknown as SMTPConnection.Options);

  static async send(sender: ISender): Promise<string | undefined | H3Error> {
    try {
      const info = await this.transporter.sendMail({
        from: elasticUserName,
        to: elasticUserName,
        subject: `Message from resume: ${sender.name}`,
        text: `Send from${sender.name}` + `Email: ${sender.email}`,
        html: createHtml(sender.name, sender.email, sender.message),
      });
      return info.messageId;
    } catch (err) {
      if (err instanceof Error) {
        return createError({
          status: 500,
          statusMessage: err.message,
        });
      }
    }
  }
}
