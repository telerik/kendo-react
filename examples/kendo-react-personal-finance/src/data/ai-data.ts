import { brushIcon, editToolsIcon, minWidthIcon, arrowsLeftRightIcon } from '@progress/kendo-svg-icons';
export const unknownRequest = 'The request cannot be processed at this time. Please excuse us for the inconvenience.';
export const promptCommands = [{
  id: '1',
  text: 'Change Formality',
  svgIcon: brushIcon,
  children: [{
    id: '1_1',
    text: 'Casual'
  }, {
    id: '1_2',
    text: 'Neutral'
  }, {
    id: '1_3',
    text: 'Formal'
  }]
}, {
  id: '2',
  text: 'Translate',
  svgIcon: editToolsIcon,
  children: [{
    id: '2_1',
    text: 'German'
  }, {
    id: '2_2',
    text: 'Spanish'
  }]
}, {
  id: '3',
  text: 'Simplify',
  svgIcon: minWidthIcon
}, {
  id: '4',
  text: 'Expand',
  svgIcon: arrowsLeftRightIcon
}];
const suggestion1 = 'How to start investing with just $100?';
const suggestion2 = 'How to create a financial plan that works?';
const suggestion3 = 'Could you give me budgeting tips for better finances?';
export const suggestionsList = [suggestion1, suggestion2, suggestion3];
export const suggestionsResponse = [{
  suggestion: suggestion1,
  response: `Start investing with $100 by choosing a low-cost, user-friendly platform like a robo-advisor or investment app. Opt for fractional shares of stocks or ETFs to diversify your small investment. Focus on broad market ETFs or index funds for long-term growth with low risk. Avoid high fees, stay consistent, and reinvest any returns. Even small amounts grow over time with compounding.`,
}, {
  suggestion: suggestion1 + 'retry',
  response: `To start investing with just $100, choose a brokerage or app that allows low or no minimums and fractional shares. Consider putting your money into diversified, low-cost index funds or ETFs. Avoid high-fee investments, and focus on long-term growth. Even small, regular contributions matter—reinvest earnings and add more over time. Starting early is more important than starting big.`,
  
}, {
  suggestion: suggestion2,
  response: `To create a financial plan that works, start by setting clear, realistic goals—short- and long-term. Track your income and expenses to understand your cash flow, then create a budget that aligns with your goals. Prioritize building an emergency fund, paying off debt, and saving for retirement. Choose the right tools, like spreadsheets or apps, to stay organized. Review your plan regularly and adjust as life changes. Consistency and discipline are key.`,
}, {
  suggestion: suggestion2 + 'retry',
  response: `To create a financial plan that works, define your financial goals, assess your income, expenses, debts, and savings, then build a realistic budget. Prioritize essentials, debt repayment, emergency savings, and long-term investments. Choose tools or apps to track progress and automate savings where possible. Review and adjust your plan regularly to stay on track with life changes.`,
}, 
{
    suggestion: suggestion3,
    response: `To budget effectively, start by tracking your income and expenses. Categorize spending into needs, wants, and savings. Use the 50/30/20 rule as a guideline: allocate 50% of your income to needs, 30% to wants, and 20% to savings or debt repayment. Set specific financial goals and use budgeting tools or apps to help you stay on track. Review your budget regularly and adjust as needed to ensure you're meeting your goals.`,
    }, {
    suggestion: suggestion3 + 'retry',
    response: `To improve your finances, start by tracking all your expenses and creating a realistic budget. Follow the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings or debt repayment. Set clear financial goals and automate your savings to build consistency. Review your budget monthly and adjust as needed. Eliminate unnecessary subscriptions and stick to a shopping list to avoid impulse purchases. Using cash or envelope methods can also help control spending. These simple steps build discipline and lead to long-term financial health.`,
}
];