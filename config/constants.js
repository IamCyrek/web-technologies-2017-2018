module.exports = {
  PORT: 3000,
  API_START: 'API app started',
  CONNECTIONS_OPEN: ' connections currently open',
  SIGTERM_SIGNAL: 'SIGTERM',
  SIGINT_SIGNAL: 'SIGINT',
  CONNECTION: 'connection',
  CLOSE: 'close',
  API_CLOSE: 'Received kill signal, shutting down gracefully',
  CLOSED_OUT: 'Closed out remaining connections',
  CLOSE_ERROR: 'Could not close connections in time, forcefully shutting down',
  SECOND: 1000,
  FIVE_SECONDS: 5000,
  TEN_SECONDS: 10000,
  OK_CODE: 0,
  ERROR_CODE: 1,
  PATH_ALL: '/all',
  PATH_BY_ID: '/id/:id',
  PATH_BY_TITLE: '/title/:title',
  PATH_BY_PAGINATION: '/pagination/:offset&:limit',
  PATH_BY_SORT: '/sort/:field',
  PATH_BY_SORT_WITH_DIRECTION: '/sort/:field&:direction',
  ASCENDING_ORDER: 'asc',
  DESCENDING_ORDER: 'desc',
};
