const calculateformEl = document.getElementById("calculateForm");
const resultsEl = document.getElementById("results");
//making function with event
const calculateMarks = (event) => {
  event.preventDefault();
  const maxMarks = 400;

  const formdata = new FormData(calculateformEl);
  grab_data = {};
  formdata.forEach((value, key) => {
    grab_data[key] = +value;
  });
  const totalMarks =
    grab_data.science + grab_data.maths + grab_data.sindhi + grab_data.English;
  const perc = (totalMarks / maxMarks) * 100;

  resultsEl.innerText = `You have got ${totalMarks} from ${maxMarks} your percentage is ${perc}%`;
};
