/* eslint-disable */
export const fuzzyFind = (searchString, routes) => {

  const levenshteinDistance = (s, t) => {
    if (s.length === 0) return t.length;
    if (t.length === 0) return s.length;

    return Math.min(
      levenshteinDistance(s.substr(1), t) + 1,
      levenshteinDistance(t.substr(1), s) + 1,
      levenshteinDistance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0)
    );
  }

  const minValue = ( array ) => {
    return Math.min.apply(Math, array);
  };

  const levenshteinScores = [];
  routes.forEach((route) => {
    levenshteinScores.push(levenshteinDistance(route, searchString));
  });

  const value = minValue(levenshteinScores);
  const key = levenshteinScores.indexOf(value);

  const results = {
    'searchString': searchString,
    'routes': routes,
    'levenshteinScores': levenshteinScores,
    'value': value,
    'key': key,
    'output[key]': routes[key],
  };

  console.log(results);

  return routes[key];
};
