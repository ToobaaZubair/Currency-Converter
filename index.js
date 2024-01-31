// import inquirer from "inquirer";
// const Conversion={
//     "PKR": {
//         "USD": 0.0069,
//         "EUR": 0.0061,
//         "GBP": 0.0052,
//         "JPY": 0.819,
//         "AUD": 0.11,
//         "CAD": 0.11,
//         "CHF": 0.077,
//         "CNY": 1.52,
//         "INR": 72.56,
//         "MXN": 20.04,
//       },
//       "USD": {
//         "PKR": 144.69,
//         "EUR": 0.89,
//         "GBP": 0.75,
//         "JPY": 112.13,
//         "AUD": 1.31,
//         "CAD": 1.28,
//         "CHF": 0.92,
//         "CNY": 6.38,
//         "INR": 73.23,
//         "MXN": 20.28,
//       },
//       "EUR": {
//         "PKR": 163.24,
//         "USD": 1.12,
//         "GBP": 0.85,
//         "JPY": 125.66,
//         "AUD": 1.46,
//         "CAD": 1.50,
//         "CHF": 1.08,
//         "CNY": 7.04,
//         "INR": 80.79,
//         "MXN": 22.38,
//       },
//       "GBP": {
//         "PKR": 191.51,
//         "USD": 1.33,
//         "EUR": 1.18,
//         "JPY": 148.75,
//         "AUD": 1.72,
//         "CAD": 1.76,
//         "CHF": 1.27,
//         "CNY": 8.30,
//         "INR": 95.20,
//         "MXN": 26.35,
//       },
//       "JPY": {
//         "PKR": 1.22,
//         "USD": 0.0089,
//         "EUR": 0.00797,
//         "GBP": 0.00671,
//         "AUD": 0.0117,
//         "CAD": 0.0111,
//         "CHF": 0.0081,
//         "CNY": 0.052,
//         "INR": 0.60,
//         "MXN": 0.17,
//       },
//       "AUD": {
//         "PKR": 9.29,
//         "USD": 0.76,
//         "EUR": 0.68,
//         "GBP": 0.58,
//         "JPY": 85.34,
//         "CAD": 1.03,
//         "CHF": 0.71,
//         "CNY": 4.64,
//         "INR": 53.25,
//         "MXN": 14.76,
//       },
//       "CAD": {
//         "PKR": 9.09,
//         "USD": 0.78,
//         "EUR": 0.67,
//         "GBP": 0.57,
//         "JPY": 90.13,
//         "AUD": 0.97,
//         "CHF": 0.69,
//         "CNY": 4.52,
//         "INR": 51.94,
//         "MXN": 14.41,
//       },
//       "CHF": {
//         "PKR": 12.96,
//         "USD": 1.09,
//         "EUR": 0.93,
//         "GBP": 0.79,
//         "JPY": 123.72,
//         "AUD": 1.40,
//         "CAD": 1.45,
//         "CNY": 6.54,
//         "INR": 74.93,
//         "MXN": 20.74,
//       },
//       "CNY": {
//         "PKR": 0.66,
//         "USD": 0.16,
//         "EUR": 0.14,
//         "GBP": 0.12,
//         "JPY": 19.22,
//         "AUD": 0.22,
//         "CAD": 0.22,
//         "CHF": 0.15,
//         "INR": 11.47,
//         "MXN": 3.17,
//       },
//       "INR": {
//         "PKR": 0.014,
//         "USD": 0.014,
//         "EUR": 0.0061,
//         "GBP": 0.0052,
//         "JPY": 0.819,
//         "AUD": 0.11,
//         "CAD": 0.11,
//         "CHF": 0.077,
//         "CNY": 1.52,
//         "MXN": 20.04,
//       },
//       "MXN": {
//         "PKR": 0.050,
//         "USD": 0.049,
//         "EUR": 0.022,
//         "GBP": 0.018,
//         "JPY": 2.976,
//         "AUD": 0.068,
//         "CAD": 0.069,
//         "CHF": 0.048,
//         "CNY": 0.315,
//         "INR": 0.05,
//       },
//   };
//   const currencyConverter = async () => {
//     try {
//       const currencyInput: {
//         from: "PKR" | "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD" | "CHF" | "CNY" | "INR";
//         to: "PKR" | "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD" | "CHF" | "CNY" | "INR";
//         amount: number;
//       }=await inquirer.prompt([{
//     type:"list",
//     name:"from",
//     message:"Select country",
//     choices:Conversion
//   },{
//     type:"list",
//     name:"to",
//     message:"Select converter currency",
//     choices:Conversion
//   },{
//     type:"number",
//     name:"amount",
//     message:"Enter Your Amount"
//   }])
//   if(currencyInput.from && currencyInput.to && currencyInput.amount){
// const result= Conversion[currencyInput.from][currencyInput.to] *currencyInput.amount;
// console.log(result);
//   }else{
//     console.log(`Invalid Inputs`);
//   }
// };
// import inquirer from "inquirer";
// const Conversion={
//         "PKR": {
//             "USD": 0.0069,
//             "EUR": 0.0061,
//             "GBP": 0.0052,
//             "JPY": 0.819,
//             "AUD": 0.11,
//             "CAD": 0.11,
//             "CHF": 0.077,
//             "CNY": 1.52,
//             "INR": 72.56,
//             "MXN": 20.04,
//           },
//           "USD": {
//             "PKR": 144.69,
//             "EUR": 0.89,
//             "GBP": 0.75,
//             "JPY": 112.13,
//             "AUD": 1.31,
//             "CAD": 1.28,
//             "CHF": 0.92,
//             "CNY": 6.38,
//             "INR": 73.23,
//             "MXN": 20.28,
//           },
//           "EUR": {
//             "PKR": 163.24,
//             "USD": 1.12,
//             "GBP": 0.85,
//             "JPY": 125.66,
//             "AUD": 1.46,
//             "CAD": 1.50,
//             "CHF": 1.08,
//             "CNY": 7.04,
//             "INR": 80.79,
//             "MXN": 22.38,
//           },
//           "GBP": {
//             "PKR": 191.51,
//             "USD": 1.33,
//             "EUR": 1.18,
//             "JPY": 148.75,
//             "AUD": 1.72,
//             "CAD": 1.76,
//             "CHF": 1.27,
//             "CNY": 8.30,
//             "INR": 95.20,
//             "MXN": 26.35,
//           },
//           "JPY": {
//             "PKR": 1.22,
//             "USD": 0.0089,
//             "EUR": 0.00797,
//             "GBP": 0.00671,
//             "AUD": 0.0117,
//             "CAD": 0.0111,
//             "CHF": 0.0081,
//             "CNY": 0.052,
//             "INR": 0.60,
//             "MXN": 0.17,
//           },
//           "AUD": {
//             "PKR": 9.29,
//             "USD": 0.76,
//             "EUR": 0.68,
//             "GBP": 0.58,
//             "JPY": 85.34,
//             "CAD": 1.03,
//             "CHF": 0.71,
//             "CNY": 4.64,
//             "INR": 53.25,
//             "MXN": 14.76,
//           },
//           "CAD": {
//             "PKR": 9.09,
//             "USD": 0.78,
//             "EUR": 0.67,
//             "GBP": 0.57,
//             "JPY": 90.13,
//             "AUD": 0.97,
//             "CHF": 0.69,
//             "CNY": 4.52,
//             "INR": 51.94,
//             "MXN": 14.41,
//           },
//           "CHF": {
//             "PKR": 12.96,
//             "USD": 1.09,
//             "EUR": 0.93,
//             "GBP": 0.79,
//             "JPY": 123.72,
//             "AUD": 1.40,
//             "CAD": 1.45,
//             "CNY": 6.54,
//             "INR": 74.93,
//             "MXN": 20.74,
//           },
//           "CNY": {
//             "PKR": 0.66,
//             "USD": 0.16,
//             "EUR": 0.14,
//             "GBP": 0.12,
//             "JPY": 19.22,
//             "AUD": 0.22,
//             "CAD": 0.22,
//             "CHF": 0.15,
//             "INR": 11.47,
//             "MXN": 3.17,
//           },
//           "INR": {
//             "PKR": 0.014,
//             "USD": 0.014,
//             "EUR": 0.0061,
//             "GBP": 0.0052,
//             "JPY": 0.819,
//             "AUD": 0.11,
//             "CAD": 0.11,
//             "CHF": 0.077,
//             "CNY": 1.52,
//             "MXN": 20.04,
//           },
//           "MXN": {
//             "PKR": 0.050,
//             "USD": 0.049,
//             "EUR": 0.022,
//             "GBP": 0.018,
//             "JPY": 2.976,
//             "AUD": 0.068,
//             "CAD": 0.069,
//             "CHF": 0.048,
//             "CNY": 0.315,
//             "INR": 0.05,
//           },
//       };
//       const inputs=async () => {
//         const currencyInput: {
//                     from: "PKR" | "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD" | "CHF" | "CNY" | "INR";
//                     to: "PKR" | "USD" | "EUR" | "GBP" | "JPY" | "AUD" | "CAD" | "CHF" | "CNY" | "INR";
//                     amount: number;}=await inquirer.prompt([{
//                         type:"list",
//                         name: "from",
//                         message: "Select country",
//                         choices: Conversion
//                     }, {
//                             type: "list",
//                             name: "to",
//                             message: "Select converter currency",
//                             choices: Conversion
//                         }, {
//                             type: "number",
//                             name: "amount",
//                             message: "Enter Your Amount"
//                     }])
//       }
//       if(currencyInput.from && currencyInput.to && currencyInput.amount){
//         const result= Conversion[currencyInput.from][currencyInput.to] *currencyInput.amount;
//         console.log(result);
//           }else{
//             console.log(`Invalid Inputs`);
//           }
//         inputs()
import inquirer from "inquirer";
const Conversion = {
    "PKR": {
        "USD": 0.0069,
        "EUR": 0.0061,
        "GBP": 0.0052,
        "JPY": 0.819,
        "AUD": 0.11,
        "CAD": 0.11,
        "CHF": 0.077,
        "CNY": 1.52,
        "INR": 72.56,
        "MXN": 20.04,
    },
    "USD": {
        "PKR": 144.69,
        "EUR": 0.89,
        "GBP": 0.75,
        "JPY": 112.13,
        "AUD": 1.31,
        "CAD": 1.28,
        "CHF": 0.92,
        "CNY": 6.38,
        "INR": 73.23,
        "MXN": 20.28,
    },
    "EUR": {
        "PKR": 163.24,
        "USD": 1.12,
        "GBP": 0.85,
        "JPY": 125.66,
        "AUD": 1.46,
        "CAD": 1.50,
        "CHF": 1.08,
        "CNY": 7.04,
        "INR": 80.79,
        "MXN": 22.38,
    },
    "GBP": {
        "PKR": 191.51,
        "USD": 1.33,
        "EUR": 1.18,
        "JPY": 148.75,
        "AUD": 1.72,
        "CAD": 1.76,
        "CHF": 1.27,
        "CNY": 8.30,
        "INR": 95.20,
        "MXN": 26.35,
    },
    "JPY": {
        "PKR": 1.22,
        "USD": 0.0089,
        "EUR": 0.00797,
        "GBP": 0.00671,
        "AUD": 0.0117,
        "CAD": 0.0111,
        "CHF": 0.0081,
        "CNY": 0.052,
        "INR": 0.60,
        "MXN": 0.17,
    },
    "AUD": {
        "PKR": 9.29,
        "USD": 0.76,
        "EUR": 0.68,
        "GBP": 0.58,
        "JPY": 85.34,
        "CAD": 1.03,
        "CHF": 0.71,
        "CNY": 4.64,
        "INR": 53.25,
        "MXN": 14.76,
    },
    "CAD": {
        "PKR": 9.09,
        "USD": 0.78,
        "EUR": 0.67,
        "GBP": 0.57,
        "JPY": 90.13,
        "AUD": 0.97,
        "CHF": 0.69,
        "CNY": 4.52,
        "INR": 51.94,
        "MXN": 14.41,
    },
    "CHF": {
        "PKR": 12.96,
        "USD": 1.09,
        "EUR": 0.93,
        "GBP": 0.79,
        "JPY": 123.72,
        "AUD": 1.40,
        "CAD": 1.45,
        "CNY": 6.54,
        "INR": 74.93,
        "MXN": 20.74,
    },
    "CNY": {
        "PKR": 0.66,
        "USD": 0.16,
        "EUR": 0.14,
        "GBP": 0.12,
        "JPY": 19.22,
        "AUD": 0.22,
        "CAD": 0.22,
        "CHF": 0.15,
        "INR": 11.47,
        "MXN": 3.17,
    },
    "INR": {
        "PKR": 0.014,
        "USD": 0.014,
        "EUR": 0.0061,
        "GBP": 0.0052,
        "JPY": 0.819,
        "AUD": 0.11,
        "CAD": 0.11,
        "CHF": 0.077,
        "CNY": 1.52,
        "MXN": 20.04,
    },
    "MXN": {
        "PKR": 0.050,
        "USD": 0.049,
        "EUR": 0.022,
        "GBP": 0.018,
        "JPY": 2.976,
        "AUD": 0.068,
        "CAD": 0.069,
        "CHF": 0.048,
        "CNY": 0.315,
        "INR": 0.05,
    },
};
//    const currencyInput= await inquirer.prompt([ 
//     {
//         type: "list",
//         name: "from",
//         message: "Select country",
//         choices: Object.keys(Conversion),
//       },
//       {
//         type: "list",
//         name: "to",
//         message: "Select converter currency",
//         choices: Object.keys(Conversion),
//       },
//       {
//         type: "number",
//         name: "amount",
//         message: "Enter Your Amount",
//       },
//     ]);
//     if (currencyInput.from && currencyInput.to && currencyInput.amount) {
//       const result = Conversion[currencyInput.from][currencyInput.to] * currencyInput.amount;
//       console.log(result);
//     } else {
//       console.log(`Invalid Inputs`);
//     }
const currencyInput = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select country",
        choices: Object.keys(Conversion),
    },
    {
        type: "list",
        name: "to",
        message: "Select converter currency",
        choices: Object.keys(Conversion),
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount",
    },
]);
if (currencyInput.from && currencyInput.to && currencyInput.amount) {
    const result = Conversion[currencyInput.from][currencyInput.to] * currencyInput.amount;
    console.log(`Converted Currency ${result}`);
}
else {
    console.log(`Invalid Inputs`);
}
