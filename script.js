const closeRulesBtn = document.querySelector('#display-rules-container');
const openRulesBtn = document.querySelector('#display-rules-container');

const closeRulesBtnFunc = () => {
  closeRulesBtn.style.display = 'none';
};

const openRulesBtnFunc = () => {
  openRulesBtn.style.display = 'block';
};

const closeRules = document.querySelector('.close-rules-icon');
closeRules.addEventListener('click', closeRulesBtnFunc);

const openRules = document.querySelector('#rules-btn');
openRules.addEventListener('click', openRulesBtnFunc);
