const totalUsersInput = document.getElementById('totalUsers');
const subscriptionFeeInput = document.getElementById('subscriptionFee');
const conversionRateInput = document.getElementById('conversionRate');
const output = document.getElementById('MRR');

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function writeMRR(value) {
  if (value == null || Number.isNaN(value) || !Number.isFinite(value)) {
    output.textContent = '—';
    output.classList.remove('positive');
    return;
  }

  output.textContent = formatCurrency(value);
  output.classList.add('positive');
}

function calculateMRR() {
  const totalUsers = Number(totalUsersInput.value);
  const fee = Number(subscriptionFeeInput.value);
  const conversionRate = Number(conversionRateInput.value);

  if (!Number.isFinite(totalUsers) || !Number.isFinite(fee) || !Number.isFinite(conversionRate)) {
    writeMRR(null);
    return;
  }

  const mrr = totalUsers * (conversionRate / 100) * fee;
  writeMRR(mrr);
}

function init() {
  const inputs = [totalUsersInput, subscriptionFeeInput, conversionRateInput];
  inputs.forEach((el) => el.addEventListener('input', calculateMRR));
  calculateMRR();
}

window.addEventListener('DOMContentLoaded', init);
