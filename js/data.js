// 할당 연산자  배열 데이타이다 []
// exprot 는 내보내기 할 수있는 데이터  
export const questions = [
  // 중가로는 객체 데이터이다 배열데이터 안에 객체 데이터안에 속성들이 있다.
  {
    number: '01',
    question: 'If you won 1 million dollars today, what would you do with the money?',
    choices: [
      { text: "I can't wait to spend it all and take my loved ones on their dream vacation!", value: 'i' },
      { text: "What a blessing! This will help me buy the newest tech for my business!", value: 'e' }
    ]
  },
  {
    number: '02',
    question: 'What is the best part about interacting with customers?',
    choices: [
      { text: 'I want to know everything about my customers no matter how long it takes!', value: 's' },
      { text: 'I want to split my time equally between all my customers.', value: 'n' }
    ]
  },
  {
    number: '03',
    question: 'What is the most important part of your business?',
    choices: [
      { text: 'Delivering the highest quality product or service to my customers!', value: 'f' },
      { text: 'I want to focus on my customer satisfaction and retention.', value: 't' }
    ]
  },
  {
    number: '04',
    question: 'How do you deal with roadblocks and problems while building a business?',
    choices: [
      { text: 'Honestly I cannot see a lot of roadblocks or issues, it should be a clear path to selling my product and making MONEY!', value: 'j' },
      { text: 'Bring on the challenges! Mistakes are just opportunities to learn and get better within your business', value: 'p' }
    ]
  },
  {
    number: '05',
    question: 'If you had 26 hours in a day, while everyone else still had 24, how would you spend the extra 2 hours?',
    choices: [
      { text: "Relaxin and chillaxin and unwinding like it's nobody's business", value: '' },
      { text: 'More time to work on and better myself? Bring it on! ', value: '' }
    ]
  },
  {
    number: '06',
    question: 'What does the ideal workday look like for you?',
    choices: [
      { text: 'I feel satisfied throwing myself into work 100%!', value: '' },
      { text: 'I spend the day surfing the Web, chatting with coworkers and discussing ideas.', value: '' }
    ]
  },
  {
    number: '07',
    question: 'Do you feel more happiness when helping others or accomplishing your own goals? ',
    choices: [
      { text: 'My goals and interests come first!', value: '' },
      { text: 'I feel happy watching others accomplish their goals and interests.', value: '' }
    ]
  },
  {
    number: '08',
    question: 'Do you like organizing schedules or going with the flow?',
    choices: [
      { text: 'I want every task to be clearly defined and lined up within my schedule book.', value: '' },
      { text: 'I can take the day as it comes, no matter what comes up! ', value: '' }
    ]
  },
  {
    number: '09',
    question: 'Your initial plan falls through, what do you do?',
    choices: [
      { text: 'Not to worry, I already have a backup to my backup!', value: '' },
      { text: "Don't stay calm, panic and AHHHHHHH", value: '' }
    ]
  },
  {
    number: '10',
    question: "I can't wait to get up for work in the morning, it's something I LOVE!"',
    choices: [
      { text: 'Yes!', value: '' },
      { text: 'No...', value: '' }
    ]
  },
]
// 결과들도 할당 연산자로 배열데이터로 만든다 
export const results = [
  {
    title: '출근 시간은<br>내가 정해!',
    character: '/images/result_character1.png',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br>행복한 야근이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘해요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['프리랜서', '창업가'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: '프로직진러!<br>진행력 갑',
    character: '/images/result_character2.png',
    results: [
      '나는야 회사 사람들 멘탈 지킴이!<br>언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸!',
      '여러 사람과 협업이 필요한 직무에 찰떡!',
      '진행력 갑! 추진력 갑!<br>빠른 속도로 동시에 여러 업무를 해결할 수 있어요.',
      '회사 행사나 크리스마스 이벤트,<br>회사사람들 생일까지 우리가 다 챙길게요'
    ],
    jobs: ['마케터', '기획자'],
    lectureImg: '/images/result_lecture2.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: '우리 무기는<br>상상력!',
    character: '/images/result_character3.png',
    results: [
      '이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!',
      '섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.',
      '가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (프로긍정러)',
      '업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!'
    ],
    jobs: ['디자이너', '예술가'],
    lectureImg: '/images/result_lecture3.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: '인생은<br>한방!',
    character: '/images/result_character4.png',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 경제와 사회 이슈에 관심이 매우 많아요.',
      '꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼 거예요~',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['부동산<br>투자자', '주식<br>투자자'],
    lectureImg: '/images/result_lecture4.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: '한 번 집중하면<br>멈출 수 없지!',
    character: '/images/result_character5.png',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자서 더 잘해요.<br>솔로 워커 최고!',
      '관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.',
      '(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['개발자', '데이터분석가'],
    lectureImg: '/images/result_lecture5.png',
    lectureUrl: 'https://www.feebox.com/services'
  },
  {
    title: '인생 욜로지~<br>일단 놀자 ><',
    character: '/images/result_character6.png',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
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
