import './UpgradeButton.css';

function UpgradeButton({precoUpdrade}) {
  return (
    <div id="fundo-div">
      <button>
        <h4>Lvl UP</h4>
        <div id='container-preco'>
          <img src="/coin.png" alt="Moeda" />
          <h2>{precoUpdrade}</h2>
        </div>
      </button>
    </div>
  );
}
export default UpgradeButton;