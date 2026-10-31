const fs=require('fs');const assert=require('assert');
const bank=JSON.parse(fs.readFileSync('data/math-curriculum-bank.json','utf8'));
const comp=JSON.parse(fs.readFileSync('data/competition-directory.json','utf8'));
assert(Array.isArray(bank.tracks)&&bank.tracks.length>=20,'track count');
assert(Array.isArray(bank.lessons)&&bank.lessons.length>=300,'lesson count');
assert(Array.isArray(bank.questions)&&bank.questions.length>=700,'question count');
assert(comp.items.length>=5,'competition directory');
for(const c of comp.items){assert(c.name&&/^https:\/\//.test(c.url),'competition metadata '+c.id)}
console.log(JSON.stringify({tracks:bank.tracks.length,lessons:bank.lessons.length,questions:bank.questions.length,competitions:comp.items.length},null,2));
