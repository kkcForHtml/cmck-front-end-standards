/**
 * js ESLint 测试用例
 * 1.用例仅为常用用例,按照eslint/.eslintStandard.js作为标准编写
 * 2.本用例不涉及对Ext项目的配置
 * 3.本用例仅供参考
 * @author  Zico
 * @version 0.0.1
 */

var example1 = function () {
    // Error | quotes | 引号类型强制统一采用单引号
    var testString1 = 'test';
    // Error | newline-after-var | 变量声明后是否需要空一行
    var testString2 = 'test';
    testString2 += 1;
    //  Error | operator-linebreak | 换行运算符要在行尾
    testString2 = testString2
        + 1;
    //  Warning | semi | 对象结尾必须有分号
}

var example2 = function () {
    var testString1 = 'test';
    //  Warning | quotes | 建议采用单引号
    var testString2 = "test";

    //  Warning | no-implicit-coercion | 禁止隐式转换
    testString1 = !!testString1;
    //  Warning | vars-on-top | var建议放在作用域顶部
    var testSting3 = 'tes';
};

var example3 = function () {
    var exp = null;
    try {
        var testString1='test1';
        var testString2 ='test2';
        var testString3= 'test3';
        var testString4 = 'test4';
        //  Warning | no-underscore-dangle | 标识符不能以_开头
        var _testString5 = 'test5';
        //  Error  | no-array-constructor | 禁止使用数组构造器
        var testArray1 = new Array(testString2, testString1, testString3,testString4,_testString5);
        //  Error | comma-dangle | 字面量项尾不能有逗号
        var testArray2 = [testString1, testString2, testString3,];
        //  Error | no-sparse-arrays | 禁止稀疏数组
        var testArray3 = [testString1,,testString3];
        var TEST_OBJECT = true;
        //  Error | camelcase | 没有驼峰命名
        var test_object = {
            _private: true,
            isCamelcase: TEST_OBJECT,
            //  Error | camelcase | 没有驼峰命名
            check_Camelcase: function (boolean) {
                return this.isCamelcase;
                //  Error | no-unreachable | 存在无法执行的代码
                this.isCamelcase = boolean;
            },
        };
        //  Error | no-unneeded-ternary | 禁止不必要的嵌套
        //  Error | eqeqeq | 必须使用全等于 ===
        var testObject = test_object.isCamelcase == test_object.check_Camelcase(false) ? true : false;
    } catch (exp) {
        //  Error | no-catch-shadow | 禁止catch子句与外部作用于变量同名
        //  Error | no-console | 禁止在生产环境使用console
        console.log(exp);
    }
};

var example4 = function(){
    var testSuperFunction = function(){
        var private1;
        var private2;
        var private3;
        var private4;
        var private5;
        var private6;
        var private7;
        var private8;
        var private9;
        var private10;
        //  Warning | max-statements | 函数内最多10个声明,大于10个时候应当抽离属性
        var private11;

        this.status = 'stand';
    };
    var testChildFunction;

    testSuperFunction.prototype = {
        readyToGo:function(v){
            //  Error | no-cond-assign | 禁止在条件表达式中使用赋值
            if(this.status = 'running'){
                return 'running';
            }else{
                return false;
            }
            return this.go() + v;
        },
        //  Error | no-dupe-keys | 不允许使用重复的键名
        //  Error | no-dupe-args | 不允许重复的参数
        readyToGo:function (v,v) {
            return v;
        }
    };
    //  Error | new-cap | 需要被new的function,请使用大写字母开头
    testChildFunction = new testSuperFunction();

    testChildFunction.sw = function(m){
        //  Error | default-case | switch缺少default
        switch (m) {
            case 1:
                m = 1;
            //  Warning | no-fallthrough | 建议不允许switch穿透,要break
            case 2:
                break;
            //  Error | no-duplicate-case | 不允许重复的case
            case 1:
                return;
        }
    };

};