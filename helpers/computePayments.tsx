export type PaymentType = 'daily' | 'weekly' | 'biweekly' | 'monthly';

interface InstallmentDetail {
    installmentNumber: number;
    installmentAmount: number;
    principal: number;
    interest: number;
    remainingBalance: number;
}

export function calculateInstallments(_amount: number, _term: number, _annualInterest: number, _type: PaymentType): InstallmentDetail[] {
    console.log({ _amount, _term, _annualInterest, _type });
    let amount: number = Number(_amount);
    let term: number = Number(_term);
    let interest: number = Number(_annualInterest);

    const interestRates = {
        daily: interest / 365 / 100,
        weekly: interest / 52 / 100,
        biweekly: interest / 24 / 100,
        monthly: interest / 12 / 100
    };

    const fixedInstallment = (amount * interestRates[_type] * Math.pow(1 + interestRates[_type], term)) / (Math.pow(1 + interestRates[_type], term) - 1);

    const installments: InstallmentDetail[] = [];
    let balance = amount;

    for (let i = 0; i < term; i++) {
        // Calculate the interest of the installment
        const installmentInterest = balance * interestRates[_type];
        // Calculate the principal amortized
        const installmentPrincipal = fixedInstallment - installmentInterest;
        // Update the balance
        balance -= installmentPrincipal;
        balance = Math.max(balance, 0);

        installments.push({
            installmentNumber: i + 1,
            installmentAmount: fixedInstallment,
            principal: installmentPrincipal,
            interest: installmentInterest,
            remainingBalance: balance
        });
    }

    /*   if (balance > 0) {
          installments.forEach((installment) => {
              const remanent = balance / term;
              installment.principal += remanent;
              installment.installmentAmount += remanent;
          })
          installments[installments.length - 1].remainingBalance = 0;
      } */
    return installments;
}
