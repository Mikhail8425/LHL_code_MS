const raisinAlarm = function (cookie) {
  for (const ingredient of cookie) {
    if (ingredient === "🍇") {
      return ('Raisin alert!');
    }
  }
  return ('All good!');
};

const raisinAlarmArray = function (cookies) {
  alarms = [];
  for (const cookie of cookies) {
    alarms.push(raisinAlarm(cookie));
  }
  return alarms;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);