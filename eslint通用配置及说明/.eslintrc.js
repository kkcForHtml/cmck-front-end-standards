module.exports = {
    "env": {
        "browser": true
    },
    "extends": ["eslint:recommended", "./.eslintStandard.js", "./.eslintCustomer.js"],
    "parserOptions": {
        "ecmaVersion": 5
    },
    "globals": {
        // 适配项目所用的全局变量
        "Ext": 1, "HP": 1, "_lang": 1, "App": 1, "__ctxPath": 1
    },
    "rules": {
        //  第一个参数是报错登记 0 关闭 1 警告 2 报错
        //  继承自.eslintStandard.js的rules配置
    }
};