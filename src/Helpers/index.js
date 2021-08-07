export const appendScript = () => {
    const Scripts = [
        { id: "script", script: '/components/base/script.min.js' },
    ]
    Scripts.map((script) => {
        if (document.getElementById(script.id)) {
            document.getElementById(script.id).remove();
        }
        const scriptToAppend = document.createElement("script");
        scriptToAppend.src = script.script;
        scriptToAppend.id = script.id;
        scriptToAppend.async = true;
        document.body.appendChild(scriptToAppend);
        return
    })
}

export const CostPerCripto = (cripto, cost) => {
    let result = (parseFloat(cripto) * parseFloat(cost)).toFixed(3)
    return parseFloat(result);
}


export const CriptoMin = (cost, type) => {
    return (1 * 50 / parseFloat(cost)).toFixed(type !== "DOGE" && type !== "USDT.ERC20" ? 8 : 2);
}

export const CriptoMax = (cost, type) => {
    return (1 * 20000 / parseFloat(cost)).toFixed(type !== "DOGE" && type !== "USDT.ERC20" ? 8 : 2);
}
export const formatMoney = (amount, moneda = "", decimalCount = false, decimal = ",", thousands = ".") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 0 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "") + " " + moneda;
    } catch (e) {
        console.log(e)
    }
};


export const Validation = (type, data) => {
    switch (type) {
        case 'personal':
            if (data.fullName && data.discord && data.email && data.DD && data.MM && data.YY && data.pais && data.qpu2 && data.qpu2) {
                return true;
            } else {
                return false;
            }
        case 'binance':
            if (data.emailB && data.aceptB) {
                return true;
            } else {
                return false;
            }
        case 'reglas':
            if (data.qr1 && data.qr2 && data.qr3 && data.qr4 && data.qr5 && data.qr6 && data.qr7 && data.qr8 && data.qr9) {
                return true;
            } else {
                return false;
            }
        case 'psicologia':
            if (data.qp1 && data.qp2 && data.qp3 && data.qp4 && data.qp5 && data.qp6 && data.qp7 && data.qp8 && data.qp9 && data.qp10 && data.qp11 && data.qp12 && data.qp13) {
                return true;
            } else {
                return false;
            }
        case 'bio':
            if (data.bio && data.aceptBio) {
                return true;
            } else {
                return false;
            }
        case 'file':
            if (data.length > 0) {
                return true;
            } else {
                return false;
            }
        default:
            return
    }
}


export const formatSize = (tamaño, de = 'byte', a = 'mb') => {
    let divisor;
    let identificador;

    if (de == 'byte' && a == 'mb') {
        divisor = 1000000;
        identificador = "MB";
    }
    if (de == 'byte' && a == 'kb') {
        divisor = 1000;
        identificador = "KB";
    }
    if (de == 'byte' && a == 'gb') {
        divisor = 1000000000;
        identificador = "GB";
    }
    return (tamaño / divisor).toFixed(2) + " " + identificador;


};
