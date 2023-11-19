"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var User_1 = require("./models/User");
var dictionary_1 = __importDefault(require("./routes/dictionary"));
var learning_1 = __importDefault(require("./routes/learning"));
mongoose_1.default.connect('mongodb+srv://DenDon:1qGku4t32qmBkIHS@cluster.vvicvll.mongodb.net/vock');
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/dictionary', dictionary_1.default);
app.use('/learning', learning_1.default);
var user = {
    userName: 'vlad',
    email: 'qwe@gmail.com',
    dictionary: {
        words: [
            {
                englishWord: 'hello',
                type: 'notLearning',
                translations: [
                    {
                        pos: 'noun',
                        words: [
                            { text: 'привет', popularity: 10 },
                            { text: 'хай', popularity: 5 },
                        ],
                    },
                    {
                        pos: 'verb',
                        words: [{ text: 'поздороваться', popularity: 10 }],
                    },
                ],
                progress: 46,
            },
        ],
    },
};
User_1.User.create(user).then(function (r) { return console.log(r); });
app.listen(3001);
