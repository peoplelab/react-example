import { api, api2 } from './model';

function mapOpenLibraryDataToChangeSet(data) {
  return data.map(function (change, index) {
    return {
      "when": (new Date()).toString(),
      "who": change.author.key,
      "description": change.comment
    }
  });
}

export const callApi = (setter, error) => {
  api2(function (response) {
    const { httpcode, rawdata, rawerror } = response;
    console.log(httpcode);
    if (httpcode === 200) {
      var changeSets = mapOpenLibraryDataToChangeSet(rawdata);
      setter(changeSets);
    } else {

    error(changeSets);
      console.log(rawerror);
    }
  });
};
