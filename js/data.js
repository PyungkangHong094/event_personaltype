// 할당 연산자  배열 데이타이다 []
// export 는 내보내기 할 수있는 데이터  
export const questions = [
  // 중가로는 객체 데이터이다 배열데이터 안에 객체 데이터안에 속성들이 있다.
  {
    number: '01',
    question: 'Happy New Year and welcome to 2023! The company is looking for the New Years Party staff?',
    choices: [
      {text: 'Oh I cannot be a party staff member, but still the party must be fun!)', value: 'i' },
      {text: 'Sounds like fun, I am looking forward to being a staff member!', value: 'e' }
    ]
  },
  {
    number: '02',
    question: 'It is the night of a big business trip, I look in my bag and see?',
    choices: [
      { text: 'I have everything packed away safe and secure, I am ready for an early night!', value: 's' },
      { text: 'Am I missing something? I must have missed something..', value: 'n' }
    ]
  },
  {
    number: '03',
    question: 'A close coworker left their job, what happens to their work?',
    choices: [
      { text: 'Did they have a difficult time at work? I will have to be careful of how much I am working.', value: 'f' },
      { text: 'Oh, are they changing jobs? I should ask what they plan on doing after.', value: 't' }
    ]
  },
  {
    number: '04',
    question: 'You are assigned team lead to a big new project, what is your first step?',
    choices: [
      { text: 'Planning is critical on big projects, so you sit down and write out a business plan!', value: 'j' },
      { text: 'You call a team-wide meeting and get to know your teammates and their capabilities.', value: 'p' }
    ]
  },
  {
    number: '05',
    question: 'It is your first day at a new job, how do you greet your new coworkers?',
    choices: [
      { text: 'You are quiet and reserved, letting your coworkers take the lead on talking.', value: '' },
      { text: 'You are bold and brave, getting to know all your coworkers as soon as possible. ', value: '' }
    ]
  },
  {
    number: '06',
    question: 'It is a beautiful day outside, how do you feel?' ,
    choices: [
      { text: 'The weather is so nice, I would love to enjoy but work comes first.', value: '' },
      { text: 'The weather is too nice to stay inside, I am going to take a half day and go out!', value: '' }
    ]
  },
  {
    number: '07',
    question: 'I have just heard some news from my boss.., what do I do?' ,
    choices: [
      { text: 'I feel more motivated and I want to show everyone that I can work even harder!', value: '' },
      { text: 'Uh oh time to plan my exit...', value: '' }
    ]
  },
  {
    number: '08',
    question: 'I have a difficult work problem, how can I solve it?',
    choices: [
      { text: 'I am stuck! Time to consult with my team lead and coworkers!', value: '' },
      { text: 'What should I do? Even if I am stuck, I will work overtime if needed. ', value: '' }
    ]
  },
  {
    number: '09',
    question: 'A new job offer came in, what should I do?',
    choices: [
      { text: 'I love new opportunities! I happily take on all new challenges in life!', value: '' },
      { text: 'The current company has treated me well, do I need to take the risk and change?', value: '' }
    ]
  },
  {
    number: '10',
    question: 'The company has recognized all my hard work and selected me for a promotion!',
    choices: [
      { text: 'The company finally recognized my efforts, it makes me want to work even harder!', value: '' },
      { text: 'Is there a raise with this promotion? Think of everything I can buy with my new raise!!', value: '' }
    ]
  },
]
// 결과들도 할당 연산자로 배열데이터로 만든다 
export const results = [
  {
    title: 'You are an ARCHITECT!',
    character: '/images/result_character1.png',
    results: [
      'You are a rational thinker and can reframe any difficulty as an opportunity to use your skills.',
      'You are independent, creative and motivated by your own interests. You have no time for rules and conventions!',
      'Architects are always open to ideas of all shapes and sizes, you are happy to revise your opinions.)',
      'Are you looking for a job that will let you be your own business and define your needs?'
    ],
    jobs: ['Project Manager', 'Marketing Strategist'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: 'You are a COMMANDER!',
    character: '/images/result_character2.png',
    results: [
      'You are a natural leader, confident and secure in the decisions you choose.',
      'There is not a wasted movement or decision in your process, you have no time for inefficiency.',
      'Your confidence and will are an inspiration to those around you, bringing out the best in others.',
      'Do you want to be your own boss and successfully lead a team around you?'
    ],
    jobs: ['Lawyer', 'Business Administrator'],
    lectureImg: '/images/result_lecture2.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: 'You are a CONSUL!',
    character: '/images/result_character3.png',
    results: [
      'You are loyal and empathetic, always looking to connect with others and solve problems',
      'Responsibility and duty are core instincts, and you strive to meet those obligations',
      'Organizing your day-to-day and managing practical tasks are a breeze for you.',
      'Interested in helping to build and expand others dreams?'
    ],
    jobs: ['Doctor', 'Social Worker'],
    lectureImg: '/images/result_lecture3.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: 'You are an ADVENTURER!',
    character: '/images/result_character4.png',
    results: [
      'There is no adventure too big or too small for you to be interested in!',
      'Your creativity and boundless optimism help you create bold ideas to bring people together.',
      'You are easily liked for your warm and relaxed nature, never letting anything get to you.',
      'Do you want to start on a new adventure where the opportunities and profits are endless?'
    ],
    jobs: ['Freelance Consulting', 'Sales Executive'],
    lectureImg: '/images/result_lecture4.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: 'Entrepreneur',
    character: '/images/result_character5.png',
    results: [
      'There is no limit to your energy, letting you push any and all boundaries.',
      'You are a natural leader, making excellent use of social situations for networking and growth.',
      'You can combine your boldness and practicality to formulate new ideas and solutions.',
      'Interested in creating your own business and taking business to the next level?'
    ],
    jobs: ['Sales Manager', 'Financial Advisor'],
    lectureImg: '/images/result_lecture5.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: 'You are a MEDIATOR!',
    character: '/images/result_character6.png',
    results: [
      'Your main goal is to uplift everyone around you and share in the good vibes.',
      'You love looking at life from unconvential angles to wander all possibilities and ideas.',
      'Living a meaningful and purpose-filled life while doing the right thing is your main goal.',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['Writer', 'Counselor'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://www.feebox.com/services'
  }
]
// 객체 데이터를 할당해놓았다 
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5
}
