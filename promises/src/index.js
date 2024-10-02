var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getUserTodos(user) {
    console.log("fetching todo list , for user id ".concat(user.id));
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var todoList = [
                {
                    userid: user.id,
                    id: 1,
                    todo: 'todo1'
                },
                {
                    userid: user.id,
                    id: 2,
                    todo: 'todo2'
                }
            ];
            resolve(todoList);
        }, 4000);
    });
}
function fetchUser(user) {
    console.log('fetching user ...');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (user.id > 100) {
                reject(new Error('unknown user id'));
            }
            else {
                resolve(user);
            }
        }, 3000);
    });
}
var user = {
    id: 10,
    username: "mohamed",
    role: "admin",
};
function onSuccess(user) {
    return getUserTodos(user);
}
function onRejected(error) {
    console.error(error.message);
}
function getUserData() {
    return __awaiter(this, void 0, void 0, function () {
        var userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUser(user)];
                case 1:
                    userData = _a.sent();
                    console.log(userData);
                    return [2 /*return*/];
            }
        });
    });
}
fetchUser(user).
    then(onSuccess)
    .catch(onRejected);
function promisesRace() {
    var p1 = new Promise(function (resolve, reject) {
        return setTimeout(resolve, 500, 'from promise 1');
    });
    var p2 = new Promise(function (resolve, reject) {
        return setTimeout(reject, 100, 'from promise 2');
    });
    return Promise.race([p1, p2]);
}
promisesRace()
    .then(function (data) { return console.log(data); }, function (err) { return console.log(err); });
promisesRace().then(console.log).catch(console.log);
