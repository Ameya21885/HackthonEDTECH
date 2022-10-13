import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // Put the handleHello function in the actions object to pass to the MessageParser
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // --------------------------------------
  // 1
  const handle1 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject for which you are requesting the Vedio leactures for: A. Maths B. Physics C. English D. Biology E. Press E to request result of mid/end term exam"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 2
  const handle2 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject for which you are requesting the test results for: A. Maths B. Physics C. English D. Biology E. Press E to request result of mid/end term exam"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 3
  const handle3 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject for which you want to give the feedck to: A. Maths B. Physics C. English D. Biology E. Press E to request result of mid/end term exam"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 4
  const handle4 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject of the doubt you want to get solved: A. Maths B. Physics C. English D. Biology E. Press E to request result of mid/end term exam"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 5
  const handle5 = () => {
    const botMessage = createChatBotMessage(
      "Student Information /n Name: Aditya /n Class: 10th /n UID: 202144552 /n Mobile Number: 9999999999"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // ------------------------------------------------
  // 1-A
  const handle1_A = () => {
    const botMessage = createChatBotMessage(
      "Please type in the date of the video leactures you wish to watch. the formate must be DD/MM/YYYY"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 1-B
  const handle1_B = () => {
    const botMessage = createChatBotMessage(
      "Please type in the date of the video leactures you wish to watch. the formate must be DD/MM/YYYY"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // 1-C
  const handle1_C = () => {
    const botMessage = createChatBotMessage(
      "Please type in the date of the video leactures you wish to watch. the formate must be DD/MM/YYYY"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // 1-D
  const handle1_D = () => {
    const botMessage = createChatBotMessage(
      "Please type in the date of the video leactures you wish to watch. the formate must be DD/MM/YYYY"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // 1-E
  const handle1_E = () => {
    const botMessage = createChatBotMessage(
      "Please type in the date of the video leactures you wish to watch. the formate must be DD/MM/YYYY"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // ----------------------------------------------------
  // 1-A-date
  const handle1_A_date = () => {
    const botMessage = createChatBotMessage(
      "Here is your video leacture for Maths the specified date. Please download it. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_B_date = () => {
    const botMessage = createChatBotMessage(
      "Here is your video leacture for Physics the specified date. Please download it. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_C_date = () => {
    const botMessage = createChatBotMessage(
      "Here is your video leacture for English the specified date. Please download it. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_D_date = () => {
    const botMessage = createChatBotMessage(
      "Here is your video leacture for Chemistry the specified date. Please download it. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_E_date = () => {
    const botMessage = createChatBotMessage(
      "Here is your video leacture for Biology the specified date. Please download it. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // ---------------------------------------------------
  // handle1_A_test
  const handle1_A_test = () => {
    const botMessage = createChatBotMessage(
      "Please select the date of the Maths test of which you want to see your result for: "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_B_test = () => {
    const botMessage = createChatBotMessage(
      "Please select the date of the Physics test of which you want to see your result for: "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_C_test = () => {
    const botMessage = createChatBotMessage(
      "Please select the date of the English test of which you want to see your result for: "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_D_test = () => {
    const botMessage = createChatBotMessage(
      "Please select the date of the Chemistry test of which you want to see your result for: "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_E_test = () => {
    const botMessage = createChatBotMessage(
      "Please select the date of the Biology test of which you want to see your result for: "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // ----------------------------------------------------
  const handle1_A_test_select = () => {
    const botMessage = createChatBotMessage(
      "Here are your results for the test of Maths conducted on (DATE): /n Score: 37/50 /n Class Rank: 4"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_B_test_select = () => {
    const botMessage = createChatBotMessage(
      "Here are your results for the test of Physics conducted on (DATE): /n Score: 37/50 /n Class Rank: 4"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_C_test_select = () => {
    const botMessage = createChatBotMessage(
      "Here are your results for the test of English conducted on (DATE): /n Score: 37/50 /n Class Rank: 4"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_D_test_select = () => {
    const botMessage = createChatBotMessage(
      "Here are your results for the test of Chemistry conducted on (DATE): /n Score: 37/50 /n Class Rank: 4"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle1_E_test_select = () => {
    const botMessage = createChatBotMessage(
      "Here are your results for the test of Biology conducted on (DATE): /n Score: 37/50 /n Class Rank: 4"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            // Put the handleHello function in the actions object to pass to the MessageParser
            handleHello,
            handle1,
            handle2,
            handle3,
            handle4,
            handle5,
            handle1_A,
            handle1_B,
            handle1_C,
            handle1_D,
            handle1_E,
            handle1_A_date,
            handle1_B_date,
            handle1_C_date,
            handle1_D_date,
            handle1_E_date,
            handle1_A_test,
            handle1_B_test,
            handle1_C_test,
            handle1_D_test,
            handle1_E_test,
            handle1_A_test_select,
            handle1_B_test_select,
            handle1_C_test_select,
            handle1_D_test_select,
            handle1_E_test_select,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
