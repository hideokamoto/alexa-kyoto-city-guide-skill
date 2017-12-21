
// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

const languageStrings = {
  'en': {
    'translation': {
      'WELCOME': 'Welcome to Kyoto Guide!',
      'HELP': 'Say about, to hear more about the city, or say recommend a temples, or say, go outside.',
      'ABOUT': 'Kyoto is one of the most traditional city in Kyoto.There are many temple.',
      'STOP': 'Okay, see you next time!',
      'TEST': {
        'A': 'Hello'
      },
      'CITY': 'Kyoto'
    }
  },
  'ja': {
    'translation': {
      'WELCOME': '京都ガイドへようこそ！',
      'HELP': 'サンプル',
      'CITY': '京都',
      'RESTAURANTS': [
        {
          'NAME': '清水寺',
          'ADDRESS': '',
          'PHONE': '',
          'MEALES': 'breakfast, lunch',
          'DESCRIPTION': 'A cozy and popular spot for breakfast.  Try the blueberry french toast!'
        }
      ],
      'TEMPLES': [
        {
          'NAME': '清水寺',
          'DISTANCE': '0',
          'ADDRESS': '',
          'DESCRIPTION': '清水寺は、京都府京都市東山区清水にある寺院。山号は音羽山。本尊は千手観音、創立者は延鎮である。'
        },
        {
          'NAME': '金閣寺',
          'DISTANCE': '0',
          'ADDRESS': '',
          'DESCRIPTION': '鹿苑寺は、京都市北区にある臨済宗相国寺派の寺。建物の内外に金箔を貼った3層の楼閣建築である舎利殿は金閣、舎利殿を含めた寺院全体は金閣寺として知られる。相国寺の山外塔頭寺院である'
        },
        {
          'NAME': '銀閣寺',
          'DISTANCE': '0',
          'ADDRESS': '',
          'DESCRIPTION': '東山慈照寺は、京都府京都市左京区にある、臨済宗相国寺派の寺院。相国寺の境外塔頭である。室町時代後期に栄えた東山文化を代表する建築と庭園を有する。'
        },
        {
          'NAME': '知恩院',
          'DISTANCE': '0',
          'ADDRESS': '',
          'DESCRIPTION': '知恩院は、京都府京都市東山区にある浄土宗総本山の寺院。徳川将軍家から庶民まで広く信仰を集め、今も京都の人々からは親しみを込めて「ちよいんさん」「ちおいんさん」と呼ばれている。'
        }
      ]
    }
  }
  // , 'de-DE': { 'translation' : { 'TITLE'   : "Local Helfer etc." } }
}
const data = {
  'city': 'Kyoto',
  'postcode': '600-0000',
  'restaurants': [
    {
      'name': 'ippodo Kaboku tea room',
      'address': 'Teramachi-dori Nijo, Nakagyo-ku, Kyoto',
      'phone': '+81-75-211-3421',
      'meals': 'lunch, cafe',
      'description': 'The Kaboku way is to allow customers to prepare their own tea. Teatime begins with the leisurely process of preparing the tea using a kyusu teapot.'
    },
    {
      'name': 'Tenkaippin main store',
      'address': 'Mezonsirakawa, 94, Ichijoji Tsukudacho, Sakyo-ku Kyoto-shi, Kyoto',
      'phone': '+81-75-722-0955',
      'meals': 'lunch, dinner',
      'description': 'Tenkaippin is a Japanese restaurant chain specializing in ramen noodles. The first restaurant was opened in Kyoto in 1981'
    },
    { 'name': 'Torisei main store',
      'address': '186 Kamiaburakake-cho, Fushimi-ku, Kyoto-shi, Kyoto',
      'phone': '+81-75-622-5533',
      'meals': 'lunch, dinner',
      'description': 'STorisei main store is the Izakaya (Japanese Style Pub) remodeled one house of Shinsei’s sake breweries. What we pour into a cup from the tank at the center of the spacious first floor and serve is Kuradashi Nama-genshu, which is very popular sake. '
    }
  ],
  'temples': [
    {
      'name': 'Kiyomizu-dera',
      'description': 'Kiyomizu-dera, officially Otowa-san Kiyomizu-dera, is an independent Buddhist temple in eastern Kyoto. The temple is part of the Historic Monuments of Ancient Kyoto  UNESCO World Heritage site. It was one of 20 finalists for the New7Wonders of the World. ',
      'distance': '0'
    },
    {
      'name': 'Ginkaku-ji',
      'description': 'Ginkaku-ji , officially named Jishō-ji, is a Zen temple in the Sakyo ward of Kyoto, Japan. It is one of the constructions that represents the Higashiyama Culture of the Muromachi period.',
      'distance': '2'
    },
    {
      'name': 'Kinkaku-ji',
      'description': 'Kinkaku-ji , officially named Rokuon-ji, is a Zen Buddhist temple in Kyoto, Japan. It is one of the most popular buildings in Japan, attracting a large number of visitors annually.',
      'distance': '4'
    },
    {
      'name': 'Bukkō-ji',
      'description': "Bukkō-ji , also known as the 'Temple of the Buddha's Light', was originally named Kosho-ji, a Jōdo Shinshū temple in the Yamashina ward of Kyoto, which later moved to the heart of Kyoto.",
      'distance': '38'
    }
  ]
}

const SKILL_NAME = 'Kyoto Guide'

// 2. Skill Code =======================================================================================================

const Alexa = require('alexa-sdk')

module.exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)

  // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
  /// alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
  alexa.resources = languageStrings
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers = {
  'LaunchRequest': function () {
    var say = this.t('WELCOME') + ' ' + this.t('HELP')
    this.response.speak(say).listen(say)
    this.emit(':responseReady')
  },

  'AboutIntent': function () {
    this.response.speak(this.t('ABOUT'))
    this.emit(':responseReady')
  },

  'CoffeeIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('coffee'))
    this.attributes['restaurant'] = restaurant.name

    var say = 'For a great coffee shop, I recommend, ' + restaurant.name + '. Would you like to hear more?'
    this.response.speak(say).listen(say)
    this.emit(':responseReady')
  },

  'BreakfastIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('breakfast'))
    this.attributes['restaurant'] = restaurant.name

    var say = 'For breakfast, try this, ' + restaurant.name + '. Would you like to hear more?'
    this.response.speak(say).listen(say)
    this.emit(':responseReady')
  },

  'LunchIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('lunch'))
    this.attributes['restaurant'] = restaurant.name

    var say = 'Lunch time! Here is a good spot. ' + restaurant.name + '. Would you like to hear more?'
    this.response.speak(say).listen(say)
    this.emit(':responseReady')
  },

  'DinnerIntent': function () {
    var restaurant = randomArrayElement(getRestaurantsByMeal('dinner'))
    this.attributes['restaurant'] = restaurant.name

    var say = 'Enjoy dinner at, ' + restaurant.name + '. Would you like to hear more?'
    this.response.speak(say).listen(say)
    this.emit(':responseReady')
  },

  'AMAZON.YesIntent': function () {
    var restaurantName = this.attributes['restaurant']
    var restaurantDetails = getRestaurantByName(restaurantName)

    var say = restaurantDetails.name +
            ' is located at ' + restaurantDetails.address +
            ', the phone number is ' + restaurantDetails.phone +
            ', and the description is, ' + restaurantDetails.description +
            '  I have sent these details to the Alexa App on your phone.  Enjoy your meal! <say-as interpret-as="interjection">bon appetit</say-as>'

    var card = restaurantDetails.name + '\n' + restaurantDetails.address + '\n' +
            this.t('CITY') + ', ' + data.postcode +
            '\nphone: ' + restaurantDetails.phone + '\n'

    this.response.cardRenderer(SKILL_NAME, card)
    this.response.speak(say)
    this.emit(':responseReady')
  },

  'TempleIntent': function () {
    var distance = 200
    /*
        if (this.event.request.intent.slots.distance.value) {
            distance = this.event.request.intent.slots.distance.value;
        }
        */

    var attraction = randomArrayElement(getTemplesByDistance(distance))

    var say = 'Try ' +
            attraction.name + '.' +
            attraction.description

    this.response.speak(say)
    this.emit(':responseReady')
  },

  'AMAZON.NoIntent': function () {
    this.emit('AMAZON.StopIntent')
  },
  'AMAZON.HelpIntent': function () {
    this.response.speak(this.t('HELP')).listen(this.t('HELP'))
    this.emit(':responseReady')
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(this.t('STOP'))
    this.emit(':responseReady')
  },
  'AMAZON.StopIntent': function () {
    this.emit('SessionEndedRequest')
  },
  'SessionEndedRequest': function () {
    this.response.speak(this.t('STOP'))
    this.emit(':responseReady')
  }

}

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function getRestaurantsByMeal (mealtype) {
  var list = []
  for (var i = 0; i < data.restaurants.length; i++) {
    if (data.restaurants[i].meals.search(mealtype) > -1) {
      list.push(data.restaurants[i])
    }
  }
  return list
}

function getRestaurantByName (restaurantName) {
  var restaurant = {}
  for (var i = 0; i < data.restaurants.length; i++) {
    if (data.restaurants[i].name == restaurantName) {
      restaurant = data.restaurants[i]
    }
  }
  return restaurant
}

function getTemplesByDistance (maxDistance) {
  var list = []

  for (var i = 0; i < data.temples.length; i++) {
    if (parseInt(data.temples[i].distance) <= maxDistance) {
      list.push(data.temples[i])
    }
  }
  return list
}

function randomArrayElement (array) {
  var i = 0
  i = Math.floor(Math.random() * array.length)
  return (array[i])
}
