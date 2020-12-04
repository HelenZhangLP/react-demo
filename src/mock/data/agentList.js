import Mock from 'mockjs';
const Random = Mock.Random;

let agents = [];
let COUNT = [];
for (let i = 1; i <= 5; i++) {
  COUNT.push(i);
}

for (let i=1; i<= COUNT.length; i++) {
  agents.push(Mock.mock({
    key: Random.guid(),
    time: Random.datetime(),
    name: Random.cname(),
    telephone: /^1[0-9]{10}$/
  }))
}

export { agents }
