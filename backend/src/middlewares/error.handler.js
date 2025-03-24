import boom from '@hapi/boom';

export function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

export function errorHandler(err, req, res, _next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

export function boomErrorHandler(err, req, res, next) {
  if (boom.isBoom(err)) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}
