import { Component } from '@angular/core';

export class BattleValidationHelper {

    validateInput(input, exception) {
        // removes spaces from the input
        input = input.replace(/ /gi, "");


        var arr = input.split(',');

        if (arr.length == 1 && arr[0] == "") {
            return;
        }

        if (arr.length < 10) {
            exception = "Enter complete details for " + arr[0] + " and try again";
            throw (exception)
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                if (i == 0 || i == 1) {
                    if (arr[i] == null || arr[i].length == 0) {

                        exception = "Transformers name (and/or) team cannot be left blank. Kindly check attributes for  " + arr[0] + " and try again."
                        throw (exception)

                    }
                    if (i == 1) {
                        if (arr[i] != "D" && arr[i] != "A") {
                            exception = "Transformers team should either be 'D' or 'A'.Kindly check attributes for  " + arr[0] + " and try again."
                            throw (exception)
                        }
                    }

                }
                else {
                    if (arr[i] == null || arr[i] == "" || isNaN(arr[i]) || arr[i] > 10 || arr[i] < 0) {
                        exception = "Transformers attributes should be a number between 1 to 10. Kindly check attributes for " + arr[0] + " and try again."
                        throw (exception);
                    }
                }
            }

        }


    }


}