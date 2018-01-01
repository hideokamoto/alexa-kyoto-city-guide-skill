const cafeList = [
  {
    name: '喫茶室かぼく',
    locale: '京都市中京区',
    description:
      '日本茶専門店である一保堂茶舗が運営しており、お茶を淹れるところから体験できる珍しいカフェです。'
  },
  {
    name: '六曜社',
    locale: '京都市中京区',
    description:
      '三条河原町に昔からある老舗の喫茶店で、ドーナツが名物として有名です。'
  },
  {
    name: 'からふね屋珈琲三条本店',
    locale: '京都市中京区',
    description:
      '1972年創業の老舗珈琲店の本店で、通常のパフェだけでなく様々な種類のジャンボパフェを注文できます。'
  },
  {
    name: 'さらさ西陣',
    locale: '京都市北区',
    description:
      '築80年以上の銭湯をリノベーションして作られたユニークなお店です。店内のいたるところに銭湯の面影を伺うことができます。'
  }
]

function randomArrayElement (array) {
  var i = 0
  i = Math.floor(Math.random() * array.length)
  return array[i]
}

module.exports = function () {
  const cafe = randomArrayElement(cafeList)
  const say = `京都のカフェ情報です。${cafe['name']}は${
    cafe['locale']
  }にあるカフェです。${cafe['description']}`
  this.response.speak(say)
  this.emit(':responseReady')
}
