import apm from 'elastic-apm-node';
import { Context, Next } from 'koa';
import { Pacs002 } from './classes/pacs.002.001.12';
import { Pacs008 } from './classes/pacs.008.001.10';
import { Pain001 } from './classes/pain.001.001.11';
import { Pain013 } from './classes/pain.013.001.09';
import { LoggerService } from './logger.service';
import { handlePacs002, handlePacs008, handlePain001, handlePain013 } from './logic.service';

export const handleExecute = async (ctx: Context, next: Next): Promise<Context | undefined> => {
  LoggerService.log('Start - Handle execute request');
  const span = apm.startSpan('Handle execute request');
  try {
    const request = ctx.request.body as Pain001;
    const result = await handlePain001(request);

    ctx.status = 200;
    ctx.body = result;

    await next();
    span?.end();
    return ctx;
  } catch (err) {
    const failMessage = 'Failed to process execution request.';
    LoggerService.error(failMessage, err as Error, 'ApplicationService');
  } finally {
    LoggerService.log('End - Handle execute request');
  }
};

export const handleQuoteReply = async (ctx: Context, next: Next): Promise<Context | undefined> => {
  LoggerService.log('Start - Handle quote reply request');
  const span = apm.startSpan('Handle quote reply request');
  try {
    const request = ctx.request.body as Pain013;
    const result = await handlePain013(request);

    ctx.status = 200;
    ctx.body = result;

    await next();
    span?.end();
    return ctx;
  } catch (err) {
    const failMessage = 'Failed to process execution request.';
    LoggerService.error(failMessage, err as Error, 'ApplicationService');
  } finally {
    LoggerService.log('End - Handle quote reply request');
  }
};

export const handleTransfer = async (ctx: Context, next: Next): Promise<Context | undefined> => {
  LoggerService.log('Start - Handle transfer request');
  const span = apm.startSpan('Handle transfer request');
  try {
    const request = ctx.request.body as Pacs008;
    const result = await handlePacs008(request);

    ctx.status = 200;
    ctx.body = result;

    await next();
    span?.end();
    return ctx;
  } catch (err) {
    const failMessage = 'Failed to process execution request.';
    LoggerService.error(failMessage, err as Error, 'ApplicationService');
  } finally {
    LoggerService.log('End - Handle transfer request');
  }
};

export const handleTransferResponse = async (ctx: Context, next: Next): Promise<Context | undefined> => {
  LoggerService.log('Start - Handle transfer response request');
  const span = apm.startSpan('Handle transfer response request');
  try {
    const request = ctx.request.body as Pacs002;
    const result = await handlePacs002(request);

    ctx.status = 200;
    ctx.body = result;

    await next();
    span?.end();
    return ctx;
  } catch (err) {
    const failMessage = 'Failed to process execution request.';
    LoggerService.error(failMessage, err as Error, 'ApplicationService');
  } finally {
    LoggerService.log('End - Handle transfer response request');
  }
};
