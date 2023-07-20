export default function fetchBitcoin(url, target) {
    async function pegarBitcoin() {
        try {
            const bitcoinResponse = await fetch(url);
            const bitcoinJSON = await bitcoinResponse.json();

            const btcPreco = document.querySelector(target);
            btcPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
        } catch (erro) {
            console.log(erro)
        }
    }
    pegarBitcoin();
}
