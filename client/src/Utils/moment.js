import Moment from "moment";

export const momentconvertor = (data) => {
    return Moment(data).format("MMMM Do YYYY, h:mm:ss a");
  };