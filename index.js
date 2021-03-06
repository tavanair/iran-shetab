const banks = [
  {
    nickname: 'ayandeh',
    name: 'Ayandeh Bank',
    persianName: 'بانک آینده',
    code: '636214',
  },
  {
    nickname: 'eghtesad-novin',
    name: 'Eghtesad Novin Bank',
    persianName: 'بانک اقتصاد نوین',
    code: '627412',
  },
  {
    nickname: 'ansar',
    name: 'Ansar Bank',
    persianName: 'بانک انصار',
    code: '627381',
  },
  {
    nickname: 'iran-zamin',
    name: 'Iran Zamin Bank',
    persianName: 'بانک ایران زمین',
    code: '505785',
  },
  {
    nickname: 'parsian',
    name: 'Parsian Bank',
    persianName: 'بانک پارسیان',
    code: '622106',
  },
  {
    nickname: 'parsian',
    name: 'Parsian Bank',
    persianName: 'بانک پارسیان',
    code: '627884',
  },
  {
    nickname: 'pasargad',
    name: 'Pasargad Bank',
    persianName: 'بانک پاسارگاد',
    code: '502229',
  },
  {
    nickname: 'pasargad',
    name: 'Pasargad Bank',
    persianName: 'بانک پاسارگاد',
    code: '639347',
  },
  {
    nickname: 'post',
    name: 'Post Bank',
    persianName: 'پست بانک ایران',
    code: '627760',
  },
  {
    nickname: 'tejarat',
    name: 'Tejarat Bank',
    persianName: 'بانک تجارت',
    code: '585983',
  },
  {
    nickname: 'tejarat',
    name: 'Tejarat Bank',
    persianName: 'بانک تجارت',
    code: '627353',
  },
  {
    nickname: 'tosee-taavon',
    name: 'Tose Taavon Bank',
    persianName: 'بانک توسعه تعاون',
    code: '502908',
  },
  {
    nickname: 'tosee-saderat',
    name: 'Tose Saderat Bank',
    persianName: 'بانک توسعه صادرات',
    code: '207177',
  },
  {
    nickname: 'tosee-saderat',
    name: 'Tose Saderat Bank',
    persianName: 'بانک توسعه صادرات',
    code: '627648',
  },
  {
    nickname: 'hekmat-iranian',
    name: 'Hekmat Iranian Bank',
    persianName: 'بانک حکمت ایرانیان',
    code: '636949',
  },
  {
    nickname: 'middle-east',
    name: 'Middle East Bank',
    persianName: 'بانک خاورمیانه',
    code: '585949',
  },
  {
    nickname: 'dey',
    name: 'Dey Bank',
    persianName: 'بانک دی',
    code: '502938',
  },
  {
    nickname: 'resalat',
    name: 'Resalat Bank',
    persianName: 'بانک رسالت',
    code: '504172',
  },
  {
    nickname: 'refah',
    name: 'Refah Bank',
    persianName: 'بانک رفاه کارگران',
    code: '589463',
  },
  {
    nickname: 'saman',
    name: 'Saman Bank',
    persianName: 'بانک سامان',
    code: '621986',
  },
  {
    nickname: 'sepah',
    name: 'Sepah Bank',
    persianName: 'بانک سپه',
    code: '589210',
  },
  {
    nickname: 'sarmayeh',
    name: 'Sarmayeh Bank',
    persianName: 'بانک سرمایه',
    code: '639607',
  },
  {
    nickname: 'sina',
    name: 'Sina Bank',
    persianName: 'بانک سینا',
    code: '639346',
  },
  {
    nickname: 'shahr',
    name: 'City Bank',
    persianName: 'بانک شهر',
    code: '502806',
  },
  {
    nickname: 'shahr',
    name: 'City Bank',
    persianName: 'بانک شهر',
    code: '504706',
  },
  {
    nickname: 'saderat',
    name: 'Saderat Bank',
    persianName: 'بانک صادرات ایران',
    code: '603769',
  },
  {
    nickname: 'saderat',
    name: 'Saderat Bank',
    persianName: 'بانک صادرات ایران',
    code: '903769',
  },
  {
    nickname: 'sanat-o-madan',
    name: 'Sanat O Madan Bank',
    persianName: 'بانک صنعت و معدن',
    code: '627961',
  },
  {
    nickname: 'gharzolhasane-mehr',
    name: 'Gharzolhasaneh Mehr Bank',
    persianName: 'بانک قرض الحسنه مهر',
    code: '639370',
  },
  {
    nickname: 'ghavamin',
    name: 'Ghavamin Bank',
    persianName: 'بانک قوامین',
    code: '639599',
  },
  {
    nickname: 'karafarin',
    name: 'Karafarin Bank',
    persianName: 'بانک کارآفرین',
    code: '627488',
  },
  {
    nickname: 'keshavarzi',
    name: 'Keshavarzi',
    persianName: 'بانک کشاورزی',
    code: '603770',
  },
  {
    nickname: 'keshavarzi',
    name: 'Keshavarzi',
    persianName: 'بانک کشاورزی',
    code: '639217',
  },
  {
    nickname: 'gardeshgari',
    name: 'Gardeshgari',
    persianName: 'بانک گردشگری',
    code: '505416',
  },
  {
    nickname: 'gardeshgari',
    name: 'Gardeshgari',
    persianName: 'بانک گردشگری',
    code: '505426',
  },
  {
    nickname: 'central',
    name: 'Central Bank of Iran',
    persianName: 'بانک مرکزی ایران',
    code: '636797',
  },
  {
    nickname: 'maskan',
    name: 'Maskan Bank',
    persianName: 'بانک مسکن',
    code: '628023',
  },
  {
    nickname: 'mellat',
    name: 'Mellat Bank',
    persianName: 'بانک ملت',
    code: '610433',
  },
  {
    nickname: 'mellat',
    name: 'Mellat Bank',
    persianName: 'بانک ملت',
    code: '991975',
  },
  {
    nickname: 'melli',
    name: 'Melli',
    persianName: 'بانک ملی ایران',
    code: '170019',
  },
  {
    nickname: 'melli',
    name: 'Melli',
    persianName: 'بانک ملی ایران',
    code: '603799',
  },
  {
    nickname: 'mehr-iran',
    name: 'Mehr Iran Bank',
    persianName: 'بانک مهر ایران',
    code: '606373',
  },
  {
    nickname: 'kousar',
    name: 'Kousar Institution',
    persianName: 'موسسه کوثر',
    code: '505801',
  },
  {
    nickname: 'mellal-credit',
    name: 'Mellal Credit Institution',
    persianName: 'موسسه اعتباری ملل',
    code: '606256',
  },
  {
    nickname: 'tose-financial',
    name: 'Tose Financial Institution',
    persianName: '',
    code: '628157',
  },
];
var banksHash = {};
var banksOutput = [];
for (var i = 0; i < banks.length; i++) {
  banksHash[banks[i].code] = banks[i];

  banksOutput.push({
    nickname: banks[i].nickname,
    name: banks[i].name,
    persianName: banks[i].persianName,
    code: banks[i].code,
    accountNumberAvailable: banks[i].accountNumberAvailable,
  });
}

const pattern = /[0-9]{16}/;
const pattern_code = /([0-9]{6})[0-9]{10}/;

module.exports.banks = banksOutput;

/*
function iso7064Mod97_10(card) {
  var remainder = card,
    block;

  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
}
*/

const validate = function(str) {
  str = str.replace(/-/g, '');
  str = str.replace(/ /g, '');

  if (str.length !== 16) {
    return false;
  }

  if (!pattern.test(str)) {
    return false;
  }

  var nCheck = 0,
    bEven = false;
  str = str.replace(/\D/g, '');

  for (var n = str.length - 1; n >= 0; n--) {
    var cDigit = str.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
};

module.exports.isValid = validate;

module.exports.recognize = function(str) {
  str = str.replace(/-/g, '');
  str = str.replace(/ /g, '');

  if (!validate(str)) {
    return false;
  }

  var res = pattern_code.exec(str);
  var code = res[1];
  if (!banksHash[code]) {
    return false;
  }

  var bank = banksHash[code];
  var result = {
    nickname: bank.nickname,
    name: bank.name,
    persianName: bank.persianName,
    code: bank.code,
  };
  if (bank.accountNumberAvailable) {
    var data = bank.process(str);
    result.accountNumber = data.normal;
    result.formattedAccountNumber = data.formatted;
  }
  return result;
};
