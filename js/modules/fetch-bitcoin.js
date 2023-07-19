export default function initFetchBitcoin() {
    async function pegarBitcoin() {
        try {
            const bitcoinResponse = await fetch('https://blockchain.info/ticker');
            const bitcoinJSON = await bitcoinResponse.json();

            const btcPreco = document.querySelector('.btc-preco');
            btcPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
        } catch (erro) {
            console.log(erro)
        }

    }
    pegarBitcoin();
}