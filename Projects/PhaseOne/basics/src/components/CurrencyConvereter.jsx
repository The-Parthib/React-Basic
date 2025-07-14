import { useState } from "react";
import InputCurrency from "./InputCurrency";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyConvereter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertButton = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  let BackgroundImage =
    "https://cdn.pixabay.com/photo/2022/03/16/07/38/bitcoin-7071818_1280.jpg";

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <h1 className="bg-tra text-3xl text-white font-extrabold bg-orange-600 m-4 p-4 rounded-3xl w-md text-center">
          Currency Convereter
        </h1>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convertButton();
              }}
            >
              <div className="w-full mb-1">
                <InputCurrency
                  label="From"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(from) => setFrom(from)}
                  selectCurrency={from}
                  currencyOptions={options}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputCurrency
                  label="To"
                  amount={convertedAmount}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(to) => setTo(to)}
                  selectCurrency={to}
                  currencyOptions={options}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvereter;
