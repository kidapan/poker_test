Abc

// カプセル化の要件
// ① フィールド変数を「private」にして隠す。（他のクラスから利用できないようにする）
// ② フィールド変数の値を取得・設定する「public」のメソッドを用意する。
// カプセル化を行うことで、フィールド変数への直接的なアクセスは禁止し、フィールド変数の値を設定するメソッド（setterメソッド）や取得するメソッド（getterメソッド）を用意します。それにより、フィールドには決められた操作しかできないように強制できます。


// Card クラスの mark と num プロパティを privateにする
class Card {
  constructor(private mark: string, private num: number) {}
}
// Deck の cardsもprivate 
class Deck {
  private cards: Card[] = [];

  constructor() {
    const marks: string[] = ['♠', '♡', '♦', '♣'];
    const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let mark of marks) {
      for (let num of nums) {
        const card = new Card(mark, num);
        this.cards.push(card);
      }
    }
  }
// Deckのcardsを private に変更したので、getCardsというものを追加したら実行できた、理由はわからない
  public getCards(): Card[] {
    return this.cards;
  }
}

const deck: Deck = new Deck();

class Dealer {
  constructor(private deck: Deck) {}

  public giveCard(): Card | undefined {
    return this.deck.getCards().pop();
  }
// privateにしたのでgetをつけてアクセスするらしい
  public shuffle(): void {
    const cards = this.deck.getCards();
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
}

const dealer: Dealer = new Dealer(deck);

dealer.shuffle();

class Player {
  private hands: Card[] = [];

  constructor(public name: string) {}

  public receiveCard(card: Card): void {
    this.hands.push(card);
  }

  public getHands(): Card[] {
    return this.hands;
  }
}

const player1 = new Player('kida');
player1.hands=
const player2 = new Player('subaru');

function DealCards(player : Player , CardNum : number){
  for (let i = 0; i < CardNum; i++) {
    const card: Card | undefined = dealer.giveCard();
    if (card !== undefined) {
      player.receiveCard(card);
    }
  }
}

DealCards(player1,7);
DealCards(player2,7);


// for (let i = 0; i < 5; i++) {
  const card: Card | undefined = dealer.giveCard();
  if (card !== undefined) {
    player1.receiveCard(card);
  }
}

for (let i = 0; i < 5; i++) {
  const card: Card | undefined = dealer.giveCard();
  if (card !== undefined) {
    player2.receiveCard(card);
  }
}

// player1と player2アクセスするために、player1.getHands() と player2.getHands()にすればいけると見たが、エラーが起きている、なぜだ
for (let card of player1.getHands()) {
  console.log(player1.name, ": ", card.mark, card.num);
}

for (let card of player2.getHands()) {
  console.log(player2.name, ": ", card.mark, card.num);
}