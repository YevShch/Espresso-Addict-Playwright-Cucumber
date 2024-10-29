import generator from 'cucumber-html-reporter';
import open from 'open';

const options = {
  theme: 'bootstrap',
  jsonFile: `./tests/results/test-result.json`,
  output: `./tests/results/test-result.html`
};

generator.generate(options);
await open('./tests/results/test-result.html');