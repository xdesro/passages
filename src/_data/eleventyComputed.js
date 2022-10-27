const { groupBy } = require('lodash');

module.exports = {
  passagesByYear: (data) => {
    const grouped = groupBy(data.passages, (passage) => {
      return new Date(passage.date).getFullYear();
    });

    const paired = Object.keys(grouped)
      .map((key) => {
        return [key, grouped[key]];
      })
      .sort((a, b) => b[0] - a[0]);

    return paired;
  },
};
