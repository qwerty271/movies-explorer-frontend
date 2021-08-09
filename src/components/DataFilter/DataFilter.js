export function searchFilter(dataInput, dataArray, shortFilm) {
  let filteredArray = [];

  if (dataInput !== undefined && dataArray !== undefined) {
    for (let i = 0; i < dataArray.length; i++) {
      if (
        dataArray[i].nameRU.toLowerCase().indexOf(dataInput.toLowerCase()) >
          -1 &&
        (shortFilm ? dataArray[i].duration <= 40 : true)
      ) {
        filteredArray.push(dataArray[i]);
      }
    }
  }
  return filteredArray;
}

export function shortFilter(dataArray, shortFilm) {
  let filteredArray = [];

  if (dataArray !== undefined) {
    for (let i = 0; i < dataArray.length; i++) {
      if (shortFilm ? dataArray[i].duration <= 40 : true) {
        filteredArray.push(dataArray[i]);
      }
    }
  }
  return filteredArray;
}

export function baseFilter(filteredArray) {
  let render = [];
  if (window.innerWidth >= 1280) {
    for (
      let i = 0;
      filteredArray.length < 13 ? i < filteredArray.length : i < 12;
      i++
    ) {
      render.push(filteredArray[i]);
    }
  } else if (window.innerWidth >= 768) {
    for (
      let i = 0;
      filteredArray.length < 9 ? i < filteredArray.length : i < 8;
      i++
    ) {
      render.push(filteredArray[i]);
    }
  } else if (window.innerWidth >= 320) {
    for (
      let i = 0;
      filteredArray.length < 6 ? i < filteredArray.length : i < 5;
      i++
    ) {
      render.push(filteredArray[i]);
    }
  }
  return render;
}

export function moreFilter(filteredArray, renderedArray) {
  if (filteredArray.length !== renderedArray.length) {
    let newRender = [];
    for (
      let i = renderedArray.length;
      window.innerWidth <= 768
        ? i < renderedArray.length + 2
        : i < renderedArray.length + 3;
      i++
    ) {
      if (filteredArray.length !== i) {
        newRender.push(filteredArray[i]);
      } else {
        break;
      }
    }
    return newRender;
  }
}
