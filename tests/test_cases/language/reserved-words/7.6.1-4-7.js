// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1-4-7
description: >
    Allow reserved words as property names by set function within an
    object, verified with hasOwnProperty: while, debugger, function
includes: [runTestCase.js]
---*/

function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set while(value){
                test0 = value;
            },
            get while(){
                return test0
            },
            set debugger(value){
                test1 = value;
            },
            get debugger(){
                return test1;
            },
            set function(value){
                test2 = value;
            },
            get function(){
                return test2;
            }
        };      
        var arr = [
            'while' ,
            'debugger', 
            'function'
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);
