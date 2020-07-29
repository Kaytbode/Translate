const errorResponse = (res, status, err) => {
    return res.status(status).send({
        status,
        err
    });
}

const successResponseWithData = (res, statusCode, message, data) => {
    return res.status(statusCode).send({
        statusCode,
        data,
        message,
    });
}

const successResponse = (res, statusCode, message) => {
    return res.status(statusCode).send({
        statusCode,
        message,
  });
}

export { errorResponse, successResponse, successResponse }