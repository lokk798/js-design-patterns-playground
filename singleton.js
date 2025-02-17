/**
 * A simple example of the singleton design pattern in js.
 */

const Logger = (function () {
    let instance;

    function createInstance() {
        return {
            logs: [],
            log: function (message) {
                this.logs.push(message);
                console.log("LOG:", message);
            },
            getLogs: function () {
                return this.logs;
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const logger1 = Logger.getInstance();
logger1.log("First log");

const logger2 = Logger.getInstance();
logger2.log("Second log");

console.log(logger1 === logger2); // true
console.log(logger1.getLogs()); // ['First log', 'Second log']
