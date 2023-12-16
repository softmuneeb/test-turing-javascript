/*

0  1  
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
scheduleOf: {
    alex: [[0, 420], [750, 839]],
    sam: [[420, 780]],
}

intMins converts HH:MM to int minutes i.e 02:00 => 120
strMins converts int minutes to HH:MM  120 => 02:00


for event in events
    const [name, action, start, end] event.split(' ')
    scheduleOf[name] = (scheduleOf[name]||[]).push([intMins(start), intMins(end)])

for name in scheduleOf
    for let i = 0; i < scheduleOf[name][0][0]; i++
        isFree[i] = (isFree[i]||0) + 1
        
    for let i = 0; i < scheduleOf[name].length; i++
        const start =  scheduleOf[name][i][1]
        const end =  scheduleOf[name][i+1][0]

        for let i = start; i < end; i++
            isFree[i] = (isFree[i]||0) + 1

    const lastIndex = scheduleOf[name].length - 1
    for let i = schedules[lastIndex][1]; i <= 1560; i++
        isFree[i] = (isFree[i]||0) + 1



const people = obj.keys(scheduleOf)

let minsValue = 0
let minsCount = 0
for minute in isFree
        if(isFree[minute] === people)
            if(minsCount === 0) minsValue = minute
            minsCount++
            if(minsCount === K)
                return strMins(minsValue)
        else
            minsCount = 0
            minsValue = 0
            
return "-1"


*/

function intMins(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function strMins(minutes) {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  const mins = (minutes % 60).toString().padStart(2, '0');
  return `${hours}:${mins}`;
}

const events = [
  'Alex sleep 00:00 08:00',
  'Sam sleep 07:00 13:00',
  'Alex lunch 12:30 13:59',
];

const scheduleOf = {};
const isFree = {}; // new Array(1440).fill(0);

for (const event of events) {
  const [name, action, start, end] = event.split(' ');
  scheduleOf[name] = (scheduleOf[name] || []).concat([
    [intMins(start), intMins(end)],
  ]);
}

for (const name in scheduleOf) {
  for (let i = 0; i < scheduleOf[name][0][0]; i++) {
    isFree[i] = (isFree[i] || 0) + 1;
  }

  for (let i = 0; i < scheduleOf[name].length; i++) {
    const start = scheduleOf[name][i][1];
    const end = scheduleOf[name][i + 1];

    for (let j = start; j < end; j++) {
      isFree[j] = (isFree[j] || 0) + 1;
    }
  }

  const lastIndex = scheduleOf[name].length - 1;
  for (let i = scheduleOf[name][lastIndex][1]; i <= 1440; i++) {
    isFree[i] = (isFree[i] || 0) + 1;
  }
}

const people = Object.keys(scheduleOf);

let minsValue = 0;
let minsCount = 0;
const K = 3; // Replace with your desired value of K

for (let minute = 0; minute <= 1440; minute++) {
  if (isFree[minute] === people.length) {
    if (minsCount === 0) minsValue = minute;
    minsCount++;
    if (minsCount === K) {
      console.log(strMins(minsValue));
      break;
    }
  } else {
    minsCount = 0;
    minsValue = 0;
  }
}

if (minsCount !== K) {
  console.log('-1');
}
