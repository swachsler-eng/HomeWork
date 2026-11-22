import { useState, useEffect } from "react";
export default function CurrencyConvertor() {
    const [cSymbols, setcSymbols] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState("");
    useEffect(
        () => {
            (async () => {
                try {
                    const response = await fetch("https://api.frankfurter.dev/v1/currencies");
                    if (!response.ok) {
                        throw new Error(`${response.status}-${response.statusText}`);
                    }
                    const result = await response.json();
                    console.log(result);
                    setcSymbols(Object.entries(result));
                } catch (e) {
                    console.error(e);
                }

            })();
        }
        , [])

    useEffect(
        () => {
            (async () => {
                
            }
            )()
        },[]
    )
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const r = await fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`);  
            if (!r.ok) {
                 throw new Error(`${r.status}-${r.statusText}`);
            }
            const answer = await r.json();
            console.log(answer);
            console.log(answer.rates[toCurrency])
            const { rates: { [toCurrency]: exRate } } = answer;
            setResult(amount * exRate);
        } catch (e){
            console.error(e);
        }
    }
    return (
        <>
            <form className="converter" onSubmit={handleSubmit}>
                <select id="from" value={fromCurrency} onChange={e=>setFromCurrency(e.target.value)}>
                    <option hidden>Select a curency</option>
                    {cSymbols.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
                </select>
                <button type="button" onClick={() => {
                    setFromCurrency(toCurrency);
                    setToCurrency(fromCurrency);
                }}>⇄</button>
                <select id="to" value={toCurrency} onChange={e=>setToCurrency(e.target.value)}>
                    <option hidden>Select a curency</option>
                    {cSymbols.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
                </select>

                <input id="amount" type="number" placeholder="Enter amount here" onChange={e=>setAmount(parseFloat(e.target.value) || 1)} />
                <span className="arrow">→</span>
                <input id="result"  value={result} type="text" readOnly />

                <button type="submit" className="convert-btn" >Convert</button>
            </form>
        </>
    )
};