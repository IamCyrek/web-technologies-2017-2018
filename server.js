const express = require('express');
const router = require('./routes/index');
const constants = require('./config/constants');

const app = express();
app.use(router);
const server = app.listen(constants.PORT, () =>
    console.log(constants.API_START)
);

setInterval(() => server.getConnections(
    (err, connections) => console.log(`${connections}` + constants.CONNECTIONS_OPEN)
), constants.SECOND);

process.on(constants.SIGTERM_SIGNAL, shutDown);
process.on(constants.SIGINT_SIGNAL, shutDown);

let connections = [];

server.on(constants.CONNECTION, connection => {
    connections.push(connection);
    connection.on(constants.CLOSE, () => connections = connections.filter(curr => curr !== connection));
});

function shutDown() {
    console.log(constants.API_CLOSE);
    server.close(() => {
        console.log(constants.CLOSED_OUT);
        process.exit(constants.OK_CODE);
    });

    setTimeout(() => {
        console.error(constants.CLOSE_ERROR);
        process.exit(constants.ERROR_CODE);
    }, constants.TEN_SECONDS);

    connections.forEach(curr => curr.end());
    setTimeout(() => connections.forEach(curr => curr.destroy()), constants.FIVE_SECONDS);
}
