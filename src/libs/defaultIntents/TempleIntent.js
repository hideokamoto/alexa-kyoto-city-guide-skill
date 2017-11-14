const templeList = [
  {
    'name': '清水寺',
    'locale': '京都市東山区',
    'description': '本堂にある舞台は「清水の舞台」として有名で、「清水の舞台から飛び降りる」ということわざもあります。'
  },
  {
    name: '金閣寺',
    locale: '京都市北区',
    description: '正式名称は鹿苑寺で、建物の内外に金箔を貼った3層の楼閣建築である舎利殿があることから金閣寺とよばれています。'
  },
  {
    name: '銀閣寺',
    locale: '京都市左京区',
    description: '正式名称は東山慈照寺。室町時代後期に栄えた東山文化を代表する建築と庭園があるお寺です。'
  },
  {
    name: '知恩院',
    locale: '京都市東山区',
    description: '浄土宗総本山の寺院。徳川将軍家から庶民まで広く信仰を集め、今も京都の人々からは親しみを込めて「ちよいんさん」「ちおいんさん」と呼ばれています'
  }
]

function randomArrayElement (array) {
  var i = 0
  i = Math.floor(Math.random() * array.length)
  return (array[i])
}

module.exports = function () {
  const temple = randomArrayElement(templeList)
  const say = `京都のお寺情報です。${temple['name']}は${temple['locale']}にあるお寺です。${temple['description']}`
  this.response.speak(say)
  this.emit(':responseReady')
}