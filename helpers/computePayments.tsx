export type PaymentType = 'daily' | 'weekly' | 'biweekly' | 'monthly';

export type InstallmentDetail = {
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
/* Este es mi propio metodo pero no esta apegado a ningun estandar */
/* function calcularCuotas(_monto: number, tipo: TipoPago, _plazo: number, _interes: number) {
        let monto: number = Number(_monto);
        let plazo: number = Number(_plazo);
        let interes: number = Number(_interes);

        let totalInteres = monto * interes / 100;
        let totalPagar = monto + totalInteres;
        let proyeccion: number = totalPagar / plazo;
        const cuotas: CuotaDetalle[] = [];

        for (let i = 0; i < plazo; i++) {
            if ((i + 1) === plazo) {
                cuotas.push({
                    numeroCuota: i + 1,
                    cuota: monto + totalInteres,
                    capital: monto,
                    interes: totalInteres,
                    saldoRestante: 0.00
                });
                break;
            }
            let interesCuota = totalInteres * 60 / 100;
            totalInteres -= interesCuota;
            let capitalCuota = proyeccion - interesCuota;
            monto -= capitalCuota;

            cuotas.push({
                numeroCuota: i + 1,
                cuota: proyeccion,
                capital: capitalCuota,
                interes: interesCuota,
                saldoRestante: monto
            });


        }

        console.log(cuotas);


    }
 */