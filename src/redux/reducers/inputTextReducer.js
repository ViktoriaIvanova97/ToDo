const initialValue = {
  text: "",
};

export const inputTextReducer = (store = initialValue, action) => {
  switch (action.type) {
    case "change":
      return { ...store, text: action.payload };
    case "zero":
      return { ...store, text: "" };

    default:п
      return store;
  }
};
