import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      console.log("hi", message);
      actions.handleHello();
    }
    if (message.includes('1')) {
      console.log("hi", message);
      actions.handle1();
    }
    if (message.includes('2')) {
      console.log("hi", message);
      actions.handle2();
    }
    if (message.includes('3')) {
      console.log("hi", message);
      actions.handle3();
    }
    if (message.includes('4')) {
      console.log("hi", message);
      actions.handle4();
    }
    if (message.includes('5')) {
      console.log("hi", message);
      actions.handle5();
    }

    // -----------------------

    if (message.includes('A')) {
      console.log("Maths", message);
      actions.handle1_A();
    }
    if (message.includes('B')) {
      console.log("Physics", message);
      actions.handle1_B();
    }
    if (message.includes('C')) {
      console.log("English", message);
      actions.handle1_C();
    }
    if (message.includes('D')) {
      console.log("Chemistry", message);
      actions.handle1_D();
    }
    if (message.includes('E')) {
      console.log("Biology", message);
      actions.handle1_E();
    }

    // --------------------------------------
    // 1-A-date
    if (message.includes('dateMaths')) {
      console.log("Date Maths: ", message);
      actions.handle1_A_date();
    }
    if (message.includes('datePhysics')) {
      console.log("Date Physics: ", message);
      actions.handle1_B_date();
    }
    if (message.includes('dateEnglish')) {
      console.log("Date English: ", message);
      actions.handle1_C_date();
    }
    if (message.includes('dateChemistry')) {
      console.log("Date Chemistry: ", message);
      actions.handle1_D_date();
    }
    if (message.includes('dateBiology')) {
      console.log("Date Biology: ", message);
      actions.handle1_E_date();
    }

    // ----------------------------------------------
    // 2-A-testDate
    if (message.includes('testMaths')) {
      console.log("Test Maths: ", message);
      actions.handle1_A_test();
    }
    if (message.includes('testPhysics')) {
      console.log("Test Physics: ", message);
      actions.handle1_B_test();
    }
    if (message.includes('testEnglish')) {
      console.log("Test English: ", message);
      actions.handle1_C_test();
    }
    if (message.includes('testChemistry')) {
      console.log("Test Chemistry: ", message);
      actions.handle1_D_test();
    }
    if (message.includes('testBiology')) {
      console.log("Test Biology: ", message);
      actions.handle1_E_test();
    }

    // ------------------------------------------------
     // 2-A-testDateSelect
     if (message.includes('testMathsSelect')) {
      console.log("Test Maths Select: ", message);
      actions.handle1_A_test_select();
    }
    if (message.includes('testPhysicsSelect')) {
      console.log("Test Physics Select: ", message);
      actions.handle1_B_test_select();
    }
    if (message.includes('testEnglishSelect')) {
      console.log("Test English Select: ", message);
      actions.handle1_C_test_select();
    }
    if (message.includes('testChemistrySelect')) {
      console.log("Test Chemistry Select: ", message);
      actions.handle1_D_test_select();
    }
    if (message.includes('testBiologySelect')) {
      console.log("Test Biology Select: ", message);
      actions.handle1_E_test_select();
    }



  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;