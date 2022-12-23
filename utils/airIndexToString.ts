export const airIndexToString = (airIndex: number) => {
  switch (airIndex) {
    case 1:
      return "bardzo dobra";
      break;
    case 2:
      return "dobra";
      break;
    case 3:
      return "umiarkowana";
      break;
    case 4:
      return "dostateczna";
      break;
    case 5:
      return "zła";
      break;
    case 6:
      return "bardzo zła";
      break;
  }
};
